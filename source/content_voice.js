const { chrome, slideWrap } = require('./shared');

/* ============================================================ SLIDE 19 — VOICE: PILLARS & LANGUAGE RULES */
const msgPillars = ['Physical Verification', 'Traceability', 'Named Accountability', 'Global-Standard Compliance'];
const termPairs = [
  ['Factory audit', 'Check-up / visit'],
  ['Non-conformance', 'Issue / problem'],
  ['Inspector of record', 'Our agent / our guy'],
  ['Supplier', 'Vendor'],
  ['Scheduled re-inspection', 'We\'ll take another look'],
];

const slide20 = slideWrap(20, '', chrome(20, 'Voice &amp; Messaging', 'Pillars &amp; Language Rules', {
  bodyMt: 12,
  body: `
  <div class="row gap-40">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Message Pillars</h4>
      <div class="row gap-8" style="flex-wrap:wrap; margin-bottom:14px;">
        ${msgPillars.map(p => `<span class="pill info" style="font-size:10.5px;">${p}</span>`).join('')}
      </div>
      <h4 class="h4" style="margin-bottom:8px;">Headline Formulas</h4>
      <div class="col gap-8">
        <div class="card" style="padding:9px 13px;">
          <div class="mono" style="font-size:10px;color:var(--n-500);">[VERIFIED FACT] + [WHAT IT MEANS FOR THE BUYER]</div>
          <div style="font-size:12px;color:var(--navy);font-weight:600;margin-top:4px;">"Every factory physically audited — before you ever place an order."</div>
        </div>
        <div class="card" style="padding:9px 13px;">
          <div class="mono" style="font-size:10px;color:var(--n-500);">[EVIDENCE], [DATED / NAMED ATTRIBUTION]</div>
          <div style="font-size:12px;color:var(--navy);font-weight:600;margin-top:4px;">"14 of 14 sample units passed dimensional tolerance — inspected 2026-03-03, report FA-2026-0417."</div>
        </div>
      </div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Claim Substantiation</h4>
      <div class="body-sm">Any absolute word — <i>always, 100%, guaranteed, best, only</i> — requires a citable source, a date, or a named report attached at point of use. If none exists, rewrite as a scoped, precise claim (e.g. "100% verified" → "every listed factory receives an on-site visit before publication").</div>
      <h4 class="h4" style="margin:14px 0 8px;">Numbers, Units &amp; Dates</h4>
      <div class="body-sm">Dates: ISO 8601 (2026-08-15) in data/UI; "15 August 2026" in prose — never MM/DD, which is ambiguous outside the US. Units: metric first, imperial in parentheses for US buyers. Currency: always ISO code (USD 12,400 — never a bare "$"). Percentages: one decimal maximum.</div>
      <h4 class="h4" style="margin:14px 0 8px;">Terminology</h4>
      <div class="col gap-4">
        ${termPairs.map(([use, avoid]) => `<div class="row" style="font-size:11px;"><span style="color:var(--pass-text);width:150px;"><i class="fa-solid fa-check" style="font-size:9px;"></i> ${use}</span><span style="color:var(--n-400);">not "${avoid}"</span></div>`).join('')}
      </div>
    </div>
  </div>
  `
}));

/* ============================================================ SLIDE 20 — VOICE: CHANNEL EXAMPLES */
const voiceRows = [
  ['Audit &amp; Inspection Reports', 'Precise, evidentiary', '"14 of 14 sample units passed dimensional tolerance ±0.2mm."', '"The factory looks great and quality seems excellent."'],
  ['Sales &amp; Buyer Outreach', 'Authoritative, consultative', '"We inspected this factory in March — here is exactly what we found."', '"Amazing supplier, don\'t miss out, act now!"'],
  ['Website &amp; Product Copy', 'Modern industrial, confident', '"Every listed factory is physically audited before it reaches you."', '"We\'re basically your best friend in China."'],
  ['Customer Support', 'Transparent, calm authority', '"Here\'s the discrepancy we found and the two ways to resolve it."', '"Don\'t worry about it, it\'s probably fine."'],
  ['Social / LinkedIn', 'High-trust, human', '"Meet the inspector behind report FA-2026-0417."', 'Stock-photo handshake clichés with no attribution.'],
];

