"""Imagens de fora: pesquisar, baixar, capturar páginas e registrar a procedência para usar no post.

Uso (rode da pasta da skill):
  python scripts/imagens.py candidatas <url-da-página>
      Lista as imagens de uma página (og:image, twitter:image, <img>, poster de vídeo), maiores primeiro,
      com o crédito sugerido (nome do site).
  python scripts/imagens.py commons "<busca>" [--n 8]
      Busca no Wikimedia Commons e mostra licença e autor de cada arquivo (reuso livre com crédito).
  python scripts/imagens.py baixar <url-da-imagem> --run <pasta> --nome <chave> --credito "<quem>"
                                   [--origem <página>] [--licenca <tipo>] [--uso post|referencia]
      Baixa, confere que é imagem, converte para PNG ou JPEG, limita a 2160 px no lado maior e registra.
  python scripts/imagens.py capturar <url-da-página> --run <pasta> --nome <chave> --credito "<quem>"
                                   [--largura 1280] [--altura 1600] [--escala 2] [--recorte x,y,l,a] [--espera 10]
      Print real da página com o Edge/Chrome headless; o recorte é em px da página (antes da escala).
  python scripts/imagens.py lista <pasta>
      Mostra o manifesto da pasta.
  python scripts/imagens.py alvos <pasta> <slug>
      Gera o código use_figma que cria, na página "Assets — Social", um retângulo-alvo por imagem de uso
      'post' ainda sem nó. Depois: upload_assets com nodeIds = ids devolvidos, e `enviar`.
  python scripts/imagens.py enviar <pasta> <nome>=<upload-url> [...]
      Envia os bytes de cada imagem para a URL devolvida pelo upload_assets e grava o nó e o hash no manifesto.
  python scripts/imagens.py registrar <pasta> <nome>=<node-id> [...]
      Grava o nó do Figma no manifesto; o plano passa a usar {"asset": "<nome>"}.

<pasta> é runs/<data>-<slug> (imagens do post) ou acervo/referencias/<slug> (só referência, nunca publicada).
Licenças: oficial (material de imprensa ou página oficial), captura (print de página ou produto),
cc (Creative Commons; informe qual), dominio-publico, propria (feita pela Liga), gerada-ia, referencia (sem direito de uso).
"""

from __future__ import annotations

