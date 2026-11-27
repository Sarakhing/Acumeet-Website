import { ROUTES } from '@/constants/routes';
import { actions, atlas, capture, integrations, retention, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, CONNECTED, explorer, faq, outcomes, windowHero, workflows } from './detail';

/** 05.06 · Project Governance (Figma 48:306542). */
export default {
  breadcrumb: ucBreadcrumb('Project governance'),

  /** 01 · Hero (48:306545) — 729 tall: action items in the window, retention policy overlapping. */
  ...windowHero({
    eyebrow: 'Project governance',
    title: 'Turn project meetings into clear decisions',
    accent: 'and accountable follow-through',
    lead: 'Projects move through changing priorities, dependencies, risks, and decisions. Acumeet helps teams capture the context of project discussions, summarise key points, and document agreed actions so stakeholders can follow what was decided and what needs to happen next.',
    secondary: { label: 'Explore meeting intelligence', to: ROUTES.product.meetingIntelligence },
    window: actions(
      5,
      [
        ['Share the change request with the sponsor', 'Fri'],
        ['Re-baseline the migration plan', 'Jun 5'],
        ['Book the user acceptance testing window', 'Today'],
      ],
      { width: 500 },
    ),
    overlay: retention(
      [
        ['Recordings', '1 year'],
        ['Transcripts', '3 years'],
        ['Summaries', '5 years'],
        ['Audit logs', '10 years'],
      ],
      { shadow: 'float' },
    ),
    overlayY: 326,
    height: 729,
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Project Updates Can Become Fragmented',
    [
      'Steering committees, delivery reviews, stand-ups, and stakeholder meetings often generate important decisions and follow-up work. When records are scattered across meeting notes, email threads, chat messages, and project tools, teams can lose the context behind a decision or struggle to confirm who owns the next step.',
      'Milestone updates and blockers are recorded inconsistently across workstreams.',
      'Dependencies and risks discussed in meetings may not be clearly assigned for follow-up.',
      'Teams revisit earlier conversations to understand why a decision was made.',
    ],
    atlas({
      scope: 'Project meetings',
      question: 'Why did go-live move?',
      answer: [
        'In the Steering Committee, go-live ',
        { b: 'moved by one week' },
        ' because ',
        { b: 'data migration is running behind plan' },
        '.',
      ],
      quote: {
        name: 'Ruth Godwin',
        time: '18:44',
        text: '“Migration is a week behind, so I’d rather move go-live than squeeze UAT.”',
      },
      sources: ['Steering · 18:44 · Ruth', 'Delivery Review · 06:30'],
      prompts: ['What are the new milestones?', 'Who owns migration?'],
    }),
  ),

  /** Tabs explorer + "✓ Explorer · How Acumeet Helps" (48:311325) — 5 tabs. */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture project discussions',
      'Create meeting records that help teams revisit progress updates, stakeholder concerns, and the context behind decisions.',
      capture('Wed, May 5', [
        ['Project Stand-up', '4:00 PM · Zoom'],
        ['Stakeholder Update', '9:00 AM · Meet'],
        ['Steering Committee', '2:00 PM · Teams'],
      ]),
    ],
    [
      'Summarise decisions and key points',
      'Make the main outcomes of project meetings easier to review and share with the appropriate stakeholders.',
      summary('Delivery Review', [50, 87, 33], [
        'Data migration is running a week behind plan.',
        'Go-live moved by one week to protect UAT.',
      ]),
    ],
    [
      'Document owners and next steps',
      'Make agreed actions and responsibilities easier to identify after project reviews and steering meetings.',
      actions(
        4,
        [
          ['Re-baseline the migration plan', 'Jun 7'],
          ['Book the user acceptance testing window', 'This week'],
          ['Update the RAID log with new dependencies', 'Jun 9'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Maintain continuity across workstreams',
      'Use available meeting-derived knowledge to recover context from earlier discussions and prepare for upcoming checkpoints.',
      search('go-live date change', [
        ['Stakeholder Update', 'Jun 22', '…go-live moved by one week.'],
        ['Steering Committee', 'Apr 5', '…change request CR-14 approved.'],
        ['Delivery Review', 'May 14', '…migration dependency logged in the RAID log.'],
      ]),
    ],
    [
      'Connect meeting outcomes to team workflows',
      'Where supported integrations are configured, help move meeting follow-ups into the tools teams use to coordinate work.',
      integrations(CONNECTED, 6),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Project Governance', 'Workflows', [
    [
      'Project steering committee meetings',
      'Capture strategic decisions, escalations, key risks, and follow-up responsibilities from governance discussions.',
    ],
    ['Milestone and delivery reviews', 'Summarise progress, delays, blockers, and agreed actions for the next delivery period.'],
    [
      'Risk and dependency reviews',
      'Document risks and dependencies raised in meetings, including the actions agreed for further assessment or mitigation.',
    ],
    [
      'Cross-functional project coordination',
      'Preserve a shared record of discussions across product, engineering, operations, finance, and business stakeholders.',
    ],
    [
      'Change and scope discussions',
      "Record the rationale and follow-up actions associated with proposed changes, subject to the organisation's own approval processes.",
    ],
    [
      'Project handovers and retrospectives',
      'Help teams revisit meeting context, lessons discussed, and unresolved follow-ups when ownership or project phases change.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer visibility into project decisions and next steps.',
      'Improved accountability for actions agreed during meetings.',
      'Less time spent searching for previous discussions and notes.',
      'Better continuity across project teams, workstreams, and checkpoints.',
    ],
    actions(
      4,
      [
        ['Book the user acceptance testing window', 'Jun 7'],
        ['Update the RAID log with new dependencies', 'Today'],
        ['Confirm the revised go-live date', 'Jun 17'],
      ],
      { width: 440 },
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet replace our project management platform?',
      'Acumeet complements project management tools by helping capture meeting context, summarise outcomes, and document follow-up actions.',
    ],
    [
      'Can teams track project actions after meetings?',
      'Acumeet can help make actions and responsibilities recorded from meetings easier to identify. Any workflow synchronisation with third-party project tools depends on the integrations available and configured for the organisation.',
    ],
    [
      'Can Acumeet help with steering committee meetings?',
      'Yes. Teams can use meeting records and summaries to revisit decisions, escalations, risks, and agreed follow-ups from steering committee discussions.',
    ],
    [
      'Does Acumeet automatically approve scope changes or resolve project risks?',
      "Approval decisions, risk assessments, and project governance remain with the organisation's designated people and processes.",
    ],
    [
      'Can teams revisit decisions made earlier in a project?',
      'Available meeting-derived records can help authorised users recover the context of earlier discussions, subject to account access and retention settings.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['customerStrategy', 'sales', 'customerSuccess', 'operations']),

  cta: ucCta(
    'Keep Every Project Conversation Connected to the Next Step',
    'Give project teams a clearer record of decisions, blockers, responsibilities, and follow-up actions. Explore how Acumeet can support the way your organisation runs project meetings.',
  ),
};
