import { access, audit, capture, keys } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { members, supplierAtlas } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  explorer,
  exploreSupport,
  faq,
  link,
  RELATED,
  statement,
  supBreadcrumb,
} from './support';

/** 15.09 · Security (Figma 49:167728). */
export default {
  breadcrumb: supBreadcrumb('Security'),

  /** 01 · Hero + "Hero carousel · 15.09 · Security" (49:90035). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Support  ·  Security',
    title: 'Security and privacy help',
    lead: 'Answers to common security and privacy questions, and where to find our documentation.',
    primary: link('Visit the Trust Center', ROUTES.trustCenter),
    secondary: CONTACT_SUPPORT,
  },
  carousel: [
    { label: 'Access', content: access(members, { width: 380 }) },
    {
      label: 'Audit log',
      content: audit(
        [
          ['09:37', 'Exported summary', 'George Nwokoro'],
          ['09:27', 'Updated retention policy', 'Admin'],
          ['09:10', 'Viewed transcript', 'Ruth Godwin'],
          ['09:03', 'Shared meeting record', 'Warith Abraham'],
        ],
        { width: 360 },
      ),
    },
    { label: 'Keys', content: keys(['Configure', 'Configure']) },
  ],

  sections: [
    statement(
      'Security questions from users and administrators, answered. For full documentation, visit',
      'the Trust Center.',
    ),
    explorer({ title: 'Security', accent: 'topics' }, [
      [
        'Meeting access',
        'Acumeet joins meetings only when it is invited.',
        capture('Mon, Jun 8', [
          ['Support Escalation Review', '11:00 AM · Zoom'],
          ['Admin Training Session', '3:30 PM · Meet'],
          ['Service Review', '10:30 AM · Teams'],
        ]),
      ],
      [
        'Data ownership',
        'The customer retains ownership of its meeting data.',
        keys(['Configure', 'Configure']),
      ],
      [
        'AI training',
        'Customer meeting data is not used to train public or shared AI models.',
        supplierAtlas,
      ],
      [
        'Access control',
        'Administrators can control and revoke permissions.',
        access(members, { width: 380 }),
      ],
    ]),
  ],

  faq: faq('Common questions', [
    [
      'Does Acumeet monitor meetings automatically?',
      'No. Acumeet joins meetings only when it is invited.',
    ],
    [
      'Does Acumeet access emails or chat messages?',
      'No. It works only with the meeting content it is invited to process.',
    ],
    ['Who owns the meeting data?', 'You do. The customer retains ownership of its meeting data.'],
    [
      'What happens when we end our contract?',
      'Customer data follows the agreed offboarding and secure deletion process for your deployment.',
    ],
  ]),

  related: exploreSupport(RELATED),
  cta: cta(
    'Need more detail?',
    'Request our security documentation.',
    link('Request documentation', ROUTES.contactSales),
    CONTACT_SUPPORT,
  ),
};
