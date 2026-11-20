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
