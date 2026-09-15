const { logoMark, chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 4 — LOGO ANATOMY & CONSTRUCTION */
const slide4 = slideWrap(4, '', chrome(4, 'Logo System', 'Logo Anatomy &amp; Construction', {
  sub: 'The mark is a compass/verification badge: an axis-aligned square and a rotated square (diamond) share one center, their overlap forming an eight-point silhouette. A radial ring and the WCS wordmark sit inside, centered to within 1px of true optical center.',
  bodyMt: 14,
  body: `
  <div class="row gap-40">
    <div class="col" style="width:420px;">
      <div style="position:relative; width:380px; height:380px; margin:0 auto;">
        ${logoMark('full')}
      </div>
      <div class="caption" style="text-align:center; margin-top:2px;">Canvas 1024 &times; 1024 &middot; <span style="color:var(--teal)">1&nbsp;:&nbsp;1 square</span></div>
    </div>
    <div class="col grow gap-12">
      <div class="row gap-12">
        <div class="col grow card" style="padding:11px 14px;">
          <div class="caption">Construction</div>
          <div class="mono" style="font-size:12px;color:var(--navy);font-weight:600;">Square &cap; rotated square (45°)</div>
        </div>
        <div class="col grow card" style="padding:11px 14px;">
          <div class="caption">Mark silhouette</div>
          <div class="mono" style="font-size:12px;color:var(--navy);font-weight:600;">94.3% of canvas</div>
        </div>
        <div class="col grow card" style="padding:11px 14px;">
          <div class="caption">Optical center</div>
          <div class="mono" style="font-size:12px;color:var(--navy);font-weight:600;">&lt;1px offset</div>
        </div>
      </div>
      <div class="card" style="padding:14px 18px;">
        <div style="font-family:var(--font-head);font-weight:700;font-size:13px;color:var(--navy);margin-bottom:6px;">Ring &amp; Wordmark</div>
        <div class="body-sm">A radial ring built from Signal Teal cardinal points (top/bottom) and Slate Blue arcs (left/right) reads as a compass rose or aperture — evoking navigation and verification. The "WCS" wordmark sits in Deep Navy across the horizontal center, cap-height 21.3% of canvas, wordmark width 71.2% of canvas.</div>
      </div>
      <div class="card" style="padding:14px 18px;">
        <div style="font-family:var(--font-head);font-weight:700;font-size:13px;color:var(--navy);margin-bottom:6px;">Why this construction</div>
        <div class="body-sm">The badge form reads as a seal of authenticity at a glance — appropriate for an inspection authority — while the compass/ring motif signals navigation across geography and process. No element is decorative: every shape carries either structural or semantic weight.</div>
      </div>
      <div class="card" style="padding:14px 18px; border-color:var(--n-200);">
        <div class="row gap-10" style="align-items:flex-start;">
          <i class="fa-solid fa-lock" style="color:var(--slate); margin-top:2px; font-size:12px;"></i>
          <div class="body-sm"><b style="color:var(--navy);">Geometry is locked.</b> No path, angle, ratio, or color in this mark may be redrawn, approximated, or regenerated — always place the master file. See Misuse &amp; Corrected Alternatives (p.8).</div>
        </div>
      </div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 5 — LOCKUPS & COLOUR VARIANTS */
function lockupCard(title, useCase, inner, opts = {}) {
  return `
  <div class="card grow" style="padding:0; overflow:hidden;">
    <div style="height:132px; background:${opts.bg || 'var(--n-50)'}; display:flex; align-items:center; justify-content:center;">${inner}</div>
    <div style="padding:12px 16px 14px; border-top:1px solid var(--n-100);">
      <div style="font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);">${title}</div>
      <div class="caption" style="margin-top:2px;">${useCase}</div>
    </div>
  </div>`;
}

const slide5 = slideWrap(5, '', chrome(5, 'Logo System', 'Lockups by Composition', {
  sub: 'Three approved compositions. Colour treatment for each — Full, Navy, Black, Reversed White — is documented in full on the next page.',
  bodyMt: 16,
  body: `
  <div class="row gap-16">
    ${lockupCard('01 — Primary Horizontal', 'Default whenever space allows, ≥160px wide: headers, letterhead, signage, email footers.', `<div class="row gap-12" style="align-items:center;"><div style="width:44px;height:44px;">${logoMark('full')}</div><div style="font-family:var(--font-head);font-weight:800;font-size:19px;color:var(--navy);">WeChinaSourcing</div></div>`)}
    ${lockupCard('02 — Stacked', 'Square / vertical formats: avatars, seals, packing-list headers, narrow columns.', `<div class="col" style="align-items:center; gap:6px;"><div style="width:42px;height:42px;">${logoMark('full')}</div><div style="font-family:var(--font-head);font-weight:800;font-size:15px;color:var(--navy);">WeChinaSourcing</div></div>`)}
    ${lockupCard('03 — Icon / Badge Only', 'Favicons, app icons, inspection tags — only where the full name already appears elsewhere on the same surface.', `<div style="width:62px;height:62px;">${logoMark('full')}</div>`)}
  </div>
  <div class="card" style="margin-top:16px; padding:13px 18px;">
    <div class="body-sm"><b style="color:var(--navy);">Icon-only vs. full lockup:</b> the icon alone is permitted only where the WeChinaSourcing name is already established on the same page, screen, or object (a favicon next to a page titled "WeChinaSourcing," a second-page footer, an inspection tag accompanying a labeled report). On any surface where this is the <i>first</i> or <i>only</i> brand mention — a cover, a business card, an unaccompanied social post — use the Primary Horizontal or Stacked lockup, never the icon alone.</div>
  </div>
  `
}));

/* ============================================================ SLIDE 6 — COLOUR VARIANTS: FULL LOCKUPS */
function variantCell(inner, bg, border) {
  return `<div style="flex:1; height:108px; background:${bg}; display:flex; align-items:center; justify-content:center; ${border ? `border-left:1px solid var(--n-100);` : ''}">${inner}</div>`;
}

function lockupRow(label, note, cells) {
  return `
  <div class="row" style="align-items:stretch; border-bottom:1px solid var(--n-100);">
    <div class="col" style="width:150px; justify-content:center; padding:8px 14px 8px 0;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);">${label}</div>
      <div class="caption" style="margin-top:2px; line-height:12px; font-size:9px;">${note}</div>
    </div>
    ${cells.join('')}
  </div>`;
}

function textColorFor(color) {
  if (color === 'white') return '#FEFEFE';
  if (color === 'black') return '#000000';
  if (color === 'navy') return 'var(--navy)';
  return 'var(--navy)'; // 'full'
}
function hLockup(color) {
  return `<div class="row gap-8" style="align-items:center;"><div style="width:24px;height:24px;">${logoMark(color)}</div><div style="font-family:var(--font-head);font-weight:800;font-size:12.5px;color:${textColorFor(color)};">WeChinaSourcing</div></div>`;
}
function sLockup(color) {
  return `<div class="col" style="align-items:center; gap:4px;"><div style="width:24px;height:24px;">${logoMark(color)}</div><div style="font-family:var(--font-head);font-weight:800;font-size:10px;color:${textColorFor(color)};">WeChinaSourcing</div></div>`;
}
function iLockup(color) {
  return `<div style="width:38px;height:38px;">${logoMark(color === 'white' ? 'white' : color)}</div>`;
}

const colHeaders = ['Full Colour', 'Navy One-Colour', 'Black One-Colour', 'Reversed White'];
const colBgs = ['var(--white)', 'var(--white)', 'var(--white)', 'var(--navy)'];
const colKeys = ['full', 'navy', 'black', 'white'];

const slide6 = slideWrap(6, '', chrome(6, 'Logo System', 'Colour Variants &mdash; Full Lockups', {
  sub: 'Every composition, every approved colour — twelve combinations, no others. Reversed White is the only variant approved for backgrounds darker than Slate Blue.',
  bodyMt: 10,
  body: `
  <div class="row" style="border-bottom:2px solid var(--navy); padding-bottom:6px;">
    <div style="width:150px;"></div>
    ${colHeaders.map(h => `<div class="caption" style="flex:1; text-align:center; text-transform:uppercase; font-weight:700;">${h}</div>`).join('')}
  </div>
  ${lockupRow('Primary Horizontal', '≥160px wide', colKeys.map((c, i) => variantCell(hLockup(c), colBgs[i], i > 0)))}
  ${lockupRow('Stacked', 'Square / vertical', colKeys.map((c, i) => variantCell(sLockup(c), colBgs[i], i > 0)))}
  ${lockupRow('Icon / Badge', '≥32px full colour, ≥16px one-colour', colKeys.map((c, i) => variantCell(iLockup(c), colBgs[i], i > 0)))}
  <div class="caption" style="margin-top:8px;">Full file list and naming: brand-assets/01-logo/svg/ — <span class="mono" style="font-size:9px;">wcs_[horizontal|stacked|icon]_[full|navy|black|reversed-white].svg</span> (p.23, Governance).</div>
  `
}));

/* ============================================================ SLIDE 6 — CLEAR SPACE & MINIMUM SIZES (unambiguous) */
const clearSpaceDiagram = `
  <div style="position:relative; width:400px; height:280px; margin:6px auto 0;">
    <div style="position:absolute; left:0; top:0; width:170px; height:170px;">${logoMark('navy')}</div>
    <svg width="170" height="170" style="position:absolute; left:0; top:0;" viewBox="0 0 170 170">
      <line x1="34" y1="72" x2="18" y2="72" stroke="var(--teal)" stroke-width="1.5"/>
      <line x1="34" y1="98" x2="18" y2="98" stroke="var(--teal)" stroke-width="1.5"/>
      <line x1="18" y1="72" x2="18" y2="98" stroke="var(--teal)" stroke-width="1.5"/>
    </svg>
    <div class="mono" style="position:absolute; left:-6px; top:78px; font-size:9.5px; color:var(--teal); transform:rotate(-90deg) translateX(-50%); transform-origin:left;">X</div>

    <div style="position:absolute; left:220px; top:0; width:170px; height:170px; border:1.5px dashed var(--n-300);">
      <div style="position:absolute; inset:26px; display:flex; align-items:center; justify-content:center;"><div style="width:118px;height:118px;">${logoMark('navy')}</div></div>
      <div class="mono" style="position:absolute; top:6px; left:50%; transform:translateX(-50%); font-size:9px; color:var(--teal);">X</div>
      <div class="mono" style="position:absolute; bottom:6px; left:50%; transform:translateX(-50%); font-size:9px; color:var(--teal);">X</div>
      <div class="mono" style="position:absolute; left:6px; top:50%; transform:translateY(-50%); font-size:9px; color:var(--teal);">X</div>
      <div class="mono" style="position:absolute; right:6px; top:50%; transform:translateY(-50%); font-size:9px; color:var(--teal);">X</div>
    </div>
  </div>
`;

function sizeRow(label, digital, print, note) {
  return `
  <div class="row" style="justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--n-100);">
    <div style="font-family:var(--font-head);font-weight:600;font-size:12px;color:var(--navy);width:168px;">${label}</div>
    <div class="mono" style="font-size:11px;color:var(--navy);width:118px;">${digital}</div>
    <div class="mono" style="font-size:11px;color:var(--navy);width:100px;">${print}</div>
    <div class="body-sm" style="flex:1;font-size:11px;">${note}</div>
  </div>`;
}

const slide7 = slideWrap(7, '', chrome(7, 'Logo System', 'Clear Space &amp; Minimum Sizes', {
  bodyMt: 12,
  body: `
  <div class="row gap-40">
    <div class="col" style="width:440px;">
      <h4 class="h4">Exclusion Zone — one measurable rule</h4>
      ${clearSpaceDiagram}
      <div class="body-sm" style="text-align:center; margin-top:2px; padding:0 6px;"><b style="color:var(--navy)">X = the cap-height of the letter "W"</b> in the wordmark, measured at whatever size the mark is displayed (left). Reproduce that exact linear distance — not a percentage, not "some space" — as the minimum gap on all four sides (right). Nothing may cross this boundary: text, edges, photography, or other logos.</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:6px;">Minimum Reproduction Sizes</h4>
      <div class="row" style="padding:7px 0; border-bottom:2px solid var(--navy);">
        <div class="caption" style="width:168px;text-transform:uppercase;">Lockup / Process</div>
        <div class="caption" style="width:118px;text-transform:uppercase;">Digital</div>
        <div class="caption" style="width:100px;text-transform:uppercase;">Print</div>
        <div class="caption" style="flex:1;text-transform:uppercase;">Rule</div>
      </div>
      ${sizeRow('Primary lockup (full color)', '160px width', '40mm width', 'Below this, teal ring detail begins to compress.')}
      ${sizeRow('Icon, full color', '40px · floor 32px', '12mm · floor 10mm', 'Fine internal linework starts filling in under 32px.')}
      ${sizeRow('Icon, one-colour (navy/black)', '24px · floor 16px', '8mm', 'Favicons, laser engraving, photocopy-safe stationery.')}
      ${sizeRow('Embroidery (flat stitch)', '—', '20mm min. height', 'Ring detail simplifies to a solid disc below 20mm; consult digitizer proof.')}
      ${sizeRow('Foil stamp / hot-stamp', '—', '10mm min. height', 'Single-tone only (navy or black foil) — no gradient foils.')}
      ${sizeRow('Laser etch / engrave', '—', '8mm min. height', 'One-colour only; verify line weight survives the substrate\'s kerf width.')}
      <div class="row gap-14" style="margin-top:14px;">
        <div class="col" style="align-items:center;"><div style="width:36px;height:36px;">${logoMark('full')}</div><div class="caption" style="margin-top:5px;">40px full-color</div></div>
        <div class="col" style="align-items:center;"><div style="width:22px;height:22px;">${logoMark('navy')}</div><div class="caption" style="margin-top:5px;">24px one-colour</div></div>
        <div class="col" style="align-items:center;"><div style="width:15px;height:15px;">${logoMark('navy')}</div><div class="caption" style="margin-top:5px;">16px favicon floor</div></div>
        <div class="col grow card" style="justify-content:center; padding:9px 13px;">
          <div class="body-sm" style="font-size:11px;"><b style="color:var(--navy);">Optical-size rule:</b> below 32px, switch to the one-colour icon — never shrink the full-color version past its floor. Below 16px the mark reads as an abstract badge, not literal text; acceptable for favicons only.</div>
        </div>
      </div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 7 — MISUSE & CORRECTED ALTERNATIVES */
const pairs = [
  { wrong: 'transform:scale(1.6,0.62);', label: 'Stretch or distort', fix: 'Scale proportionally only — lock aspect ratio 1:1.' },
  { wrong: 'transform:rotate(22deg);', label: 'Rotate off-axis', fix: 'Keep true to horizontal / vertical, always.' },
  { wrong: 'filter:hue-rotate(190deg) saturate(3);', label: 'Recolor off-palette', fix: 'Use full color, or one approved single-tone variant.' },
  { wrong: 'filter:drop-shadow(5px 7px 4px rgba(0,0,0,.55));', label: 'Add shadows, bevels, effects', fix: 'Flat only — no shadow, glow, bevel, gradient, or outline.' },
  { wrong: 'fullOnDark', label: 'Full color on a dark background', fix: 'Switch to the Reversed White variant (p.6).' },
  { wrong: 'crowd', label: 'Crowd the clear-space zone', fix: 'Respect the X measurement on every side (p.7).' },
];

function pairTile(p) {
  let wrongInner, rightInner;
  if (p.wrong === 'fullOnDark') {
    wrongInner = `<div style="width:56px;height:56px;">${logoMark('full')}</div>`;
    rightInner = `<div style="width:56px;height:56px;">${logoMark('white')}</div>`;
  } else if (p.wrong === 'crowd') {
    wrongInner = `<div style="position:relative;width:60px;height:60px;">${logoMark('navy')}<div class="mono" style="position:absolute;top:0;left:-26px;font-size:8px;color:var(--fail);">SOURCING</div><div class="mono" style="position:absolute;bottom:-2px;right:-30px;font-size:8px;color:var(--fail);">AUDIT</div></div>`;
    rightInner = `<div style="width:52px;height:52px; outline:1px dashed var(--n-300); outline-offset:10px;">${logoMark('navy')}</div>`;
  } else {
    wrongInner = `<div style="width:56px;height:56px;${p.wrong}">${logoMark('navy')}</div>`;
    rightInner = `<div style="width:56px;height:56px;">${logoMark('navy')}</div>`;
  }
  const wrongBg = p.wrong === 'fullOnDark' ? 'var(--navy)' : 'var(--white)';
  const rightBg = p.wrong === 'fullOnDark' ? 'var(--navy)' : 'var(--white)';
  return `
  <div class="card" style="padding:12px; display:flex; align-items:center; gap:12px;">
    <div class="col" style="align-items:center; width:76px;">
      <div style="width:76px;height:76px;background:${wrongBg};border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid var(--n-100);">${wrongInner}</div>
      <div class="row gap-4" style="align-items:center;margin-top:5px;"><i class="fa-solid fa-xmark" style="color:var(--fail);font-size:10px;"></i><span class="caption" style="color:var(--fail-text);font-weight:600;">WRONG</span></div>
    </div>
    <i class="fa-solid fa-arrow-right" style="color:var(--n-300);"></i>
    <div class="col" style="align-items:center; width:76px;">
      <div style="width:76px;height:76px;background:${rightBg};border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid var(--n-100);">${rightInner}</div>
      <div class="row gap-4" style="align-items:center;margin-top:5px;"><i class="fa-solid fa-check" style="color:var(--pass);font-size:10px;"></i><span class="caption" style="color:var(--pass-text);font-weight:600;">RIGHT</span></div>
    </div>
    <div class="col grow" style="padding-left:4px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);">${p.label}</div>
      <div class="body-sm" style="font-size:11px;margin-top:3px;">${p.fix}</div>
    </div>
  </div>`;
}

const slide8 = slideWrap(8, '', chrome(8, 'Logo System', 'Misuse &amp; Corrected Alternatives', {
  sub: 'The mark\'s geometry and palette are permanently locked. These six misuses are the most common — each paired with the correct alternative, no exceptions for platform constraints.',
  bodyMt: 12,
  body: `
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:11px;">
    ${pairs.map(pairTile).join('')}
  </div>
  <div class="card" style="margin-top:9px; padding:8px 16px;">
    <div class="row gap-24">
      <div class="row gap-8" style="align-items:flex-start; flex:1;">
        <i class="fa-solid fa-xmark" style="color:var(--fail); font-size:10px; margin-top:2px;"></i>
        <div class="body-sm" style="font-size:10px;"><b style="color:var(--navy);">Two additional prohibited practices —</b> add an unauthorized container, outline, or badge shape around the mark.</div>
      </div>
      <div class="row gap-8" style="align-items:flex-start; flex:1;">
        <i class="fa-solid fa-xmark" style="color:var(--fail); font-size:10px; margin-top:2px;"></i>
        <div class="body-sm" style="font-size:10px;">Recreate the wordmark or icon using system fonts, emoji, or an approximate hand-traced copy.</div>
      </div>
    </div>
  </div>
  <div class="caption" style="margin-top:5px;">Together with the six above: eight prohibited practices, matching the Quick Start summary (p.25) exactly.</div>
  `
}));

module.exports = { slide4, slide5, slide6, slide7, slide8 };
