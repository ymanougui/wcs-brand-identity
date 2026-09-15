const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function mergePdfs(inputPaths, outputPath) {
  const merged = await PDFDocument.create();
  for (const p of inputPaths) {
    const bytes = fs.readFileSync(p);
    const src = await PDFDocument.load(bytes);
    const pages = await merged.copyPages(src, src.getPageIndices());
    pages.forEach((pg) => merged.addPage(pg));
  }
  const outBytes = await merged.save();
  fs.writeFileSync(outputPath, outBytes);
  console.log('merged', inputPaths.length, 'files ->', outputPath, `(${merged.getPageCount()} pages)`);
}

const [, , outputPath, ...inputPaths] = process.argv;
if (!outputPath || inputPaths.length === 0) {
  console.error('usage: node merge_pdfs.js <output.pdf> <input1.pdf> <input2.pdf> ...');
  process.exit(1);
}
mergePdfs(inputPaths, outputPath).catch((e) => { console.error(e); process.exit(1); });
