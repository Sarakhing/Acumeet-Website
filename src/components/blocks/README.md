# Content blocks

Data-driven page sections built from the Figma "02. Solutions" page (file `se9SWtbhaEbzA1R7EEMJTo`, section `46:11503`).
Each block is a full-width `<section>` with its own background and vertical padding, so a page is just a stack of blocks.
Working examples: `src/modules/02-solutions/pages/{Protect,Secure}Page.jsx` + `content/{protect,secure}.js`.

Shared conventions
- `title` + `accent`: the accent phrase renders with the magenta→blue gradient (`AccentTitle`). Like Figma, the gradient runs across the whole heading box.
- `tint`: `lilac | pink | blue | mint | night | white` (tokens `panel-*`, `surface-night-raised`).
- `pattern`: `{ type: 'rings' | 'dots' | 'hairlines' | 'waveform', size }`. `size` is the Figma frame the asset was exported for: `explorer` 780×520, `panel` 656×480, `stepper` 664×420, `chapters` 664×500 (dark dots), `card` / `card-dark` 413×280, `bento` 382×182, `mini` 260×120, `hero` 1440×900 (white rings). See `src/components/patterns/patternAssets.js`.
- Mock-ups are fixed-size like in Figma. `VisualPanel` and `ScaleToFit` scale them down on narrow screens, so you never write responsive mock-ups.
- Auto-advancing blocks (`HeroCarousel`, `Explorer`, `Stepper`, and `Chapters` if you pass `interval`) use `useAutoAdvance`: they pause on hover and focus, stop after the user picks an item, and are off under `prefers-reduced-motion`. They are ARIA tabs and support arrow keys, Home and End.

---

## SolutionHero
`variant="wash"`: light gradient-wash hero (Protect, Control, Govern, Understand). Copy on the left, `visual` on the right over a dot grid.
`variant="rings"`: dark hero with the text centred over rings and glows (Secure, Connect). Pass `<HeroCarousel>` as `children`.

| prop | |
|---|---|
| `eyebrow` | "Solutions · Protect" (mono, magenta; in a dark pill for `rings`) |
| `title`, `accent` | h1; `accent` is gradient text |
| `lead` | paragraph |
| `primary` | `{ label, to }` → blue Button |
| `secondary` | `{ label, to }`: an arrow text link for `wash`, a white outlined pill for `rings` |
| `visual`, `visualWidth` | `wash` only: fixed-size composition node and its design width (scaled to fit) |
| `children` | `rings` only (e.g. HeroCarousel) |

## HeroCarousel
Figma "✓ Hero carousel · …". A dark pill tab switcher above an 820px app window whose body swaps content.
`slides: [{ label, content }]`, `interval=5000`, `windowWidth=820`, `flushBottom=true` (the window bleeds off the bottom of the section).

## Statement
Figma "Statement" / "THE CHALLENGE", centred. `tone="dark"` (night background with a dot field, 52px title) or `"light"` (white background with blue and pink corner glows, 46px title). Props: `eyebrow`, `title`, `paragraphs: string[]`, `glows`.

## Editorial
Figma "Editorial" ("rows"). Title (520px) on the left, copy column on the right. Props: `eyebrow`, `title`, `accent`, `paragraphs[]`, `cta {label,to,intent?}`, `tone: subtle | white | dark`.

## Split
Figma "Split" / "Feature / …". Copy and visual, alternating sides.
| prop | |
|---|---|
| `size` | `wide` (Protect: 40px title, 18px body, 64 gap) · `feature` (Secure: 34px title, 16.5px body, 72 gap, 500/656 columns) |
| `tone` | `white | subtle | dark` |
| `eyebrow`, `eyebrowStyle` | `pill` (DotEyebrow "● AUDIT LOGS") or `mono` (Eyebrow) |
| `title`, `accent` | |
| `body[]` → `bullets[]` → `footnote[]` → `cta` | rendered in this order. `bullets: [{ lead?, text }]` (`lead` is bold) |
| `bulletStyle` | `plain` or `check` (blue check circle) |
| `visual` | usually `<VisualPanel …>{mock}</VisualPanel>` |
| `reverse` | visual on the left on desktop. Copy always comes first on mobile |

## VisualPanel
The rounded (28px) tinted illustration panel. Rendered at design size and scaled to fit.
Props: `width=656`, `height=480`, `tint`, `pattern`, `chip` (top-left label pill), `glow` (CSS background-image), `align`, `children` (centred mock).

## Explorer
Figma "Tabs explorer" + "✓ Explorer · …". Numbered vertical tabs (460px) next to a 780×520 visual. The active tab expands to show its body and a progress bar that fills over `interval`, then moves to the next tab. Below `lg` the list sits above the scaled panel.
`title`, `accent`, `interval=7000`, `tone: subtle | white`,
`items: [{ title, body, tint, pattern: { type, size: 'explorer' }, visual, chip? }]`. `chip` defaults to "01 · title".

## Chapters
Figma "Chapters" + "✓ Chapters · …" (Understand). Dark section with pill chapter nav, a "CHAPTER 01 / 04" copy column and a 664×500 dark visual (glow + dark dots).
`title?`, `accent?`, `interval=0` (manual), `chapters: [{ tab, title, paragraphs[], checks[], visual, glow?: magenta | blue }]`.
The section padding and header are not specified in Figma (only the component is). Check against `46:19376`.

## Stepper
Figma "Stepper" + "✓ Stepper · …" (Connect). A 4-step track (the bar fills while a step is active, dots for completed steps turn dark), then a big "01", title, body and a 664×420 visual.
`eyebrow?`, `title?`, `accent?`, `interval=6000`, `tone`, `steps: [{ label, title?, body, tint, pattern: { type:'rings', size:'stepper' }, visual }]`.

## NumberedGrid
Figma "Checklist" ("Designed for Sensitive Business Conversations"). Heading plus a 4-column grid with magenta top rules and large light numbers.
`title`, `accent` (on its own line), `items: [{ title?, body }]` (an item without `title` is an intro line), `tone: subtle | white`.

## CardGrid
Figma "Benefits" + "✓ Card · …" (413×280). Tinted cards with a pattern, number, ↗, title and body. Hover/focus switches to State 2 (night background, dark dots, light text).
`title`, `accent` (own line), `tone`, `cards: [{ title, body, tint, pattern: { type, size:'card' }, to? }]`.

## Bento
Figma "Bento / …" (Secure identity). Centred title and 3 tiles with a tinted header (pattern, 52px IconTile, pills, optional note).
`tiles: [{ title, body, icon, iconTone: blue|purple|magenta|green, tint: lilac|peach|mint|pink|blue, pattern: {type,size:'bento'} | 'tiled-dots', pills[], note?, miniHeight? }]`.

## StepCards
Figma "Steps / …" (Secure SIEM). Dark section with blurred glows, a centred header and glassy numbered cards with gradient number tiles.
`eyebrow`, `title`, `lead`, `steps: [{ title, body, gradient?: magenta|blue|amber }]`, `footnote`.

