"""Gera as chamadas use_figma que publicam o motor no nó lib/LIGA_SOCIAL da página Sistema — Social.

Uso:
  python scripts/publicar.py            # patch se houver cache; senão, publicação completa em partes
  python scripts/publicar.py --full     # força a publicação completa
  python scripts/publicar.py --confirm  # depois que a última chamada devolver a versão esperada

As chamadas são gravadas em scripts/.saida/publicar-<n>.js. Cole cada arquivo, na ordem, como `code`
de uma chamada use_figma no arquivo rbxe2L7fFOqKELar7dZ9zD. Só a última valida a versão.
O cache em scripts/.publicado/LIGA_SOCIAL.js guarda o corpo exato que está no Figma.
"""

from __future__ import annotations

import difflib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / "motor" / "build.js"
NAME = "LIGA_SOCIAL"
SYSTEM_PAGE = "721:2"
CACHE = ROOT / ".publicado" / f"{NAME}.js"
OUT = ROOT / ".saida"
CHUNK = 30000  # caracteres por parte; o limite de uma chamada use_figma é 50 000

OPEN = """const sys = await figma.getNodeByIdAsync('%(page)s');
await figma.setCurrentPageAsync(sys);
await figma.loadFontAsync({ family: 'JetBrains Mono', style: 'Regular' });
let lib = sys.findOne(n => n.type === 'TEXT' && n.name === 'lib/%(name)s');
"""

FIRST = OPEN + """if (!lib) {
  lib = figma.createText(); lib.name = 'lib/%(name)s'; sys.appendChild(lib);
  lib.fontName = { family: 'JetBrains Mono', style: 'Regular' }; lib.fontSize = 4;
  let maxY = 0; for (const c of sys.children) if (c !== lib) maxY = Math.max(maxY, c.y + c.height);
  lib.x = 0; lib.y = maxY + 400; lib.resize(1600, 10); lib.textAutoResize = 'HEIGHT';
}
lib.locked = false; lib.characters = %(chunk)s; lib.locked = true;
%(tail)s"""

NEXT = OPEN + """if (!lib) throw new Error('lib/%(name)s ausente: rode a parte 1 antes');
lib.locked = false; lib.characters = lib.characters + %(chunk)s; lib.locked = true;
%(tail)s"""

VERIFY = """const body = lib.characters; const mod = new Function(body)();
if (!mod || mod.version !== %(version)s) throw new Error('versão inesperada: ' + (mod && mod.version));
let h = 5381; for (let i = 0; i < body.length; i++) h = (h * 33 + body.charCodeAt(i)) >>> 0;
return { id: lib.id, name: lib.name, chars: body.length, version: mod.version, hash: h };"""

PATCH = OPEN + """if (!lib) throw new Error('lib/%(name)s ausente: publique com --full');
let body = lib.characters;
const PATCHES = %(patches)s;
for (const [a, b] of PATCHES) {
  const i = body.indexOf(a);
  if (i < 0 || body.indexOf(a, i + 1) >= 0) throw new Error('patch não aplicável; publique com --full: ' + a.slice(0, 60));
  body = body.slice(0, i) + b + body.slice(i + a.length);
}
const mod = new Function(body)();
if (!mod || mod.version !== %(version)s) throw new Error('versão inesperada: ' + (mod && mod.version));
lib.locked = false; lib.characters = body; lib.locked = true;
let h = 5381; for (let i = 0; i < body.length; i++) h = (h * 33 + body.charCodeAt(i)) >>> 0;
return { id: lib.id, name: lib.name, chars: body.length, version: mod.version, patches: PATCHES.length, hash: h };"""


def checksum(text: str) -> int:
    # djb2 sobre unidades UTF-16, igual ao cálculo feito no Figma
    h = 5381
    data = text.encode("utf-16-le")
    for i in range(0, len(data), 2):
        h = (h * 33 + int.from_bytes(data[i:i + 2], "little")) & 0xFFFFFFFF
    return h


def version_of(source: str) -> str:
    m = re.search(r"version: '([^']+)'", source)
    if not m:
        sys.exit("motor sem `version: '...'`")
    return m.group(1)


def patches(old: str, new: str) -> list[list[str]]:
    a, b = old.splitlines(keepends=True), new.splitlines(keepends=True)
    out = []
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if tag == "equal":
            continue
        ctx = 1
        while True:
            lo, hi = max(0, i1 - ctx), min(len(a), i2 + ctx)
            old_chunk = "".join(a[lo:hi])
            if old_chunk and old.count(old_chunk) == 1:
                break
            ctx += 1
        out.append([old_chunk, "".join(a[lo:i1]) + "".join(b[j1:j2]) + "".join(a[i2:hi])])
    return out


def full_parts(source: str, params: dict) -> list[str]:
    chunks = [source[i:i + CHUNK] for i in range(0, len(source), CHUNK)]
    parts = []
    for k, chunk in enumerate(chunks):
        last = k == len(chunks) - 1
        tail = VERIFY % params if last else "return { parte: %d, de: %d, chars: lib.characters.length };" % (k + 1, len(chunks))
        tpl = FIRST if k == 0 else NEXT
        parts.append(tpl % {**params, "chunk": json.dumps(chunk, ensure_ascii=False), "tail": tail})
    return parts


def main() -> None:
    flags = sys.argv[1:]
    source = SOURCE.read_text(encoding="utf-8")
    if "--confirm" in flags:
        CACHE.parent.mkdir(exist_ok=True)
        CACHE.write_text(source, encoding="utf-8")
        print(f"cache atualizado: {CACHE}")
        return
    params = {"page": SYSTEM_PAGE, "name": NAME, "version": json.dumps(version_of(source))}
    if "--full" in flags or not CACHE.exists():
        parts = full_parts(source, params)
    else:
        ps = patches(CACHE.read_text(encoding="utf-8"), source)
        if not ps:
            sys.exit("nada a publicar: o cache já é igual à fonte")
        parts = [PATCH % {**params, "patches": json.dumps(ps, ensure_ascii=False)}]
        if len(parts[0]) > 48000:
            parts = full_parts(source, params)
    OUT.mkdir(exist_ok=True)
    for old in OUT.glob("publicar-*.js"):
        old.unlink()
    for k, p in enumerate(parts, 1):
        (OUT / f"publicar-{k}.js").write_text(p, encoding="utf-8")
        print(f"{OUT / f'publicar-{k}.js'}  ({len(p)} caracteres)")
    print(f"esperado no Figma: chars={len(source.encode('utf-16-le')) // 2} hash={checksum(source)}")


if __name__ == "__main__":
    main()
