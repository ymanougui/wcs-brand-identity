const fs = require('fs');
const path = require('path');
const { css } = require('../css');

const outDir = __dirname;

const chromeTop = (kicker, idx) => `
<div class="chrome-top">
  <div class="kicker"><b>WECHINASOURCING</b> &nbsp;/&nbsp; TYPE SPECIMEN &nbsp;/&nbsp; ${kicker}</div>
  <div class="page-idx">SPECIMEN ${idx} / 2</div>
</div>`;

const chromeBottom = () => `
<div class="chrome-bottom">
  <div class="foot-label">Brand Assets — 03-type/</div>
  <div class="foot-label">Standalone reference — not a deck page</div>
</div>`;

function familyCard(opts) {
  const { name, fontVar, role, licence, weights, sample, chinese } = opts;
  return `<div class="card" style="padding:20px 22px; display:flex; flex-direction:column; gap:10px;">
    <div class="row" style="justify-content:space-between; align-items:flex-start;">
      <div>
        <div class="ov">${role}</div>
        <div style="font-family:${fontVar}; font-weight:800; font-size:30px; color:var(--navy); margin-top:2px;">${name}</div>
      </div>
      <div class="pill pass"><span class="dot"></span>${licence}</div>
    </div>
    <div style="font-family:${fontVar}; font-size:20px; color:var(--n-600); letter-spacing:.01em;">${sample}</div>
    ${chinese ? `<div style="font-family:${fontVar}; font-size:18px; color:var(--n-600);">${chinese}</div>` : ''}
    <div class="row gap-8" style="margin-top:4px; flex-wrap:wrap;">
      ${weights.map(w => `<span class="pill info" style="font-family:${fontVar}; font-weight:${w.w};">${w.label}</span>`).join('')}
    </div>
  </div>`;
}

const page1 = `<div class="slide">
  ${chromeTop('FAMILY OVERVIEW', 1)}
  <div class="content-area">
    <div class="ov">Four Typefaces — Open License</div>
    <h1 class="slide-title" style="font-size:34px; line-height:38px; margin-top:4px;">Type Specimen — Family Overview</h1>
    <div class="slide-sub" style="font-size:13px; line-height:19px; margin-top:6px; max-width:900px;">Full licence records at <span class="mono">03-type/LICENSES.md</span>. All four families are SIL Open Font License 1.1, sourced from Google Fonts — free to embed, modify, and redistribute as part of this system.</div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:16px;">
      ${familyCard({
        name: 'Urbanist', fontVar: "'Urbanist',sans-serif", role: 'Heading / Display',
        licence: 'SIL OFL 1.1', sample: 'AaBbCcDdEe 0123456789',
        weights: [{ label: '600 SemiBold', w: 600 }, { label: '700 Bold', w: 700 }, { label: '800 ExtraBold', w: 800 }, { label: '900 Black', w: 900 }],
      })}
      ${familyCard({
        name: 'DM Sans', fontVar: "'DM Sans',sans-serif", role: 'Body / UI Text',
        licence: 'SIL OFL 1.1', sample: 'AaBbCcDdEe 0123456789',
        weights: [{ label: '400 Regular', w: 400 }, { label: '500 Medium', w: 500 }, { label: '700 Bold', w: 700 }],
      })}
      ${familyCard({
        name: 'JetBrains Mono', fontVar: "'JetBrains Mono',monospace", role: 'Data / Monospace',
        licence: 'SIL OFL 1.1', sample: 'AaBbCcDdEe 0123456789',
        weights: [{ label: '400 Regular', w: 400 }, { label: '500 Medium', w: 500 }, { label: '600 SemiBold', w: 600 }],
      })}
      ${familyCard({
        name: 'Noto Sans SC', fontVar: "'Noto Sans SC',sans-serif", role: 'Simplified Chinese',
        licence: 'SIL OFL 1.1', sample: 'AaBbCcDdEe 0123456789',
        chinese: '验证于源头 — 品质保证与供应链可信度',
        weights: [{ label: '400 Regular', w: 400 }, { label: '500 Medium', w: 500 }, { label: '700 Bold', w: 700 }],
      })}
    </div>
  </div>
  ${chromeBottom()}
</div>`;

const scaleRow = (label, px, fontVar, weight, sample, color) => `
<div class="row" style="align-items:baseline; gap:16px; padding:8px 0; border-bottom:1px solid var(--n-100);">
  <div class="mono" style="width:132px; font-size:10.5px; color:var(--n-400); flex-shrink:0;">${label} · ${px}</div>
  <div style="font-family:${fontVar}; font-weight:${weight}; font-size:${px}; color:${color || 'var(--navy)'}; line-height:1.15; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${sample}</div>
</div>`;

const page2 = `<div class="slide">
  ${chromeTop('SCALE & PAIRING', 2)}
  <div class="content-area">
    <div class="ov">Type Scale In Context</div>
    <h1 class="slide-title" style="font-size:34px; line-height:38px; margin-top:4px;">Scale, Data, and Bilingual Pairing</h1>
    <div class="row gap-24" style="margin-top:14px; align-items:flex-start;">
      <div class="col" style="flex:1.3;">
        ${scaleRow('H1 / Urbanist 800', '46px', "'Urbanist',sans-serif", 800, 'Verified at the Source.')}
        ${scaleRow('H2 / Urbanist 700', '32px', "'Urbanist',sans-serif", 700, 'Factory Audits, Documented.')}
        ${scaleRow('H3 / Urbanist 700', '24px', "'Urbanist',sans-serif", 700, 'Section Heading Example')}
        ${scaleRow('Body-LG / DM Sans', '16px', "'DM Sans',sans-serif", 400, 'On-site inspection reports built for procurement teams who need evidence, not assurances.')}
        ${scaleRow('Body / DM Sans', '14px', "'DM Sans',sans-serif", 400, 'Every claim in this system is scoped, dated, and traceable to a named inspector.')}
        ${scaleRow('Mono / JetBrains', '12.5px', "'JetBrains Mono',monospace", 500, 'HS 8471.30 · BATCH-2026-0417 · CTN 118/240', 'var(--slate)')}
      </div>
      <div class="col gap-12" style="flex:1; background:var(--n-50); border-radius:10px; padding:18px 20px;">
        <div class="ov">Bilingual Pairing Rule</div>
        <div style="font-family:'Urbanist',sans-serif; font-weight:800; font-size:22px; color:var(--navy); line-height:1.25;">Verified at the Source.</div>
        <div style="font-family:'Noto Sans SC',sans-serif; font-weight:700; font-size:22px; color:var(--navy); line-height:1.35;">源头验证。</div>
        <div class="caption" style="margin-top:4px;">English sets in Urbanist/DM Sans; Simplified Chinese sets in Noto Sans SC at the matching weight tier (SemiBold↔700, Regular↔400). Never mix a Latin heading font with CJK glyphs — Noto Sans SC is the only approved CJK face system-wide.</div>
        <div style="height:1px; background:var(--n-200); margin:6px 0;"></div>
        <div style="font-family:'DM Sans',sans-serif; font-size:13px; color:var(--n-600); line-height:1.5;">Third-party inspection, verified.</div>
        <div style="font-family:'Noto Sans SC',sans-serif; font-size:13px; color:var(--n-600); line-height:1.6;">第三方检验，真实可信。</div>
      </div>
    </div>
  </div>
  ${chromeBottom()}
</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style>
</head><body><div class="deck">${page1}${page2}</div></body></html>`;

fs.writeFileSync(path.join(outDir, '_type_specimen.html'), html);
console.log('wrote _type_specimen.html');
