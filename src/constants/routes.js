/**
 * Central route map. Sections not built yet point at their future paths;
 * the router renders a "Coming soon" placeholder for them.
 */
export const ROUTES = {
  home: '/',
  solutions: {
    overview: '/solutions',
    protect: '/solutions/protect',
    control: '/solutions/control',
    secure: '/solutions/secure',
    govern: '/solutions/govern',
    understand: '/solutions/understand',
    connect: '/solutions/connect',
    emi: '/solutions/enterprise-meeting-intelligence',
  },
  products: '/products',
  /** 02 · Products pages (Figma section 46:30442). `products` above stays the overview path. */
  product: {
    overview: '/products',
    meetingCapture: '/products/meeting-capture',
    aiTranscription: '/products/ai-transcription',
    aiMeetingSummaries: '/products/ai-meeting-summaries',
    actionItemManagement: '/products/action-item-management',
    speakerRecognition: '/products/speaker-recognition',
    aiRedaction: '/products/ai-redaction',
    atlas: '/products/atlas',
    meetingIntelligence: '/products/meeting-intelligence',
    knowledgeRepository: '/products/knowledge-repository',
    analytics: '/products/analytics',
  },
  industries: '/industries',
  useCases: '/use-cases',
  security: '/security',
  trustCenter: '/trust-center',
  compliance: '/compliance',
  integrations: '/integrations',
  deployment: '/deployment',
  enterprise: '/enterprise',
  compare: '/compare',
  resources: '/resources',
  developers: '/developers',
  support: '/support',
  pricing: '/pricing',
  company: '/company',
  whyAcumeet: '/why-acumeet', // header mega menu (Solutions footer link)
  getStarted: '/get-started',
  bookDemo: '/get-started/book-a-demo',
  contactSales: '/get-started/contact-sales',
  signIn: '/sign-in',
  legal: {
    privacy: '/legal/privacy-policy',
    terms: '/legal/terms',
  },
};
