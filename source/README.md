# WeChinaSourcing Brand Guidelines — Editable Source

This is the real source of truth for `../WeChinaSourcing-Brand-Guidelines.html` /
`.pdf`, `../Quick-Start-Sheet.html` / `.pdf`, and everything in `../brand-assets/`.
It's a small Node.js build pipeline, not a design-tool file — every color,
size, and line of copy in the guidelines lives here as plain, readable code.
Editing a value here and re-running the build is the intended way to update
the document; hand-editing the generated HTML will be overwritten on the next
build.

**Why code instead of Figma/InDesign:** the deck derives its logo artwork
directly from `../logo.svg` (the single locked source file) rather than a
manually-recreated copy, so the mark can never drift out of sync with the
master. It also means every one of the 100+ logo instances across the 26-page
deck is guaranteed pixel-identical, and the whole system (colors, type scale,
spacing) is enforced by shared CSS variables rather than eyeballed per page.

## Requirements

- [Node.js](https://nodejs.org) 18+
- The root pipeline (`main.js`, `build_quickstart.js`, all `content_*.js`)
  needs no npm packages — only Node's built-in `fs`/`path`.
- `fontwork/` (logo-lockup SVG generation, PDF/PNG export, templates) needs
  `opentype.js` and `pdf-lib` — run `cd fontwork && npm install` once before
  using anything in that folder.
- Microsoft Edge or Google Chrome, for regenerating PDFs and PNG/screenshot
  assets (headless print-to-PDF / screenshot — see below).

## Regenerating the guidelines deck

```bash
cd source
node main.js
```

Writes `../WeChinaSourcing-Brand-Guidelines.html`.

## Regenerating the Quick Start sheet

```bash
node build_quickstart.js
```

Writes `../Quick-Start-Sheet.html`.

## Exporting to PDF — read this before you run a single `--print-to-pdf`

**Do not print a multi-page HTML file (the full deck, or any multi-page
template) to PDF in one Chromium invocation.** This was tried and silently
produced a wrong page count more than once during development: the 26-slide
deck exported as 25 pages (a page vanished) and a 3-page template exported
as 5 pages (phantom blank pages appeared) — both from the *same* underlying
Chromium print-to-pdf pagination bug when printing a flex-stacked
multi-`.slide`/`.page` document with `page-break-after: always`. It fails
silently — exit code 0, a plausible-looking file — so a page count printed
by eye or trusted without checking will miss it.

**The reliable pattern, used throughout this pipeline:** isolate each page
into its own single-page HTML document, print each one separately (each
always produces exactly 1 PDF page), then merge with `pdf-lib`. See
`fontwork/gen_deck_slide_pages.js` (splits the deck into 26 single-slide
HTML files) and `fontwork/merge_pdfs.js` (merges an arbitrary list of
single-page PDFs). After merging, **always verify programmatically**:

```js
const { PDFDocument } = require('pdf-lib');
const doc = await PDFDocument.load(fs.readFileSync('output.pdf'));
console.log(doc.getPageCount()); // must equal the expected page count
```

Do not trust a visual skim of the PDF or the exporter's exit code alone —
verify the page count in code, every time.

For a genuinely single-page document (the Quick Start sheet, the shipping
label template), a direct `--print-to-pdf` is fine — the bug above is
specific to multi-page flex-stacked documents.

```bash
"<path to msedge.exe or chrome.exe>" --headless --disable-gpu ^
  --print-to-pdf="<output>.pdf" --virtual-time-budget=4000 ^
  "file:///<absolute path to input>.html"
```

> **Why not the OS print dialog's default printer?** "Microsoft Print to PDF"
> (the Windows system printer) ignores the page's requested custom size and
> forces a standard paper size, which scales custom-sized content to fit the
> width and leaves the rest of the page blank. The command above uses
> Chromium's own PDF engine, which reads the page's `@page` CSS rule and
> produces an exact page size with zero padding.

> **Headless Chromium screenshot/print calls in this pipeline are
> occasionally flaky on the first attempt** — a `--screenshot=` or
> `--print-to-pdf=` invocation can silently produce no output file even with
> exit code 0, especially when several invocations are launched back-to-back
> from the same shell in a tight loop (a `--user-data-dir` profile-lock
> collision — give each invocation in a loop its own `--user-data-dir`). If
> a file is missing after a call, just retry that one call.

## Regenerating the logo asset package (`../brand-assets/01-logo/`)

All in `fontwork/` (run `npm install` there first):

```bash
cd fontwork
node build_lockup_svgs.js   # wordmark outline (Urbanist-ExtraBold.ttf) + icon paths
                             # -> 8 horizontal/stacked SVGs in ../../brand-assets/01-logo/svg/
                             # (the 4 icon-only SVGs are generated separately — see below)
node gen_png_pages.js       # writes 12 staging HTML pages for PNG rasterization
node gen_pdf_pages.js       # writes 12 staging HTML pages for PDF export
node gen_icon_master.js     # writes 4 icon-only master HTML pages (1024px, for reliable rasterization)
```

Each `gen_*_pages.js` script writes temporary HTML files that must then be
captured with headless Chrome/Edge (`--screenshot=...png` or
`--print-to-pdf=...pdf`) — see the inline comments in each script for sizing
details. This two-step process (generate HTML → capture with the browser)
exists because Chromium's headless screenshot/print engine is the only
reliable way to rasterize the SVG mask technique (see below) pixel-perfectly.

**Small-viewport screenshots are unreliable below ~200px.** Icon PNG/favicon
rasterization at small sizes (16–192px) was found to intermittently
corner-crop or blank-render in headless Chromium, independent of file
content. The reliable fix: always render at a large master size (1024px
proved consistently reliable), verify visually, then downsample to every
needed smaller size with a real image library (PowerShell's
`System.Drawing`, `Graphics.DrawImage` with `HighQualityBicubic`) — never
ask Chromium to screenshot a small viewport directly.

## Architecture

```
build.js      Parses ../logo.svg once, exposes logoMark(variant) and
              logoDefsBlock() used by every other file. This is the ONLY
              file that reads the locked source SVG.
shared.js     Re-exports build.js's helpers plus chrome() (page header/
              footer chrome), slideWrap() (page container), and
              circularStamp() — used by every content file.
css.js        The entire design system as CSS custom properties + classes —
              colors, type scale, spacing, component styles. Change a value
              here and it updates everywhere at once.
content*.js   One file per group of pages (content_logo.js = pages 4–8,
              content_color.js = pages 9–10, etc.) — see the file list below.
              Each exports its slide constants; edit copy/layout here.
main.js       Imports every content file in page order and assembles the
              final HTML document (26 slides total).
image_data.js Base64-encoded JPEG data for the 6 commissioned photographs
              used on the Photography & Image Art Direction page — imported
              by content_icons_photo.js.
fontwork/     Logo-lockup vector generation (font-outline extraction),
              PNG/PDF export staging, and the two standalone document
              templates (audit report, shipping label). Self-contained with
              its own package.json — see above.
```

### Content file → page map

| File | Pages | Section |
|---|---|---|
| `content.js` | 1–3 | Cover, Brand Strategy |
| `content_logo.js` | 4–8 | Logo System |
| `content_color.js` | 9–10 | Colour System |
| `content_type.js` | 11–12 | Typography |
| `content_icons_photo.js` | 13–14 | Iconography, Photography |
| `content_digital.js` | 15–17 | Digital Product System |
| `content_dataviz_physical.js` | 18–19 | Data Viz, Physical Applications |
| `content_voice.js` | 20–22 | Voice & Messaging |
| `content_gov.js` | 23–24 | Governance, Design Tokens |
| `content_close.js` | 25–26 | Quick Start summary, Closing |

## The logo-mask technique (why it's not just `<img src="logo.svg">`)

`../logo.svg` was authored assuming a fixed white background — its "negative
space" shapes are literal white-filled rectangles, not true transparency.
`build.js` re-derives the mark using an SVG `<mask>` so the negative space is
real alpha transparency, then exposes four color variants (`full`, `navy`,
`black`, `white`) by swapping the three ink colors. This is what makes the
Reversed White variant actually work on a dark background — a naive copy of
the original file does not (its wordmark would render invisible on navy).
See Logo System p.7 in the guidelines for the visual explanation.

Two Chromium-specific quirks matter if you touch this technique:
- An SVG embedded at a size other than its own native pixel dimensions needs
  `width="100%" height="100%"` (not the hardcoded native pixel values) or it
  clips to its native size regardless of the containing page.
- `<defs><mask>...</mask></defs>` nested directly inside a percentage-sized
  (`width="100%" height="100%"`) `<svg>` is unreliable in headless
  Chromium. Put the mask/defs in a separate, explicitly zero-sized sibling
  `<svg width="0" height="0" style="position:absolute" aria-hidden="true">`
  placed before the main visible SVG — see `logoDefsBlock()` in `build.js`.

## Editing copy or a page's layout

Open the relevant `content_*.js` file — each slide is a template literal with
inline styles (no external stylesheet to hunt through). Tokens like colors
and fonts are pulled from `css.js`'s CSS variables (`var(--navy)`, etc.) —
edit the value once in `css.js` rather than overriding it per-slide.

Utility spacing classes (`gap-N`, used throughout every content file) are
defined in `css.js` for `N = 4,5,6,7,8,9,10,12,14,16,20,24,32,40`. Using a
value outside that list silently collapses to a 0px gap (CSS `gap: normal`
resolves to 0 in flex containers) instead of erroring — this bit the build
once already (several rows rendered with icons/labels touching before the
missing values were added to `css.js`). Stick to the defined list, or add a
new value there rather than assuming an arbitrary `gap-N` will work.

**If a page overflows after an edit:** every `.slide` is a fixed 1280×720px
box with `overflow:hidden` — added content that doesn't fit is silently
clipped, not reflowed. After any copy change, rebuild and screenshot that
page to check (see QA approach below) rather than assuming it fits.

## QA approach used to build this document

Every page was rendered via headless screenshot and visually reviewed before
delivery — there is no automated visual-regression test in this repo. If you
make substantial edits, recommend the same: screenshot each changed page at
1280×720 and check for clipped text, overlapping elements, or content
touching the footer chrome. When exporting to PDF, also verify the page
count in code (see the PDF section above) — a visual skim is not enough to
catch a silently dropped or duplicated page.

## Design tokens

`../brand-assets/02-color/tokens.css` and `tokens.json` are hand-maintained
to mirror `css.js` — if you change a color or spacing value in `css.js`,
update the token files to match (there is currently no automated sync
between them).
