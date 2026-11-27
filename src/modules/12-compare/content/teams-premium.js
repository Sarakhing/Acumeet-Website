import { access, capture, decisions } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { members, ninReview, procDecisions, supplierAtlas } from './shared';
import {
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  ENTERPRISE_DEMO,
  exploreCompare,
  INTEGRATIONS,
  LOGOS,
  RELATED,
  statement,
  table,
  vs,
  whyChoose,
} from './compare';

const heroCapture = capture(
  'Tue, Jun 22',
  [
    ['Weekly ProcureCentro Stand-up', '4:00 PM · Zoom'],
    ['Monthly Marketing Strategy Review', '9:00 AM · Meet'],
    ['Product Development Sync-Up', '2:00 PM · Teams'],
  ],
  { shadow: 'float' },
);

/** 12.07 · Acumeet vs Microsoft Teams Premium (Figma 49:117101). */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs Microsoft Teams Premium'),

  /** 01 · Hero (979): workspace access (+6°) and decisions (−6°) tilted behind upcoming meetings. */
  ...centeredHero({
    eyebrow: 'Teams premium alternative',
    title: 'Acumeet vs Microsoft Teams Premium: Teams-native or',
    accent: 'cross-platform meeting intelligence?',
    lead: 'Teams Premium adds intelligent recap and advanced protection to Microsoft Teams. Acumeet is an enterprise meeting intelligence layer across Microsoft Teams, Zoom and Google Meet.',
    primary: ENTERPRISE_DEMO,
    height: 979,
    copyHeight: 404,
    top: 570,
    gap: 70,
    items: [
      [
        230,
        610,
        access(
          [
            ['Ruth Godwin', 'Admin'],
            ['Warith Abraham', 'Owner'],
            ['Faith Oluwale', 'Viewer'],
            ['George Nwokoro', 'Member'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        810,
        610,
        decisions(
          'Jun 2',
          ['Revisit the vendor approval cycle', 'Pilot automated PO generation'],
          'Sync lag during peak transaction periods',
          ['PO automation', 'Savings', 'Vendor onboarding', 'ERP integration'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 570, heroCapture],
    ],
    compact: heroCapture,
  }),

  sections: [
    LOGOS,
    vs('teamsPremium'),
    statement(
      'Teams Premium makes Teams meetings smarter',
      'and more protected',
      'Microsoft provides intelligent recap with AI notes, recommended tasks and personalised highlights, plus meeting protections such as watermarks, sensitivity labels, end-to-end encryption and recording controls.',
    ),
    table('teamsPremium', 'Acumeet vs Microsoft Teams Premium', 'Teams Premium', [
      [
        'Scope',
        'Premium intelligence and protection inside the Microsoft Teams meeting experience.',
        'A platform that captures across Teams, Zoom, Google Meet and uploaded media.',
      ],
      [
        'Meeting recap',
        'AI notes, recommended tasks, timeline and speaker markers.',
        'Structured summaries, decisions, outcomes and action-item management.',
      ],
      [
        'Protection',
        'Advanced protections for Teams meetings, including sensitivity labels, watermarks and end-to-end encryption.',
        'Protects and governs the meeting intelligence itself with Redaction AI, role-based access, SSO and audit logs.',
      ],
      [
        'Organisational knowledge',
        'Recap centred on Teams meetings and Microsoft 365 governance.',
        'Meeting history as a searchable knowledge repository, with Atlas and cross-meeting search.',
      ],
      [
        'Data control',
        'Teams event data is stored in your Microsoft 365 environment under applicable policies.',
        'Adds customer-controlled storage and key options and data residency choices on eligible enterprise plans.',
      ],
    ]),
    statement(
      'When does Acumeet make sense alongside',
      'a Microsoft environment?',
      'When your needs extend beyond one meeting platform, when sensitive information needs purpose-built redaction, or when you want meeting knowledge managed as a separate, governed layer.',
      'dark',
    ),
    COMPARE_TILES,
    whyChoose([
      access(members, { width: 380 }),
      procDecisions(
        'May 28',
        ['Consolidate ERP sync alerts', 'Revisit the vendor approval cycle'],
        'Low supplier engagement on savings',
        ['KPIs', 'PO automation', 'Savings', 'Vendor onboarding'],
      ),
      ninReview(4, '90%', 480),
      supplierAtlas,
    ]),
    INTEGRATIONS,
  ],

  related: exploreCompare(RELATED),
  cta: cta(
    'See how Acumeet fits your meeting stack',
    'Bring your Microsoft environment and data-governance requirements. We will show the capture model.',
    ENTERPRISE_DEMO,
  ),
};
