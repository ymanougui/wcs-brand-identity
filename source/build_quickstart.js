const fs = require('fs');
const path = require('path');
const { logoDefsBlock, logoMark, projectDir } = require('./build');
const { css } = require('./css');

const body = `
  <div class="chrome-top">
    <div class="kicker"><b>WECHINASOURCING</b> &nbsp;/&nbsp; QUICK START</div>
    <div class="page-idx">PARTNER &amp; SUPPLIER SHEET</div>
  </div>
  <div class="content-area">
    <div class="ov">Quick Start</div>
    <h1 class="slide-title">Brand Quick-Start — Partner &amp; Supplier Sheet</h1>
    <div class="slide-sub">The essentials for anyone producing a WeChinaSourcing-branded asset. Full system: WeChinaSourcing-Brand-Guidelines.pdf.</div>
    <div class="slide-body" style="margin-top:16px;">
      <div class="row gap-16">
        <div class="col grow card" style="padding:16px 18px; align-items:center; text-align:center;">
          <div style="width:60px;height:60px;">${logoMark('full')}</div>
          <div class="caption" style="margin-top:9px;">Use the master file only — never redraw.</div>
        </div>
        <div class="col grow card" style="padding:16px 18px;">
          <div class="caption">CLEAR SPACE</div>
          <div class="body-sm" style="margin-top:5px;">X = cap-height of the letter "W" — reproduce that exact gap on all 4 sides, minimum.</div>
        </div>
        <div class="col grow card" style="padding:16px 18px;">
          <div class="caption">MINIMUM SIZE</div>
          <div class="body-sm" style="margin-top:5px;">32px / 10mm floor, full color. Smaller than that: one-colour icon only, 16px/8mm floor.</div>
        </div>
        <div class="col grow card" style="padding:16px 18px;">
          <div class="caption">ON DARK BACKGROUNDS</div>
          <div class="body-sm" style="margin-top:5px;">Always switch to the Reversed White file — full color on dark is never correct.</div>
        </div>
      </div>
      <div class="row gap-16" style="margin-top:16px;">
        <div class="col" style="width:300px;">
          <div class="caption" style="margin-bottom:9px;">CORE COLORS</div>
          <div class="row gap-9">
            <div class="col grow" style="align-items:center;"><div style="width:100%;height:46px;background:var(--navy);border-radius:7px;"></div><div class="mono" style="font-size:9.5px;margin-top:4px;">#122350</div></div>
            <div class="col grow" style="align-items:center;"><div style="width:100%;height:46px;background:var(--slate);border-radius:7px;"></div><div class="mono" style="font-size:9.5px;margin-top:4px;">#1F5474</div></div>
            <div class="col grow" style="align-items:center;"><div style="width:100%;height:46px;background:var(--teal);border-radius:7px;"></div><div class="mono" style="font-size:9.5px;margin-top:4px;">#2D9C91</div></div>
          </div>
        </div>
        <div class="col grow">
          <div class="caption" style="margin-bottom:9px;">CORE TYPE</div>
          <div class="body-sm">Headings: <b style="color:var(--navy)">Urbanist</b> Bold/ExtraBold. Body: <b style="color:var(--navy)">DM Sans</b> Regular. Data/codes: <b style="color:var(--navy)">JetBrains Mono</b>. Chinese: <b style="color:var(--navy)">Noto Sans SC</b>.</div>
        </div>
        <div class="col" style="width:290px;">
          <div class="caption" style="margin-bottom:9px;">8 THINGS NEVER TO DO</div>
          <div class="body-sm" style="line-height:17px;">Stretch or distort &middot; rotate off-axis &middot; recolor off-palette &middot; add shadows/bevels &middot; use full color on dark &middot; add an unauthorized container &middot; crowd the clear space &middot; redraw with system fonts.</div>
        </div>
      </div>
      <div class="card" style="margin-top:16px; padding:13px 18px;">
        <div class="body-sm"><b style="color:var(--navy);">Need an asset or an exception?</b> assets@wechinasourcing.com — never source a logo file from a screenshot, a prior printed piece, or a partner's own files. Full specification, all twelve lockup/colour combinations, and production constraints: WeChinaSourcing-Brand-Guidelines.pdf (Logo System, p.4–8 &amp; Physical Applications, p.19).</div>
      </div>
    </div>
  </div>
  <div class="chrome-bottom">
    <div class="row gap-8" style="align-items:center;">
      <div class="mark-mini">${logoMark('navy')}</div>
      <div class="foot-label">Brand Identity &amp; Visual Style Guidelines — Quick Start</div>
    </div>
    <div class="foot-label">v1.1 &middot; 2026</div>
  </div>
`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>WeChinaSourcing — Quick Start Sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}
.deck{padding:0;} .slide{box-shadow:none;}
@media print{ html,body{background:#fff;} }
</style>
</head>
<body>
${logoDefsBlock()}
<div class="deck">
<section class="slide" id="quickstart">${body}</section>
</div>
</body>
</html>`;

const outPath = path.join(projectDir, 'Quick-Start-Sheet.html');
fs.writeFileSync(outPath, html);
console.log('Written', outPath, html.length, 'bytes');
