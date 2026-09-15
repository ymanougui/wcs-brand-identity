const fs = require('fs');
const path = require('path');
const { css } = require('../css');
const { logoMark, circularStamp } = require('../shared');

const outDir = __dirname;

// Document-level CSS layered on top of the shared token/reset css. Real A4 pages,
// not 16:9 slides — this is a usable print document, not a deck page.
const docCss = `
.page{ width:794px; height:1123px; position:relative; overflow:hidden; background:var(--white); box-shadow:0 18px 50px rgba(6,12,30,.35); }
.pad{ padding:16mm 16mm; }
.field{ border:1px dashed var(--n-300); border-radius:4px; background:var(--n-50); padding:6px 10px; font-family:var(--font-mono); font-size:10.5px; color:var(--n-400); font-style:italic; }
.field b{ font-style:normal; color:var(--n-500); font-weight:600; }
.doc-label{ font-family:var(--font-mono); font-size:9px; letter-spacing:.12em; text-transform:uppercase; color:var(--n-400); margin-bottom:4px; }
table.findings{ width:100%; border-collapse:collapse; }
table.findings th{ font-family:var(--font-mono); font-size:8.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--n-500); text-align:left; padding:6px 8px; border-bottom:1.5px solid var(--navy); }
table.findings td{ font-size:10px; color:var(--navy); padding:7px 8px; border-bottom:1px solid var(--n-100); vertical-align:top; }
table.findings td.n{ font-family:var(--font-mono); color:var(--n-500); width:22px; }
.doc-header{ display:flex; align-items:center; justify-content:space-between; padding-bottom:10px; border-bottom:1.5px solid var(--navy); margin-bottom:14px; }
.doc-footer{ position:absolute; left:16mm; right:16mm; bottom:10mm; display:flex; align-items:center; justify-content:space-between; padding-top:8px; border-top:1px solid var(--n-100); }
.doc-footer .foot-label{ font-family:var(--font-mono); font-size:8px; letter-spacing:.08em; color:var(--n-400); text-transform:uppercase; }
@media print{ @page{ size:794px 1123px; margin:0; } body{background:#fff;} .stack{gap:0; padding:0;} .page{box-shadow:none; page-break-after:always;} }
.stack{ display:flex; flex-direction:column; align-items:center; gap:24px; padding:24px 0 50px; background:#5b6270; }
`;

function docFooter(pageNo) {
  return `<div class="doc-footer">
    <div class="foot-label">WeChinaSourcing — Factory Audit Report Template</div>
    <div class="foot-label">Page ${pageNo} of 3</div>
  </div>`;
}

function docHeader(refNo) {
  return `<div class="doc-header">
    <div class="row gap-10" style="align-items:center;">
      <div style="width:22px;height:22px;">${logoMark('navy')}</div>
      <div>
        <div style="font-family:var(--font-head); font-weight:800; font-size:13px; color:var(--navy); line-height:14px;">WeChinaSourcing</div>
        <div class="mono" style="font-size:8px; color:var(--n-500); letter-spacing:.08em;">FACTORY AUDIT REPORT</div>
      </div>
    </div>
    <div class="mono" style="font-size:9.5px; color:var(--n-500);">${refNo}</div>
  </div>`;
}

/* ---------------- PAGE 1 — COVER ---------------- */
const page1 = `<div class="page" style="background:var(--navy); color:#fff;">
  <div class="motif-grid-navy"></div>
  <div class="pad" style="height:100%; display:flex; flex-direction:column; position:relative;">
    <div class="row gap-10" style="align-items:center;">
      <div style="width:26px;height:26px;">${logoMark('white')}</div>
      <div style="font-family:var(--font-head); font-weight:800; font-size:15px; color:#fff;">WeChinaSourcing</div>
    </div>
    <div style="flex:1; display:flex; flex-direction:column; justify-content:center; max-width:130mm;">
      <div class="mono" style="font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:#7FD9CC; margin-bottom:14px;">Third-Party Quality &amp; Compliance Inspection</div>
      <div style="font-family:var(--font-head); font-weight:800; font-size:38px; line-height:42px; color:#fff;">Factory Audit<br/>Report</div>
      <div style="height:1px; background:rgba(255,255,255,.18); margin:22px 0;"></div>
      <div class="col gap-10">
        <div class="row gap-10"><div class="mono" style="width:34mm; font-size:9px; color:#8592AD; letter-spacing:.08em;">REF. NO.</div><div class="field" style="background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.28); color:#B7C3DA; flex:1;">FA-2026-<b style="color:#B7C3DA;">[sequence]</b></div></div>
        <div class="row gap-10"><div class="mono" style="width:34mm; font-size:9px; color:#8592AD; letter-spacing:.08em;">SUPPLIER</div><div class="field" style="background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.28); color:#B7C3DA; flex:1;">[Supplier legal name]</div></div>
        <div class="row gap-10"><div class="mono" style="width:34mm; font-size:9px; color:#8592AD; letter-spacing:.08em;">PRODUCT / PO</div><div class="field" style="background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.28); color:#B7C3DA; flex:1;">[Product description / PO reference]</div></div>
        <div class="row gap-10"><div class="mono" style="width:34mm; font-size:9px; color:#8592AD; letter-spacing:.08em;">INSPECTION DATE</div><div class="field" style="background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.28); color:#B7C3DA; flex:1;">[YYYY-MM-DD]</div></div>
        <div class="row gap-10"><div class="mono" style="width:34mm; font-size:9px; color:#8592AD; letter-spacing:.08em;">INSPECTOR</div><div class="field" style="background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.28); color:#B7C3DA; flex:1;">[Name, credential ID]</div></div>
      </div>
    </div>
    <div class="row" style="justify-content:space-between; align-items:flex-end;">
      <div style="max-width:80mm;">
        <div style="font-family:var(--font-head); font-size:12px; color:#7FD9CC; font-weight:600;">Verified at the Source.</div>
        <div class="caption" style="color:#6B7A9C; margin-top:4px; line-height:13px;">Confidential — prepared exclusively for the named client. Not for redistribution without written consent.</div>
      </div>
      <div style="opacity:.9;">${circularStamp('audit-cover', 74, { color: '#7FD9CC', mark: 'white' })}</div>
    </div>
  </div>
</div>`;

