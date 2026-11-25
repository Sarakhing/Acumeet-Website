import { ROUTES } from '@/constants/routes';
import { access, actions, capture, decisions, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, outcomes, windowHero, workflows } from './detail';

/** 05.12 · Management Meetings (Figma 48:307791). */
export default {
  breadcrumb: ucBreadcrumb('Management Meetings'),

  /** 01 · Hero (48:307794) — 726 tall: upcoming meetings in the window, decisions overlapping. */
  ...windowHero({
    eyebrow: 'Management Meetings',
    title: 'Keep Management Decisions Clear, Connected,',
    accent: 'and Actionable',
    lead: 'Leadership and management teams make decisions that shape priorities, budgets, resources, and execution. Acumeet helps capture management discussions, summarise key points, and document agreed actions—giving teams a clearer record of what was decided, why it was discussed, and what needs to happen next.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    window: capture(
      'Thu, May 21',
      [
        ['Strategy Offsite Review', '11:00 AM · Zoom'],
        ['Executive Committee Meeting', '3:30 PM · Meet'],
        ['Board Meeting · Q3', '10:30 AM · Teams'],
      ],
      { width: 500 },
    ),
    overlay: decisions(
      'Jun 4',
      ['Set up a cost optimisation working group', 'Approve the Q3 operating priorities'],
      'Budget pressure from currency movements',
      ['Budget', 'Hiring', 'Expansion', 'Board pack'],
      360,
      { shadow: 'float' },
    ),
    overlayY: 366,
    height: 726,
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Decisions Need to Travel Beyond the Meeting',
    [
      'Executive reviews, departmental meetings, planning sessions, and cross-functional discussions can produce important decisions and commitments. When meeting outcomes are not captured consistently, teams may interpret priorities differently, repeat earlier conversations, or lose track of who is responsible for follow-up.',
      'Strategic priorities and management decisions are recorded across multiple notes and channels.',
      'Actions and owners may be unclear after a meeting ends.',
      'Departmental updates can be difficult to consolidate into a shared view of decisions and issues.',
    ],
    actions(
      4,
      [
        ['Confirm owners for the cost optimisation plan', 'Jun 12'],
        ['Share the revised hiring plan with HR', 'Next week'],
        ['Schedule the follow-up on regional expansion', 'Jun 22'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps Management Teams" (48:314852) — 5 tabs. */
  explorer: explorer('How Acumeet Helps Management', 'Teams', [
    [
      'Capture management discussions',
      'Maintain meeting records that help authorised participants revisit strategic topics, operational updates, questions, and decisions discussed.',
      capture('Mon, Jun 8', [
        ['Board Meeting · Q3', '11:00 AM · Zoom'],
        ['Management Meeting', '3:30 PM · Meet'],
        ['Strategy Offsite Review', '10:30 AM · Teams'],
      ]),
    ],
    [
      'Summarise key outcomes',
      'Make important points and meeting outcomes easier to review after leadership and departmental meetings.',
      summary('Executive Committee Meeting', [74, 78, 26], [
        'Finance flagged budget pressure from currency movements.',
        'Department heads will report progress at the next meeting.',
      ]),
    ],
    [
      'Document actions and responsibilities',
      'Help teams identify agreed next steps and the people responsible for progressing them.',
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
      'Preserve decision context',
      'Use available meeting-derived knowledge to recover the context of earlier discussions during subsequent reviews and planning cycles.',
      decisions(
        'Jun 4',
        ['Adopt the revised hiring plan', 'Set up a cost optimisation working group'],
        'Delayed delivery of the core banking upgrade',
        ['Board pack', 'Priorities', 'Strategy', 'Budget'],
      ),
    ],
    [
      'Support cross-functional alignment',
      'Provide a clearer reference for what teams discussed and agreed across departments, subject to access and retention policies.',
      access([
        ['Faith Oluwale', 'Admin'],
        ['George Nwokoro', 'Owner'],
        ['Ruth Godwin', 'Viewer'],
        ['Warith Abraham', 'Member'],
      ]),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Management Meeting', 'Workflows', [
    [
      'Executive leadership reviews',
      'Capture strategic discussions, key concerns, decisions documented, and follow-up responsibilities.',
    ],
    [
      'Departmental performance meetings',
      'Summarise updates, challenges, dependencies, and agreed actions across functional teams.',
    ],
    [
      'Strategic planning sessions',
      'Record priorities, options considered, questions requiring further analysis, and next steps agreed by the group.',
    ],
    [
      'Budget and resource discussions',
      'Document resource needs, constraints, trade-offs, and follow-up items without presenting Acumeet as a budgeting or approval system.',
    ],
    [
      'Cross-functional decision meetings',
      'Preserve the context of decisions that involve multiple departments and require coordinated execution.',
    ],
    [
      'Recurring management check-ins',
      'Revisit previous actions and discussion context to support continuity from one meeting to the next.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer records of management decisions and agreed priorities.',
      'Improved visibility into action ownership and follow-up.',
      'Less time spent reconstructing context from earlier discussions.',
      'Better continuity across leadership and departmental meetings.',
    ],
    decisions(
      'Jun 9',
      ['Set up a cost optimisation working group', 'Approve the Q3 operating priorities'],
      'Budget pressure from currency movements',
      ['Priorities', 'Strategy', 'Budget', 'Hiring'],
      440,
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet replace our meeting or project management tools?',
      'Acumeet supports meeting capture, summaries, and access to meeting-derived context.',
    ],
    [
      'Can Acumeet help management teams track decisions?',
      "Meeting records and summaries can help teams revisit decisions and agreed actions. Formal approvals and authoritative decision records should continue to follow the organisation's established governance processes.",
    ],
    [
      'Can teams use Acumeet for confidential management meetings?',
      "Suitability depends on the organisation's security, access, consent, storage, retention, and deletion requirements.",
    ],
    [
      'Does Acumeet automatically approve budgets or assign company strategy?',
      'Management remains responsible for strategy, approvals, and decisions.',
    ],
    [
      'Can teams revisit actions from previous meetings?',
      'Available meeting-derived records can help authorised users recover prior discussion context and documented follow-up, subject to account access and retention settings.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['overview', 'executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees']),

  cta: ucCta(
    'Make Every Management Meeting Count Beyond the Room',
    'Help your leadership and management teams preserve decision context, clarify responsibilities, and keep agreed actions visible. Explore how Acumeet can support your management meeting workflows.',
  ),
};
