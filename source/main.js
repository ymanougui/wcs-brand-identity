const fs = require('fs');
const path = require('path');
const { logoDefsBlock, projectDir } = require('./build');
const { css } = require('./css');
const { slide1, slide2, slide3 } = require('./content');
const { slide4, slide5, slide6, slide7, slide8 } = require('./content_logo');
const { slide9, slide10 } = require('./content_color');
const { slide11, slide12 } = require('./content_type');
const { slide13, slide14 } = require('./content_icons_photo');
const { slide15, slide16, slide17 } = require('./content_digital');
const { slide18, slide19 } = require('./content_dataviz_physical');
const { slide20, slide21, slide22 } = require('./content_voice');
const { slide23, slide24 } = require('./content_gov');
const { slide25, slide26 } = require('./content_close');

const allSlides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10,
  slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20,
  slide21, slide22, slide23, slide24, slide25, slide26,
];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>WeChinaSourcing — Brand Identity &amp; Visual Style Guidelines</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${css}</style>
</head>
<body>
${logoDefsBlock()}
<div class="deck">
${allSlides.join('\n')}
</div>
</body>
</html>`;

const outPath = path.join(projectDir, 'WeChinaSourcing-Brand-Guidelines.html');
fs.writeFileSync(outPath, html);
console.log('Written', outPath, html.length, 'bytes,', allSlides.length, 'slides');
