import { ROUTES } from '@/constants/routes';

const E = ROUTES.enterprisePage;

/**
 * Enterprise catalogue (Figma "11 · Enterprise", 49:67845). `tab` = the "Enterprise tabs" label
 * (PoC sub-pages have no tab of their own — they highlight "Proof of concept"); `icon` = its
 * duotone icon; `tagline` = the "Explore Enterprise" journey line on 11.01.
 */
export const ENTERPRISE = {
  overview: {
    title: 'Enterprise overview',
    tab: 'Overview',
    icon: 'stack',
    to: E.overview,
    figma: '49:67846',
  },
  architecture: {
    title: 'Enterprise architecture',
    tab: 'Architecture',
    icon: 'plugs-connected',
    tagline: 'Fit Acumeet into your environment',
    to: E.architecture,
    figma: '49:68145',
  },
  administration: {
    title: 'Enterprise administration',
    tab: 'Administration',
    icon: 'users-three',
    tagline: 'Manage access with confidence',
    to: E.administration,
    figma: '49:68282',
  },
  governance: {
    title: 'Governance',
    tab: 'Governance',
    icon: 'shield-check',
    tagline: 'Consistent controls for meeting records',
    to: E.governance,
    figma: '49:68418',
  },
  security: {
    title: 'Security',
    tab: 'Security',
    icon: 'lock-key',
    tagline: 'Control where meeting data lives',
    to: E.security,
    figma: '49:68554',
  },
  compliance: {
    title: 'Compliance',
    tab: 'Compliance',
    icon: 'seal-check',
    tagline: 'A clearer path from conversation to approval and action',
    to: E.compliance,
    figma: '49:68654',
  },
  deployment: {
    title: 'Deployment',
    tab: 'Deployment',
    icon: 'cloud',
    tagline: 'Choose how you deploy',
    to: E.deployment,
    figma: '49:68805',
  },
  implementation: {
    title: 'Implementation',
    tab: 'Implementation',
    icon: 'list-checks',
    tagline: 'Move from deployment decision to a controlled rollout.',
    to: E.implementation,
    figma: '49:70267',
  },
  onboarding: {
    title: 'User onboarding',
    tab: 'Onboarding',
    icon: 'user-check',
    tagline: 'Get every team productive quickly',
    to: E.onboarding,
    figma: '49:68961',
  },
  training: {
    title: 'Training',
    tab: 'Training',
    icon: 'file-text',
    tagline: 'Give every audience the training it needs',
    to: E.training,
    figma: '49:69046',
  },
  changeManagement: {
    title: 'Change management',
    tab: 'Change management',
    icon: 'arrows-clockwise',
    tagline: 'Make adoption stick',
    to: E.changeManagement,
    figma: '49:69194',
  },
  support: {
    title: 'Enterprise support',
    tab: 'Support',
    icon: 'lifebuoy',
    tagline: 'Support for enterprise teams',
    to: E.support,
    figma: '49:69323',
  },
  serviceLevels: {
    title: 'Service levels',
    tab: 'Service levels',
    icon: 'clock',
    tagline: 'Service commitments that match your deployment',
    to: E.serviceLevels,
    figma: '49:69408',
  },
  poc: {
    title: 'Proof of Concept',
    tab: 'Proof of concept',
    icon: 'target',
    tagline: 'Test Acumeet on your real workflows',
    to: E.poc,
    figma: '49:69557',
  },
  requestPoc: {
    title: 'Request a PoC',
    tagline: 'Request a proof of concept',
    to: E.requestPoc,
    figma: '49:69711',
  },
  pocProcess: {
    title: 'PoC process',
    tagline: 'A clear path from question to result',
    to: E.pocProcess,
    figma: '49:69804',
  },
  pocScope: {
    title: 'PoC scope',
    tagline: 'Focus the PoC on what matters',
    to: E.pocScope,
    figma: '49:69969',
  },
  pocSuccess: {
    title: 'PoC success criteria',
    tagline: 'Agree what success looks like first',
    to: E.pocSuccess,
    figma: '49:70167',
  },
};

/** Tab / journey groups in Figma order. */
export const GROUPS = [
  [
    'Platform',
    ['overview', 'architecture', 'administration', 'governance', 'security', 'compliance'],
  ],
  ['Rollout', ['deployment', 'implementation', 'onboarding', 'training', 'changeManagement']],
  ['Support', ['support', 'serviceLevels']],
  ['Evaluate', ['poc', 'requestPoc', 'pocProcess', 'pocScope', 'pocSuccess']],
];

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });
export const DEMO = { label: 'Request an enterprise demo', to: ROUTES.bookDemo };
export const REQUEST_POC = { label: 'Request a PoC', to: E.requestPoc };
export const TALK = CONTACT('Talk to enterprise');
export const TRUST = { label: 'Visit the Trust Center', to: ROUTES.trustCenter };
export const link = (label, to) => ({ label, to });

/** Home / Enterprise Overview / {page}; PoC sub-pages add "Proof of Concept". */
export const entBreadcrumb = (label, { poc = false } = {}) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Enterprise overview', to: E.overview },
  ...(poc ? [{ label: 'Proof of Concept', to: E.poc }] : []),
  { label },
];

/** Figma "CTA band": repeats the hero headline, lead and both buttons. */
export const entCta = ({ title, accent, lead, primary, secondary }) => ({
  title: accent ? `${title} ${accent}` : title,
  lead,
  primary,
  secondary,
});

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Enterprise" row — every "Related" card reads "Enterprise". */
export const exploreEnterprise = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore enterprise',
  cards: keys.map((k, i) => ({
    title: ENTERPRISE[k].title,
    description: 'Enterprise',
    to: ENTERPRISE[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 11.05–11.18 (11.03 shows the first two, 11.04 the first three). */
export const RELATED = ['overview', 'architecture', 'administration', 'governance'];

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

/** "Checklist": checklist(title, lead, [[label, icon, tone], …]). First card is highlighted. */
export const checklist = (title, lead, items) => ({
  type: 'checklist',
  title,
  lead,
  items: items.map(([label, icon, tone]) => ({ label, icon, tone })),
});
