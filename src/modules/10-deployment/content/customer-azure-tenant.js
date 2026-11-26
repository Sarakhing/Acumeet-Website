import { access, decisions, keys } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { keySummary, members, rollout, tasks } from './shared';
import { chapters, CONTACT, depBreadcrumb, depCta, exploreDeployment, faq } from './deployment';

const heroActions = rollout(4, ['May 3', 'Next week', 'May 13'], { width: 400, shadow: 'float' });

/** 10.04 · Customer Azure Tenant (Figma 48:393739). */
export default {
  breadcrumb: depBreadcrumb('Customer Azure Tenant'),

  /** 01 · Hero (985): keys & storage (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Customer Azure Tenant',
    title: 'Evaluate Acumeet against your',
    accent: 'Azure environment.',
    lead: 'For organisations that need to assess the use of their own Microsoft Azure environment, Acumeet can work with your stakeholders to define the intended architecture, security boundaries, permissions, and operational responsibilities.',
    primary: CONTACT('Discuss your Azure requirements'),
    secondary: CONTACT('Request an architecture review'),
    height: 985,
    copyHeight: 340,
    top: 482,
    gap: 46,
    items: [
      [230, 546, keys(['Connected', 'Connected'], { width: 400, shadow: 'float' }), 6],
      [
        807,
        546,
        decisions(
          'May 26',
          ['Run failover tests quarterly', 'Go live after the pilot group'],
          'Firewall approvals pending',
          ['Cutover', 'Pilot', 'Azure tenant', 'Storage'],
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
    /** Chapters + "Chapters · Start with the architecture" (48:353009). */
    chapters([
      [
        'Start with the architecture',
        'Start with the architecture and ownership',
        'Clarify which Acumeet components, if any, would run in or connect to the customer’s Azure tenant. Confirm subscription ownership, resource ownership, networking, monitoring, and who is responsible for day-to-day operations.',
        keys(['Manage', 'Connected'], { width: 460 }),
      ],
      [
        'Review identity and permissions',
        'Review identity and permissions',
        'Define how service identities, administrative access, least-privilege permissions, secrets, and auditability will be managed. Security and engineering teams should review the proposed permissions before any deployment.',
        access(members, { width: 380 }),
      ],
      [
        'Confirm cost and support',
        'Confirm cost and support responsibilities',
        'Establish who pays for Azure resources, who monitors usage and service health, who applies changes, and how incidents are escalated. These responsibilities must be agreed before implementation.',
        tasks(
          5,
          [
            ['failover', 'Next week'],
            ['region', 'Jun 14'],
            ['network', 'Jun 7'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Assess fit with your existing Azure governance.',
            'Make tenant, resource, identity, and cost ownership explicit.',
            'Document support and operational boundaries before deployment.',
          ],
        },
        keySummary('Architecture Review', [66, 91, 45], ['cutover', 'tenant']),
      ],
    ]),
  ],

  /** FAQ (48:393854). */
  faq: faq([
    [
      'Does Acumeet currently deploy directly into every customer’s Azure tenant?',
      'Ask Acumeet to confirm whether this option is supported for your use case and which components are in scope.',
    ],
    [
      'Who owns the Azure resources and costs?',
      'The intended arrangement must specify resource ownership, billing, access, and operational responsibilities.',
    ],
    [
      'What Azure permissions are required?',
      'Permissions depend on the proposed architecture. Engineering and Security should document the minimum required access before configuration.',
    ],
  ]),

  related: exploreDeployment(['overview', 'cloudHosted', 'enterpriseHosted']),
  cta: depCta('Evaluate Acumeet against your Azure environment.'),
};
