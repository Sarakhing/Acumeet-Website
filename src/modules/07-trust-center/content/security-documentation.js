import { access, actions, audit, decisions, keys, search } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { members } from './shared';
import {
  BOOK_DEMO,
  docs,
  exploreTrust,
  explorer,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
} from './trust-center';

const heroActions = actions(
  5,
  [
    ['Review privileged role assignments', 'Jun 27'],
    ['Confirm MFA enforcement for admins', 'Next week'],
    ['Share the penetration test summary', 'Jun 10'],
  ],
  { width: 400, shadow: 'float' },
);

/** 07.11 · Security Documentation (Figma 48:338251). */
export default {
  breadcrumb: tcBreadcrumb('Security Documentation'),

  /** 01 · Hero (948 tall): knowledge search (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Trust Center  ·  Security Documentation',
    title: 'Security documentation for your',
    accent: 'review',
    lead: 'Architecture, access, incident and recovery documents for security teams and vendor reviews.',
    primary: REQUEST('Request documentation'),
    secondary: BOOK_DEMO,
    height: 948,
    copyHeight: 316,
    top: 456,
    gap: 44,
    items: [
      [
        230,
        520,
        search(
          'admin access review',
          [
            ['Architecture Review', 'Jun 3', '…three stale admin accounts found.'],
            ['Security Review', 'Apr 12', '…MFA enforced for all administrators.'],
            ['Access Review Meeting', 'May 21', '…exports restricted to admin roles.'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        520,
        decisions(
          'Jun 6',
          ['Enable SIEM forwarding for audit events', 'Enforce MFA for all administrators'],
          'Unrotated storage keys',
          ['Encryption', 'Access reviews', 'MFA', 'Key rotation'],
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
      'Security reviews go faster with the right documents up front. Request the set below and our team will share what',
      'your review needs.',
    ),

    /** Tabs explorer + "Explorer · What the documents cover" (48:342155). */
    explorer(
      {
        title: 'What the documents',
        accent: 'cover',
        lead: 'A summary of what each security document explains.',
      },
      [
        [
          'Architecture',
          'How the platform is built and isolated.',
          keys(['Configure', 'Configure']),
        ],
        ['Access', 'How access is granted, reviewed and revoked.', access(members, { width: 380 })],
        [
          'Incidents',
          'How incidents are handled and communicated.',
          audit(
            [
              ['10:25', 'Shared meeting record', 'Warith Abraham'],
              ['10:05', 'Changed role to Admin', 'Admin'],
              ['09:55', 'Downloaded recording', 'Fredelina Augustus'],
              ['09:38', 'Signed in via SSO', 'Ruth Godwin'],
            ],
            { width: 360 },
          ),
        ],
        [
          'Recovery',
          'How the service is restored after disruption.',
          actions(
            4,
            [
              ['Review privileged role assignments', 'Fri'],
              ['Confirm MFA enforcement for admins', 'Next week'],
              ['Share the penetration test summary', 'Jun 14'],
            ],
            { width: 400 },
          ),
        ],
      ],
    ),

    docs(
      {
        title: 'Security',
        accent: 'documents',
        lead: 'Request these documents to support your security review.',
        headPad: true,
        rows: [4, 4],
      },
      [
        ['Security architecture overview', '#7c4ddb'],
        ['Tenant isolation model', '#1e9e62', 'sparkle'],
        ['AI model architecture', '#d97706', 'sparkle'],
        ['Access control policy', '#0e9aa7', 'user-check'],
        ['Incident response policy', '#c2185b'],
        ['Breach notification procedure', '#2185f6', 'sparkle'],
        ['Disaster recovery plan', '#7c4ddb', 'sparkle'],
        ['Data deletion policy', '#1e9e62'],
      ],
    ),
  ],

  related: exploreTrust(['overview', 'privacy', 'dataProcessing', 'subprocessors']),

  cta: tcCta('Start your security review', 'Request our security documentation.'),
};
