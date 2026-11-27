import { analytics, keys } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { keySummary, rollout, tasks } from './shared';
import {
  chapters,
  CONTACT,
  depBreadcrumb,
  depCta,
  exploreDeployment,
  faq,
  RELATED,
} from './deployment';

/** 10.10 · Disaster Recovery (Figma 48:394247). */
export default {
  breadcrumb: depBreadcrumb('Disaster recovery'),

  /** 01 · Hero (765): keys & storage in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Disaster recovery',
    title: 'Prepare for disruption with a documented',
    accent: 'recovery approach.',
    lead: 'Disaster recovery planning considers how a service and its data can be restored after a significant disruption. Work with Acumeet to understand the recovery arrangements applicable to your deployment and how they align with your organisation’s continuity requirements.',
    primary: CONTACT('Discuss disaster recovery'),
    secondary: CONTACT('Review continuity requirements'),
    window: keys(['Manage', 'Connected'], { width: 500 }),
    overlay: rollout(5, ['Jun 27', 'Next week', 'Jun 10'], { width: 360, shadow: 'float' }),
    overlayY: 412,
    height: 765,
  }),

  sections: [
    /** Chapters + "Chapters · Define recovery objectives" (48:354717). */
    chapters([
      [
        'Define recovery objectives',
        'Define recovery objectives',
        'Agree the business impact of disruption and identify the recovery time objective (RTO) and recovery point objective (RPO) required for each critical workflow or data category. These are requirements to assess, not assumed Acumeet guarantees.',
        analytics('Last 7 days', [74, 28, 67], { width: 350 }),
      ],
      [
        'Understand backups and restoration',
        'Understand backups and restoration',
        'Confirm what is backed up, how often, where backups are held, how access is protected, how long they are retained, and how restoration is tested. Clarify customer responsibilities for any customer-owned storage or infrastructure.',
        keys(['Configure', 'Configure']),
      ],
      [
        'Plan communication and validation',
        'Plan communication and validation',
        'Document incident escalation, decision owners, recovery steps, restoration validation, and communication with affected stakeholders. Ask what recovery evidence or test results can be made available under the applicable agreement.',
        tasks(
          4,
          [
            ['network', 'Jun 12'],
            ['storage', 'Fri'],
            ['cutover', 'Next week'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Set recovery objectives based on business impact.',
            'Clarify backup scope, retention, restoration, and ownership.',
            'Document roles, escalation, validation, and recovery communications.',
          ],
        },
        keySummary('Cutover Readiness Review', [47, 75, 47], ['network', 'cutover']),
      ],
    ]),
  ],

  /** FAQ (48:394344). */
  faq: faq([
    [
      'What are Acumeet’s RTO and RPO?',
      'The applicable values must be confirmed by Acumeet for the relevant deployment and contract.',
    ],
    [
      'Are backups included?',
      'Backup coverage, location, retention, and responsibility depend on the applicable service configuration. Request confirmation for your environment.',
    ],
    [
      'Are disaster recovery tests performed?',
      'Ask Acumeet to confirm the current testing approach and which evidence can be shared.',
    ],
    [
      'Does BYOS change disaster recovery responsibilities?',
      'It can affect responsibility boundaries. Confirm who owns backup, recovery, and availability for each customer-managed component.',
    ],
  ]),

  related: exploreDeployment(RELATED),
  cta: depCta('Prepare for disruption with a documented recovery approach.'),
};
