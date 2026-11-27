import { ROUTES } from '@/constants/routes';

const G = ROUTES.getStartedPage;

/** 18.01 · Get Started (Figma 49:197079). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Get started' }],
  sections: [
    {
      type: 'hero',
      eyebrow: 'Get started',
      title: 'Start with Acumeet your way',
      lead: 'Try it free, see a demo, or plan an enterprise rollout with our team.',
      primary: { label: 'Sign up free', to: G.signUp },
      secondary: { label: 'Book a demo', to: G.bookDemo },
    },
    {
      type: 'choose',
      title: 'Choose where to start',
      signUp: {
        eyebrow: 'Sign up',
        title: 'Start with Acumeet',
        body: 'Create your account and get transcripts, summaries and actions from your next meeting.',
        cta: { label: 'Create your account', to: G.signUp },
      },
      demo: {
        eyebrow: 'Book a demo',
        title: 'Book an Acumeet demo',
        body: 'Get a guided walkthrough of how Acumeet turns meeting conversations into decisions, actions and searchable knowledge.',
        cta: { label: 'Book a demo', to: G.bookDemo },
      },
      routes: [
        {
          label: 'Request enterprise demo',
          title: 'See Acumeet through an enterprise lens',
          body: 'Bring your IT, security, governance, compliance and deployment questions.',
          to: G.enterpriseDemo,
        },
        {
          label: 'Request a PoC',
          title: 'Evaluate Acumeet in your real business context',
          body: 'Test Acumeet against agreed use cases and success criteria before a wider rollout.',
          to: G.poc,
        },
        {
          label: 'Contact sales',
          title: 'Have a question before you take the next step?',
          body: 'Product fit, plans, pricing, demos and how to evaluate Acumeet.',
          to: G.contactSales,
        },
        {
          label: 'Contact enterprise team',
          title: 'Planning Acumeet across your organisation?',
          body: 'Talk to us about the requirements behind a secure, governed rollout.',
          to: G.contactEnterprise,
        },
      ],
    },
    {
      type: 'notSure',
      title: 'Not sure where to start?',
      lead: 'Tell us a little about your team and how you meet. We will point you to the right next step.',
      cta: { label: 'Contact sales', to: G.contactSales },
    },
  ],
};
