const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = path.resolve(__dirname, '../..');
const fontworkDir = __dirname;
const logoDir = path.join(projectDir, 'brand-assets', '01-logo');
const pngDir = path.join(logoDir, 'png');
const pdfDir = path.join(logoDir, 'pdf');

// Browser executable
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browserExe = fs.existsSync(edgePath) ? edgePath : chromePath;
console.log('Using browser:', browserExe);

const colors = ['full', 'navy', 'black', 'reversed-white'];

// 1. Build SVGs
console.log('--- Building Lockup SVGs ---');
require('./build_lockup_svgs');

// 2. Generate PNG pages
console.log('--- Generating PNG staging pages ---');
require('./gen_png_pages');

// 3. Generate PDF pages
console.log('--- Generating PDF staging pages ---');
require('./gen_pdf_pages');

// 4. Capture @3x PNG screenshots and PDF printouts
const target3xWidth = 720;
const svgFull = fs.readFileSync(path.join(logoDir, 'svg', 'wcs_horizontal_full.svg'), 'utf8');
const vbMatch = svgFull.match(/viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/);
const vbW = parseFloat(vbMatch[3]), vbH = parseFloat(vbMatch[4]);
const aspect = vbW / vbH;
const target3xHeight = Math.round(target3xWidth / aspect);

console.log(`Target dimensions for horizontal @3x PNG: ${target3xWidth} x ${target3xHeight}`);

const tempProfileDir = path.join(fontworkDir, '.tmp_profile');
if (!fs.existsSync(tempProfileDir)) fs.mkdirSync(tempProfileDir, { recursive: true });

for (const color of colors) {
  const pageHtml = path.join(fontworkDir, `_page_horizontal_${color}.html`);
  const pageUrl = `file:///${pageHtml.replace(/\\/g, '/')}`;
  const out3x = path.join(pngDir, `wcs_horizontal_${color}@3x.png`);
  
  console.log(`Exporting @3x PNG: wcs_horizontal_${color}@3x.png`);
  const cmdScreenshot = `"${browserExe}" --headless --disable-gpu --user-data-dir="${tempProfileDir}_${color}" --window-size=${target3xWidth},${target3xHeight} --default-background-color=00000000 --screenshot="${out3x}" --virtual-time-budget=3000 "${pageUrl}"`;
  execSync(cmdScreenshot, { stdio: 'inherit' });

  // Export PDF
  const pdfHtml = path.join(fontworkDir, `_pdf_horizontal_${color}.html`);
  const pdfUrl = `file:///${pdfHtml.replace(/\\/g, '/')}`;
  const outPdf = path.join(pdfDir, `wcs_horizontal_${color}.pdf`);
  console.log(`Exporting PDF: wcs_horizontal_${color}.pdf`);
  const cmdPdf = `"${browserExe}" --headless --disable-gpu --user-data-dir="${tempProfileDir}_pdf_${color}" --no-pdf-header-footer --print-to-pdf="${outPdf}" --virtual-time-budget=3000 "${pdfUrl}"`;
  execSync(cmdPdf, { stdio: 'inherit' });
}

// 5. Downsample @3x to @2x and @1x using PowerShell System.Drawing (HighQualityBicubic)
console.log('--- Downsampling @3x to @2x and @1x ---');
execSync(`powershell -ExecutionPolicy Bypass -File "${path.join(fontworkDir, 'downsample_horizontal.ps1')}"`, { stdio: 'inherit' });

console.log('--- All horizontal assets exported successfully! ---');
