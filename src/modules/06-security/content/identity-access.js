import { access, actions, audit, CONNECTED, decisions, integrations, summary } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { cards, chapters, exploreSecurity, explorer, faq, HERO_ACTIONS, secBreadcrumb, secCta } from './security';

const members = [
  ['Faith Oluwale', 'Admin'],
  ['George Nwokoro', 'Owner'],
  ['Ruth Godwin', 'Viewer'],
  ['Warith Abraham', 'Member'],
];

const heroActions = actions(
  5,
  [
    ['Review privileged role assignments', 'May 9'],
    ['Confirm MFA enforcement for admins', 'Next week'],
    ['Share the penetration test summary', 'May 19'],
  ],
  { width: 400, shadow: 'float' },
);

/** 06.03 · Identity & Access (Figma 48:325402). */
export default {
  breadcrumb: secBreadcrumb('Identity & Access'),

  /** 01 · Hero (909 tall): access (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Identity & Access',
    title: 'Give the right people the right',
    accent: 'level of access.',
    lead: 'Identity and access controls help organisations govern who can use Acumeet, which capabilities they can access, and how access changes over time. Evaluate the identity features and configuration options available for your environment.',
    ...HERO_ACTIONS,
    height: 909,
    copyHeight: 342,
    top: 482,
    gap: 44,
    items: [
      [
        230,
        546,
        access(
          [
            ['Faith Oluwale', 'Admin'],
            ['George Nwokoro', 'Member'],
            ['Ruth Godwin', 'Member'],
            ['Warith Abraham', 'Viewer'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        546,
        decisions(
          'Jun 9',
          ['Enforce MFA for all administrators', 'Move access reviews to quarterly'],
          'Stale accounts with admin rights',
          ['Key rotation', 'SIEM', 'Privileged roles', 'Encryption'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 482, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** Chapters + "Chapters · Role-based permissions" (48:326932). */
    chapters([
      [
        'Role-based permissions',
        'Role-based permissions',
        'Role-based access control can help align access with job responsibilities. Review the available roles, permission granularity, administrator privileges, and how custom roles—if supported—are managed.',
        access([
          ['George Nwokoro', 'Owner'],
          ['Ruth Godwin', 'Admin'],
          ['Warith Abraham', 'Viewer'],
          ['Faith Oluwale', 'Viewer'],
        ]),
      ],
      [
        'Enterprise authentication',
        'Enterprise authentication',
        'Single sign-on and multi-factor authentication can help strengthen access when supported and configured. Confirm the available identity providers, authentication flows, enforcement options, and exceptions.',
        audit([
          ['09:28', 'Changed role to Admin', 'Admin'],
          ['09:21', 'Downloaded recording', 'Fredelina Augustus'],
          ['09:07', 'Signed in via SSO', 'Ruth Godwin'],
          ['08:46', 'Applied legal hold', 'Admin'],
        ]),
      ],
      [
        'Provisioning and lifecycle',
        'Provisioning and lifecycle',
        'Automated provisioning can help keep user access aligned with workforce changes. Confirm whether SCIM is supported, which user and group operations are available, and how deprovisioning affects active sessions and data access.',
        actions(3, [
          ['Confirm MFA enforcement for admins', 'Jun 7'],
          ['Share the penetration test summary', 'This week'],
          ['Revoke access for leavers from last month', 'Jun 9'],
        ]),
      ],
      [
        'Conditional access',
        'Conditional access',
        'Conditional access policies are typically enforced through an identity provider and depend on the chosen configuration. Confirm which policies can be applied to Acumeet and which controls are managed externally.',
        integrations(CONNECTED, 6),
      ],
      [
        'Key points',
        'Key points',
        {
          checks: [
            'Define roles and privileged access clearly.',
            'Confirm supported identity providers and protocols.',
            'Test onboarding, role changes, and offboarding before production rollout.',
          ],
        },
        summary('Incident Response Sync', [67, 80, 52], [
          'Security confirmed MFA is enforced for administrators.',
          'The access review found three stale accounts.',
        ]),
      ],
    ]),

    /** RBAC (48:325516) + "Explorer · Align access with responsibilities" (48:327218). Tab 3 has no body in Figma. */
    explorer(
      {
        eyebrow: 'RBAC',
        title: 'Align access with',
        accent: 'responsibilities.',
        lead: 'Role-based access control (RBAC) assigns permissions according to defined roles. Review how Acumeet roles map to your teams, administrator responsibilities, and least-privilege requirements.',
      },
      [
        [
          'Define roles by responsibility',
          'Document what each role is expected to do and which information or actions it needs.',
          access(members, { width: 380 }),
        ],
        [
          'Review privileged access',
          'Identify high-impact permissions, limit who holds them, and periodically review whether access remains necessary.',
          audit(
            [
              ['10:37', 'Updated retention policy', 'Admin'],
              ['10:23', 'Viewed transcript', 'Ruth Godwin'],
              ['10:02', 'Shared meeting record', 'Warith Abraham'],
              ['09:51', 'Changed role to Admin', 'Admin'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Validate the available role model',
          undefined,
          actions(
            4,
            [
              ['Revoke access for leavers from last month', 'Jun 14'],
              ['Rotate the storage access keys', 'Jun 7'],
              ['Review privileged role assignments', 'This week'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Key points',
          'Map each role to a clear business purpose. Review privileged access periodically.',
          summary('Incident Response Sync', [74, 78, 56], [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ]),
        ],
      ],
    ),

    /** SSO (48:325522) — three cards. */
    cards(
      {
        eyebrow: 'SSO',
        title: 'Simplify sign-in through your',
        accent: 'identity provider.',
        lead: 'Single sign-on (SSO) can let users authenticate through an organisation’s identity provider rather than managing a separate sign-in for each application. Confirm Acumeet’s supported SSO configuration and requirements.',
      },
      [
        [
          'Plan access and fallback',
          'Define how users are assigned access, how authentication failures are handled, and what approved recovery or break-glass process applies to administrators.',
        ],
        [
          'Test before rollout',
          'Validate user sign-in, access removal, session behaviour, and any required group or role mapping in a controlled rollout.',
        ],
        [
          'Key points',
          'Confirm the supported protocol and identity providers. Document ownership of configuration and troubleshooting. Test sign-in and offboarding behaviour before launch.',
        ],
      ],
    ),

    /** MFA + "Explorer · Add another layer to account authentication" (48:327518). */
    explorer(
      {
        eyebrow: 'MFA',
        title: 'Add another layer to',
        accent: 'account authentication.',
        lead: 'Multi-factor authentication (MFA) requires an additional verification factor beyond a password. Confirm how MFA is supported or enforced for Acumeet users and administrators, including any identity-provider dependencies.',
      },
      [
        [
          'Confirm where MFA is enforced',
          'MFA may be provided by Acumeet or enforced through a supported identity provider. Establish the actual enforcement point and which user populations are covered.',
          integrations(CONNECTED, 6),
        ],
        [
          'Protect privileged accounts',
          'Prioritise strong authentication for administrators and other high-impact accounts, subject to the supported configuration.',
          access(members, { width: 380 }),
        ],
        [
          'Plan recovery securely',
          'Document approved recovery methods, lost-device procedures, and exceptions. Ensure recovery does not silently bypass the intended control.',
          actions(
            5,
            [
              ['Confirm MFA enforcement for admins', 'Today'],
              ['Share the penetration test summary', 'Jun 12'],
              ['Revoke access for leavers from last month', 'Fri'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Key points',
          'Clearly state whether MFA is native or identity-provider enforced. Define coverage, exceptions, and account recovery.',
          summary('Incident Response Sync', [78, 64, 44], [
            'Storage keys will be rotated this week.',
            'Security confirmed MFA is enforced for administrators.',
          ]),
        ],
      ],
    ),

    /** SCIM — four cards. */
    cards(
      {
        eyebrow: 'SCIM',
        title: 'Keep user access aligned with',
        accent: 'workforce changes.',
        lead: 'System for Cross-domain Identity Management (SCIM) is a standard for automating identity provisioning. Confirm whether Acumeet supports SCIM and which user, group, and deprovisioning operations are available.',
      },
      [
        ['Automate where supported', 'Provisioning integration may reduce manual user administration.'],
        [
          'Plan deprovisioning',
          'Define how access is removed when a person leaves or changes roles, including any session revocation, ownership transfer, and data-handling steps.',
        ],
        [
          'Test lifecycle events',
          'Validate create, update, disable, group membership, and deletion behaviours in the approved test process before enabling automation.',
        ],
        [
          'Key points',
          'Test joiner, mover, and leaver scenarios. Document how provisioning failures are detected and resolved.',
        ],
      ],
    ),

    /** Microsoft Entra ID + "Explorer · Assess Acumeet with your Microsoft identity environment" (48:327858). */
    explorer(
      {
        eyebrow: 'Microsoft Entra ID',
        title: 'Assess Acumeet with your Microsoft',
        accent: 'identity environment.',
        lead: 'For organisations using Microsoft Entra ID, review how identity, sign-in, group or role assignment, and access policies can fit into an Acumeet deployment. Confirm the integration options currently supported.',
      },
      [
        [
          'Confirm integration scope',
          'Determine whether the intended use is SSO, user provisioning, group mapping, or policy enforcement. These are distinct capabilities and should be validated separately.',
          integrations(CONNECTED, 6),
        ],
        [
          'Coordinate configuration ownership',
          'Identify the Acumeet and customer administrators responsible for configuration, consent, testing, and ongoing changes.',
          access(members, { width: 380 }),
        ],
        [
          'Validate access policies',
          'If Conditional Access or MFA policies are part of the design, confirm the applicable licence, configuration, and supported sign-in flow with the identity administrator.',
          audit(
            [
              ['10:04', 'Applied legal hold', 'Admin'],
              ['09:52', 'Edited action item', 'George Nwokoro'],
              ['09:33', 'Approved redactions', 'Faith Oluwale'],
              ['09:24', 'Exported summary', 'George Nwokoro'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Key points',
          'Separate SSO, provisioning, and policy enforcement claims. Use the current Microsoft and Acumeet configuration guidance. Test with representative users and administrator roles.',
          summary('Access Review Meeting', [83, 69, 29], [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ]),
        ],
      ],
    ),

    /** Conditional Access — four cards. */
    cards(
      {
        eyebrow: 'Conditional Access',
        title: 'Apply the access policies your',
        accent: 'organisation requires.',
        lead: 'Conditional Access policies can use identity-provider signals and rules to govern access. Assess how your organisation’s policies interact with the supported Acumeet sign-in configuration and identify any limitations.',
      },
      [
        [
          'Define policy requirements',
          'Document the conditions your organisation needs to evaluate, such as user, group, device, location, or risk signals, where supported by your identity provider.',
        ],
        [
          'Confirm the enforcement path',
          'Establish whether Acumeet supports the identity-provider sign-in flow required for the intended policies.',
        ],
        [
          'Test policy outcomes',
          'Test permitted, blocked, and exception scenarios before broad rollout. Document ownership and support steps for policy-related sign-in failures.',
        ],
        [
          'Key points',
          'Keep policy enforcement claims specific to the identity provider. Test user and administrator scenarios. Document exceptions and troubleshooting ownership.',
        ],
      ],
    ),
  ],

  faq: faq([
    [
      'Can Acumeet integrate with Microsoft Entra ID?',
      'Microsoft Entra ID is included in the identity sitemap. Confirm the current supported integration, configuration, and licence or plan requirements with Acumeet.',
    ],
    [
      'Can we enforce MFA and Conditional Access?',
      'Confirm which controls are available natively and which depend on your identity provider and its policies.',
    ],
    ['Can we create custom roles?', 'Custom-role availability and permission granularity must be confirmed with Acumeet.'],
    [
      'How should administrator access be managed?',
      'Use least privilege, restrict privileged access, and review assignments regularly in line with your organisation’s policy.',
    ],
    [
      'Which SSO protocols are supported?',
      'The supported protocol and configuration must be confirmed in Acumeet’s current documentation.',
    ],
    [
      'Does SSO automatically provide MFA?',
      'Not by itself. MFA enforcement depends on the supported setup and identity-provider policies.',
    ],
    ['Is MFA mandatory for all users?', 'The current enforcement options and coverage must be confirmed with Acumeet.'],
    [
      'Can our identity provider enforce MFA?',
      'This depends on the supported SSO configuration and the policies available in your identity provider.',
    ],
    ['Does Acumeet support SCIM 2.0?', 'The supported SCIM version and operations must be confirmed with Acumeet.'],
    ['Does deprovisioning delete user data?', 'Confirm access, ownership, retention, and deletion behaviour separately.'],
    ['Does Entra ID integration include SCIM?', 'Not necessarily. Confirm SSO and provisioning support separately.'],
    [
      'Can Conditional Access policies apply?',
      'Confirm the supported sign-in integration and policy enforcement path with Acumeet and your identity administrator.',
    ],
    [
      'Does Acumeet itself make Conditional Access decisions?',
      'Conditional Access is generally configured through the identity provider; confirm the supported Acumeet integration path.',
    ],
    [
      'Can we block access from unmanaged devices?',
      'This depends on identity-provider capabilities, licensing, and the supported sign-in flow.',
    ],
  ]),

  /** Explore more — Figma shows two cards here. */
  related: exploreSecurity(['overview', 'zeroTrust']),

  cta: secCta('Give the right people the right level of access.'),
};
