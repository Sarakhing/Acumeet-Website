import { ROUTES } from '@/constants/routes';

const C = ROUTES.compliancePage;

/**
 * Compliance catalogue (Figma "08 · Compliance", 48:369038). `tagline` = the Directory
 * "Link card" line on 08.01. Slugs match the header mega menu.
 */
export const COMPLIANCE = {
  overview: { title: 'Compliance overview', to: C.overview, figma: '48:369434' },
  ndpr: {
    title: 'NDPR',
    tagline: 'NDPR compliance and Nigerian data protection.',
    to: C.ndpr,
    figma: '48:369834',
  },
  iso27001: {
    title: 'ISO 27001',
    tagline: 'ISO 27001 certified.',
    to: C.iso27001,
    figma: '48:369992',
  },
  soc2: { title: 'SOC 2', tagline: 'SOC 2 certified.', to: C.soc2, figma: '48:370159' },
  gdpr: {
    title: 'GDPR',
    tagline: 'GDPR compliance and personal data protection.',
    to: C.gdpr,
    figma: '48:370251',
  },
  cbn: {
    title: 'CBN requirements',
    tagline: 'Support your assessment against CBN requirements',
    to: C.cbn,
    figma: '48:369039',
  },
  financialServices: {
    title: 'Financial services compliance',
    tagline: 'Compliance support for financial services',
    to: C.financialServices,
    figma: '48:369157',
  },
  dataGovernance: {
    title: 'Data governance',
    tagline: 'Responsible handling of meeting information.',
    to: C.dataGovernance,
    figma: '48:370412',
  },
  auditReadiness: {
    title: 'Audit readiness',
    tagline: 'Support audit and vendor reviews',
    to: C.auditReadiness,
    figma: '48:369199',
  },
  regulatorySupport: {
    title: 'Regulatory support',
    tagline: 'Bring compliance and procurement in early',
    to: C.regulatorySupport,
    figma: '48:369307',
  },
  documentation: {
    title: 'Compliance documentation',
    tagline: 'Find the information relevant to your assessment.',
    to: C.documentation,
    figma: '48:370556',
  },
};

export const COMPLIANCE_KEYS = Object.keys(COMPLIANCE).filter((k) => k !== 'overview');

/* Links. Every "Request …" / "Discuss …" / "Talk to …" action goes to the contact form. */
export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });
export const REQUEST_DOCS = CONTACT('Request Compliance Documentation');
export const VISIT_TRUST = { label: 'Explore the Trust Center', to: ROUTES.trustPage.overview };
export const BOOK_DEMO = { label: 'Book a demo', to: ROUTES.bookDemo };
export const PRIVACY_NOTICE = { label: 'Read the privacy notice', to: ROUTES.trustPage.privacy };

/** Home / Compliance Overview / {page}. */
export const compBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Compliance overview', to: C.overview },
  { label },
];

/** Default Compliance CTA band (590 tall): "Move your evaluation forward…". */
export const DEFAULT_CTA = {
  title: 'Move your evaluation forward with the right information.',
  lead: 'Whether you are completing a vendor-risk assessment, reviewing privacy requirements or evaluating Acumeet for a regulated workflow, our team can help direct you to the relevant available documentation.',
  primary: REQUEST_DOCS,
  secondary: CONTACT('Contact Acumeet'),
};

/** Page-specific CTA band: compCta(title, lead, primary, secondary). */
export const compCta = (title, lead, primary, secondary) => ({ title, lead, primary, secondary });

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Compliance" row — every "Related" card reads "Compliance". */
export const exploreCompliance = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore compliance',
  cards: keys.map((k, i) => ({
    title: COMPLIANCE[k].title,
    description: 'Compliance',
    to: COMPLIANCE[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row most Compliance pages share. */
export const RELATED = ['cbn', 'financialServices', 'auditReadiness', 'regulatorySupport'];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

/** Subtle waveform statement ("Overview" + 52px statement with a gradient ending). */
export const statement = (title, accent) => ({
  type: 'statement',
  tone: 'subtle',
  pattern: 'waveform',
  eyebrow: 'Overview',
  title,
  accent,
  paragraphs: [],
});

const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
  { tint: 'amber', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'grey', pattern: { type: 'rings', size: 'explorer' } },
];

/** Explorer: explorer({ title, accent, eyebrow?, lead?, titleSize? }, [[tab, body, visual], …]). */
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

/** Numbered grey cards: infoCards({ eyebrow?, title, paragraphs?, columns?, cta? }, [[title, body], …]). */
export const infoCards = (head, list) => ({
  type: 'infoCards',
  ...head,
  cards: list.map(([title, body]) => ({ title, body })),
});

/**
 * Split row (656×480 panel). `bullet` = [lead, text] — a magenta dot with a bold lead
 * ("For your review — …"). `eyebrow` = the 11px mono overline (08.01 rows).
 */
export const split = ({ bullet, visual, ...props }) => ({
  type: 'split',
  size: 'standard',
  eyebrowStyle: 'mono',
  bulletStyle: 'dot',
  bullets: bullet ? [{ lead: bullet[0], text: bullet[1] }] : [],
  visual,
  ...props,
});

/** 656×480 split panel: panel(tint, patternType, content). Rings use the 30px panel pitch. */
export const panel = (tint, type, content) => ({
  tint,
  pattern: { type, size: type === 'rings' ? 'panel' : 'explorer' },
  content,
});

export const faq = (items) => ({ items: items.map(([q, a]) => ({ q, a })), defaultOpen: 'all' });
