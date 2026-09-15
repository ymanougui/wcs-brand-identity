const fs = require('fs');
const path = require('path');
const projectDir = 'C:\\Users\\manou\\Downloads\\wechinasourcing visual identity\\New try';
const svgSrc = fs.readFileSync(path.join(projectDir, 'logo.svg'), 'utf8');

// ---- Parse locked logo geometry ----
const pathRe = /<path fill="(#[0-9A-Fa-f]{6})" d="([^"]+)"\/>/g;
let m; const inkPaths = []; const cutPaths = []; let first = true;
while ((m = pathRe.exec(svgSrc))) {
  const fill = m[1], d = m[2];
  if (first) { first = false; continue; }
  if (fill === '#FEFEFE') cutPaths.push(d); else inkPaths.push({ fill, d });
}

function logoDefsBlock() {
  let s = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><mask id="logo-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="1024"><rect width="1024" height="1024" fill="#fff"/>';
  cutPaths.forEach(d => s += `<path fill="#000" d="${d}"/>`);
  s += '</mask></defs></svg>';
  return s;
}

const VARIANT_MAPS = {
  full: {},
  navy: { '#2D9C91': '#122350', '#1F5474': '#122350', '#122350': '#122350' },
  black: { '#2D9C91': '#000000', '#1F5474': '#000000', '#122350': '#000000' },
  white: { '#2D9C91': '#FEFEFE', '#1F5474': '#FEFEFE', '#122350': '#FEFEFE' },
  slate: { '#2D9C91': '#1F5474', '#122350': '#1F5474' },
};

function logoMark(variant = 'full', opts = {}) {
  const map = VARIANT_MAPS[variant] || {};
  let s = `<svg viewBox="0 0 1024 1024" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" class="${opts.cls||''}">`;
  s += '<g mask="url(#logo-cut)">';
  inkPaths.forEach(({ fill, d }) => s += `<path fill="${map[fill] || fill}" d="${d}"/>`);
  s += '</g></svg>';
  return s;
}

console.log('Parsed', inkPaths.length, 'ink paths and', cutPaths.length, 'cutout paths.');
module.exports = { logoDefsBlock, logoMark, projectDir };
