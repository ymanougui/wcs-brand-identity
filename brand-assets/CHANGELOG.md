# Changelog

All notable changes to the WeChinaSourcing Brand Guidelines and asset
package. Format: **Issue** — what was wrong · **Where** — page/file changed ·
**Verification** — how the fix was confirmed.

## v1.2 — 2026-08-16 (Commercial Templates & Asset Alignment)

### Commercial document templates
- **Feature.** Added standalone, reusable Commercial Quotation and Commercial Invoice templates matching the design system and document template architecture.
  **Where.** `04-templates/wcs_template_quotation.html` / `.pdf` (2-page A4 commercial offer, itemized rates, execution milestone schedule, AQL quality criteria, commercial conditions & authorization sign-off); `04-templates/wcs_template_invoice.html` / `.pdf` (1-page A4 commercial invoice, itemized billing, taxes/totals, structured international bank wire remittance details & finance department seal); generator scripts in `source/fontwork/`.
  **Verification.** Rendered via Chromium print-to-pdf, validated single-page splits and programmatic `pdf-lib` page counts (Quotation: 2 pages, Invoice: 1 page).

### Logo asset alignment
- **Issue.** Primary Horizontal lockup in `01-logo/` had the icon badge centered on the baseline (`y = 0`) instead of the wordmark's cap-height optical center (`y = -35.75`), causing the badge to hang below the text.
  **Where.** `01-logo/svg/wcs_horizontal_*.svg`, `01-logo/png/wcs_horizontal_*@*.png`, `01-logo/pdf/wcs_horizontal_*.pdf`, `source/fontwork/build_lockup_svgs.js`.
  **Verification.** Recomputed vertical offset to align with cap-height optical center, re-exported all 4 SVGs, 12 PNGs (@1x/@2x/@3x), and 4 vector PDFs; all 20 assets programmatically verified.

## v1.1 — 2026-08-15 (Stage 2 — Gauntlet QA pass)

### Accessibility & color precision
- **Issue.** Contrast ratios were computed against pure white `#FFFFFF`
  instead of the system's actual base color, Porcelain White `#FEFEFE`,
  producing slightly-wrong published numbers (15.2:1, 3.4:1, 6.5:1, etc.).
  **Where.** Guidelines p.9–10 (Colour System — Foundation Palette &
  Semantic Tokens), `02-color/tokens.css`, `02-color/tokens.json`,
  neutral-scale hex values, and the live CSS custom properties driving every
  swatch/pill in the document.
  **Verification.** Recomputed every ratio with a standalone WCAG
  relative-luminance script against `#FEFEFE`; corrected values (Navy
  15.1:1, Slate 8.1:1, Teal 3.3:1, Teal-on-Navy 4.5:1, Danger-on-tint 6.4:1)
  now match on both the display text and the underlying rendered color.
- **Issue.** Signal Teal was implicitly usable as ordinary body text in
  places; it clears only the 3:1 non-text/large-text threshold, not the
  4.5:1 body-text threshold, on Porcelain White.
  **Where.** Guidelines p.10, footnote and semantic token table.
  **Verification.** Token table explicitly scopes Teal to
  "UI/large-text only," never body copy; verified against WCAG 1.4.3 vs
  1.4.11 thresholds.

### Logo system completeness
- **Issue.** Only the icon/badge mark had all four colour variants
  documented (Full/Navy/Black/Reversed-White); the Horizontal and Stacked
  lockups had no equivalent reference.
  **Where.** Guidelines — new p.6 "Colour Variants — Full Lockups" (3×4
  grid: Horizontal/Stacked/Icon × Full/Navy/Black/Reversed-White); p.5
  simplified to composition-only guidance. All subsequent pages renumbered
  (25 → 26 total pages).
  **Verification.** Full grid rendered and visually inspected at 100%; all
  12 combinations present with correct colour mapping (verified the earlier
  `black` → non-existent CSS variable bug did not recur — see Asset system
  below).
- **Issue.** No standalone, font-independent vector files existed for the
  Horizontal or Stacked lockups — only the icon mark shipped as SVG.
  **Where.** `01-logo/svg/wcs_horizontal_*.svg`,
  `01-logo/svg/wcs_stacked_*.svg` (8 new files).
  **Verification.** Wordmark glyphs extracted as locked vector outlines from
  Urbanist ExtraBold (not live text — no font-substitution risk); path data
  checked for `NaN` coordinates (a real bug found and fixed in the
  extraction pipeline); each file opened and visually confirmed correct at
  1024px render, then exported to matching PNG (`01-logo/png/`, 36 files
  @1x/2x/3x) and PDF (`01-logo/pdf/`, 12 files).

