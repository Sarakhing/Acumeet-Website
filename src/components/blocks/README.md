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
- Product mock-ups live in `modules/02-solutions/components/visuals/` (`RedactionReview`, `AuditLogCard`, `WorkspaceAccessCard`, `RetentionPolicyCard`, `KeysStorageCard`, `RolePermissionsWindow`, `EncryptionWindow`, `AuditTimelineWindow`, `ProtectHeroVisual`). Add new ones there and keep them fixed-size.
- Assets: `src/assets/images/solutions/`. Figma patterns, icons and avatars are named `<use>-<w>x<h>.svg`.

### Not yet built (seen on other Solutions pages)
- Control "02": a 2×2 icon-card grid with numbers.
- Overview showcase.
- EMI pillars and audience sections.
- Connect "Meeting types" scroll area.
- Understand audience cards (`46:25057` …).
- Mock-ups for Chapters and Stepper (transcript, action items, integrations, Atlas chat, search). Their Figma specs are the `✓` frames listed in the section metadata.
