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

/** 18.07 · Contact Enterprise Team (Figma 49:196883). */
export default {
  breadcrumb: gsBreadcrumb('Contact Enterprise Team'),
  sections: [
    heroForm(
      {
        eyebrow: 'Contact the enterprise team',
        titleSize: 44,
        title: 'Planning Acumeet across your organisation? Bring the complex questions.',
        lead: 'When meeting intelligence touches sensitive data and many stakeholders, evaluation gets more complex. Talk to us about the requirements behind a secure, governed rollout.',
        value: { title: 'Talk about the requirements behind the product', body: null },
        steps: [
          ['Security and access', 'The controls you need around sensitive meeting information.'],
          [
            'Governance and auditability',
            'How meeting records, decisions and accountability fit your requirements.',
          ],
          [
            'Data control and deployment',
            'Where data and architecture need to sit to meet your policies.',
          ],
          ['Integrations and administration', 'How Acumeet fits the systems around your meetings.'],
          [
            'Onboarding and rollout',
            'What your teams need to adopt Acumeet across the organisation.',
          ],
        ],
      },
      {
        fields: [
          NAME,
          EMAIL,
          ORG,
          role('e.g. Head of IT'),
          INDUSTRY,
          chips('priorities', 'What are your priority requirements?', [
            'Security',
            'Governance',
            'Data control',
            'Integrations',
            'Deployment',
            'Administration',
            'Onboarding',
            'Other',
          ]),
          textarea(
            'environment',
            'Tell us about your environment or evaluation',
            'Systems, policies, stakeholders and timelines',
          ),
        ],
        submit: 'Contact enterprise team',
        thanks:
          'Thanks. Your message is with our enterprise team. We will review your requirements and follow up with the right next step.',
      },
    ),
  ],
};
