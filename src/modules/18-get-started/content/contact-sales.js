import { chips, EMAIL, gsBreadcrumb, heroForm, NAME, ORG, role, textarea } from './getStarted';

/** 18.06 · Contact Sales (Figma 49:196717). Also 16.07 Contact Sales. */
export default {
  breadcrumb: gsBreadcrumb('Contact sales'),
  sections: [
    heroForm(
      {
        eyebrow: 'Contact sales',
        title: 'Have a question before you take the next step?',
        lead: 'Talk to our sales team about product fit, plans, pricing, demos and how to evaluate Acumeet for your organisation.',
        value: {
          title: 'Tell us what you are trying to solve',
          body: 'Better meeting documentation, clearer decision tracking, stronger accountability or more governed meeting intelligence. Give us the context and we will route your enquiry.',
        },
      },
      {
        fields: [
          NAME,
          EMAIL,
          ORG,
          role('e.g. COO'),
          chips('topics', 'What can we help with?', [
            'Pricing',
            'Plans',
            'Demo',
            'Product fit',
            'PoC',
            'Enterprise requirements',
            'Other',
          ]),
          textarea('message', 'Message', 'Tell us a little about your team and what you need'),
        ],
        submit: 'Contact sales',
        noun: 'enquiry',
        thanks:
          'Thanks. Your message is with our sales team and we will follow up with the right next step.',
      },
    ),
  ],
};
