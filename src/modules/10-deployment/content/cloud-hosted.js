import { access, capture, keys } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { keySummary, members, tasks } from './shared';
import { chapters, CONTACT, DEPLOYMENT, depBreadcrumb, depCta, faq } from './deployment';

const TITLE = 'Meeting intelligence, without managing the application stack.';

/** 10.02 · Cloud Hosted (Figma 48:393585). No related row in Figma. */
export default {
  breadcrumb: depBreadcrumb('Cloud Hosted'),

  /** 01 · Hero + "Hero carousel · 10.02 · Cloud Hosted" (48:352413). */
  ...ringsHero({
    eyebrow: 'Cloud Hosted',
    title: TITLE,
    lead: 'Explore Acumeet’s hosted deployment approach for turning meeting conversations into summaries, decisions, action items, and searchable organisational knowledge. The Acumeet team can explain the available service configuration and operational responsibilities for your organisation.',
    primary: CONTACT('Discuss Cloud Hosted deployment'),
    secondary: { label: 'Review deployment options', to: DEPLOYMENT.overview.to },
    slides: [
      [
        'Capture',
        capture('Thu, Jun 20', [
          ['Architecture Review', '3:30 PM · Teams'],
          ['Implementation Kick-off', '10:30 AM · Zoom'],
          ['Cutover Readiness Review', '11:00 AM · Meet'],
        ]),
      ],
      ['Keys', keys(['Configure', 'Configure'])],
      ['Access', access(members, { width: 380 })],
    ],
  }),

  sections: [
    /** Chapters + "Chapters · A simpler path to adoption" (48:352540). */
    chapters([
      [
        'A simpler path to',
        'A simpler path to adoption',
        'A hosted approach can reduce the infrastructure work your team needs to undertake directly. Your organisation can focus on access, governance, user adoption, and how meeting intelligence fits into existing workflows.',
        capture('Mon, May 5', [
          ['Deployment Planning', '4:00 PM · Zoom'],
          ['Architecture Review', '9:00 AM · Meet'],
          ['Implementation Kick-off', '2:00 PM · Teams'],
        ]),
      ],
      [
        'Built around the work',
        'Built around the work after the meeting',
        'Acumeet helps teams capture meeting outcomes, find information across their meeting knowledge, and follow through on actions. Deployment planning should consider the meeting platforms and business tools your organisation expects to use.',
        tasks(
          4,
          [
            ['cutover', 'Jun 14'],
            ['failover', 'Jun 7'],
            ['region', 'This week'],
          ],
          { width: 460, footer: false },
        ),
      ],
      [
        'Understand the service boundary',
        'Understand the service boundary',
        'Before onboarding, confirm which components Acumeet operates, what your administrators manage, how data is handled, and which service and support commitments apply to your agreement.',
        keys(['Configure', 'Configure']),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Reduce the need for your team to manage the application infrastructure directly.',
            'Plan access, integrations, and governance as part of rollout.',
            'Confirm the service boundary and contractual commitments before launch.',
          ],
        },
        keySummary('Architecture Review', [62, 75, 57], ['network', 'cutover']),
      ],
    ]),
  ],

  /** FAQ (48:393618). */
  faq: faq([
    [
      'What does Cloud Hosted mean?',
      'It refers to an Acumeet-hosted service approach. The exact architecture, hosting location, and service commitments should be confirmed with Acumeet.',
    ],
    [
      'Do we need to manage Azure infrastructure?',
      'That depends on the selected service configuration. Acumeet should confirm which infrastructure responsibilities sit with the service provider and which remain with the customer.',
    ],
    [
      'Can cloud-hosted Acumeet meet our policies?',
      'Share your requirements during assessment so the team can validate fit and document any constraints before adoption.',
    ],
  ]),

  cta: depCta(TITLE),
};
