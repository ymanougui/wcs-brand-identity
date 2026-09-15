const { logoMark, chrome, slideWrap, circularStamp } = require('./shared');

/* ============================================================ SLIDE 17 — DATA VISUALISATION SYSTEM */
const barData = [
  ['Dimensional', 96, 'pass'], ['Packaging', 91, 'pass'], ['Labeling', 88, 'pass'], ['Materials', 74, 'pending'], ['Electrical Safety', 61, 'fail'],
];
function bar([label, val, cls]) {
  const color = cls === 'pass' ? 'var(--pass)' : cls === 'fail' ? 'var(--fail)' : 'var(--pending)';
  return `
  <div class="row gap-10" style="align-items:center; margin-bottom:9px;">
    <div style="width:100px; font-size:10.5px; color:var(--navy);">${label}</div>
    <div style="flex:1; height:14px; background:var(--n-100); border-radius:4px; position:relative;">
      <div style="position:absolute; left:0; top:0; bottom:0; width:${val}%; background:${color}; border-radius:4px;"></div>
    </div>
    <div class="mono" style="width:34px; text-align:right; font-size:10.5px; color:var(--navy);">${val}%</div>
  </div>`;
}

const linePoints = [62, 58, 65, 71, 66, 74, 82, 79, 88];
function lineChart() {
  const w = 460, h = 140, pad = 12;
  const max = 100;
  const step = (w - pad * 2) / (linePoints.length - 1);
  const pts = linePoints.map((v, i) => [pad + i * step, h - pad - (v / max) * (h - pad * 2)]);
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const area = path + ` L${pts[pts.length - 1][0]},${h - pad} L${pts[0][0]},${h - pad} Z`;
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${[0, 25, 50, 75, 100].map(g => `<line x1="${pad}" y1="${h - pad - (g / max) * (h - pad * 2)}" x2="${w - pad}" y2="${h - pad - (g / max) * (h - pad * 2)}" stroke="var(--n-100)" stroke-width="1"/>`).join('')}
    <path d="${area}" fill="var(--teal)" opacity="0.12"/>
    <path d="${path}" fill="none" stroke="var(--teal)" stroke-width="2.5"/>
    ${pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${i === pts.length - 1 ? 4 : 2.5}" fill="${i === pts.length - 1 ? 'var(--navy)' : 'var(--teal)'}"/>`).join('')}
    <text x="${pts[pts.length - 1][0] - 8}" y="${pts[pts.length - 1][1] - 10}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="var(--navy)" font-weight="600">88 resolved</text>
  </svg>`;
}

const slide18 = slideWrap(18, '', chrome(18, 'Digital Product System', 'Data Visualisation System', {
  sub: 'Evidence is the brand strength — charts stay quiet, labeled, and legible so the finding is the story, not the decoration.',
  bodyMt: 12,
  body: `
  <div class="row gap-24">
    <div class="col grow card" style="padding:16px 18px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);margin-bottom:12px;">Pass Rate by Inspection Category</div>
      ${barData.map(bar).join('')}
      <div class="row gap-14" style="margin-top:8px;">
        <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--pass);border-radius:2px;"></span><span class="caption">Pass ≥85%</span></div>
        <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--pending);border-radius:2px;"></span><span class="caption">Review 70–84%</span></div>
        <div class="row gap-5" style="align-items:center;"><span style="width:8px;height:8px;background:var(--fail);border-radius:2px;"></span><span class="caption">Fail &lt;70%</span></div>
      </div>
    </div>
    <div class="col grow card" style="padding:16px 18px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);margin-bottom:10px;">Non-Conformances Resolved — 9-Week Trend</div>
      ${lineChart()}
    </div>
  </div>
  <div class="row gap-40" style="margin-top:14px;">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:7px;">Palette &amp; Rules</h4>
      <div class="body-sm">Categorical series: Navy → Slate → Teal, in that order; never more than three series on one chart. Status overlays always use the semantic success/warning/danger tokens (p.10) — labeled directly, never color-only. Axis labels in Caption/DM&nbsp;Sans; values and units in JetBrains&nbsp;Mono.</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:7px;">Not Permitted</h4>
      <div class="body-sm">3D charts or perspective tilt · pie charts beyond 4 segments · dual axes without explicit labeling on both · rainbow/unthemed color scales · any legend that relies on color alone without a text label · decorative gradients inside data marks.</div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 18 — PHYSICAL & SUPPLY-CHAIN APPLICATIONS */
const barcodeBars = Array.from({ length: 26 }).map(() => `${2 + Math.round(Math.random() * 3)}px`);
function barcode() {
  return `<div style="display:flex; align-items:center; height:26px; gap:1.5px;">${barcodeBars.map(w => `<div style="width:${w};height:100%;background:var(--navy);"></div>`).join('')}</div>`;
}

function physCard(title, note, inner, opts = {}) {
  return `
  <div class="card" style="padding:0; overflow:hidden;">
    <div style="height:128px; background:${opts.bg || 'var(--n-50)'}; display:flex; align-items:center; justify-content:center; ${opts.pad || ''}">${inner}</div>
    <div style="padding:9px 13px 11px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:11.5px;color:var(--navy);">${title}</div>
      <div class="caption" style="margin-top:2px; line-height:14px;">${note}</div>
      ${opts.file ? `<div class="mono" style="font-size:8.5px; color:var(--n-400); margin-top:4px;">${opts.file}</div>` : ''}
    </div>
  </div>`;
}

