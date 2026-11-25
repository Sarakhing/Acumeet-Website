import { audit, keys, retention, summary } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { floatActions, floatDecisions, INSIGHTS, POLICY_ROWS, tasks } from './shared';
import { compBreadcrumb, compCta, CONTACT, explorer, statement } from './compliance';

const TALK = CONTACT('Talk to our enterprise team');
const REQUEST = CONTACT('Request documentation');
const heroActions = floatActions(4, tasks(['Jun 3', 'May 8', 'Today']));

/** 08.06 · CBN Requirements (Figma 48:369039). No related row in Figma. */
export default {
  breadcrumb: compBreadcrumb('CBN Requirements'),

  /** 01 · Hero (858): audit log (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Compliance  ·  CBN Requirements',
    title: 'Support your assessment against',
    accent: 'CBN requirements',
    lead: 'Financial institutions can use our security, governance and audit documentation in their internal assessment against applicable CBN requirements.',
    primary: TALK,
    secondary: REQUEST,
    height: 858,
    copyHeight: 316,
    top: 456,
    gap: 44,
    items: [
      [
        230,
        520,
        audit(
          [
            ['09:58', 'Signed in via SSO', 'Ruth Godwin'],
            ['09:46', 'Applied legal hold', 'Admin'],
            ['09:27', 'Edited action item', 'George Nwokoro'],
            ['09:18', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        520,
        floatDecisions(
          'May 28',
          ['Add consent checks to new onboarding', 'Approve the updated data protection policy'],
          'Incomplete staff training records',
          ['Policies', 'Training', 'Consent', 'Monitoring'],
        ),
        -6,
      ],
      [520, 456, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Banks and financial institutions in Nigeria need evidence that new technology meets regulatory expectations. Acumeet provides the controls and documents to support that assessment. Using Acumeet does not by itself make an organisation compliant. Acumeet provides controls and documentation for your',
      'own compliance programme.',
    ),

    /** Tabs explorer + "Explorer · What supports your CBN assessment" (48:345678). */
    explorer({ title: 'What supports your CBN', accent: 'assessment' }, [
      [
        'Security documentation',
        'Architecture, access control and incident response documents.',
        summary('Regulatory Reporting Review', [48, 79, 29], INSIGHTS),
      ],
      [
        'Governance controls',
        'Retention, consent, sharing restrictions and compliance reporting.',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
      [
        'Audit trail',
        'Logged administrative and access activity.',
        audit(
          [
            ['11:09', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:52', 'Applied legal hold', 'Admin'],
            ['10:45', 'Edited action item', 'George Nwokoro'],
            ['10:31', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 360 },
        ),
      ],
      [
        'Data residency',
        'Configured regions and customer-controlled storage where available.',
        keys(['Configure', 'Configure']),
      ],
    ]),
  ],

  cta: compCta(
    'Bring your compliance team in early',
    'We will work through your assessment with you.',
    TALK,
    REQUEST,
  ),
};
