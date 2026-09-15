const fs = require('fs');
const path = require('path');
const { css } = require('../css');
const { logoMark, circularStamp } = require('../shared');

const outDir = __dirname;
const targetDir = path.resolve(__dirname, '../../brand-assets/04-templates');

const docCss = `
.page{ width:794px; height:1123px; position:relative; overflow:hidden; background:var(--white); box-shadow:0 18px 50px rgba(6,12,30,.35); font-family:var(--font-body); }
.pad{ padding:16mm 16mm; }
.field{ border:1px dashed var(--n-300); border-radius:4px; background:var(--n-50); padding:5px 9px; font-family:var(--font-mono); font-size:9.5px; color:var(--n-400); font-style:italic; }
.field b{ font-style:normal; color:var(--navy); font-weight:600; }
.doc-label{ font-family:var(--font-mono); font-size:8.5px; letter-spacing:.12em; text-transform:uppercase; color:var(--n-500); margin-bottom:4px; font-weight:600; font-style:normal; }
.doc-header{ display:flex; align-items:center; justify-content:space-between; padding-bottom:10px; border-bottom:1.5px solid var(--navy); margin-bottom:12px; }
.doc-footer{ position:absolute; left:16mm; right:16mm; bottom:10mm; display:flex; align-items:center; justify-content:space-between; padding-top:8px; border-top:1px solid var(--n-100); }
.doc-footer .foot-label{ font-family:var(--font-mono); font-size:8px; letter-spacing:.08em; color:var(--n-400); text-transform:uppercase; }

table.item-table{ width:100%; border-collapse:collapse; margin-bottom:12px; }
table.item-table th{ font-family:var(--font-mono); font-size:8.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--n-500); text-align:left; padding:6px 8px; border-bottom:1.5px solid var(--navy); }
table.item-table td{ font-size:9.5px; color:var(--navy); padding:7.5px 8px; border-bottom:1px solid var(--n-100); vertical-align:top; }
table.item-table td.n{ font-family:var(--font-mono); color:var(--n-500); width:20px; }
table.item-table td.num{ text-align:right; font-family:var(--font-mono); font-size:9.5px; }
table.item-table th.num{ text-align:right; }

.bank-card{ border:1.5px solid var(--navy); border-radius:6px; padding:10px 14px; background:var(--n-50); }

@media print{
  @page{ size:794px 1123px; margin:0; }
  body{ background:#fff; }
  .stand{ padding:0; background:transparent; }
  .page{ box-shadow:none; }
}
.stand{ display:flex; align-items:center; justify-content:center; padding:24px 0 50px; background:#5b6270; }
`;

function docHeader(refNo) {
  return `<div class="doc-header">
    <div class="row gap-10" style="align-items:center;">
      <div style="width:24px;height:24px;">${logoMark('navy')}</div>
      <div>
        <div style="font-family:var(--font-head); font-weight:800; font-size:13.5px; color:var(--navy); line-height:14px;">WeChinaSourcing</div>
        <div class="mono" style="font-size:8px; color:var(--teal); letter-spacing:.08em; font-weight:600;">COMMERCIAL INVOICE / 商业发票</div>
      </div>
    </div>
    <div class="row gap-10" style="align-items:center;">
      <span class="pill pending" style="font-size:8.5px; padding:3px 9px;"><span class="dot"></span>PAYMENT DUE &middot; NET 15</span>
      <div class="mono" style="font-size:9.5px; color:var(--n-500);">${refNo}</div>
    </div>
  </div>`;
}

function docFooter() {
  return `<div class="doc-footer">
    <div class="foot-label">WeChinaSourcing Limited &middot; Professional Supply Chain &amp; Quality Services</div>
    <div class="foot-label">Page 1 of 1 &middot; Original Invoice</div>
  </div>`;
}