/* ---------------- PAGE 2 — EXECUTIVE SUMMARY ---------------- */
const barData = [
  ['Dimensional', 'pass'], ['Packaging', 'pass'], ['Labeling', 'pass'], ['Materials', 'pending'], ['Electrical Safety', 'fail'],
];
function bar([label, cls]) {
  const color = cls === 'pass' ? 'var(--pass)' : cls === 'fail' ? 'var(--fail)' : 'var(--pending)';
  return `<div class="row gap-10" style="align-items:center; margin-bottom:8px;">
    <div style="width:32mm; font-size:9.5px; color:var(--navy);">${label}</div>
    <div style="flex:1; height:11px; background:var(--n-100); border-radius:3px; position:relative;"><div style="position:absolute; left:0; top:0; bottom:0; width:0%; border:1px dashed var(--n-300); border-radius:3px;"></div></div>
    <div class="mono field" style="width:16mm; text-align:center; padding:2px 4px; font-size:9px;">[__%]</div>
  </div>`;
}

const page2 = `<div class="page pad">
  ${docHeader('REF. FA-2026-[sequence]')}
  <div class="doc-label">Supplier &amp; Shipment Details</div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px 16px; margin-bottom:16px;">
    ${['Supplier legal name', 'Factory address', 'Product / PO reference', 'Order quantity', 'HS code', 'Inspection type (AQL level)', 'Inspection date', 'Report ref. no.'].map(l => `
    <div class="row gap-8" style="align-items:center;"><div class="mono" style="width:38mm; font-size:8.5px; color:var(--n-500);">${l.toUpperCase()}</div><div class="field" style="flex:1; padding:4px 8px; font-size:9.5px;">[${l}]</div></div>`).join('')}
  </div>

  <div class="doc-label">Overall Result</div>
  <div class="row gap-12" style="align-items:center; margin-bottom:16px;">
    <div class="pill pass" style="font-size:11px; padding:6px 16px;"><span class="dot"></span>PASS</div>
    <div class="pill fail" style="font-size:11px; padding:6px 16px; opacity:.35;"><span class="dot"></span>FAIL</div>
    <div class="pill pending" style="font-size:11px; padding:6px 16px; opacity:.35;"><span class="dot"></span>PENDING RE-INSPECTION</div>
    <div class="caption" style="margin-left:6px;">Select one — see p.10 of the Brand Guidelines for semantic token usage.</div>
  </div>

  <div class="doc-label">Pass Rate by Inspection Category</div>
  <div class="card" style="padding:12px 14px; margin-bottom:16px;">
    ${barData.map(bar).join('')}
    <div class="row gap-14" style="margin-top:6px;">
      <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--pass);border-radius:2px;"></span><span class="caption">Pass ≥85%</span></div>
      <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--pending);border-radius:2px;"></span><span class="caption">Review 70–84%</span></div>
      <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--fail);border-radius:2px;"></span><span class="caption">Fail &lt;70%</span></div>
    </div>
  </div>

  <div class="doc-label">Scope &amp; Summary</div>
  <div class="field" style="min-height:22mm; font-size:10px; line-height:16px; margin-bottom:16px;">[Describe inspection scope, sampling method (e.g. ANSI/ASQ Z1.4 General Inspection Level II), sample size, and a 3–5 sentence summary of key findings.]</div>

  <div class="doc-label">Photographic Annex Index</div>
  <table class="findings">
    <thead><tr><th style="width:16mm;">Fig.</th><th>Description</th><th style="width:38mm;">Category</th></tr></thead>
    <tbody>
      ${['1', '2', '3', '4'].map(n => `<tr><td class="n">${n}</td><td style="color:var(--n-500); font-style:italic;">[Documentary photo caption]</td><td style="color:var(--n-500); font-style:italic;">[Category]</td></tr>`).join('')}
    </tbody>
  </table>
  <div class="caption" style="margin-top:6px;">Documentary photography only — evidence-capable images of the actual inspected goods/site. AI-generated or illustrative imagery is never permitted here (Brand Guidelines, p.14–15).</div>
  ${docFooter(2)}
</div>`;