## RelatedRow / RelatedCard
Figma "Explore more" + "✓ Related · X" (308×300; hover/focus = State 2, a dark card).
`RelatedRow`: `eyebrow='Keep exploring'`, `title='Explore Acumeet solutions'`, `titleTo?`, `cards[]` (4-up on desktop, 2-up on tablet, swipe row on mobile).
`RelatedCard`: `{ title, description, to, tint, pattern: { type, size:'mini' } }`. For solution pages use `relatedSolutions('control','secure',…)` from `modules/02-solutions/content/solutions.js`. It holds the Figma tint, pattern and description for all 7 solutions.

## Faq (extended)
`items: [{ q, a }]`, `title`, `defaultOpen = 0 | -1 | 'all'`. Solutions pages show every answer expanded (`'all'`, items toggle independently). The default (first item open, single-open accordion) is unchanged.

## CtaBand (extended)
Same as before. `lead={null}` drops the sub-line and `secondary={null}` gives a single CTA (Protect).

---

### Supporting pieces
- `components/ui`: `AccentTitle`, `ScaleToFit` (`width` = design px), `AppWindow` (`variant="chrome"` with traffic lights and a grey body, or `"titled"` with a title bar and `status` pill; `flushBottom`), `MockCard` ("UI · …" white card: `title`, `aside`, `gap`, `width`, `shadow`), `UiChip` (mock chips: `tone`, `shape`, `mono`; `tone="token"` for `[PERSON_NAME]`), `LiveDot`, `FloatChip`, `IconTile`, `DotEyebrow`, `AutoAdvanceTimer`.
- `components/patterns`: `Rings`, `DotGrid` (an asset with `size`, or a CSS field with `tone`/`fade` without it), `Hairlines`, `WaveDrift` (animated), and `Pattern` (data switch).
- `hooks`: `useAutoAdvance`, `usePrefersReducedMotion`.
- Product mock-ups live in `modules/02-solutions/components/visuals/` (cards shared with Products moved to `src/components/visuals/`, see "Products template" below; `RedactionReview`, `AuditLogCard`, `WorkspaceAccessCard`, `RetentionPolicyCard`, `KeysStorageCard`, `RolePermissionsWindow`, `EncryptionWindow`, `AuditTimelineWindow`, `ProtectHeroVisual`). Add new ones there and keep them fixed-size.
- Assets: `src/assets/images/solutions/`. Figma patterns, icons and avatars are named `<use>-<w>x<h>.svg`.

### Not yet built (seen on other Solutions pages)
- Control "02": a 2×2 icon-card grid with numbers.
- Overview showcase.
- EMI pillars and audience sections.
- Connect "Meeting types" scroll area.
- Understand audience cards (`46:25057` …).
- Mock-ups for Chapters and Stepper (transcript, action items, integrations, Atlas chat, search). Their Figma specs are the `✓` frames listed in the section metadata.

---

## Added for Control (03.03) and Govern (03.05)

### IconCardGrid (new)
Figma Control "02 · Control Where Your Data Lives" (Row `46:17148`) — this covers the "Control 02" item in the list above.
A 780px heading + copy column, then a 2×2 grid of white cards (radius 20, p-22): a 44px icon tile with a 28% tone border, a mono number in the tone colour, an optional title and a 15px body. One column below `md`.
`title`, `accent?`, `paragraphs[]`, `tone: white | subtle`, `cards: [{ icon, tone: magenta|blue|purple|green, title?, body }]` (`icon` is an imported 24px SVG, e.g. `ic-key-blue-24.svg`).

