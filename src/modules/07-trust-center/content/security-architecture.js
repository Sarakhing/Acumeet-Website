import { access, audit, keys, retention } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { members, POLICY_ROWS, supplierAtlas } from './shared';
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

/** 07.08 · Security Architecture (Figma 48:337990). */
export default {
  breadcrumb: tcBreadcrumb('Security architecture'),

  /** 01 · Hero + "Hero carousel · 07.08 · Security Architecture" (48:341003). */
  ...ringsHero({
    eyebrow: 'Trust Center  ·  Security architecture',
    title: 'How Acumeet is built to protect meeting data',
    lead: 'An overview of the identity, isolation, encryption and monitoring layers that protect your meeting intelligence.',
    primary: REQUEST('Request the architecture overview'),
    secondary: BOOK_DEMO,
    slides: [
      ['Keys', keys(['Connected', 'Connected'], { width: 560 })],
      ['Access', access(members, { width: 380 })],
      [
        'Audit log',
        audit(
          [
            ['11:28', 'Signed in via SSO', 'Ruth Godwin'],
            ['11:17', 'Applied legal hold', 'Admin'],
            ['10:59', 'Edited action item', 'George Nwokoro'],
            ['10:51', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 360 },
        ),
      ],
    ],
  }),

  sections: [
    statement(
      'Security is layered so no single control carries all the weight. This overview explains each layer; the full security architecture document is',
      'available on request.',
    ),

    /** Tabs explorer + "Explorer · Architecture layers" (48:341124) — 6 tabs. */
    explorer({ title: 'Architecture', accent: 'layers' }, [
      [
        'Identity layer',
        'SSO, role-based access and administrator consent control who can see meeting intelligence.',
        access(members, { width: 380 }),
      ],
      [
        'Tenant isolation',
        'Meeting data is logically separated by organisation.',
        access(members, { width: 380 }),
      ],
      [
        'Encryption layer',
        'Meeting data is encrypted in transit and at rest, with customer-managed keys on eligible plans.',
        keys(['Configure', 'Configure']),
      ],
      [
        'AI processing layer',
        'Inference only, with restricted and logged human access.',
        supplierAtlas,
      ],
      [
        'Storage layer',
        'Data sits within your configured environment, including customer-controlled storage.',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
      [
        'Monitoring layer',
        'Logged administrative actions give your team visibility into platform activity.',
        audit(
          [
            ['09:01', 'Viewed transcript', 'Ruth Godwin'],
            ['08:51', 'Shared meeting record', 'Warith Abraham'],
            ['08:34', 'Changed role to Admin', 'Admin'],
            ['08:27', 'Downloaded recording', 'Fredelina Augustus'],
          ],
          { width: 360 },
        ),
      ],
    ]),

    docs(
      {
        title: 'Architecture',
        accent: 'documents',
        lead: 'Documents that describe how Acumeet is built to protect meeting data.',
        headPad: true,
      },
      [
        ['Security architecture overview', '#c2185b'],
        ['Tenant isolation model', '#2185f6', 'sparkle'],
        ['AI model architecture', '#7c4ddb', 'sparkle'],
        ['Access control policy', '#1e9e62', 'user-check'],
      ],
    ),
  ],

  related: exploreTrust(['certifications', 'overview', 'privacy', 'dataProcessing']),

  cta: tcCta('Review the full architecture', 'Request our security architecture overview.'),
};
