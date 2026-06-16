/* ============================================================
   HELLDIVERS DATABASE — APP
   Single-page app. Hash routing (#/route). All content rendered
   from DB (data.js). No build step, no dependencies.
   ------------------------------------------------------------
   v0.2 — every category now uses the shared hover-detail panel
   (formerly weapons-only). Multi-value fields from the wiki
   (e.g. damage_ballistic + damage_explosion, level_8mm /
   level_40mm, "55-70") are auto-detected and shown with their
   original metric labels — nothing is generalised away.
   ============================================================ */

/* ---------- small helpers ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

/* ---------- armor level: TEXT tiers <-> numeric (for Compare engine) ---------- */
const LEVEL_TO_PEN = { light: 2, medium: 4, heavy: 6, "anti-tank i": 7, "anti-tank ii": 8 };
function levelToPen(level) {
  if (typeof level === "number") return level;
  const key = String(level).toLowerCase();
  if (LEVEL_TO_PEN[key] != null) return LEVEL_TO_PEN[key];
  if (key.includes("anti-tank") || key.includes("anti tank")) return 7;
  return 0;
}

/* ---------- multi-value field helpers ----------
   The wiki gives some weapons more than one of a stat — e.g. a round
   that does ballistic AND explosion damage, or two penetration tiers.
   In data.js these are stored as suffixed keys: damage_ballistic,
   damage_explosion, level_8mm, level_40mm, dps_slow, dps_fast, etc.
   These helpers find every variant of a base field and render the
   ORIGINAL metric (including ranges like "55-70") rather than
   collapsing them into a single number. */

/* Suffixes that exist ONLY to distinguish duplicate stats (size/speed tiers).
   These carry no real metric meaning, so their label is hidden and the values
   are just joined with dots:  dps_small/medium/large -> "300 · 889 · 900". */
const SIZE_SUFFIXES = new Set([
  "small", "medium", "large",
  "slow", "fast",
  "min", "max",
  "short", "long",
  "close", "far"
]);

function isSizeSuffix(suffix) {
  return SIZE_SUFFIXES.has(suffix.toLowerCase());
}

/* a real metric label (ballistic, explosion, 8mm, laser…) shown AFTER the
   number: "100 Ballistic", "250 8mm". mm units stay lowercase; words get
   title-cased; "dps" -> "DPS". */
function prettySuffix(suffix) {
  if (/^\d+mm$/i.test(suffix)) return suffix.toLowerCase();   // 8mm, 40mm, 12mm
  return suffix
    .replace(/_/g, " ")
    .replace(/\bdps\b/i, "DPS")
    .replace(/\b\w/g, c => c.toUpperCase());
}

/* base value + all suffixed variants of `base` present on obj.
   `label` is the display label (empty for the base value and for size tiers);
   `isSize` flags tiers that should render as a bare number. */
function variantFields(obj, base) {
  const out = [];
  if (obj[base] != null) out.push({ label: "", value: obj[base], isSize: false });
  Object.keys(obj).forEach(k => {
    if (k.startsWith(base + "_")) {
      const raw = k.slice(base.length + 1);
      const size = isSizeSuffix(raw);
      out.push({ label: size ? "" : prettySuffix(raw), value: obj[k], isSize: size });
    }
  });
  return out;
}

/* render every variant of a base field as ONE display string.
   number first, metric label to its right:  "100 Ballistic" / "76 rpm".
   size tiers show the number only:           "300 · 889 · 900". */
function showField(obj, base, suffix = "") {
  const vs = variantFields(obj, base);
  if (!vs.length) return "—";
  return vs.map(v => {
    const val = (v.value === "" || v.value == null) ? "—" : v.value + suffix;
    return v.label ? `${val} ${v.label}` : `${val}`;
  }).join(" · ");
}

function hasField(obj, base) { return variantFields(obj, base).length > 0; }

/* map a level word to its badge color class.
   Anti-Tank (I/II/…) sits above Heavy and gets its own tier. */
function levelClass(value) {
  const key = String(value).toLowerCase();
  if (key.includes("anti-tank") || key.includes("anti tank")) return "pen-at";
  if (key === "heavy")  return "pen-hi";
  if (key === "medium") return "pen-mid";
  return "pen-lo";
}

/* level badge(s): a weapon can carry level_8mm / level_40mm etc.
   The tier word is the value; any descriptive suffix (8mm, 40mm) is shown to
   its side. Size-only suffixes are hidden (the badge color already differs). */
function levelBadges(obj) {
  const vs = variantFields(obj, "level");
  if (!vs.length) return "";
  return vs.map(v => {
    const cls = levelClass(v.value);
    const txt = v.label ? `${v.value} ${v.label}` : v.value;
    return `<span class="pen ${cls}" title="Armor penetration tier">${esc(txt)}</span>`;
  }).join(" ");
}

/* card art: real image if provided, else inline SVG initials placeholder.
   `contain` = true for icon/figure-style art (armor, stratagems, enemies,
   missions, boosters) so it fits inside the box instead of being cropped.
   Weapons use the default (cover) since their renders are landscape.
   If a real image fails to load (wrong path / not added yet), it falls back
   to the initials placeholder instead of leaving a blank box. */
function initialsSvg(label) {
  const initials = esc(label).split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
  return `<svg viewBox="0 0 100 100" class="ph-art" role="img" aria-label="${esc(label)} placeholder">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a2230"/><stop offset="1" stop-color="#0c1118"/>
    </linearGradient></defs>
    <rect width="100" height="100" fill="url(#g)"/>
    <path d="M50 14 L84 32 L84 68 L50 86 L16 68 L16 32 Z" fill="none" stroke="#d4af37" stroke-opacity=".35" stroke-width="1.5"/>
    <text x="50" y="50" text-anchor="middle" dominant-baseline="central"
      font-family="IBM Plex Mono, monospace" font-size="22" font-weight="700"
      fill="#d4af37" fill-opacity=".75">${initials}</text>
  </svg>`;
}
function placeholderArt(label, image, contain) {
  if (image) {
    const cls = contain ? "ph-art ph-contain" : "ph-art";
    // onerror: if the file is missing/broken, swap in the initials placeholder
    return `<img class="${cls}" src="${esc(image)}" alt="${esc(label)}" data-label="${esc(label)}" onerror="artFallback(this)">`;
  }
  return initialsSvg(label);
}
/* called when a card image 404s — replace the broken <img> with the
   matching initials placeholder so the slot is never left blank */
