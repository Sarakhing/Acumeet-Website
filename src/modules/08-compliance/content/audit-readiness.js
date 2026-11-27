import { actions, analytics, audit, summary, transcript } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import {
  BOOK_DEMO,
  compBreadcrumb,
  compCta,
  CONTACT,
  exploreCompliance,
  explorer,
  statement,
} from './compliance';

const REQUEST = CONTACT('Request documentation');

/** 08.09 · Audit Readiness (Figma 48:369199). */
export default {
  breadcrumb: compBreadcrumb('Audit readiness'),

  /** 01 · Hero (664): audit log in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Compliance  ·  Audit readiness',
    title: 'Support audit and vendor',
    accent: 'reviews',
    lead: 'Logged activity and ready documentation that make internal and external reviews easier.',
    primary: REQUEST,
    secondary: BOOK_DEMO,
    window: audit(
      [
        ['09:51', 'Signed in via SSO', 'Ruth Godwin'],
        ['09:33', 'Applied legal hold', 'Admin'],
        ['09:25', 'Edited action item', 'George Nwokoro'],
        ['09:10', 'Approved redactions', 'Faith Oluwale'],
      ],
      { width: 500 },
    ),
    overlay: actions(
      5,
      [
        ['Share the audit status report with the committee', 'Jun 18'],
        ['Schedule the IT general controls walkthrough', 'Next week'],
        ['Close out last quarter’s low-risk findings', 'Jun 28'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 311,
    height: 664,
  }),

  sections: [
    statement(
      'Logged administrative activity supports internal review and traceability. Security architecture, access control, data lifecycle and incident response documents are available',
      'for due diligence.',
    ),

    /** Tabs explorer + "Explorer · What makes Acumeet audit-ready" (48:346504). */
    explorer({ title: 'What makes Acumeet', accent: 'audit-ready' }, [
      [
        'Audit logs',
        'Trace access, changes and administrative activity.',
        audit(
          [
            ['11:26', 'Updated retention policy', 'Admin'],
            ['11:11', 'Viewed transcript', 'Ruth Godwin'],
            ['10:49', 'Shared meeting record', 'Warith Abraham'],
            ['10:37', 'Changed role to Admin', 'Admin'],
          ],
          { width: 480 },
        ),
      ],
      [
        'Traceable decisions',
        'Return to the exact meeting moment a decision was made.',
        transcript([
          [
            'Faith Oluwale',
            '03:21',
            'We completed 23 story points, which is a 15% increase from the previous sprint.',
          ],
          [
            'George Nwokoro',
            '04:28',
            'The authentication module is progressing well, but we need a security review.',
          ],
          [
            'Fredelina Augustus',
            '05:35',
            'I can coordinate with the InfoSec team to schedule that audit.',
          ],
        ]),
      ],
      [
        'Compliance reporting',
        'Reports on access, retention and activity.',
        analytics('Last 30 days', [90, 46, 86], { width: 350 }),
      ],
      [
        'Documentation',
        'Architecture, access, lifecycle and incident documents on request.',
        summary(
          'Audit Walkthrough',
          [78, 79, 39],
          [
            'Management responses are due before the next committee.',
            'Internal Audit reported two findings closed this quarter.',
          ],
          { width: 480 },
        ),
      ],
    ]),
  ],

  related: exploreCompliance(['cbn', 'financialServices']),

  cta: compCta(
    'Get ready for your next review',
    'Request the documentation auditors ask for.',
    REQUEST,
    BOOK_DEMO,
  ),
};
