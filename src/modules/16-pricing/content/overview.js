import { access } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import {
  addOnCards,
  CONTACT_SALES,
  DIRECTORY_KEYS,
  enterpriseTabs,
  explorer,
  faq,
  members,
  PRICING,
  TRY_FREE,
} from './pricing';

/** The six questions on 16.01 and 16.06. */
export const PRICING_FAQS = [
  [
    'What does Atlas do?',
    'Atlas lets you ask questions about your meetings and get answers from your meeting records.',
  ],
  [
    'Does Acumeet support multiple languages?',
    'Yes. Supported languages depend on your plan. Compare plans or talk to us for the current list.',
  ],
  [
    'How does Acumeet protect my data?',
    'Acumeet includes access controls, encryption and data ownership controls. See the Trust Center for details.',
  ],
  [
    'What is Redaction AI?',
    'Redaction AI detects sensitive information such as personal and financial details in meeting records, so you can protect it.',
  ],
  [
    'How does Acumeet protect my privacy?',
    'Acumeet works only with the meetings it is invited to and gives your organisation control over access, retention and data handling.',
  ],
  [
    'How does Enterprise pricing work?',
    'It depends on your usage, deployment, security, governance and support needs. Contact sales for a proposal.',
  ],
];

/** 16.01 · Pricing Overview (Figma 49:173600). Also 16.02 Plans. */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Pricing overview' }],

  sections: [
    /** 01 · Hero and plans (49:173603). */
    {
      type: 'plans',
      title: 'Simple pricing for',
      accent: 'every team',
      lead: 'Start free. Upgrade for collaboration, governance and enterprise control.',
      compareTo: PRICING.featureComparison.to,
    },

    /** Tabs explorer + "Explorer · Need more control?" (49:174786). */
    explorer(
      {
        title: 'Need more',
        accent: 'control?',
        titleSize: 48,
        lead: 'Enterprise pricing is built around your deployment, security, governance and support needs.',
      },
      enterpriseTabs(access(members, { width: 380 })),
    ),

    /** Benefits · "Card · Ad-on 1–4" (placeholder copy, as in Figma). */
    addOnCards(
      {
        title: 'Add capacity when you',
        accent: 'need it',
        lead: 'Buy extra AI minutes without moving to a higher plan. Availability depends on your plan.',
      },
      [
        [
          'Ad-on 1',
          'Private and self-hosted options for organisations with specific architecture needs.',
        ],
        ['Ad-on 2', 'Customer-managed storage and encryption controls where available.'],
        ['Ad-on 3', 'Advanced administration, access, retention and compliance controls.'],
        ['Ad-on 4', 'Dedicated support and success resources for rollout and ongoing use.'],
      ],
      2,
    ),

    /** Checklist · Not sure which plan fits? (49:173862). */
    {
      type: 'checklist',
      flush: true,
      title: 'Not sure which plan',
      accent: 'fits?',
      lead: 'Tell us how your teams meet and what control you need. We will help you choose.',
      items: [
        ['Talk about product fit, plans and pricing', 'briefcase', 'purple', ROUTES.contactSales],
        ['Evaluate Acumeet with a demo or PoC', 'list-checks', 'green', ROUTES.bookDemo],
        ['Bring your enterprise requirements', 'buildings', 'amber', PRICING.enterprise.to],
        [
          'For technical or billing support, visit the Help Center.',
          'wrench',
          'teal',
          ROUTES.supportPage.overview,
        ],
      ].map(([label, icon, tone, to]) => ({ label, icon, tone, to })),
    },

    /** Directory · PRICING (49:173897). */
    {
      type: 'directory',
      eyebrow: 'Pricing',
      title: 'Explore pricing',
      items: DIRECTORY_KEYS.map((k) => ({
        title: PRICING[k].title,
        description: PRICING[k].tagline,
        to: PRICING[k].to,
      })),
    },
  ],

  faq: faq('Frequently asked questions', PRICING_FAQS),

  cta: {
    title: 'Start free. Scale when you are ready.',
    lead: 'Try Acumeet on your own meetings, or talk to us about a rollout across your organisation.',
    primary: TRY_FREE,
    secondary: CONTACT_SALES,
  },
};
