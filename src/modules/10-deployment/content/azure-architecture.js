import { access, analytics, decisions, keys } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { keySummary, members, rollout } from './shared';
import {
  chapters,
  CONTACT,
  depBreadcrumb,
  depCta,
  exploreDeployment,
  faq,
  RELATED,
} from './deployment';

const heroActions = rollout(4, ['Jun 12', 'May 17', 'Today'], { width: 400, shadow: 'float' });

/** 10.08 · Azure Architecture (Figma 48:394053). */
export default {
  breadcrumb: depBreadcrumb('Azure architecture'),

  /** 01 · Hero (985): keys & storage (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Azure architecture',
    title: 'Understand the architecture behind',
    accent: 'your deployment.',
    lead: 'Use an architecture review to understand how Acumeet components, Azure resources, identity, storage, AI processing, integrations, and operational controls fit together in the proposed environment.',
    primary: CONTACT('Request an architecture discussion'),
    secondary: CONTACT('Discuss your technical requirements'),
    height: 985,
    copyHeight: 340,
    top: 482,
    gap: 46,
    items: [
      [230, 546, keys(['Manage', 'Connected'], { width: 400, shadow: 'float' }), 6],
      [
        807,
        546,
        decisions(
          'Jun 9',
          ['Use customer-managed keys from day one', 'Run failover tests quarterly'],
          'Cutover clashes with month-end',
          ['Storage', 'Keys', 'Failover', 'Cutover'],
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
    /** Chapters + "Chapters · Review the major components" (48:353996). */
    chapters([
      [
        'Review the major components',
        'Review the major components',
        'The architecture discussion should identify application services, data stores, meeting and file ingestion paths, AI processing dependencies, integrations, and administrative interfaces relevant to the selected deployment.',
        keys(['Configure', 'Configure'], { width: 460 }),
      ],
      [
        'Make security boundaries visible',
        'Make security boundaries visible',
        'Document trust boundaries, authentication and authorisation, network paths, secrets management, encryption responsibilities, logging, and privileged access. Include data-flow diagrams that show where information enters, moves, and is retained.',
        access(members, { width: 380 }),
      ],
      [
        'Design for operation',
        'Design for operation',
        'Identify monitoring, alerting, deployment changes, capacity management, dependency management, and support responsibilities. Architecture documentation should match the actual deployed design and be maintained as it changes.',
        analytics('This month', [87, 47, 44], { width: 460 }),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Use a data-flow view to make dependencies and boundaries clear.',
            'Review identity, secrets, storage, logging, and network paths.',
            'Keep diagrams aligned with the deployed configuration.',
          ],
        },
        keySummary('Implementation Kick-off', [81, 76, 40], ['cutover', 'tenant']),
      ],
    ]),
  ],

  /** FAQ (48:394168). */
  faq: faq([
    [
      'Can we receive an Azure architecture diagram?',
      'Ask Acumeet for the approved architecture material relevant to your deployment. The diagram should be current and appropriate for the intended audience.',
    ],
    [
      'Does every deployment use the same architecture?',
      'Not necessarily. Architecture can differ by service configuration and approved deployment arrangement. Confirm the design that applies to your environment.',
    ],
    [
      'Which Azure services does Acumeet use?',
      'The current service inventory should be confirmed with Acumeet for your deployment.',
    ],
  ]),

  related: exploreDeployment(RELATED),
  cta: depCta('Understand the architecture behind your deployment.'),
};
