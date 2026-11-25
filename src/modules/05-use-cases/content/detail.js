export { centeredHero, ringsHero, stackedHero, windowHero } from '@/components/blocks/heroPresets';

/**
 * Builders for the Use Cases detail template (05.01–05.13). Every page is:
 * hero → challenge split → "How Acumeet Helps" explorer → workflow cards →
 * outcomes split → optional note split → FAQ → "Explore Use Cases" → CTA.
 * Card builders (decisions, actions, …) come from src/components/visuals/mocks.js.
 */

/* Integrations listed in every "UI · Connect" card (explorer tab 5 on 05.06 / 05.09). */
export { CONNECTED } from '@/components/visuals/mocks';

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