import hashlib
import html
import io
import json
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
MAX_BYTES = 25 * 1024 * 1024
MAX_LADO = 2160
LICENCAS = {"oficial", "captura", "cc", "dominio-publico", "propria", "gerada-ia", "referencia"}
BROWSERS = [r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Google\Chrome\Application\chrome.exe"]


def opt(args: list[str], name: str, default=None):
    return args[args.index(name) + 1] if name in args else default


def fetch(url: str, limit: int = MAX_BYTES) -> tuple[bytes, str]:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read(limit + 1)
        if len(data) > limit:
            raise SystemExit(f"arquivo maior que {limit // 1024 // 1024} MB: {url}")
        return data, r.headers.get("Content-Type", "")


# ---------- descoberta ----------
def candidatas(page_url: str) -> list[dict]:
    raw, _ = fetch(page_url, 8 * 1024 * 1024)
    doc = raw.decode("utf-8", "replace")
    out, seen = [], set()

    def add(src: str, kind: str, alt: str = "", w: int = 0):
        if not src or src.startswith("data:"):
            return
        u = urllib.parse.urljoin(page_url, html.unescape(src.strip()))
        if u in seen or re.search(r"\.(svg|ico)(\?|$)", u, re.I):
            return
        seen.add(u)
        out.append({"url": u, "tipo": kind, "alt": alt[:90], "largura": w})

    for prop in ("og:image", "og:image:url", "twitter:image", "twitter:image:src"):
        for m in re.finditer(r'<meta[^>]+(?:property|name)=["\']%s["\'][^>]*>' % re.escape(prop), doc, re.I):
            c = re.search(r'content=["\']([^"\']+)', m.group(0))
            if c:
                add(c.group(1), prop)
    for m in re.finditer(r"<img\b[^>]*>", doc, re.I):
        tag = m.group(0)
        alt = (re.search(r'alt=["\']([^"\']*)', tag) or [None, ""])[1]
        w = int((re.search(r'width=["\']?(\d+)', tag) or [None, 0])[1] or 0)
        srcset = re.search(r'srcset=["\']([^"\']+)', tag)
        if srcset:  # pega a maior variante
            best = max((p.strip().split(" ") for p in srcset.group(1).split(",") if p.strip()),
                       key=lambda p: int(re.sub(r"\D", "", p[1]) or 0) if len(p) > 1 else 0)
            add(best[0], "img", alt, int(re.sub(r"\D", "", best[1]) or 0) if len(best) > 1 else w)
        src = re.search(r'\ssrc=["\']([^"\']+)', tag)
        if src:
            add(src.group(1), "img", alt, w)
    for m in re.finditer(r'<video[^>]+poster=["\']([^"\']+)', doc, re.I):
        add(m.group(1), "poster de vídeo")
    site = re.search(r'<meta[^>]+property=["\']og:site_name["\'][^>]*content=["\']([^"\']+)', doc, re.I)
    cred = html.unescape(site.group(1)) if site else urllib.parse.urlparse(page_url).netloc.replace("www.", "")
    for c in out:
        c["credito_sugerido"] = cred
    meta = [c for c in out if c["tipo"] != "img"]
    imgs = sorted((c for c in out if c["tipo"] == "img"), key=lambda c: -c["largura"])
    return meta + imgs


def commons(query: str, n: int = 8) -> list[dict]:
    api = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({
        "action": "query", "format": "json", "generator": "search", "gsrnamespace": 6, "gsrsearch": query,
        "gsrlimit": n, "prop": "imageinfo", "iiprop": "url|size|extmetadata", "iiurlwidth": 2160})
    data = json.loads(fetch(api)[0])
    out = []
    for p in (data.get("query", {}).get("pages", {}) or {}).values():
        ii = (p.get("imageinfo") or [{}])[0]
        md = ii.get("extmetadata", {})
        strip = lambda s: re.sub(r"<[^>]+>", "", html.unescape(s or "")).strip()
        out.append({"titulo": p.get("title"), "url": ii.get("thumburl") or ii.get("url"), "original": ii.get("url"),
                    "pagina": ii.get("descriptionurl"), "largura": ii.get("width"), "altura": ii.get("height"),
                    "licenca": strip(md.get("LicenseShortName", {}).get("value")),
                    "autor": strip(md.get("Artist", {}).get("value"))[:80]})
    return out


# ---------- arquivo e manifesto ----------
def img_dir(folder: Path) -> Path:
    d = folder / "img" if "runs" in folder.parts else folder
    d.mkdir(parents=True, exist_ok=True)
    return d


def load(folder: Path) -> dict:
    p = img_dir(folder) / "imagens.json"
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else {"imagens": {}}


def save(folder: Path, man: dict) -> None:
    (img_dir(folder) / "imagens.json").write_text(json.dumps(man, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def normalize(data: bytes) -> tuple[bytes, str, int, int]:
    from PIL import Image  # Pillow
    try:
        im = Image.open(io.BytesIO(data))
        im.load()
    except Exception as e:  # noqa: BLE001
        raise SystemExit(f"o arquivo não é uma imagem válida ({e})")
    if getattr(im, "is_animated", False):
        im.seek(0)
    if max(im.size) > MAX_LADO:
        k = MAX_LADO / max(im.size)
        im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    alpha = im.mode in ("RGBA", "LA", "P") and ("transparency" in im.info or im.mode in ("RGBA", "LA"))
    buf = io.BytesIO()
    if alpha:
        im.convert("RGBA").save(buf, "PNG", optimize=True)
        ext = "png"
    else:
        im.convert("RGB").save(buf, "JPEG", quality=90, optimize=True)
        ext = "jpg"
    return buf.getvalue(), ext, im.width, im.height


def register(folder: Path, nome: str, data: bytes, info: dict) -> dict:
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]{1,40}", nome):
        raise SystemExit("--nome: use minúsculas, números e hífen (ex.: gpt5-capa)")
    if info["licenca"] not in LICENCAS:
        raise SystemExit(f"--licenca deve ser uma de {sorted(LICENCAS)}")
    if info["uso"] == "post" and info["licenca"] == "referencia":
        raise SystemExit("imagem com licença 'referencia' não pode ter uso 'post'")
    if info["uso"] == "post" and not info.get("credito") and info["licenca"] not in ("propria", "gerada-ia"):
        raise SystemExit("--credito é obrigatório para imagem de terceiros usada no post")
    out, ext, w, h = normalize(data)
    if len(out) > 10 * 1024 * 1024:
        raise SystemExit("imagem passa de 10 MB mesmo depois de converter")
    d = img_dir(folder)
    arq = d / f"{nome}.{ext}"
    arq.write_bytes(out)
    man = load(folder)
    entry = {"arquivo": arq.name, "largura": w, "altura": h, "ratio": round(w / h, 4),
             "sha256": hashlib.sha256(out).hexdigest()[:16], "data": date.today().isoformat(), **info}
    entry.setdefault("node", man["imagens"].get(nome, {}).get("node"))
    man["imagens"][nome] = entry
    save(folder, man)
    return entry


def capture(url: str, largura: int, altura: int, escala: float, espera: int) -> bytes:
    exe = next((b for b in BROWSERS if Path(b).exists()), shutil.which("msedge") or shutil.which("chrome"))
    if not exe:
        raise SystemExit("Edge ou Chrome não encontrado para a captura")
    with tempfile.TemporaryDirectory() as td:
        out = Path(td) / "cap.png"
        cmd = [exe, "--headless=new", "--disable-gpu", "--hide-scrollbars", f"--window-size={largura},{altura}",
               f"--force-device-scale-factor={escala}", f"--virtual-time-budget={espera * 1000}",
               f"--user-agent={UA}", f"--user-data-dir={td}\\perfil", f"--screenshot={out}", url]
        subprocess.run(cmd, capture_output=True, timeout=espera + 60)
        if not out.exists():
            raise SystemExit("a captura falhou: a página pode exigir login ou bloquear navegador automático")
        return out.read_bytes()


def crop(data: bytes, box: str, escala: float) -> bytes:
    from PIL import Image
    x, y, w, h = (float(v) * escala for v in box.split(","))
    im = Image.open(io.BytesIO(data))
    buf = io.BytesIO()
    im.crop((round(x), round(y), round(x + w), round(y + h))).save(buf, "PNG")
    return buf.getvalue()


ALVOS = """const page = figma.root.children.find(p => p.name === 'Assets — Social') || (() => { const p = figma.createPage(); p.name = 'Assets — Social'; return p; })();
await figma.setCurrentPageAsync(page);
const ITENS = %(itens)s;
let y = 0; for (const c of page.children) y = Math.max(y, c.y + c.height + 200);
const out = {};
for (const it of ITENS) {
  const name = 'asset/%(slug)s/' + it.nome;
  let r = page.findOne(n => n.name === name);
  if (!r) { r = figma.createRectangle(); r.name = name; page.appendChild(r); r.x = 0; r.y = y; }
  const k = Math.min(1, 1080 / it.largura); r.resize(Math.round(it.largura * k), Math.round(it.altura * k));
  r.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
  y = r.y + r.height + 80; out[it.nome] = r.id;
}
return out;
"""


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd = a[0]
    if cmd == "candidatas":
        for i, c in enumerate(candidatas(a[1]), 1):
            print(f"{i:>2}. [{c['tipo']}] {c['url']}\n    {('alt: ' + c['alt'] + '  ') if c['alt'] else ''}{('largura ' + str(c['largura']) + '  ') if c['largura'] else ''}crédito sugerido: {c['credito_sugerido']}")
    elif cmd == "commons":
        for i, c in enumerate(commons(a[1], int(opt(a, "--n", 8))), 1):
            print(f"{i:>2}. {c['titulo']}  {c['largura']}×{c['altura']}  licença: {c['licenca']}  autor: {c['autor']}\n    baixar: {c['url']}\n    página: {c['pagina']}")
    elif cmd in ("baixar", "capturar"):
        folder = Path(opt(a, "--run") or sys.exit("--run é obrigatório"))
        info = {"credito": opt(a, "--credito", ""), "uso": opt(a, "--uso", "post"),
                "licenca": opt(a, "--licenca", "captura" if cmd == "capturar" else "oficial")}
        if cmd == "baixar":
            data, ctype = fetch(a[1])
            info.update(url=a[1], origem=opt(a, "--origem", a[1]))
        else:
            esc = float(opt(a, "--escala", 2))
            data = capture(a[1], int(opt(a, "--largura", 1280)), int(opt(a, "--altura", 1600)), esc, int(opt(a, "--espera", 10)))
            if opt(a, "--recorte"):
                data = crop(data, opt(a, "--recorte"), esc)
            info.update(url=a[1], origem=a[1], captura=True)
        if "referencias" in folder.parts:
            info["uso"] = "referencia"
        e = register(folder, opt(a, "--nome") or sys.exit("--nome é obrigatório"), data, info)
        print(f"salvo: {img_dir(folder) / e['arquivo']}  {e['largura']}×{e['altura']}  ratio {e['ratio']}  uso {e['uso']}  licença {e['licenca']}")
    elif cmd == "lista":
        for k, e in load(Path(a[1]))["imagens"].items():
            print(f"{k:<24} {e['arquivo']:<28} {e['largura']}×{e['altura']}  uso {e['uso']:<10} licença {e['licenca']:<12} crédito {e.get('credito') or '-':<18} nó {e.get('node') or '-'}")
    elif cmd == "alvos":
        folder, slug = Path(a[1]), a[2]
        itens = [{"nome": k, "largura": e["largura"], "altura": e["altura"]} for k, e in load(folder)["imagens"].items()
                 if e["uso"] == "post" and not e.get("node")]
        if not itens:
            sys.exit("nada a enviar: todas as imagens de uso 'post' já têm nó")
        print(ALVOS % {"itens": json.dumps(itens, ensure_ascii=False), "slug": slug})
        print(f"// depois: upload_assets(count={len(itens)}, nodeIds=[ids na ordem: {', '.join(i['nome'] for i in itens)}], scaleMode=FILL)", file=sys.stderr)
    elif cmd == "enviar":
        folder = Path(a[1])
        man = load(folder)
        for pair in a[2:]:
            nome, url = pair.split("=", 1)
            e = man["imagens"][nome]
            body = (img_dir(folder) / e["arquivo"]).read_bytes()
            ctype = "image/png" if e["arquivo"].endswith(".png") else "image/jpeg"
            req = urllib.request.Request(url, data=body, method="POST", headers={"Content-Type": ctype})
            with urllib.request.urlopen(req, timeout=60) as r:
                resp = json.loads(r.read().decode("utf-8", "replace") or "{}")
            if resp.get("placedOnNodeId"):
                e["node"], e["hash"] = resp["placedOnNodeId"], resp.get("imageHash")
            print(f"{nome}: {'ok' if resp.get('success') else 'falhou'} → nó {e.get('node')}  hash {e.get('hash')}")
        save(folder, man)
    elif cmd == "registrar":
        folder = Path(a[1])
        man = load(folder)
        for pair in a[2:]:
            nome, node = pair.split("=", 1)
            man["imagens"][nome]["node"] = node
            print(f"{nome} → {node}")
        save(folder, man)
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
