"""Gera o código use_figma que monta um post a partir de um plano JSON.

Uso: python scripts/chamada.py runs/<data>-<slug>/plano.json > chamada.js
O formato vem de plano["formato"] ("carrossel-4x5" ou "stories-9x16").
Cole a saída como `code` de uma chamada use_figma no arquivo rbxe2L7fFOqKELar7dZ9zD.
Pauta, fontes, legenda e textos alternativos ficam no arquivo; só o necessário vai ao Figma.
Imagens {"asset": "nome"} são resolvidas pelo manifesto runs/<slug>/img/imagens.json (nó, crédito e proporção).
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

LIB = "726:2"
TEMPLATE = """const lib = await figma.getNodeByIdAsync('%(lib)s');
if (!lib) throw new Error('motor LIGA_SOCIAL ausente na página Sistema — Social');
const LIGA_SOCIAL = new Function(lib.characters)();
%(cleanup)sreturn await LIGA_SOCIAL.build(%(plan)s);
"""
SO_ARQUIVO = ("pauta", "fontes", "legenda", "hashtags", "checklist")


def resolve_assets(obj, man: dict):
    """Troca {"asset": "nome"} pelo nó, crédito e proporção registrados em img/imagens.json."""
    if isinstance(obj, dict):
        if "asset" in obj:
            e = man.get(obj["asset"])
            if not e or not e.get("node"):
                raise SystemExit(f"imagem '{obj['asset']}' sem nó no Figma: rode imagens.py alvos/enviar antes")
            base = {"node": e["node"], "ratio": e["ratio"]}
            if e.get("credito") and e.get("licenca") not in ("propria", "gerada-ia"):
                base["credito"] = e["credito"]
            obj = {**base, **{k: v for k, v in obj.items() if k != "asset"}}
        return {k: resolve_assets(v, man) for k, v in obj.items()}
    if isinstance(obj, list):
        return [resolve_assets(v, man) for v in obj]
    return obj


def payload(plan: dict, man: dict | None = None) -> tuple[dict, str | None]:
    plan = resolve_assets(json.loads(json.dumps(plan)), man or {})
    for k in SO_ARQUIVO:
        plan.pop(k, None)
    for s in plan.get("slides", []):
        for k in ("alt", "papel", "src", "transicao"):
            s.pop(k, None)
    replace = plan.get("post", {}).pop("substituir", None)
    return plan, replace


def main() -> None:
    path = Path(sys.argv[1])
    mpath = path.parent / "img" / "imagens.json"
    man = json.loads(mpath.read_text(encoding="utf-8"))["imagens"] if mpath.exists() else {}
    plan, replace = payload(json.loads(path.read_text(encoding="utf-8")), man)
    cleanup = ""
    if replace:
        cleanup = "const old = await figma.getNodeByIdAsync('%s'); if (old) old.remove();\n" % replace
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stdout.write(TEMPLATE % {"lib": LIB, "cleanup": cleanup, "plan": json.dumps(plan, ensure_ascii=False)})


if __name__ == "__main__":
    main()
