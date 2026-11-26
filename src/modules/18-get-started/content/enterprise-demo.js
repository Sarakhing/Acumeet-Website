import {
  chips,
  EMAIL,
  gsBreadcrumb,
  heroForm,
  INDUSTRY,
  NAME,
  ORG,
  role,
  textarea,
} from './getStarted';

/** 18.04 · Request Enterprise Demo (Figma 49:196342). */
export default {
  breadcrumb: gsBreadcrumb('Request Enterprise Demo'),
  sections: [
    heroForm(
      {
        eyebrow: 'Enterprise demo',
        title: 'See Acumeet through an enterprise lens',
        lead: 'Bring your IT, security, governance, compliance and deployment questions. We will shape the demo around them.',
        value: {
          title: 'Built for a buying committee',
          body: 'Executives, IT, information security, compliance, risk and the business teams who use meeting intelligence every day.',
        },
        steps: [
          [
            'Meeting intelligence',
            'How conversations become transcripts, summaries, decisions and actions.',
          ],
          [
            'Security and governance',
            'How you can evaluate access, data handling, auditability and control.',
          ],
          ['Enterprise fit', 'Integrations, administration, deployment, onboarding and scale.'],
        ],
      },
      {
        title: 'Test the questions that matter',
        fields: [
          NAME,
          EMAIL,
          ORG,
          role('e.g. CISO'),
          INDUSTRY,
          chips('focus', 'Which areas should the demo focus on?', [
            'Product',
            'Security',
            'Governance',
            'Integrations',
            'Deployment',
            'Administration',
            'Other',
          ]),
          textarea(
            'requirements',
            'Tell us about your requirements',
            'Your environment, stakeholders and priorities',
          ),
        ],
        submit: 'Request enterprise demo',
        thanks:
          'Thanks. Your enterprise demo request is in. We will review your priorities and follow up with the right next step.',
      },
    ),
  ],
};
