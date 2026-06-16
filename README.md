# Helldivers Database

A single-page tactical database for Helldivers 2: browsable gear/enemy pages,
search & filtering, hover-detail panels on every card, and a Compare/Counter
engine that ranks your arsenal against any enemy by mission and difficulty.

## Run it
No build step. Just open `index.html`, or serve the folder:
    python3 -m http.server 8000
then visit http://localhost:8000

## Files
- index.html   — app shell (navbars, sidebar mount, content mount)
- app.js        — router, sidebar, page renderers, search, hover panels, compare engine
- data.js       — ALL game data. Edit this to add/replace real stats.
- style.css     — styling (original gold/dark identity, body now uses IBM Plex Mono)
- images/       — optional background art

## How the pages work (v0.2)
Every category now behaves like the original Weapons page: a compact card shows
summary info, and hovering (or tapping on touch) reveals a floating detail panel
with the full stats. Cards opt in with class `card-pop` + `data-pop-kind` +
`data-pop-id`; the matching popover builder in app.js fills the panel.

Two-level tab pages (a top row + a sub row):
- Weapons  — slot (Primary/Secondary/Throwable) -> type
- Armor    — unit (Armor/Helmet/Cape) -> class (Light/Medium/Heavy; capes have none)
- Enemies  — faction (Terminids/Automatons/Illuminate) -> strain
Single-tab pages: Support Weapons, Orbital Strikes, Emplacements, Boosters, Missions.

Orbital Strikes combines the wiki's Orbital *and* Eagle stratagems into one
section, distinguished by the `permit` field ("Orbital" / "Eagle").

## Multi-value (non-ordinary) fields  — IMPORTANT
Some weapons carry more than one of a stat (e.g. a round that does both
ballistic and explosion damage, or two penetration tiers). Store each as a
SUFFIXED key on the base field. The UI shows the NUMBER FIRST and the suffix to
its right as a label — nothing is averaged or collapsed:

    damage: 250                       ->  "250"
    damage_ballistic: 250,
    damage_explosion: 100             ->  "250 Ballistic · 100 Explosion"
    level_8mm: "Light",
    level_40mm: "Medium"              ->  two penetration badges: "Light 8mm" / "Medium 40mm"

Size/speed-only suffixes are treated as plain distinguishers — their label is
HIDDEN and only the numbers show, joined by dots:

    dps_small: 300, dps_medium: 889,
    dps_large: 900                    ->  "300 · 889 · 900"
    dps_slow: 1050, dps_fast: 1487.5  ->  "1050 · 1487.5"

The size-suffix list lives in app.js as `SIZE_SUFFIXES`
(small/medium/large/slow/fast/min/max/short/long/close/far). Any suffix NOT in
that set is treated as a real metric label and shown to the right of the number.
`8mm`/`40mm`/`12mm`-style units are auto-detected and kept lowercase.

Rules: the base key (`damage`) is the plain value; `base_suffix` keys are
variants. **Quote any value that contains a range** (`"55-70"`, not `55-70`,
which JavaScript would read as subtraction). Don't repeat the same key twice in
one object — the second silently overwrites the first.

## Card images (optional)
Every card shows a two-letter initials placeholder by default (e.g. "AR-23
Liberator" -> "AL"). To use a real image instead, add an `image` field to that
item in data.js pointing at a file in `images/`:

    image: "images/ar-23-liberator.png"

Any item without `image` keeps the initials placeholder, so you can add art
gradually. Works on every section (weapons, support weapons, orbital strikes,
emplacements, armor, boosters, enemies, missions) and on the hover detail panel.
Images are sized to the card art box with `object-fit: cover`, so use roughly
landscape art for cards and they'll crop to fit.

## Field reference by section
- weapons:        name, slot, type, level, damage, fireRate, capacity, dps, mags,
                  ergonomics, recoil, unlock, unlockCost, unlockUnit, tags[], desc
                  (+ any `_suffix` variants for multi-value stats)
- supportWeapons: name, permit, traits[], code, cooldown, unlock, unlockLevel,
                  unlockCost, unlockUnit, damage, fireRate, recoil, ergonomics,
                  capacity, mags, penetration, desc
- orbitalStrikes: name, permit ("Orbital"/"Eagle"), traits[], code, cooldown,
                  unlock, unlockLevel, unlockCost, bombs, salvos, damage, uses,
                  penetration, desc
- emplacements:   name, permit, traits[], code, cooldown, unlock, unlockLevel,
                  unlockCost, damage, penetration, fireRate, capacity, ergonomics, desc
- armor:          name, unit ("Armor"/"Helmet"/"Cape"), class
                  ("Light"/"Medium"/"Heavy", or "—" for capes), armorRating,
                  speed, stamina, passive, unlock, unlockCost, unlockUnit, desc
- boosters:       name, desc (brief), detail (long), unlock, unlockCost,
                  unlockUnit, tags[]
- enemies:        name, faction, strain, threat, minDifficulty, sizeClass, health,
                  damage, damageType, parts[]{name,armor,weak}, desc
- missions:       name, category ("Main Objective"/"Terminid"/"Automaton"/
                  "Illuminate"), faction, minDifficulty, maxDifficulty, timeLimit,
                  desc (brief), detail (long)

## PLACEHOLDER values to replace from the wiki
Real-ish values are filled where confident. Still placeholders (flagged in
data.js comments and in the relevant `desc` text):
- enemy `health` / `damage` numbers (especially every sub-strain unit)
- helmet & cape `armorRating` / `speed` / `stamina` (shown as "—"; helmets/capes
  are cosmetic in-game — set-passives live on the body armor)
- mission `minDifficulty` / `maxDifficulty` / `timeLimit`
- some unlock costs and stratagem input codes
The Illuminate sub-strains (Appropriators, Mindless Masses) have one sample unit
each — replace with the real roster once confirmed.

## Compare engine
Ranks Weapons + Support Weapons against an enemy. A weapon counters a body part
when its penetration >= that part's `armor` (1–6); hitting a `weak` part scores
higher. Armor recommendations use body armor only (`unit === "Armor"`), picked
by difficulty. Other categories are intentionally excluded from Compare.

## Sections
Home · Stratagems (Support Weapons / Orbital Strikes / Emplacements) ·
Enemies · Missions · Equipment (Weapons / Armor / Boosters) · Compare

## Author
Nuka
