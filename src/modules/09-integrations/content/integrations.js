import { ROUTES } from '@/constants/routes';

const I = ROUTES.integrationsPage;

/**
 * Integrations catalogue (Figma "09 · Integrations", 48:383882). `tagline` = the Directory
 * "Link card" line on 09.01 (also each page's headline); `icon` = the Index tile icon.
 * Slugs match the header mega menu.
 */
export const INTEGRATIONS = {
  overview: { title: 'Integration Overview', to: I.overview, figma: '48:383883' },
  meetingPlatforms: {
    title: 'Meeting Platforms',
    tagline: 'Make meeting knowledge easier to capture and reuse.',
    icon: 'video-camera',
    to: I.meetingPlatforms,
    figma: '48:384226',
  },
  productivity: {
    title: 'Productivity',
    tagline: 'Put meeting context closer to everyday work.',
    icon: 'calendar-check',
    to: I.productivity,
    figma: '48:384547',
  },
  identity: {
    title: 'Identity',
    tagline: 'Make access fit your organisation.',
    icon: 'user-check',
    to: I.identity,
    figma: '48:384738',
  },
  storage: {
    title: 'Storage',
    tagline: 'Choose a storage approach that fits your requirements.',
    icon: 'database',
    to: I.storage,
    figma: '48:385025',
  },
  security: {
    title: 'Security',
    tagline: 'Connect security controls to your operating model.',
    icon: 'shield-check',
    to: I.security,
    figma: '48:385243',
  },
  analytics: {
    title: 'Analytics',
    tagline: 'Make meeting-derived information more useful for reporting.',
    icon: 'pulse',
    to: I.analytics,
    figma: '48:385427',
  },
  crm: {
    title: 'CRM',
    tagline: 'Connect meeting outcomes with customer context.',
    icon: 'handshake',
    to: I.crm,
    figma: '48:385586',
  },
  projectManagement: {
    title: 'Project Management',
    tagline: 'Turn meeting decisions into delivery.',
    icon: 'kanban',
    to: I.projectManagement,
    figma: '48:385861',
  },
  developer: {
    title: 'Developer Integrations',
    tagline: 'Build around your systems and workflows.',
    icon: 'plugs-connected',
    to: I.developer,
    figma: '48:386166',
  },
};

export const INTEGRATION_KEYS = Object.keys(INTEGRATIONS).filter((k) => k !== 'overview');

/** Every "Discuss …" / "Ask about …" / "Request …" action goes to the contact form. */
export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });

/** Home / Integration Overview / {page}. */
export const intBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Integration Overview', to: I.overview },
  { label },
];

/** Figma "CTA band" on the category pages: the page headline, a blank sub-line, one "Book a demo" button. */
export const intCta = (title) => ({
  title,
  lead: '\u00a0', // Figma keeps an empty sub-line (a plain space would collapse)
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: null,
});

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Integrations" row — every "Related" card reads "Integrations". */
export const exploreIntegrations = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore Integrations',
  cards: keys.map((k, i) => ({
    title: INTEGRATIONS[k].title,
    description: 'Integrations',
    to: INTEGRATIONS[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 09.05–09.10. */
export const RELATED = ['overview', 'meetingPlatforms', 'productivity', 'identity'];

/* Split panels in Figma order: pink rings, blue dots, lilac hairlines, mint waveform, amber rings. */
const PANELS = [
  ['pink', 'rings'],
  ['blue', 'dots'],
  ['lilac', 'hairlines'],
  ['mint', 'waveform'],
  ['amber', 'rings'],
];

/**
 * Alternating split rows (visual first, then copy first, …):
 * splits([{ eyebrow?, title, body: string[], cta?, visual }, …]). Figma sets each "supporting"
 * line as its own 17px paragraph, so they go in `body`.
 */
export const splits = (rows) =>
  rows.map(({ visual, ...row }, i) => {
    const [tint, type] = PANELS[i % PANELS.length];
    return {
      type: 'split',
      size: 'standard',
      eyebrowStyle: 'mono',
      reverse: i % 2 === 0,
      visual: {
        tint,
        pattern: { type, size: type === 'rings' ? 'panel' : 'explorer' },
        content: visual,
      },
      ...row,
    };
  });