### Misuse guidance (6 vs. 8 inconsistency)
- **Issue.** The illustrated Misuse page showed 6 prohibited practices while
  the Quick Start sheet's summary said "8 things never to do" — an internal
  contradiction.
  **Where.** Guidelines p.8 (Misuse & Corrected Alternatives) — added a
  compact two-item rule band below the six illustrated cards (unauthorized
  container/outline; system-font redraw), matching the Quick Start's count
  exactly rather than shrinking the six spacious cards to fit two more.
  **Verification.** Cross-checked p.8's total against Quick-Start-Sheet.pdf;
  both now state 8 consistently.

### Imagery integrity
- **Issue.** The Photography & Image Art Direction page had no real
  imagery and no framework distinguishing AI-generated art direction from
  documentary/evidence-capable photography.
  **Where.** Guidelines p.14, rebuilt with the 6 commissioned Kittl images
  (`Images/*.png`, delivered by the client and embedded as optimized JPEG
  data), each carrying a visible "AI ILLUSTRATIVE" badge and filename
  credit; explicit Documentary-vs-Illustrative definition boxes; mandatory
  disclaimer "Illustrative art direction — AI-generated, not inspection
  evidence."; and an explicit policy that the WCS logo is never rendered
  inside a generated image, only overlaid separately as the master SVG.
  **Verification.** All 6 images rendered in-page at 100% with no clipping;
  one image's AI-hallucinated garbled-text artifact (on the inspector's
  vest) cropped out via tuned `background-position`, confirmed visually.
  The same evidence-integrity rule was also written into the new Audit
  Report template's Photographic Annex section (see Templates below).

### Asset system (SVG / PNG / PDF / favicon / licences / templates)
- **Issue.** No favicon existed at 48×48 (Windows taskbar / high-DPI tab
  size).
  **Where.** `01-logo/favicon/favicon-48.png` (new).
  **Verification.** Rendered from the verified 1024px navy icon master,
  downsampled with high-quality bicubic interpolation; dimensions confirmed.
- **Issue.** No typeface licence records or specimen shipped, despite four
  typefaces being used throughout the system.
  **Where.** `03-type/LICENSES.md` (all four families, SIL OFL 1.1, source
  URLs); `03-type/specimens/wcs_type_specimen.pdf` (2-page specimen: family
  overview + weights; type scale in context + bilingual pairing rule).
  **Verification.** Both pages rendered and visually inspected at 100% — no
  clipping, correct font loading for all four families including Noto Sans
  SC glyphs.
- **Issue.** The Audit Report and Shipping Label "templates" promised by
  the brief existed only as small (~120px) non-editable mockup graphics
  embedded in Guidelines p.19, not as standalone usable documents.
  **Where.** `04-templates/wcs_template_audit-report.html` + `.pdf` (3-page
  A4: cover, supplier/summary/pass-rate/photo-annex-index, detailed
  findings & sign-off); `04-templates/wcs_template_shipping-label.html` +
  `.pdf` (4"×6" carrier label: ship-from/to, PO/HS/carton fields, package
  contents, barcode placeholder, handling icons).
  **Verification.** Each page screenshotted and visually inspected at 100%.
  Two real defects were found and fixed during this QA pass (see below) and
  do not appear in the shipped files.
- **Issue (defect found during this pass).** Chromium's print-to-pdf
  produced 5 pages for the 3-page Audit Report instead of 3 (phantom blank
  pages) when printed as one multi-page flex-stacked HTML document.
  **Where.** `04-templates/wcs_template_audit-report.pdf` generation
  pipeline.
  **Verification.** Isolated each page into its own single-page HTML
  document — each printed correctly as exactly 1 PDF page — then merged the
  3 single-page PDFs programmatically. Final file confirmed at exactly 3
  pages, consistent A4 dimensions on every page.
- **Issue (defect found during this pass).** Several `gap-N` utility
  classes used throughout the *entire* deck source (`gap-4/5/6/7/9/10/14`)
  were never defined in `css.js` — only `gap-8/12/16/20/24/32/40` existed.
  Every use of a missing value silently collapsed to a 0px gap, which was
  invisible wherever a fixed-width column happened to mask it, but visibly
  ran elements together elsewhere (confirmed on a chart legend: colour
  swatches touching their labels, and adjacent legend items touching each
  other; also an icon+label row on the new Shipping Label template).
  **Where.** `css.js` (all content pages import this shared stylesheet —
  fix applies system-wide, not to one page).
  **Verification.** Added the missing `gap-4/5/6/7/9/10/14` rules; re-
  rendered the affected legend and icon rows and confirmed correct spacing.
  A full re-screenshot pass of all 26 Guidelines pages plus the Quick Start
  sheet against this fix is tracked as an open item (see below).
