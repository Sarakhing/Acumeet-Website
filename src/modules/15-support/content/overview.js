import { createElement as h } from 'react';
import { windowHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import SupportSearch from '../components/SupportSearch';
import { ssoSearch, supTasks } from './shared';
import {
  CONTACT_SUPPORT,
  DEMO,
  DIRECTORY_KEYS,
  explorer,
  serviceStatus,
  SUPPORT,
  supportPlans,
  tickets,
} from './support';

const S = ROUTES.supportPage;
const base = windowHero({
  eyebrow: 'Support',
  title: 'How can we',
  accent: 'help?',
  lead: 'Search guides and documentation, or contact our team.',
  primary: null,
  secondary: CONTACT_SUPPORT,
  window: ssoSearch([
    ['Customer Onboarding Call', 'Jun 13'],
    ['Support Escalation Review', 'Apr 22'],
    ['Admin Training Session', 'May 5'],
  ]),
  overlay: supTasks(4, ['Fri', 'May 17', 'Today'], { width: 360, shadow: 'float' }),
  overlayY: 327,
  height: 680,
});

/** 15.01 · Support Overview (Figma 49:167033). Also 15.02 Help Center. */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Support Overview' }],

  /** 01 · Hero (680): search bar, knowledge search in the window, action items overlapping. */
  hero: { ...base.hero, extra: h(SupportSearch, { to: S.faqs }) },

  sections: [
    /** Index · Start with the answer that gets you moving (49:167121). */
    {
      type: 'index',
      title: 'Start with the answer that gets',
      accent: 'you moving',
      items: [
        [
          'Getting started',
          'Set up Acumeet and connect your first meeting platform.',
          S.gettingStarted,
        ],
        [
          'Feature guides',
          'Learn transcription, summaries, action items, speaker recognition, Redaction AI and Atlas.',
          S.featureGuides,
        ],
        [
          'Integration guides',
          'Connect Acumeet to your meeting and work tools.',
          ROUTES.developersPage.integrationGuides,
        ],
        ['Admin and security', 'Manage users, access and enterprise controls.'],
        ['Billing', 'Plans, invoices and account questions.', S.billing],
        ['FAQs and troubleshooting', 'Quick answers and fixes for common issues.'],
        [
          'Documentation',
          'Product documentation for features, workflows and administration.',
          ROUTES.resourcesPage.documentation,
        ],
      ].map(([title, body, to]) => ({ title, body, to, link: to ? 'Explore' : undefined })),
    },

    /** 03 · Contact support and ticket form (49:167207). */
    {
      type: 'form',
      variant: 'panel',
      id: 'ticket',
      title: 'Raise a support ticket',
      lead: 'Send us the details so the support team can review them.',
      aside: {
        title: 'Need a person?',
        lead: 'Tell us what you were trying to do and what happened. Add a screenshot if it helps.',
        cta: CONTACT_SUPPORT,
      },
    },

    /** Tabs explorer + "Explorer · More ways to get help" (49:87934). */
    explorer(
      {
        title: 'More ways to get help',
        lead: 'Check a ticket, see service status or compare support plans.',
      },
      [
        ['Ticket status', 'Already raised a ticket? Check ticket status.', tickets()],
        [
          'Service status',
          'Check service status: current availability, incidents and maintenance.',
          serviceStatus(),
        ],
        [
          'Support plans',
          'Support that fits how your organisation operates. For service-level details, talk to our team.',
          supportPlans({ selected: 2 }),
        ],
      ],
    ),

    /** Directory · SUPPORT (49:167256). */
    {
      type: 'directory',
      eyebrow: 'Support',
      title: 'Explore Support',
      items: DIRECTORY_KEYS.map((k) => ({
        title: SUPPORT[k].title,
        description: SUPPORT[k].tagline,
        to: SUPPORT[k].to,
      })),
    },
  ],

  cta: { title: 'How can we help?', lead: ' ', primary: DEMO, secondary: null },
};
