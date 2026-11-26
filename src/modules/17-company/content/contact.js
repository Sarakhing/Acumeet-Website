import { ROUTES } from '@/constants/routes';
import { coBreadcrumb } from './company';

/** 17.08 · Contact (Figma 49:188858). */
export default {
  breadcrumb: coBreadcrumb('Contact'),
  sections: [
    {
      type: 'hero',
      eyebrow: 'Contact',
      title: 'Start the right conversation',
      lead: 'Tell us what you are exploring and we will help you find the next step: a product question, an enterprise evaluation, support or something else.',
    },
    {
      type: 'cards',
      variant: 'icon',
      titleSize: 44,
      pt: 0,
      pb: 96,
      gap: 16,
      title: 'Who to contact',
      lead: 'Choose the team that can help with your question.',
      cards: [
        {
          icon: 'handshake',
          title: 'Sales',
          body: 'Talk to our sales team about product fit, plans, pricing, demos and how to evaluate Acumeet.',
          link: 'Contact sales',
          to: ROUTES.contactSales,
        },
        {
          icon: 'buildings',
          title: 'Enterprise team',
          body: 'Talk to us about the requirements behind a secure, governed rollout.',
          link: 'Contact enterprise team',
          to: ROUTES.enterprise,
        },
        {
          icon: 'lifebuoy',
          title: 'Support',
          body: 'Search guides and documentation, or contact our team.',
          link: 'Contact support',
          to: ROUTES.supportPage.contact,
        },
        {
          icon: 'calendar-check',
          title: 'Book a demo',
          body: 'Get a guided walkthrough of how Acumeet turns meeting conversations into decisions, actions and searchable knowledge.',
          link: 'Book a demo',
          to: ROUTES.bookDemo,
        },
      ],
    },
    {
      type: 'message',
      eyebrow: 'Get in touch',
      title: 'Something else? Send us a message',
      lead: 'Tell us what you need and the right team will follow up.',
      details: [
        ['EMAIL', 'info@acumeet.com', 'mailto:info@acumeet.com'],
        ['PHONE', '+1 716 317 9506', 'tel:+17163179506'],
      ],
      note: 'Contact details are taken from the site footer.',
    },
  ],
};
