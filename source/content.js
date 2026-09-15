const { logoMark, chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 1 — COVER */
const slide1 = slideWrap(1, 'cover', `
  <div style="position:absolute;inset:0;background:linear-gradient(160deg,#0B1633 0%, var(--navy) 46%, #16305C 100%);"></div>
  <div class="motif-diamond-field" style="opacity:.07;"></div>
  <svg style="position:absolute;right:-140px;top:-140px;width:620px;height:620px;opacity:.10;" viewBox="0 0 1024 1024">${logoMark('white').replace(/<svg[^>]*>|<\/svg>/g,'')}</svg>
  <div style="position:absolute;top:44px;left:64px;right:64px;display:flex;justify-content:space-between;align-items:center;">
    <div class="ov on-dark" style="color:#7FD9CC;">Brand Identity &amp; Visual Style Guidelines</div>
    <div class="ov on-dark" style="color:#8592AD;">Prepared 2026</div>
  </div>
  <div style="position:absolute; top:172px; left:64px; max-width:920px;">
    <div style="width:104px;height:104px;margin-bottom:30px;">${logoMark('white')}</div>
    <div style="font-family:var(--font-head); font-weight:800; font-size:72px; line-height:74px; letter-spacing:-0.02em; color:var(--white);">WeChinaSourcing</div>
    <div style="font-family:var(--font-head); font-weight:500; font-size:23px; letter-spacing:-0.005em; color:#7FD9CC; margin-top:16px;">Verified at the Source.</div>
    <div style="font-size:15px; line-height:25px; color:#AEB9D1; margin-top:20px; max-width:500px;">A design system for a global sourcing, factory-audit, and product-inspection authority — built for trust at every scale, from a 15&nbsp;mm audit seal to a 20-foot container.</div>
  </div>
  <div style="position:absolute; left:64px; right:64px; bottom:40px; display:flex; justify-content:space-between; align-items:flex-end; border-top:1px solid rgba(255,255,255,.14); padding-top:18px;">
    <div class="row gap-24">
      <div class="col"><span class="caption" style="color:#7C89A6;">Version</span><span class="mono" style="color:#fff;font-size:13px;">v1.1</span></div>
      <div class="col"><span class="caption" style="color:#7C89A6;">Scope</span><span class="mono" style="color:#fff;font-size:13px;">Global — Print &amp; Digital</span></div>
      <div class="col"><span class="caption" style="color:#7C89A6;">Owner</span><span class="mono" style="color:#fff;font-size:13px;">Brand &amp; Creative</span></div>
      <div class="col"><span class="caption" style="color:#7C89A6;">Updated</span><span class="mono" style="color:#fff;font-size:13px;">2026-08-15</span></div>
    </div>
    <div class="mono" style="color:#7C89A6;font-size:12px;">wechinasourcing.com</div>
  </div>
`);

/* ============================================================ SLIDE 2 — BRAND STRATEGY: MISSION, POSITIONING & PERSONALITY */
function sliderRow(leftLbl, rightLbl, pct, note) {
  return `
  <div style="margin-bottom:11px;">
    <div class="row" style="justify-content:space-between; margin-bottom:6px;">
      <span style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);">${leftLbl}</span>
      <span style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);">${rightLbl}</span>
    </div>
    <div style="position:relative; height:6px; background:var(--n-100); border-radius:4px;">
      <div style="position:absolute; left:0; top:0; bottom:0; width:${pct}%; background:var(--teal); border-radius:4px;"></div>
      <div style="position:absolute; left:${pct}%; top:50%; width:15px; height:15px; background:var(--navy); border:3px solid var(--white); box-shadow:0 0 0 1px var(--n-200); border-radius:50%; transform:translate(-50%,-50%);"></div>
    </div>
    <div class="caption" style="margin-top:4px; font-size:10.5px; line-height:14px;">${note}</div>
  </div>`;
}

const pillars = [
  ['fa-gavel', 'Authoritative', 'We state findings plainly — no hedging on facts verified in person.'],
  ['fa-crosshairs', 'Precise', 'Specifications, not adjectives. Every claim is a number, code, photo or signature.'],
  ['fa-eye', 'Transparent', 'We show the audit trail, not just the conclusion.'],
  ['fa-industry', 'Modern Industrial', 'Engineered clarity over decoration — a calibration certificate, not a brochure.'],
  ['fa-handshake', 'High-Trust', 'Every claim is attributable to a named inspector and a dated report.'],
];

const slide2 = slideWrap(2, '', chrome(2, 'Brand Strategy', 'Mission, Positioning &amp; Personality', {
  bodyMt: 10,
  body: `
  <div class="row gap-40">
    <div class="col" style="width:400px;">
      <h4 class="h4" style="margin-bottom:7px;">Mission</h4>
      <div style="font-family:var(--font-head); font-weight:600; font-size:16.5px; line-height:23px; letter-spacing:-0.01em; color:var(--navy); border-left:3px solid var(--teal); padding-left:15px;">
        We connect global buyers to vetted Chinese manufacturing through rigorous, on-the-ground verification —
        converting distance and opacity into transparency, and transactions into trust.
      </div>
      <h4 class="h4" style="margin:13px 0 6px;">Positioning</h4>
      <div class="body-sm" style="font-size:11.5px; line-height:17px;">For import and procurement teams who can't inspect Chinese factories themselves, WeChinaSourcing is the sourcing &amp; verification partner that puts a named inspector and a dated report behind every factory claim — unlike directories and trading agents who resell contacts they've never physically visited.</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:8px;">Tone of Voice</h4>
      <div class="col gap-9">
        ${pillars.map(([icon, name, def]) => `
        <div class="row gap-14" style="align-items:flex-start;">
          <div style="width:26px;height:26px;border-radius:7px;background:var(--n-50);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="fa-solid ${icon}" style="font-size:11px;color:var(--slate);"></i>
          </div>
          <div><span style="font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);">${name}</span>
          <span class="body-sm" style="font-size:11.5px;color:var(--n-500); margin-left:8px;">${def}</span></div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <div style="margin-top:13px; padding-top:11px; border-top:1px solid var(--n-100);">
    <h4 class="h4" style="margin-bottom:9px;">Personality Matrix</h4>
    <div class="row gap-40">
      <div class="grow">${sliderRow('Formal', 'Approachable', 30, 'Informed formality — the register of a signed inspection report, never bureaucratic.')}</div>
      <div class="grow">${sliderRow('Corporate', 'Bold', 38, 'Corporate-safe with confident, decisive accents — never timid, never brash.')}</div>
    </div>
    <div class="row gap-40">
      <div class="grow">${sliderRow('Tech-Driven', 'Human', 48, 'Data-backed, delivered by named inspectors — technology proves it, people vouch for it.')}</div>
      <div class="grow">${sliderRow('Global Standard', 'Local Fluency', 72, 'Global compliance language, with genuine fluency in Chinese manufacturing culture.')}</div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 3 — BRAND STRATEGY: WE ARE / WE ARE NOT + MESSAGING ARCHITECTURE */
const isIsNot = [
  ['Evidence-led', 'Adjective-led'],
  ['Confident from data', 'Confident from tone alone'],
  ['Plain and specific', 'Vague and aspirational'],
  ['Global-standard, China-fluent', 'Western stereotype of "the East"'],
  ['Calm under bad news', 'Defensive or evasive'],
];

const pillars2 = [
  {
    name: 'Physical Verification',
    verified: 'Every factory published on the platform has received at least one documented on-site visit — photo-logged, GPS-stamped, and signed by a named inspector — before it is listed.',
    marketing: '"Trusted by importers worldwide." Directional, not evidentiary — use only alongside a citable count, logo wall with permission, or named case study.',
  },
  {
    name: 'Traceability',
    verified: 'Each inspection report carries a unique reference number (e.g. FA-2026-0417) that resolves to the original findings, photos, and inspector of record.',
    marketing: '"Full supply-chain visibility." Only claim this for accounts where traceability is actually configured end-to-end — flag as tier-dependent.',
  },
  {
    name: 'Response Standard',
    verified: 'Support and inspection-scheduling SLAs are whatever is contractually committed per account tier — state the actual figure, never round up.',
    marketing: '"Lightning-fast turnaround." Replace with the contracted SLA figure (e.g. "48-hour scheduling window") wherever it appears in sales or marketing copy.',
  },
];

const slide3 = slideWrap(3, '', chrome(3, 'Brand Strategy', 'We Are / We Are Not &amp; Messaging Architecture', {
  sub: 'Evidence-led positioning only works if the evidence is real. This page distinguishes verified operational fact from marketing language — and shows how to write each responsibly.',
  bodyMt: 14,
  body: `
  <div class="row gap-40">
    <div class="col" style="width:390px;">
      <h4 class="h4" style="margin-bottom:10px;">We Are / We Are Not</h4>
      <div class="row" style="padding:6px 0; border-bottom:2px solid var(--navy);">
        <div class="caption" style="flex:1;color:var(--pass-text);text-transform:uppercase;">We Are</div>
        <div class="caption" style="flex:1;color:var(--fail-text);text-transform:uppercase;">We Are Not</div>
      </div>
      ${isIsNot.map(([a, b]) => `
      <div class="row" style="padding:9px 0; border-bottom:1px solid var(--n-100);">
        <div style="flex:1;font-size:12.5px;color:var(--navy);font-weight:600;padding-right:10px;"><i class="fa-solid fa-check" style="color:var(--pass);font-size:10px;margin-right:7px;"></i>${a}</div>
        <div style="flex:1;font-size:12.5px;color:var(--n-500);"><i class="fa-solid fa-xmark" style="color:var(--fail);font-size:10px;margin-right:7px;"></i>${b}</div>
      </div>`).join('')}
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:10px;">Messaging Architecture — Proof Pillars</h4>
      <div class="col gap-10">
        ${pillars2.map(p => `
        <div class="card" style="padding:12px 16px;">
          <div style="font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);margin-bottom:6px;">${p.name}</div>
          <div class="row gap-10" style="align-items:flex-start; margin-bottom:5px;">
            <span class="pill pass" style="flex-shrink:0;">VERIFIED</span>
            <div class="body-sm" style="font-size:12px;">${p.verified}</div>
          </div>
          <div class="row gap-10" style="align-items:flex-start;">
            <span class="pill pending" style="flex-shrink:0;">MARKETING</span>
            <div class="body-sm" style="font-size:12px;">${p.marketing}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  `
}));

module.exports = { slide1, slide2, slide3 };
