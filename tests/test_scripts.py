"""Testes dos scripts da Social Design. Rode: python -m unittest discover -s tests"""

from __future__ import annotations

import copy
import json
import sys
import unittest
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

import chamada  # noqa: E402
import outlier  # noqa: E402
import publicar  # noqa: E402
import validar_plano  # noqa: E402

FEED = json.loads((ROOT / "carrossel-4x5" / "exemplo-plano.json").read_text(encoding="utf-8"))
STORY = json.loads((ROOT / "stories-9x16" / "exemplo-plano.json").read_text(encoding="utf-8"))


def errors(plan: dict) -> list[str]:
    return validar_plano.validate(copy.deepcopy(plan))[0]


class ExemplosValidam(unittest.TestCase):
    def test_carrossel_exemplo_sem_erro(self):
        self.assertEqual(errors(FEED), [])

    def test_stories_exemplo_sem_erro(self):
        self.assertEqual(errors(STORY), [])


class RegrasDoValidador(unittest.TestCase):
    def test_bloqueia_lia(self):
        p = copy.deepcopy(FEED); p["slides"][1]["corpo"] = "A LIA explica."
        self.assertTrue(any("LIA" in e for e in errors(p)))

    def test_hook_longo(self):
        p = copy.deepcopy(FEED); p["slides"][0]["hook"] = "um dois três quatro cinco seis sete oito nove dez onze doze treze"
        self.assertTrue(any("hook com" in e for e in errors(p)))

    def test_hook_bloqueado(self):
        p = copy.deepcopy(FEED); p["slides"][0]["hook"] = "Você não vai acreditar na OpenAI"
        self.assertTrue(any("bloqueada" in e for e in errors(p)))

    def test_cta_fora_do_ultimo(self):
        p = copy.deepcopy(FEED); p["slides"][2]["cta"] = "Salve"
        self.assertTrue(any("CTA só no último" in e for e in errors(p)))

    def test_capa_e_fechamento(self):
        p = copy.deepcopy(FEED); p["slides"][0]["t"] = "texto"; p["slides"][0]["titulo"] = "x"
        self.assertTrue(any("slide 1 deve ser 'capa'" in e for e in errors(p)))

    def test_tres_iguais_seguidos(self):
        p = copy.deepcopy(FEED)
        p["slides"][4] = copy.deepcopy(p["slides"][5]); p["slides"][4]["papel"] = "impacto"
        self.assertTrue(any("três vezes seguidas" in e for e in errors(p)))

    def test_exemplo_ficticio_rotulado(self):
        p = copy.deepcopy(FEED); p["slides"][4].pop("nota")
        self.assertTrue(any("exemplo ilustrativo" in e for e in errors(p)))

    def test_icone_desconhecido(self):
        p = copy.deepcopy(FEED); p["slides"][5]["itens"][0]["icone"] = "inexistente"
        self.assertTrue(any("ícone desconhecido" in e for e in errors(p)))

    def test_outlier_exige_nao_copia(self):
        p = copy.deepcopy(FEED); p["pauta"]["outliers"] = [{"ref": "x", "mecanismo": "y", "eixos_diferentes": ["tema"]}]
        p["pauta"].pop("contribuicao_original")
        es = errors(p)
        self.assertTrue(any("2 eixos" in e for e in es))
        self.assertTrue(any("contribuicao_original" in e for e in es))

    def test_hashtags(self):
        p = copy.deepcopy(FEED); p["legenda"]["hashtags"] = [f"#t{i}" for i in range(6)]
        self.assertTrue(any("hashtags" in e for e in errors(p)))

    def test_link_no_inicio_dos_stories(self):
        p = copy.deepcopy(STORY); p["slides"][1]["sticker"] = "link"
        self.assertTrue(any("link só no último" in e for e in errors(p)))

    def test_contagem_sem_data(self):
        p = copy.deepcopy(STORY); p["slides"][2]["sticker"] = "contagem"
        self.assertTrue(any("contagem regressiva exige" in e for e in errors(p)))

    def test_numero_sem_fonte(self):
        p = copy.deepcopy(FEED); p["slides"][3] = {"t": "numero", "papel": "prova", "valor": "73%", "alt": "x" * 40}
        self.assertTrue(any("número sem fonte" in e for e in errors(p)))


