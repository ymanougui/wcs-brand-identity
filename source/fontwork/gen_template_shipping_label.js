const fs = require('fs');
const path = require('path');
const { css } = require('../css');
const { logoMark, circularStamp } = require('../shared');

const outDir = __dirname;

// Standard 4in x 6in carrier label, at 96 CSS px/in => 384 x 576 px.
const docCss = `
.label{ width:384px; height:576px; position:relative; overflow:hidden; background:var(--white); box-shadow:0 18px 50px rgba(6,12,30,.35); font-family:var(--font-body); }
.lp{ padding:14px 16px; }
.field{ border:1px dashed var(--n-300); border-radius:4px; background:var(--n-50); padding:5px 8px; font-family:var(--font-mono); font-size:9.5px; color:var(--n-400); font-style:italic; }
.doc-label{ font-family:var(--font-mono); font-size:8px; letter-spacing:.1em; text-transform:uppercase; color:var(--n-500); margin-bottom:4px; font-weight:600; font-style:normal; }
@media print{ @page{ size:384px 576px; margin:0; } body{background:#fff;} .stand{padding:0;} .label{box-shadow:none;} }
.stand{ display:flex; align-items:center; justify-content:center; padding:24px; background:#5b6270; }
`;

const label = `<div class="label">
  <div style="background:var(--navy); padding:12px 16px; display:flex; align-items:center; justify-content:space-between;">
    <div class="row gap-8" style="align-items:center;">
      <div style="width:18px;height:18px;">${logoMark('white')}</div>
      <div style="font-family:var(--font-head); font-weight:800; font-size:12px; color:#fff;">WeChinaSourcing</div>
    </div>
    <div class="mono" style="font-size:8px; color:#7FD9CC; letter-spacing:.1em;">SHIPPING LABEL</div>
  </div>

  <div class="lp">
    <div class="doc-label">Ship From</div>
    <div class="field" style="min-height:44px; margin-bottom:10px; font-size:10px;">[Factory / supplier name]<br/>[Address line 1, line 2]<br/>[City, province, postal code, country]</div>

    <div class="doc-label">Ship To</div>
    <div class="field" style="min-height:44px; margin-bottom:12px; font-size:10px;">[Consignee name]<br/>[Address line 1, line 2]<br/>[City, state, ZIP, country]</div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px 8px; margin-bottom:12px;">
      <div><div class="doc-label">PO Ref.</div><div class="field" style="font-size:9px;">[PO-XXXXX]</div></div>
      <div><div class="doc-label">HS Code</div><div class="field" style="font-size:9px;">[8517.62]</div></div>
      <div><div class="doc-label">Carton</div><div class="field" style="font-size:9px;">[CTN __ / __]</div></div>
      <div><div class="doc-label">Gross Wt.</div><div class="field" style="font-size:9px;">[__ kg]</div></div>
    </div>

    <div class="doc-label">Package Contents</div>
    <div class="field" style="margin-bottom:12px; font-size:9px;">[Product description, quantity, units]</div>

    <div class="doc-label">Carrier Barcode / QR</div>
    <div style="border:1.5px dashed var(--n-300); border-radius:6px; height:104px; display:flex; align-items:center; justify-content:center; background:var(--n-50); margin-bottom:12px;">
      <div class="mono" style="font-size:8.5px; color:var(--n-400); text-align:center; line-height:14px; max-width:80%;">Generate from carrier / WMS system —<br/>do not substitute artwork here.</div>
    </div>

    <div class="row gap-16" style="margin-bottom:12px;">
      <div class="row gap-8" style="align-items:center;"><i class="fa-solid fa-wine-glass" style="color:var(--n-500); font-size:11px;"></i><span class="caption" style="font-size:8.5px;">Fragile</span></div>
      <div class="row gap-8" style="align-items:center;"><i class="fa-solid fa-arrow-up" style="color:var(--n-500); font-size:11px;"></i><span class="caption" style="font-size:8.5px;">This Side Up</span></div>
      <div class="row gap-8" style="align-items:center;"><i class="fa-solid fa-droplet-slash" style="color:var(--n-500); font-size:11px;"></i><span class="caption" style="font-size:8.5px;">Keep Dry</span></div>
    </div>

    <div style="height:1px; background:var(--n-100); margin-bottom:10px;"></div>

    <div class="row" style="align-items:center; justify-content:space-between;">
      <div class="row gap-8" style="align-items:center;">
        <div style="opacity:.9;">${circularStamp('label', 40, { color: 'var(--navy)' })}</div>
        <div class="caption" style="font-size:8px; line-height:11px; max-width:130px;">Verified at the Source.<br/>wechinasourcing.com</div>
      </div>
      <div class="mono" style="font-size:8px; color:var(--n-400); text-align:right;">Mono-navy mark only —<br/>see p.19 Physical Applications</div>
    </div>
  </div>
</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}${docCss}</style>
</head><body><div class="stand">${label}</div></body></html>`;

const targetDir = path.resolve(__dirname, '../../brand-assets/04-templates');
fs.writeFileSync(path.join(outDir, '_template_shipping_label.html'), html);
fs.writeFileSync(path.join(targetDir, 'wcs_template_shipping-label.html'), html);
console.log('wrote wcs_template_shipping-label.html to', targetDir);

const singleHtml = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}${docCss}</style>
</head><body><div class="stand" style="padding:0;">${label}</div></body></html>`;
fs.writeFileSync(path.join(outDir, '_sl_page1.html'), singleHtml);
console.log('wrote _sl_page1.html for PDF export');
