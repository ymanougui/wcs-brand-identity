const { logoMark } = require('./build');

const TOTAL_PAGES = 26;

function chrome(idx, section, title, opts = {}) {
  const dark = opts.dark ? ' on-dark' : '';
  return `
  <div class="chrome-top"${opts.dark ? ' style="border-bottom-color:rgba(255,255,255,.12)"' : ''}>
    <div class="kicker"${opts.dark ? ' style="color:#8592AD"' : ''}><b${opts.dark ? ' style="color:#fff"' : ''}>WECHINASOURCING</b> &nbsp;/&nbsp; ${section}</div>
    <div class="page-idx"${opts.dark ? ' style="color:#8592AD"' : ''}>${String(idx).padStart(2, '0')} / ${TOTAL_PAGES}</div>
  </div>
  <div class="content-area">
    <div class="ov${dark}">${section}</div>
    <h1 class="slide-title${dark}">${title}</h1>
    ${opts.sub ? `<div class="slide-sub${dark}">${opts.sub}</div>` : ''}
    <div class="slide-body" style="margin-top:${opts.bodyMt || 22}px;">
    ${opts.body}
    </div>
  </div>
  <div class="chrome-bottom"${opts.dark ? ' style="border-top-color:rgba(255,255,255,.12)"' : ''}>
    <div class="row gap-8" style="align-items:center;">
      <div class="mark-mini">${logoMark(opts.dark ? 'white' : 'navy')}</div>
      <div class="foot-label"${opts.dark ? ' style="color:#8592AD"' : ''}>Brand Identity &amp; Visual Style Guidelines</div>
    </div>
    <div class="foot-label"${opts.dark ? ' style="color:#8592AD"' : ''}>v1.1 &middot; 2026</div>
  </div>`;
}

function slideWrap(id, cls, inner) {
  return `<section class="slide ${cls || ''}" id="slide-${id}">${inner}</section>`;
}

function circularStamp(idSuffix, size, opts = {}) {
  const r = 92;
  const cx = 100, cy = 100;
  const color = opts.color || 'var(--navy)';
  const text = opts.text || 'FACTORY VERIFIED   •   WECHINASOURCING   •  ';
  return `
  <svg viewBox="0 0 200 200" width="${size}" height="${size}">
    <defs><path id="circlePath-${idSuffix}" d="M ${cx - r},${cy} a ${r},${r} 0 1,1 ${2 * r},0 a ${r},${r} 0 1,1 -${2 * r},0" /></defs>
    <circle cx="${cx}" cy="${cy}" r="${r + 8}" fill="none" stroke="${color}" stroke-width="1" stroke-dasharray="2 3" opacity=".5"/>
    <circle cx="${cx}" cy="${cy}" r="${r - 10}" fill="none" stroke="${color}" stroke-width="1.5"/>
    <text font-family="JetBrains Mono" font-size="9.6" font-weight="600" letter-spacing="1.5" fill="${color}">
      <textPath href="#circlePath-${idSuffix}" startOffset="0%">${text}</textPath>
    </text>
    <g transform="translate(72,72) scale(0.055)">${logoMark(opts.mark || 'navy').replace(/<svg[^>]*>|<\/svg>/g, '')}</g>
  </svg>`;
}

module.exports = { logoMark, chrome, slideWrap, circularStamp, TOTAL_PAGES };
