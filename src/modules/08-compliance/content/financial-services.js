import {
  access,
  analytics,
  audit,
  decisions,
  redaction,
  retention,
} from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { members, NIN_SENTENCE, POLICY_ROWS } from './shared';
import { BOOK_DEMO, compBreadcrumb, compCta, CONTACT, explorer, statement } from './compliance';

/** 08.07 · Financial Services Compliance (Figma 48:369157). No related row in Figma. */
export default {
  breadcrumb: compBreadcrumb('Financial Services Compliance'),

  /** 01 · Hero + "Hero carousel · 08.07 · Financial Services Compliance" (48:345905). */
  ...ringsHero({
    eyebrow: 'Compliance  ·  Financial Services Compliance',
    title: 'Compliance support for financial services',
    lead: 'Clearer records of critical meetings, decisions and actions, with enterprise controls on sensitive data.',
    primary: { label: 'Explore financial services', to: ROUTES.industry.financialServices },
    secondary: CONTACT('Request documentation'),
    slides: [
      [
        'Audit log',
        audit(
          [
            ['10:03', 'Updated retention policy', 'Admin'],
            ['09:48', 'Viewed transcript', 'Ruth Godwin'],
            ['09:26', 'Shared meeting record', 'Warith Abraham'],
            ['09:14', 'Changed role to Admin', 'Admin'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Decisions',
        decisions(
          'May 28',
          ['Add consent checks to new onboarding', 'Approve the updated data protection policy'],
          'Incomplete staff training records',
          ['Consent', 'Monitoring', 'Queries', 'Regulatory returns'],
          560,
        ),
      ],
      [
        'Redaction',
        redaction(2, NIN_SENTENCE, [
          ['NIN', '100%'],
          ['Phone number', '90%'],
        ]),
      ],
    ],
  }),

  sections: [
    statement(
      'Credit, risk, audit and board meetings produce decisions regulators may ask about. Acumeet keeps those decisions traceable and the',
      'sensitive content protected.',
    ),

    /** Tabs explorer + "Explorer · Built for regulated financial meetings" (48:346029) — 6 tabs. */
    explorer({ title: 'Built for regulated financial', accent: 'meetings' }, [
      [
        'Traceable decisions',
        'Keep each decision linked to the discussion behind it.',
        decisions(
          'May 30',
          ['Add consent checks to new onboarding', 'Approve the updated data protection policy'],
          'Incomplete staff training records',
          ['Policies', 'Training', 'Consent', 'Monitoring'],
          420,
        ),
      ],
      [
        'Financial data redaction',
        'Detect and protect financial information discussed in sensitive meetings.',
        redaction(6, NIN_SENTENCE, [
          ['NIN', '100%'],
          ['Phone number', '94%'],
        ]),
      ],
      [
        'Restricted access',
        'Limit committee and board records to the right people.',
        access(members, { width: 380 }),
      ],
      [
        'Audit logs',
        'Trace access and administrative activity.',
        audit(
          [
            ['09:58', 'Shared meeting record', 'Warith Abraham'],
            ['09:41', 'Changed role to Admin', 'Admin'],
            ['09:34', 'Downloaded recording', 'Fredelina Augustus'],
            ['09:20', 'Signed in via SSO', 'Ruth Godwin'],
          ],
          { width: 360 },
        ),
      ],
      [
        'Retention',
        'Keep records for the period your policy requires.',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
      [
        'Compliance reporting',
        'Reports on access, retention and activity.',
        analytics('Last 7 days', [74, 28, 67], { width: 480 }),
      ],
    ]),
  ],

  cta: compCta(
    'See Acumeet in a financial services workflow',
    'Bring a committee meeting and see the record it creates.',
    BOOK_DEMO,
    CONTACT('Request a PoC'),
  ),
};
