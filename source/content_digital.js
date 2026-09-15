const { logoMark, chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 14 — CORE COMPONENTS */
const btnBase = 'font-family:var(--font-head);font-weight:600;font-size:12.5px;padding:9px 18px;border-radius:7px;display:inline-flex;align-items:center;gap:7px;';
const buttons = [
  ['Primary', `${btnBase}background:var(--navy);color:#fff;`, 'Schedule Inspection'],
  ['Secondary', `${btnBase}background:transparent;color:var(--navy);border:1.5px solid var(--navy);`, 'View Report'],
  ['Tertiary', `${btnBase}background:transparent;color:var(--slate);text-decoration:underline;padding-left:0;padding-right:0;`, 'Learn more'],
  ['Destructive', `${btnBase}background:var(--fail);color:#fff;`, 'Reject Batch'],
  ['Disabled', `${btnBase}background:var(--n-100);color:var(--n-300);`, 'Unavailable'],
];

const slide15 = slideWrap(15, '', chrome(15, 'Digital Product System', 'Core Components', {
  bodyMt: 12,
  body: `
  <h4 class="h4" style="margin-bottom:9px;">Buttons</h4>
  <div class="row gap-16" style="align-items:center; flex-wrap:wrap;">
    ${buttons.map(([lbl, style, text]) => `<div class="col" style="align-items:flex-start;"><span style="${style}">${text}</span><span class="caption" style="margin-top:6px;">${lbl}</span></div>`).join('')}
  </div>

  <div class="row gap-40" style="margin-top:18px;">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Form Fields</h4>
      <div class="col gap-10">
        <div>
          <div class="caption" style="margin-bottom:4px;">FACTORY ID — DEFAULT</div>
          <div style="border:1.5px solid var(--n-200); border-radius:7px; padding:8px 12px; font-size:12.5px; color:var(--n-500); background:#fff;">SH-0221-CN</div>
        </div>
        <div>
          <div class="caption" style="margin-bottom:4px;">FACTORY ID — FOCUS</div>
          <div style="border:1.5px solid var(--teal); border-radius:7px; padding:8px 12px; font-size:12.5px; color:var(--navy); background:#fff; box-shadow:0 0 0 3px rgba(45,156,145,.18);">SH-0221-CN</div>
        </div>
        <div>
          <div class="caption" style="margin-bottom:4px;">FACTORY ID — ERROR</div>
          <div style="border:1.5px solid var(--fail); border-radius:7px; padding:8px 12px; font-size:12.5px; color:var(--navy); background:#fff;">SH-02</div>
          <div class="body-sm" style="color:var(--fail-text); font-size:10.5px; margin-top:3px;"><i class="fa-solid fa-circle-exclamation"></i>&nbsp; Factory ID must be 8 characters.</div>
        </div>
      </div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Tags</h4>
      <div class="row gap-8" style="flex-wrap:wrap;">
        <span class="pill pass"><span class="dot"></span>PASS · CONFORMING</span>
        <span class="pill fail"><span class="dot"></span>FAIL · NON-CONFORMING</span>
        <span class="pill pending"><span class="dot"></span>PENDING RE-INSPECTION</span>
        <span class="pill info"><span class="dot"></span>IN TRANSIT</span>
      </div>
      <h4 class="h4" style="margin:16px 0 9px;">Alerts</h4>
      <div class="col gap-8">
        <div class="row gap-9" style="align-items:flex-start; background:var(--info-bg); border-radius:7px; padding:9px 12px;">
          <i class="fa-solid fa-circle-info" style="color:var(--info-text); margin-top:1px; font-size:11px;"></i>
          <div style="font-size:11.5px; color:var(--info-text);"><b>Re-inspection scheduled</b> for 2026-09-02.</div>
        </div>
        <div class="row gap-9" style="align-items:flex-start; background:var(--fail-bg); border-radius:7px; padding:9px 12px;">
          <i class="fa-solid fa-triangle-exclamation" style="color:var(--fail-text); margin-top:1px; font-size:11px;"></i>
          <div style="font-size:11.5px; color:var(--fail-text);"><b>3 open non-conformances</b> require sign-off before release.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="row gap-16" style="margin-top:16px; padding-top:12px; border-top:1px solid var(--n-100);">
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">SPACING SCALE</div><div class="mono" style="font-size:10.5px;color:var(--navy);">4·8·12·16·24·32·48·64px</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">RADIUS SCALE</div><div class="mono" style="font-size:10.5px;color:var(--navy);">4·6·8·10px · full (pills)</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">SHADOW — SM</div><div class="mono" style="font-size:10.5px;color:var(--navy);">0 1px 2px rgba(18,35,80,.06)</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">SHADOW — MD</div><div class="mono" style="font-size:10.5px;color:var(--navy);">0 6px 16px rgba(18,35,80,.10)</div></div>
  </div>
  `
}));

/* ============================================================ SLIDE 15 — PATTERNS, STATES & FOUNDATIONS */
const slide16 = slideWrap(16, '', chrome(16, 'Digital Product System', 'Patterns, States &amp; Foundations', {
  bodyMt: 12,
  body: `
  <div class="row gap-16">
    <div class="col" style="width:300px;">
      <h4 class="h4" style="margin-bottom:9px;">Navigation</h4>
      <div class="card" style="padding:0; overflow:hidden;">
        <div class="row" style="align-items:center; justify-content:space-between; padding:10px 14px;">
          <div class="row gap-8" style="align-items:center;"><div style="width:16px;height:16px;">${logoMark('navy')}</div><span style="font-family:var(--font-head);font-weight:700;font-size:11px;color:var(--navy);">WCS</span></div>
          <div class="row gap-12" style="font-size:10.5px; color:var(--n-500);"><span style="color:var(--navy); font-weight:600; border-bottom:2px solid var(--teal); padding-bottom:2px;">Suppliers</span><span>Reports</span><span>Shipments</span></div>
        </div>
      </div>
      <h4 class="h4" style="margin:14px 0 9px;">Empty State</h4>
      <div class="card" style="padding:22px; text-align:center;">
        <i class="fa-solid fa-inbox" style="font-size:20px; color:var(--n-300);"></i>
        <div style="font-size:11.5px; color:var(--navy); font-weight:600; margin-top:8px;">No inspections scheduled</div>
        <div class="caption" style="margin-top:2px;">New requests appear here once submitted.</div>
      </div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Table</h4>
      <div class="card" style="padding:10px 14px;">
        <div class="row" style="padding:5px 0; border-bottom:1px solid var(--n-100);"><div class="caption" style="width:110px;">FACTORY ID</div><div class="caption" style="flex:1;">SUPPLIER</div><div class="caption" style="width:90px;">STATUS</div></div>
        <div class="row" style="padding:8px 0; border-bottom:1px solid var(--n-100); align-items:center;"><div class="mono" style="width:110px;font-size:10.5px;color:var(--navy);">SH-0221-CN</div><div style="flex:1;font-size:11.5px;color:var(--navy);">Ningbo Precision Metals</div><div style="width:90px;"><span class="pill pass" style="font-size:9.5px;padding:3px 9px;"><span class="dot"></span>PASS</span></div></div>
        <div class="row" style="padding:8px 0; align-items:center;"><div class="mono" style="width:110px;font-size:10.5px;color:var(--navy);">SZ-1140-CN</div><div style="flex:1;font-size:11.5px;color:var(--navy);">Shenzhen Circuit Works</div><div style="width:90px;"><span class="pill fail" style="font-size:9.5px;padding:3px 9px;"><span class="dot"></span>FAIL</span></div></div>
      </div>
      <h4 class="h4" style="margin:14px 0 9px;">Loading State</h4>
      <div class="card" style="padding:14px;">
        <div style="height:10px; width:60%; background:var(--n-100); border-radius:4px; margin-bottom:8px;"></div>
        <div style="height:10px; width:85%; background:var(--n-100); border-radius:4px; margin-bottom:8px;"></div>
        <div style="height:10px; width:40%; background:var(--n-100); border-radius:4px;"></div>
      </div>
    </div>
    <div class="col" style="width:250px;">
      <h4 class="h4" style="margin-bottom:9px;">Focus State</h4>
      <div class="card" style="padding:16px; display:flex; align-items:center; justify-content:center;">
        <span style="${btnBaseFocus()}">Approve</span>
      </div>
      <div class="body-sm" style="margin-top:8px;">2px Teal ring, 2px offset, on <span class="mono">:focus-visible</span> only — never removed. Meets WCAG 1.4.11 non-text contrast (3.3:1 on Porcelain White).</div>
    </div>
  </div>
  <div class="row gap-16" style="margin-top:14px; padding-top:12px; border-top:1px solid var(--n-100);">
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">GRID</div><div class="mono" style="font-size:10.5px;color:var(--navy);">12-col · 24px gutter · 1280 max</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">BREAKPOINTS</div><div class="mono" style="font-size:10.5px;color:var(--navy);">640 · 768 · 1024 · 1280px</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">TOUCH TARGET</div><div class="mono" style="font-size:10.5px;color:var(--navy);">44 &times; 44px minimum</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">KEYBOARD</div><div class="mono" style="font-size:10.5px;color:var(--navy);">Full tab order · no keyboard traps</div></div>
  </div>
  `
}));
function btnBaseFocus() {
  return `${btnBase}background:var(--navy);color:#fff;box-shadow:0 0 0 2px #fff, 0 0 0 4px var(--teal);`;
}

/* ============================================================ SLIDE 16 — APPLICATIONS: DASHBOARD & MOBILE */
const supplierRows = [
  ['SH-0221-CN', 'Ningbo Precision Metals', 'pass', 'PASS'],
  ['GZ-0587-CN', 'Guangzhou Textile Co.', 'pending', 'PENDING'],
  ['SZ-1140-CN', 'Shenzhen Circuit Works', 'fail', 'FAIL'],
];

const slide17 = slideWrap(17, '', chrome(17, 'Digital Product System', 'Applications — Dashboard &amp; Mobile', {
  sub: 'Both views run on the exact tokens from p.15–16 — no one-off colors, spacing, or components.',
  bodyMt: 12,
  body: `
  <div class="row gap-24">
    <div class="col grow card" style="overflow:hidden; padding:0;">
      <div class="row" style="align-items:center; gap:8px; padding:10px 16px; background:var(--n-50); border-bottom:1px solid var(--n-100);">
        <div style="width:8px;height:8px;border-radius:50%;background:var(--n-300);"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:var(--n-300);"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:var(--n-300);"></div>
        <div class="mono" style="font-size:10px;color:var(--n-500);margin-left:8px;">app.wechinasourcing.com/suppliers</div>
      </div>
      <div style="padding:18px 20px;">
        <div class="row" style="justify-content:space-between; align-items:center; margin-bottom:14px;">
          <div class="row gap-10" style="align-items:center;">
            <div style="width:22px;height:22px;">${logoMark('navy')}</div>
            <div style="font-family:var(--font-head);font-weight:700;font-size:13.5px;color:var(--navy);">Supplier Scorecards</div>
          </div>
          <div style="background:var(--navy); color:#fff; font-family:var(--font-head); font-weight:600; font-size:11px; padding:7px 14px; border-radius:6px;">+ New Inspection</div>
        </div>
        <div class="row" style="padding:6px 0; border-bottom:1px solid var(--n-100);">
          <div class="caption" style="width:110px;">FACTORY ID</div><div class="caption" style="flex:1;">SUPPLIER</div><div class="caption" style="width:100px;">STATUS</div>
        </div>
        ${supplierRows.map(([id, name, cls, lbl]) => `
        <div class="row" style="padding:10px 0; border-bottom:1px solid var(--n-100); align-items:center;">
          <div class="mono" style="width:110px;font-size:11px;color:var(--navy);">${id}</div>
          <div style="flex:1;font-size:12px;color:var(--navy);">${name}</div>
          <div style="width:100px;"><span class="pill ${cls}"><span class="dot"></span>${lbl}</span></div>
        </div>`).join('')}
        <div class="row gap-16" style="margin-top:16px;">
          <div class="col grow" style="background:var(--n-50); border-radius:8px; padding:12px 14px;">
            <div class="caption">AVG. INSPECTION SCORE</div>
            <div style="font-family:var(--font-head);font-weight:800;font-size:22px;color:var(--navy);">92.4<span style="font-size:12px;color:var(--n-400);">/100</span></div>
          </div>
          <div class="col grow" style="background:var(--n-50); border-radius:8px; padding:12px 14px;">
            <div class="caption">OPEN NON-CONFORMANCES</div>
            <div style="font-family:var(--font-head);font-weight:800;font-size:22px;color:var(--fail-text);">3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col" style="width:238px; align-items:center;">
      <div style="width:210px; height:392px; border-radius:24px; border:6px solid var(--navy); overflow:hidden; position:relative; background:var(--white);">
        <div style="height:24px; background:var(--navy); display:flex; align-items:center; justify-content:center;">
          <div class="mono" style="color:#fff;font-size:9px;">9:41</div>
        </div>
        <div style="padding:12px;">
          <div class="row gap-8" style="align-items:center;margin-bottom:12px;">
            <div style="width:18px;height:18px;">${logoMark('navy')}</div>
            <div style="font-family:var(--font-head);font-weight:700;font-size:11px;color:var(--navy);">My Shipments</div>
          </div>
          <div class="card" style="padding:9px; margin-bottom:9px;">
            <div class="mono" style="font-size:8.5px;color:var(--n-500);">CNTR # TCLU-772154-3</div>
            <div style="font-size:10.5px;font-weight:600;color:var(--navy);margin:4px 0;">Ningbo &rarr; Rotterdam</div>
            <span class="pill info" style="font-size:9px;padding:3px 8px;"><span class="dot"></span>IN TRANSIT</span>
          </div>
          <div class="card" style="padding:9px;">
            <div class="mono" style="font-size:8.5px;color:var(--n-500);">HS 8471.30</div>
            <div style="font-size:10.5px;font-weight:600;color:var(--navy);margin:4px 0;">Final QC — Batch 04</div>
            <span class="pill pass" style="font-size:9px;padding:3px 8px;"><span class="dot"></span>PASS</span>
          </div>
        </div>
      </div>
      <div class="caption" style="margin-top:14px; text-align:center;">Mobile — status-first layout</div>
    </div>
  </div>
  `
}));

module.exports = { slide15, slide16, slide17 };
