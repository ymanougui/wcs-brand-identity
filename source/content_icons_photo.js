const { logoMark, chrome, slideWrap, circularStamp } = require('./shared');
const images = require('./image_data');

/* ============================================================ SLIDE 12 — ICONOGRAPHY & MOTIFS */
const iconRow = ['fa-magnifying-glass', 'fa-shield-halved', 'fa-clipboard-check', 'fa-box', 'fa-ship', 'fa-warehouse', 'fa-file-invoice', 'fa-route', 'fa-scale-balanced', 'fa-qrcode'];

const slide13 = slideWrap(13, '', chrome(13, 'Visual Tokens', 'Iconography &amp; Industrial Graphic Motifs', {
  bodyMt: 14,
  body: `
  <div class="row" style="justify-content:space-between; gap:24px;">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Icon Style</h4>
      <div class="row gap-14">${iconRow.map(i => `<div style="width:34px;height:34px;border-radius:8px;background:var(--n-50);display:flex;align-items:center;justify-content:center;"><i class="fa-solid ${i}" style="font-size:13px;color:var(--navy);"></i></div>`).join('')}</div>
    </div>
    <div class="col" style="width:340px;">
      <div class="card" style="padding:11px 15px;">
        <div class="mono" style="font-size:10.5px; color:var(--navy); line-height:17px;">Library: FontAwesome Free 6.5.2 — Solid<br/>Canvas: 24×24px · optical bounds 20×20px<br/>Stroke: 1.5px-equivalent at 24px<br/>Color: Navy (primary) · Slate (secondary) · Teal (active only)</div>
      </div>
    </div>
  </div>
  <div class="body-sm" style="margin-top:8px;">Spacing: minimum 8px between adjacent icons; 6px between an icon and its label. Accessibility: every functional icon ships with <span class="mono">aria-label</span>, or <span class="mono">aria-hidden="true"</span> plus adjacent visible text — never an icon-only control with no text alternative anywhere in the DOM.</div>

  <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:16px;">
    <div class="card" style="padding:16px; text-align:center;">
      <div style="height:160px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; border-radius:6px; background:var(--n-50);">
        <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(90deg, var(--slate) 0 1.5px, transparent 1.5px 20px); opacity:.35; transform:rotate(45deg) scale(2);"></div>
        <div style="width:68px;height:68px;position:relative;">${logoMark('navy')}</div>
      </div>
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);margin-top:10px;">Compass Grid</div>
      <div class="caption">Event backdrops, section dividers. Max 18% opacity.</div>
    </div>
    <div class="card" style="padding:16px; text-align:center;">
      <div style="height:160px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; border-radius:6px; background:var(--n-50);">
        <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(0deg, var(--navy) 0 1px, transparent 1px 14px), repeating-linear-gradient(90deg, var(--navy) 0 1px, transparent 1px 34px); opacity:.18;"></div>
        <i class="fa-solid fa-layer-group" style="font-size:30px;color:var(--slate);position:relative;"></i>
      </div>
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);margin-top:10px;">Container Line Grid</div>
      <div class="caption">Report backgrounds, packaging. Max 18% opacity.</div>
    </div>
    <div class="card" style="padding:16px; text-align:center;">
      <div style="height:160px; display:flex; align-items:center; justify-content:center; border-radius:6px; background:var(--n-50);">
        ${circularStamp('s12a', 130, { color: 'var(--slate)' })}
      </div>
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);margin-top:10px;">Verification Stamp</div>
      <div class="caption">Full opacity only — audit reports, seals.</div>
    </div>
    <div class="card" style="padding:16px; text-align:center;">
      <div style="height:160px; display:flex; align-items:center; justify-content:center; border-radius:6px; background:var(--n-50); gap:18px;">
        <svg width="38" height="38" viewBox="0 0 30 30"><line x1="15" y1="0" x2="15" y2="30" stroke="var(--navy)" stroke-width="1.5"/><line x1="0" y1="15" x2="30" y2="15" stroke="var(--navy)" stroke-width="1.5"/><circle cx="15" cy="15" r="7" fill="none" stroke="var(--teal)" stroke-width="1.5"/></svg>
        <svg width="38" height="38" viewBox="0 0 30 30"><line x1="15" y1="0" x2="15" y2="30" stroke="var(--n-300)" stroke-width="1.5"/><line x1="0" y1="15" x2="30" y2="15" stroke="var(--n-300)" stroke-width="1.5"/><circle cx="15" cy="15" r="7" fill="none" stroke="var(--slate)" stroke-width="1.5"/></svg>
      </div>
      <div style="font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);margin-top:10px;">Precision Crosshair</div>
      <div class="caption">Bullet points, spec call-outs. Full opacity.</div>
    </div>
  </div>
  <div class="card" style="margin-top:16px; padding:13px 18px;">
    <div class="body-sm"><b style="color:var(--navy);">Usage rule:</b> motifs sit behind content at ≤18% opacity, or as isolated line-art accents — never as full-saturation fields competing with the logo or body copy for attention. The Verification Stamp is the one exception: always full opacity, always intact.</div>
  </div>
  `
}));

