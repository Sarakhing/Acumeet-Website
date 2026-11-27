import { ROUTES } from '@/constants/routes';
import { appWindow, actions, decisions, floatChip, heroCanvas } from '@/components/visuals/mocks';
import { INDUSTRIES } from './industries';

/**
 * Builders shared by the Industries detail pages (FS sub-pages 04.02–04.12 and
 * 04.13–04.16). The generic "UI · …" card builders live in
 * src/components/visuals/mocks.js (shared with Use Cases) and are re-exported here.
 */
export {
  actions,
  appWindow,
  audit,
  capture,
  decisions,
  floatChip,
  heroCanvas,
  search,
  summary,
} from '@/components/visuals/mocks';

/* Industries explorer panels are positional: lilac dots, pink rings, blue hairlines, mint waveform. */
const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
];

/** Explorer items [{ title, body, visual }] → with positional tint/pattern. */
export const explorerItems = (items) => items.map((it, i) => ({ ...PANELS[i % PANELS.length], ...it }));

/** Breadcrumb for an FS sub-page: Home / Industries / Financial Services / {page}. */
export const fsBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Industries overview', to: INDUSTRIES.overview.to },
  { label: 'Financial services', to: INDUSTRIES.financialServices.to },
  { label },
];

/** Breadcrumb for a top-level industry page: Home / Industries / {page}. */
export const industryBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Industries overview', to: INDUSTRIES.overview.to },
  { label },
];

/** The two outlined buttons under every info note. */
export const NOTE_CTAS = [
  { label: 'Book a demo', to: ROUTES.bookDemo },
  { label: 'Contact our team', to: ROUTES.contactSales },
];

/**
 * Follow-through split ("Make Follow-Through Easier", 704 tall): pink rings panel
 * on the left with an action-items card, title + body, Book a Demo + "Contact our team →".
 */
export const followSplit = (title, body, content) => ({
  size: 'compact',
  reverse: true,
  title,
  body: [body],
  cta: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: { label: 'Contact our team', to: ROUTES.contactSales },
  visual: { tint: 'pink', pattern: { type: 'rings', size: 'panel' }, content },
});

/** Subtle waveform statement (Credit Committees "A Documentation Aid…", 537 tall): Book a Demo + "Contact our team →". */
export const disclaimer = (title, accent, body) => ({
  tone: 'subtle',
  pattern: 'waveform',
  title,
  accent,
  paragraphs: [body],
  cta: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: { label: 'Contact our team', to: ROUTES.contactSales },
});

/**
 * Banking-style wash hero (630 tall, dot grid): app window with "Decisions & topics"
 * (500 card) + overlapping 360 action-items card + "Live in your workspace" chip.
 * windowHero({ eyebrow, title, accent, lead, decisions: [date, decided[], risk, topics[]], actions: [open, tasks] })
 */
export const windowHero = ({ eyebrow, title, accent, lead, decisions: d, actions: [open, tasks], ...rest }) => ({
  eyebrow,
  eyebrowStyle: 'chip',
  title,
  accent,
  lead,
  visual: heroCanvas(553, [
    [60, 36, appWindow(600, decisions(d[0], d[1], d[2], d[3], 500))],
    [0, 213, actions(open, tasks, { width: 360, shadow: 'float' })],
    [480, 0, floatChip()],
  ]),
  visualWidth: 660,
  padBottom: 13,
  ...rest,
});
