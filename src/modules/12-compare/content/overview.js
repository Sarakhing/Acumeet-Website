import { access, capture, keys, retention } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { POLICY_ROWS } from '@/modules/07-trust-center/content/shared';
import {
  contractReview,
  members,
  ninReview,
  procDecisions,
  supplierAtlas,
  taskList,
} from './shared';
import {
  COMPARE,
  COMPARE_TILES,
  cmpBreadcrumb,
  cta,
  darkHero,
  explorer,
  exploreCompare,
  INTEGRATIONS,
  RELATED,
  statement,
  whyChoose,
} from './compare';

const TALK = { label: 'Talk to the enterprise team', to: ROUTES.contactSales };

const OPTIONS = [
  [
    'meetingNotes',
    'lilac',
    'rings',
    'Traditional meeting notes',
    'A manual method: flexible and familiar, but dependent on the note-taker for completeness, search and follow-through.',
  ],
  [
    'aiAssistants',
    'pink',
    'dots',
    'General AI meeting assistants',
    'Typically automate capture, transcription and summaries. Controls, knowledge features and governance vary by vendor and plan.',
  ],
  [
    'fireflies',
    'blue',
    'hairlines',
    'Fireflies',
    'Positioned around AI meeting capture, summaries, AskFred search, analytics, enterprise admin controls and Private Storage or BYOS options.',
  ],
  [
    'otter',
    'mint',
    'rings',
    'Otter',
    'Positioned around searchable conversational knowledge, AI Chat, action items, flexible capture and Enterprise security controls.',
  ],
  [
    'teamsPremium',
    'amber',
    'dots',
    'Microsoft Teams Premium',
    'Positioned around intelligent recap, AI notes and tasks, and advanced meeting protection inside Microsoft Teams.',
  ],
  [
    'why',
    'grey',
    'hairlines',
    'Acumeet',
    'Enterprise meeting intelligence: capture, decisions, action management, Redaction AI, searchable organisational knowledge, Atlas, analytics and enterprise data and security controls.',
  ],
];

/** 12.08 · Competitive Comparison (Figma 49:117344) — the /compare overview. */
export default {
  breadcrumb: cmpBreadcrumb('Competitive Comparison'),

  ...darkHero({
    height: 548,
    eyebrow: 'Competitive comparison',
    title: 'Compare the meeting intelligence that fits your enterprise',
    lead: 'Do not compare products on transcription alone. Compare how they handle decisions, actions, sensitive data, knowledge and control.',
    primary: TALK,
  }),

  sections: [
    /** Tabs explorer + "Explorer · Start with your requirements" (49:77427). */
    explorer({ title: 'Start with your', accent: 'requirements' }, [
      [
        'Requirement 1: Capture',
        'Which meeting platforms and recording methods must you support?',
        capture('Mon, Jun 8', [
          ['Product Development Sync-Up', '9:00 AM · Teams'],
          ['Client Feedback Analysis Session', '2:00 PM · Zoom'],
          ['Weekly ProcureCentro Stand-up', '4:00 PM · Meet'],
        ]),
      ],
      [
        'Requirement 2: Intelligence',
        'Do you need transcripts only, or decisions, actions, cross-meeting search and analytics?',
        procDecisions(
          'May 28',
          ['Pilot automated PO generation', 'Move supplier reviews to monthly'],
          'Low supplier engagement on savings',
          ['KPIs', 'PO automation', 'Savings', 'Vendor onboarding'],
        ),
      ],
      [
        'Requirement 3: Protection',
        'How should sensitive information be identified, redacted, shared and retained?',
        ninReview(6),
      ],
      [
        'Requirement 4: Control',
        'Do you need SSO, role-based access, auditability, storage and key control or data residency?',
        access(members, { width: 380 }),
      ],
      [
        'Requirement 5: Governance',
        'Can the platform fit your policies for access, retention, consent and accountability?',
        retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
      ],
    ]),

    /** Benefits · How the options compare (49:117376): six cards linking to each comparison. */
    {
      type: 'cards',
      title: 'How the options',
      accent: 'compare',
      accentBreak: false,
      cards: OPTIONS.map(([k, tint, type, title, body]) => ({
        title,
        body,
        tint,
        pattern: { type, size: 'card' },
        to: COMPARE[k].to,
      })),
    },

    statement(
      'Which operating model matches',
      'your enterprise?',
      'A product can be strong at recap and still be the wrong fit for your security architecture. Decide what matters first, then compare feature counts.',
    ),
    COMPARE_TILES,
    whyChoose([
      keys(['Configure', 'Configure']),
      taskList(
        4,
        [
          ['Begin ERP sync audit diagnostics', 'Next week'],
          ['Identify top recurring items for PO automation pilot', 'Jun 14'],
          ['Confirm supplier onboarding checklist owners', 'Jun 7'],
        ],
        { width: 480, footer: false },
      ),
      contractReview(6, '96%', 440),
      supplierAtlas,
    ]),
    INTEGRATIONS,
  ],

  related: exploreCompare(RELATED),
  cta: cta(
    'Want to compare Acumeet against your current stack?',
    'Share the tools you use and the controls you need. We will map Acumeet against your requirements.',
    TALK,
  ),
};
