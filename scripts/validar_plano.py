"""Valida um plano de post antes da montagem no Figma.

Uso: python scripts/validar_plano.py runs/<data>-<slug>/plano.json
Sai com código 1 se houver ERRO. Avisos não bloqueiam, mas devem ser corrigidos ou justificados no mapa.
As regras vêm de research/pesquisa-sistema-conteudo.md (seção 10) e research/pesquisa-sistema-visual.md (seção 3).
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENGINE = ROOT / "motor" / "build.js"

FORMATOS = {"carrossel-4x5", "stories-9x16"}
ARQ_FEED = {"capa", "texto", "statement", "respiro", "numero", "citacao", "cards", "passos", "timeline",
            "comparacao", "mito-fato", "imagem", "grafico", "pergunta", "definicao", "resumo", "fechamento"}
ARQ_STORY = ARQ_FEED | {"interacao", "post"}
FOCO = {"statement", "respiro", "numero", "citacao", "pergunta"}
PAPEIS = {"hook", "contexto", "definicao", "mecanismo", "tensao", "prova", "exemplo", "virada", "impacto",
          "comparacao", "passo", "sintese", "respiro", "cta", "interacao"}
CTA_TIPOS = {"salvar", "compartilhar", "comentar", "comentar-palavra", "seguir", "inscrever", "link", "responder"}
STICKERS = {"enquete", "quiz", "slider", "caixa", "contagem", "link"}
BLOQUEIO_HOOK = ["você não vai acreditar", "chocante", "ninguém te conta", "revolucionári", "incrível", "mudou tudo",
                 "segredo que", "urgente"]
BLOQUEIO_CTA = ["marque 3", "marque três", "marque seus amigos", "marque um amigo"]
PRONOMES_SOLTOS = ("ele ", "ela ", "isso ", "mas ", "então ", "eles ", "elas ")
# palavras por slide (sem nota, fonte e rodapé): [alvo, teto], iguais aos do motor
WORDS = {"feed": {"capa": (18, 24), "miolo": (45, 60), "leve": (15, 20), "citacao": (26, 34), "fechamento": (40, 50)},
         "story": {"capa": (12, 16), "miolo": (18, 25), "leve": (12, 15), "citacao": (20, 28), "fechamento": (18, 25)}}
# só a paleta da Liga: azul 100 a 900 (sem 400 e 700) e Powder
MODOS = {"azul100", "azul200", "azul300", "azul500", "azul600", "azul800", "azul900", "powder"}
ALIAS_MODO = {"claro": "azul100", "navy": "azul800", "escuro": "azul800", "tinta": "azul900", "ink": "azul900"}
OPOSTO = {"azul800": "powder", "azul900": "powder", "azul600": "azul100", "azul500": "azul100",
          "azul300": "azul900", "azul200": "azul800", "azul100": "azul600", "powder": "azul800"}


def modo_norm(m):
    """Normaliza 'Azul 100', 'azul-100', 'azul/100', 'navy'… para o nome canônico (ou devolve o texto original)."""
    if not m:
        return m
    k = re.sub(r"[\s_/-]", "", str(m).lower())
    return ALIAS_MODO.get(k, k)


def modo_erro(m):
    if str(m).lower() == "persian":
        return "o modo 'persian' não existe: a paleta é azul 100 a 900 e Powder (para um azul vivo use azul500 ou azul600)"
    return f"modo {m!r} inválido (use {', '.join(sorted(MODOS))})"
FORMAS = {"aro", "circulos", "pontos", "faixa", "quadrados", "abertura", "meio", "nenhuma"}
POSICOES = {"dd", "de", "ed", "ee"}
VARIANTES_CITACAO = {"aspas", "cartao", "balao"}
REQUIRED = {
    "capa": ["hook"], "texto": ["titulo"], "statement": ["texto"], "respiro": ["texto"], "numero": ["valor"],
    "citacao": ["texto", "autor"], "cards": ["itens"], "passos": ["itens"], "timeline": ["itens"],
    "comparacao": ["a", "b"], "mito-fato": ["mito", "fato"], "imagem": ["imagem"], "grafico": ["titulo", "barras"],
    "pergunta": ["pergunta"], "definicao": ["termo", "definicao"], "resumo": ["itens"], "fechamento": ["titulo"],
    "interacao": ["sticker", "titulo"], "post": ["titulo", "origem"],
}
TEXT_KEYS = ("eyebrow", "titulo", "corpo", "hook", "apoio", "texto", "valor", "rotulo", "mito", "fato", "explicacao",
             "pergunta", "termo", "definicao", "exemplo", "legenda", "veredito", "autor", "cargo", "cta", "instrucao")


def words(s: str) -> int:
    return len([w for w in re.sub(r"[*=]", "", str(s)).split() if re.search(r"\w", w)])


def icons() -> set[str]:
    m = re.search(r"const ICONS = (\{.*?\});\n", ENGINE.read_text(encoding="utf-8"))
    return set(json.loads(m.group(1))) if m else set()


def slide_words(s: dict) -> int:
    n = sum(words(s[k]) for k in TEXT_KEYS if isinstance(s.get(k), str))
    for k in ("destaque",):
        if isinstance(s.get(k), dict):
            n += words(s[k].get("eyebrow", "")) + words(s[k].get("texto", ""))
    for side in ("a", "b"):
        if isinstance(s.get(side), dict):
            n += words(s[side].get("rotulo", "")) + words(s[side].get("texto", "")) + sum(words(i) for i in s[side].get("itens", []))
    for it in s.get("itens", []) or []:
        n += words(it) if isinstance(it, str) else sum(words(it.get(k, "")) for k in ("marca", "titulo", "texto"))
    for b in s.get("barras", []) or []:
        n += words(b.get("rotulo", "")) + 1
    return n


def all_text(obj) -> list[str]:
    out = []
    if isinstance(obj, str):
        out.append(obj)
    elif isinstance(obj, dict):
        for k, v in obj.items():
            if k not in ("node", "hash", "origem", "url", "pageId", "substituir"):
                out += all_text(v)
    elif isinstance(obj, list):
        for v in obj:
            out += all_text(v)
    return out


def check_images(S: list, man: dict, E: list, W: list) -> None:
    """Imagens do plano: {"asset": nome} precisa estar no manifesto, com uso 'post' e crédito quando for de terceiros."""
    def walk(obj, tag):
        if isinstance(obj, dict):
            if "asset" in obj:
                e = man.get(obj["asset"])
                if not e:
                    E.append(f"{tag}: imagem '{obj['asset']}' não está em img/imagens.json (use scripts/imagens.py)")
                else:
                    if e.get("uso") != "post" or e.get("licenca") == "referencia":
                        E.append(f"{tag}: '{obj['asset']}' é só referência; não pode ir para o post")
                    if not e.get("credito") and e.get("licenca") not in ("propria", "gerada-ia"):
                        E.append(f"{tag}: '{obj['asset']}' de terceiros sem crédito")
                    if not e.get("node"):
                        W.append(f"{tag}: '{obj['asset']}' ainda não foi enviada ao Figma (imagens.py alvos + upload_assets + enviar)")
            elif "node" in obj and not obj.get("credito") and not obj.get("sem_credito"):
                W.append(f"{tag}: imagem por nó sem 'credito'; se for de terceiros, informe o crédito (ou 'sem_credito': true)")
            for v in obj.values():
                walk(v, tag)
        elif isinstance(obj, list):
            for v in obj:
                walk(v, tag)
    for i, s in enumerate(S, 1):
        walk({k: v for k, v in s.items() if k in ("imagem", "foto")}, f"slide {i} ({s.get('t')})")


def validate(plan: dict, man: dict | None = None) -> tuple[list[str], list[str]]:
    E: list[str] = []
    W: list[str] = []
    fmt = plan.get("formato")
    if fmt not in FORMATOS:
        return [f"formato inválido: {fmt!r} (use {sorted(FORMATOS)})"], []
    feed = fmt == "carrossel-4x5"
    F = "feed" if feed else "story"
    post = plan.get("post", {})
    for k in ("titulo", "serie"):
        if not post.get(k):
            E.append(f"post.{k} ausente")
    if post.get("serie") not in (None, "news", "liga"):
        E.append("post.serie deve ser 'news' ou 'liga'")
    if post.get("modo") and modo_norm(post["modo"]) not in MODOS:
        E.append("post." + modo_erro(post["modo"]))

    # pauta
    pauta = plan.get("pauta") or {}
    for k in ("tema", "publico", "objetivo", "angulo", "arco", "promessa", "cta_tipo"):
        if not pauta.get(k):
            E.append(f"pauta.{k} ausente (veja shared/pauta.md)")
    arco = str(pauta.get("arco", ""))
    if feed and arco and not re.fullmatch(r"A([1-9]|1[0-6])", arco):
        E.append(f"pauta.arco {arco!r} fora do catálogo A1–A16 (shared/narrativa.md)")
    if not feed and arco and not re.fullmatch(r"S[1-8]", arco):
        E.append(f"pauta.arco {arco!r} fora do catálogo S1–S8 (shared/narrativa.md)")
    if feed and not re.fullmatch(r"H([1-9]|1[0-3])", str(pauta.get("hook_tipo", ""))):
        E.append("pauta.hook_tipo deve ser H1–H13 (shared/narrativa.md)")
    if pauta.get("cta_tipo") and pauta["cta_tipo"] not in CTA_TIPOS:
        E.append(f"pauta.cta_tipo inválido: {pauta['cta_tipo']!r}")
    outs = pauta.get("outliers", [])
    for i, o in enumerate(outs):
        for k in ("ref", "mecanismo"):
            if not o.get(k):
                E.append(f"pauta.outliers[{i}].{k} ausente")
        if len(o.get("eixos_diferentes", [])) < 2:
            E.append(f"pauta.outliers[{i}]: diferir do original em pelo menos 2 eixos (regra de não cópia)")
    if outs and not pauta.get("contribuicao_original"):
        E.append("pauta.contribuicao_original ausente: o post precisa de um elemento original da Liga")

    # slides
    S = plan.get("slides") or []
    n = len(S)
    if feed:
        if not 5 <= n <= 12:
            E.append(f"carrossel com {n} slides (permitido 5 a 12)")
        elif not 7 <= n <= 10:
            W.append(f"carrossel com {n} slides (padrão 7 a 10; use 5–6 só para ideia simples)")
    elif not 3 <= n <= 7:
        E.append(f"sequência de stories com {n} cartões (permitido 3 a 7)")
    allowed = ARQ_FEED if feed else ARQ_STORY
    ics = icons()
    if n:
        if S[0].get("t") != "capa":
            E.append("slide 1 deve ser 'capa'")
        if feed and S[-1].get("t") != "fechamento":
            E.append("último slide do carrossel deve ser 'fechamento'")
    for i, s in enumerate(S, 1):
        t = s.get("t")
        tag = f"slide {i} ({t})"
        if t not in allowed:
            E.append(f"{tag}: arquétipo desconhecido para {fmt}")
            continue
        for k in REQUIRED.get(t, []):
            if not s.get(k):
                E.append(f"{tag}: campo obrigatório '{k}' ausente")
        if feed and s.get("papel") not in PAPEIS:
            E.append(f"{tag}: 'papel' ausente ou fora da lista ({', '.join(sorted(PAPEIS))})")
        if s.get("cta") and i != n and not (not feed and i == n - 1):
            E.append(f"{tag}: CTA só no último slide")
        if feed and not s.get("alt"):
            W.append(f"{tag}: texto alternativo ('alt') ausente")
        elif s.get("alt") and len(s["alt"]) < 40:
            W.append(f"{tag}: 'alt' curto demais (mín. 40 caracteres)")
        for it in (s.get("itens") or []):
            if isinstance(it, dict) and it.get("icone") and ics and it["icone"] not in ics:
                E.append(f"{tag}: ícone desconhecido {it['icone']!r} (lista em carrossel-4x5/FORMAT.md)")
        if t in ("cards",):
            k = len(s.get("itens", []))
            if not 2 <= k <= 4:
                E.append(f"{tag}: cards com {k} itens (2 a 4)")
            elif k == 4 and s.get("variante", "lista") == "lista":
                W.append(f"{tag}: 4 cards em lista ficam densos; use variante 'grade' ou 3 itens")
        if t == "passos" and not 3 <= len(s.get("itens", [])) <= 5:
            E.append(f"{tag}: passos com {len(s.get('itens', []))} itens (3 a 5)")
        if t == "timeline" and not 3 <= len(s.get("itens", [])) <= 5:
            E.append(f"{tag}: linha do tempo com {len(s.get('itens', []))} marcos (3 a 5)")
        if t == "grafico":
            nb = len(s.get("barras", []))
            if nb > (5 if feed else 6):
                E.append(f"{tag}: {nb} barras (máx. {5 if feed else 6})")
            if not s.get("fonte"):
                E.append(f"{tag}: gráfico sem fonte")
        if t == "numero" and not s.get("fonte") and not s.get("proprio"):
            E.append(f"{tag}: número sem fonte (ou marque 'proprio': true se o dado é da Liga)")
        visivel = json.dumps({k: v for k, v in s.items() if k not in ("alt", "src", "papel", "_w")}, ensure_ascii=False).lower()
        if s.get("papel") == "exemplo" and not s.get("real") and "ilustrativ" not in visivel:
            E.append(f"{tag}: exemplo fictício precisa do rótulo 'exemplo ilustrativo' (ou 'real': true)")
        if s.get("papel") == "prova" and not (s.get("src") or s.get("fonte")):
            W.append(f"{tag}: slide de prova sem 'src' ou 'fonte'")
        if s.get("sticker"):
            if feed:
                E.append(f"{tag}: sticker só existe em stories")
            elif s["sticker"] not in STICKERS:
                E.append(f"{tag}: sticker inválido {s['sticker']!r}")
            elif s["sticker"] == "link" and i < n - 1:
                E.append(f"{tag}: sticker de link só no último ou penúltimo cartão")
            elif s["sticker"] == "contagem" and not s.get("data"):
                E.append(f"{tag}: contagem regressiva exige 'data' real")
        # fundo, forma e citação
        for campo in ("modo",):
            if s.get(campo) and modo_norm(s[campo]) not in MODOS:
                E.append(f"{tag}: {modo_erro(s[campo])}")
        if s.get("forma") and s["forma"] not in FORMAS:
            E.append(f"{tag}: forma {s['forma']!r} inválida (use {', '.join(sorted(FORMAS - {'nenhuma'}))} ou 'nenhuma')")
        if s.get("pos") and s["pos"] not in POSICOES:
            E.append(f"{tag}: pos {s['pos']!r} inválido (use {', '.join(sorted(POSICOES))})")
        if t == "citacao":
            if s.get("variante", "aspas") not in VARIANTES_CITACAO:
                E.append(f"{tag}: variante {s['variante']!r} inválida (use {', '.join(sorted(VARIANTES_CITACAO))})")
            visivel_c = json.dumps({k: v for k, v in s.items() if k not in ("alt", "papel", "_w")}, ensure_ascii=False).lower()
            if not (s.get("src") or s.get("fonte")) and "ilustrativ" not in visivel_c:
                E.append(f"{tag}: citação sem fonte ('src' ou 'fonte'); não invente falas (ou rotule como 'exemplo ilustrativo')")
            if words(s.get("texto", "")) > 30:
                W.append(f"{tag}: citação com mais de 30 palavras; edite ou use reticências entre colchetes")
        # palavras
        cls = "capa" if i == 1 else "fechamento" if t == "fechamento" else "citacao" if t == "citacao" else "leve" if t in FOCO else "miolo"
        alvo, teto = WORDS[F][cls]
        w = slide_words(s)
        if w > teto:
            E.append(f"{tag}: {w} palavras (teto {teto} para {cls})")
        elif w > alvo:
            W.append(f"{tag}: {w} palavras (alvo {alvo} para {cls})")
        s["_w"] = w

    check_images(S, man or {}, E, W)

    # variedade de fundos (o post não precisa ser todo da mesma cor)
    base = modo_norm(post.get("modo") or "azul800")
    efetivos = []
    for i, s in enumerate(S, 1):
        m = modo_norm(s.get("modo"))
        if not m and s.get("t") == "respiro":
            m = OPOSTO.get(base, "powder")
        if s.get("t") == "capa" and s.get("variante") == "imagem":
            m = "azul800"
        efetivos.append(m or base)
    distintos = set(efetivos)
    if feed and n >= 7 and len(distintos) < 2:
        W.append(f"todos os {n} slides no mesmo fundo ({base}); varie em pelo menos 2 fundos (respiro, número, citação e fechamento são bons lugares)")
    if len(distintos) > 4:
        W.append(f"{len(distintos)} fundos diferentes no mesmo post; use no máximo 4 para manter o reconhecimento")
    seguidas = [s.get("forma") for s in S]
    for i in range(1, n):
        if seguidas[i] and seguidas[i] != "nenhuma" and seguidas[i] == seguidas[i - 1]:
            W.append(f"slides {i}–{i + 1}: a mesma forma decorativa ({seguidas[i]}) em sequência")

    # hook
    if n and S[0].get("hook"):
        hk = re.sub(r"[*=]", "", S[0]["hook"]).replace("\n", " ")
        lim_w, lim_c = (12, 70) if feed else (8, 44)
        if words(hk) > lim_w or len(hk) > lim_c:
            E.append(f"hook com {words(hk)} palavras e {len(hk)} caracteres (máx. {lim_w} e {lim_c})")
        low = hk.lower()
        for b in BLOQUEIO_HOOK:
            if b in low:
                E.append(f"hook usa expressão bloqueada: {b!r}")
        if len(hk) > 8 and hk.upper() == hk:
            E.append("hook todo em caixa-alta")
    if feed and n > 1:
        first = str(S[1].get("titulo") or S[1].get("texto") or "").lower()
        if first.startswith(PRONOMES_SOLTOS):
            E.append("slide 2 precisa se entender sozinho: não comece com pronome ou conjunção solta")

    # ritmo (feed)
    if feed and n >= 3:
        ts = [s.get("t") for s in S]
        run = 1
        for i in range(1, n):
            if ts[i] == ts[i - 1]:
                run += 1
                if ts[i] in FOCO:
                    W.append(f"slides {i}–{i + 1}: dois '{ts[i]}' seguidos (arquétipos de foco não se repetem)")
                if run > 2 and arco not in ("A4", "A7", "A12"):
                    E.append(f"slides {i - 1}–{i + 1}: '{ts[i]}' três vezes seguidas")
            else:
                run = 1
        if n >= 8 and len(set(ts[1:-1])) < 4:
            W.append(f"miolo com {len(set(ts[1:-1]))} arquétipos distintos (mín. 4 em 8+ slides)")
        dense = 0
        for i, s in enumerate(S[1:-1], 2):
            dense = dense + 1 if s.get("_w", 0) > 35 else 0
            if dense > 2:
                W.append(f"slide {i}: três slides densos (>35 palavras) seguidos; insira um slide leve")
        for i, s in enumerate(S, 1):
            if s.get("t") == "respiro" and i in (2, n - 1, n):
                W.append(f"slide {i}: respiro não entra no slide 2, no penúltimo nem no último")
        if n >= 6:
            papeis = {s.get("papel") for s in S}
            for p in ("exemplo", "prova"):
                if p not in papeis:
                    W.append(f"nenhum slide com papel '{p}' (recomendado a partir de 6 slides)")

    # nome da Liga e CTA
    for txt in all_text({"slides": S, "legenda": plan.get("legenda"), "post": post}):
        if re.search(r"\bLIA\b", txt):
            E.append(f"nunca use 'LIA' para a Liga: {txt[:60]!r}")
        low = txt.lower()
        for b in BLOQUEIO_CTA:
            if b in low:
                E.append(f"CTA de marcar amigos não é recomendado: {txt[:60]!r}")
    ctas = [s for s in S if s.get("cta") or s.get("sticker") == "link"]
    if len(ctas) > 1:
        E.append(f"{len(ctas)} CTAs no post (um só)")

    # legenda (feed)
    if feed:
        leg = plan.get("legenda") or {}
        txt = leg.get("texto", "")
        if not txt:
            E.append("legenda.texto ausente")
        else:
            wl = words(txt)
            if not 30 <= wl <= 80:
                W.append(f"legenda com {wl} palavras (alvo 30 a 80)")
            if len(txt.split("\n")[0]) > 125 and len(txt.split(". ")[0]) > 125:
                W.append("primeira frase da legenda passa de 125 caracteres (corte do 'mais')")
        hs = leg.get("hashtags", [])
        if len(hs) > 5:
            E.append(f"{len(hs)} hashtags (máx. 5)")
        elif len(hs) < 3:
            W.append(f"{len(hs)} hashtags (alvo 3 a 5)")
    return E, W


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    path = Path(sys.argv[1])
    plan = json.loads(path.read_text(encoding="utf-8"))
    mpath = path.parent / "img" / "imagens.json"
    man = json.loads(mpath.read_text(encoding="utf-8"))["imagens"] if mpath.exists() else {}
    E, W = validate(plan, man)
    for e in E:
        print("ERRO   ", e)
    for w in W:
        print("AVISO  ", w)
    print(f"\n{len(E)} erro(s), {len(W)} aviso(s) — {path}")
    sys.exit(1 if E else 0)


if __name__ == "__main__":
    main()
