"""Outliers: calcula o score de posts de um perfil e cria fichas de desmontagem no acervo.

Uso:
  python scripts/outlier.py score perfil.csv [--metrica curtidas] [--min 3]
      CSV com colunas: post,data,formato,curtidas,comentarios[,views]
      Para cada post, score = métrica ÷ mediana dos 12 a 30 posts anteriores do mesmo formato
      (sem o próprio post). Lista os candidatos com score ≥ --min (padrão 3).
  python scripts/outlier.py ficha <slug> [--ref URL]
      Cria acervo/outliers/<slug>.json com os campos da ficha (shared/outliers.md).
"""

from __future__ import annotations

import csv
import json
import statistics
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

ACERVO = Path(__file__).resolve().parent.parent / "acervo" / "outliers"
JANELA = (12, 30)
FICHA = {
    "ref": "", "autor": "", "data_coleta": "", "formato": "", "score": None, "metrica": "", "base": None,
    "tema": "", "gatilho": "", "angulo": "", "hook": {"tipo": "", "texto": "", "palavras": None},
    "arco": "", "slides": None, "prova": "", "emocao": "", "cta": "", "causa_distribuicao": "",
    "mecanismo": "", "adaptar": "", "nao_adaptar": "", "aprovado_por": "",
}


def parse_date(s: str) -> date:
    return datetime.strptime(s.strip()[:10], "%Y-%m-%d").date()


def scores(rows: list[dict], metric: str, hoje: date | None = None) -> list[dict]:
    hoje = hoje or date.today()
    rows = sorted(rows, key=lambda r: r["data"])
    out = []
    for i, r in enumerate(rows):
        if (hoje - parse_date(r["data"])) < timedelta(days=7):
            continue  # ainda acumulando
        prev = [float(x[metric]) for x in rows[:i] if x["formato"] == r["formato"] and x.get(metric) not in (None, "")]
        prev = prev[-JANELA[1]:]
        if len(prev) < JANELA[0]:
            continue
        med = statistics.median(prev)
        if med <= 0:
            continue
        out.append({"post": r["post"], "data": r["data"], "formato": r["formato"], "valor": float(r[metric]),
                    "mediana": med, "base": len(prev), "score": round(float(r[metric]) / med, 2)})
    return out


def classe(score: float) -> str:
    return "excepcional" if score >= 10 else "forte" if score >= 5 else "candidato" if score >= 3 else ""


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    args = sys.argv[1:]
    if not args or args[0] not in ("score", "ficha"):
        sys.exit(__doc__)
    if args[0] == "score":
        metric = args[args.index("--metrica") + 1] if "--metrica" in args else "curtidas"
        minimo = float(args[args.index("--min") + 1]) if "--min" in args else 3.0
        rows = list(csv.DictReader(open(args[1], encoding="utf-8-sig")))
        res = [r for r in scores(rows, metric) if r["score"] >= minimo]
        if not res:
            print(f"nenhum post com score ≥ {minimo} em '{metric}' (base mínima de {JANELA[0]} posts do mesmo formato)")
        for r in sorted(res, key=lambda r: -r["score"]):
            print(f"{r['score']:>6}×  {classe(r['score']):<12} {r['data']}  {r['formato']:<10} {r['post']}  ({metric} {r['valor']:.0f} vs mediana {r['mediana']:.0f}, base {r['base']})")
        return
    slug = args[1]
    ACERVO.mkdir(parents=True, exist_ok=True)
    path = ACERVO / f"{slug}.json"
    if path.exists():
        sys.exit(f"já existe: {path}")
    ficha = dict(FICHA, data_coleta=date.today().isoformat())
    if "--ref" in args:
        ficha["ref"] = args[args.index("--ref") + 1]
    path.write_text(json.dumps(ficha, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"ficha criada: {path}")


if __name__ == "__main__":
    main()
