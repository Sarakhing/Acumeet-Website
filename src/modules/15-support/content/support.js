import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import {
  AddOnsCard,
  BillingCard,
  InvoicesCard,
  PlansCard,
  ServiceStatusCard,
  SupportPlansCard,
  TicketCard,
  TicketsCard,
} from '../components/SupportCards';

const S = ROUTES.supportPage;

/**
 * Support catalogue (Figma "15 · Support", 49:167019). `tagline` = the 15.01 Directory line.
 * 15.02 Help Center, 15.03 Documentation and 15.06 Integration Guides are shared pages.
 */
export const SUPPORT = {
  overview: { title: 'Support overview', to: S.overview, figma: '49:167033' },
  gettingStarted: {
    title: 'Getting started',
    tagline: 'Get started with Acumeet',
    to: S.gettingStarted,
    figma: '49:167278',
  },
  featureGuides: {
    title: 'Feature guides',
    tagline: 'Feature guides',
    to: S.featureGuides,
    figma: '49:167407',
  },
  integrationGuides: {
    title: 'Integration guides',
    tagline: 'Turn an integration idea into a working implementation.',
    to: ROUTES.developersPage.integrationGuides, // shared → 14.07
  },
  administration: {
    title: 'Administration',
    tagline: 'Administration guides',
    to: S.administration,
    figma: '49:167457',
  },
  billing: { title: 'Billing', tagline: 'Billing help', to: S.billing, figma: '49:167571' },
  security: {
    title: 'Security',
    tagline: 'Security and privacy help',
    to: S.security,
    figma: '49:167728',
  },
  troubleshooting: {
    title: 'Troubleshooting',
    tagline: 'Troubleshooting',
    to: S.troubleshooting,
    figma: '49:167791',
  },
  faqs: { title: 'FAQs', tagline: 'Frequently asked questions', to: S.faqs, figma: '49:167903' },
  contact: {
    title: 'Contact support',
    tagline: 'Need a person?',
    to: S.contact,
    figma: '49:168043',
  },
  raiseTicket: {
    title: 'Raise a ticket',
    tagline: 'Raise a support ticket',
    to: S.raiseTicket,
    figma: '49:168095',
  },
  ticketStatus: {
    title: 'Ticket status',
    tagline: 'Check ticket status',
    to: S.ticketStatus,
    figma: '49:168230',
  },
  serviceStatus: {
    title: 'Service status',
    tagline: 'Service status',
    to: S.serviceStatus,
    figma: '49:168369',
  },
  supportPlans: {
    title: 'Support plans',
    tagline: 'Support that fits how your organisation operates',
    to: S.supportPlans,
    figma: '49:168429',
  },
  documentation: {
    title: 'Acumeet documentation',
    tagline: 'Everything you need to work with Acumeet',
    to: ROUTES.resourcesPage.documentation, // shared → 13.12
  },
};

export const DIRECTORY_KEYS = Object.keys(SUPPORT).filter((k) => k !== 'overview');

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export const link = (label, to) => ({ label, to });
export const CONTACT_SUPPORT = link('Contact support', S.contact);
export const RAISE = link('Raise a ticket', S.raiseTicket);
export const ENTERPRISE_TEAM = link('Contact enterprise team', ROUTES.contactSales);
export const DEMO = link('Book a demo', ROUTES.bookDemo);

/** Home / Support Overview / {page}. */
export const supBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Support overview', to: S.overview },
  { label },
];

export const cta = (title, lead, primary, secondary) => ({ title, lead, primary, secondary });

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Support" row — every "Related" card reads "Support". */
export const exploreSupport = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore support',
  cards: keys.map((k, i) => ({
    title: SUPPORT[k].title,
    description: 'Support',
    to: SUPPORT[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 15.08–15.16 (15.05 shows the first two, 15.07 the first three). */
export const RELATED = ['overview', 'gettingStarted', 'featureGuides', 'administration'];

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
});

const PANELS = [
  ['lilac', 'dots'],
  ['pink', 'rings'],
  ['blue', 'hairlines'],
  ['mint', 'waveform'],
  ['amber', 'dots'],
  ['grey', 'rings'],
];

/** Explorer: explorer({ title, accent, lead? }, [[tab, body, visual], …]). */
export const explorer = (head, items) => ({
  type: 'explorer',
  titleSize: 44,
  ...head,
  items: items.map(([title, body, visual], i) => ({
    title,
    body,
    tint: PANELS[i % PANELS.length][0],
    pattern: { type: PANELS[i % PANELS.length][1], size: 'explorer' },
    visual,
  })),
});

export const faq = (title, items) => ({
  eyebrow: 'FAQ',
  title,
  items: items.map(([q, a]) => ({ q, a })),
  defaultOpen: 'all',
});

/* ------------------------------------------------------------------ */
/* Visual builders                                                     */
/* ------------------------------------------------------------------ */

export const tickets = (opts) => h(TicketsCard, opts);
export const serviceStatus = (opts) => h(ServiceStatusCard, opts);
export const supportPlans = (opts) => h(SupportPlansCard, opts);
export const plans = (opts) => h(PlansCard, opts);
export const billing = (opts) => h(BillingCard, opts);
export const invoices = (opts) => h(InvoicesCard, opts);
export const addOns = (opts) => h(AddOnsCard, opts);
export const ticket = (opts) => h(TicketCard, opts);
