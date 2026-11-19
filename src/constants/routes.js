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
