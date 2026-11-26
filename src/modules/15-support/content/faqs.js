import { access, analytics } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { members, ssoSearch, supDecisions, supplierAtlas, supTasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  DEMO,
  explorer,
  exploreSupport,
  faq,
  link,
  RELATED,
  statement,
  supBreadcrumb,
} from './support';

const heroActions = supTasks(3, ['May 24', 'Next week', 'May 7'], { width: 400, shadow: 'float' });

/** 15.11 · FAQs (Figma 49:167903). */
export default {
  breadcrumb: supBreadcrumb('FAQs'),

  /** 01 · Hero (820): knowledge search and decisions (−6°) behind action items. */
  ...centeredHero({
    eyebrow: 'Support  ·  FAQs',
    title: 'Frequently asked',
    accent: 'questions',
    lead: 'Quick answers about features, plans, privacy and security.',
    primary: CONTACT_SUPPORT,
    secondary: link('Visit the Trust Center', ROUTES.trustCenter),
    height: 820,
    copyHeight: 224,
    top: 366,
    gap: 46,
    items: [
      [
        200,
        402,
        ssoSearch(
          [
            ['Customer Onboarding Call', 'Jun 13'],
            ['Support Escalation Review', 'Apr 22'],
            ['Admin Training Session', 'May 5'],
          ],
          460,
          'float',
        ),
      ],
      [
        807,
        430,
        supDecisions(
          'May 28',
          ['Run admin training in two sessions', 'Move service reviews to monthly'],
          'Integration setup blocked on permissions',
          ['Onboarding', 'SSO setup', 'Tickets', 'Training'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 366, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement('The questions we hear most, with short answers and links', 'to more detail.'),
    explorer(
      {
        title: 'Browse by',
        accent: 'topic',
        lead: 'Answers grouped by product, plans and billing, and privacy and security.',
      },
      [
        ['Product', 'Atlas, Redaction AI and languages.', supplierAtlas],
        [
          'Plans and billing',
          'How plans and Enterprise pricing work.',
          analytics('Last 7 days', [83, 55, 43], { width: 350 }),
        ],
        [
          'Privacy and security',
          'Data ownership, access and AI training.',
          access(members, { width: 380 }),
        ],
      ],
    ),
  ],

  faq: faq('Top questions', [
    [
      'What does Atlas do?',
      'Atlas lets you ask questions about your meetings and get answers from your meeting records.',
    ],
    [
      'Does Acumeet support multiple languages?',
      'Yes. Supported languages depend on your plan. Compare plans or talk to us for the current list.',
    ],
    [
      'What is Redaction AI?',
      'Redaction AI detects sensitive information such as personal and financial details in meeting records, so you can protect it.',
    ],
    [
      'How does Acumeet protect my data?',
      'Acumeet includes access controls, encryption and data ownership controls. See the Trust Center for details.',
    ],
    [
      'Is customer data used to train AI models?',
      'No. Customer meeting data is not used to train public or shared AI models.',
    ],
    [
      'How does Enterprise pricing work?',
      'It depends on your usage, deployment, security, governance and support needs. Contact sales for a proposal.',
    ],
  ]),

  related: exploreSupport(RELATED),
  cta: cta('Didn’t find your answer?', 'Contact support and we will help.', CONTACT_SUPPORT, DEMO),
};
