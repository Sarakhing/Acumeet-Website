import { ROUTES } from '@/constants/routes';
import { actions, analytics, atlas, capture, decisions, redaction, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, note, outcomes, ringsHero, workflows } from './detail';

/** 05.01 · Executive & Board Meetings (Figma 48:305601). */
export default {
  breadcrumb: ucBreadcrumb('Executive & Board Meetings'),

  /** 01 · Hero (48:305604) + "✓ Hero carousel · 05.01" (48:309032). */
  ...ringsHero({
    eyebrow: 'Executive & Board Meetings',
    title: 'Turn Executive Discussions into Clear Decisions and Follow-Through',
    lead: 'Leadership meetings shape strategy, set priorities, and determine what happens next. Acumeet helps teams capture meeting discussions, review key points, document decisions, and keep action items visible—so important context does not disappear when the meeting ends.',
    secondary: { label: 'Explore Enterprise Meeting Intelligence', to: ROUTES.solutions.emi },
    slides: [
      [
        'Meetings',
        capture(
          'Thu, May 15',
          [
            ['Management Meeting', '9:00 AM · Teams'],
            ['Strategy Offsite Review', '2:00 PM · Zoom'],
            ['Executive Committee Meeting', '4:00 PM · Meet'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Decisions',
        decisions(
          'May 28',
          ['Defer the regional expansion review to Q4', 'Adopt the revised hiring plan'],
          'Budget pressure from currency movements',
          ['Expansion', 'Board pack', 'Priorities', 'Strategy'],
          560,
        ),
      ],
      [
        'Summary',
        summary(
          'Executive Committee Meeting',
          [82, 80, 22],
          [
            'The committee approved the Q3 priorities with two changes.',
            'Finance flagged budget pressure from currency movements.',
          ],
          { width: 560 },
        ),
      ],
    ],
  }),

  /** Split (48:305619). */
  challenge: challenge(
    'The Challenge: Important Decisions Need a Reliable Record',
    [
      'Executive and board meetings often cover multiple strategic priorities, sensitive issues, and cross-functional commitments. When notes are incomplete or follow-ups live in separate places, teams may struggle to confirm what was agreed, who owns the next step, or which issues need to return to the agenda.',
      'Important discussion points can be difficult to retrieve after the meeting.',
      'Actions and owners may be recorded inconsistently across teams.',
      'Leadership may need to revisit previous decisions to understand the context behind current priorities.',
    ],
    redaction(
      3,
      ['The salary review for', '[PERSON_NAME]', 'is set at', '[SALARY_AMOUNT]', 'effective', '[DATE]'],
      [
        ['Salary amount', 'Match 97%'],
        ['Person name', 'Match 87%'],
      ],
    ),
  ),

  /** Tabs explorer (48:305660) + "✓ Explorer · How Acumeet Helps" (48:309157). */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture meeting discussions',
      'Create a meeting record that helps participants revisit the discussion and its context.',
      capture('Mon, Jun 22', [
        ['Board Meeting · Q3', '11:00 AM · Zoom'],
        ['Management Meeting', '3:30 PM · Meet'],
        ['Strategy Offsite Review', '10:30 AM · Teams'],
      ]),
    ],
    [
      'Review key points faster',
      'Use AI-generated summaries to review the main topics without relying only on manually written notes.',
      summary('Executive Committee Meeting', [44, 78, 26], [
        'Finance flagged budget pressure from currency movements.',
        'Department heads will report progress at the next meeting.',
      ]),
    ],
    [
      'Clarify decisions and actions',
      'Identify documented decisions, next steps, and responsibilities so follow-up is easier to coordinate.',
      actions(
        4,
        [
          ['Prepare the board pack for the next sitting', 'Today'],
          ['Confirm owners for the cost optimisation plan', 'Jun 12'],
          ['Share the revised hiring plan with HR', 'Fri'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve leadership context',
      'Keep meeting-derived information available for later reference, subject to the organisation’s access and retention policies.',
      search('regional expansion decision', [
        ['Management Meeting', 'Jun 5', '…agreed to defer the regional expansion review to Q4.'],
        ['Strategy Offsite Review', 'Apr 14', '…board requested a revised cost plan.'],
        ['Executive Committee Meeting', 'May 23', '…priorities circulated to department heads.'],
      ]),
    ],
  ]),

  /** Benefits (48:305664). */
  workflows: workflows('Key', 'Workflows', [
    [
      'Before the next leadership meeting',
      'Review relevant notes and previous action items to understand outstanding commitments and continuing topics.',
    ],
    [
      'After an executive meeting',
      'Prepare a summary of key discussion points, decisions, and follow-up actions for review by authorised participants.',
    ],
    ['Across departments', 'Help teams maintain a shared understanding of leadership priorities and assigned next steps.'],
    [
      'When revisiting a decision',
      'Return to available meeting records to recover the discussion context and documented rationale.',
    ],
    [
      'For board meeting coordination',
      'Support the preparation and organisation of meeting records; formal minutes, approvals, and official records remain subject to the organisation’s established process.',
    ],
  ]),

  /** Split (48:305673). */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer visibility into decisions and commitments.',
      'More consistent follow-up on leadership action items.',
      'Less dependence on scattered notes and individual memory.',
      'Easier access to historical meeting context.',
    ],
    analytics('Last 30 days', [88, 50, 63]),
  ),

  /** Split (48:305715). */
  note: note(
    'Designed for Leadership Workflows',
    'Acumeet can support executive leadership teams, board and committee coordinators, executive assistants, strategy teams, and functional leaders who need reliable meeting documentation and follow-through. Teams should apply their own rules for confidentiality, participant access, retention, and approval of official records.',
    atlas({
      scope: 'Board meetings',
      question: 'What did the board decide on regional expansion?',
      answer: [
        'In Board Meeting · Q3, the board ',
        { b: 'deferred the regional expansion review to Q4' },
        ' and asked for a ',
        { b: 'revised cost plan' },
        '.',
      ],
      quote: {
        name: 'George Nwokoro',
        time: '41:20',
        text: '“Let’s bring expansion back in Q4 with a revised cost plan.”',
      },
      sources: ['Board · 41:20 · George', 'ExCo · 15:02'],
      prompts: ['What else was deferred?', 'Show board actions'],
    }),
  ),

  /** FAQ (48:305780). */
  faq: faq([
    [
      'Can Acumeet summarise executive meetings?',
      'Acumeet is designed to generate meeting summaries that help participants review important discussion points. The final record should be reviewed according to your organisation’s process.',
    ],
    [
      'Can it help track decisions and action items?',
      'Acumeet helps surface documented decisions and follow-up actions so teams can review responsibilities and next steps.',
    ],
    [
      'Can Acumeet replace formal board minutes?',
      'Official minutes and resolutions should continue to follow your organisation’s governance and approval procedures.',
    ],
    [
      'How should sensitive leadership discussions be handled?',
      'Use appropriate access controls, meeting consent practices, retention rules, and internal policies. Confirm the specific Acumeet security and administration capabilities relevant to your requirements before deployment.',
    ],
    [
      'Can we see how Acumeet fits our leadership meetings?',
      'Yes. Book a demo to discuss your meeting workflows and determine which capabilities are suitable for your organisation.',
    ],
  ]),

  /** Explore more (48:305792). */
  related: exploreUseCases(['riskCompliance', 'creditInvestmentCommittees', 'audit', 'fraudAml']),

  cta: ucCta(
    'Give Every Leadership Decision a Clear Next Step',
    'Help your organisation capture important discussions, preserve decision context, and follow through on commitments. Explore how Acumeet can support your executive and board meeting workflows.',
  ),
};