- **Issue.** `brand-assets/README.md` and the physical asset layout did not
  match the exact folder structure specified in the original brief
  (`01-logo/{svg,png,favicon}`, `02-color/`) — files sat directly under
  `brand-assets/` instead, and design tokens lived in a separate top-level
  `tokens/` folder instead of `02-color/`.
  **Where.** Restructured `brand-assets/` to nest `svg/`, `png/`, `pdf/`,
  `favicon/` under `01-logo/`; moved tokens into `02-color/`; removed the
  now-redundant top-level `tokens/` folder; rewrote `README.md` to describe
  the real, current structure; updated `source/README.md`'s token-file
  reference to match.
  **Verification.** Diffed old vs. new token file contents (byte-identical)
  before removing the old location; confirmed no other file referenced the
  old `../tokens/` path except the one now-updated line in
  `source/README.md`.

### Physical Applications & Governance accuracy (this pass)
- **Issue.** Guidelines p.19 (Physical & Supply-Chain Applications) mockup
  captions cited no filenames, so a reader could not tell which shipped
  asset corresponds to which physical use case; two of the eight mockups
  (Shipping Label, Audit Report Cover) referenced concepts that, as of this
  pass, now exist as real files (see Templates above) rather than only
  in-deck illustrations.
  **Where.** Guidelines p.19 — every mockup card now cites its exact
  filename (`wcs_icon_navy.svg`, `04-templates/wcs_template_shipping-
  label.pdf`, etc.); Production Constraints card now cites the literal
  reversed-white naming pattern instead of a vague "(p.6)" pointer.
  **Verification.** Rendered and visually inspected — all 8 cards display
  their filename caption without overflow or clipping.
- **Issue.** Guidelines p.23 (Governance) folder-tree diagram and naming
  convention showed an older structure
  (`wcs_[lockup]_[color]_[size].[ext]`, no `01-logo/`/`02-color/` wrapper,
  `licenses/` instead of `LICENSES.md`) that no longer matched the delivered
  package, and the Design Tokens Reference page's "FILES" caption pointed to
  a `/tokens/` path that doesn't exist in the shipped package.
  **Where.** Guidelines p.23–24, folder tree, naming convention, and FILES
  caption all rewritten to match the real, current manifest (this
  changelog's own header structure).
  **Verification.** Diffed the in-deck folder tree against `find
  brand-assets -maxdepth 3 -type d`; every listed path now exists on disk.
- **Issue.** Guidelines p.11 (Latin Type System) stated JetBrains Mono is
  licensed "Apache 2.0" — factually wrong; JetBrains Mono's font binary
  (as distributed via Google Fonts, which is what this system embeds) is
  SIL OFL 1.1, matching `03-type/LICENSES.md`.
  **Where.** Guidelines p.11, JetBrains Mono specimen card.
  **Verification.** Corrected to "SIL OFL"; cross-checked against
  `03-type/LICENSES.md` and JetBrains' own font repository, which ships the
  binary under OFL 1.1.

### PDF export pagination (this pass)
- **Issue (defect found during this pass).** Chromium's print-to-pdf on the
  full 26-slide deck, printed as one multi-page flex-stacked HTML document,
  silently dropped a page — the exported PDF had 25 pages, not 26. This is
  the same underlying Chromium pagination flakiness found and fixed on the
  Audit Report template (which produced 5 pages instead of 3), just
  manifesting as a dropped page instead of phantom extra ones.
  **Where.** `WeChinaSourcing-Brand-Guidelines.pdf` export pipeline.
  **Verification.** Detected by loading the exported PDF with `pdf-lib` and
  counting pages programmatically (25 ≠ 26) rather than trusting the export
  to succeed silently. Fixed with the same isolate-and-merge pattern: each
  of the 26 slides rendered to its own single-page PDF, then merged.
  Final file confirmed at exactly 26 pages, all a consistent 960×540pt.
  `Quick-Start-Sheet.pdf` (a single-page document, not subject to this
  multi-page bug) was independently confirmed at exactly 1 page.

## Open items (tracked, not yet closed)

- `source/` (the editable build-source mirror shipped alongside the
  deliverables) needs a full re-sync to match every file changed in this
  changelog — it currently reflects the pre-Stage-2 (25-page) version.
- Native-Chinese professional review of the Noto Sans SC sample copy used
  throughout the Guidelines document (per the document's own translation
  policy, p.22) has not been performed as part of this pass.
- Legal review of substantiated claims (Voice & Messaging, p.20) is
  referenced by the document's own governance workflow but has not been
  performed as part of this pass.