function artFallback(img) {
  img.onerror = null;
  const label = img.getAttribute("data-label") || img.alt || "";
  img.outerHTML = initialsSvg(label);
}

/* SIDEBAR */
function buildSidebar() {
  const sidebar = $("#sidebar");
  sidebar.innerHTML = `
    <a href="#/home" data-route="home">Home</a>

    <div class="dropdown" data-dd="stratagems">
      <button class="dropbtn" onclick="toggleDropdown('stratagems')">Stratagems <span class="arrow">▼</span></button>
      <div class="dropdown-content" id="stratagems">
        <a href="#/support-weapons" data-route="support-weapons">Support Weapons</a>
        <a href="#/orbital-strikes" data-route="orbital-strikes">Orbital Strikes</a>
        <a href="#/emplacements" data-route="emplacements">Emplacements</a>
      </div>
    </div>

    <a href="#/enemies" data-route="enemies">Enemies</a>
    <a href="#/missions" data-route="missions">Missions</a>

    <div class="dropdown" data-dd="equipment">
      <button class="dropbtn" onclick="toggleDropdown('equipment')">Equipment <span class="arrow">▼</span></button>
      <div class="dropdown-content" id="equipment">
        <a href="#/weapons" data-route="weapons">Weapons</a>
        <a href="#/armor" data-route="armor">Armor</a>
        <a href="#/boosters" data-route="boosters">Boosters</a>
      </div>
    </div>

    <a href="#/compare" data-route="compare" class="nav-compare">⚔ Compare</a>
  `;
  restoreDropdowns();
}

function toggleDropdown(id) {
  const el = document.getElementById(id).parentElement;
  let open = JSON.parse(localStorage.getItem("openDropdowns")) || [];
  if (el.classList.contains("open")) { el.classList.remove("open"); open = open.filter(i => i !== id); }
  else { el.classList.add("open"); open.push(id); }
  localStorage.setItem("openDropdowns", JSON.stringify(open));
}
function restoreDropdowns() {
  const open = JSON.parse(localStorage.getItem("openDropdowns")) || [];
  open.forEach(id => { const e = document.getElementById(id); if (e) e.parentElement.classList.add("open"); });
}

function toggleSidebar() {
  const wrapper = $("#sidebarWrapper");
  wrapper.classList.toggle("collapsed");
  document.body.classList.toggle("sidebar-collapsed");
  localStorage.setItem("sidebarCollapsed", wrapper.classList.contains("collapsed"));
}

/* SHARED UI PIECES */
function pageHeader(title, subtitle) {
  return `<header class="page-head">
    <h1>${esc(title)}</h1>
    ${subtitle ? `<p class="page-sub">${esc(subtitle)}</p>` : ""}
  </header>`;
}
function statRow(label, value) {
  return `<div class="stat"><span class="stat-k">${esc(label)}</span><span class="stat-v">${esc(value)}</span></div>`;
}
/* like statRow but the value is trusted HTML (e.g. colored badges) */
function statRowHTML(label, valueHTML) {
  return `<div class="stat"><span class="stat-k">${esc(label)}</span><span class="stat-v">${valueHTML}</span></div>`;
}
function penBadge(p) {
  if (p == null) return "";
  const lvl = p >= 5 ? "hi" : p >= 3 ? "mid" : "lo";
  return `<span class="pen pen-${lvl}" title="Armor penetration ${p}/6">PEN ${p}</span>`;
}
function levelBadge(level) {
  if (level == null) return "";
  return `<span class="pen ${levelClass(level)}" title="Armor penetration tier">${esc(level)}</span>`;
}
function threatBadge(threat) {
  if (!threat) return "";
  return `<span class="threat threat-${String(threat).toLowerCase()}">${esc(threat)}</span>`;
}
/* difficulty badge: colored chip for a difficulty level (1–10).
   Shows the level number and, if known, its name (e.g. "1 · Trivial"). */
function diffBadge(level) {
  if (level == null) return "";
  const d = (typeof DB !== "undefined" && DB.difficulties)
    ? DB.difficulties.find(x => x.level === level) : null;
  const txt = d ? `${level} · ${d.name}` : `${level}`;
  return `<span class="diff diff-${level}" title="Difficulty ${level}">${esc(txt)}</span>`;
}
function tagRow(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tags">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
}
function emptyState(msg) { return `<div class="empty">${esc(msg)}</div>`; }

/* ============================================================
   GENERIC HOVER-DETAIL PANEL  (shared by every card type)
   ============================================================ */
const POP = {};
function registerPop(kind, arr, content) { POP[kind] = { find: id => arr.find(x => x.id === id), content }; }

function popShell(name, badges, sub, desc, statRows, extra = "", image = "", contain = false) {
  return `
    <div class="pop-art">${placeholderArt(name, image, contain)}</div>
    <div class="pop-body">
      <h3 class="pop-name">${esc(name)} ${badges || ""}</h3>
      ${sub ? `<p class="pop-type">${sub}</p>` : ""}
      ${desc ? `<p class="pop-desc">${esc(desc)}</p>` : ""}
      <div class="pop-detail-title">Stats</div>
      <div class="stats">${statRows}</div>
      ${extra}
    </div>`;
}

