import { ROUTES } from './routes';

export const NAV_SECONDARY = [
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'Sign in', to: ROUTES.signIn },
];

/** Footer — Figma "Footer" (19:15204). */
export const FOOTER_CONTACT = [
  { label: '+1 716 317 9506', href: 'tel:+17163179506' },
  { label: 'info@acumeet.com', href: 'mailto:info@acumeet.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'X (Twitter)', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Enterprise', to: ROUTES.enterprise },
      { label: 'Meeting transcription', to: `${ROUTES.products}/ai-transcription` },
      { label: 'AI summaries', to: `${ROUTES.products}/ai-meeting-summaries` },
      { label: 'Action items', to: `${ROUTES.products}/action-item-management` },
      { label: 'AcuBot', to: `${ROUTES.products}/atlas` },
      { label: 'Conversation intelligence', to: `${ROUTES.products}/meeting-intelligence` },
      { label: 'Workspace', to: ROUTES.products },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Financial services', to: `${ROUTES.industries}/financial-services` },
      { label: 'Executive & board', to: `${ROUTES.useCases}/executive-board-meetings` },
      { label: 'Risk & compliance', to: `${ROUTES.useCases}/risk-compliance` },
      { label: 'Audit', to: `${ROUTES.useCases}/audit` },
      { label: 'Telecoms', to: `${ROUTES.industries}/telecommunications` },
      { label: 'Enterprise operations', to: `${ROUTES.industries}/enterprise` },
    ],
  },
  {
    title: 'Security',
    links: [
      { label: 'Security overview', to: ROUTES.security },
      { label: 'Trust Center', to: ROUTES.trustCenter },
      { label: 'Data privacy', to: `${ROUTES.trustCenter}/privacy` },
      { label: 'Governance', to: ROUTES.solutions.govern },
      { label: 'Compliance', to: ROUTES.compliance },
      { label: 'Deployment', to: ROUTES.deployment },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: ROUTES.company },
      { label: 'Blog', to: `${ROUTES.resources}/blog` },
      { label: 'Pricing', to: ROUTES.pricing },
      { label: 'Help Center', to: ROUTES.support },
      { label: 'Support', to: ROUTES.support },
      { label: 'Book a demo', to: ROUTES.bookDemo },
    ],
  },
  {
    title: 'Competitors',
    wide: true,
    links: [
      { label: 'Competitor overview', to: ROUTES.compare },
      { label: 'Acumeet vs. AI assistants', to: `${ROUTES.compare}/ai-meeting-assistants` },
      { label: 'Acumeet vs. meeting notes', to: `${ROUTES.compare}/traditional-meeting-notes` },
      { label: 'Acumeet vs. enterprise platforms', to: `${ROUTES.compare}/enterprise-platforms` },
      { label: 'Acumeet vs. Fireflies', to: `${ROUTES.compare}/fireflies` },
      { label: 'Acumeet vs. Otter', to: `${ROUTES.compare}/otter` },
      { label: 'Acumeet vs. Teams Premium', to: `${ROUTES.compare}/microsoft-teams-premium` },
    ],
  },
];
