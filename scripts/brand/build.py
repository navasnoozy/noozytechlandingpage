"""Build the NoOzyTech brand assets from Inter: wordmark, symbol, favicons, icons.

Needs Python 3 with: fonttools brotli uharfbuzz pillow
Usage, from the repository root:
    python3 -I scripts/brand/build.py <Inter variable font with opsz and wght axes>
The Latin Inter file that next/font downloads works: .next/static/media/*.p.*.woff2

Writes app/favicon.ico, app/icon.png, app/apple-icon.png, public/brand/* and
components/brand/*.tsx. Design rules: docs/design/brand.md.
"""

import io
import struct
import sys
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
INK, PAPER = "#1d1d1f", "#f5f5f7"
INK_RGBA, PAPER_RGBA = (29, 29, 31, 255), (245, 245, 247, 255)

# Wordmark: Inter, Display optical size, SemiBold, tracking -0.02em.
TEXT, WEIGHT, OPSZ, TRACKING_EM = "NoOzyTech", 600, 32, -0.02
SCALE = 1 / 16  # 2048 font units per em -> 128 SVG units per em

# Symbol, in font units. D is Inter's O height at this weight, overshoot included.
D, RATIO, BIG_STROKE, SMALL_STROKE, GAP = 1538.0, 0.60, 250.0, 210.0, 160.0


def num(n):
    s = f"{n:.1f}"
    return s[:-2] if s.endswith(".0") else s


# ---------------------------------------------------------------- wordmark

def build_wordmark(font_path):
    static = instantiateVariableFont(TTFont(font_path), {"wght": WEIGHT, "opsz": OPSZ})
    static.flavor = None
    buf = io.BytesIO()
    static.save(buf)
    font_bytes = buf.getvalue()
    font = TTFont(io.BytesIO(font_bytes))
    upm, cap = font["head"].unitsPerEm, font["OS/2"].sCapHeight
    gs, order = font.getGlyphSet(), font.getGlyphOrder()

    buffer = hb.Buffer()
    buffer.add_str(TEXT)
    buffer.guess_segment_properties()
    hb.shape(hb.Font(hb.Face(font_bytes)), buffer, {"kern": True})

    pen = SVGPathPen(gs, ntos=num)
    bounds = BoundsPen(gs)
    x = 0.0
    glyphs = list(zip(buffer.glyph_infos, buffer.glyph_positions))
    for i, (info, pos) in enumerate(glyphs):
        name = order[info.codepoint]
        # Font units are y-up; SVG is y-down. Baseline at y = 0.
        gs[name].draw(TransformPen(pen, (SCALE, 0, 0, -SCALE, (x + pos.x_offset) * SCALE, 0)))
        gs[name].draw(TransformPen(bounds, (SCALE, 0, 0, SCALE, (x + pos.x_offset) * SCALE, 0)))
        x += pos.x_advance + (TRACKING_EM * upm if i < len(glyphs) - 1 else 0)

    xmin, ymin, xmax, ymax = bounds.bounds
    tight = (xmin, -ymax, xmax - xmin, ymax - ymin)
    # Component viewBox: centered on the capitals rather than the descender of
    # the y, so the logo looks centered when a flex container centers it.
    cap_center = -cap * SCALE / 2
    half = -ymin - cap_center
    optical = (xmin, cap_center - half, xmax - xmin, 2 * half)
    return pen.getCommands(), tight, optical


# ------------------------------------------------------------------ symbol

def symbol_rings(weight=1.0):
    """(cx, cy, outer radius, stroke) for both rings, y-down, bottoms on one baseline."""
    d = D * RATIO
    return [
        (d / 2, D - d / 2, d / 2, SMALL_STROKE * weight),
        (d + GAP + D / 2, D / 2, D / 2, BIG_STROKE * weight),
    ], d + GAP + D, D


def circle(cx, cy, r):
    return f"M{num(cx - r)} {num(cy)}a{num(r)} {num(r)} 0 1 0 {num(2 * r)} 0a{num(r)} {num(r)} 0 1 0 {num(-2 * r)} 0Z"


def symbol_path():
    rings, w, h = symbol_rings()
    s = 96 / D  # big ring 96 units across
    d = " ".join(
        circle(cx * s, cy * s, r * s) + circle(cx * s, cy * s, (r - t) * s) for cx, cy, r, t in rings
    )
    return d, (0, 0, w * s, h * s)


