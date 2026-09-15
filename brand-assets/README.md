# WeChinaSourcing Brand Assets

Version **v1.1** · 2026-08-15 · Owner: Brand & Creative (brand@wechinasourcing.com)
Full specification: `../WeChinaSourcing-Brand-Guidelines.pdf` (or `.html`).
Governance &amp; versioning policy: Guidelines p.23. Full asset inventory
diagram: Guidelines p.24 (Governance).

This package contains the complete production-ready asset system: all twelve
logo lockup/color combinations, design tokens, typeface licences, and
standalone document templates. Geometry and palette are locked — see the
guidelines document before creating any new variant.

## What's inside

```
brand-assets/
├─ 01-logo/
│  ├─ svg/       12 files — pure vector, no font dependency, infinitely scalable
│  ├─ png/       36 files — raster exports, transparent background, @1x/@2x/@3x
│  ├─ pdf/       12 files — vector PDF, print-ready
│  └─ favicon/    6 files — web/app icon set
├─ 02-color/      tokens.css, tokens.json — machine-readable design tokens
├─ 03-type/       LICENSES.md + specimens/ — typeface licence records & specimen sheet
├─ 04-templates/  standalone audit-report and shipping-label templates
├─ CHANGELOG.md
└─ README.md      this file
```

### 01-logo/svg/ — vector masters
Three compositions × four colors = 12 files, named `wcs_[lockup]_[color].svg`.

| Lockup | Use for |
|---|---|
| `wcs_icon_*` | Icon/badge mark alone — seals, favicons, small-space applications |
| `wcs_horizontal_*` | Primary horizontal lockup (icon + wordmark side by side) — default for headers, letterhead, signage |
| `wcs_stacked_*` | Stacked lockup (icon above wordmark) — square/near-square spaces, social avatars, packaging |

| Color | Use for |
|---|---|
| `full` | Default — any full-color reproduction, digital or print |
| `navy` | Single-tone print, letterhead footers, thermal fax |
| `black` | Engraving, embroidery digitizing, laser etching |
| `reversed-white` | Any background darker than Slate Blue (#1F5474) |

Every file is a pure vector — icon paths **and** the wordmark, which is
authored as locked glyph outlines (extracted from Urbanist ExtraBold, not
live text), so nothing substitutes fonts and nothing depends on a font being
installed. Negative space is true alpha transparency via an SVG mask, so each
file composites correctly on any background color.

### 01-logo/png/ — raster exports, transparent background
Each of the 12 SVG masters exported at three densities: `@1x`, `@2x`, `@3x`
(36 files total, named `wcs_[lockup]_[color]@[density].png`). `@3x` is the
native/master render size for each composition; `@1x`/`@2x` are downsampled
from it. Below 32px effective size, prefer the one-colour (navy/black)
variant per the minimum-size rule (Guidelines p.7).

### 01-logo/pdf/ — vector, print-ready
Same 12 compositions, each a true vector PDF sized to its own content with
zero page padding — safe to place directly into InDesign, Illustrator, or
send to a print vendor. `reversed-white` files ship on true transparency;
composite onto Deep Navy (or another approved dark color) at placement time.

### 01-logo/favicon/ — web & app icons
| File | Size | Variant | Use |
|---|---|---|---|
| `favicon-16.png` | 16×16 | Navy one-colour | Browser tab (small) |
| `favicon-32.png` | 32×32 | Navy one-colour | Browser tab, bookmarks |
| `favicon-48.png` | 48×48 | Navy one-colour | Windows taskbar, high-DPI tab |
| `apple-touch-icon-180.png` | 180×180 | Full color, white bg | iOS home screen |
| `icon-192.png` | 192×192 | Full color, transparent | Android/PWA |
| `icon-512.png` | 512×512 | Full color, transparent | PWA splash/store listing |

A legacy multi-resolution `.ico` file is **not included** — `.ico` is a
container format outside what this pipeline produces. Modern browsers fully
support PNG favicons via `<link rel="icon" type="image/png">`; if a classic
`.ico` is required for a legacy target, generate one from `favicon-32.png`
with a dedicated tool (e.g. RealFaviconGenerator, ImageMagick).

### 02-color/ — design tokens
`tokens.css` (CSS custom properties) and `tokens.json` (W3C DTCG-style, for
Figma Tokens / Style Dictionary pipelines) mirror every color, spacing, and
type-scale value used in the Guidelines document — no hard-coded hex values
should appear in application code. See Guidelines p.24 for the full token
reference table and contrast ratios (all recomputed against Porcelain White
`#FEFEFE`, not pure white).

### 03-type/ — typefaces
`LICENSES.md` documents all four typefaces (Urbanist, DM Sans, JetBrains
Mono, Noto Sans SC), their licence (SIL OFL 1.1 throughout), and source URLs.
`specimens/wcs_type_specimen.pdf` is a 2-page specimen sheet showing family
overview, weights, the full type scale in context, and the English/Chinese
bilingual pairing rule.

### 04-templates/ — standalone document templates
| File | Use for |
|---|---|
| `wcs_template_quotation.html` / `.pdf` | 2-page A4 commercial quotation — commercial offer, itemized rates, milestone schedule, AQL quality criteria & client acceptance |
| `wcs_template_invoice.html` / `.pdf` | 1-page A4 commercial invoice — itemized fees, taxes, structured international wire transfer/banking details & finance seal |
| `wcs_template_audit-report.html` / `.pdf` | 3-page A4 factory audit report — cover, supplier/summary, detailed findings & sign-off |
| `wcs_template_shipping-label.html` / `.pdf` | 4"×6" carrier shipping label — ship-from/to, PO/HS/carton fields, barcode placeholder |

Both are editable HTML (open and edit directly, or copy into any tool that
accepts HTML) with a matching print-ready PDF at true physical page size.
Bracketed `[placeholder]` text marks fields meant to be filled per shipment
or per audit — this is a template, not a filled example. Full-size mockups
of the same two documents are also summarized in-context on Guidelines p.19
(Physical &amp; Supply-Chain Applications).

## Naming convention

```
wcs_[lockup]_[color]@[density].[ext]     — 01-logo/png/
wcs_[lockup]_[color].[ext]               — 01-logo/svg/, 01-logo/pdf/
wcs_template_[name].[ext]                — 04-templates/
```
`lockup` = icon · horizontal · stacked
`color` = full · navy · black · reversed-white
`density` = 1x · 2x · 3x (PNG only; SVG/PDF are resolution-independent)

No version suffix appears in filenames — the package as a whole is versioned
(currently v1.1, see header of this file and `CHANGELOG.md`); a MAJOR
revision would ship as a new dated package, not in-place file renames.

## Versioning & requests

- **MAJOR** version changes (geometry or palette) require Brand owner + legal
  sign-off — see Guidelines p.23 (Governance).
- **MINOR** version changes (new size, new template) are logged in this
  package's `CHANGELOG.md`.
- Need a size, format, or lockup not covered here? Email
  assets@wechinasourcing.com — never re-derive a logo from a screenshot,
  a prior printed piece, or a partner's own files.
