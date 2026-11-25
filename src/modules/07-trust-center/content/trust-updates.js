import { access, audit, retention, summary } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { members, POLICY_ROWS } from './shared';
import {
  cards,
  exploreTrust,
  explorer,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
  VISIT_TRUST,
} from './trust-center';

/** 07.13 · Trust Updates (Figma 48:338442). The "Recent updates" cards are placeholders in Figma. */
export default {
  breadcrumb: tcBreadcrumb('Trust Updates'),

  /** 01 · Hero + "Hero carousel · 07.13 · Trust Updates" (48:342469). */
  ...ringsHero({
    eyebrow: 'Trust Center  ·  Trust Updates',
    title: 'Trust updates',
    lead: 'Changes to our security, privacy and compliance posture, published as they happen.',
    primary: REQUEST('Subscribe to updates'),
    secondary: VISIT_TRUST,
    slides: [
      [
        'Audit log',
        audit(
          [
            ['09:43', 'Viewed transcript', 'Ruth Godwin'],
            ['09:28', 'Shared meeting record', 'Warith Abraham'],
            ['09:06', 'Changed role to Admin', 'Admin'],
            ['08:54', 'Downloaded recording', 'Fredelina Augustus'],
          ],
          { width: 560 },
        ),
      ],
      ['Access', access(members, { width: 380 })],
      ['Retention', retention(POLICY_ROWS, { status: 'All meetings', width: 350 })],
    ],
  }),

  sections: [
    statement(
      'Trust is ongoing. This page records material changes to our policies, subprocessors, controls and certifications so your team does not',
      'have to ask.',
    ),

    /** Tabs explorer + "Explorer · What we publish here" (48:342590). */
    explorer({ title: 'What we publish', accent: 'here' }, [
      [
        'Policy changes',
        'Updates to privacy, security and data handling policies.',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
      [
        'Subprocessor changes',
        'New or removed subprocessors.',
        audit(
          [
            ['10:23', 'Viewed transcript', 'Ruth Godwin'],
            ['10:15', 'Shared meeting record', 'Warith Abraham'],
            ['10:00', 'Changed role to Admin', 'Admin'],
            ['09:38', 'Downloaded recording', 'Fredelina Augustus'],
          ],
          { width: 360 },
        ),
      ],
      [
        'New controls',
        'Security and governance features as they launch.',
        access(members, { width: 380 }),
      ],
      [
        'Certification updates',
        'Changes in certification and assessment status.',
        summary(
          'Architecture Review',
          [62, 75, 47],
          [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ],
          { width: 480 },
        ),
      ],
    ]),

    /** Benefits — Figma placeholder entries. */
    cards(
      {
        title: 'Recent',
        accent: 'updates',
        lead: 'Sample entries. Replace with real updates before publishing.',
      },
      [
        ['[Date]', '[Update title and short description]'],
        ['[Date]', '[Update title and short description]'],
        ['[Date]', '[Update title and short description]'],
      ],
    ),
  ],

  related: exploreTrust(['overview', 'privacy', 'dataProcessing', 'subprocessors']),

  cta: tcCta(
    'Stay informed about changes',
    'Subscribe to trust updates for your security team.',
    'Subscribe to updates',
  ),
};
