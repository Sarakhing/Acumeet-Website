import {
  access,
  actions,
  audit,
  decisions,
  redaction,
  retention,
} from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { members, POLICY_ROWS } from './shared';
import {
  docs,
  explorer,
  faq,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
  VISIT_TRUST,
} from './trust-center';

const heroActions = actions(
  5,
  [
    ['Confirm training completion for new staff', 'Jun 9'],
    ['Review open regulator queries', 'May 14'],
    ['Share the compliance monitoring report', 'Today'],
  ],
  { width: 400, shadow: 'float' },
);

/** 07.10 · Certifications (Figma 48:337477). Status values are placeholders in Figma ("[to confirm]"). */
export default {
  breadcrumb: tcBreadcrumb('Certifications'),

  /** 01 · Hero (858 tall): audit log (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Trust Center  ·  Certifications',
    title: 'Certifications and independent',
    accent: 'assurance',
    lead: 'The standards Acumeet works to, where each one stands today, and how to request the evidence your review needs.',
    primary: REQUEST('Request trust documentation'),
    secondary: VISIT_TRUST,
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
            ['10:41', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:25', 'Applied legal hold', 'Admin'],
            ['10:19', 'Edited action item', 'George Nwokoro'],
            ['10:06', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        520,
        decisions(
          'Jun 4',
          ['Assign owners to open regulator queries', 'Move policy reviews to quarterly'],
          'Incomplete staff training records',
          ['Queries', 'Regulatory returns', 'Policies', 'Training'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 456, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'We publish certification status only when it is current and verifiable. Where a certification is in progress, we say so and share the controls and',
      'documentation available today.',
    ),

    /** Tabs explorer + "Explorer · Where each framework stands" (48:341932). */
    explorer(
      {
        title: 'Where each framework',
        accent: 'stands',
        lead: 'Status values are placeholders until confirmed by Snapnet.',
      },
      [
        [
          'ISO/IEC 27001',
          'Information security management. Status: [to confirm].',
          access(members, { width: 380 }),
        ],
        [
          'SOC 2',
          'Security, availability and confidentiality controls. Status: [to confirm].',
          audit(
            [
              ['09:11', 'Viewed transcript', 'Ruth Godwin'],
              ['08:54', 'Shared meeting record', 'Warith Abraham'],
              ['08:47', 'Changed role to Admin', 'Admin'],
              ['08:33', 'Downloaded recording', 'Fredelina Augustus'],
            ],
            { width: 360 },
          ),
        ],
        [
          'NDPR',
          'Nigerian data protection. Controls and documentation available on request.',
          redaction(
            2,
            [
              'We have confirmed the offer for',
              '[PERSON_NAME]',
              'His NIN is',
              '[NIN]',
              'linked to his BVN',
              '[BANK_VERIFICATION_NUMBER]',
            ],
            [
              ['NIN', '100%'],
              ['Phone number', '90%'],
            ],
          ),
        ],
        [
          'GDPR',
          'Privacy controls and GDPR documentation available on request.',
          retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
        ],
      ],
    ),

    docs(
      { title: 'Evidence you can', accent: 'request', lead: 'Shared under NDA where required.' },
      [
        ['Security architecture overview', '#d97706'],
        ['Access control policy', '#0e9aa7', 'user-check'],
        ['Incident response policy', '#c2185b'],
        ['Data deletion policy', '#2185f6'],
      ],
    ),
  ],

  faq: faq(
    [
      ['Is Acumeet ISO 27001 certified?', '[To confirm with Snapnet before publishing.]'],
      [
        'Can we see audit reports?',
        'Request documentation and our team will share what is available for your review.',
      ],
      [
        'Do you complete security questionnaires?',
        'Yes. We support security reviews and vendor due diligence.',
      ],
    ],
    'Questions security teams ask',
  ),

  cta: tcCta(
    'Get the evidence your review needs',
    'Request our security, privacy and compliance documentation.',
  ),
};
