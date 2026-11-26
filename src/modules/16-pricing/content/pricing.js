import { actions, keys } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { options } from '@/modules/10-deployment/content/deployment';
import { supportPlans } from '@/modules/15-support/content/support';

export { cta, explorer, faq, link, statement } from '@/modules/15-support/content/support';
export { addOns, billing, plans } from '@/modules/15-support/content/support';
export { members, POLICY_ROWS, supplierAtlas } from '@/modules/07-trust-center/content/shared';

const P = ROUTES.pricingPage;

/**
 * Pricing catalogue (Figma "16 · Pricing"). `tagline` = the 16.01 Directory line.
 * 16.02 Plans is the overview's plan cards; 16.07 Contact Sales is the shared 18.06 page.
 */
export const PRICING = {
  overview: { title: 'Pricing Overview', to: P.overview, figma: '49:173600' },
  featureComparison: {
    title: 'Feature Comparison',
    tagline: 'Compare plans by what your team needs',
    to: P.featureComparison,
    figma: '49:173923',
  },
  enterprise: {
    title: 'Enterprise Pricing',
    tagline: 'Need more control?',
    to: P.enterprise,
    figma: '49:174456',
  },
  addOns: {
    title: 'Add-ons',
    tagline: 'Add capacity when you need it',
    to: P.addOns,
    figma: '49:174584',
  },
  faqs: { title: 'FAQs', tagline: 'Pricing FAQs', to: P.faqs, figma: '49:174719' },
  contactSales: {
    title: 'Contact Sales',
    tagline: 'Have a question before you take the next step?',
    to: ROUTES.contactSales, // shared → 18.06
  },
};

export const DIRECTORY_KEYS = Object.keys(PRICING).filter((k) => k !== 'overview');

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

const to = (label, path) => ({ label, to: path });
export const CONTACT_SALES = to('Contact sales', ROUTES.contactSales);
export const DEMO = to('Book a demo', ROUTES.bookDemo);
export const VIEW_PRICING = to('View pricing', P.overview);
export const TRY_FREE = to('Try free', ROUTES.getStarted);
export const REQUEST_POC = to('Request a PoC', ROUTES.enterprisePage.requestPoc);

/** Home / Pricing Overview / {page}. */
export const priBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Pricing Overview', to: P.overview },
  { label },
];

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Pricing" row — every "Related" card reads "Pricing". */
export const explorePricing = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore Pricing',
  cards: keys.map((k, i) => ({
    title: PRICING[k].title,
    description: 'Pricing',
    to: PRICING[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

const CARD_SLOTS = [
  ['lilac', 'rings'],
  ['pink', 'dots'],
  ['blue', 'hairlines'],
  ['mint', 'rings'],
];

/** "Benefits" add-on cards: addOnCards({ title, accent, lead? }, [[title, body], …], columns). */
export const addOnCards = (head, items, columns = 3) => ({
  type: 'cards',
  titleSize: 48,
  accentBreak: false,
  columns,
  ...head,
  cards: items.map(([title, body], i) => ({
    title,
    body,
    tint: CARD_SLOTS[i % CARD_SLOTS.length][0],
    pattern: { type: CARD_SLOTS[i][1], size: columns === 2 ? 'card-wide' : 'card' },
  })),
});

/** The four Enterprise tabs (16.01 "Need more control?", 16.04 "What Enterprise includes"). */
export const enterpriseTabs = (governance) => [
  [
    'Deployment',
    'Private and self-hosted options for organisations with specific architecture needs.',
    options(0),
  ],
  [
    'Data control',
    'Customer-managed storage and encryption controls where available.',
    keys(['Configure', 'Configure']),
  ],
  ['Governance', 'Advanced administration, access, retention and compliance controls.', governance],
  [
    'Support',
    'Dedicated support and success resources for rollout and ongoing use.',
    supportPlans(),
  ],
];

/** Pricing action items: priTasks(open, [due, due, due], opts) — quote → minutes → renewal. */
export const priTasks = (open, [a, b, c], opts) =>
  actions(
    open,
    [
      ['Send the add-on quote for redaction', a],
      ['Review minutes usage for the quarter', b],
      ['Prepare the renewal proposal', c],
    ],
    opts,
  );