/* ---------------- PAGE 3 — DETAILED FINDINGS & SIGN-OFF ---------------- */
const findingsRows = [
  ['1', 'Dimensional', '[Requirement / spec reference]', 'pass'],
  ['2', 'Packaging', '[Requirement / spec reference]', 'pass'],
  ['3', 'Labeling', '[Requirement / spec reference]', 'pass'],
  ['4', 'Materials', '[Requirement / spec reference]', 'pending'],
  ['5', 'Electrical Safety', '[Requirement / spec reference]', 'fail'],
];
function findRow([n, cat, req, cls]) {
  const label = cls === 'pass' ? 'PASS' : cls === 'fail' ? 'FAIL' : 'REVIEW';
  return `<tr>
    <td class="n">${n}</td>
    <td>${cat}</td>
    <td>${req}</td>
    <td><span class="pill ${cls}" style="font-size:8.5px; padding:3px 9px;"><span class="dot"></span>${label}</span></td>
    <td style="color:var(--n-500); font-style:italic;">[Notes / photo ref.]</td>
  </tr>`;
}

const page3 = `<div class="page pad">
  ${docHeader('REF. FA-2026-[sequence]')}
  <div class="doc-label">Detailed Findings</div>
  <table class="findings" style="margin-bottom:16px;">
    <thead><tr><th>#</th><th>Category</th><th>Requirement</th><th>Result</th><th>Notes</th></tr></thead>
    <tbody>${findingsRows.map(findRow).join('')}</tbody>
  </table>

  <div class="field" style="font-size:9.5px; margin-bottom:18px; line-height:15px;">
    <b>Photographic evidence.</b> Attached separately as Annex A. All evidentiary images must be documentary photography of the actual inspected goods/site — AI-generated or illustrative imagery is never permitted in this section (Brand Guidelines, p.14–15).
  </div>

  <div class="doc-label">Sign-Off</div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:8px;">
    <div class="col gap-16">
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--n-500); margin-bottom:6px;">INSPECTOR</div>
        <div style="border-bottom:1px solid var(--n-300); height:24px;"></div>
        <div class="caption" style="margin-top:4px;">Name, signature, credential ID, date</div>
      </div>
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--n-500); margin-bottom:6px;">REVIEWED BY</div>
        <div style="border-bottom:1px solid var(--n-300); height:24px;"></div>
        <div class="caption" style="margin-top:4px;">QA lead, signature, date</div>
      </div>
    </div>
    <div class="col gap-16">
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--n-500); margin-bottom:6px;">CLIENT ACKNOWLEDGMENT</div>
        <div style="border-bottom:1px solid var(--n-300); height:24px;"></div>
        <div class="caption" style="margin-top:4px;">Name, signature, date (optional)</div>
      </div>
      <div class="row gap-10" style="align-items:flex-start;">
        <div style="width:20px;height:20px; flex-shrink:0; margin-top:1px;">${logoMark('navy')}</div>
        <div class="caption" style="line-height:13px;">Confidential — prepared exclusively for the named client. Not inspection evidence unless issued with an original WeChinaSourcing reference number and inspector signature.</div>
      </div>
    </div>
  </div>
  ${docFooter(3)}
</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}${docCss}</style>
</head><body><div class="stack">${page1}${page2}${page3}</div></body></html>`;

const targetDir = path.resolve(__dirname, '../../brand-assets/04-templates');
fs.writeFileSync(path.join(outDir, '_template_audit_report.html'), html);
fs.writeFileSync(path.join(targetDir, 'wcs_template_audit-report.html'), html);
console.log('wrote wcs_template_audit-report.html to', targetDir);

// Chromium's print-to-pdf pagination is unreliable across a multi-page flex
// stack with page-break-after (produces phantom blank pages — confirmed by
// isolating each .page into its own document, which prints exactly 1 page
// each). Reliable pattern: print each page as its own single-page PDF, then
// merge — mirrors the render-large-then-downsample workaround used for the
// small-viewport PNG rasterization bug elsewhere in this build.
const styleBlock = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const pages = [page1, page2, page3];
pages.forEach((p, i) => {
  const single = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${styleBlock}</style>
</head><body><div class="stack" style="padding:0;gap:0;">${p}</div></body></html>`;
  fs.writeFileSync(path.join(outDir, `_ar_page${i + 1}.html`), single);
});
console.log('wrote 3 isolated single-page HTML files for PDF export');
