const { logoMark, chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 24 — QUICK START (in-deck summary) */
const slide25 = slideWrap(25, '', chrome(25, 'Quick Start', 'Quick Start — Partner &amp; Supplier Summary', {
  sub: 'A condensed version of this page ships as a standalone one-page PDF (Quick-Start-Sheet.pdf) for partners who need the essentials without the full 26-page system.',
  bodyMt: 12,
  body: `
  <div class="row gap-16">
    <div class="col grow card" style="padding:14px 16px; align-items:center; text-align:center;">
      <div style="width:56px;height:56px;">${logoMark('full')}</div>
      <div class="caption" style="margin-top:8px;">Use the master file only — never redraw.</div>
    </div>
    <div class="col grow card" style="padding:14px 16px;">
      <div class="caption">CLEAR SPACE</div>
      <div class="body-sm" style="font-size:11.5px; margin-top:4px;">X = cap-height of "W" — that exact gap on all 4 sides, minimum.</div>
    </div>
    <div class="col grow card" style="padding:14px 16px;">
      <div class="caption">MINIMUM SIZE</div>
      <div class="body-sm" style="font-size:11.5px; margin-top:4px;">32px / 10mm floor, full color. Below that: one-colour icon only.</div>
    </div>
    <div class="col grow card" style="padding:14px 16px;">
      <div class="caption">ON DARK BACKGROUNDS</div>
      <div class="body-sm" style="font-size:11.5px; margin-top:4px;">Always switch to the Reversed White file — never full color.</div>
    </div>
  </div>
  <div class="row gap-16" style="margin-top:14px;">
    <div class="col" style="width:280px;">
      <div class="caption" style="margin-bottom:8px;">CORE COLORS</div>
      <div class="row gap-8">
        <div style="flex:1;height:40px;background:var(--navy);border-radius:6px;"></div>
        <div style="flex:1;height:40px;background:var(--slate);border-radius:6px;"></div>
        <div style="flex:1;height:40px;background:var(--teal);border-radius:6px;"></div>
      </div>
      <div class="mono" style="font-size:9.5px;color:var(--n-500);margin-top:5px;">#122350 · #1F5474 · #2D9C91</div>
    </div>
    <div class="col grow">
      <div class="caption" style="margin-bottom:8px;">CORE TYPE</div>
      <div class="body-sm" style="font-size:11.5px;">Headings: Urbanist Bold/ExtraBold. Body: DM Sans Regular. Data: JetBrains Mono. Chinese: Noto Sans SC.</div>
    </div>
    <div class="col" style="width:260px;">
      <div class="caption" style="margin-bottom:8px;">8 THINGS NEVER TO DO</div>
      <div class="body-sm" style="font-size:11px; line-height:16px;">Stretch · rotate · recolor · add shadow/bevel · full color on dark · add a container/outline · crowd the clear space · redraw with system fonts.</div>
    </div>
  </div>
  <div class="card" style="margin-top:14px; padding:11px 16px;">
    <div class="body-sm"><b style="color:var(--navy);">Need an asset or an exception?</b> assets@wechinasourcing.com — never source a logo file from a screenshot, prior printed piece, or a partner's own files.</div>
  </div>
  `
}));

/* ============================================================ SLIDE 25 — CLOSING */
const slide26 = slideWrap(26, 'cover', `
  <div style="position:absolute;inset:0;background:linear-gradient(200deg,#16305C 0%, var(--navy) 54%, #0B1633 100%);"></div>
  <div class="motif-diamond-field" style="opacity:.07;"></div>
  <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-56%); text-align:center;">
    <div style="width:104px;height:104px;margin:0 auto 30px;">${logoMark('white')}</div>
    <div style="font-family:var(--font-head); font-weight:800; font-size:46px; letter-spacing:-0.02em; color:var(--white);">Verified at the Source.</div>
    <div style="font-size:15px; color:#AEB9D1; margin-top:14px;">WeChinaSourcing — Brand Identity &amp; Visual Style Guidelines · v1.1</div>
  </div>
  <div style="position:absolute; left:64px; right:64px; bottom:44px; display:flex; justify-content:space-between; align-items:flex-end; border-top:1px solid rgba(255,255,255,.14); padding-top:18px;">
    <div class="row gap-24">
      <div class="col"><span class="caption" style="color:#7C89A6;">Brand &amp; Creative</span><span class="mono" style="color:#fff;font-size:13px;">brand@wechinasourcing.com</span></div>
      <div class="col"><span class="caption" style="color:#7C89A6;">Asset Requests</span><span class="mono" style="color:#fff;font-size:13px;">assets@wechinasourcing.com</span></div>
    </div>
    <div class="row gap-16" style="align-items:center;">
      <i class="fa-brands fa-linkedin" style="color:#7C89A6;font-size:16px;"></i>
      <div class="mono" style="color:#7C89A6;font-size:12px;">wechinasourcing.com</div>
    </div>
  </div>
`);

module.exports = { slide25, slide26 };
