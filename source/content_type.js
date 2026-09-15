const { chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 10 — TYPOGRAPHY: LATIN SYSTEM */
function fontSpecimen(name, role, weights, sample, opts = {}) {
  return `
  <div class="col grow card" style="padding:12px 18px;">
    <div class="caption" style="text-transform:uppercase;letter-spacing:.08em;">${role}</div>
    <div style="font-family:'${name}';font-weight:${opts.dispWeight || 700};font-size:32px;color:var(--navy);line-height:1;margin:6px 0 3px;">${opts.sampleGlyphs || 'Aa'}</div>
    <div style="font-family:'${name}';font-weight:600;font-size:13px;color:var(--navy);margin-bottom:2px;">${name}</div>
    <div class="caption">${weights}</div>
    <div style="font-family:'${name}';font-size:10.5px;color:var(--n-500);margin-top:6px;line-height:15px;">${sample}</div>
  </div>`;
}

const typeScale = [
  ['Display', '84 / 84', '-0.02em', 'Urbanist ExtraBold 800', 'Cover &amp; section dividers only'],
  ['H1', '46 / 50', '-0.02em', 'Urbanist ExtraBold 800', 'Page titles'],
  ['H2', '32 / 38', '-0.015em', 'Urbanist Bold 700', 'Section headings'],
  ['H3', '24 / 30', '-0.01em', 'Urbanist Bold 700', 'Card &amp; module titles'],
  ['H4', '18 / 24', '-0.005em', 'Urbanist SemiBold 600', 'Sub-heads, table group labels'],
  ['Body Large', '16 / 25', '0', 'DM Sans Regular 400', 'Intros, pull statements'],
  ['Body', '14 / 22', '0', 'DM Sans Regular 400', 'Default paragraph &amp; UI text'],
  ['Caption', '11.5 / 16', '0.01em', 'DM Sans Medium 500', 'Meta, footnotes, units'],
  ['Overline', '10.5 / 14', '0.16em', 'JetBrains Mono Medium 500', 'Eyebrows, section kickers, UPPERCASE'],
  ['Data / Mono', '12.5 / 19', '0', 'JetBrains Mono Regular 400', 'HS codes, container #, batch IDs, tabular figures'],
];

const slide11 = slideWrap(11, '', chrome(11, 'Typography', 'Latin Type System', {
  bodyMt: 12,
  body: `
  <div class="row gap-16">
    ${fontSpecimen('Urbanist', 'Heading — Urbanist', '400·500·600·700·800·900 (variable)', 'Geometric, wide x-height, architectural — carries authority at large sizes. SIL OFL · fonts.google.com/specimen/Urbanist')}
    ${fontSpecimen('DM Sans', 'Body — DM Sans', '400·500·700 (variable)', 'A legible workhorse for dense paragraphs and inspection tables at small sizes. SIL OFL · fonts.google.com/specimen/DM+Sans')}
    ${fontSpecimen('JetBrains Mono', 'Data — JetBrains Mono', '400·500·600 (variable)', 'Fixed-width for HS codes, container IDs, batch numbers — nothing ever misaligns. SIL OFL · fonts.google.com/specimen/JetBrains+Mono')}
  </div>
  <div style="margin-top:12px;">
    <div class="row" style="padding:5px 0; border-bottom:2px solid var(--navy);">
      <div class="caption" style="width:120px;text-transform:uppercase;">Style</div>
      <div class="caption" style="width:100px;text-transform:uppercase;">Size/LH</div>
      <div class="caption" style="width:80px;text-transform:uppercase;">Tracking</div>
      <div class="caption" style="width:230px;text-transform:uppercase;">Weight</div>
      <div class="caption" style="flex:1;text-transform:uppercase;">Usage</div>
    </div>
    ${typeScale.map(([n, sz, ls, w, u]) => `
    <div class="row" style="padding:4.5px 0; border-bottom:1px solid var(--n-100); align-items:center;">
      <div style="width:120px;font-family:var(--font-head);font-weight:700;font-size:12px;color:var(--navy);">${n}</div>
      <div class="mono" style="width:100px;font-size:11px;color:var(--n-600);">${sz}</div>
      <div class="mono" style="width:80px;font-size:11px;color:var(--n-600);">${ls}</div>
      <div class="mono" style="width:230px;font-size:11px;color:var(--n-600);">${w}</div>
      <div class="body-sm" style="flex:1;">${u}</div>
    </div>`).join('')}
  </div>
  `
}));

/* ============================================================ SLIDE 11 — CHINESE & MULTILINGUAL SYSTEM */
const slide12 = slideWrap(12, '', chrome(12, 'Typography', 'Chinese &amp; Multilingual System', {
  sub: 'A global-China brand needs first-class Simplified Chinese typography, not a fallback afterthought. Noto Sans SC pairs with the Latin system on weight, license terms, and availability.',
  bodyMt: 12,
  body: `
  <div class="row gap-16">
    <div class="col grow card" style="padding:12px 18px;">
      <div class="caption" style="text-transform:uppercase;letter-spacing:.08em;">Heading — Noto Sans SC</div>
      <div style="font-family:'Noto Sans SC';font-weight:700;font-size:30px;color:var(--navy);line-height:1.3;margin:6px 0 3px;">验证于源头</div>
      <div style="font-family:'Noto Sans SC';font-weight:600;font-size:13px;color:var(--navy);margin-bottom:2px;">Noto Sans SC — Bold 700</div>
      <div class="caption">100–900 variable · SIL OFL 1.1</div>
      <div style="font-size:10.5px;color:var(--n-500);margin-top:6px;line-height:15px;">Pairs with Urbanist ExtraBold at matching cap-height. Illustrative rendering only — not an approved tagline translation; see note below.</div>
    </div>
    <div class="col grow card" style="padding:12px 18px;">
      <div class="caption" style="text-transform:uppercase;letter-spacing:.08em;">Body — Noto Sans SC</div>
      <div style="font-family:'Noto Sans SC';font-weight:400;font-size:15px;color:var(--navy);line-height:1.7;margin:6px 0 3px;">全部工厂在上线前均经过实地审核。</div>
      <div style="font-family:'Noto Sans SC';font-weight:600;font-size:13px;color:var(--navy);margin-bottom:2px;">Noto Sans SC — Regular 400</div>
      <div class="caption">Google Noto Project · fonts.google.com/noto/sans-sc</div>
      <div style="font-size:10.5px;color:var(--n-500);margin-top:6px;line-height:15px;">Pairs with DM Sans Regular. Set 1px larger than the paired Latin size — CJK glyph density needs more optical weight at equal perceived size.</div>
    </div>
    <div class="col grow card" style="padding:12px 18px;">
      <div class="caption" style="text-transform:uppercase;letter-spacing:.08em;">Data — CJK-safe fallback</div>
      <div style="font-family:'JetBrains Mono','Noto Sans SC';font-weight:500;font-size:14px;color:var(--navy);line-height:1.6;margin:6px 0 3px;">HS 8517.62 货柜 TCLU-772154-3</div>
      <div style="font-family:'DM Sans';font-weight:600;font-size:13px;color:var(--navy);margin-bottom:2px;">JetBrains Mono + Noto Sans SC</div>
      <div class="caption">No open CJK monospace at this weight range</div>
      <div style="font-size:10.5px;color:var(--n-500);margin-top:6px;line-height:15px;">True CJK monospace (e.g. Source Han Mono) is heavier than JetBrains Mono's optical weight — mixing looks uneven. Keep numerals/codes in JetBrains Mono, Chinese labels in Noto Sans SC Medium, never force CJK into the mono face.</div>
    </div>
  </div>
  <div class="row gap-40" style="margin-top:16px;">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:8px;">Fallback Stacks</h4>
      <div class="mono card" style="padding:10px 14px; font-size:10.5px; line-height:19px; color:var(--navy);">
        heading: 'Urbanist', 'Noto Sans SC', system-ui, sans-serif;<br/>
        body: 'DM Sans', 'Noto Sans SC', system-ui, sans-serif;<br/>
        data: 'JetBrains Mono', 'Noto Sans SC', monospace;
      </div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:8px;">Pairing Rules</h4>
      <div class="body-sm">Never bold Chinese body text below 16px — strokes clog. Never italicize Chinese (no authentic italic form exists). Line-height for CJK runs 1.6–1.8× vs. 1.4–1.6× for Latin. Mixed EN/ZH strings: keep Latin in the Latin face, don't force one face to render both scripts.</div>
    </div>
  </div>
  <div class="card" style="margin-top:14px; padding:10px 16px; border-color:var(--n-200);">
    <div class="body-sm"><b style="color:var(--navy);">Translation note:</b> Chinese sample copy on this page demonstrates typography only. Per brand voice policy (p.22), no Chinese copy ships to production without professional transcreation and native business-fluent review — literal translation of English taglines is explicitly disallowed.</div>
  </div>
  `
}));

module.exports = { slide11, slide12 };
