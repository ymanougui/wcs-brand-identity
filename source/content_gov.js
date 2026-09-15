const { chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 22 — GOVERNANCE & ASSET MANAGEMENT */
const folderTree = `brand-assets/
├─ 01-logo/
│  ├─ svg/       12 — 3 lockups × 4 colors
│  ├─ png/       36 — svg set × @1x @2x @3x
│  ├─ pdf/       12 — svg set, print-ready
│  └─ favicon/    6 — 16/32/48/180/192/512px
├─ 02-color/     tokens.css · tokens.json
├─ 03-type/      LICENSES.md · specimens/
├─ 04-templates/ audit-report · shipping-label
└─ CHANGELOG.md`;

const approvalSteps = [
  ['1. Request', 'Requester opens a brand-asset ticket with use case, channel, and deadline.'],
  ['2. Draft', 'Brand &amp; Creative produces or pulls the approved asset — no new variants without sign-off.'],
  ['3. Review', 'Brand owner checks against this guide; legal reviews if a substantiated claim is involved.'],
  ['4. Approve &amp; Version', 'Approved asset gets a version tag and lands in the shared library — never sent as a one-off attachment.'],
  ['5. Log', 'Change is recorded in CHANGELOG.md with date, requester, and reason.'],
];

const slide23 = slideWrap(23, '', chrome(23, 'Governance', 'Governance &amp; Asset Management', {
  bodyMt: 12,
  body: `
  <div class="row gap-32">
    <div class="col" style="width:360px;">
      <h4 class="h4" style="margin-bottom:8px;">Asset Folder Structure</h4>
      <div class="mono card" style="padding:11px 14px; font-size:10px; line-height:16px; color:var(--navy); white-space:pre;">${folderTree}</div>
      <h4 class="h4" style="margin:14px 0 8px;">Naming Convention</h4>
      <div class="mono card" style="padding:9px 13px; font-size:10px; color:var(--navy); line-height:15px;">wcs_[lockup]_[color]@[density].[ext]<br/>e.g. wcs_icon_reversed-white@2x.png<br/>(svg/pdf omit density — resolution-independent)</div>
      <div class="caption" style="margin-top:8px;">The Brand Guidelines deck and Quick Start sheet ship one level up, alongside <span class="mono" style="font-size:9.5px;">brand-assets/</span> — only the two standalone document templates live in <span class="mono" style="font-size:9.5px;">04-templates/</span>.</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Approval Workflow</h4>
      <div class="col gap-7">
        ${approvalSteps.map(([step, desc]) => `
        <div class="row gap-12" style="align-items:flex-start;">
          <div style="font-family:var(--font-head);font-weight:700;font-size:11px;color:var(--teal);width:118px;flex-shrink:0;">${step}</div>
          <div class="body-sm" style="font-size:11.5px;">${desc}</div>
        </div>`).join('')}
      </div>
      <div class="row gap-16" style="margin-top:14px;">
        <div class="col grow card" style="padding:10px 14px;">
          <div class="caption">VERSION CONTROL</div>
          <div class="body-sm" style="font-size:11px;">Semantic: MAJOR.MINOR (v1.1). MAJOR = geometry/palette change (requires this doc's owner + legal sign-off). MINOR = new template, copy, or token addition.</div>
        </div>
        <div class="col grow card" style="padding:10px 14px;">
          <div class="caption">EXCEPTIONS</div>
          <div class="body-sm" style="font-size:11px;">Only the Brand &amp; Creative owner may approve a one-time exception to any rule in this document, logged with a written reason.</div>
        </div>
      </div>
      <div class="card" style="margin-top:12px; padding:10px 16px; border-color:var(--n-200);">
        <div class="body-sm"><b style="color:var(--navy);">Partner &amp; supplier requests:</b> assets@wechinasourcing.com — turnaround per the contracted SLA for that account tier. Never re-derive a logo from a screenshot or prior printed piece; always request the master file.</div>
      </div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 23 — DESIGN TOKENS REFERENCE */
const tokenSample = `:root{
  --color-navy:      #122350;
  --color-slate:      #1F5474;
  --color-teal:       #2D9C91;
  --color-porcelain:  #FEFEFE;
  --font-head:  'Urbanist', 'Noto Sans SC', sans-serif;
  --font-body:  'DM Sans', 'Noto Sans SC', sans-serif;
  --font-mono:  'JetBrains Mono', monospace;
  --radius-md:  8px;
  --space-4:    16px;
}`;

const tokenJson = `{
  "color": { "brand": {
    "primary":  { "value": "#122350" },
    "secondary":{ "value": "#1F5474" },
    "accent":   { "value": "#2D9C91" }
  }},
  "spacing": { "4": { "value": "16px" } },
  "radius":  { "md": { "value": "8px" } }
}`;

const slide24 = slideWrap(24, '', chrome(24, 'Governance', 'Design Tokens Reference', {
  sub: 'Every value used across this document is exported as machine-readable tokens — tokens.css for direct implementation, tokens.json for Figma Tokens / Style Dictionary pipelines.',
  bodyMt: 12,
  body: `
  <div class="row gap-24">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:8px;">tokens.css <span class="caption">— excerpt</span></h4>
      <div class="mono card" style="padding:12px 16px; font-size:10.5px; line-height:17px; color:var(--navy); white-space:pre;">${tokenSample}</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:8px;">tokens.json <span class="caption">— excerpt, W3C DTCG-style</span></h4>
      <div class="mono card" style="padding:12px 16px; font-size:10.5px; line-height:17px; color:var(--navy); white-space:pre;">${tokenJson}</div>
    </div>
  </div>
  <div class="row gap-16" style="margin-top:14px;">
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">COLOR TOKENS</div><div class="mono" style="font-size:10.5px;color:var(--navy);">20 — brand, surface, text, border, status</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">TYPE TOKENS</div><div class="mono" style="font-size:10.5px;color:var(--navy);">10 scale steps &times; 3 font families</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">SPACING / RADIUS</div><div class="mono" style="font-size:10.5px;color:var(--navy);">8 steps / 5 steps</div></div>
    <div class="col grow card" style="padding:9px 13px;"><div class="caption">FILES</div><div class="mono" style="font-size:10.5px;color:var(--navy);">02-color/tokens.css · tokens.json</div></div>
  </div>
  <div class="body-sm" style="margin-top:12px;">Import tokens.json into Figma via the Tokens Studio plugin to keep design files and code in sync; tokens.css is the single source of truth for web and product engineering — no hard-coded hex values in application code.</div>
  `
}));

module.exports = { slide23, slide24 };
