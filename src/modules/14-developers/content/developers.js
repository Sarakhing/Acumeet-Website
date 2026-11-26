import { ROUTES } from '@/constants/routes';

const D = ROUTES.developersPage;

/**
 * Developers catalogue (Figma "14 · Developers", 49:155703). `tagline` = the page headline (also the
 * "Explore Developers" card line). Slugs match the header mega menu and Figma's path chips.
 */
export const DEVELOPERS = {
  overview: { title: 'Overview', to: D.overview, figma: '49:155906' },
  api: {
    title: 'API',
    tagline: 'Connect Acumeet to the workflows your teams rely on.',
    to: D.api,
    figma: '49:156383',
  },
  apiDocumentation: {
    title: 'API Documentation',
    tagline: 'Everything you need to get started—clearly documented.',
    to: D.apiDocumentation,
    figma: '49:156617',
  },
  authentication: {
    title: 'Authentication',
    tagline: 'Authenticate securely. Authorise only what you need.',
    to: D.authentication,
    figma: '49:156820',
  },
  restApis: {
    title: 'REST APIs',
    tagline: 'Work with structured API requests and responses.',
    to: D.restApis,
    figma: '49:155704',
  },
  webhooks: {
    title: 'Webhooks',
    tagline: 'Respond to events without unnecessary polling.',
    to: D.webhooks,
    figma: '49:157036',
  },
  integrationGuides: {
    title: 'Integration Guides',
    tagline: 'Turn an integration idea into a working implementation.',
    to: D.integrationGuides,
    figma: '49:157258',
  },
  sdks: {
    title: 'SDKs',
    tagline: 'Use the tools available for your development stack.',
    to: D.sdks,
    figma: '49:157482',
  },
  apiReference: {
    title: 'API Reference',
    tagline: 'Find the exact details behind each API operation.',
    to: D.apiReference,
    figma: '49:157693',
  },
  resources: {
    title: 'Developer Resources',
    tagline: 'The practical resources to help your team build responsibly.',
    to: D.resources,
    figma: '49:157905',
  },
};

export const DEV_KEYS = Object.keys(DEVELOPERS).filter((k) => k !== 'overview');

export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });
export const link = (label, to) => ({ label, to });

/** Home / Developer Overview / {page}. */
export const devBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Developer Overview', to: D.overview },
  { label },
];

/** Figma "CTA band": the page headline, a blank sub-line, one "Book a demo" button. */
export const devCta = (title) => ({
  title,
  lead: ' ',
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: null,
});

export const faq = (items) => ({ items: items.map(([q, a]) => ({ q, a })), defaultOpen: 'all' });

/**
 * One docs page: docsPage(key, { eyebrow, primary, secondary, panel, sections, points, related, faq }).
 * Hero title = the catalogue tagline; the sidebar lists every page with this one active.
 */
export const docsPage = (
  key,
  { eyebrow, lead, primary, secondary, panel, sections, points, related, faq: qa },
) => {
  const page = DEVELOPERS[key];
  return {
    breadcrumb: devBreadcrumb(page.title),
    sections: [
      {
        type: 'docsHero',
        path: page.to,
        eyebrow,
        title: page.tagline,
        lead,
        primary,
        secondary,
        panel,
      },
      {
        type: 'docsBody',
        nav: Object.entries(DEVELOPERS).map(([k, p]) => ({
          title: p.title,
          to: p.to,
          active: k === key,
        })),
        sections,
        points,
        related: related.map((k) => ({ title: DEVELOPERS[k].title, to: DEVELOPERS[k].to })),
        contact: CONTACT('Contact the developer team'),
      },
    ],
    faq: faq(qa),
    cta: devCta(page.tagline),
  };
};
