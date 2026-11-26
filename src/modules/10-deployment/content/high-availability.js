import { analytics, audit, capture, keys } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { keySummary } from './shared';
import {
  chapters,
  CONTACT,
  depBreadcrumb,
  depCta,
  exploreDeployment,
  faq,
  RELATED,
} from './deployment';

const TITLE = 'Plan for service continuity with clear availability expectations.';

/** 10.09 · High Availability (Figma 48:394191). */
export default {
  breadcrumb: depBreadcrumb('High Availability'),

  /** 01 · Hero + "Hero carousel · 10.09 · High Availability" (48:354289). */
  ...ringsHero({
    eyebrow: 'High Availability',
    title: TITLE,
    lead: 'Availability planning should connect business needs with the actual architecture, dependencies, monitoring, and operational response. Acumeet can review your requirements and confirm the service commitments that apply to the proposed deployment.',
    primary: CONTACT('Discuss availability requirements'),
    secondary: CONTACT('Review service commitments'),
    slides: [
      ['Analytics', analytics('Last 30 days', [80, 46, 61], { width: 350 })],
      ['Keys', keys(['Configure', 'Configure'])],
      [
        'Audit log',
        audit(
          [
            ['10:18', 'Shared meeting record', 'Warith Abraham'],
            ['10:08', 'Changed role to Admin', 'Admin'],
            ['09:51', 'Downloaded recording', 'Fredelina Augustus'],
            ['09:44', 'Signed in via SSO', 'Ruth Godwin'],
          ],
          { width: 360 },
        ),
      ],
    ],
  }),

  sections: [
    /** Chapters + "Chapters · Define critical workflows" (48:354419). */
    chapters([
      [
        'Define critical workflows',
        'Define critical workflows',
        'Identify which meeting workflows are business-critical, who depends on them, and what level of disruption is acceptable. Distinguish access to the application from the availability of integrations and upstream services.',
        capture('Mon, Jun 26', [
          ['Cutover Readiness Review', '10:30 AM · Meet'],
          ['Deployment Planning', '11:00 AM · Teams'],
          ['Architecture Review', '3:30 PM · Zoom'],
        ]),
      ],
      [
        'Review dependencies and failure',
        'Review dependencies and failure modes',
        'Assess application components, storage, identity, AI services, meeting platforms, network dependencies, and other relevant services. Clarify which failures Acumeet can mitigate and which depend on third-party providers or customer infrastructure.',
        keys(['Configure', 'Configure']),
      ],
      [
        'Agree measurable commitments',
        'Agree measurable commitments',
        'Any uptime target, service-level agreement, maintenance window, redundancy design, or failover behaviour must be supported by the actual service design and contract.',
        analytics('This quarter', [81, 29, 50], { width: 350 }),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Translate business impact into availability requirements.',
            'Assess third-party and customer-managed dependencies.',
            'Confirm service levels and recovery behaviour in writing.',
          ],
        },
        keySummary('Deployment Planning', [42, 70, 22], ['cutover', 'tenant']),
      ],
    ]),
  ],

  /** FAQ (48:394224). */
  faq: faq([
    [
      'What uptime does Acumeet guarantee?',
      'Refer to the applicable contract or service-level agreement.',
    ],
    [
      'Does high availability mean there will be no downtime?',
      'No system can responsibly be described as immune to every interruption. The relevant design, dependencies, limitations, and service commitments should be documented.',
    ],
    [
      'How are service issues communicated?',
      'Confirm the support and incident-communication process that applies to your service arrangement.',
    ],
  ]),

  related: exploreDeployment(RELATED),
  cta: depCta(TITLE),
};