def draw_icon(size, weight, pad, radius, ss=16):
    """The symbol in a square tile. weight > 1 is the bolder cut for small sizes."""
    rings, w, h = symbol_rings(weight)
    S = size * ss
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    if radius:
        dr.rounded_rectangle((0, 0, S - 1, S - 1), radius=S * radius, fill=INK_RGBA)
    else:
        dr.rectangle((0, 0, S, S), fill=INK_RGBA)
    k = S * (1 - 2 * pad) / max(w, h)
    ox, oy = (S - w * k) / 2, (S - h * k) / 2
    for cx, cy, r, t in rings:
        X, Y, R = ox + cx * k, oy + cy * k, r * k
        dr.ellipse((X - R, Y - R, X + R, Y + R), outline=PAPER_RGBA, width=round(t * k))
    return img.resize((size, size), Image.LANCZOS)


def write_ico(path, images):
    """ICO with one PNG per size, so each size keeps its own hand-tuned cut."""
    pngs = []
    for im in images:
        b = io.BytesIO()
        im.save(b, format="PNG", optimize=True)
        pngs.append(b.getvalue())
    out = struct.pack("<HHH", 0, 1, len(images))
    offset = 6 + 16 * len(images)
    for im, data in zip(images, pngs):
        w, h = im.size
        out += struct.pack("<BBBBHHII", w % 256, h % 256, 0, 0, 1, 32, len(data), offset)
        offset += len(data)
    path.write_bytes(out + b"".join(pngs))


# ------------------------------------------------------------------ output

def svg_file(view, d, fill, evenodd=False):
    rule = ' fill-rule="evenodd"' if evenodd else ""
    x, y, w, h = view
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{num(x)} {num(y)} {num(w)} {num(h)}">'
        f'<path fill="{fill}"{rule} d="{d}"/></svg>\n'
    )


def component(name, doc, view, d, evenodd=False):
    x, y, w, h = view
    # Matches Prettier's output, so regenerating never creates formatting diffs.
    if evenodd:
        path = f'<path\n        fillRule="evenodd"\n        d="{d}"\n      />'
    else:
        path = f'<path d="{d}" />'
    return f"""// {doc}
// Generated by scripts/brand/build.py. Don't edit the path by hand; see docs/design/brand.md.
export function {name}({{ className }}: {{ className?: string }}) {{
  return (
    <svg
      viewBox="{num(x)} {num(y)} {num(w)} {num(h)}"
      className={{className}}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}}
"""


def main(font_path):
    brand, comps, app = ROOT / "public/brand", ROOT / "components/brand", ROOT / "app"
    for p in (brand, comps):
        p.mkdir(parents=True, exist_ok=True)

    word_d, word_tight, word_optical = build_wordmark(font_path)
    sym_d, sym_view = symbol_path()

    (brand / "noozytech-wordmark.svg").write_text(svg_file(word_tight, word_d, INK))
    (brand / "noozytech-wordmark-white.svg").write_text(svg_file(word_tight, word_d, PAPER))
    (brand / "noozytech-symbol.svg").write_text(svg_file(sym_view, sym_d, INK, evenodd=True))
    (brand / "noozytech-symbol-white.svg").write_text(svg_file(sym_view, sym_d, PAPER, evenodd=True))

    (comps / "wordmark.tsx").write_text(component(
        "Wordmark", "The NoOzyTech wordmark: Inter, Display, SemiBold, letter spacing -0.02em.", word_optical, word_d))
    (comps / "symbol.tsx").write_text(component(
        "Symbol", "The NoOzyTech symbol: the small o and big O from the name, on one baseline.",
        sym_view, sym_d, evenodd=True))

    # Small sizes use the bolder cut; large sizes the regular one.
    write_ico(app / "favicon.ico", [
        draw_icon(16, 1.35, 0.12, 0.225),
        draw_icon(32, 1.35, 0.12, 0.225),
        draw_icon(48, 1.15, 0.16, 0.225),
    ])
    draw_icon(192, 1.0, 0.2, 0.225).save(app / "icon.png", optimize=True)
    draw_icon(180, 1.0, 0.2, None).save(app / "apple-icon.png", optimize=True)  # iOS rounds it
    draw_icon(512, 1.0, 0.2, 0.225).save(brand / "noozytech-icon-512.png", optimize=True)
    draw_icon(1080, 1.0, 0.26, None).save(brand / "noozytech-avatar-1080.png", optimize=True)

    for p in sorted([*brand.iterdir(), *comps.iterdir(), app / "favicon.ico", app / "icon.png", app / "apple-icon.png"]):
        print(f"{p.relative_to(ROOT)}  {p.stat().st_size:,} bytes")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
