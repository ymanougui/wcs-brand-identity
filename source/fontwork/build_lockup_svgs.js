const fs = require('fs');
const path = require('path');
const { loadFont, textToOutline } = require('./wordmark');

const projectDir = path.resolve(__dirname, '../..');
const svgSrc = fs.readFileSync(path.join(projectDir, 'logo.svg'), 'utf8');
const outDir = path.join(projectDir, 'brand-assets', '01-logo', 'svg');

// ---- parse icon ink/cutout paths (same technique as build.js) ----
const pathRe = /<path fill="(#[0-9A-Fa-f]{6})" d="([^"]+)"\/>/g;
let m; const inkPaths = []; const cutPaths = []; let first = true;
while ((m = pathRe.exec(svgSrc))) {
  const fill = m[1], d = m[2];
  if (first) { first = false; continue; }
  if (fill === '#FEFEFE') cutPaths.push(d); else inkPaths.push({ fill, d });
}

const VARIANTS = {
  full: {},
  navy: { '#2D9C91': '#122350', '#1F5474': '#122350', '#122350': '#122350' },
  black: { '#2D9C91': '#000000', '#1F5474': '#000000', '#122350': '#000000' },
  'reversed-white': { '#2D9C91': '#FEFEFE', '#1F5474': '#FEFEFE', '#122350': '#FEFEFE' },
};

// ---- wordmark outline (font-size 100 basis) ----
const font = loadFont(path.join(__dirname, 'Urbanist-ExtraBold.ttf'));
const wm = textToOutline(font, 'WeChinaSourcing', 100, -0.02);
if (wm.hasNaN) throw new Error('Wordmark path contains NaN — aborting.');

// cap-height (visual top of uppercase letters): ~71.5% of fontSize for Urbanist
const capHeight = 71.5;

function iconGroup(idSuffix, map) {
  let s = `<mask id="wcs-cut-${idSuffix}" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="1024"><rect width="1024" height="1024" fill="#fff"/>`;
  for (const d of cutPaths) s += `<path fill="#000" d="${d}"/>`;
  s += '</mask>';
  let g = `<g mask="url(#wcs-cut-${idSuffix})">`;
  for (const { fill, d } of inkPaths) g += `<path fill="${map[fill] || fill}" d="${d}"/>`;
  g += '</g>';
  return { defs: s, group: g };
}

function buildHorizontal(colorKey, map) {
  const iconSize = capHeight * 1.55; // icon slightly taller than cap-height, matches deck proportions
  const gap = capHeight * 0.42;
  const wmColor = colorKey === 'reversed-white' ? '#FEFEFE' : (colorKey === 'navy' ? '#122350' : colorKey === 'black' ? '#000000' : '#122350');
  const iconScale = iconSize / 1024;
  
  // Vertically align icon center with the cap-height center of the wordmark (y = -capHeight / 2)
  const iconCenterY = -capHeight / 2;
  const iconY = iconCenterY - iconSize / 2;
  
  const { defs, group } = iconGroup('h-' + colorKey, map);
  const totalWidth = iconSize + gap + wm.width;
  
  // Visual top and bottom bounds of artwork
  const top = Math.min(iconY, -75);
  const bottom = Math.max(iconY + iconSize, 25);
  const height = bottom - top;
  const pad = height * 0.08;
  const vbW = totalWidth + pad * 2, vbH = height + pad * 2;
  const vb = `${-pad} ${top - pad} ${vbW} ${vbH}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${Math.round(vbW)}" height="${Math.round(vbH)}">
  <title>WeChinaSourcing — Primary Horizontal Lockup (${colorKey})</title>
  <defs>${defs}</defs>
  <g transform="translate(0,${iconY}) scale(${iconScale})">${group}</g>
  <path d="${wm.pathData}" fill="${wmColor}" transform="translate(${iconSize + gap},0)"/>
</svg>
`;
}

function buildStacked(colorKey, map) {
  const wmScale = 0.62; // stacked wordmark set smaller relative to horizontal
  const iconSize = capHeight * 2.05;
  const gap = capHeight * 0.5;
  const wmColor = colorKey === 'reversed-white' ? '#FEFEFE' : (colorKey === 'navy' ? '#122350' : colorKey === 'black' ? '#000000' : '#122350');
  const iconScale = iconSize / 1024;
  const scaledWmWidth = wm.width * wmScale;
  const scaledAscender = wm.ascender * wmScale;
  const scaledDescender = wm.descender * wmScale;
  const { defs, group } = iconGroup('s-' + colorKey, map);

  const iconTop = 0;
  const iconBottom = iconSize;
  const textTop = iconBottom + gap - scaledAscender;
  const textBaseline = iconBottom + gap;
  const textBottom = textBaseline + scaledDescender;

  const contentWidth = Math.max(iconSize, scaledWmWidth);
  const iconX = (contentWidth - iconSize) / 2;
  const textX = (contentWidth - scaledWmWidth) / 2;

  const pad = contentWidth * 0.06;
  const totalHeight = textBottom - iconTop;
  const vbW = contentWidth + pad * 2, vbH = totalHeight + pad * 2;
  const vb = `${-pad} ${iconTop - pad} ${vbW} ${vbH}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${Math.round(vbW)}" height="${Math.round(vbH)}">
  <title>WeChinaSourcing — Stacked Lockup (${colorKey})</title>
  <defs>${defs}</defs>
  <g transform="translate(${iconX},${iconTop}) scale(${iconScale})">${group}</g>
  <path d="${wm.pathData}" fill="${wmColor}" transform="translate(${textX},${textBaseline}) scale(${wmScale})"/>
</svg>
`;
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let count = 0;
for (const [colorKey, map] of Object.entries(VARIANTS)) {
  const hSvg = buildHorizontal(colorKey, map);
  const sSvg = buildStacked(colorKey, map);
  fs.writeFileSync(path.join(outDir, `wcs_horizontal_${colorKey}.svg`), hSvg);
  fs.writeFileSync(path.join(outDir, `wcs_stacked_${colorKey}.svg`), sSvg);
  count += 2;
}
console.log('wrote', count, 'SVG files to', outDir);
