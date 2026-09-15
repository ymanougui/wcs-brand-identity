const fs = require('fs');
const path = require('path');

// Chromium's print-to-pdf pagination is unreliable across a large multi-page
// flex stack with page-break-after (confirmed: dropped a page on the 26-slide
// deck, produced phantom blank pages on the 3-page audit report template).
// Reliable pattern used throughout this build: isolate each unit into its own
// single-page document, print each separately, then merge with pdf-lib.

const projectDir = 'C:\\Users\\manou\\Downloads\\wechinasourcing visual identity\\New try';
const srcPath = path.join(projectDir, 'WeChinaSourcing-Brand-Guidelines.html');
const outDir = __dirname;

const html = fs.readFileSync(srcPath, 'utf8');
const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!headMatch || !styleMatch) throw new Error('Could not locate head/style block');
const head = headMatch[1];

const slideRe = /<section class="slide [\s\S]*?<\/section>/g;
const slides = html.match(slideRe);
if (!slides || slides.length !== 26) throw new Error('Expected 26 slides, found ' + (slides ? slides.length : 0));

slides.forEach((slideHtml, i) => {
  const doc = `<!doctype html><html lang="en"><head>${head}</head><body><div class="deck" style="padding:0;gap:0;">${slideHtml}</div></body></html>`;
  fs.writeFileSync(path.join(outDir, `_deck_slide_${String(i + 1).padStart(2, '0')}.html`), doc);
});
console.log('wrote', slides.length, 'isolated slide HTML files');