function setupPopover() {
  let pop = document.getElementById("detailPopover");
  if (!pop) { pop = el("div", "weapon-popover"); pop.id = "detailPopover"; document.body.appendChild(pop); }
  let activeCard = null;

  const place = (card) => {
    const reg = POP[card.dataset.popKind];
    if (!reg) return;
    const rec = reg.find(card.dataset.popId);
    if (!rec) return;
    pop.innerHTML = reg.content(rec);

    const r = card.getBoundingClientRect();
    const gap = 14;
    const popW = pop.offsetWidth || 320;
    const popH = pop.offsetHeight || 360;
    let left = r.right + gap;
    if (left + popW > window.innerWidth - 8) left = r.left - gap - popW;
    if (left < 8) left = 8;
    let top = r.top - 24;
    const margin = 12;
    top = Math.max(margin, Math.min(top, window.innerHeight - popH - margin));
    pop.style.left = left + "px";
    pop.style.top = top + "px";
    pop.classList.add("show");
  };
  const show = (c) => { activeCard = c; place(c); };
  const hide = (c) => { if (activeCard === c) { activeCard = null; pop.classList.remove("show"); } };

  const view = $("#view");
  view.addEventListener("mouseover", e => { const c = e.target.closest(".card-pop"); if (c) show(c); });
  view.addEventListener("mouseout",  e => { const c = e.target.closest(".card-pop"); if (c && !c.contains(e.relatedTarget)) hide(c); });
  view.addEventListener("focusin",   e => { const c = e.target.closest(".card-pop"); if (c) show(c); });
  view.addEventListener("focusout",  e => { const c = e.target.closest(".card-pop"); if (c) hide(c); });
  document.addEventListener("click", e => {
    if (!window.matchMedia("(hover: none)").matches) return;
    const c = e.target.closest(".card-pop");
    if (!c) { activeCard = null; pop.classList.remove("show"); return; }
    if (activeCard === c) hide(c); else show(c);
  });
  window.addEventListener("scroll", () => { if (activeCard) place(activeCard); }, true);
}

