const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../../brand-assets/01-logo/svg');
const outDir = __dirname;

const compositions = ['icon', 'horizontal', 'stacked'];
const colors = ['full', 'navy', 'black', 'reversed-white'];

// @3x target render size (master) per composition — width for horizontal/stacked, square for icon
const target3x = { icon: 192, horizontal: 720, stacked: 540 };

for (const comp of compositions) {
  for (const color of colors) {
    const svgPath = path.join(svgDir, `wcs_${comp}_${color}.svg`);
    let svg = fs.readFileSync(svgPath, 'utf8').replace(/<\?xml[^>]*\?>/, '');
    // The standalone SVG files have hardcoded pixel width/height matching their own
    // viewBox (correct for standalone use). When embedding at a DIFFERENT target
    // render size, those hardcoded attributes must be overridden to 100%/100% so the
    // viewBox scales responsively — otherwise the SVG clips to its native pixel size
    // regardless of the containing page, showing only a corner of the artwork.
    svg = svg.replace(/(<svg[^>]*?)\swidth="[\d.]+"\s+height="[\d.]+"/, '$1 width="100%" height="100%"');
    // Pull the <defs><mask>...</mask></defs> block OUT of the main (percentage-sized)
    // svg into a separate, explicitly-zero-sized hidden sibling svg. Nesting a mask
    // inside a percentage-width/height svg is unreliable in headless Chromium — the
    // mask's absolute userSpaceOnUse region sometimes resolves against a stale/zero
    // viewport, silently breaking the mask. This mirrors the proven-reliable pattern
    // used throughout the rest of this build (see build.js's logoDefsBlock()).
    const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
    let hiddenDefs = '';
    if (defsMatch) {
      hiddenDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${defsMatch[1]}</defs></svg>`;
      svg = svg.replace(/<defs>[\s\S]*?<\/defs>/, '');
    }
    // Extract intrinsic viewBox aspect to size the page height correctly for non-square comps
    const vbMatch = svg.match(/viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/);
    const vbW = parseFloat(vbMatch[3]), vbH = parseFloat(vbMatch[4]);
    const aspect = vbW / vbH;
    const w3 = target3x[comp];
    const h3 = comp === 'icon' ? w3 : Math.round(w3 / aspect);
    const bg = color === 'reversed-white' ? '#122350' : 'transparent';
    const html = `<!doctype html><html><head><style>html,body{margin:0;width:100%;height:100%;background:${bg};}</style></head><body>${hiddenDefs}<div style="width:100%;height:100%;">${svg}</div></body></html>`;
    const fname = `_page_${comp}_${color}.html`;
    fs.writeFileSync(path.join(outDir, fname), html);
    console.log(fname, w3, 'x', h3);
  }
}
