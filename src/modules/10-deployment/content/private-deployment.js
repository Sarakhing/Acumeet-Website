import { access, keys } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { keySummary, members, rollout, tasks } from './shared';
import {
  chapters,
  CONTACT,
  depBreadcrumb,
  depCta,
  exploreDeployment,
  faq,
  RELATED,
} from './deployment';

/** 10.06 · Private Deployment (Figma 48:393933). */
export default {
  breadcrumb: depBreadcrumb('Private deployment'),

  /** 01 · Hero (765): keys & storage in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Private deployment',
    title: 'Discuss deployment options for stricter',
    accent: 'environment requirements.',
    lead: 'Some organisations require a more controlled deployment arrangement because of internal policies, sensitive workflows, or infrastructure requirements. Work with Acumeet to determine whether a private deployment approach is available and what it would involve.',
    primary: CONTACT('Discuss private deployment'),
    secondary: CONTACT('Share your requirements'),
    window: keys(['Connected', 'Configure'], { width: 500 }),
    overlay: rollout(5, ['Fri', 'Jun 23', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 412,
    height: 765,
  }),

  sections: [
    /** Chapters + "Chapters · Clarify what “private” needs to mean" (48:353701). */
    chapters([
      [
        'Clarify what “private” needs',
        'Clarify what “private” needs to mean',
        'Private deployment can refer to different architectural arrangements. Define whether your requirement concerns network isolation, dedicated resources, tenant separation, restricted access, customer-controlled infrastructure, or another specific control.',
        keys(['Connected', 'Connected'], { width: 460 }),
      ],
      [
        'Assess the complete service',
        'Assess the complete service boundary',
        'Identify where the application runs, where data is stored and processed, which services are external dependencies, how users connect, and who operates each component.',
        access(members, { width: 380 }),
      ],
      [
        'Confirm feasibility before making',
        'Confirm feasibility before making commitments',
        'Private deployment may affect implementation effort, integrations, maintenance, support, cost, and upgrade paths. The proposed architecture and commercial scope should be assessed and documented before approval.',
        tasks(
          3,
          [
            ['failover', 'Jun 12'],
            ['region', 'Fri'],
            ['network', 'Next week'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Translate policy requirements into explicit technical criteria.',
            'Review dependencies and operational responsibilities—not just hosting location.',
            'Confirm feasibility, scope, and commercial implications before commitment.',
          ],
        },
        keySummary('Cutover Readiness Review', [76, 71, 55], ['tenant', 'network']),
      ],
    ]),
  ],

  /** FAQ (48:394030). */
  faq: faq([
    [
      'Does Private Deployment mean on-premises hosting?',
      'Not necessarily. The term can describe several arrangements. Ask Acumeet to define the supported model and architecture for your requirement.',
    ],
    [
      'Can we operate every component ourselves?',
      'That depends on the arrangement and supported architecture. Confirm which components are customer-managed versus Acumeet-managed.',
    ],
    [
      'Is private deployment available to all customers?',
      'Availability, eligibility, scope, and cost must be confirmed with Acumeet.',
    ],
  ]),

  related: exploreDeployment(RELATED),
  cta: depCta('Discuss deployment options for stricter environment requirements.'),
};
