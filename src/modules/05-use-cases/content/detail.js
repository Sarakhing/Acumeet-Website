import { ROUTES } from '@/constants/routes';
import { appWindow, floatChip, heroCanvas } from '@/components/visuals/mocks';

/**
 * Builders for the Use Cases detail template (05.01–05.13). Every page is:
 * hero → challenge split → "How Acumeet Helps" explorer → workflow cards →
 * outcomes split → optional note split → FAQ → "Explore Use Cases" → CTA.
 * Card builders (decisions, actions, …) come from src/components/visuals/mocks.js.
 */

const DEMO = { label: 'Book a Demo', to: ROUTES.bookDemo };

/** Integrations listed in every Use Cases "UI · Connect" card (explorer tab 5 on 05.06 / 05.09; "6 connected"). */
export const CONNECTED = ['Microsoft Teams', 'Zoom', 'Google Meet', 'Slack', 'Outlook', 'Jira', 'Asana'];

/* ------------------------------------------------------------------ */
/* Heroes                                                              */
/* ------------------------------------------------------------------ */

/**
 * Dark rings hero + "✓ Hero carousel" (05.01, 05.05, 05.08, 05.09, 05.11).
 * slides: [[tab label, 560px card], …] — HeroCarousel draws the 820px app window.
 */
export const ringsHero = ({ eyebrow, title, lead, secondary, slides }) => ({
  hero: { variant: 'rings', secondaryStyle: 'link', eyebrow, title, lead, primary: DEMO, secondary },
  carousel: slides.map(([label, content]) => ({ label, content })),
});

/**
 * Light wash hero with an app window (05.02, 05.04, 05.06, 05.12): a 500px card in a
 * 600px window at 1440-frame (760, 100), a 360px card overlapping its lower left at
 * x 700 (`overlayY` = Figma y), and the "Live in your workspace" chip at (1180, 64).
 * `height` = Figma hero height; the canvas takes the remaining column height (24px bottom pad).
 */
export const windowHero = ({ eyebrow, title, accent, lead, secondary, window, overlay, overlayY, height }) => ({
  hero: {
    eyebrow,
    eyebrowStyle: 'chip',
    title,
    accent,
    lead,
    primary: DEMO,
    secondary,
    visual: heroCanvas(height - 88, [
      [60, 36, appWindow(600, window)],
      [0, overlayY - 64, overlay],
      [480, 0, floatChip()],
    ]),
    visualWidth: 660,
    padBottom: 24,
  },
});

/**
 * Light wash hero with two stacked cards over hairlines (05.03, 05.10): a 440px card at
 * 1440-frame (820, 110) and a 400px card at (940, `frontY`). Outlined secondary button,
 * no accent, 580px copy column with a 540px lead.
 */
export const stackedHero = ({ eyebrow, title, titleSize, lead, secondary, back, front, frontY, height }) => ({
  hero: {
    eyebrow,
    eyebrowStyle: 'chip',
    title,
    titleSize,
    lead,
    primary: DEMO,
    secondary,
    secondaryStyle: 'button',
    pattern: 'hairlines',
    copyTop: 56,
    copyWidth: 580,
    leadWidth: 540,
    visual: heroCanvas(height - 88, [
      [120, 46, back],
      [240, frontY - 64, front],
    ]),
    visualWidth: 660,
    padBottom: 24,
  },
});

/**
 * Centred light hero over a full-bleed hatch (05.00, 05.07, 05.13): chip, 62px title,
 * 19px lead, Book a Demo + arrow link, then a 1280-wide card composition.
 * items: [[1440-frame x, 1440-frame y, node, figmaRotation?], …]. The canvas origin is the
 * topmost card (`top` = its Figma y); `gap` = top − copy bottom. Figma rotations are
 * counter-clockwise, so they are negated for CSS. `compact` = the card shown on phones.
 */
export const centeredHero = ({ eyebrow, title, accent, lead, secondary, top, gap, height, copyHeight, items, compact }) => ({
  hero: {
    variant: 'centered',
    pattern: 'hairlines',
    titleSize: 62,
    leadSize: 19,
    copyWidth: 980,
    secondaryStyle: 'link',
    visualGap: gap,
    eyebrow,
    title,
    accent,
    lead,
    primary: DEMO,
    secondary,
    // 96 top padding + copy + gap + canvas + 20 bottom padding = Figma hero height
    visual: heroCanvas(
      height - 116 - copyHeight - gap,
      items.map(([x, y, node, rot]) => [x - 80, y - top, node, rot ? -rot : undefined]),
      1280,
    ),
    visualWidth: 1280,
    visualCompact: compact,
    visualCompactWidth: 440,
  },
});

/* ------------------------------------------------------------------ */
/* Body sections                                                       */
/* ------------------------------------------------------------------ */

/* Explorer panels are positional: lilac dots, pink rings, blue hairlines, mint waveform, amber dots. */
const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
  { tint: 'amber', pattern: { type: 'dots', size: 'explorer' } },
];

/** "How Acumeet Helps" explorer: explorer(title, accent, [[tab title, body, visual], …]). */
export const explorer = (title, accent, items) => ({
  title,
  accent,
  items: items.map(([t, body, visual], i) => ({ ...PANELS[i % PANELS.length], title: t, body, visual })),
});

/* Workflow cards are positional: lilac rings, pink dots, blue hairlines, mint rings, amber dots, grey hairlines. */
const CARDS = [
  ['lilac', 'rings'],
  ['pink', 'dots'],
  ['blue', 'hairlines'],
  ['mint', 'rings'],
  ['amber', 'dots'],
  ['grey', 'hairlines'],
];

/**
 * "Key Workflows" (Figma "Benefits"): workflows(title, accent, [[title, body], …]).
 * Five cards = bento (846 + 413, then 3 × 413); six cards = 3 × 2.
 */
export const workflows = (title, accent, cards) => ({
  title,
  accent,
  accentBreak: false,
  cards: cards.map(([t, body], i) => {
    const [tint, type] = CARDS[i % CARDS.length];
    const span = cards.length === 5 && i === 0;
    const size = type === 'rings' ? (span ? 'workflow-span' : 'workflow') : 'card';
    return { title: t, body, tint, pattern: { type, size }, ...(span ? { span: 2 } : null) };
  }),
});

/** "The Challenge: …" split — pink rings panel on the left, intro paragraph + three plain lines. */
export const challenge = (title, paragraphs, content) => ({
  size: 'standard',
  reverse: true,
  title,
  body: paragraphs,
  visual: { tint: 'pink', pattern: { type: 'rings', size: 'panel' }, content },
});

/** "Business Outcomes" split — four plain lines, blue dot-grid panel on the right. */
export const outcomes = (title, lines, content) => ({
  size: 'standard',
  title,
  body: lines,
  visual: { tint: 'blue', pattern: { type: 'dots', size: 'explorer' }, content },
});

/** Closing note split ("Support for Sensitive Workflows", 05.01–05.05) — lilac hairlines panel on the left. */
export const note = (title, body, content) => ({
  size: 'standard',
  reverse: true,
  title,
  body: [body],
  visual: { tint: 'lilac', pattern: { type: 'hairlines', size: 'explorer' }, content },
});

/** FAQ items from [[question, answer], …]. */
export const faq = (items) => ({ items: items.map(([q, a]) => ({ q, a })), defaultOpen: 'all' });
