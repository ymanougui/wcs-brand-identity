# Typeface Licence Records

WeChinaSourcing Brand Identity & Visual Style Guidelines v1.1
All four typefaces are open-license, freely embeddable in web, print, and
software products, and require no per-seat or per-project licence purchase.

---

## Urbanist
- **Role:** Heading / Display
- **Weights used:** 400, 500, 600, 700, 800, 900 (variable font)
- **Designer:** Ranga Yogeshwar / The Urbanist Project (via Google Fonts)
- **Licence:** SIL Open Font License 1.1
- **Licence text:** https://openfontlicense.org
- **Source:** https://fonts.google.com/specimen/Urbanist
- **Direct file used (ExtraBold 800, for logo wordmark outline extraction):**
  `https://fonts.gstatic.com/s/urbanist/v18/L0xjDF02iFML4hGCyOCpRdycFsGxSrqDSxkfFg.ttf`
- **Permitted use:** embedding in documents/software, modification, redistribution
  as part of a larger work (e.g. converting glyphs to vector outlines for the
  logo wordmark, as done for this system's horizontal/stacked lockups).
  SIL OFL requires the font itself not be sold on a standalone basis — this
  does not restrict its use inside the WeChinaSourcing brand system.

## DM Sans
- **Role:** Body / UI text
- **Weights used:** 400, 500, 700 (variable font)
- **Designer:** Colophon Foundry / Google Fonts
- **Licence:** SIL Open Font License 1.1
- **Licence text:** https://openfontlicense.org
- **Source:** https://fonts.google.com/specimen/DM+Sans

## JetBrains Mono
- **Role:** Data / monospace (HS codes, container IDs, batch numbers)
- **Weights used:** 400, 500, 600 (variable font)
- **Designer:** JetBrains
- **Licence:** SIL Open Font License 1.1 (some JetBrains distributions use
  Apache 2.0 for the source tooling — the font binary itself, as distributed
  via Google Fonts, is SIL OFL 1.1)
- **Licence text:** https://openfontlicense.org
- **Source:** https://fonts.google.com/specimen/JetBrains+Mono

## Noto Sans SC
- **Role:** Simplified Chinese heading, body, and data fallback
- **Weights used:** 400, 500, 600, 700
- **Designer:** Google Noto Project (in collaboration with Adobe — the CJK
  glyph set is shared with the "Source Han Sans" family)
- **Licence:** SIL Open Font License 1.1
- **Licence text:** https://openfontlicense.org
- **Source:** https://fonts.google.com/noto/specimen/Noto+Sans+SC

---

## Embedding in this system

All four fonts are loaded via the Google Fonts CDN in the brand guidelines
HTML/PDF and in any product built against `tokens.css`:

```
https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900
  &family=DM+Sans:wght@400;500;700
  &family=JetBrains+Mono:wght@400;500;600
  &family=Noto+Sans+SC:wght@400;500;600;700&display=swap
```

For offline/self-hosted use (e.g. an internal tool with no internet access),
download the same weight sets directly from fonts.google.com under the same
SIL OFL 1.1 terms — no additional permission is required.

## What SIL OFL 1.1 permits and requires (plain-language summary)

This summary is for internal reference only — always consult the actual
licence text linked above for anything with legal weight.

- ✅ Use in commercial products, embed in documents/apps, modify for
  technical needs (e.g. subsetting, outline extraction).
- ✅ Redistribute as part of a larger software or brand-asset bundle (like
  this one).
- ❌ Sell the font file itself as a standalone product.
- ❌ Use the font's own name to claim authorship of a modified version —
  a substantially modified font must be renamed.