const slide19 = slideWrap(19, '', chrome(19, 'Applications', 'Physical &amp; Supply-Chain Applications', {
  bodyMt: 12,
  body: `
  <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:13px;">
    ${physCard('Inspection Seal', 'Foil-stamped / laser-etched, ≥8mm.', circularStamp('s18a', 100, { color: 'var(--navy)' }), { file: 'wcs_icon_navy.svg' })}
    ${physCard('Shipping Label', 'Mono-navy mark; JetBrains Mono fields.', `
      <div style="width:88%; background:var(--white); border:1.5px solid var(--navy); border-radius:4px; padding:10px 11px;">
        <div class="row" style="justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--navy); padding-bottom:5px; margin-bottom:5px;"><div style="width:18px;height:18px;">${logoMark('navy')}</div><div class="mono" style="font-size:8px;color:var(--navy);font-weight:700;">LABEL</div></div>
        <div class="mono" style="font-size:7.5px;color:var(--n-600);line-height:11px;">HS 8517.62 &middot; TCLU-772154-3</div>
        <div style="margin-top:5px; transform:scale(1,0.6); transform-origin:left;">${barcode()}</div>
      </div>`, { file: '04-templates/wcs_template_shipping-label.pdf' })}
    ${physCard('Product / Hang Tag', 'One-colour navy or black only, ≤80gsm card.', `
      <svg width="70" height="100" viewBox="0 0 70 100"><path d="M18 8 L52 8 L58 20 L58 96 L12 96 L12 20 Z" fill="var(--white)" stroke="var(--n-300)" stroke-width="1.5"/><circle cx="35" cy="14" r="3" fill="none" stroke="var(--n-300)" stroke-width="1.5"/><g transform="translate(23,32) scale(0.024)">${logoMark('navy').replace(/<svg[^>]*>|<\/svg>/g, '')}</g><rect x="17" y="72" width="36" height="12" fill="none" stroke="var(--n-300)" stroke-width="1"/></svg>`, { file: 'wcs_icon_navy.svg · wcs_icon_black.svg' })}
    ${physCard('Audit Report Cover', 'Navy field, reversed mark, mono ref.', `
      <div style="width:112px; height:112px; background:var(--navy); border-radius:3px; padding:13px 12px; position:relative;">
        <div style="width:18px;height:18px;">${logoMark('white')}</div>
        <div style="font-family:var(--font-head); font-weight:700; font-size:9.5px; color:#fff; margin-top:11px; line-height:12px;">FACTORY<br/>AUDIT REPORT</div>
        <div class="mono" style="position:absolute; bottom:11px; left:12px; font-size:7px; color:#7FD9CC;">REF. FA-2026-0417</div>
      </div>`, { file: '04-templates/wcs_template_audit-report.pdf' })}
    ${physCard('Corrugated Packaging', 'One-colour print on kraft; mark ≥30mm.', `
      <svg width="120" height="100" viewBox="0 0 120 100"><path d="M8 30 L60 8 L112 30 L112 90 L8 90 Z" fill="var(--white)" stroke="var(--n-300)" stroke-width="1.5"/><path d="M8 30 L60 52 L112 30" fill="none" stroke="var(--n-300)" stroke-width="1.5"/><path d="M60 52 L60 8" fill="none" stroke="var(--n-300)" stroke-width="1"/><g transform="translate(44,62) scale(0.018)">${logoMark('navy').replace(/<svg[^>]*>|<\/svg>/g, '')}</g></svg>`, { file: 'wcs_icon_navy.svg' })}
    ${physCard('Uniform — Polo', 'Left-chest badge lockup, single-colour embroidery.', `<svg width="80" height="100" viewBox="0 0 70 100"><path d="M18 8 L52 8 L58 20 L58 96 L12 96 L12 20 Z" fill="var(--white)" stroke="var(--n-300)" stroke-width="1.5"/><path d="M26 8 Q35 20 44 8" fill="none" stroke="var(--n-300)" stroke-width="1.5"/><g transform="translate(20,30) scale(0.02)">${logoMark('navy').replace(/<svg[^>]*>|<\/svg>/g, '')}</g></svg>`, { file: 'wcs_icon_navy.svg' })}
    ${physCard('Trade-Show Backdrop', 'Reversed-white on navy; ≥3m viewing distance.', `
      <div style="width:150px; height:96px; background:var(--navy); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; border-radius:2px;">
        <div style="width:22px;height:22px;">${logoMark('white')}</div>
        <div style="font-family:var(--font-head); font-weight:700; font-size:9px; color:#fff;">WeChinaSourcing</div>
        <div style="font-family:var(--font-head); font-size:6.5px; color:#7FD9CC;">Verified at the Source.</div>
      </div>`, { file: 'wcs_stacked_reversed-white.svg' })}
    <div class="card" style="padding:11px 13px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:11.5px;color:var(--navy);margin-bottom:5px;">Production Constraints</div>
      <div class="caption" style="line-height:14px;">One-colour processes (engraving, embroidery, foil, screen print) use Navy or Black only — never Slate or Teal, which don't hold detail at small scale. Reversed artwork requires the dedicated <span class="mono" style="font-size:9.5px;">wcs_[lockup]_reversed-white.svg</span> file (p.6) — never a white-filtered version of the full-color mark. Always place vector source; never re-trace from a raster export.</div>
    </div>
  </div>
  `
}));

module.exports = { slide18, slide19 };
