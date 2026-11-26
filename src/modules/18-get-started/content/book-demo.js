import { EMAIL, gsBreadcrumb, heroForm, NAMES, ORG, role, textarea } from './getStarted';

/** 18.03 · Book a Demo (Figma 49:196176). */
export default {
  breadcrumb: gsBreadcrumb('Book a Demo'),
  sections: [
    heroForm(
      {
        eyebrow: 'Book a demo',
        title: 'Book an Acumeet demo',
        lead: 'Get a guided walkthrough of how Acumeet turns meeting conversations into decisions, actions and searchable knowledge.',
        value: {
          title: 'Bring your meetings. Bring your questions.',
          body: 'See transcription, summaries, decisions, action items, speaker context, Redaction AI and searchable meeting knowledge. If security, governance or data control are part of your evaluation, tell us in the form.',
        },
      },
      {
        fields: [
          ...NAMES,
          { ...EMAIL, half: false },
          ORG,
          role('e.g. Head of Risk', 'Job role or function'),
          textarea(
            'demo',
            'What would you like to see in the demo?',
            'Tell us about your meetings and what you want to see',
          ),
          textarea('notes', 'Anything else we should know?', 'Add any context', true),
        ],
        submit: 'Book a demo',
        thanks:
          'Thanks. Your demo request is in. We will review the details and follow up with the right next step.',
      },
    ),
  ],
};