### Additive options on existing blocks (defaults unchanged)
- `SolutionHero` (`wash` only): `pattern: 'dots' | 'hairlines'` (Control's 680×900 hairline field), `eyebrowStyle: 'plain' | 'chip'` (Govern's white bordered pill), `secondaryStyle: 'link' | 'button'` (Control's outlined pill), `visualAlign: 'start' | 'end'`, `copyTop` (lg copy offset, default 76) and `padBottom` (lg bottom padding, default 111). Use the last two to hit each Figma hero height. Hero canvases include about 64px of bottom room so ScaleToFit doesn't clip the float shadows.
- `Split`: `size="standard"` (Control: 40px title, 17px body) and `size="compact"` (Govern "02 · rows": 36px title, 17px body). Both use the `wide` layout (560 copy column, 64 gap, py-112).
- `Faq`: `eyebrow` (default `'FAQ'`, `null` hides it, as on Control).
- `RelatedRow`: `eyebrow={null}` now drops the overline completely (Control).
- Patterns: `HAIRLINES.hero` (680×900) and `WAVEFORM.panel` (656×480, so `{ type:'waveform', size:'panel' }` in a `VisualPanel`, built from the Figma bars component `46:3060`).
- `LiveDot`: `tone="red"` (Govern transcript "Live" chip).
- Visuals: `KeysStorageCard` takes `keyIcon` / `storageIcon` (`{ src, tone }`) and `iconSize` (32 | 36). New visuals: `ActionItemsCard`, `ControlHeroVisual`, `GovernHeroVisual`, `TranscriptCard`. `people.js` adds Fredelina Augustus.
- Related cards: on Govern, Figma keeps thumbnails positional (lilac rings, pink dots, blue waveform, mint hairlines), so `content/govern.js` overrides `tint`/`pattern` per slot.

---

## Added for Solutions overview (03.01) and Enterprise Meeting Intelligence (03.08)
Covers the "Overview showcase", "EMI pillars and audience sections" and "Meeting types scroll area" items in the list above.

### Showcase (new)
Figma "02 · Solutions" + "03 · Solutions showcase" (`46:11684`, `46:11702`). Centred mono eyebrow + 48px title, a row of jump-link pills, then rows of tinted 28px-radius tiles. Each row is a grid whose lg columns follow the tiles' Figma `width` (760/496, 410/410/412…); below lg tiles stack full width and their visuals scale.
`id`, `eyebrow`, `title`, `index: [{ label, href: '#tile-id' }]`, `rows: [[tile]]`.
Tile (`ShowcaseTile`, also exported): `{ id, width, layout: 'stack' | 'split' | 'feature', tint: pink|lilac|grey|blue|mint|amber|night, eyebrow, title, titleWidth?, body, bodyWidth?, link: { label, to }, visual }`.
`visual`: `{ width, height, pattern?: { src, width, height, x?, y? }, dots?: 'dark', glow?: CSS image, content, x, y }` — a fixed-size canvas with the mock-up at (x, y).

### ScrollSlides (new)
Figma "03 · By meeting type" + "Meeting types · scroll area" (`46:13442`, spec `46:29753`). Header (`title` + `accent` in #292d32, optional `titleTo`, `lead`), then slides (counter, title, lead, "What Acumeet captures" list, CTA, 576×440 tinted visual) with a segmented progress bar (segments up to the current slide are blue).
On lg with a viewport ≥ 760px tall the stage pins under the nav and page scroll drives the slides (420px each); elsewhere it is a native horizontal scroll-snap row (swipe). Segments are ARIA tabs (click / arrows / Home / End scroll to the slide). No auto-advance; smooth scrolling is off under reduced motion.
`slides: [{ title, lead, captures[], capturesLabel?, cta: { label, to }, tint: amber|blue|pink|mint|lilac, visual, visualWidth? (468) }]`.

### SecurityBand (new)
Figma "Security band" (`46:14132`). Dark 32px-radius band: 48px title, lead, CTA; a 420px stack of glassy rows on the right. Stacks below lg.
`title`, `lead`, `cta`, `items: [{ icon, iconWidth, iconHeight, title, body }]`.

### IndexList (new)
Figma "04 · Industries" Row (`46:14155`). Intro column (48px title, optional `titleTo` link, lead, magenta waveform) + a numbered link list with magenta arrows.
`title`, `titleTo?`, `lead`, `items: [{ title, body, to }]`, `tone: subtle | white`.

### PillarTabs (new)
Figma "EMI pillars" (component `46:29435`, used at `46:20847`). 360px numbered tabs + white panel (accent arcs, eyebrow pill, 36px title, body, "Key Benefits" box with accent checks, CTA). Auto-advances like Explorer (`useAutoAdvance`: pauses on hover/focus, stops after a pick, off under reduced motion; ARIA tabs). Below lg the tabs are a swipe row that keeps the active tab in view.
`id`, `interval=7000`, `label`, `tone`, `items: [{ tab, eyebrow, title, body, benefits[], cta, accent: magenta|blue|purple|green|amber, pattern (880×360 SVG) }]`.

### FlowSteps (new)
Figma "03 · EMI Approach" Head + Flow (`46:20866`, `46:20869`). Night section, rings pattern, centred eyebrow + title with the light accent gradient (`--gradient-accent-dark`), numbered nodes joined by a magenta→blue line (last node filled magenta) over dark cards. Vertical timeline below lg.
`eyebrow`, `title`, `accent`, `steps: [{ title, body }]`, `pattern: { src, width, height }`.

### AudienceGrid (new)
Figma "04 · EMI Audiences" (`46:20910`, `46:20912`). Title + tinted cards with a rings pattern, 52px icon tile, title and line. `size: 'wide'` = half row (630, 26px title), `'narrow'` = third (413, 21px). `tint: 'night'` is the dark card.
`title`, `items: [{ title, body, icon, iconTone: night|blue|amber|green|purple|magenta, tint, pattern: { src, width, height }, size }]`.

### Additive options (defaults unchanged)
- `SolutionHero` (`wash`): `pattern` may also be an object `{ src, width, height }` (custom hairline field, top right; overview uses 720×884), `copyWidth` (default 600), `titleSize: 'hero' | 58 | 54`, `leadSize: 18 | 19`, and `lead` may be an array of paragraphs.
- Visuals: `RedactionReview` takes `tone: 'dark' | 'highlight'` (amber tokens + blue pill "Redact"), `shadow`, `className`; `KeysStorageCard` takes `permissions={false}`; `ActionItemsCard` takes `avatarSize`. New visuals: `OverviewHeroVisual`, `OverviewIntegrationsCard`, `OverviewDecisionsCard`, `MeetingAnalyticsCard`, `MeetingRecordCard`, `AtlasAvatar`, `EmiHeroVisual`, `EmiMeetingCaptureCard`.
- Tokens: `panel-amber`, `surface-night-card`, `surface-night-tile`, `ink-on-dark-subtle`, `ink-on-dark-faint`, `accent-blue|purple|green|amber`, `--gradient-accent-dark`.

---

## Added for Understand (03.06) and Connect (03.07)

### Chapters (checked against the real sections, extended — old API unchanged)
Verified against Understand `46:19376` and Connect `46:19702`: on both pages Figma **hides the chapter nav and the "CHAPTER 0N / 0M" counter** and shows one chapter as a static row (copy 560 + 56 gap + visual, py-120). The 4-chapter spec frame `46:21861` is only the component sheet.
- One chapter (or `showNav={false}`) renders a plain row: no tablist/tabpanel, no auto-advance; the chapter title becomes an `h2` when the block has no `title`.
- `showCounter` (defaults to `showNav`).
- `tone: 'dark' | 'light'` — `light` = Understand: `surface-muted` section, `#292d32` title, `ink-700` copy, magenta ✓ with `#707070` text. `dark` (default) is unchanged (green ✓).
- Per-chapter `panel: { width, height, tint, pattern, glow }` overrides the default 664×500 night / dark-dots / glow panel (Understand: `{ width: 656, height: 480, tint: 'mint', pattern: { type: 'rings', size: 'panel' }, glow: null }`).

### Additive options (defaults unchanged)
- `CardGrid`: `columns: 3 | 2` and `accentBreak` (default `true`). Understand's "✓ Card · …" audience cards (630×280, number + ↗ + hover State 2) are CardGrid cards with `columns={2}` and pattern size `'card-wide'` — not the EMI `AudienceGrid` (icon tiles, no hover state). The hover dot field switches to `card-wide-dark` automatically.
- Patterns: `RINGS['card-wide']`, `HAIRLINES['card-wide']` (630×280), `DOTS['card-wide' | 'card-wide-dark']` (Figma exports only the 614×272 dot field, so the asset entry has `inset: 9` and `PatternImage` draws it at its own size, 9px from the top-left). `Rings` anchors `card-wide` top-right.
- `WaveDrift` / `{ type: 'waveform', … }`: optional `color` recolours the bars through a CSS mask (multiplied by the asset's 12% alpha). Understand's dark split uses `{ type:'waveform', size:'panel', color:'rgb(245 245 245 / 0.333)' }` = Figma's white 4% bars (`46:3244`).
- `VisualPanel` tints `amber` (`panel-amber`) and `grey` (new token `panel-grey` #f6f6f8, Stepper "Follow Through").
- `Editorial`: `cta.size` (`'md'` default, `'lg'` for Connect's 43px buttons).
- `SolutionHero` (`rings`): `secondaryStyle: 'button'` (default pill) | `'link'` (Connect "Talk to Our Team →", white, top-aligned with the button).
- Visuals: `SummaryCard`, `DecisionsCard`, `AtlasChatCard` (24px Atlas avatar inline), `KnowledgeSearchCard`, `IntegrationsCard` (logo chips, `muted` items), `MeetingCaptureCard` ("Upcoming meetings", first row recording), `UnderstandHeroVisual`. Understand/Connect reuse `TranscriptCard`, `ActionItemsCard` (`avatarSize={20}`, as in Figma) and `MeetingAnalyticsCard` (`range="Last 30 days"`, 440 → `barWidth 30 / barPitch 40`, 460 → `32 / 42`).

---

## Products template (02.02 Meeting Capture, 02.03 AI Transcription)
Figma section "03. Products" (`46:30442`). Module: `src/modules/03-products/` — `index.js` (`productsRoutes`, TODOs with Figma ids for the overview + 8 remaining pages), `content/products.js`, `content/<slug>.js`, `pages/<Name>Page.jsx`, `components/FeatureSplit.jsx`, `components/visuals/`.
Routes: `ROUTES.product.<key>` (`overview`, `meetingCapture`, `aiTranscription`, `aiMeetingSummaries`, `actionItemManagement`, `speakerRecognition`, `aiRedaction`, `atlas`, `meetingIntelligence`, `knowledgeRepository`, `analytics`). `ROUTES.products` is still the overview string.

### Recipe (a product page = these blocks, in Figma order)
1. `<Breadcrumb items={productBreadcrumb('AI Transcription')} />` — Home / Product overview / page.
2. Hero, one of:
   - **wash** (02.02, 02.04, 02.05, 02.09…): `SolutionHero` with `eyebrow: 'Product · X'`, `eyebrowStyle: 'chip'`, `title` + `accent` (last word/phrase), `primary` (Book a Demo), `secondary` link (Explore Acumeet →), `visual` = a fixed-size composition in `components/visuals/<X>HeroVisual.jsx` (copy 600 wide at y=140; visual column origin = 1440-frame x 700, y 64 → place cards at Figma x−700, y−64; add ~64px bottom room for shadows) and `padBottom` to hit the Figma hero height (02.02: canvas 700 + `padBottom: 36` = 800).
   - **rings** (02.03, 02.06, 02.08, 02.11): `variant: 'rings'`, `secondaryStyle: 'link'`, with `<HeroCarousel slides={…} />` as children (spec "✓ Hero carousel · 02.0X · …", 560px cards).
3. Body blocks, any order per Figma: `Explorer` ("Tabs explorer" + "✓ Explorer · …", 780×520 panels), `FeatureSplit` (= `Split` + 656×480 `VisualPanel` from `{ visual: { tint, pattern, content } }`; products use `size: 'standard'` = 40px title / 17px body), `Stepper` ("✓ Stepper · …"), `CardGrid` ("Benefits" + "✓ Card · …"), `Statement`, `Editorial` ("03 · rows"), `Chapters`.
4. `<Faq items={…} defaultOpen="all" />` (`title` varies: "Frequently asked questions" / "FAQs").
5. `<RelatedRow {...exploreMore([...4 product keys])} />` — title "Explore the platform" → overview. Thumbnails are **positional** in every product row (lilac rings, pink dots, blue waveform, mint hairlines), `relatedProducts()` assigns them. Pass `exploreMore(keys, { eyebrow: 'Keep exploring' })` on pages where Figma shows the overline (02.04, 02.05, 02.09, 02.10, 02.11); 02.02/02.03 hide it.
6. `<CtaBand title lead primary secondary />` (`secondary: null` for a single button, e.g. 02.03).

### Block options added for Products (defaults unchanged)
- `Stepper`: `accentBreak` (default `true`; products use `false` — "Why Meeting Capture **Matters**", "How Acumeet AI Meeting **Transcription Works**"). `body` is now optional: 02.02 uses sentence-length `label`s with no body, the panel then shows number + title only, and below `md` the track collapses to the four numbered dots (labels kept as `sr-only`). Labels are capped at Figma's 260px.
- `Statement`: `tone="subtle"` (#fafafb, 52px ink title + gradient `accent`, 19px `ink-700` body, py-140) and `pattern="waveform"` (full-bleed magenta 4% bars, tiled from `WAVEFORM.panel`). 02.03 "Built for Business and Enterprise Meetings".
- `Faq`: keys include the index (Figma 02.02 repeats a question).
- `LiveDot`: `tone="crimson"` (#e01c47, `assets/images/products/live-dot-crimson-8.svg`).
- `CardGrid` needs nothing new for 2-up benefit cards (`columns: 2`, pattern size `card-wide`). Note: later pages (02.05–02.11) use a mixed bento (846 + 413, then 3×413 cards, specs "✓ Card · …" 846×280 / 413×280) — that layout is **not built yet**; extend `CardGrid` additively (e.g. per-card `span`).

### Shared visuals (`src/components/visuals/`)
Moved from `modules/02-solutions/components/visuals/` (Solutions imports updated): `MeetingCaptureCard`, `TranscriptCard`, `SummaryCard`, `ActionItemsCard`, `KnowledgeSearchCard`, `people.js` (`AVATARS`). Additive props:
- `MeetingCaptureCard`: `title` ("Zoom meetings", "Recent uploads"), `liveLabel` ("Processing"), `idleLabel` ("Transcribed"), `shadow`, `className`. The first row is always the live (pink, red chip) row.
- `TranscriptCard`: `shadow`, `className`; the waveform bar count now follows `width` (56 bars at 440, as before).
Product-only visuals (`modules/03-products/components/visuals/`): `MeetingCaptureHeroVisual` (02.02 hero), `TalkTimeCard` ("UI · Speaker talk time": `duration`, `speakers: [{ name, share, tone }]` — reuse it on Speaker Recognition 02.06).
Also moved (before Products phase 2): `MeetingAnalyticsCard`, `DecisionsCard`, `AtlasChatCard`, `RedactionReview`, `IntegrationsCard`, `AtlasAvatar`, `MeetingRecordCard`. If another product needs a visual from `02-solutions`, move it to `src/components/visuals/` the same way.

---

## Added for AI Redaction (02.07) and Atlas (02.08)
All additive; defaults unchanged.
- `SolutionHero` `variant="centered"` (02.07 hero `46:40051`): light wash with the same two glows, centred white chip eyebrow, 60px title, 700px lead, primary + outlined secondary button, then `visual` full width (`visualWidth`, scaled) over a 360px dot band. Optional `visualCompact` + `visualCompactWidth` (520) replace `visual` below `md` (phones get just the redaction card). Give the `visual` canvas ~60px bottom shadow room (lg bottom padding is 20).
- `NumberedGrid` `size="compact"`: 40px title, 40px gap, py-112 (02.07 "How AI Redaction Works"). Items without `title` render the 16px ink body, as before.
- `Split` `bulletStyle="dot"`: 6px magenta rounded marker, 15px `ink-800` text, 16px between items (02.08 "Ask Questions Naturally").
- `AtlasChatCard` `scope` (default `'All meetings'`): header chip + composer filter label (`'Account'` on the 02.08 split).
- 02.07 uses `CardGrid` `span: 2` with `pattern: { type:'rings', size:'card-wide' }` for the 846px card (no 846×280 asset exists; the 630 rings anchor top-right, so it matches). The dark financial split is `Split tone="dark"` + `VisualPanel` 664×500 `tint:'night'`, `{ type:'dots', size:'chapters' }` and a blue glow, CTA `intent:'ghost-light'`.
- Product-only: `modules/03-products/components/AtlasCapabilityGrid.jsx` (02.08 "What you can do with Atlas", 7 icon cards 4+3, first card in the highlighted blue state; icons `assets/images/products/atlas-*-24x24.svg` / `-29x29.svg`), `components/visuals/RedactionHeroVisual.jsx` (+ `RedactionHeroVisualCompact`). 02.07 imports `RetentionPolicyCard` straight from `modules/02-solutions/components/visuals/`.

---

## Added for 02.09 Meeting Intelligence, 02.10 Knowledge Repository, 02.11 Analytics
Pages: `MeetingIntelligencePage`, `KnowledgeRepositoryPage`, `AnalyticsPage` (+ `content/{meeting-intelligence,knowledge-repository,analytics}.js`). All options below are additive, defaults unchanged.
- `Editorial`: `bullets: string[]` — 6px magenta marker + 15px ink-800 lines after the paragraphs ("Example: …" / "Business value: …"). Product rows use `cta.size: 'lg'` (43px buttons).
- `Split`: `size: 'chapter'` (Chapter-style rows: 38px title, 16px body, wide layout) and `bulletStyle: 'tick'` (green ✓, 15px ink-700, 16px apart — 02.09) | `'none'` (no marker, same text — 02.10 where Figma hides the ✓). `bulletStyle: 'dot'` (added by Atlas) is used on the dark 02.09/02.10 splits with `cta.intent: 'ghost-light'`.
- `SolutionHero` (wash): `titleSize: 46` (02.10, 3-line title in a 580 copy column; pass `copyWidth: 580`, `copyTop: 56`).
- `RelatedRow`: `title={null}` hides the h2 (02.10 shows only the "Keep exploring" overline).
- `Faq`: `waveform={false}` hides the waveform under the title (02.10).
- `CardGrid` bento: span-2 cards use pattern `{ type: 'rings', size: 'card-span' }` (new `RINGS['card-span']`, 846×280, `assets/images/products/card-span-rings-846x280.svg`, anchored right top). Their hover state falls back to the CSS dark dot field (no 846 dark-dot asset in Figma).
- Visuals: `SummaryCard` and `KnowledgeSearchCard` take `shadow` ('mock' | 'float') and `className`. New product visuals: `IntelligenceHeroVisual` (02.09 hero, 665×591), `KnowledgeHeroVisual` (02.10 hero, 660×650).
- 02.10's dark split uses `Split` directly with a 664×500 `VisualPanel` (night, blue glow, `dots/chapters`) since `FeatureSplit` only builds 656×480 panels. 02.11 "Understand Participation and Engagement" is a one-chapter dark `Chapters` (`glow: 'blue'`).

---

## Added for Product overview (02.01)
Page: `modules/03-products/pages/ProductOverviewPage.jsx` + `content/overview.js` (Figma `46:30443`).

### ProductStage (new)
Figma stages "03 · Capture" … "07 · Remember" (`46:31818`, `46:32821`, `46:34526`, `46:34588`). Stage header (light magenta 96px number, 40px title, hairline rule; the hidden "Stage 0N" overline is not rendered) and rows of tiles. Row lg columns follow tile `width` (760/496, 628/628); equal 2-up rows stay 2-up on md, others stack.
`id`, `number`, `title`, `tone: white | muted`, `rows: [[tile]]`.
Tile (`StageTile`, exported): `{ id, width, layout: 'stack' | 'split', reverse?, copyWidth? (split, 520), tint, eyebrow, title, titleSize: 26 | 24 (stack), titleWidth?, body, bodyWidth?, link: { label, to }, visual }`.
- `stack`: visual on top (lg height = `visual.height`), copy bottom-aligned (36/28 padding, 15px body).
- `split`: copy column (34px title, 17px body) beside the visual; `reverse` puts the visual left on lg. Below lg: copy first, then the scaled visual.
- `tint`: `white` (bordered) | `lilac` | `lilac-deep` (#efeafb) | `pink` | `blue` | `mint` | `amber` | `amber-deep` (#fff6de) | `night` (#0b0b12) | `night-card` (#15151f); the last two use light copy.
- `visual` is the Showcase tile canvas (`{ width, height, pattern?, glow?, content, x, y }`); `Showcase.jsx` now also exports `TileVisual`.

### Additive options (defaults unchanged)
- `ActionItemsCard`: `sync={['Jira','Asana','Trello']}` replaces the "Synced to Jira and Asana" footer with Figma's "Sync tasks to" logo chips (`assets/images/products/logo-trello-14x14.svg`).
- Product-only (module) pieces: `components/ProductsOverviewHero.jsx` (centred light hero; full composition from sm, summary + Atlas prompt on phones), `components/ProductsOverviewSections.jsx` (`ProductsIndexNav`, `ProductsWorkspaceSection`, `ProductsPlatformCards`), visuals `ProductsOverviewHeroVisual` (1248×444, exports `ProductsAtlasPrompt`) and `ProductsWorkspaceWindow` (1120×638 "Meeting details" app window).

---

## Added for AI Meeting Summaries (02.04), Action Item Management (02.05) and Speaker Recognition (02.06)
Pages: `modules/03-products/pages/{AiMeetingSummaries,ActionItemManagement,SpeakerRecognition}Page.jsx` + `content/{ai-meeting-summaries,action-item-management,speaker-recognition}.js`. Bento benefit rows (846 + 413, then 3 × 413) use `CardGrid` with `span: 2` on the first card and pattern size `card-wide` (rings anchor top-right, so the 630 asset reads correctly in the 846 card).

### Additive options (defaults unchanged)
- `Stepper`: 5 steps supported — with `steps.length === 5` the md+ track is 5 columns (02.04 "How It Works").
- `Statement`:
  - `tone="white"`: the `subtle` typography (52px ink title + gradient accent, 19px body) on a white section, py-112 (02.05 "02 · Overview" 46:39819).
  - `accent` now also renders on `tone="dark"` / `"light"` (gradient across the heading box, like `AccentTitle`) — 02.04 "Designed for Business **Meetings**". Without `accent` nothing changes.
  - `bodyWidth` (default 780; 02.05 uses 1000), `cta: { label, to }` (blue Button under the copy), `waveform` (260×36 magenta bars, Figma "Waveform · Live · bars 260×36").
- New product visuals (`modules/03-products/components/visuals/`): `SummariesHeroVisual` (02.04 hero, 665×611 canvas, `padBottom: 46`), `ActionItemsHeroVisual` (02.05 hero, 665×722 canvas, `padBottom: 0`; Figma places the Atlas card 24px into the copy gutter at x=676 — here it starts at the column edge so ScaleToFit doesn't clip it).
- 02.06 reuses `TalkTimeCard` (hero carousel 560, explorer 480, stepper 440), `TranscriptCard`, `MeetingAnalyticsCard` (`width: 560, barWidth: 42, barPitch: 52`), `SummaryCard`, `DecisionsCard`.

---

## Industries (04.00–04.16)
Figma section "04 · Industries" (`48:287758`). Module: `src/modules/04-industries/`. Routes: `ROUTES.industry.<key>` (slugs = mega menu). All options below are additive; defaults unchanged.

### Pages
- `pages/IndustriesOverviewPage.jsx` (04.00) and `pages/FinancialServicesPage.jsx` (04.01) — bespoke.
- `pages/IndustryDetailPage.jsx` — the 11 FS sub-pages (04.02–04.12): breadcrumb → hero (+ `carousel`) → `explorer` → optional `split` / `statement` / `note` / `editorial` → `related` → `cta`.
- `pages/IndustrySectionsPage.jsx` — 04.13–04.16: hero → `sections: [{ type, ...props }]` (`split`, `rawSplit`, `editorial`, `statement`, `cards`, `explorer`, `note`) → related → CTA.
- `index.js` wires both shared pages through `withContent(page)(content)` so each page still loads its own chunk.

### Content builders (`content/detail.js`, `content/industries.js`)
- Cards: `decisions(date, decided[], risk, topics[], width)`, `actions(open, [[title, due]], { width, shadow })`, `summary(title, [q, s, e], insights[], opts)`, `search(query, [[meeting, date, excerpt]], opts)`, `capture(date, [[title, meta]], opts)`, `audit([[time, action, actor]], opts)`, `appWindow(width, node)`, `floatChip()`.
- `heroCanvas(height, [[x, y, node]], width)` → `components/visuals/HeroCanvas.jsx` (wash heroes: origin 1440-frame x 700/680, y 64; centred heroes: x 80, y = copy bottom + 64, width 1280).
- `windowHero({...})` = Banking-style 630 wash hero (app window + 360 action items + float chip). Those heroes are the only Industries heroes with a gradient title accent.
- `explorerItems([...])` adds the positional explorer panels (lilac dots, pink rings, blue hairlines, mint waveform).
- `followSplit(title, body, card)` (pink rings panel, Book a Demo + "Contact Our Team →"), `disclaimer(title, accent, body)` (subtle waveform `Statement`).
- `exploreIndustries(keys, { eyebrow })` — check the Figma "Explore more" height: 607 = "Keep exploring" shown, 580 = hidden. `industryCta(title)` (blank sub-line, one button) for 04.00–04.12; `industryCtaFull(title)` (sub-line + two buttons) for 04.13–04.16.
- Breadcrumbs: `fsBreadcrumb(label)` / `industryBreadcrumb(label)` → "Home / Industries Overview / …". Figma's 04.01 breadcrumb instance still holds placeholder text ("Solutions overview / Protect").

### New / extended blocks
- `LinkCardGrid` (new) — Figma "Directory · …" + "Link card" (`46:5594`): mono overline + 44px title, 3-up 413×320 cards (pink 112px tile with five 25% magenta rings `assets/images/industries/link-card-ring-*.svg`, 40px mono number, title, description, "Explore →"). `LinkCard` exported.
- `Explorer`: `item.link: { label = 'Explore', to }` — "Explore →" under the active tab body (04.00).
- `SolutionHero` (wash): `leadWidth` (default 560; Industries 540).
- `CardGrid`: `lead` under the title (04.01 workflows).
- `Split`, `Statement`, `Editorial`: `secondary: { label, to }` — "Label →" link beside the CTA.
- Module components: `InfoNote` (34px title in a 440 column + 17px copy + two outlined buttons, px-120, py-112) and `HeroCanvas`.

---

## Use Cases (05.00–05.13)
Figma section "05 · Use Cases" (`48:305346`). Module: `src/modules/05-use-cases/`. Routes: `ROUTES.useCase.<key>` (slugs = mega menu; `ROUTES.useCases` is still the overview string). All block options below are additive; defaults unchanged.

### Pages
- `pages/UseCasesOverviewPage.jsx` (05.00) — centred hero → `UseCaseGrid` ("Choose Your Use Case", module component: 13 tinted 410px cards cycling pink/blue/mint/amber/grey/lilac, each a link) → explorer → "Connect" split (mint panel with centred 30px-pitch rings, drawn as a CSS gradient) → `Editorial` → split → `LinkCardGrid` directory → FAQ → related (no overline) → CTA. The hidden "Index · Choose Your Use Case" frame is not built.
- `pages/UseCaseDetailPage.jsx` — all 13 detail pages: breadcrumb → hero (+ `carousel`) → `challenge` → `explorer` → `workflows` → `outcomes` → optional `note` (05.01–05.05) → `faq` → `related` → `cta`. One content file per page in `content/<slug>.js`.

### Content builders (`content/detail.js`, `content/use-cases.js`)
- Heroes:
  - `ringsHero({ eyebrow, title, lead, secondary, slides: [[tab, 560px card]] })` — dark rings + HeroCarousel (05.01, 05.05, 05.08, 05.09, 05.11).
  - `windowHero({ …, window: 500px card, overlay: 360px card, overlayY, height })` — wash hero with an app window at 1440-frame (760, 100), the overlapping card at x 700 / Figma y `overlayY`, and the "Live in your workspace" chip (05.02, 05.04, 05.06, 05.12).
  - `stackedHero({ …, titleSize, back: 440px card, front: 400px card, frontY, height })` — hairlines wash hero, outlined secondary button, no accent (05.03, 05.10).
  - `centeredHero({ …, height, copyHeight, top, gap, items: [[x, y, node, figmaRotation]], compact })` — centred hero over a full-bleed hatch with tilted cards (05.00, 05.07, 05.13). Figma rotations are counter-clockwise, so the builder negates them for CSS.
- `explorer(title, accent, [[tab, body, visual]])` — positional panels: lilac dots, pink rings, blue hairlines, mint waveform, amber dots (5th tab).
- `workflows(title, accent, [[title, body]])` — positional cards: lilac rings, pink dots, blue hairlines, mint rings, amber dots, grey hairlines. Five cards = bento (first card `span: 2`), six = 3 × 2.
- `challenge(title, paragraphs, card)` (pink rings, visual left), `outcomes(title, lines, card)` (blue dots, visual right), `note(title, body, card)` (lilac hairlines, visual left), `faq([[q, a]])` (all open).
- `exploreUseCases(keys, { eyebrow })` (cards read "Use Cases"; positional thumbnails like Products), `ucBreadcrumb(label)`, `ucCta(title, lead)` (Book a Demo + Talk to Our Team). Helpers don't start with `use…` so ESLint doesn't treat them as hooks.

### Shared changes
- `src/components/visuals/mocks.js` (new) — the "UI · …" card builders, moved out of Industries `content/detail.js` (which re-exports them) and extended: `decisions`, `actions`, `summary`, `search`, `capture`, `audit`, `analytics(range, [sentiment, engagement, quality], { width })` (bar size follows width 350/440/560), `redaction(count, sentence, rows)` (`[TOKEN]` parts become chips), `atlas({…})`, `access(members)`, `retention(rules)`, `integrations(names, connected)`, `appWindow`, `floatChip`, `heroCanvas`.
- `src/components/visuals/HeroCanvas.jsx` (moved from Industries) — items take an optional `rotate` (CSS degrees, top-left pivot).
- `SolutionHero` `variant="centered"`: `pattern: 'hairlines'` (full-bleed hatch/0B0B12/0.05), `titleSize: 62`, `leadSize: 19`, `copyWidth` (960), `secondaryStyle: 'link'`, `visualGap` (lg gap between copy and visual, 64).
- Pattern assets: `RINGS.workflow` / `RINGS['workflow-span']` (413×280 / 846×280, the 40px-pitch `rings/9E0059/0.35` field cropped at Figma's offsets; `assets/images/use-cases/`). Use them for these cards; the older `card` / `card-span` rings have a 24px pitch.
- `DecisionsCard`, `WorkspaceAccessCard`, `RetentionPolicyCard`: optional `shadow` (`'float'` in heroes) and `className`. `IntegrationsCard`: `Outlook` logo.

---

## Security (06.01–06.07)
Figma section "06 · Security" (`48:325158`). Module: `src/modules/06-security/`. Routes: `ROUTES.securityPage.<key>` (slugs = mega menu; `ROUTES.security` is still the overview string). All block options below are additive; defaults unchanged.

### Page
- `pages/SecurityPage.jsx` renders all seven pages: breadcrumb → hero (+ `carousel`) → `sections: [{ type, ...props }]` → FAQ → optional related row → CTA. Section types: `info` (InfoNote), `split` (FeatureSplit), `explorer`, `cards` (CardGrid), `chapters`, `directory` (LinkCardGrid).
- Each page has its own content file in `content/<slug>.js`. The builders are in `content/security.js`:
  - `info(title, body)`
  - `split(props)`
  - `explorer({ eyebrow?, title, accent, lead?, titleSize? }, [[tab, body, visual]])` — 48px topic title by default. Panels are positional: lilac dots, pink rings, blue hairlines, mint waveform, amber dots, grey rings.
  - `cards(head, [[title, body]])` — 3 cards = 413px row, 4 cards = 2 × 2 with `card-wide` patterns. Tints are lilac rings, pink dots, blue hairlines, mint rings.
  - `chapters([[tab, title, body | { checks }, visual]])`
  - `faq`, `exploreSecurity(keys)`, `secBreadcrumb`, `secCta(title)` (blank sub-line + "Book a demo")
  - `HERO_ACTIONS` ("Discuss your security requirements" → contact sales, "Contact the security team →" → `/support/security`).
- Heroes use the shared presets: rings + carousel (06.01, 06.04, 06.07), window (06.02, 06.05), centred tilted (06.03, 06.06).

### Shared changes
- `src/components/blocks/heroPresets.js` (new) — `ringsHero`, `windowHero`, `stackedHero` and `centeredHero` moved out of Use Cases `content/detail.js` (which re-exports them). All of them now take an optional `primary` (default "Book a Demo").
- `src/components/blocks/SectionHeading.jsx` (new) — overline + accent title + lead. Explorer and CardGrid use it.
  - `titleSize`: `'section'` (52, default), `48` (topic heads, 860 wide), or `44` (intro head: 748 wide, 17px/1.55 lead, 16px padding — 06.05 / 06.06).
- `Explorer`: `eyebrow`, `lead`, `titleSize`.
- `CardGrid`: `eyebrow`, `titleSize`.
- `InfoNote` moved from Industries to `src/components/blocks/`. `ctas` is now optional, and it takes `tone: 'white' | 'subtle'`.
- `mocks.js`: `keys([keyAction, storageAction], { width, shadow })` ("UI · Keys & storage"); `CONNECTED` (the integrations list). `KeysStorageCard` takes `shadow` and `className`.
- Homepage Security tiles now link to the matching Security pages. The old `/security#…` anchors don't exist on the overview.

---

## Trust Center (07.01, 07.03, 07.05–07.11, 07.13)
Figma section "07 · Trust Center" (`48:336975`). Module: `src/modules/07-trust-center/`. Routes: `ROUTES.trustPage.<key>` (slugs = mega menu; `ROUTES.trustCenter` is still the overview string).
- Not built:
  - 07.02 Security, 07.04 Compliance and 07.12 Compliance Documentation. Figma marks them as "shared" entries that point at 06.01 / 08.01 / 08.11.
  - "03a · Trust Center", an earlier overview draft.

### Page
- `pages/TrustCenterPage.jsx` is a `BlockPage` that adds three Trust Center section types:
  - `principles` — `components/PrinciplesIndex.jsx`. Figma "Index · Control comes first": a filter of pills and 6 white principle cards. Badges and rings tint in Figma order (`assets/images/trust-center/principle-rings-*-413x110.svg`). Figma doesn't assign cards to filters, so the content file sets `group` per card.
  - `lifecycle` — `components/LifecycleStrip.jsx`. Figma "Index · Control data from collection to deletion": a dark numbered strip; `highlight` marks the magenta stage.
  - `docs` — `components/DocCardGrid.jsx`. Figma "Checklist": document / provider cards in `rows` (e.g. `[4, 3]`). The first card is featured. Each card has its own colour and a `DocIcon` (inline duotone SVG: file-text, user-check, cloud, sparkle, pulse, shield-check).
- Builders in `content/trust-center.js`:
  - `statement(title, accent, { eyebrow = 'Overview', paragraphs })` — subtle waveform `Statement`
  - `explorer(head, items)`
  - `cards(head, list)` — 413px benefit cards
  - `docs(head, [[title, '#hex', icon]])`
  - `split(title, bullet, visual, reverse)` — dot bullet
  - `chapters`, `faq(items, title?)`
  - `exploreTrust(keys)`, `tcBreadcrumb`, `tcCta(title, lead, primaryLabel)`
  - Links: `REQUEST(label)` → contact sales, `BOOK_DEMO`, `VISIT_TRUST`
- Shared mock data (members, the supplier Atlas card, default retention rows) lives in `content/shared.js`.

### Shared changes
- `src/components/blocks/BlockPage.jsx` (new) is the data-driven page used by Security and Trust Center.
  - Order: hero (+ carousel) → `sections` → optional FAQ / related → CTA.
  - Base section types: info, explorer, cards, chapters, split, directory, statement. Modules add their own types via `sections`.
  - `SecurityPage` is now a thin wrapper around it.
- `SectionHeading`: `leadSize` (`'lg'` 18px | `'md'` 17px/1.55). `CardGrid` heads can use `titleSize: 44` (Trust Center 07.01 "Access limited…").
- `CardGrid` keys cards by index + title (07.13 has three identical "[Date]" placeholders).
- `mocks.js`: `transcript([[name, time, text]], { width })`.

## Compliance (08.01–08.11)
Figma section "08 · Compliance" (`48:369038`). Module: `src/modules/08-compliance/`. Routes: `ROUTES.compliancePage.<key>` (slugs = mega menu; `ROUTES.compliance` is still the overview string).
- Not built: "03b · Compliance", an earlier draft.

### Page
- `pages/CompliancePage.jsx` is a `BlockPage` that adds one Compliance section type:
  - `infoCards` — `components/InfoCards.jsx`. Figma "02 · Clear commitments" / "08 · Responsible handling" / "11 · Find the information": a 12px magenta mono overline, 40px title and 17px paragraphs, then grey numbered cards in 3 columns (or `columns: 2`) and an optional outlined button.
- `components/ComplianceBadge.jsx`: the "Badge / GDPR" and "Badge / NDPR" shields, drawn as inline SVG with live text (`region`, `label`).
- Builders in `content/compliance.js`:
  - `split({ eyebrow?, title, body[], bullet: [lead, text], cta, secondary?, visual, reverse })` — mono overline and a dot bullet with a bold lead
  - `panel(tint, patternType, content)` — 656×480 split panel
  - `infoCards(head, [[title, body]])`, `explorer(head, items)`, `statement(title, accent)`, `faq(items)`
  - `exploreCompliance(keys)`, `RELATED` (the usual four), `compBreadcrumb`, `DEFAULT_CTA`, `compCta(title, lead, primary, secondary)`
  - Links: `CONTACT(label)` → contact sales, `REQUEST_DOCS`, `VISIT_TRUST`, `BOOK_DEMO`, `PRIVACY_NOTICE`
- `content/shared.js` holds the repeated mock data: the compliance tasks, NIN redaction sentence, summary insights, the two card lists and the float hero cards. It re-exports `members`, `POLICY_ROWS` and `supplierAtlas` from the Trust Center.

### Shared changes
- `SectionHeading`: `lead` may be an array of paragraphs (08.01 "Responsible AI" explorer head).
- `mocks.js`: `documents([[title, 'public' | 'request']], { width })` → new `src/components/visuals/DocumentsCard.jsx` (Figma "UI · Documents").

## Integrations (09.01–09.10)
Figma section "09 · Integrations" (`48:383882`). Module: `src/modules/09-integrations/`. Routes: `ROUTES.integrationsPage.<key>` (slugs = mega menu; `ROUTES.integrations` is still the overview string).

### Page
- `pages/IntegrationsPage.jsx` is a `BlockPage` that adds one Integrations section type:
  - `index` — `components/IntegrationIndex.jsx`. Figma "Index · Find Your Integration": a 48px heading, then 3-up 416×150 link tiles, each with a tinted icon mark, a coloured "↗" and corner rings. The icons are in `assets/images/integrations/ic-*.svg`. `id` is the anchor for the hero's "Explore integrations" button.
- Builders in `content/integrations.js`:
  - `splits([{ eyebrow?, title, body[], cta, visual }])` — alternating rows. The panels cycle pink rings → blue dots → lilac hairlines → mint waveform → amber rings. Figma's "supporting" lines are plain 17px paragraphs, so they go in `body`.
  - `intCta(title)` — headline, an empty sub-line (non-breaking space) and "Book a demo"
  - `exploreIntegrations(keys)`, `RELATED`, `intBreadcrumb`, `CONTACT(label)` → contact sales
- `content/shared.js` holds the repeated task lists (`po`, `vendor`, `secTasks`), the "vendor approval workflow" search and the summary insights.

### Shared changes
- `RelatedRow`: two or three cards fill the row on desktop (`lg:grid-cols-2` / `lg:grid-cols-3`).
- `ActionItemsCard` / `actions(…, { footer: false })` drops the "Synced to Jira and Asana" footer (hero carousels).
- `mocks.js`: `CRM_CONNECTED` (the 8-chip list). `integrations(…, { muted })` greys Salesforce / HubSpot by default.

## Deployment (10.01–10.10)
Figma section "10 · Deployment" (`48:393382`). Module: `src/modules/10-deployment/`. Routes: `ROUTES.deploymentPage.<key>` (`ROUTES.deployment` is still the overview string). 10.07 Data Residency and 10.11 Implementation are Figma "shared" entries: their keys point at the Trust Center page (07.06) and `/enterprise/implementation` (11.08), and they have no route here.

### Page
- `pages/DeploymentPage.jsx` is a `BlockPage` that adds `stepper` (the shared `Stepper` block) as a section type.
- The sub-pages share one template: hero → dark chapters → FAQ (all open) → "Explore Deployment" → CTA. Heroes: centred (10.01, 10.04, 10.08), rings + carousel (10.02, 10.05, 10.09), window (10.03, 10.06, 10.10).
- `components/DeploymentOptionsCard.jsx` — Figma "UI · Deployment options" (350 wide): a radio list of the five approaches with one highlighted. The 10.01 explorer shows it with the tab's option selected (`options(i)`). Icons are in `assets/images/deployment/`.
- Builders in `content/deployment.js`: `chapters`, `faq`, `depCta(title)`, `exploreDeployment(keys)`, `RELATED`, `depBreadcrumb`, `CONTACT(label)` → contact sales, `options(selected)`.
- `content/shared.js`: deployment task lists (`tasks`, `rollout`) and the "Key value points" summary (`keySummary`).

## Enterprise (11.01–11.18)
Figma section "11 · Enterprise" (`49:67845`). Module: `src/modules/11-enterprise/`. Routes: `ROUTES.enterprisePage.<key>`; the PoC pages sit under `/enterprise/proof-of-concept/…`. 11.08 Implementation is also Deployment's "Enterprise Implementation" entry.

### Page
- `pages/EnterprisePage.jsx` is a `BlockPage` that puts `EnterpriseTabs` under the breadcrumb (`content.tab = { active, label }`; 11.08 has no tabs). `BlockPage` gained a `subnav` prop for this.
- Enterprise section types:
  - `checklist` — `components/Checklist.jsx`. A 44px head, then 4, 5 (3 + 2) or 6 (3 + 3) cards with a duotone icon tile, a mono number and a label. The first card is highlighted, and the highlight follows hover / focus.
  - `index` — `components/EnterpriseIndex.jsx`. `tiles`: 4-up tiles with an icon or integration logo and corner rings; tiles with `to` add "↗". `steps`: the four "STEP n" cards on 11.16.
  - `intro`, `journey`, `spotlight` — the 11.01 blocks: `OverviewIntro`, `EnterpriseJourney` (every page grouped by stage) and `PocSpotlight`.
  - `stepper` — the shared `Stepper` (11.08).
- `components/EnterpriseTabs.jsx` — the dark "ENTERPRISE / page" pill and a scrolling, grouped tab track with prev / next buttons. The active tab scrolls into view. PoC sub-pages highlight "Proof of concept".
- `components/DuoIcon.jsx` — recolours the mega-menu duotone icons at runtime: the tone layer takes `tone` and the line layer is ink. It also covers `deployment/ic-*.svg` and `enterprise/ic-*.svg` (funnel-simple).
- Builders in `content/enterprise.js`: the `ENTERPRISE` catalogue and `GROUPS`, `statement`, `checklist`, `exploreEnterprise`, `RELATED`, `entBreadcrumb(label, { poc })`, and links (`DEMO`, `REQUEST_POC`, `TALK`, `TRUST`, `CONTACT`).
- `content/shared.js`: `entPage(key, { hero: 'centered' | 'rings' | 'window', … })` returns tab + hero (+ carousel) + a CTA band that repeats the hero. It reuses the Deployment task / summary builders.

### Shared changes
- `LinkCardGrid`: `columns: 4` and `tone: 'white'` (11.01 "Related pages").
- `BlockPage`: `subnav` slot.

## Compare (12.01–12.08)
Figma section "12 · Compare" (`49:115722`). Module: `src/modules/12-compare/`. Routes: `ROUTES.comparePage.<key>`, with slugs that match the footer. 12.01 Why Acumeet lives at `/why-acumeet` (the mega-menu link) and 12.08 Competitive Comparison is the `/compare` overview.

### Page
- `pages/ComparePage.jsx` is a `BlockPage` that adds:
  - `table` — `components/CompareTable.jsx`. Header with the competitor mark and a blue "Acumeet" column, then criterion rows with the Acumeet column on a pale blue wash. Below md it scrolls sideways.
  - `vs` — `components/VsBanner.jsx`. Notched Acumeet and competitor cards meeting at a "vs" disc on a pink wash. On phones they stack as plain outlined cards.
  - `checklist` — the Enterprise `Checklist`, extended with `layout: 'questions'` (2-up, odd last card full width, no highlight), an 8-tile 4 + 4 grid, `item.to` links and `item.image` app marks.
  - `logos` / `integrations` — the home `CustomerLogos` and `IntegrationsSection`. The integrations band gets an 800px minimum height through its new `className` prop.
- Builders in `content/compare.js`:
  - the `COMPARE` catalogue (tile label, VS name, app mark)
  - `darkHero` / `lightHero` (copy-only heroes, Figma height via `minHeight`)
  - `statement(title, accent, body, 'subtle' | 'dark')`, `vs(key)`, `table(key, …)`
  - `COMPARE_TILES` ("Compare Acumeet"), `whyChoose([…4 visuals])`, `fitSplit` (dot-bullet rows), `exploreCompare`, `RELATED`
- App marks are in `assets/images/compare/mark-*.png` (4× exports of the Figma "Competitor mark" tiles).

### Shared changes
- `SolutionHero`: the `rings` and `centered` variants take `minHeight` (lg). A rings hero with no carousel gets bottom padding on small screens.
- `IntegrationsSection` (home): optional `className`.
