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
table.item-table td{ font-size:9.5px; color:var(--navy); padding:7px 8px; border-bottom:1px solid var(--n-100); vertical-align:top; }
table.item-table td.n{ font-family:var(--font-mono); color:var(--n-500); width:20px; }
table.item-table td.num{ text-align:right; font-family:var(--font-mono); font-size:9.5px; }
table.item-table th.num{ text-align:right; }

.milestone-card{ border:1px solid var(--n-200); border-radius:6px; padding:10px 12px; background:var(--white); margin-bottom:8px; }
.milestone-header{ display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }

@media print{
  @page{ size:794px 1123px; margin:0; }
  body{ background:#fff; }
  .stack{ gap:0; padding:0; background:transparent; }
  .page{ box-shadow:none; page-break-after:always; }
}
.stack{ display:flex; flex-direction:column; align-items:center; gap:24px; padding:24px 0 50px; background:#5b6270; }
`;

function docHeader(refNo, pageTitle = 'COMMERCIAL QUOTATION') {
  return `<div class="doc-header">
    <div class="row gap-10" style="align-items:center;">
      <div style="width:24px;height:24px;">${logoMark('navy')}</div>
      <div>
        <div style="font-family:var(--font-head); font-weight:800; font-size:13.5px; color:var(--navy); line-height:14px;">WeChinaSourcing</div>
        <div class="mono" style="font-size:8px; color:var(--teal); letter-spacing:.08em; font-weight:600;">${pageTitle}</div>
      </div>
    </div>
    <div class="row gap-10" style="align-items:center;">
      <span class="pill pass" style="font-size:8.5px; padding:3px 9px;"><span class="dot"></span>VALID &middot; 30 DAYS</span>
      <div class="mono" style="font-size:9.5px; color:var(--n-500);">${refNo}</div>
    </div>
  </div>`;
}

function docFooter(pageNo) {
  return `<div class="doc-footer">
    <div class="foot-label">WeChinaSourcing &middot; Commercial Quotation Template &middot; Confidential</div>
    <div class="foot-label">Page ${pageNo} of 2</div>
  </div>`;
}

/* ---------------- PAGE 1: COMMERCIAL OFFER & ITEMIZED RATES ---------------- */
const page1 = `<div class="page pad">
  ${docHeader('REF. QT-2026-[sequence]', 'COMMERCIAL QUOTATION / 商业报价单')}

  <!-- Parties Grid -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:12px;">
    <div class="card" style="padding:10px 12px; background:var(--n-50);">
      <div class="doc-label" style="color:var(--slate);">Issued By (Service Provider)</div>
      <div style="font-family:var(--font-head); font-weight:700; font-size:11px; color:var(--navy); margin-bottom:3px;">WeChinaSourcing Limited</div>
      <div class="body-sm" style="font-size:9px; color:var(--n-500); line-height:13px;">
        Tower A, High-Tech Industrial Park, Nanshan, Shenzhen, China<br/>
        Hong Kong Office: 16/F, Central Tower, Queen's Road Central, HK<br/>
        Email: <b style="color:var(--navy);">operations@wechinasourcing.com</b> &middot; Web: wechinasourcing.com
      </div>
    </div>

    <div class="card" style="padding:10px 12px; border-color:var(--teal);">
      <div class="doc-label" style="color:var(--teal);">Quotation For (Client)</div>
      <div class="field" style="margin-bottom:4px; font-size:10px;"><b>[Client Legal Business Name]</b></div>
      <div class="field" style="font-size:9px; line-height:13px;">
        [Billing Address Line 1, Line 2]<br/>
        [City, State/Province, Country, Postal Code]<br/>
        Attn: [Client Contact Name, Title] &middot; Email: [contact@client.com]
      </div>
    </div>
  </div>

  <!-- Project Summary Ribbon -->
  <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-bottom:12px;">
    <div class="card" style="padding:7px 10px;">
      <div class="doc-label">Project Scope</div>
      <div class="field" style="padding:3px 6px; font-size:9px;">[Sourcing &amp; PSI]</div>
    </div>
    <div class="card" style="padding:7px 10px;">
      <div class="doc-label">Target Standards</div>
      <div class="field" style="padding:3px 6px; font-size:9px;">[ISO / CE / AQL II]</div>
    </div>
    <div class="card" style="padding:7px 10px;">
      <div class="doc-label">Incoterms</div>
      <div class="field" style="padding:3px 6px; font-size:9px;">[FOB Shenzhen]</div>
    </div>
    <div class="card" style="padding:7px 10px;">
      <div class="doc-label">Currency / Terms</div>
      <div class="field" style="padding:3px 6px; font-size:9px;">[USD ($) / Net 15]</div>
    </div>
  </div>

  <!-- Itemized Pricing Table -->
  <div class="doc-label">Itemized Services &amp; Fee Schedule</div>
  <table class="item-table">
    <thead>
      <tr>
        <th style="width:18px;">#</th>
        <th>Service Description &amp; Deliverables</th>
        <th style="width:70px;">Service Code</th>
        <th class="num" style="width:55px;">Qty / Units</th>
        <th class="num" style="width:75px;">Unit Rate</th>
        <th class="num" style="width:85px;">Amount (USD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="n">1</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Comprehensive Factory Quality &amp; Capacity Audit</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">On-site evaluation of facility machinery, ISO9001 compliance, labor standards, output capacity, and raw material controls. Full 3-page audit report with photo annex.</div>
        </td>
        <td class="mono">[SRV-AUD-01]</td>
        <td class="num">[1 audit]</td>
        <td class="num">[$650.00]</td>
        <td class="num">[$650.00]</td>
      </tr>
      <tr>
        <td class="n">2</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Pre-Shipment Inspection (PSI) &mdash; AQL Level II</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Standard ANSI/ASQ Z1.4 sampling. Visual, dimensional, functional, packaging, barcoding, and carton drop verification. Pass/Fail report issued within 24 hours.</div>
        </td>
        <td class="mono">[SRV-PSI-02]</td>
        <td class="num">[2 mandays]</td>
        <td class="num">[$320.00]</td>
        <td class="num">[$640.00]</td>
      </tr>
      <tr>
        <td class="n">3</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Sample Coordination, Lab Testing &amp; Courier Logistics</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Collection of golden samples, chemical/RoHS lab screening coordination, express international courier to client destination.</div>
        </td>
        <td class="mono">[SRV-LAB-03]</td>
        <td class="num">[1 lot]</td>
        <td class="num">[$280.00]</td>
        <td class="num">[$280.00]</td>
      </tr>
      <tr>
        <td class="n">4</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Container Loading Supervision (CLS) &amp; Seal Verification</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Quantity tally, carton condition inspection, container seaworthiness check, loading process monitoring, and tamper-evident customs seal placement.</div>
        </td>
        <td class="mono">[SRV-CLS-04]</td>
        <td class="num">[1 manday]</td>
        <td class="num">[$320.00]</td>
        <td class="num">[$320.00]</td>
      </tr>
      <tr>
        <td class="n">5</td>
        <td>
          <div style="font-weight:700; color:var(--navy);">Dedicated Sourcing Management &amp; Contract Negotiation</div>
          <div class="caption" style="color:var(--n-500); margin-top:2px;">Bilingual contract drafting, price negotiation, production milestone monitoring, and weekly executive status briefings.</div>
        </td>
        <td class="mono">[SRV-MGT-05]</td>
        <td class="num">[1 project]</td>
        <td class="num">[$500.00]</td>
        <td class="num">[$500.00]</td>
      </tr>
    </tbody>
  </table>

  <!-- Calculation & Totals Grid -->
  <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-top:4px;">
    <div style="flex:1;">
      <div class="doc-label">Quotation Notes &amp; Assumptions</div>
      <div class="field" style="font-size:8.5px; line-height:13px; min-height:58px;">
        1. Rates include all local travel and inspector accommodations within Guangdong/Zhejiang provinces.<br/>
        2. Laboratory testing fees charged at direct third-party accredited lab pass-through cost.<br/>
        3. Re-inspection of failed batches billed at standard manday rate of [$320.00/manday].<br/>
        4. Validity: This quotation is binding for 30 calendar days from the date of issue.
      </div>
    </div>

    <div style="width:240px;">
      <div style="border:1px solid var(--n-200); border-radius:6px; overflow:hidden;">
        <div class="row" style="justify-content:space-between; padding:6px 12px; border-bottom:1px solid var(--n-100);">
          <span class="caption" style="font-size:9.5px;">Subtotal</span>
          <span class="mono" style="font-size:10px; color:var(--navy); font-weight:600;">[$2,390.00]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:6px 12px; border-bottom:1px solid var(--n-100);">
          <span class="caption" style="font-size:9.5px;">Volume Discount ([__%])</span>
          <span class="mono" style="font-size:10px; color:var(--pass); font-weight:600;">[-$140.00]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:6px 12px; border-bottom:1.5px solid var(--navy);">
          <span class="caption" style="font-size:9.5px;">VAT / Export Surcharge</span>
          <span class="mono" style="font-size:10px; color:var(--navy); font-weight:600;">[$0.00 (0% Ex)]</span>
        </div>
        <div class="row" style="justify-content:space-between; padding:9px 12px; background:var(--navy); color:#fff; align-items:center;">
          <span style="font-family:var(--font-head); font-weight:700; font-size:11px; color:#fff;">GRAND TOTAL (USD)</span>
          <span class="mono" style="font-size:13px; font-weight:700; color:var(--teal);">[$2,250.00]</span>
        </div>
      </div>
    </div>
  </div>

  ${docFooter(1)}
</div>`;

/* ---------------- PAGE 2: SCOPE OF WORK, MILESTONES & ACCEPTANCE ---------------- */
const page2 = `<div class="page pad">
  ${docHeader('REF. QT-2026-[sequence]', 'SCOPE OF WORK &amp; COMMERCIAL TERMS')}

  <!-- Milestone Timeline -->
  <div class="doc-label">Execution Milestones &amp; Deliverable Timeline</div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
    <div class="milestone-card">
      <div class="milestone-header">
        <span style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">Milestone 01: Supplier Audit</span>
        <span class="mono" style="font-size:8.5px; color:var(--teal); font-weight:600;">T + 3 Days</span>
      </div>
      <div class="caption" style="font-size:8.5px; line-height:12px;">On-site factory audit, legal verification, production capacity sign-off, and risk assessment report.</div>
    </div>
    <div class="milestone-card">
      <div class="milestone-header">
        <span style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">Milestone 02: DUPRO Inspection</span>
        <span class="mono" style="font-size:8.5px; color:var(--teal); font-weight:600;">30% Produced</span>
      </div>
      <div class="caption" style="font-size:8.5px; line-height:12px;">During-production check on assembly lines to detect defect trends early before bulk finishing.</div>
    </div>
    <div class="milestone-card">
      <div class="milestone-header">
        <span style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">Milestone 03: Pre-Shipment (PSI)</span>
        <span class="mono" style="font-size:8.5px; color:var(--teal); font-weight:600;">100% Produced</span>
      </div>
      <div class="caption" style="font-size:8.5px; line-height:12px;">AQL II statistical inspection, barcode scanning, packing audit, drop test, and final batch sign-off.</div>
    </div>
    <div class="milestone-card">
      <div class="milestone-header">
        <span style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">Milestone 04: Loading (CLS)</span>
        <span class="mono" style="font-size:8.5px; color:var(--teal); font-weight:600;">Ex-Factory</span>
      </div>
      <div class="caption" style="font-size:8.5px; line-height:12px;">Supervised carton transfer, container cleanliness check, security seal lock, and B/L dispatch.</div>
    </div>
  </div>

  <!-- Quality Assurance Criteria -->
  <div class="doc-label">Quality Acceptance Criteria (AQL Standards)</div>
  <div class="card" style="padding:9px 12px; margin-bottom:12px;">
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--fail); font-weight:600;">CRITICAL DEFECTS: AQL 0.0</div>
        <div class="caption" style="font-size:8px; line-height:12px; margin-top:2px;">Safety hazard, regulatory violation, or non-functional failure. 0 units permitted.</div>
      </div>
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--pending); font-weight:600;">MAJOR DEFECTS: AQL 1.5</div>
        <div class="caption" style="font-size:8px; line-height:12px; margin-top:2px;">Cosmetic or performance defect likely to result in customer return or reduced usability.</div>
      </div>
      <div>
        <div class="mono" style="font-size:8.5px; color:var(--pass); font-weight:600;">MINOR DEFECTS: AQL 4.0</div>
        <div class="caption" style="font-size:8px; line-height:12px; margin-top:2px;">Minor workmanship variance not impacting product function or primary aesthetic.</div>
      </div>
    </div>
  </div>

  <!-- Standard Commercial Conditions -->
  <div class="doc-label">Commercial Terms of Engagement</div>
  <div class="field" style="font-size:8.5px; line-height:13.5px; min-height:88px; margin-bottom:14px;">
    <b>1. Payment Terms:</b> 50% advance deposit upon quotation acceptance; 50% balance upon final report delivery prior to container release.<br/>
    <b>2. Inspector Access:</b> Client shall ensure factory provides unimpeded access to production floors, storage areas, and testing apparatus.<br/>
    <b>3. Cancellation Policy:</b> Cancellation within 24 hours of scheduled inspection incurs 50% manday fee + committed travel expenses.<br/>
    <b>4. Confidentiality &amp; IP:</b> WeChinaSourcing maintains strict non-disclosure obligations regarding all client drawings, tooling, and supply chain data.<br/>
    <b>5. Liability Limit:</b> Inspection services represent point-in-time sampling audits. Total liability is limited to the service fee paid for the specific inspection.
  </div>

  <!-- Acceptance & Sign-Off Block -->
  <div class="doc-label">Quotation Acceptance &amp; Formal Authorization</div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:10px;">
    <div class="card" style="padding:10px 12px; background:var(--n-50);">
      <div class="mono" style="font-size:8px; color:var(--slate); letter-spacing:.08em; font-weight:600; margin-bottom:6px;">ISSUED BY (WECHINASOURCING)</div>
      <div style="margin-bottom:6px;">
        <div class="caption" style="font-size:8px;">Authorized Representative:</div>
        <div style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">[Operations Director / Account Manager]</div>
      </div>
      <div style="border-bottom:1px solid var(--n-300); height:22px; margin-bottom:4px;"></div>
      <div class="row" style="justify-content:space-between;">
        <span class="caption" style="font-size:8px;">Signature &amp; Corporate Stamp</span>
        <span class="mono" style="font-size:8px; color:var(--n-500);">Date: [YYYY-MM-DD]</span>
      </div>
    </div>

    <div class="card" style="padding:10px 12px; border-color:var(--teal);">
      <div class="mono" style="font-size:8px; color:var(--teal); letter-spacing:.08em; font-weight:600; margin-bottom:6px;">ACCEPTED &amp; CONFIRMED BY (CLIENT)</div>
      <div style="margin-bottom:6px;">
        <div class="caption" style="font-size:8px;">Authorized Signatory:</div>
        <div style="font-family:var(--font-head); font-weight:700; font-size:10px; color:var(--navy);">[Client Executive Name &amp; Title]</div>
      </div>
      <div style="border-bottom:1px solid var(--n-300); height:22px; margin-bottom:4px;"></div>
      <div class="row" style="justify-content:space-between;">
        <span class="caption" style="font-size:8px;">Signature &amp; Company Chop</span>
        <span class="mono" style="font-size:8px; color:var(--n-500);">Date: [YYYY-MM-DD]</span>
      </div>
    </div>
  </div>

  <!-- Verification Seal Band -->
  <div class="row" style="align-items:center; justify-content:space-between; padding-top:4px;">
    <div class="row gap-10" style="align-items:center;">
      <div style="opacity:.9;">${circularStamp('quotation-auth', 56, { color: 'var(--teal)', mark: 'navy' })}</div>
      <div>
        <div style="font-family:var(--font-head); font-size:10px; color:var(--navy); font-weight:700;">Verified at the Source &middot; Official Quotation</div>
        <div class="caption" style="font-size:8px; line-height:11px; color:var(--n-500);">This document constitutes a binding commercial offer upon mutual signature. Electronic signatures are legally binding.</div>
      </div>
    </div>
    <div class="mono" style="font-size:8px; color:var(--n-400); text-align:right;">
      REF. QT-2026-[sequence]<br/>
      ORIGINAL DOCUMENT
    </div>
  </div>

  ${docFooter(2)}
</div>`;

const fullHtml = `<!doctype html><html><head><meta charset="utf-8">
<title>WeChinaSourcing — Commercial Quotation Template</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}${docCss}</style>
</head><body><div class="stack">${page1}${page2}</div></body></html>`;

// Write staging and master HTML files
fs.writeFileSync(path.join(outDir, '_template_quotation.html'), fullHtml);
fs.writeFileSync(path.join(targetDir, 'wcs_template_quotation.html'), fullHtml);
console.log('wrote wcs_template_quotation.html to', targetDir);

// Write isolated single-page HTML files for reliable Chromium PDF export
const pages = [page1, page2];
pages.forEach((p, i) => {
  const single = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
${css}${docCss}
@page { size: 794px 1123px; margin: 0; }
html, body { margin: 0; padding: 0; width: 794px; height: 1123px; overflow: hidden; background: #fff; }
</style>
</head><body><div style="width:794px;height:1123px;overflow:hidden;position:absolute;top:0;left:0;">${p}</div></body></html>`;
  fs.writeFileSync(path.join(outDir, `_quote_page${i + 1}.html`), single);
});
console.log('wrote 2 isolated quotation pages for PDF export');
