const css = `
:root{
  /* ---- Locked brand colors (extracted from logo.svg) ---- */
  --navy:#122350;        /* Deep Navy — primary / authority */
  --slate:#1F5474;       /* Slate Blue — secondary / structural */
  --teal:#2D9C91;        /* Signal Teal — accent / verification */
  --white:#FEFEFE;       /* Porcelain White — base */
  --navy-950:#0D1938;
  --navy-900:#0F1E44;

  /* ---- Neutral scale (derived from Navy) ---- */
  --n-50:#F2F3F5; --n-100:#E6E8ED; --n-200:#CFD2DB; --n-300:#ABB1C1;
  --n-400:#8991A8; --n-500:#65708D; --n-600:#414F73;

  /* ---- Functional / status colors (tints derived from Porcelain White #FEFEFE) ---- */
  --pass:#1E9E6B;      --pass-bg:#E3F2EC;   --pass-text:#177750;
  --fail:#D0342C;      --fail-bg:#F8E6E5;   --fail-text:#9C2721;
  --pending:#C97A1A;   --pending-bg:#F8EEE3;--pending-text:#975C14;
  --info:#1F5474;      --info-bg:#E3EAED;   --info-text:#173F57;

  /* ---- Typography ---- */
  --font-head:'Urbanist',sans-serif;
  --font-body:'DM Sans',sans-serif;
  --font-mono:'JetBrains Mono',monospace;

  --fs-display:84px; --lh-display:84px; --ls-display:-0.02em;
  --fs-h1:46px; --lh-h1:50px; --ls-h1:-0.02em;
  --fs-h2:32px; --lh-h2:38px; --ls-h2:-0.015em;
  --fs-h3:24px; --lh-h3:30px; --ls-h3:-0.01em;
  --fs-h4:18px; --lh-h4:24px; --ls-h4:-0.005em;
  --fs-body-lg:16px; --lh-body-lg:25px;
  --fs-body:14px; --lh-body:22px;
  --fs-body-sm:12.5px; --lh-body-sm:19px;
  --fs-caption:11.5px; --lh-caption:16px;
  --fs-overline:10.5px; --lh-overline:14px; --ls-overline:0.16em;
  --fs-mono:12.5px; --lh-mono:19px;

  --page-pad-x:64px;
}

*{box-sizing:border-box; margin:0; padding:0;}
html,body{background:#5b6270;}
body{font-family:var(--font-body); -webkit-font-smoothing:antialiased;}
.deck{display:flex; flex-direction:column; align-items:center; gap:28px; padding:28px 0 60px;}

.slide{
  width:1280px; height:720px; position:relative; overflow:hidden;
  background:var(--white); color:var(--navy);
  box-shadow:0 18px 50px rgba(6,12,30,.35);
  font-family:var(--font-body);
}

/* ---------- shared chrome for content slides ---------- */
.chrome-top{
  position:absolute; top:0; left:0; right:0; height:56px;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 var(--page-pad-x);
  border-bottom:1px solid var(--n-100);
}
.chrome-top .kicker{
  font-family:var(--font-mono); font-size:var(--fs-overline); letter-spacing:var(--ls-overline);
  text-transform:uppercase; color:var(--n-500);
}
.chrome-top .kicker b{color:var(--navy); font-weight:600;}
.chrome-top .page-idx{
  font-family:var(--font-mono); font-size:var(--fs-overline); letter-spacing:.06em; color:var(--n-500);
}
.chrome-bottom{
  position:absolute; bottom:0; left:0; right:0; height:34px;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 var(--page-pad-x);
  border-top:1px solid var(--n-100);
}
.chrome-bottom .mark-mini{width:16px; height:16px;}
.chrome-bottom .foot-label{
  font-family:var(--font-mono); font-size:9.5px; letter-spacing:.1em; color:var(--n-400); text-transform:uppercase;
}
.content-area{ position:absolute; top:56px; left:0; right:0; bottom:34px; padding:30px var(--page-pad-x) 26px; }

/* ---------- type helpers ---------- */
.ov{font-family:var(--font-mono); font-size:var(--fs-overline); letter-spacing:var(--ls-overline); text-transform:uppercase; color:var(--teal); font-weight:500;}
.ov.on-dark{color:#7FD9CC;}
h1.slide-title{font-family:var(--font-head); font-weight:800; font-size:var(--fs-h1); line-height:var(--lh-h1); letter-spacing:var(--ls-h1); color:var(--navy); margin-top:6px;}
h1.slide-title.on-dark{color:var(--white);}
.slide-sub{font-family:var(--font-body); font-size:var(--fs-body-lg); line-height:var(--lh-body-lg); color:var(--n-600); max-width:760px; margin-top:10px;}
.slide-sub.on-dark{color:#B7C3DA;}
h2.h2{font-family:var(--font-head); font-weight:700; font-size:var(--fs-h2); line-height:var(--lh-h2); letter-spacing:var(--ls-h2); color:var(--navy);}
h3.h3{font-family:var(--font-head); font-weight:700; font-size:var(--fs-h3); line-height:var(--lh-h3); color:var(--navy);}
h4.h4{font-family:var(--font-head); font-weight:600; font-size:var(--fs-h4); line-height:var(--lh-h4); color:var(--navy);}
p.body{font-size:var(--fs-body); line-height:var(--lh-body); color:var(--n-600);}
p.body-sm{font-size:var(--fs-body-sm); line-height:var(--lh-body-sm); color:var(--n-500);}
.mono{font-family:var(--font-mono);}
.caption{font-size:var(--fs-caption); line-height:var(--lh-caption); color:var(--n-500);}

/* ---------- utility ---------- */
.row{display:flex;} .col{display:flex; flex-direction:column;}
.gap-4{gap:4px;} .gap-5{gap:5px;} .gap-6{gap:6px;} .gap-7{gap:7px;} .gap-8{gap:8px;} .gap-9{gap:9px;} .gap-10{gap:10px;} .gap-12{gap:12px;} .gap-14{gap:14px;} .gap-16{gap:16px;} .gap-20{gap:20px;} .gap-24{gap:24px;} .gap-32{gap:32px;} .gap-40{gap:40px;}
.grow{flex:1;}
.card{background:var(--white); border:1px solid var(--n-100); border-radius:10px;}
.pill{display:inline-flex; align-items:center; gap:6px; padding:4px 11px; border-radius:100px; font-family:var(--font-mono); font-size:11px; font-weight:500; letter-spacing:.02em;}
.pill.pass{background:var(--pass-bg); color:var(--pass-text);}
.pill.fail{background:var(--fail-bg); color:var(--fail-text);}
.pill.pending{background:var(--pending-bg); color:var(--pending-text);}
.pill.info{background:var(--info-bg); color:var(--info-text);}
.pill .dot{width:6px; height:6px; border-radius:50%; background:currentColor;}

/* ---------- swatch ---------- */
.swatch{border-radius:12px; overflow:hidden; border:1px solid var(--n-100);}
.swatch .chip{height:78px;}
.swatch .meta{padding:12px 14px; background:var(--white);}
.swatch .meta .name{font-family:var(--font-head); font-weight:700; font-size:14px; color:var(--navy);}
.swatch .meta .role{font-family:var(--font-mono); font-size:9.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--n-500); margin-bottom:6px;}
.swatch .meta table{width:100%; border-collapse:collapse; margin-top:6px;}
.swatch .meta table td{font-family:var(--font-mono); font-size:10px; color:var(--n-600); padding:1.5px 0;}
.swatch .meta table td.k{color:var(--n-400); width:44px;}

/* ---------- diamond bg motif ---------- */
.motif-diamond-field{position:absolute; inset:0; opacity:.05; background-image:
  repeating-linear-gradient(45deg, var(--white) 0 2px, transparent 2px 46px),
  repeating-linear-gradient(-45deg, var(--white) 0 2px, transparent 2px 46px);}
.motif-grid-navy{position:absolute; inset:0; opacity:.04; background-image:
  repeating-linear-gradient(0deg, var(--navy) 0 1px, transparent 1px 40px),
  repeating-linear-gradient(90deg, var(--navy) 0 1px, transparent 1px 40px);}

/* ---------- do/dont demo tile ---------- */
.dd-tile{border-radius:10px; overflow:hidden; border:1px solid var(--n-100); background:var(--n-50);}
.dd-tile .stage{height:158px; display:flex; align-items:center; justify-content:center; position:relative; background:var(--white);}
.dd-tile .mk{width:78px; height:78px;}
.dd-tile .label{display:flex; align-items:center; gap:6px; padding:8px 10px; background:var(--white); border-top:1px solid var(--n-100);}
.dd-tile .label .x{color:var(--fail); font-size:12px;}
.dd-tile .label span.t{font-size:10.8px; color:var(--n-600); line-height:14px; font-weight:500;}

/* print */
@media print{
  html,body{background:#fff;}
  .deck{gap:0; padding:0;}
  .slide{box-shadow:none; page-break-after:always; margin:0;}
  @page{ size: 1280px 720px; margin:0; }
}
`;
module.exports = { css };
