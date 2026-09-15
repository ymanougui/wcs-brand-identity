const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../../brand-assets/01-logo/svg');
const outDir = __dirname;
const MASTER_SIZE = 1024; // known-reliable render size

for (const color of ['full', 'navy', 'black', 'reversed-white']) {
  const svgPath = path.join(svgDir, `wcs_icon_${color}.svg`);
  let svg = fs.readFileSync(svgPath, 'utf8').replace(/<\?xml[^>]*\?>/, '');
  svg = svg.replace(/(<svg[^>]*?)\swidth="[\d.]+"\s+height="[\d.]+"/, '$1 width="100%" height="100%"');
  const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
  let hiddenDefs = '';
  if (defsMatch) {
    hiddenDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${defsMatch[1]}</defs></svg>`;
    svg = svg.replace(/<defs>[\s\S]*?<\/defs>/, '');
  }
  const bg = color === 'reversed-white' ? '#122350' : 'transparent';
  const html = `<!doctype html><html><head><style>html,body{margin:0;width:100%;height:100%;background:${bg};}</style></head><body>${hiddenDefs}<div style="width:100%;height:100%;">${svg}</div></body></html>`;
  fs.writeFileSync(path.join(outDir, `_master_icon_${color}.html`), html);
}
console.log('wrote 4 master pages at', MASTER_SIZE);
