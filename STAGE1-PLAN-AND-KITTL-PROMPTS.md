# WeChinaSourcing Brand Guidelines — Stage 1 Deliverable

Audit + change plan + asset manifest + Kittl prompts. **No PDF or deck file has been edited to produce this document** — Stage 2 begins only after you upload assets and say "Proceed with Stage 2."

---

## A. Change Plan

Verified directly against the current 25-page deck and `brand-assets/` package (not assumed).

| # | Page(s) | Current state (verified) | Exact change |
|---|---|---|---|
| 1 | p.8 Foundation Palette | Contrast shown: Navy/white 15.2:1, Teal/white 3.4:1. Computed against `#FFFFFF`, not the actual base token `#FEFEFE`. | Recompute and redisplay: Navy/Porcelain **15.1:1**, Teal/Porcelain **3.3:1**. Slate (8.1:1) and Teal/Navy (4.5:1) already correct — re-verify, don't just re-copy. |
| 2 | p.9 Semantic Tokens | Neutral scale and status tint backgrounds (`success-bg`, `warning-bg`, etc.) were interpolated toward `#FFFFFF` in the generating script, not `#FEFEFE`. | Re-derive the full neutral scale and all four status tint pairs from `#FEFEFE` as the true endpoint; redisplay every ratio in the table. This is broader than the 2 headline numbers — every row gets re-verified, not assumed correct. |
| 3 | p.7 Misuse & Corrected Alternatives | 6 illustrated WRONG→RIGHT cards. Missing "unauthorized container/outline" and "redraw with system fonts," which p.24 Quick Start *does* list (8 items total). | Add a compact, text-only "Two Additional Prohibited Practices" rule band below the 6 cards (not two more illustrated cards — would compress type). Confirms p.7 and p.24 agree on the same 8 items, worded identically. |
| 4 | p.5 Approved Lockups & Colour Variants | Navy/Black/Reversed-White shown for the **icon mark only**. Primary Horizontal and Stacked lockups shown in full colour only — no colour-variant coverage. | Split into two pages: **p.5 Lockups by Composition** (the 3 compositions, as now) + new **p.5B Colour Variants — Full Lockups** (Horizontal × Stacked × Icon, each in Full/Navy/Black/Reversed = 12 cells, generously spaced). Adds 1 page → deck becomes 26 pages; every subsequent page number and cross-reference shifts by +1 and must be re-checked. |
| 5 | p.18 Physical Applications | Mockup captions are descriptive ("Mono-navy mark, top-left") but don't cite a filename. | Update each caption to name the exact asset file used (e.g. "Inspection Seal — `wcs_icon_navy.svg`"), matching the new manifest naming below. |
| 6 | p.22 Governance | Folder tree and naming convention (`wcs_[lockup]_[color]_[size]_[version].ext`) don't match the manifest you specified in this brief. `CHANGELOG.md` is described conceptually, not a real file. | Update the documented tree and naming pattern to match Section B exactly (version moves out of the filename, tracked via `CHANGELOG.md` instead). Reference the real `CHANGELOG.md` once it exists. |
| 7 | p.13 Photography & Image Art Direction | 6 placeholder hatch-pattern frames, no real imagery (none had been supplied). | Once your 6 Kittl images are uploaded: replace the 6 placeholders with the actual images, add an explicit **Documentary vs. Illustrative** framework (definitions below), and stamp the mandatory disclaimer under each AI-sourced image. |
| 8 | p.23 Tokens Reference | Excerpt shown should still match `tokens.css`/`tokens.json` after the ratio corrections (hex values don't change, only displayed ratios do) | Re-verify excerpt matches the real files byte-for-byte after Stage 2 edits. |
| 9 | p.24 Quick Start + `Quick-Start-Sheet.pdf` | "8 things never to do" list — verify wording matches p.7's now-8-total exactly. | Final consistency pass once p.7 is updated. |
| 10 | Deck-wide | Page-reference callouts (e.g. "see p.6") will be stale once p.5B is inserted. | Full renumbering + cross-reference audit — every "(p.N)" citation gets checked, not just the ones near the insertion point. |

**Not changed:** logo geometry, palette hex values, tagline, positioning, mission, personality matrix, voice pillars, or any factual/claims language — none of that is in scope per your brief.

---

## B. Asset Manifest

Status column reflects what's **actually on disk right now**, verified by directory listing — not assumed.

```
brand-assets/
  01-logo/
    svg/
      wcs_horizontal_full.svg              ❌ MISSING — wordmark is currently live Urbanist
      wcs_horizontal_navy.svg              ❌ MISSING — text, not outlined; needs font→path
      wcs_horizontal_black.svg             ❌ MISSING — conversion to ship as true vector
      wcs_horizontal_reversed-white.svg    ❌ MISSING
      wcs_stacked_full.svg                 ❌ MISSING (same font-outline issue)
      wcs_stacked_navy.svg                 ❌ MISSING
      wcs_stacked_black.svg                ❌ MISSING
      wcs_stacked_reversed-white.svg       ❌ MISSING
      wcs_icon_full.svg                    ✅ EXISTS (as wcs_icon_full_v1.1.svg — will be renamed)
      wcs_icon_navy.svg                    ✅ EXISTS (renamed from _v1.1 suffix)
      wcs_icon_black.svg                   ✅ EXISTS (renamed from _v1.1 suffix)
      wcs_icon_reversed-white.svg          ✅ EXISTS (renamed from _v1.1 suffix)
    png/
      icon:      32/64/128 (@1x/2x/3x of a 32px base) + 256/512 (large) × 4 colors  ✅ sizes exist, ⚠️ will be renamed off the @1x/2x/3x convention
      horizontal: @1x 320w / @2x 640w / @3x 960w × 4 colors                          ❌ only "full" exists, only @2x, no navy/black/reversed
      stacked:    @1x 240w / @2x 480w / @3x 720w × 4 colors                          ❌ only "full" exists, only @2x, no navy/black/reversed
    favicon/
      favicon-16.png    ✅ EXISTS
      favicon-32.png    ✅ EXISTS
      favicon-48.png    ❌ MISSING — not previously generated
      apple-touch-icon-180.png  ✅ EXISTS
      icon-192.png      ✅ EXISTS
      icon-512.png      ✅ EXISTS
  02-color/
    tokens.css     ✅ EXISTS — values correct; ⚠️ neutral/status scale needs re-derivation from #FEFEFE (item 2 above)
    tokens.json    ✅ EXISTS — same caveat
  03-type/
    licence records (Urbanist, DM Sans, JetBrains Mono, Noto Sans SC — all SIL OFL / Apache 2.0)  ❌ MISSING as files — currently inline mentions only, no dedicated licence-record document
    specimens (one reference sheet per typeface)                                                    ❌ MISSING as standalone files — currently only embedded in deck p.10–11
  04-templates/
    slide deck (WeChinaSourcing-Brand-Guidelines.html/.pdf)   ✅ EXISTS
    audit report                                              ❌ MISSING as a standalone template — currently only a small mockup graphic on deck p.18, not a usable/editable template file
    shipping label                                            ❌ MISSING as a standalone template — same issue
    quick-start sheet (Quick-Start-Sheet.html/.pdf)            ✅ EXISTS
  CHANGELOG.md   ❌ MISSING — described conceptually in the deck, never created as a real file
```

**Font-outline note (SVG horizontal/stacked):** Urbanist is open-license (SIL OFL, Google Fonts) so converting its glyphs to vector outline paths for the wordmark is legally clean and does not constitute "redrawing the logo" — only the icon mark's geometry is locked; the wordmark is standard typeset text. This conversion is planned for Stage 2 and does not require new assets from you.

---

## C. Kittl Image Prompts

All six follow the same rules: no rendered logo/text/barcodes/report numbers in the generated image, true-to-life color, no teal/navy wash, no stock-handshake or staged-smile aesthetic, no cinematic/luxury-tech treatment, no fabricated paperwork or safety conditions. **Every placement carries the mandatory caption: "Illustrative art direction — AI-generated, not inspection evidence."**

### 1. Inspector at Work
- **Filename:** `kittl_inspector-at-work.jpg`
- **Page/placement:** p.13 Photography & Image Art Direction, card 1 of 6
- **Aspect ratio / min size:** 3:2 landscape, min 2400×1600px
- **Prompt:** "Documentary-style photograph of a factory quality inspector in a light-colored polo shirt and safety vest, actively measuring a metal component with digital calipers on a stainless workbench, inside a well-lit industrial factory environment. Natural overhead fluorescent factory lighting, true-to-life color, inspector's face in three-quarter profile looking down at the work, not at camera. Shallow depth of field with soft-focus factory equipment in the background. Realistic, unposed, candid documentary photojournalism style, muted industrial palette of grays, blues, and metal tones."
- **Negative prompt:** "logos, text, watermarks, barcodes, report numbers, labels, branding, company names, smiling at camera, staged handshake, posed thumbs-up, teal or navy color wash, cinematic lens flare, dramatic rim lighting, bokeh, stock-photo aesthetic, luxury or futuristic styling, empty staged factory, safety violations, fabricated paperwork"
- **Crop-safe area:** Inspector and workbench centered in the middle 80% of frame; quiet ~10% margin on the left edge reserved for an optional logo overlay.
- **SVG-overlay instruction:** If used behind a title, place `wcs_icon_reversed-white.svg` (or `wcs_horizontal_reversed-white.svg` once produced) at low opacity in the quiet left margin only — never over the inspector's face, hands, or the workbench detail. Composite as a separate vector layer in Kittl; do not regenerate or trace the logo.

### 2. Product Detail — Macro
- **Filename:** `kittl_product-detail-macro.jpg`
- **Page/placement:** p.13, card 2 of 6
- **Aspect ratio / min size:** 4:3, min 2000×1500px
- **Prompt:** "Macro photograph of a manufactured product component (machined metal bracket or electronic connector) on a neutral gray surface, with a stainless steel dimensional caliper visibly measuring it. Studio ring-light illumination, true-to-life color, extremely sharp focus on surface texture and edges, soft natural shadow, minimal background clutter. Clean, clinical, evidentiary documentary product photography, no lifestyle staging."
- **Negative prompt:** "logos, text overlays, barcodes, serial numbers, watermark, brand marks, fake packaging branding, teal/navy color grading, glamour lighting, bokeh, reflections revealing studio branding, glossy stock-photo finish"
- **Crop-safe area:** Product and gauge in the middle 70% of frame; ≥15% clear margin on all sides.
- **SVG-overlay instruction:** Normally used without a logo overlay (stands alone as detail evidence). If a corner mark is required for a printed spec sheet, place `wcs_icon_navy.svg` at ≤24px in the bottom-right corner only, clear of the product and gauge.

### 3. Factory Floor — Wide
- **Filename:** `kittl_factory-floor-wide.jpg`
- **Page/placement:** p.13, card 3 of 6 (also candidate for a p.18 section-divider background)
- **Aspect ratio / min size:** 16:9, min 3200×1800px
- **Prompt:** "Wide establishing photograph of a believable industrial manufacturing floor, rows of production equipment extending into the middle distance, a few workers engaged in genuine tasks at their stations, overhead industrial lighting mixed with daylight from high windows, true-to-life color with the natural warm-cool mix typical of factory lighting, slight depth haze for realism. Wide-angle documentary photojournalism composition, lived-in, not sterile or staged."
- **Negative prompt:** "logos, signage text, barcodes, watermark, brand names on machinery, workers smiling or posing at camera, staged handshake, empty pristine showroom-like factory, teal or navy color wash, cinematic god-rays, HDR over-processing, luxury-tech styling, safety violations, fabricated certificates or paperwork"
- **Crop-safe area:** Working floor detail in the center 80%; plain ceiling/upper-wall band across the top ~15% suitable for title overlay; quiet lower-left ~10% zone for an optional logo.
- **SVG-overlay instruction:** If used full-bleed as a section-divider background, place `wcs_horizontal_reversed-white.svg` (once produced) or `wcs_icon_reversed-white.svg` in the quiet lower-left zone only — never over workers or equipment.

### 4. Documentation in Hand
- **Filename:** `kittl_documentation-in-hand.jpg`
- **Page/placement:** p.13, card 4 of 6
- **Aspect ratio / min size:** 3:2, min 2400×1600px
- **Prompt:** "Close documentary photograph of hands holding a paper inspection checklist on a clipboard, or a tablet displaying a generic data table, over a factory workbench. Natural indirect light, true-to-life color, shallow depth of field with hands and document sharp and the factory background softly blurred. Clipboard/tablet content generic and illegible or abstract (blurred rows/columns) — not real or fabricated report data."
- **Negative prompt:** "legible report numbers, logos, watermark, barcodes, company names, real-looking certification stamps, fake signatures, teal/navy color wash, glossy corporate-brochure lighting, stock-photo handshake, staged smiling"
- **Crop-safe area:** Hands and document in the center 75%; soft blurred margin on all sides for flexible cropping to square or portrait formats.
- **SVG-overlay instruction:** Normally used without overlay. If placed on a cover/divider, add `wcs_icon_navy.svg` or `wcs_icon_reversed-white.svg` (matching background) small, in a bottom corner only.

### 5. Traceability — Batch / Label
- **Filename:** `kittl_traceability-batch-label.jpg`
- **Page/placement:** p.13, card 5 of 6
- **Aspect ratio / min size:** 4:3, min 2000×1500px
- **Prompt:** "Extreme close-up documentary photograph of a shipping carton corner or product tag showing a generic blank or abstractly-patterned label area and a printed batch/lot marking rendered as illegible abstract characters, factory environment softly out of focus behind. True-to-life color, sharp macro focus on the label's texture and printed edge, natural light. Depict the concept of traceability marking without rendering any real or convincing alphanumeric code."
- **Negative prompt:** "legible text, real-looking HS codes, logos, scannable-looking barcodes, watermark, brand names, teal/navy color wash, glamour product-photography gloss, fabricated certification marks"
- **Crop-safe area:** Label/marking area centered in the middle 65%, generous soft-focus margin on all sides (expect a tight crop for card use).
- **SVG-overlay instruction:** Not used with a logo overlay. If a supporting mark is needed, place `wcs_icon_navy.svg` small and fully separate — never touching or overlapping the label area, to avoid implying it's part of the real marking.

### 6. Portrait — Named & Credited
- **Filename:** `kittl_portrait-named-credited.jpg`
- **Page/placement:** p.13, card 6 of 6
- **Aspect ratio / min size:** 4:5 portrait, min 1600×2000px
- **Prompt:** "Professional documentary portrait of a factory quality inspector wearing a plain collared shirt or light industrial polo with no visible branding, three-quarter angle or direct gaze, soft natural or diffused studio light against a neutral out-of-focus industrial background. Calm, confident, credible expression — not a forced smile. True-to-life skin tones and color, shallow depth of field, professional but unpretentious editorial-portrait style."
- **Negative prompt:** "logos on clothing, name badges with fabricated names, ID badges with fake credentials, text overlays, watermark, teal/navy color wash, glamour/fashion lighting, stock-photo forced smile, luxury-corporate styling, fabricated company signage in background"
- **Crop-safe area:** Head and shoulders centered in the middle 70%, headroom above, chest-level space below for an optional name/credit caption bar.
- **SVG-overlay instruction:** Do not overlay the logo on the portrait itself. If a mark is needed for page context, place `wcs_icon_navy.svg` separately in a corner of the surrounding page layout — never on the person's image.

---

## D. File-Upload Checklist

Before Stage 2 begins, please provide:

- [ ] All 6 completed Kittl images (per filenames above)
- [ ] Confirmation the master `logo.svg` is unchanged (or a new master, if it's been updated since)
- [ ] Any existing logo variant files you already have (even informal ones) — used only for cross-reference, never as a redraw source
- [ ] Any real inspection photography, if available (kept strictly separate from the illustrative Kittl set — see Documentary vs. Illustrative distinction, item 7 above)
- [ ] Font files or confirmed licensed-source links for Urbanist, DM Sans, JetBrains Mono, Noto Sans SC (currently sourced from Google Fonts under SIL OFL / Apache 2.0 — confirm this is acceptable or provide alternate licensed files)
- [ ] Any existing tokens/templates outside this project, if they exist elsewhere in your organization

---

**Documentary vs. Illustrative — the distinction Stage 2 will enforce throughout:**
- **Documentary imagery**: real, traceable to a dated assignment, consented, may be cited as evidence in reports/claims.
- **Illustrative art direction**: conceptual, may be AI-generated, always carries the disclaimer, **never** used as evidence, in audit reports, factual claims, or customer-facing proof.
