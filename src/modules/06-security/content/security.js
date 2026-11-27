import { ROUTES } from '@/constants/routes';

const S = ROUTES.securityPage;

/**
 * Security catalogue (Figma "06 · Security", 48:325158). `tagline` = page headline,
 * also the Directory "Link card" line. Slugs match the header mega menu.
 */
export const SECURITY = {
  overview: { title: 'Security overview', to: S.overview, figma: '48:325159' },
  zeroTrust: {
    title: 'Zero trust architecture',
    tagline: 'Verify access. Limit trust. Protect every boundary.',
    to: S.zeroTrust,
    figma: '48:325303',
  },
  identityAccess: {
    title: 'Identity & access',
    tagline: 'Give the right people the right level of access.',
    to: S.identityAccess,
    figma: '48:325402',
  },
  dataSecurity: {
    title: 'Data security',
    tagline: 'Protect meeting information throughout its journey.',
    to: S.dataSecurity,
    figma: '48:325595',
  },
  aiSecurity: {
    title: 'AI security',
    tagline: 'Build safeguards around sensitive meeting content.',
    to: S.aiSecurity,
    figma: '48:325695',
  },
  auditMonitoring: {
    title: 'Audit & monitoring',
    tagline: 'Make relevant activity easier to review and investigate.',
    to: S.auditMonitoring,
    figma: '48:325863',
  },
  dataLifecycle: {
    title: 'Data lifecycle',
    tagline: 'Define how meeting data is kept, moved, and removed.',
    to: S.dataLifecycle,
    figma: '48:326037',
  },
};

export const SECURITY_KEYS = Object.keys(SECURITY).filter((k) => k !== 'overview');

/** Every Security hero: "Discuss your security requirements" + "Contact the security team →". */
export const HERO_ACTIONS = {
  primary: { label: 'Discuss your security requirements', to: ROUTES.contactSales },
  secondary: { label: 'Contact the security team', to: `${ROUTES.support}/security` },
};

/** Home / Security Overview / {page}. */
export const secBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Security overview', to: S.overview },
  { label },
];

/** Figma "CTA band" on every Security page: the page headline, a blank sub-line, one "Book a demo" button. */
export const secCta = (title) => ({
  title,
  lead: ' ',
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: null,
});

/* Positional "Explore more" thumbnails (lilac rings, pink dots, blue waveform, mint hairlines). */
const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore security" row — every "Related" card reads "Security". */
export const exploreSecurity = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore security',
  cards: keys.map((k, i) => ({
    title: SECURITY[k].title,
    description: 'Security',
    to: SECURITY[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/* ------------------------------------------------------------------ */
/* Sections — each returns { type, ...props } for SecurityPage          */
/* ------------------------------------------------------------------ */

/** "02 · …" note row: 34px title + 17px copy on #fafafb (InfoNote without buttons). */
export const info = (title, body) => ({ type: 'info', tone: 'subtle', title, body });

/* Explorer panels: lilac dots, pink rings, blue hairlines, mint waveform, amber dots, grey rings. */
const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
  { tint: 'amber', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'grey', pattern: { type: 'rings', size: 'explorer' } },
];

const panels = (items) =>
  items.map(([title, body, visual], i) => ({ ...PANELS[i % PANELS.length], title, body, visual }));

/**
 * Topic explorer ("Tabs explorer" with a head): explorer({ eyebrow?, title, accent, lead?, titleSize? }, [[tab, body, visual], …]).
 * Topic heads use the 48px title; the overview's "Explore security domains" passes titleSize: 'section'.
 */
export const explorer = ({ titleSize = 48, ...head }, items) => ({
  type: 'explorer',
  titleSize,
  ...head,
  items: panels(items),
});

/* Topic cards: lilac rings, pink dots, blue hairlines, mint rings (Solutions-style 24px rings). */
const CARDS = [
  ['lilac', 'rings'],
  ['pink', 'dots'],
  ['blue', 'hairlines'],
  ['mint', 'rings'],
];

/** Topic cards ("Benefits" with a head): three 413px cards in a row, or four 630px cards in a 2 × 2 grid. */
export const cards = (head, list) => {
  const wide = list.length === 4;
  return {
    type: 'cards',
    titleSize: 48,
    accentBreak: false,
    columns: wide ? 2 : 3,
    ...head,
    cards: list.map(([title, body], i) => {
      const [tint, type] = CARDS[i % CARDS.length];
      return { title, body, tint, pattern: { type, size: wide ? 'card-wide' : 'card' } };
    }),
  };
};

/**
 * Dark "Chapters" row with pill nav (06.02 / 06.03 / 06.04 / 06.07):
 * chapters([[tab, title, body | { checks }, visual], …]). "Key points" chapters list ticks.
 */
export const chapters = (list) => ({
  type: 'chapters',
  chapters: list.map(([tab, title, body, visual]) => ({
    tab,
    title,
    ...(typeof body === 'string' ? { paragraphs: [body] } : { checks: body.checks }),
    visual,
  })),
});

/** Split row (FeatureSplit, 656×480 panel). */
export const split = (props) => ({ type: 'split', size: 'standard', ...props });

/** FAQ items from [[question, answer], …]; every answer shown. */
export const faq = (items) => ({ items: items.map(([q, a]) => ({ q, a })), defaultOpen: 'all' });
