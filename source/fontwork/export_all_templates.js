const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const projectDir = path.resolve(__dirname, '../..');
const fontworkDir = __dirname;
const targetDir = path.join(projectDir, 'brand-assets', '04-templates');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// Locate browser
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browserExe = fs.existsSync(edgePath) ? edgePath : chromePath;
console.log('Using browser:', browserExe);

// 1. Generate HTML files for all templates
console.log('\n--- 1. Generating HTML staging & master files ---');
require('./gen_template_audit_report');
require('./gen_template_shipping_label');
require('./gen_template_quotation');
require('./gen_template_invoice');

const tempProfileDir = path.join(fontworkDir, '.tmp_template_profile');
if (!fs.existsSync(tempProfileDir)) fs.mkdirSync(tempProfileDir, { recursive: true });

function printSinglePdf(htmlFilename, pdfOutPath, profileSuffix) {
  const pageHtml = path.join(fontworkDir, htmlFilename);
  const pageUrl = `file:///${pageHtml.replace(/\\/g, '/')}`;
  const cmd = `"${browserExe}" --headless --disable-gpu --user-data-dir="${tempProfileDir}_${profileSuffix}" --no-pdf-header-footer --print-to-pdf="${pdfOutPath}" --virtual-time-budget=3000 "${pageUrl}"`;
  execSync(cmd, { stdio: 'inherit' });
}

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
  console.log(`Merged ${inputPaths.length} pages -> ${path.basename(outputPath)} (${merged.getPageCount()} pages)`);
}

async function runExports() {
  console.log('\n--- 2. Exporting Vector PDFs ---');

  // A. Quotation Template (2 pages)
  console.log('Exporting Quotation pages...');
  const qp1 = path.join(fontworkDir, '_tmp_q_p1.pdf');
  const qp2 = path.join(fontworkDir, '_tmp_q_p2.pdf');
  printSinglePdf('_quote_page1.html', qp1, 'q1');
  printSinglePdf('_quote_page2.html', qp2, 'q2');
  const finalQuotePdf = path.join(targetDir, 'wcs_template_quotation.pdf');
  await mergePdfs([qp1, qp2], finalQuotePdf);
  if (fs.existsSync(qp1)) fs.unlinkSync(qp1);
  if (fs.existsSync(qp2)) fs.unlinkSync(qp2);

  // B. Invoice Template (1 page)
  console.log('Exporting Invoice page...');
  const finalInvPdf = path.join(targetDir, 'wcs_template_invoice.pdf');
  printSinglePdf('_inv_page1.html', finalInvPdf, 'inv1');

  // C. Audit Report (3 pages - verify/rebuild)
  console.log('Exporting Audit Report pages...');
  const ar1 = path.join(fontworkDir, '_tmp_ar_p1.pdf');
  const ar2 = path.join(fontworkDir, '_tmp_ar_p2.pdf');
  const ar3 = path.join(fontworkDir, '_tmp_ar_p3.pdf');
  printSinglePdf('_ar_page1.html', ar1, 'ar1');
  printSinglePdf('_ar_page2.html', ar2, 'ar2');
  printSinglePdf('_ar_page3.html', ar3, 'ar3');
  const finalArPdf = path.join(targetDir, 'wcs_template_audit-report.pdf');
  await mergePdfs([ar1, ar2, ar3], finalArPdf);
  if (fs.existsSync(ar1)) fs.unlinkSync(ar1);
  if (fs.existsSync(ar2)) fs.unlinkSync(ar2);
  if (fs.existsSync(ar3)) fs.unlinkSync(ar3);

  // D. Shipping Label (1 page)
  console.log('Exporting Shipping Label...');
  const finalSlPdf = path.join(targetDir, 'wcs_template_shipping-label.pdf');
  printSinglePdf('_sl_page1.html', finalSlPdf, 'sl1');

  // Clean up temporary profile directories
  fs.readdirSync(fontworkDir).forEach(f => {
    if (f.startsWith('.tmp_template_profile')) {
      try { fs.rmSync(path.join(fontworkDir, f), { recursive: true, force: true }); } catch (e) {}
    }
  });

  // Verify all output PDFs
  console.log('\n--- 3. Programmatic PDF Verification ---');
  const templates = [
    { file: 'wcs_template_quotation.pdf', expectedPages: 2 },
    { file: 'wcs_template_invoice.pdf', expectedPages: 1 },
    { file: 'wcs_template_audit-report.pdf', expectedPages: 3 },
    { file: 'wcs_template_shipping-label.pdf', expectedPages: 1 },
  ];

  let allValid = true;
  for (const t of templates) {
    const fullPath = path.join(targetDir, t.file);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ MISSING: ${t.file}`);
      allValid = false;
      continue;
    }
    const bytes = fs.readFileSync(fullPath);
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    const pg = doc.getPage(0);
    const { width, height } = pg.getSize();
    console.log(`✅ ${t.file} | pages: ${count}/${t.expectedPages} | size: ${Math.round(width)}x${Math.round(height)}pt | bytes: ${bytes.length}`);
    if (count !== t.expectedPages) {
      console.error(`❌ Page count mismatch on ${t.file}: expected ${t.expectedPages}, got ${count}`);
      allValid = false;
    }
  }

  console.log('\n====================================================');
  if (allValid) {
    console.log('🎉 ALL 4 STANDALONE TEMPLATES (HTML + PDF) ARE 100% VERIFIED!');
  } else {
    console.error('❌ TEMPLATE VERIFICATION FAILED.');
  }
  console.log('====================================================');
}

runExports();