class Chamada(unittest.TestCase):
    def test_tira_campos_de_arquivo(self):
        plan, replace = chamada.payload(dict(FEED, post=dict(FEED["post"], substituir="1:2")))
        self.assertEqual(replace, "1:2")
        self.assertNotIn("pauta", plan)
        self.assertNotIn("legenda", plan)
        self.assertNotIn("alt", plan["slides"][0])
        self.assertNotIn("papel", plan["slides"][0])
        self.assertNotIn("substituir", plan["post"])


class Publicar(unittest.TestCase):
    def test_partes_cabem_no_limite(self):
        src = (ROOT / "motor" / "build.js").read_text(encoding="utf-8")
        parts = publicar.full_parts(src, {"page": "721:2", "name": "LIGA_SOCIAL", "version": '"x"'})
        self.assertTrue(all(len(p) < 50000 for p in parts))

    def test_checksum_igual_ao_js(self):
        # valor calculado pelo mesmo djb2 no Figma
        self.assertEqual(publicar.checksum("abc"), ((5381 * 33 + 97) * 33 + 98) * 33 + 99 & 0xFFFFFFFF)

    def test_patch_reconstroi(self):
        old, new = "a\nb\nc\n", "a\nB\nc\n"
        body = old
        for a, b in publicar.patches(old, new):
            body = body.replace(a, b, 1)
        self.assertEqual(body, new)


class Outliers(unittest.TestCase):
    def test_score_mediana(self):
        rows = [{"post": f"p{i}", "data": f"2026-01-{i + 1:02d}", "formato": "carrossel", "curtidas": "100"} for i in range(15)]
        rows.append({"post": "viral", "data": "2026-01-20", "formato": "carrossel", "curtidas": "600"})
        res = outlier.scores(rows, "curtidas", hoje=date(2026, 3, 1))
        viral = [r for r in res if r["post"] == "viral"][0]
        self.assertEqual(viral["score"], 6.0)
        self.assertEqual(outlier.classe(viral["score"]), "forte")

    def test_ignora_formato_diferente_e_posts_recentes(self):
        rows = [{"post": f"p{i}", "data": f"2026-01-{i + 1:02d}", "formato": "reel", "curtidas": "100"} for i in range(15)]
        rows.append({"post": "c", "data": "2026-01-20", "formato": "carrossel", "curtidas": "600"})
        self.assertEqual([r for r in outlier.scores(rows, "curtidas", hoje=date(2026, 3, 1)) if r["post"] == "c"], [])
        self.assertEqual(outlier.scores(rows, "curtidas", hoje=date(2026, 1, 18)), [r for r in outlier.scores(rows, "curtidas", hoje=date(2026, 1, 18)) if r["data"] <= "2026-01-11"])


if __name__ == "__main__":
    unittest.main()


import io  # noqa: E402
import tempfile  # noqa: E402
from unittest import mock  # noqa: E402

import imagens  # noqa: E402


def png_bytes(w=40, h=20, alpha=False):
    from PIL import Image
    buf = io.BytesIO()
    Image.new("RGBA" if alpha else "RGB", (w, h), (10, 20, 30, 0) if alpha else (10, 20, 30)).save(buf, "PNG")
    return buf.getvalue()


