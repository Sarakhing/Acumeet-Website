import { access, actions, audit, keys, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { chapters, faq, HERO_ACTIONS, secBreadcrumb, secCta } from './security';

/** 06.02 · Zero Trust Architecture (Figma 48:325303). */
export default {
  breadcrumb: secBreadcrumb('Zero Trust Architecture'),

  /** 01 · Hero (774 tall): keys & storage in the window, audit log overlapping. */
  ...windowHero({
    eyebrow: 'Zero Trust Architecture',
    title: 'Verify access. Limit trust. Protect',
    accent: 'every boundary.',
    lead: 'Zero Trust is an approach to security that avoids treating a user, device, network, or service as automatically trusted simply because it is inside a particular environment. Review how identity, permissions, context, and access boundaries should be assessed for Acumeet.',
    ...HERO_ACTIONS,
    window: keys(['Connected', 'Configure'], { width: 500 }),
    overlay: audit(
      [
        ['10:07', 'Signed in via SSO', 'Ruth Godwin'],
        ['09:47', 'Applied legal hold', 'Admin'],
        ['09:37', 'Edited action item', 'George Nwokoro'],
        ['09:20', 'Approved redactions', 'Faith Oluwale'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 436,
    height: 774,
  }),

  sections: [
    /** Chapters + "Chapters · Start with verified identity" (48:326650). */
    chapters([
      [
        'Start with verified identity',
        'Start with verified identity',
        'Access decisions should be based on an authenticated identity and the permissions assigned to that identity. Review how users, administrators, integrations, and service identities are identified and managed.',
        access([
          ['Warith Abraham', 'Owner'],
          ['Faith Oluwale', 'Admin'],
          ['George Nwokoro', 'Member'],
          ['Ruth Godwin', 'Viewer'],
        ]),
      ],
      [
        'Apply least privilege',
        'Apply least privilege',
        'Users and services should receive only the access required for their approved responsibilities. Review role design, privileged access, integration permissions, and the process for changing or removing access.',
        audit([
          ['11:36', 'Applied legal hold', 'Admin'],
          ['11:19', 'Edited action item', 'George Nwokoro'],
          ['11:12', 'Approved redactions', 'Faith Oluwale'],
          ['10:58', 'Exported summary', 'George Nwokoro'],
        ]),
      ],
      [
        'Protect trust boundaries',
        'Protect trust boundaries',
        'Map the movement of meeting data across ingestion, processing, storage, integrations, and retrieval. Understand which components communicate, what data they handle, and how those interactions are protected.',
        keys(['Configure', 'Configure'], { width: 440 }),
      ],
      [
        'Review continuously and document',
        'Review continuously and document exceptions',
        'Zero Trust is an architecture approach, not a single switch or a claim that risk is eliminated. Assess logging, monitoring, configuration changes, and exception handling against the actual implementation.',
        actions(5, [
          ['Share the penetration test summary', 'Jun 12'],
          ['Revoke access for leavers from last month', 'Fri'],
          ['Rotate the storage access keys', 'Next week'],
        ]),
      ],
      [
        'Key points',
        'Key points',
        {
          checks: [
            'Treat identity and permissions as explicit controls.',
            'Map data flows and service-to-service boundaries.',
            'Review actual controls and exceptions; do not rely on the label alone.',
          ],
        },
        summary('Architecture Review', [66, 91, 55], [
          'Storage keys will be rotated this week.',
          'Security confirmed MFA is enforced for administrators.',
        ]),
      ],
    ]),
  ],

  faq: faq([
    [
      'Does Zero Trust mean no one can access data without approval?',
      'Zero Trust is a security approach based on explicit verification and controlled access. The exact authentication, authorisation, and monitoring controls must be confirmed for the Acumeet environment.',
    ],
    ['Is Zero Trust a certification?', 'No. It is an architectural approach.'],
    [
      'How does Zero Trust relate to RBAC and SSO?',
      'RBAC governs permissions by role, while SSO helps users authenticate through an identity provider. They can contribute to a broader access-control approach when implemented and configured appropriately.',
    ],
  ]),

  cta: secCta('Verify access. Limit trust. Protect every boundary.'),
};
