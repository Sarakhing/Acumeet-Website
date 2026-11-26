import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import DeploymentOptionsCard from '../components/DeploymentOptionsCard';

const D = ROUTES.deploymentPage;

/**
 * Deployment catalogue (Figma "10 · Deployment", 48:393382). `tagline` = the Directory
 * "Link card" line on 10.01 (also each page's headline). 10.07 Data Residency and 10.11
 * Implementation are "shared" entries: they link to 07.06 and 11.08 instead of a page here.
 */
export const DEPLOYMENT = {
  overview: { title: 'Deployment Overview', to: D.overview, figma: '48:393391' },
  cloudHosted: {
    title: 'Cloud Hosted',
    tagline: 'Meeting intelligence, without managing the application stack.',
    to: D.cloudHosted,
    figma: '48:393585',
  },
  enterpriseHosted: {
    title: 'Enterprise Hosted',
    tagline: 'A deployment discussion shaped around enterprise requirements.',
    to: D.enterpriseHosted,
    figma: '48:393631',
  },
  customerAzureTenant: {
    title: 'Customer Azure Tenant',
    tagline: 'Evaluate Acumeet against your Azure environment.',
    to: D.customerAzureTenant,
    figma: '48:393739',
  },
  byos: {
    title: 'BYOS Deployment',
    tagline: 'Explore customer-owned storage for meeting data.',
    to: D.byos,
    figma: '48:393876',
  },
  privateDeployment: {
    title: 'Private Deployment',
    tagline: 'Discuss deployment options for stricter environment requirements.',
    to: D.privateDeployment,
    figma: '48:393933',
  },
  dataResidency: {
    title: 'Data Residency',
    tagline: 'Make data location a defined deployment requirement.',
    to: D.dataResidency, // shared → 07.06
  },
  azureArchitecture: {
    title: 'Azure Architecture',
    tagline: 'Understand the architecture behind your deployment.',
    to: D.azureArchitecture,
    figma: '48:394053',
  },
  highAvailability: {
    title: 'High Availability',
    tagline: 'Plan for service continuity with clear availability expectations.',
    to: D.highAvailability,
    figma: '48:394191',
  },
  disasterRecovery: {
    title: 'Disaster Recovery',
    tagline: 'Prepare for disruption with a documented recovery approach.',
    to: D.disasterRecovery,
    figma: '48:394247',
  },
  implementation: {
    title: 'Implementation',
    tagline: 'Move from deployment decision to a controlled rollout.',
    to: D.implementation, // shared → 11.08
  },
};

export const DEPLOYMENT_KEYS = Object.keys(DEPLOYMENT).filter((k) => k !== 'overview');

/** Every "Discuss …" / "Request …" / "Review …" action goes to the contact form. */
export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });

/** Home / Deployment Overview / {page}. */
export const depBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Deployment Overview', to: D.overview },
  { label },
];

/** Figma "CTA band": the page headline, a blank sub-line, one "Book a demo" button. */
export const depCta = (title) => ({
  title,
  lead: ' ', // Figma keeps an empty sub-line (a plain space would collapse)
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: null,
});

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Deployment" row — every "Related" card reads "Deployment". */
export const exploreDeployment = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore Deployment',
  cards: keys.map((k, i) => ({
    title: DEPLOYMENT[k].title,
    description: 'Deployment',
    to: DEPLOYMENT[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 10.04–10.10 (10.03 shows the first two). */
export const RELATED = ['overview', 'cloudHosted', 'enterpriseHosted', 'customerAzureTenant'];

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

/** FAQ with every answer open (Figma shows them expanded). */
export const faq = (items) => ({
  items: items.map(([q, a]) => ({ q, a })),
  defaultOpen: 'all',
});

/** "UI · Deployment options" with option `selected` (0–4) highlighted. */
export const options = (selected) => h(DeploymentOptionsCard, { selected });