const slide21 = slideWrap(21, '', chrome(21, 'Voice &amp; Messaging', 'Channel Examples', {
  bodyMt: 16,
  body: `
  <div class="row" style="padding:7px 0; border-bottom:2px solid var(--navy);">
    <div class="caption" style="width:220px;text-transform:uppercase;">Channel</div>
    <div class="caption" style="width:190px;text-transform:uppercase;">Voice Emphasis</div>
    <div class="caption" style="flex:1;text-transform:uppercase;color:var(--pass-text);">Do</div>
    <div class="caption" style="flex:1;text-transform:uppercase;color:var(--fail-text);">Don&rsquo;t</div>
  </div>
  ${voiceRows.map(([ch, em, d, dn]) => `
  <div class="row" style="padding:12px 0; border-bottom:1px solid var(--n-100); align-items:flex-start;">
    <div style="width:220px;font-family:var(--font-head);font-weight:700;font-size:12.5px;color:var(--navy);">${ch}</div>
    <div class="body-sm" style="width:190px;">${em}</div>
    <div class="body-sm" style="flex:1;padding-right:14px;"><i class="fa-solid fa-check" style="color:var(--pass); margin-right:6px;"></i>${d}</div>
    <div class="body-sm" style="flex:1;"><i class="fa-solid fa-xmark" style="color:var(--fail); margin-right:6px;"></i>${dn}</div>
  </div>`).join('')}
  <div class="card" style="margin-top:16px; padding:12px 18px;">
    <div class="body-sm"><b style="color:var(--navy);">House rule:</b> if a sentence can't be traced to a report, a spec, or a named person, rewrite it. Confidence comes from evidence, not adjectives.</div>
  </div>
  `
}));

/* ============================================================ SLIDE 21 — VOICE: ENGLISH/CHINESE LOCALISATION */
const slide22 = slideWrap(22, '', chrome(22, 'Voice &amp; Messaging', 'English / Chinese Localisation Principles', {
  sub: 'Simplified Chinese copy is transcreated for business register and cultural context — never a literal, word-for-word translation of English marketing lines.',
  bodyMt: 12,
  body: `
  <div class="row gap-40">
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Register &amp; Structure</h4>
      <div class="body-sm">Chinese B2B correspondence typically opens more formally and relationship-first before moving to specifics — don't force the English "hook-first" pattern. Keep sentences shorter; Chinese business readers expect density without padding. Match the SAME evidentiary substance in both languages even where phrasing diverges — the report number, the date, and the inspector's name travel unchanged.</div>
      <h4 class="h4" style="margin:14px 0 8px;">Formatting Differences</h4>
      <div class="body-sm">Dates in Chinese-facing material: 2026年8月15日 (year-month-day, with characters) rather than the ISO hyphen form. Full-width punctuation （，。） in Chinese running text; half-width for embedded Latin codes and numerals (HS codes, batch IDs stay in Latin/ASCII form).</div>
    </div>
    <div class="col grow">
      <h4 class="h4" style="margin-bottom:9px;">Cultural Awareness</h4>
      <div class="body-sm">Red and green carry opposite meaning in Chinese equities (red = gain) versus Western finance (red = loss) — never reuse chart color logic across audiences without labels (see p.18). QC pass/fail (green/red) is globally standardized and safe. Avoid prominent stand-alone "4" in numbered lists or pricing tiers where a natural alternative exists; no meaning is implied by "8."</div>
      <h4 class="h4" style="margin:14px 0 8px;">Process</h4>
      <div class="body-sm">Every piece of Chinese-facing copy: (1) drafted with business context, not machine-translated from the English final; (2) reviewed by a native, business-fluent speaker with sourcing/trade experience; (3) approved via the same governance workflow as English copy (p.23) before publication.</div>
    </div>
  </div>
  `
}));

module.exports = { slide20, slide21, slide22 };
