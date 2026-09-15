const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../../brand-assets/01-logo/svg');
const outDir = __dirname;

const compositions = ['icon', 'horizontal', 'stacked'];
const colors = ['full', 'navy', 'black', 'reversed-white'];
const PDF_SCALE = 0.35; // scales viewBox units down to a sensible print-pt canvas

for (const comp of compositions) {
  for (const color of colors) {
    const svgPath = path.join(svgDir, `wcs_${comp}_${color}.svg`);
    let svg = fs.readFileSync(svgPath, 'utf8').replace(/<\?xml[^>]*\?>/, '');
    svg = svg.replace(/(<svg[^>]*?)\swidth="[\d.]+"\s+height="[\d.]+"/, '$1 width="100%" height="100%"');
    const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
    let hiddenDefs = '';
    if (defsMatch) {
      hiddenDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${defsMatch[1]}</defs></svg>`;
      svg = svg.replace(/<defs>[\s\S]*?<\/defs>/, '');
    }
    const vbMatch = svg.match(/viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/);
    const vbW = parseFloat(vbMatch[3]), vbH = parseFloat(vbMatch[4]);
    const pageW = Math.round(vbW * PDF_SCALE);
    const pageH = Math.round(vbH * PDF_SCALE);
    const bg = color === 'reversed-white' ? '#122350' : 'transparent';
    const html = `<!doctype html><html><head><style>
      @page { size: ${pageW}px ${pageH}px; margin: 0; }
      html, body { margin: 0; padding: 0; width: ${pageW}px; height: ${pageH}px; overflow: hidden; background: ${bg}; }
      *, *::before, *::after { box-sizing: border-box; }
      </style></head><body>${hiddenDefs}<div style="width:${pageW}px;height:${pageH}px;overflow:hidden;position:absolute;top:0;left:0;">${svg}</div></body></html>`;
    fs.writeFileSync(path.join(outDir, `_pdf_${comp}_${color}.html`), html);
  }
}
console.log('wrote 12 PDF staging pages');
