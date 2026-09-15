const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const projectDir = path.resolve(__dirname, '../..');
const logoDir = path.join(projectDir, 'brand-assets', '01-logo');
const svgDir = path.join(logoDir, 'svg');
const pngDir = path.join(logoDir, 'png');
const pdfDir = path.join(logoDir, 'pdf');

function getPngSize(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  return { width, height, size: buf.length };
}

async function verifyAll() {
  console.log('====================================================');
  console.log('VERIFYING HORIZONTAL ASSETS');
  console.log('====================================================');
  
  const colors = ['full', 'navy', 'black', 'reversed-white'];
  const densities = ['1x', '2x', '3x'];
  let allValid = true;

  // 1. SVGs
  console.log('\n--- 1. SVG Master Files ---');
  for (const c of colors) {
    const f = `wcs_horizontal_${c}.svg`;
    const fullPath = path.join(svgDir, f);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ MISSING: ${f}`);
      allValid = false;
      continue;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    const vb = content.match(/viewBox="([^"]+)"/);
    const hasNaN = content.includes('NaN');
    const hasCorrectTransform = content.includes('transform="translate(0,-91.1625)');
    console.log(`✅ ${f} | size: ${content.length} B | viewBox: ${vb ? vb[1] : 'none'} | NaN-free: ${!hasNaN} | Correct Align: ${hasCorrectTransform}`);
    if (hasNaN || !hasCorrectTransform) allValid = false;
  }

  // 2. PNGs
  console.log('\n--- 2. PNG Raster Exports ---');
  for (const c of colors) {
    for (const d of densities) {
      const f = `wcs_horizontal_${c}@${d}.png`;
      const fullPath = path.join(pngDir, f);
      if (!fs.existsSync(fullPath)) {
        console.error(`❌ MISSING: ${f}`);
        allValid = false;
        continue;
      }
      const info = getPngSize(fullPath);
      console.log(`✅ ${f} | dimensions: ${info.width} x ${info.height} | bytes: ${info.size}`);
      if (info.size < 1000) {
        console.error(`⚠️ File unusually small: ${f}`);
        allValid = false;
      }
    }
  }

  // 3. PDFs
  console.log('\n--- 3. Vector PDF Exports ---');
  for (const c of colors) {
    const f = `wcs_horizontal_${c}.pdf`;
    const fullPath = path.join(pdfDir, f);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ MISSING: ${f}`);
      allValid = false;
      continue;
    }
    const bytes = fs.readFileSync(fullPath);
    const doc = await PDFDocument.load(bytes);
    const pageCount = doc.getPageCount();
    const page = doc.getPage(0);
    const { width, height } = page.getSize();
    console.log(`✅ ${f} | pages: ${pageCount} | size: ${Math.round(width)} x ${Math.round(height)} pt | bytes: ${bytes.length}`);
    if (pageCount !== 1) {
      console.error(`❌ Expected 1 page in ${f}, got ${pageCount}`);
      allValid = false;
    }
  }

  console.log('\n====================================================');
  if (allValid) {
    console.log('🎉 ALL 20 HORIZONTAL ASSETS ARE 100% VERIFIED AND VALID!');
  } else {
    console.error('❌ SOME ASSETS FAILED VERIFICATION.');
  }
  console.log('====================================================');
}

verifyAll();