const invoicePage = `<div class="page pad">
  ${docHeader('INV-2026-[sequence]')}

  <!-- Parties Grid -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:12px;">
    <div class="card" style="padding:10px 12px; background:var(--n-50);">
      <div class="doc-label" style="color:var(--slate);">Billed From (Payee)</div>
      <div style="font-family:var(--font-head); font-weight:700; font-size:11px; color:var(--navy); margin-bottom:3px;">WeChinaSourcing Limited</div>
      <div class="body-sm" style="font-size:9px; color:var(--n-500); line-height:13px;">
        16/F, Central Tower, Queen's Road Central, Hong Kong<br/>
        Shenzhen Operations: High-Tech Park, Nanshan, Shenzhen, China<br/>
        Business Reg. No.: <b style="color:var(--navy);">HK-74892011-000</b> &middot; Tax ID: <b style="color:var(--navy);">CN-91440300MA5XXXXX</b><br/>
        Billing Contact: <b style="color:var(--navy);">finance@wechinasourcing.com</b>
      </div>
    </div>

    <div class="card" style="padding:10px 12px; border-color:var(--navy);">
      <div class="doc-label" style="color:var(--navy);">Billed To (Client / Buyer)</div>
      <div class="field" style="margin-bottom:4px; font-size:10px;"><b>[Client Legal Corporate Name]</b></div>
      <div class="field" style="font-size:9px; line-height:13px;">
        [Billing Street Address, Suite / Unit Number]<br/>
        [City, State/Province, Country, ZIP/Postal Code]<br/>
        Tax / VAT ID: [VAT-XXXXXXXXX] &middot; Attn: [Accounts Payable / Contact Name]
      </div>
    </div>
  </div>

  <!-- Metadata Summary Bar -->
  <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:12px;">
    <div class="card" style="padding:6px 8px;">
      <div class="doc-label">Invoice Date</div>
      <div class="field" style="padding:2px 5px; font-size:9px;">[YYYY-MM-DD]</div>
    </div>
    <div class="card" style="padding:6px 8px;">
      <div class="doc-label">Payment Due</div>
      <div class="field" style="padding:2px 5px; font-size:9px;">[YYYY-MM-DD]</div>
    </div>
    <div class="card" style="padding:6px 8px;">
      <div class="doc-label">PO Reference</div>
      <div class="field" style="padding:2px 5px; font-size:9px;">[PO-2026-XXXX]</div>
    </div>
    <div class="card" style="padding:6px 8px;">
      <div class="doc-label">Linked Quote</div>
      <div class="field" style="padding:2px 5px; font-size:9px;">[QT-2026-XXXX]</div>
    </div>
    <div class="card" style="padding:6px 8px;">
      <div class="doc-label">Currency</div>
      <div class="field" style="padding:2px 5px; font-size:9px;">[USD ($)]</div>
    </div>
  </div>

  <!-- Itemized Billing Table -->
  <div class="doc-label">Itemized Services &amp; Fees</div>
  <table class="item-table">
    <thead>
      <tr>
        <th style="width:18px;">#</th>
        <th>Description of Services Rendered</th>
        <th style="width:75px;">Report Ref.</th>
        <th class="num" style="width:55px;">Qty / Units</th>
        <th class="num" style="width:75px;">Rate (USD)</th>
        <th class="num" style="width:85px;">Amount (USD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="n">1</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Pre-Shipment Quality Inspection (PSI) &mdash; AQL II</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Factory inspection at [Supplier Name, City], [PO Reference]. Complete 3-page signed inspection report with photographic annex. Batch Result: PASS.</div>
        </td>
        <td class="mono">[PSI-2026-081]</td>
        <td class="num">[2 mandays]</td>
        <td class="num">[$320.00]</td>
        <td class="num">[$640.00]</td>
      </tr>
      <tr>
        <td class="n">2</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Comprehensive Factory Capability &amp; Compliance Audit</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Full on-site audit of facility manufacturing capacity, ISO standards, machinery, and quality control systems. Audit Ref: [FA-2026-042].</div>
        </td>
        <td class="mono">[FA-2026-042]</td>
        <td class="num">[1 audit]</td>
        <td class="num">[$650.00]</td>
        <td class="num">[$650.00]</td>
      </tr>
      <tr>
        <td class="n">3</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Container Loading Supervision (CLS) &amp; Seal Verification</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Monitoring of carton loading into 40ft HQ container [COSU-XXXXXX], customs seal verification [SEAL-XXXXXX], and packing list reconciliation.</div>
        </td>
        <td class="mono">[CLS-2026-019]</td>
        <td class="num">[1 manday]</td>
        <td class="num">[$320.00]</td>
        <td class="num">[$320.00]</td>
      </tr>
      <tr>
        <td class="n">4</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Sample Courier &amp; Third-Party Lab Verification Screening</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Express international courier of production golden samples + RoHS/REACH compliance lab screening certificate.</div>
        </td>
        <td class="mono">[LAB-2026-011]</td>
        <td class="num">[1 package]</td>
        <td class="num">[$280.00]</td>
        <td class="num">[$280.00]</td>
      </tr>
    </tbody>
  </table>

  <!-- Calculation & Totals Grid -->
  <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:12px;">
    <div style="flex:1;">
      <div class="doc-label">Payment Terms &amp; Settlement Instructions</div>
      <div class="field" style="font-size:8.5px; line-height:13px; min-height:48px;">
        &bull; Payment is due within <b>15 calendar days</b> of invoice date (Net 15).<br/>
        &bull; All wire transfer fees and intermediary bank charges are to be borne by remitter (OUR).<br/>
        &bull; Please reference invoice number <b>[INV-2026-XXXX]</b> in your wire transfer advice.
      </div>
    </div>

    <div style="width:240px;">
      <div style="border:1px solid var(--n-200); border-radius:6px; overflow:hidden;">
        <div class="row" style="justify-content:space-between; padding:5px 12px; border-bottom:1px solid var(--n-100);">
          <span class="caption" style="font-size:9.5px;">Subtotal</span>
          <span class="mono" style="font-size:10px; color:var(--navy); font-weight:600;">[$1,890.00]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:5px 12px; border-bottom:1px solid var(--n-100);">
          <span class="caption" style="font-size:9.5px;">Tax / VAT (0% Export)</span>
          <span class="mono" style="font-size:10px; color:var(--navy); font-weight:600;">[$0.00]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:5px 12px; border-bottom:1.5px solid var(--navy);">
          <span class="caption" style="font-size:9.5px;">Handling / Disbursements</span>
          <span class="mono" style="font-size:10px; color:var(--navy); font-weight:600;">[$0.00]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:8px 12px; background:var(--navy); color:#fff; align-items:center;">
          <span style="font-family:var(--font-head); font-weight:700; font-size:11px; color:#fff;">TOTAL DUE (USD)</span>
          <span class="mono" style="font-size:13px; font-weight:700; color:var(--teal);">[$1,890.00]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Banking & Wire Transfer Box -->
  <div class="doc-label">International Wire Transfer (TT) Settlement Details</div>
  <div class="bank-card" style="margin-bottom:12px;">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px 16px;">
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">BENEFICIARY:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:9px;"><b>WeChinaSourcing Limited</b></span>
      </div>
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">BANK NAME:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:9px;"><b>[The Hongkong and Shanghai Banking Corp. (HSBC)]</b></span>
      </div>
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">ACCOUNT NO / IBAN:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:9px;"><b>[004-839-291830-838]</b></span>
      </div>
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">SWIFT / BIC CODE:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:9px;"><b>[HSBCHKHHHKH]</b></span>
      </div>
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">BANK ADDRESS:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:8.5px;">[1 Queen's Road Central, Central, Hong Kong]</span>
      </div>
      <div class="row gap-6" style="align-items:center;">
        <span class="mono" style="width:34mm; font-size:8px; color:var(--n-500);">CLEARING / SORT:</span>
        <span class="field" style="flex:1; padding:3px 6px; font-size:9px;">[Clearing Code: 004 &middot; Branch: 839]</span>
      </div>
    </div>
  </div>

  <!-- Sign-off & Verification Seal -->
  <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:16px; align-items:center; border-top:1px solid var(--n-100); padding-top:8px;">
    <div class="row gap-10" style="align-items:center;">
      <div style="opacity:.9;">${circularStamp('invoice-seal', 54, { color: 'var(--navy)' })}</div>
      <div>
        <div style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">WeChinaSourcing Finance Department</div>
        <div class="caption" style="font-size:8px; line-height:11px; color:var(--n-500);">Official commercial invoice generated from verified inspection records. Thank you for your business.</div>
      </div>
    </div>

    <div style="text-align:right;">
      <div class="caption" style="font-size:8px; margin-bottom:4px;">Authorized Financial Officer:</div>
      <div style="border-bottom:1px solid var(--n-300); width:140px; height:18px; margin-left:auto; margin-bottom:3px;"></div>
      <div class="mono" style="font-size:8px; color:var(--n-500);">WeChinaSourcing Limited &middot; HK / CN</div>
    </div>
  </div>

  ${docFooter()}
</div>`;

const fullHtml = `<!doctype html><html><head><meta charset="utf-8">
<title>WeChinaSourcing — Commercial Invoice Template</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}${docCss}</style>
</head><body><div class="stand">${invoicePage}</div></body></html>`;

// Write staging and master HTML files
fs.writeFileSync(path.join(outDir, '_template_invoice.html'), fullHtml);
fs.writeFileSync(path.join(targetDir, 'wcs_template_invoice.html'), fullHtml);
console.log('wrote wcs_template_invoice.html to', targetDir);

// Write isolated single-page HTML file for PDF export
const singleHtml = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
${css}${docCss}
@page { size: 794px 1123px; margin: 0; }
html, body { margin: 0; padding: 0; width: 794px; height: 1123px; overflow: hidden; background: #fff; }
</style>
</head><body><div style="width:794px;height:1123px;overflow:hidden;position:absolute;top:0;left:0;">${invoicePage}</div></body></html>`;
fs.writeFileSync(path.join(outDir, '_inv_page1.html'), singleHtml);
console.log('wrote _inv_page1.html for PDF export');
