import { audit, capture, keys, search } from '@/components/visuals/mocks';
import { ninReview, taskList } from './shared';
import {
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  ENTERPRISE_DEMO,
  explorer,
  exploreCompare,
  lightHero,
  LOGOS,
  statement,
  vs,
} from './compare';

const CARDS = [
  ['lilac', 'rings', 'Teams that need control choose Acumeet', ''],
  [
    'pink',
    'dots',
    'Decisions and actions on one record',
    'Meeting summaries and action items turn every call into topics, decisions, owners and status.',
  ],
  [
    'blue',
    'hairlines',
    'Protect what matters',
    'Redaction AI detects and masks personal and financial details in meeting records.',
  ],
  [
    'mint',
    'rings',
    'Ask across every meeting',
    'Atlas answers questions across past meetings and points back to the source.',
  ],
];

/** 12.04 · Acumeet vs Enterprise Meeting Intelligence Platforms (Figma 49:116398). */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs Enterprise Meeting Intelligence Platforms'),

  ...lightHero({
    height: 598,
    eyebrow: 'Comparison',
    title: 'Enterprise meeting intelligence should go beyond',
    accent: 'recording the meeting',
    lead: 'The right platform helps you capture what matters, protect sensitive information and turn conversations into accountable outcomes.',
    primary: ENTERPRISE_DEMO,
  }),

  sections: [
    LOGOS,
    vs('enterprisePlatforms'),

    /** Tabs explorer + "Explorer · Compare the operating model" (49:75609): six criteria. */
    explorer(
      {
        title: 'Compare the operating model, not just',
        accent: 'the feature list',
        lead: 'Many platforms transcribe and summarise. Enterprise fit depends on data control, access, governance, knowledge and how actions reach execution.',
      },
      [
        [
          'Criterion 1: Capture',
          'Does it work across the meeting environments your teams already use?',
          capture('Mon, Jun 8', [
            ['Client Feedback Analysis Session', '10:30 AM · Meet'],
            ['Weekly ProcureCentro Stand-up', '11:00 AM · Teams'],
            ['Monthly Marketing Strategy Review', '3:30 PM · Zoom'],
          ]),
        ],
        [
          'Criterion 2: Decisions and actions',
          'Does it preserve decisions and turn commitments into owned, trackable actions?',
          taskList(
            5,
            [
              ['Identify top recurring items for PO automation pilot', 'Next week'],
              ['Confirm supplier onboarding checklist owners', 'Jun 14'],
              ['Draft the Q3 vendor scorecard', 'Jun 7'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Criterion 3: Organisational knowledge',
          'Can teams search meeting history when the original participants are gone?',
          search(
            'vendor approval workflow',
            [
              [
                'Monthly Marketing Strategy Review',
                'Apr 24',
                '…suggested revising the vendor approval workflow to minimise bottlenecks.',
              ],
              [
                'Product Development Sync-Up',
                'May 7',
                '…approval workflow dependencies raised for Q3 planning.',
              ],
              [
                'Client Feedback Analysis Session',
                'Jun 16',
                '…agreed to revisit the approval cycle after the pilot.',
              ],
            ],
            { width: 460 },
          ),
        ],
        [
          'Criterion 4: Sensitive data',
          'Can sensitive information be identified and protected inside the record?',
          ninReview(6),
        ],
        [
          'Criterion 5: Data control',
          'Can you control storage, keys, residency and access to fit your architecture?',
          keys(['Configure', 'Configure']),
        ],
        [
          'Criterion 6: Governance',
          'Can administrators enforce controls and see platform activity?',
          audit(
            [
              ['11:42', 'Shared meeting record', 'Warith Abraham'],
              ['11:36', 'Changed role to Admin', 'Admin'],
              ['11:23', 'Downloaded recording', 'Fredelina Augustus'],
              ['11:03', 'Signed in via SSO', 'Ruth Godwin'],
            ],
            { width: 360 },
          ),
        ],
      ],
    ),

    statement(
      'Acumeet connects the meeting to the',
      'enterprise around it',
      'Capture, transcription, summaries, action management, Redaction AI, Atlas, analytics and enterprise controls in one platform built around organisational knowledge.',
    ),
    statement(
      'Security is part of',
      'the product',
      'Identity, access, storage, encryption, auditability and residency controls are designed with enterprise requirements in view.',
      'dark',
    ),
    COMPARE_TILES,

    /** Benefits · Why teams choose Acumeet (49:116495): 2-up cards. */
    {
      type: 'cards',
      title: 'Why teams choose Acumeet',
      titleSize: 44,
      lead: 'Control, one record for decisions and actions, protection for sensitive data, and answers across every meeting.',
      columns: 2,
      accentBreak: false,
      cards: CARDS.map(([tint, type, title, body]) => ({
        title,
        body,
        tint,
        pattern: { type, size: 'card-wide' },
      })),
    },
  ],

  related: exploreCompare(['why', 'aiAssistants', 'meetingNotes']),
  cta: cta(
    'Bring your requirements',
    'Share your workflow, security and deployment needs and see how Acumeet fits.',
    ENTERPRISE_DEMO,
  ),
};
