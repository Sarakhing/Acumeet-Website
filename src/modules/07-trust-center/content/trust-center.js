import { ROUTES } from '@/constants/routes';

const T = ROUTES.trustPage;

/**
 * Trust Center catalogue (Figma "07 · Trust Center", 48:336975). `tagline` = the
 * Directory "Link card" line. 07.02 Security, 07.04 Compliance and 07.12 Compliance
 * Documentation are "shared" entries in Figma (they reuse 06.01 / 08.01 / 08.11) and
 * have no page of their own here.
 */
export const TRUST = {
  overview: { title: 'Trust Center Overview', to: T.overview, figma: '48:336988' },
  privacy: {
    title: 'Privacy',
    tagline: 'Access only what the meeting needs',
    to: T.privacy,
    figma: '48:337641',
  },
  dataProcessing: {
    title: 'Data Processing',
    tagline: 'How meeting data is processed',
    to: T.dataProcessing,
    figma: '48:337726',
  },
  dataResidency: {
    title: 'Data Residency',
    tagline: 'Make data location a defined deployment requirement.',
    to: T.dataResidency,
    figma: '48:338502',
  },
  subprocessors: {
    title: 'Subprocessors',
    tagline: 'Know who helps deliver the service',
    to: T.subprocessors,
    figma: '48:337849',
  },
  securityArchitecture: {
    title: 'Security Architecture',
    tagline: 'How Acumeet is built to protect meeting data',
    to: T.securityArchitecture,
    figma: '48:337990',
  },
  policies: {
    title: 'Policies',
    tagline: 'Policies for security, legal and procurement teams',
    to: T.policies,
    figma: '48:338077',
  },
  certifications: {
    title: 'Certifications',
    tagline: 'Certifications and independent assurance',
    to: T.certifications,
    figma: '48:337477',
  },
  securityDocumentation: {
    title: 'Security Documentation',
    tagline: 'Security documentation for your review',
    to: T.securityDocumentation,
    figma: '48:338251',
  },
  trustUpdates: {
    title: 'Trust Updates',
    tagline: 'Trust updates',
    to: T.trustUpdates,
    figma: '48:338442',
  },
};

export const TRUST_KEYS = Object.keys(TRUST).filter((k) => k !== 'overview');

/** Hero / CTA links. Every "Request …" action goes to the contact form. */
export const REQUEST = (label) => ({ label, to: ROUTES.contactSales });
export const BOOK_DEMO = { label: 'Book a demo', to: ROUTES.bookDemo };
export const VISIT_TRUST = { label: 'Visit the Trust Center', to: T.overview };

/** Home / Trust Center Overview / {page}. */
export const tcBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Trust Center Overview', to: T.overview },
  { label },
];

/** Trust Center CTA band: headline, sub-line, a "Request …" button + "Book a demo". */
export const tcCta = (title, lead, primaryLabel = 'Request documentation') => ({
  title,
  lead,
  primary: REQUEST(primaryLabel),
  secondary: BOOK_DEMO,
});

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Trust Center" row — every "Related" card reads "Trust Center". */
export const exploreTrust = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore Trust Center',
  cards: keys.map((k, i) => ({
    title: TRUST[k].title,
    description: 'Trust Center',
    to: TRUST[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

/** Subtle waveform statement ("Overview" + 52px statement with a gradient ending). */
export const statement = (title, accent, { eyebrow = 'Overview', paragraphs = [] } = {}) => ({
  type: 'statement',
  tone: 'subtle',
  pattern: 'waveform',
  eyebrow,
  title,
  accent,
  paragraphs,
});

const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
  { tint: 'amber', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'grey', pattern: { type: 'rings', size: 'explorer' } },
];

/** Explorer: explorer({ title, accent, lead? }, [[tab, body, visual], …]). */
export const explorer = (head, items) => ({
  type: 'explorer',
  ...head,
  items: items.map(([title, body, visual], i) => ({
    ...PANELS[i % PANELS.length],
    title,
    body,
    visual,
  })),
});

const CARDS = [
  ['lilac', 'rings'],
  ['pink', 'dots'],
  ['blue', 'hairlines'],
  ['mint', 'rings'],
  ['amber', 'dots'],
  ['grey', 'hairlines'],
];

/** "Benefits" cards (413px, 3-up): cards({ title, accent, lead? }, [[title, body], …]). */
export const cards = (head, list) => ({
  type: 'cards',
  accentBreak: false,
  ...head,
  cards: list.map(([title, body], i) => {
    const [tint, type] = CARDS[i % CARDS.length];
    return { title, body, tint, pattern: { type, size: 'card' } };
  }),
});

/** Document / provider cards: docs({ title, accent, lead, cta?, rows?, headPad? }, [[title, '#hex', icon], …]). */
export const docs = (head, list) => ({
  type: 'docs',
  ...head,
  items: list.map(([title, color, icon = 'file-text']) => ({ title, color, icon })),
});

/** Split row with a magenta dot bullet (07.01 "Standard" / "Enterprise" / "Data residency"). */
export const split = (title, bullet, visual, reverse = false) => ({
  type: 'split',
  size: 'standard',
  reverse,
  title,
  bullets: [{ text: bullet }],
  bulletStyle: 'dot',
  visual,
});

/** Dark chapters row: chapters([[tab, title, body | { checks }, visual], …]). */
export const chapters = (list) => ({
  type: 'chapters',
  chapters: list.map(([tab, title, body, visual]) => ({
    tab,
    title,
    ...(typeof body === 'string' ? { paragraphs: [body] } : { checks: body.checks }),
    visual,
  })),
});

export const faq = (items, title) => ({
  ...(title ? { title } : null),
  items: items.map(([q, a]) => ({ q, a })),
  defaultOpen: 'all',
});
