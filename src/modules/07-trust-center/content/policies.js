import { access, actions, audit, redaction, retention } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { members, POLICY_ROWS } from './shared';
import {
  docs,
  exploreTrust,
  explorer,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
  VISIT_TRUST,
} from './trust-center';

/** 07.09 · Policies (Figma 48:338077). */
export default {
  breadcrumb: tcBreadcrumb('Policies'),

  /** 01 · Hero (664 tall): audit log in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Trust Center  ·  Policies',
    title: 'Policies for security, legal and',
    accent: 'procurement teams',
    lead: 'Review our public policies, or request the internal policies your due diligence needs.',
    primary: REQUEST('Request documentation'),
    secondary: VISIT_TRUST,
    window: audit(
      [
        ['09:58', 'Updated retention policy', 'Admin'],
        ['09:44', 'Viewed transcript', 'Ruth Godwin'],
        ['09:23', 'Shared meeting record', 'Warith Abraham'],
        ['09:12', 'Changed role to Admin', 'Admin'],
      ],
      { width: 500 },
    ),
    overlay: actions(
      3,
      [
        ['Confirm training completion for new staff', 'May 6'],
        ['Review open regulator queries', 'Jun 11'],
        ['Share the compliance monitoring report', 'Today'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 311,
    height: 664,
  }),

  sections: [
    statement(
      'Our policies describe how we protect, process, retain and delete customer data, and how we respond when',
      'something goes wrong.',
    ),

    /** Tabs explorer + "Explorer · Policy areas" (48:341625). */
    explorer({ title: 'Policy', accent: 'areas' }, [
      [
        'Privacy and data use',
        'How we collect, use and protect personal data.',
        redaction(
          7,
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
            ['Phone number', '91%'],
          ],
        ),
      ],
      [
        'Access control',
        'Who can access what, and how that access is granted and revoked.',
        access(members, { width: 380 }),
      ],
      [
        'Data deletion',
        'How and when customer data is deleted.',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
      [
        'Incident response',
        'How we detect, respond to and communicate incidents.',
        audit(
          [
            ['11:19', 'Updated retention policy', 'Admin'],
            ['10:57', 'Viewed transcript', 'Ruth Godwin'],
            ['10:45', 'Shared meeting record', 'Warith Abraham'],
            ['10:26', 'Changed role to Admin', 'Admin'],
          ],
          { width: 360 },
        ),
      ],
    ]),

    docs(
      {
        title: 'Available',
        accent: 'policies',
        lead: 'Public policies, plus internal policies available for due diligence.',
        headPad: true,
        rows: [4, 4],
      },
      [
        ['Terms of Service', '#2185f6'],
        ['Privacy Policy', '#7c4ddb'],
        ['Data Processing Agreement', '#1e9e62'],
        ['Data deletion policy', '#d97706'],
        ['Access control policy', '#0e9aa7', 'user-check'],
        ['Incident response policy', '#c2185b'],
        ['Breach notification procedure', '#2185f6', 'sparkle'],
        ['Disaster recovery plan', '#7c4ddb', 'sparkle'],
      ],
    ),
  ],

  related: exploreTrust(['certifications', 'overview', 'privacy', 'dataProcessing']),

  cta: tcCta(
    'Get the policies your review needs',
    'Request documentation and our team will share it.',
  ),
};
