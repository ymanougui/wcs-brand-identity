const { chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 8 — FOUNDATION PALETTE */
const primarySwatches = [
  { name: 'Deep Navy', role: 'Primary / Authority', hex: '#122350', rgb: '18, 35, 80', cmyk: '78, 56, 0, 69', pms: '2758 C*', wcag: '15.1:1 AAA on Porcelain White', bg: 'var(--navy)' },
  { name: 'Slate Blue', role: 'Secondary / Structure', hex: '#1F5474', rgb: '31, 84, 116', cmyk: '73, 28, 0, 55', pms: '7702 C*', wcag: '8.1:1 AAA on Porcelain White', bg: 'var(--slate)' },
  { name: 'Signal Teal', role: 'Accent / Verification', hex: '#2D9C91', rgb: '45, 156, 145', cmyk: '71, 0, 7, 39', pms: '7717 C*', wcag: '3.3:1 on Porcelain White — large text/UI only', bg: 'var(--teal)' },
  { name: 'Porcelain White', role: 'Base / Canvas', hex: '#FEFEFE', rgb: '254, 254, 254', cmyk: '0, 0, 0, 0', pms: 'White', wcag: 'n/a — base surface', bg: 'var(--white)', border: true },
];

function swatch(s) {
  return `
  <div class="swatch grow">
    <div class="chip" style="background:${s.bg};${s.border ? 'border-bottom:1px solid var(--n-100);' : ''}"></div>
    <div class="meta">
      <div class="role">${s.role}</div>
      <div class="name">${s.name}</div>
      <table>
        <tr><td class="k">HEX</td><td>${s.hex}</td></tr>
        <tr><td class="k">RGB</td><td>${s.rgb}</td></tr>
        <tr><td class="k">CMYK</td><td>${s.cmyk}</td></tr>
        <tr><td class="k">PMS</td><td>${s.pms}</td></tr>
      </table>
      <div class="caption" style="margin-top:7px; color:var(--navy); font-weight:600; font-size:10.5px;">${s.wcag}</div>
    </div>
  </div>`;
}

const neutralScale = ['50', '100', '200', '300', '500', '600'].map((k) => {
  const hexes = { 50: '#F2F3F5', 100: '#E6E8ED', 200: '#CFD2DB', 300: '#ABB1C1', 500: '#65708D', 600: '#414F73' };
  return `<div class="col grow" style="align-items:center;">
    <div style="width:100%;height:44px;background:${hexes[k]};border-radius:6px;border:1px solid var(--n-100);"></div>
    <div class="mono" style="font-size:10px;margin-top:5px;color:var(--n-600);">Neutral-${k}</div>
    <div class="mono" style="font-size:9px;color:var(--n-400);">${hexes[k]}</div>
  </div>`;
}).join('');

const slide9 = slideWrap(9, '', chrome(9, 'Colour System', 'Foundation Palette', {
  sub: 'Four locked hues extracted directly from the master mark. Every other color in the system — neutrals, status, focus — is derived from these.',
  bodyMt: 14,
  body: `
  <div class="row gap-16">${primarySwatches.map(swatch).join('')}</div>
  <div class="caption" style="margin-top:6px;">*Nearest coated Pantone equivalent — treat as a starting point only; confirm against a physical swatch book before production. Uncoated stock, textile dye lots, and foil substrates will all shift the match.</div>
  <div class="row gap-40" style="margin-top:16px;">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:10px;">Neutral Scale <span class="caption">— derived from Navy at fixed tint steps</span></h4>
      <div class="row gap-10">${neutralScale}</div>
      <div class="body-sm" style="margin-top:10px;">Neutral-600 on Porcelain White = 8.1:1 (AAA, safe for secondary text). Neutral-500 = 4.9:1 (AA floor for caption-size text). Neutral-300 and lighter fail text contrast — decorative, border, and disabled-state use only.</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:10px;">Why these four</h4>
      <div class="body-sm">Navy carries authority and reads as trustworthy officialdom worldwide. Slate is Navy's working cousin — structural, never decorative. Teal is reserved for verification and action, so it stays meaningful precisely because it's used sparingly. Porcelain White (not pure #FFFFFF) keeps large surfaces from glaring under studio and warehouse lighting alike.</div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 9 — SEMANTIC TOKENS & ACCESSIBILITY */
const tokenRows = [
  ['brand.primary', '#122350', 'On Porcelain White', '15.1:1', 'AAA', 'Wordmark, primary buttons, headers'],
  ['brand.secondary', '#1F5474', 'On Porcelain White', '8.1:1', 'AAA', 'Structural chrome, secondary buttons'],
  ['brand.accent', '#2D9C91', 'On Deep Navy', '4.5:1', 'AA', 'Active states, links, teal CTA fills (navy text on teal)'],
  ['text.primary', '#122350', 'On surface.base', '15.1:1', 'AAA', 'Body copy, headings'],
  ['text.secondary', '#414F73', 'On surface.base', '8.1:1', 'AAA', 'Supporting copy, captions'],
  ['text.tertiary', '#65708D', 'On surface.base', '4.9:1', 'AA', 'Meta text, timestamps — size ≥12.5px'],
  ['text.disabled', '#ABB1C1', 'On surface.base', '2.1:1', 'Exempt*', 'Disabled labels only — WCAG excludes inactive UI'],
  ['text.inverse', '#FEFEFE', 'On brand.primary', '15.1:1', 'AAA', 'Text on navy/dark surfaces'],
  ['border.default', '#E6E8ED', 'On surface.base', '—', 'n/a', 'Card, input, table dividers'],
  ['border.strong', '#CFD2DB', 'On surface.base', '—', 'n/a', 'Emphasized dividers, focus-adjacent'],
  ['success.text / success.bg', '#177750 / #E3F2EC', 'Text on tint', '4.8:1', 'AA', 'Pass, conforming, verified'],
  ['warning.text / warning.bg', '#975C14 / #F8EEE3', 'Text on tint', '4.8:1', 'AA', 'Pending, re-inspection, review'],
  ['danger.text / danger.bg', '#9C2721 / #F8E6E5', 'Text on tint', '6.4:1', 'AAA', 'Fail, non-conforming, blocked'],
  ['information.text / .bg', '#173F57 / #E3EAED', 'Text on tint', '9.2:1', 'AAA', 'In transit, informational'],
  ['focus.ring', '#2D9C91', 'On surface.base', '3.3:1', 'AA (UI)*', '2px outline, 2px offset — non-text 3:1 minimum'],
  ['disabled.bg', '#F2F3F5', 'On surface.base', '—', 'n/a', 'Inactive control fill'],
];

const slide10 = slideWrap(10, '', chrome(10, 'Colour System', 'Semantic Tokens &amp; Accessibility', {
  sub: 'Every token below carries a pre-checked, accessible foreground/background pairing — status is never conveyed by color alone.',
  bodyMt: 8,
  body: `
  <div class="row" style="padding:4px 0; border-bottom:2px solid var(--navy);">
    <div class="caption" style="width:210px;text-transform:uppercase;">Token</div>
    <div class="caption" style="width:150px;text-transform:uppercase;">Value</div>
    <div class="caption" style="width:120px;text-transform:uppercase;">Pairing</div>
    <div class="caption" style="width:70px;text-transform:uppercase;">Ratio</div>
    <div class="caption" style="width:70px;text-transform:uppercase;">Level</div>
    <div class="caption" style="flex:1;text-transform:uppercase;">Usage</div>
  </div>
  ${tokenRows.map(([tok, val, pair, ratio, level, usage]) => `
  <div class="row" style="padding:4px 0; border-bottom:1px solid var(--n-100); align-items:center;">
    <div class="mono" style="width:210px;font-size:11px;color:var(--navy);font-weight:600;">${tok}</div>
    <div class="mono" style="width:150px;font-size:10.5px;color:var(--n-600);">${val}</div>
    <div class="body-sm" style="width:120px;font-size:10.5px;">${pair}</div>
    <div class="mono" style="width:70px;font-size:10.5px;color:var(--navy);">${ratio}</div>
    <div class="mono" style="width:70px;font-size:10.5px;color:${level.startsWith('AAA') ? 'var(--pass-text)' : level.startsWith('AA') ? 'var(--navy)' : 'var(--n-400)'};">${level}</div>
    <div class="body-sm" style="flex:1;font-size:10.5px;">${usage}</div>
  </div>`).join('')}
  <div class="caption" style="margin-top:5px;">*Disabled/inactive controls are excluded from WCAG 1.4.3 text contrast; non-text UI boundaries (1.4.11) need only 3:1 — Signal Teal clears that at 3.3:1 on Porcelain White despite failing as body text.</div>
  `
}));

module.exports = { slide9, slide10 };