/* ============================================================ SLIDE 13 — PHOTOGRAPHY & IMAGE ART DIRECTION */
function photoCard(img, pos, title, credit) {
  return `
  <div class="card" style="padding:0; overflow:hidden; position:relative;">
    <div style="height:124px; background-image:url('${img}'); background-size:cover; background-position:${pos}; position:relative;">
      <span style="position:absolute; top:6px; right:6px; background:rgba(18,35,80,.82); color:#fff; font-family:var(--font-mono); font-size:7.5px; font-weight:600; letter-spacing:.04em; padding:3px 6px; border-radius:100px;">AI ILLUSTRATIVE</span>
    </div>
    <div style="padding:6px 12px 7px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:10.5px;color:var(--navy);">${title}</div>
      <div class="caption" style="margin-top:1px; line-height:11px; font-size:8.5px;">${credit}</div>
    </div>
  </div>`;
}

const slide14 = slideWrap(14, '', chrome(14, 'Visual Tokens', 'Photography &amp; Image Art Direction', {
  sub: 'Two distinct categories, never blended: Documentary imagery is real, traceable, and evidence-capable. Illustrative art direction is conceptual — labeled, and never evidence.',
  bodyMt: 8,
  body: `
  <div class="row gap-14">
    <div class="col grow card" style="padding:6px 14px; border-left:3px solid var(--pass); border-radius:2px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:10.5px;color:var(--navy);">Documentary — evidence-capable</div>
      <div class="body-sm" style="font-size:9.5px; line-height:13px; margin-top:1px;">Real, traceable to a dated assignment, consented. May appear in audit reports and factual claims.</div>
    </div>
    <div class="col grow card" style="padding:6px 14px; border-left:3px solid var(--pending); border-radius:2px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:10.5px;color:var(--navy);">Illustrative — art direction only</div>
      <div class="body-sm" style="font-size:9.5px; line-height:13px; margin-top:1px;">Conceptual, may be AI-generated (as the 6 examples below are). Never evidence, never a claim, always labeled.</div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:9px; margin-top:8px;">
    ${photoCard(images.inspector, 'center 22%', 'Inspector at Work', 'kittl_inspector-at-work.png')}
    ${photoCard(images.product, 'center', 'Product Detail — Macro', 'kittl_product-detail-macro.png')}
    ${photoCard(images.factory, 'center 40%', 'Factory Floor — Wide', 'kittl_factory-floor-wide.png')}
    ${photoCard(images.documentation, 'center', 'Documentation in Hand', 'kittl_documentation-in-hand.png')}
    ${photoCard(images.traceability, 'center', 'Traceability — Batch / Label', 'kittl_traceability-batch-label.png')}
    ${photoCard(images.portrait, 'center 14%', 'Portrait — Named &amp; Credited', 'kittl_portrait-named-credited.png')}
  </div>
  <div class="card" style="margin-top:7px; padding:6px 14px;">
    <div class="body-sm" style="font-size:9.5px;"><b style="color:var(--navy);">Illustrative art direction — AI-generated, not inspection evidence.</b> These six images set tone, composition, and lighting only. The WCS mark is never rendered inside a generated image — where a lockup is needed, the master SVG is placed as a separate vector layer over the photograph, never traced, warped, or approximated by the image generator.</div>
  </div>
  `
}));

module.exports = { slide13, slide14 };