/* ---------- WEAPONS ---------- */
function weaponCard(w) {
  return `<article class="card card-weapon card-pop" tabindex="0" data-pop-kind="weapons" data-pop-id="${esc(w.id)}">
    <div class="card-art">${placeholderArt(w.name, w.image)}</div>
    <div class="card-body">
      <h4>${esc(w.name)} ${levelBadges(w)}</h4>
      <p class="card-type">${esc(w.type)}</p>
      <p class="card-desc">${esc(w.desc)}</p>
      ${tagRow(w.tags)}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function weaponPopover(w) {
  const rows = [];
  rows.push(statRow("Damage", showField(w, "damage")));
  if (hasField(w, "fireRate")) rows.push(statRow("Fire Rate", showField(w, "fireRate", " rpm")));
  if (hasField(w, "dps"))      rows.push(statRow("DPS", showField(w, "dps")));
  rows.push(statRow("Capacity", showField(w, "capacity")));
  if (hasField(w, "mags"))   rows.push(statRow("Mags", showField(w, "mags")));
  if (hasField(w, "shells")) rows.push(statRow("Spare Shells", showField(w, "shells")));
  if (hasField(w, "rounds")) rows.push(statRow("Spare Rounds", showField(w, "rounds")));
  rows.push(statRow("Ergonomics", showField(w, "ergonomics")));
  rows.push(statRow("Recoil", showField(w, "recoil")));
  rows.push(statRow("Unlock", w.unlock));
  rows.push(statRow("Cost", w.unlockCost ? w.unlockCost + (w.unlockUnit ? " " + w.unlockUnit : "") : "Free"));
  return popShell(w.name, levelBadges(w), `${esc(w.slot)} · ${esc(w.type)}`, w.desc, rows.join(""), "", w.image);
}

/* ---------- SUPPORT WEAPONS ---------- */
function supportCard(w) {
  return `<article class="card card-pop" tabindex="0" data-pop-kind="supportWeapons" data-pop-id="${esc(w.id)}">
    <div class="card-art">${placeholderArt(w.name, w.image, true)}</div>
    <div class="card-body">
      <h4>${esc(w.name)} ${penBadge(w.penetration)}</h4>
      <p class="card-type">${esc(w.permit)} permit</p>
      <p class="card-desc">${esc(w.desc)}</p>
      ${tagRow(w.traits)}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function supportPopover(w) {
  const rows = [
    statRow("Stratagem Code", w.code || "—"),
    statRow("Base Cooldown", w.cooldown != null ? w.cooldown + "s" : "—"),
    statRow("Unlock", w.unlock),
    statRow("Unlock Level", w.unlockLevel != null ? w.unlockLevel : "—"),
    statRow("Unlock Cost", w.unlockCost ? w.unlockCost + (w.unlockUnit ? " " + w.unlockUnit : "") : "Free"),
    statRow("Damage", showField(w, "damage")),
    statRow("Fire Rate", w.fireRate ? w.fireRate + " rpm" : "—"),
    statRow("Recoil", w.recoil),
    statRow("Ergonomics", w.ergonomics),
    statRow("Capacity", w.capacity),
    statRow("Mags", w.mags),
  ];
  return popShell(w.name, penBadge(w.penetration), `${esc(w.permit)} · Support Weapon`, w.desc, rows.join(""), "", w.image, true);
}

/* ---------- ORBITAL STRIKES (Orbital + Eagle combined) ---------- */
function orbitalCard(o) {
  return `<article class="card card-pop" tabindex="0" data-pop-kind="orbitalStrikes" data-pop-id="${esc(o.id)}">
    <div class="card-art">${placeholderArt(o.name, o.image, true)}</div>
    <div class="card-body">
      <h4>${esc(o.name)} ${penBadge(o.penetration)}</h4>
      <p class="card-type">${esc(o.permit)} permit</p>
      <p class="card-desc">${esc(o.desc)}</p>
      ${tagRow(o.traits)}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function orbitalPopover(o) {
  const rows = [
    statRow("Stratagem Code", o.code || "—"),
    statRow("Base Cooldown", o.cooldown != null ? o.cooldown + "s" : "—"),
    statRow("Unlock", o.unlock),
    statRow("Unlock Level", o.unlockLevel != null ? o.unlockLevel : "—"),
    statRow("Unlock Cost", o.unlockCost ? o.unlockCost + (o.unlockUnit ? " " + o.unlockUnit : "") : "Free"),
    statRow("Bombs", o.bombs != null ? o.bombs : "—"),
    statRow("Salvos", o.salvos != null ? o.salvos : "—"),
    statRow("Damage", showField(o, "damage")),
  ];
  if (o.uses != null) rows.push(statRow("Uses", o.uses));
  return popShell(o.name, penBadge(o.penetration), `${esc(o.permit)} · Stratagem`, o.desc, rows.join(""), "", o.image, true);
}

/* ---------- EMPLACEMENTS ---------- */
function emplacementCard(e) {
  return `<article class="card card-pop" tabindex="0" data-pop-kind="emplacements" data-pop-id="${esc(e.id)}">
    <div class="card-art">${placeholderArt(e.name, e.image, true)}</div>
    <div class="card-body">
      <h4>${esc(e.name)} ${penBadge(e.penetration)}</h4>
      <p class="card-type">${esc(e.permit)} permit</p>
      <p class="card-desc">${esc(e.desc)}</p>
      ${tagRow(e.traits)}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function emplacementPopover(e) {
  const rows = [
    statRow("Stratagem Code", e.code || "—"),
    statRow("Base Cooldown", e.cooldown != null ? e.cooldown + "s" : "—"),
    statRow("Unlock", e.unlock),
    statRow("Unlock Level", e.unlockLevel != null ? e.unlockLevel : "—"),
    statRow("Unlock Cost", e.unlockCost ? e.unlockCost + (e.unlockUnit ? " " + e.unlockUnit : "") : "Free"),
    statRow("Damage", showField(e, "damage")),
    statRow("Armor Penetration", e.penetration != null ? e.penetration + "/6" : "—"),
    statRow("Fire Rate", (e.fireRate != null && e.fireRate !== "—") ? e.fireRate + " rpm" : "—"),
    statRow("Capacity", e.capacity),
    statRow("Ergonomics", e.ergonomics),
  ];
  return popShell(e.name, penBadge(e.penetration), `${esc(e.permit)} · Emplacement`, e.desc, rows.join(""), "", e.image, true);
}

/* ---------- ARMOR (Armor / Helmet / Cape · Light/Medium/Heavy) ---------- */
function armorCard(a) {
  const cls = (a.class && a.class !== "—")
    ? `<span class="pen ${levelClass(a.class)}">${esc(a.class)}</span>` : "";
  return `<article class="card card-pop" tabindex="0" data-pop-kind="armor" data-pop-id="${esc(a.id)}">
    <div class="card-art">${placeholderArt(a.name, a.image, true)}</div>
    <div class="card-body">
      <h4>${esc(a.name)} ${cls}</h4>
      <p class="card-type">${esc(a.unit)}${(a.class && a.class !== "—") ? " · " + esc(a.class) : ""}</p>
      <p class="card-desc">${esc(a.desc)}</p>
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function armorPopover(a) {
  const rows = [
    statRow("Armor", a.armorRating),
    statRow("Speed", a.speed),
    statRow("Stamina", a.stamina),
    statRow("Passive", a.passive),
    statRow("Unlock", a.unlock),
    statRow("Cost", a.unlockCost ? a.unlockCost + (a.unlockUnit ? " " + a.unlockUnit : "") : "Free"),
  ];
  const cls = (a.class && a.class !== "—") ? levelBadge(a.class) : "";
  return popShell(a.name, cls, `${esc(a.unit)}${(a.class && a.class !== "—") ? " · " + esc(a.class) : ""}`, a.desc, rows.join(""), "", a.image, true);
}

/* ---------- BOOSTERS ---------- */
function boosterCard(b) {
  return `<article class="card card-pop" tabindex="0" data-pop-kind="boosters" data-pop-id="${esc(b.id)}">
    <div class="card-art">${placeholderArt(b.name, b.image, true)}</div>
    <div class="card-body">
      <h4>${esc(b.name)}</h4>
      <p class="card-desc">${esc(b.desc)}</p>
      ${tagRow(b.tags)}
      <span class="card-hint">Hover for details</span>
    </div>
  </article>`;
}
function boosterPopover(b) {
  const rows = [
    statRow("Unlock", b.unlock),
    statRow("Cost", b.unlockCost ? b.unlockCost + (b.unlockUnit ? " " + b.unlockUnit : "") : "Free"),
  ];
  return popShell(b.name, "", "Booster", b.detail || b.desc, rows.join(""), "", b.image, true);
}

/* ---------- ENEMIES (faction → strain) ---------- */
function enemyCard(en) {
  const parts = en.parts || [];
  const hasParts = parts.length > 0;
  const minArmor = hasParts ? Math.min(...parts.map(p => p.armor)) : 0;
  const maxArmor = hasParts ? Math.max(...parts.map(p => p.armor)) : 0;
  return `<article class="card card-enemy card-pop" tabindex="0" data-pop-kind="enemies" data-pop-id="${esc(en.id)}">
    <div class="card-art">${placeholderArt(en.name, en.image, true)}</div>
    <div class="card-body">
      <h4>${esc(en.name)} ${threatBadge(en.threat)}</h4>
      <p class="card-type">${esc(en.faction)}${(en.strain && en.strain !== en.faction) ? " · " + esc(en.strain) : ""}</p>
      <p class="card-desc">${esc(en.desc)}</p>
      ${hasParts ? `<div class="armor-bar" title="Armor range across body parts">
        <span class="stat-k">Armor</span>
        <span class="armor-pips">${pips(minArmor, maxArmor)}</span>
      </div>` : ""}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function enemyPopover(en) {
  const rows = [
    statRowHTML("Min Difficulty", en.minDifficulty != null ? diffBadge(en.minDifficulty) : "—"),
    statRow("Size Class", en.sizeClass || "—"),
    statRow("Health", en.health != null ? en.health : "—"),
    statRow("Damage", hasField(en, "damage") ? showField(en, "damage") : "—"),
  ];
  if (en.damageType) rows.push(statRow("Damage Type", en.damageType));
  const list = en.parts || [];
  const parts = list.length
    ? `<div class="pop-detail-title">Body parts</div><ul class="parts">${list.map(p =>
        `<li class="${p.weak?'is-weak':''}">${esc(p.name)} <em>A${p.armor}${p.weak?' · weak point':''}</em></li>`).join("")}</ul>`
    : "";
  return popShell(en.name, threatBadge(en.threat),
    `${esc(en.faction)}${(en.strain && en.strain !== en.faction) ? " · " + esc(en.strain) : ""}`,
    en.desc, rows.join(""), parts, en.image, true);
}
function pips(min, max) {
  let out = "";
  for (let i = 1; i <= 6; i++) out += `<i class="pip${(i>=min&&i<=max)?' on':''}"></i>`;
  return out;
}

/* ---------- MISSIONS ---------- */
function missionCard(m) {
  const diffRow = (m.minDifficulty != null || m.maxDifficulty != null)
    ? `<div class="card-diffs">${diffBadge(m.minDifficulty)}${
        (m.maxDifficulty != null && m.maxDifficulty !== m.minDifficulty) ? diffBadge(m.maxDifficulty) : ""}</div>`
    : "";
  return `<article class="card card-pop" tabindex="0" data-pop-kind="missions" data-pop-id="${esc(m.id)}">
    <div class="card-art">${placeholderArt(m.name, m.image, true)}</div>
    <div class="card-body">
      <h4>${esc(m.name)}</h4>
      <p class="card-type">${esc(m.faction === "All" ? "All factions" : m.faction)}</p>
      <p class="card-desc">${esc(m.desc)}</p>
      ${diffRow}
      <span class="card-hint">Hover for full stats</span>
    </div>
  </article>`;
}
function missionPopover(m) {
  const rows = [
    statRowHTML("Min Difficulty", m.minDifficulty != null ? diffBadge(m.minDifficulty) : "—"),
    statRowHTML("Max Difficulty", m.maxDifficulty != null ? diffBadge(m.maxDifficulty) : "—"),
    statRow("Time Limit", m.timeLimit || "—"),
  ];
  return popShell(m.name, "", `${esc(m.category)}${(m.faction && m.faction !== "All") ? " · " + esc(m.faction) : ""}`,
    m.detail || m.desc, rows.join(""), "", m.image, true);
}

function registerAllPopovers() {
  registerPop("weapons",        DB.weapons,        weaponPopover);
  registerPop("supportWeapons", DB.supportWeapons, supportPopover);
  registerPop("orbitalStrikes", DB.orbitalStrikes, orbitalPopover);
  registerPop("emplacements",   DB.emplacements,   emplacementPopover);
  registerPop("armor",          DB.armor,          armorPopover);
  registerPop("boosters",       DB.boosters,       boosterPopover);
  registerPop("enemies",        DB.enemies,        enemyPopover);
  registerPop("missions",       DB.missions,       missionPopover);
}

/* ============================================================
   PAGES
   ============================================================ */

/* single-level tab + search list page */
function listPage({ title, subtitle, items, render, tabKey, allLabel = "All", search = true }) {
  const view = $("#view");
  view.innerHTML = pageHeader(title, subtitle);

  const tabs = tabKey ? [allLabel, ...Array.from(new Set(items.map(i => i[tabKey])))] : [];
  let activeTab = allLabel, query = "";

  const grid = el("div", "card-grid");
  const draw = () => {
    let list = items;
    if (tabKey && activeTab !== allLabel) list = list.filter(i => i[tabKey] === activeTab);
    if (query) list = list.filter(i => JSON.stringify(i).toLowerCase().includes(query));
    grid.innerHTML = list.length ? list.map(render).join("") : emptyState("No matches. Adjust your filters, Helldiver.");
  };

  const bar = el("div", "toolbar");
  if (tabs.length) {
    const tabWrap = el("div", "tab-row");
    tabs.forEach(t => {
      const b = el("button", "type-btn" + (t === activeTab ? " active" : ""), esc(t));
      b.addEventListener("click", () => { activeTab = t; tabWrap.querySelectorAll(".type-btn").forEach(x => x.classList.remove("active")); b.classList.add("active"); draw(); });
      tabWrap.appendChild(b);
    });
    bar.appendChild(tabWrap);
  }
  if (search) {
    const s = el("div", "search-inline");
    s.innerHTML = `<input type="text" placeholder="Filter…">`;
    s.querySelector("input").addEventListener("input", e => { query = e.target.value.toLowerCase(); draw(); });
    bar.appendChild(s);
  }
  view.appendChild(bar);
  view.appendChild(grid);
  draw();
}

/* two-level page: top slot row → sub type row (Weapons, Armor, Enemies) */
function twoLevelPage({ title, subtitle, items, render, topKey, subKey, topOrder, subDefault = "All", searchPlaceholder = "Filter…" }) {
  const view = $("#view");
  view.innerHTML = pageHeader(title, subtitle);

  const tops = topOrder || Array.from(new Set(items.map(i => i[topKey])));
  let activeTop = tops[0], activeSub = subDefault, query = "";

  const slotRow = el("div", "tab-row tab-row-slot");
  const subRow  = el("div", "tab-row");
  const grid    = el("div", "card-grid");

  const drawSubs = () => {
    subRow.innerHTML = "";
    let subs = Array.from(new Set(items.filter(i => i[topKey] === activeTop).map(i => i[subKey])))
                    .filter(s => s != null && s !== "—");
    subs.sort((a, b) => (a === activeTop ? -1 : b === activeTop ? 1 : 0));
    const tabs = subs.length > 1 ? [subDefault, ...subs] : (subs.length ? [subDefault, ...subs] : [subDefault]);
    tabs.forEach(t => {
      const b = el("button", "type-btn" + (t === activeSub ? " active" : ""), esc(t));
      b.addEventListener("click", () => { activeSub = t; drawSubs(); drawGrid(); });
      subRow.appendChild(b);
    });
  };
  const drawGrid = () => {
    let list = items.filter(i => i[topKey] === activeTop);
    if (activeSub !== subDefault) list = list.filter(i => i[subKey] === activeSub);
    if (query) list = list.filter(i => JSON.stringify(i).toLowerCase().includes(query));
    grid.innerHTML = list.length ? list.map(render).join("") : emptyState("No matches for these filters, Helldiver.");
  };

  tops.forEach(s => {
    const b = el("button", "slot-btn" + (s === activeTop ? " active" : ""), esc(s));
    b.addEventListener("click", () => {
      slotRow.querySelectorAll(".slot-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      activeTop = s; activeSub = subDefault; drawSubs(); drawGrid();
    });
    slotRow.appendChild(b);
  });

  const searchBox = el("div", "search-inline");
  searchBox.innerHTML = `<input type="text" placeholder="${esc(searchPlaceholder)}">`;
  searchBox.querySelector("input").addEventListener("input", e => { query = e.target.value.toLowerCase(); drawGrid(); });

  view.appendChild(slotRow);
  view.appendChild(searchBox);
  view.appendChild(subRow);
  view.appendChild(grid);
  drawSubs();
  drawGrid();
}

function weaponsPage() {
  twoLevelPage({
    title: "Weapons",
    subtitle: "Primary, secondary and throwable loadout options.",
    items: DB.weapons, render: weaponCard,
    topKey: "slot", subKey: "type",
    topOrder: ["Primary", "Secondary", "Throwable"],
    searchPlaceholder: "Filter weapons…",
  });
}
function armorPage() {
  twoLevelPage({
    title: "Armor",
    subtitle: "Pick a slot, then a weight class.",
    items: DB.armor, render: armorCard,
    topKey: "unit", subKey: "class",
    topOrder: ["Armor", "Helmet", "Cape"],
    searchPlaceholder: "Filter armor…",
  });
}
function enemiesPage() {
  twoLevelPage({
    title: "Enemies",
    subtitle: "Pick a faction, then a strain.",
    items: DB.enemies, render: enemyCard,
    topKey: "faction", subKey: "strain",
    topOrder: ["Terminids", "Automatons", "Illuminate"],
    searchPlaceholder: "Filter enemies…",
  });
}

/* COMPARE / COUNTER ENGINE
   ------------------------------------------------------------
   The old scorer keyed off `item.damage` (a number) + a flat weak-point
   bonus, but almost no item stores plain `damage` (they use damage_ballistic,
   damage_explosion, dps_*, …), so nearly everything tied at one score and the
   lists looked like spam. This version reads the REAL stats from the suffixed
   keys, weights them by the enemy's armor profile, and adds a tiny
   deterministic jitter so equal-merit items don't collapse onto one integer. */

/* pull a number out of a value that might be "55-70", "1050", 900, "∞" … */
function statNum(v) {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const m = v.match(/\d+(\.\d+)?/g);
    if (m && m.length) return m.map(Number).reduce((a, b) => a + b, 0) / m.length;
  }
  return 0;
}
/* best damage across every damage* key (ignoring melee/stun/gas utility dmg) */
function itemDamage(it) {
  let best = 0;
  Object.keys(it).forEach(k => {
    if (/^damage(_|$)/i.test(k) && !/melee|stun|gas/i.test(k)) {
      const n = statNum(it[k]); if (n > best) best = n;
    }
  });
  return best;
}
/* best sustained DPS across dps* and damage_DPS_* keys */
function itemDps(it) {
  let best = statNum(it.dps) || 0;
  Object.keys(it).forEach(k => {
    if (/^dps_/i.test(k) || /^damage_DPS/i.test(k)) {
      const n = statNum(it[k]); if (n > best) best = n;
    }
  });
  return best;
}
function itemPen(item) {
  if (item.penetration != null) return item.penetration;
  return levelToPen(item.level || item.level_projectile || item.level_8mm);
}
/* stable 0..1 jitter from an id/name so ties order deterministically
   instead of falling back to data-file order */
function microJitter(s) {
  let h = 0; const str = String(s);
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return (h % 1000) / 1000;
}

function scoreAgainstEnemy(item, enemy) {
  const eparts = enemy.parts || [];
  if (!eparts.length) return { score: 0, verdict: "No data", note: "No armor data for this enemy yet." };

  const pen = itemPen(item);
  const minArmor = Math.min(...eparts.map(p => p.armor));
  const maxArmor = Math.max(...eparts.map(p => p.armor));
  const dmg = itemDamage(item);
  const dps = itemDps(item);
  // log-scaled so a 2000-dmg cannon doesn't flatten everything below it
  const dmgN = Math.min(Math.log10(dmg + 1) / Math.log10(2001), 1);   // ~0..1 to 2000
  const dpsN = Math.min(Math.log10(dps + 1) / Math.log10(3001), 1);   // ~0..1 to 3000

  // No penetration data at all (e.g. support weapons in the current dataset):
  // rate on offense alone and flag it, rather than silently dropping the item.
  if (!pen) {
    let s = 18 + dmgN * 34 + dpsN * 30 + microJitter(item.id || item.name) * 3;
    s = Math.round(Math.max(0, Math.min(s, 90)));
    const verdict = s >= 70 ? "Good" : s >= 45 ? "Situational" : "Weak";
    return { score: s, verdict, note: "No armor-pen data — rated on firepower only." };
  }

  const pierce = eparts.filter(p => pen >= p.armor);
  if (!pierce.length) return { score: 0, verdict: "Can't penetrate", note: "Armor too heavy — bring more penetration." };

  const hitWeak   = pierce.some(p => p.weak);
  const coverage  = pierce.length / eparts.length;          // share of parts it can hurt
  const penHead   = Math.max(Math.min((pen - maxArmor) / 3, 1), -1); // beats the TOUGHEST part?
  const heavy     = maxArmor >= 4;

  // Heavy targets reward burst + penetration; light/swarm targets reward
  // sustained DPS + how many body parts you can actually damage.
  let score = heavy
    ? 22 + (hitWeak ? 20 : 6) + dmgN * 30 + dpsN * 10 + Math.max(penHead, 0) * 18 + coverage * 4
    : 20 + (hitWeak ? 14 : 8) + dpsN * 34 + dmgN * 16 + coverage * 12 + Math.max(penHead, 0) * 6;

  if (pen < maxArmor) score -= 10;                          // can't crack the hardest part
  score += microJitter(item.id || item.name) * 3;          // deterministic tiebreak
  score = Math.round(Math.max(0, Math.min(score, 100)));

  const verdict = score >= 78 ? "Excellent" : score >= 58 ? "Good" : score >= 35 ? "Situational" : "Weak";
  const target = (pierce.find(p => p.weak) || pierce[0]).name;
  return { score, verdict, note: `Aim for: ${target}` };
}

/* unified recommendation card — same shape for every category, so weapons,
   support weapons, stratagems, armor and boosters all read consistently.
   Reuses .card-pop so the existing hover-detail panel still works.
   `meta` is the small line under the name; `verdict`+`score` drive the badge
   and the score bar; `note` is the short reason/aim line. */
function recCard({ popKind, item, meta, verdict, score, note, contain = true }) {
  const v = verdict ? `<span class="rec-verdict v-${verdict.toLowerCase().replace(/[^a-z]/g,'')}">${esc(verdict)}</span>` : "";
  const bar = (score != null) ? `<span class="rec-bar"><i style="width:${score}%"></i></span>` : "";
  return `<article class="card card-pop rec-card" tabindex="0" data-pop-kind="${popKind}" data-pop-id="${esc(item.id)}">
    <div class="card-art">${placeholderArt(item.name, item.image, contain)}</div>
    <div class="card-body">
      <h4>${esc(item.name)} ${v}</h4>
      ${meta ? `<p class="card-type">${meta}</p>` : ""}
      ${note ? `<p class="rec-note">${esc(note)}</p>` : ""}
      ${bar}
    </div>
  </article>`;
}

function comparePage() {
  const view = $("#view");
  view.innerHTML = pageHeader("Compare & Counter", "Pick an enemy to rank your arsenal against it. Tune by mission and difficulty.");

  const controls = el("div", "compare-controls");
  controls.innerHTML = `
    <label class="field"><span>Enemy</span>
      <select id="cmpEnemy"><option value="">Select an enemy…</option>${DB.enemies.map(e=>`<option value="${e.id}">${esc(e.name)} — ${esc(e.strain && e.strain!==e.faction ? e.strain : e.faction)}</option>`).join("")}</select>
    </label>
    <label class="field"><span>Mission</span>
      <select id="cmpMission"><option value="">Any mission</option>${DB.missions.map(m=>`<option value="${m.id}">${esc(m.name)}</option>`).join("")}</select>
    </label>
    <label class="field"><span>Difficulty</span>
      <select id="cmpDiff"><option value="">Any</option>${DB.difficulties.map(d=>`<option value="${d.level}">${d.level} · ${esc(d.name)}</option>`).join("")}</select>
    </label>`;
  view.appendChild(controls);

  const result = el("div", "compare-result");
  view.appendChild(result);

  /* rank a weapon-like pool (has pen + damage) against the enemy */
  const rankPool = (arr, kind, popKind) =>
    arr.map(item => ({ item, kind, popKind, ...scoreAgainstEnemy(item, enemy()) }))
       .filter(r => r.score > 0)
       .sort((a, b) => b.score - a.score);

  let _enemy = null;
  const enemy = () => _enemy;

  const draw = () => {
    _enemy = DB.enemies.find(e => e.id === $("#cmpEnemy").value);
    const diff = $("#cmpDiff").value;
    const mission = DB.missions.find(m => m.id === $("#cmpMission").value);

    // EMPTY STATE: nothing is shown until an enemy is chosen.
    if (!_enemy) {
      result.innerHTML = emptyState("Select an enemy to see recommended loadouts. Add a mission and difficulty to refine them.");
      return;
    }

    // --- ranked offensive pools ---
    const weapons   = rankPool(DB.weapons,        "Weapon",      "weapons").slice(0, 6);
    const supports  = rankPool(DB.supportWeapons, "Support",     "supportWeapons").slice(0, 4);
    const orbitals  = rankPool(DB.orbitalStrikes, "Stratagem",   "orbitalStrikes").slice(0, 4);
    const emplace   = rankPool(DB.emplacements,   "Emplacement", "emplacements").slice(0, 4);

    // --- armor by difficulty (body armor only) ---
    const bodyArmor = DB.armor.filter(a => a.unit === "Armor");
    let armorPick;
    if (diff && +diff >= 7)      armorPick = bodyArmor.filter(a => a.class === "Heavy");
    else if (diff && +diff >= 4) armorPick = bodyArmor.filter(a => a.class === "Medium");
    else                          armorPick = bodyArmor.filter(a => a.class === "Light");
    if (!armorPick.length) armorPick = bodyArmor.slice(0, 4);
    armorPick = armorPick.slice(0, 4);
    const armorReason = (diff && +diff >= 7) ? "Heavy plating for high difficulty"
                      : (diff && +diff >= 4) ? "Balanced protection for this difficulty"
                      : diff ? "Light & fast for low difficulty"
                      : "Pick by your difficulty";

    // --- boosters: always useful; show a recommended core set ---
    const boosterPick = DB.boosters.slice(0, 4);

    const section = (title, cards, hint) =>
      cards.length ? `<h3 class="cmp-h">${esc(title)}${hint?` <span class="cmp-h-hint">${esc(hint)}</span>`:""}</h3>
        <div class="card-grid cmp-grid">${cards.join("")}</div>` : "";

    const wCards = weapons.map(r => recCard({ popKind:r.popKind, item:r.item,
      meta:`${esc(r.item.slot||"")}${r.item.type?" · "+esc(r.item.type):""}`,
      verdict:r.verdict, score:r.score, note:r.note, contain:false }));
    const sCards = supports.map(r => recCard({ popKind:r.popKind, item:r.item,
      meta:`Support · ${esc(r.item.permit||"")}`, verdict:r.verdict, score:r.score, note:r.note }));
    const oCards = orbitals.map(r => recCard({ popKind:r.popKind, item:r.item,
      meta:`${esc(r.item.permit||"")} stratagem`, verdict:r.verdict, score:r.score, note:r.note }));
    const eCards = emplace.map(r => recCard({ popKind:r.popKind, item:r.item,
      meta:`${esc(r.item.permit||"")} · Emplacement`, verdict:r.verdict, score:r.score, note:r.note }));
    const aCards = armorPick.map(a => recCard({ popKind:"armor", item:a,
      meta:`${esc(a.unit)}${(a.class&&a.class!=="—")?" · "+esc(a.class):""}`, note:armorReason }));
    const bCards = boosterPick.map(b => recCard({ popKind:"boosters", item:b,
      meta:"Booster", note:b.desc }));

    const anyOffense = weapons.length || supports.length || orbitals.length || emplace.length;

    result.innerHTML = `
      <div class="cmp-enemy-banner">
        <div class="card-art small">${placeholderArt(_enemy.name, _enemy.image, true)}</div>
        <div>
          <h2>${esc(_enemy.name)} ${threatBadge(_enemy.threat)}</h2>
          <p class="card-type">${esc(_enemy.faction)}${_enemy.strain && _enemy.strain!==_enemy.faction ? " · "+esc(_enemy.strain) : ""}${mission ? " · "+esc(mission.name) : ""}</p>
          <p class="card-desc">${esc(_enemy.desc)}</p>
          ${diff ? `<div class="cmp-banner-diff">${diffBadge(+diff)}</div>` : ""}
        </div>
      </div>
      ${anyOffense ? "" : emptyState("Nothing in the arsenal pierces this target yet. Bring anti-tank or thermite.")}
      ${section("Best weapons", wCards, "ranked vs this target")}
      ${section("Support weapons", sCards, "by firepower")}
      ${section("Orbital & Eagle strikes", oCards, "ranked vs this target")}
      ${section("Emplacements", eCards, "ranked vs this target")}
      ${section("Recommended armor", aCards, "by difficulty")}
      ${section("Recommended boosters", bCards, "squad-wide")}`;
  };

  controls.addEventListener("change", draw);
  draw(); // initial paint shows the empty state
}

/* HOME */
function homePage() {
  const view = $("#view");

  // quick links into the actual sections (real navigation, not marketing cards)
  const links = [
    { label: "Weapons",         to: "#/weapons" },
    { label: "Support Weapons", to: "#/support-weapons" },
    { label: "Orbital Strikes", to: "#/orbital-strikes" },
    { label: "Emplacements",    to: "#/emplacements" },
    { label: "Armor",           to: "#/armor" },
    { label: "Boosters",        to: "#/boosters" },
    { label: "Enemies",         to: "#/enemies" },
    { label: "Missions",        to: "#/missions" },
    { label: "⚔ Compare",       to: "#/compare" },
  ];

  // live counts straight from the data so the numbers can never go stale
  const stats = [
    { n: DB.weapons.length + DB.supportWeapons.length, label: "Weapons" },
    { n: DB.orbitalStrikes.length + DB.emplacements.length, label: "Stratagems" },
    { n: DB.armor.length, label: "Armor pieces" },
    { n: DB.enemies.length, label: "Enemies" },
    { n: DB.missions.length, label: "Missions" },
  ];

  view.innerHTML = `
    <section class="home">
      <div class="home-eyebrow">SUPER EARTH TACTICAL ARCHIVE</div>
      <h1 class="hero-title">Helldivers Database</h1>
      <p class="hero-subtitle">A tactical reference for weapons, stratagems, armor, enemies and missions — plus a Compare engine to counter any target.</p>

      <p class="home-wip-title">Work in progress!</p>
      <p class="home-wip-text">This site is still under active development. Some figures may not be 100% accurate. It is recommended to double-check anything mission-critical against the in-game stats.</p>

      <div class="home-stats">
        ${stats.map(s=>`<div class="home-stat"><span class="home-stat-n">${s.n}</span><span class="home-stat-l">${esc(s.label)}</span></div>`).join("")}
      </div>

      <h2 class="home-section-h">Browse the database</h2>
      <div class="home-links">
        ${links.map(l=>`<a class="home-link" href="${l.to}">${esc(l.label)}<span class="home-link-go">→</span></a>`).join("")}
      </div>
    </section>`;
}

/* GLOBAL SEARCH (top bar) */
function globalSearchResults(q) {
  const view = $("#view");
  const lc = q.toLowerCase();
  const hits = [];
  const scan = (arr, kind, route) => arr.forEach(x => { if (JSON.stringify(x).toLowerCase().includes(lc)) hits.push({ name: x.name, kind, route }); });
  scan(DB.weapons, "Weapon", "weapons");
  scan(DB.supportWeapons, "Support Weapon", "support-weapons");
  scan(DB.orbitalStrikes, "Orbital Strike", "orbital-strikes");
  scan(DB.emplacements, "Emplacement", "emplacements");
  scan(DB.armor, "Armor", "armor");
  scan(DB.boosters, "Booster", "boosters");
  scan(DB.enemies, "Enemy", "enemies");
  scan(DB.missions, "Mission", "missions");

  view.innerHTML = pageHeader(`Search: "${esc(q)}"`, `${hits.length} result${hits.length===1?"":"s"} across the database.`);
  const list = el("div", "search-results");
  list.innerHTML = hits.length
    ? hits.map(h=>`<a class="sr-row" href="#/${h.route}"><span class="sr-name">${esc(h.name)}</span><span class="sr-kind">${esc(h.kind)}</span></a>`).join("")
    : emptyState("No matches found, Helldiver. Try another term.");
  view.appendChild(list);
}

/* ROUTER */
const routes = {
  home:               homePage,
  weapons:            weaponsPage,
  "support-weapons":  () => listPage({ title:"Support Weapons", subtitle:"Heavy ordnance called down via stratagem.", items:DB.supportWeapons, render:supportCard }),
  "orbital-strikes":  () => listPage({ title:"Orbital Strikes", subtitle:"Death from above — Orbital and Eagle stratagems combined.", items:DB.orbitalStrikes, render:orbitalCard, tabKey:"permit" }),
  emplacements:       () => listPage({ title:"Emplacements", subtitle:"Deployable structures and sentries.", items:DB.emplacements, render:emplacementCard, tabKey:"permit" }),
  armor:              armorPage,
  boosters:           () => listPage({ title:"Boosters", subtitle:"Squad-wide buffs for the whole mission.", items:DB.boosters, render:boosterCard }),
  enemies:            enemiesPage,
  missions:           () => listPage({ title:"Missions", subtitle:"Operation types you'll be dropped into.", items:DB.missions, render:missionCard, tabKey:"category" }),
  compare:            comparePage,
};

function router() {
  const pop = document.getElementById("detailPopover");
  if (pop) pop.classList.remove("show");

  const hash = location.hash.replace(/^#\//, "") || "home";
  const [route, ...rest] = hash.split("/");

  if (route === "search") globalSearchResults(decodeURIComponent(rest.join("/")));
  else (routes[route] || homePage)();

  document.querySelectorAll("#sidebar [data-route]").forEach(a => {
    a.classList.toggle("active", a.dataset.route === route);
  });

  // --- scroll-to-top fix: land at the very top on every navigation ---
  if (window.__mainScroller) window.__mainScroller.scrollTop = 0;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  if (document.body) document.body.scrollTop = 0;
}

/* INIT */
window.addEventListener("DOMContentLoaded", () => {
  buildSidebar();

  if (JSON.parse(localStorage.getItem("sidebarCollapsed"))) {
    $("#sidebarWrapper").classList.add("collapsed");
    document.body.classList.add("sidebar-collapsed");
  }
  window.__mainScroller = document.querySelector(".main-content");

  const gs = $("#globalSearch");
  gs.addEventListener("keydown", e => {
    if (e.key === "Enter" && gs.value.trim()) location.hash = "#/search/" + encodeURIComponent(gs.value.trim());
  });

  registerAllPopovers();
  setupPopover();

  window.addEventListener("hashchange", router);
  router();
});
