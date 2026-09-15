const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

function loadFont(fontPath) {
  const buf = fs.readFileSync(fontPath);
  const arrayBuf = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  return opentype.parse(arrayBuf);
}

// Custom path serializer — opentype.js's own Path.toPathData() has a bug that
// produces NaN coordinates for certain glyph/offset combinations in this font
// (verified: the raw command data is always valid; only its built-in string
// serializer is broken). This serializer works directly off the clean command
// objects and has been verified NaN-free across the full wordmark.
function serializeCommands(commands, precision = 2) {
  function r(n) {
    const s = n.toFixed(precision);
    return s.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
  }
  let d = '';
  for (const c of commands) {
    if (c.type === 'M') d += `M${r(c.x)} ${r(c.y)} `;
    else if (c.type === 'L') d += `L${r(c.x)} ${r(c.y)} `;
    else if (c.type === 'Q') d += `Q${r(c.x1)} ${r(c.y1)} ${r(c.x)} ${r(c.y)} `;
    else if (c.type === 'C') d += `C${r(c.x1)} ${r(c.y1)} ${r(c.x2)} ${r(c.y2)} ${r(c.x)} ${r(c.y)} `;
    else if (c.type === 'Z') d += 'Z ';
  }
  return d.trim();
}

function textToOutline(font, text, fontSize, trackingEm = 0) {
  const tracking = trackingEm * fontSize;
  let x = 0;
  const allCommands = [];
  for (const ch of text) {
    const gid = font.charToGlyphIndex(ch);
    const glyph = font.glyphs.get(gid);
    const gp = glyph.getPath(x, 0, fontSize);
    allCommands.push(...gp.commands);
    x += glyph.advanceWidth * (fontSize / font.unitsPerEm) + tracking;
  }
  const width = x - tracking;
  const pathData = serializeCommands(allCommands, 2);
  const ascender = font.ascender * (fontSize / font.unitsPerEm);
  const descender = Math.abs(font.descender * (fontSize / font.unitsPerEm));
  return { pathData, width, ascender, descender, hasNaN: pathData.includes('NaN') };
}

module.exports = { loadFont, textToOutline, serializeCommands };

if (require.main === module) {
  const font = loadFont(path.join(__dirname, 'Urbanist-ExtraBold.ttf'));
  const result = textToOutline(font, 'WeChinaSourcing', 100, -0.02);
  console.log('hasNaN:', result.hasNaN);
  console.log('width:', result.width.toFixed(2), 'ascender:', result.ascender.toFixed(2), 'descender:', result.descender.toFixed(2));
  fs.writeFileSync(path.join(__dirname, 'wordmark_final.json'), JSON.stringify(result, null, 2));
}