class Imagens(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.run = Path(self.tmp.name) / "runs" / "2026-10-04-x"

    def tearDown(self):
        self.tmp.cleanup()

    def test_registra_com_procedencia(self):
        e = imagens.register(self.run, "grafico", png_bytes(), {"credito": "Anthropic", "uso": "post", "licenca": "oficial", "url": "u"})
        self.assertEqual((e["largura"], e["altura"], e["ratio"]), (40, 20, 2.0))
        self.assertTrue(e["arquivo"].endswith(".jpg"))
        self.assertIn("grafico", imagens.load(self.run)["imagens"])

    def test_transparencia_vira_png(self):
        e = imagens.register(self.run, "mascote", png_bytes(alpha=True), {"credito": "", "uso": "post", "licenca": "propria"})
        self.assertTrue(e["arquivo"].endswith(".png"))

    def test_terceiro_sem_credito_bloqueia(self):
        with self.assertRaises(SystemExit):
            imagens.register(self.run, "x1", png_bytes(), {"credito": "", "uso": "post", "licenca": "oficial"})

    def test_referencia_nao_vai_ao_post(self):
        with self.assertRaises(SystemExit):
            imagens.register(self.run, "x2", png_bytes(), {"credito": "a", "uso": "post", "licenca": "referencia"})

    def test_nao_imagem_bloqueia(self):
        with self.assertRaises(SystemExit):
            imagens.register(self.run, "x3", b"<html>nope</html>", {"credito": "a", "uso": "post", "licenca": "oficial"})

    def test_reduz_lado_maior(self):
        e = imagens.register(self.run, "grande", png_bytes(4000, 1000), {"credito": "a", "uso": "post", "licenca": "oficial"})
        self.assertEqual(e["largura"], 2160)

    def test_candidatas_le_meta_e_srcset(self):
        page = b'''<html><head><meta property="og:site_name" content="Anthropic"><meta property="og:image" content="/og.png"></head>
        <body><img alt="chart" src="/a-small.png" srcset="/a-1x.png 800w, /a-2x.png 1600w"><video poster="/p.jpg"></video></body></html>'''
        with mock.patch.object(imagens, "fetch", return_value=(page, "text/html")):
            c = imagens.candidatas("https://x.com/news/post")
        urls = [i["url"] for i in c]
        self.assertEqual(urls[0], "https://x.com/og.png")
        self.assertIn("https://x.com/a-2x.png", urls)
        self.assertIn("https://x.com/p.jpg", urls)
        self.assertEqual(c[0]["credito_sugerido"], "Anthropic")


class ImagensNoPlano(unittest.TestCase):
    MAN = {"graf": {"node": "1:2", "ratio": 1.5, "credito": "Anthropic", "uso": "post", "licenca": "oficial"},
           "ref": {"node": "1:3", "ratio": 1, "credito": "x", "uso": "referencia", "licenca": "referencia"},
           "nossa": {"node": "1:4", "ratio": 1, "credito": "", "uso": "post", "licenca": "propria"}}

    def test_chamada_resolve_asset(self):
        plan = {"formato": "carrossel-4x5", "post": {}, "slides": [{"t": "imagem", "imagem": {"asset": "graf", "ajuste": "fit"}},
                                                                   {"t": "imagem", "imagem": {"asset": "nossa"}}]}
        out, _ = chamada.payload(plan, self.MAN)
        self.assertEqual(out["slides"][0]["imagem"], {"node": "1:2", "ratio": 1.5, "credito": "Anthropic", "ajuste": "fit"})
        self.assertNotIn("credito", out["slides"][1]["imagem"])

    def test_chamada_sem_no_falha(self):
        with self.assertRaises(SystemExit):
            chamada.payload({"slides": [{"t": "imagem", "imagem": {"asset": "nada"}}]}, self.MAN)

    def test_validador_bloqueia_referencia(self):
        p = copy.deepcopy(FEED); p["slides"][2]["imagem"] = {"asset": "ref"}
        E, _ = validar_plano.validate(p, self.MAN)
        self.assertTrue(any("só referência" in e for e in E))

    def test_validador_asset_desconhecido(self):
        p = copy.deepcopy(FEED); p["slides"][2]["imagem"] = {"asset": "sumiu"}
        E, _ = validar_plano.validate(p, self.MAN)
        self.assertTrue(any("não está em img/imagens.json" in e for e in E))
