import { ROUTES } from '@/constants/routes';
import { analytics, atlas, capture, decisions, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { centeredHero, challenge, explorer, faq, outcomes, workflows } from './detail';

const heroDecisions = decisions(
  'May 30',
  ['Tag all committee meetings by topic', 'Keep retrospectives in one folder'],
  'Knowledge lost when owners change roles',
  ['Decisions', 'Lessons learned', 'Policies', 'Onboarding'],
  400,
  { shadow: 'float' },
);

/** 05.13 · Enterprise Knowledge Management (Figma 48:308004). */
export default {
  breadcrumb: ucBreadcrumb('Enterprise Knowledge Management'),

  /** 01 · Hero (48:308007) — 1026 tall: search (+1.5°) and summary (+0.2°) behind decisions. */
  ...centeredHero({
    eyebrow: 'Enterprise Knowledge Management',
    title: 'Turn Meeting Conversations into',
    accent: 'Organisational Knowledge',
    lead: 'Important organisational knowledge is often created in meetings: decisions are explained, expertise is shared, risks are discussed, and next steps are agreed. Acumeet helps teams capture meeting discussions, summarise key information, and retain searchable meeting-derived knowledge—so authorised users can return to relevant context instead of relying only on memory or scattered notes.',
    secondary: { label: 'Explore the Knowledge Repository', to: ROUTES.product.knowledgeRepository },
    height: 1026,
    copyHeight: 394,
    top: 558,
    gap: 68,
    items: [
      [
        242,
        581,
        search(
          'pricing decision last year',
          [
            ['Knowledge Sharing Session', 'Jun 4', '…pricing approach agreed for enterprise plans.'],
            ['Leadership Offsite', 'Apr 13', '…decision linked to the policy library.'],
            ['Policy Handover', 'May 22', '…lessons learned shared at the retrospective.'],
          ],
          { width: 400, shadow: 'float' },
        ),
        1.5,
      ],
      [
        793,
        619,
        summary(
          'Knowledge Sharing Session',
          [76, 86, 30],
          ['The team agreed to tag committee meetings by topic.', 'New joiners will use past retrospectives for onboarding.'],
          { width: 400, shadow: 'float' },
        ),
        0.2,
      ],
      [520, 558, heroDecisions],
    ],
    compact: heroDecisions,
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Important Context Gets Lost',
    [
      'As organisations grow, useful knowledge can become fragmented across meeting notes, individual inboxes, chat threads, and the memories of people who were present. When a colleague changes roles, a project resumes, or a decision is revisited, teams may struggle to find the context behind earlier discussions.',
      'Decisions and the reasoning behind them are difficult to locate later.',
      'Teams repeat conversations because previous discussions are hard to retrieve.',
      'Knowledge is concentrated in the people who attended a meeting.',
    ],
    atlas({
      question: 'How did we handle the last policy handover?',
      answer: [
        'In the Policy Handover session, the team ',
        { b: 'added decision summaries to the handbook' },
        ' and ',
        { b: 'tagged committee meetings by topic' },
        '.',
      ],
      quote: {
        name: 'Faith Oluwale',
        time: '22:10',
        text: '“If it’s in the handbook, the next owner won’t have to start from scratch.”',
      },
      sources: ['Handover · 22:10 · Faith', 'Retro · 31:55'],
      prompts: ['Find related decisions', 'Show the handbook update'],
    }),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Supports Enterprise Knowledge Management" (48:315389) — 5 tabs. */
  explorer: explorer('How Acumeet Supports Enterprise', 'Knowledge Management', [
    [
      'Capture knowledge at the point of discussion',
      'Create a record of meeting conversations so that key topics, explanations, and decisions can be revisited after the meeting.',
      capture('Wed, May 15', [
        ['Policy Handover', '9:00 AM · Teams'],
        ['Programme Retrospective', '2:00 PM · Zoom'],
        ['Knowledge Sharing Session', '4:00 PM · Meet'],
      ]),
    ],
    [
      'Summarise information for faster review',
      'Use meeting summaries to review the main discussion points without needing to start from a blank page of notes.',
      summary('Leadership Offsite', [40, 77, 33], [
        'The team agreed to tag committee meetings by topic.',
        'New joiners will use past retrospectives for onboarding.',
      ]),
    ],
    [
      'Make meeting-derived knowledge searchable',
      'Help authorised users find relevant information in available meeting records and return to the context of earlier conversations.',
      search('pricing decision last year', [
        ['Knowledge Sharing Session', 'May 25', '…pricing approach agreed for enterprise plans.'],
        ['Leadership Offsite', 'Jun 8', '…decision linked to the policy library.'],
        ['Policy Handover', 'Apr 17', '…lessons learned shared at the retrospective.'],
      ]),
    ],
    [
      'Preserve decision context over time',
      'Keep a useful reference to what was discussed and documented, supporting continuity when projects, priorities, or team responsibilities change.',
      decisions(
        'Jun 4',
        ['Review archived meetings yearly', 'Tag all committee meetings by topic'],
        'Duplicate notes across teams',
        ['Onboarding', 'Handover', 'Archive', 'Decisions'],
      ),
    ],
    [
      'Support organisational learning',
      'Give teams a way to revisit lessons, customer feedback, operational context, and recurring issues recorded in meetings.',
      analytics('Last 7 days', [83, 55, 43], { width: 350 }),
    ],
  ]),

  /** Benefits — six cards (976 tall: the title wraps). */
  workflows: workflows('Enterprise Knowledge Management', 'Workflows', [
    [
      'Project continuity and handovers',
      'Help teams revisit earlier project discussions, decisions, dependencies, and documented next steps when work moves between people or phases.',
    ],
    [
      'Institutional memory',
      'Retain meeting-derived context that can help teams understand why a process, priority, or decision evolved.',
    ],
    [
      'Cross-functional collaboration',
      'Make it easier for authorised stakeholders to review relevant discussions across teams, subject to access permissions and organisational policies.',
    ],
    [
      'Customer and stakeholder knowledge',
      'Revisit context from customer reviews, stakeholder discussions, and planning meetings to support more consistent follow-up.',
    ],
    ['Operational learning', 'Use past meeting records to review recurring challenges, lessons learned, and improvement actions.'],
    [
      'Onboarding and role transitions',
      'Help new owners build context from available meeting records rather than depending entirely on informal verbal handovers.',
    ],
  ]),

  /** Split ("Why It Matters"). */
  outcomes: outcomes(
    'Why It Matters',
    [
      'Less time spent searching for old notes or reconstructing past discussions.',
      'Better continuity when people, responsibilities, and priorities change.',
      'Easier access to documented meeting context for authorised team members.',
      'More consistent follow-up across projects and departments.',
    ],
    search(
      'pricing decision last year',
      [
        ['Policy Handover', 'Apr 9', '…pricing approach agreed for enterprise plans.'],
        ['Programme Retrospective', 'May 18', '…decision linked to the policy library.'],
        ['Knowledge Sharing Session', 'Jun 27', '…lessons learned shared at the retrospective.'],
      ],
      { width: 440 },
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Is Acumeet a replacement for our document management or knowledge base platform?',
      'This page positions Acumeet around meeting-derived knowledge.',
    ],
    [
      'Can users search previous meeting information?',
      "Acumeet's knowledge experience is intended to help users retrieve meeting-derived context.",
    ],
    [
      'Does Acumeet make every meeting available to every employee?',
      "Access to meeting records should follow the organisation's configured permissions, consent requirements, and retention policies.",
    ],
    [
      'Can Acumeet preserve knowledge when employees leave or change roles?',
      "Available meeting records can help preserve documented context, subject to the organisation's retention and deletion settings.",
    ],
    [
      'Can Acumeet answer questions about past meetings?',
      'The Atlas and knowledge experience may support questions about available meeting-derived information.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['overview', 'executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees']),

  cta: ucCta(
    'Make Organisational Knowledge Easier to Find and Reuse',
    'Help your teams retain useful meeting context, revisit documented decisions, and carry knowledge forward as work evolves. See how Acumeet can support your enterprise knowledge management workflows.',
  ),
};
