import { ROUTES } from '@/constants/routes';
import { actions, analytics, capture, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, outcomes, stackedHero, workflows } from './detail';

/** 05.10 · Operations (Figma 48:307330). */
export default {
  breadcrumb: ucBreadcrumb('Operations'),

  /** 01 · Hero (48:307333) — 678 tall, 54px title, analytics + action items over hairlines. */
  ...stackedHero({
    eyebrow: 'Operations',
    title: 'Bring Clearer Follow-Through to Operational Meetings',
    titleSize: 54,
    lead: 'Operational teams coordinate processes, service delivery, incidents, and cross-functional priorities through recurring meetings. Acumeet helps capture these discussions, summarise key points, and document decisions and follow-up actions—so teams can revisit what was agreed and keep responsibilities visible between meetings.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    back: analytics('This quarter', [73, 25, 63], { width: 440, shadow: 'float' }),
    front: actions(
      3,
      [
        ['Confirm shift handover owners', 'Fri'],
        ['Review backlog above service level', 'May 2'],
        ['Close out last week’s process changes', 'Today'],
      ],
      { width: 400, shadow: 'float' },
    ),
    frontY: 280,
    height: 678,
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Operational Decisions Need Consistent Follow-Up',
    [
      'Daily operations reviews, service meetings, incident discussions, and process improvement sessions generate decisions that teams must carry into their work. When records are fragmented or responsibilities are unclear, issues can be revisited repeatedly and important next steps may be delayed.',
      'Operational updates and blockers are captured inconsistently across teams.',
      'Actions agreed in recurring meetings can be difficult to track from one review to the next.',
      'Incident discussions and escalations may lack an easily accessible summary of decisions and responsibilities.',
    ],
    actions(
      5,
      [
        ['Close out last week’s process changes', 'May 4'],
        ['Share the incident timeline with stakeholders', 'Today'],
        ['Update the runbook for the payment outage', 'May 14'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps Operations Teams" (48:313659) — 5 tabs. */
  explorer: explorer('How Acumeet Helps Operations', 'Teams', [
    [
      'Capture operational discussions',
      'Keep meeting records that help teams revisit service updates, process issues, blockers, and decisions.',
      capture('Fri, May 19', [
        ['Daily Operations Review', '2:00 PM · Meet'],
        ['Service Delivery Meeting', '4:00 PM · Teams'],
        ['Incident Review', '9:00 AM · Zoom'],
      ]),
    ],
    [
      'Summarise priorities and outcomes',
      'Make the main points from daily, weekly, and monthly operational meetings easier to review.',
      summary('Process Improvement Sync', [51, 91, 55], [
        'Backlog is trending down this week.',
        'Operations closed the payment incident within service level.',
      ]),
    ],
    [
      'Document actions and ownership',
      'Help teams identify the follow-up tasks and responsibilities agreed during operational discussions.',
      actions(
        5,
        [
          ['Share the incident timeline with stakeholders', 'Jun 9'],
          ['Update the runbook for the payment outage', 'Today'],
          ['Confirm shift handover owners', 'Jun 12'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve incident and escalation context',
      'Maintain available meeting-derived context about what was discussed, what actions were agreed, and what needs further review.',
      search('payment outage runbook', [
        ['Service Delivery Meeting', 'Apr 20', '…runbook update agreed after the payment outage.'],
        ['Incident Review', 'May 3', '…second on-call engineer added.'],
        ['Process Improvement Sync', 'Jun 12', '…reconciliation automation approved.'],
      ]),
    ],
    [
      'Support continuous improvement',
      'Capture ideas, recurring issues, and agreed process changes for teams to revisit in later meetings.',
      analytics('Last 30 days', [83, 55, 43], { width: 350 }),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Operations', 'Workflows', [
    [
      'Daily operations reviews',
      'Summarise status updates, priorities, blockers, and actions that teams agree to address during the day.',
    ],
    [
      'Service delivery meetings',
      'Record service issues, coordination needs, responsibilities, and follow-up discussed by delivery teams.',
    ],
    [
      'Incident and escalation reviews',
      'Document the meeting discussion, decisions, and assigned actions without presenting Acumeet as an incident detection or response platform.',
    ],
    [
      'Process improvement sessions',
      'Capture improvement proposals, decisions, owners, and next steps so ideas remain accessible after the session.',
    ],
    [
      'Cross-functional coordination',
      'Help teams across operations, technology, finance, customer service, and delivery maintain a shared record of meeting outcomes.',
    ],
    [
      'Operational performance reviews',
      'Preserve discussion context around reported performance, service constraints, and planned follow-up. Use approved reporting systems for official metrics.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer records of operational decisions and responsibilities.',
      'More consistent follow-up between recurring operations meetings.',
      'Less time spent reconstructing context from scattered notes.',
      'Improved coordination across teams and service functions.',
    ],
    analytics('This month', [87, 47, 44]),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet replace our operations management system?',
      'Acumeet supports meeting documentation, summaries, and follow-up visibility.',
    ],
    [
      'Can Acumeet help teams follow up on operational actions?',
      'Acumeet can help make actions and responsibilities recorded in meetings easier to identify. Any synchronisation with external workflow tools depends on the integrations available and configured.',
    ],
    [
      'Can Acumeet be used for incident review meetings?',
      'Teams can use meeting records and summaries to revisit incident discussions, decisions, and agreed follow-up.',
    ],
    [
      'Does Acumeet automatically monitor operational performance?',
      "Official metrics should continue to come from the organisation's approved systems.",
    ],
    [
      'Can teams use Acumeet for process improvement meetings?',
      'Yes. Meeting records can help preserve improvement ideas, decisions, and next steps for review in subsequent sessions.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['overview', 'executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees']),

  cta: ucCta(
    'Make Operational Meetings Easier to Act On',
    'Help teams keep decisions, responsibilities, and next steps visible after every operational review. Explore how Acumeet can support your operations meeting workflows.',
  ),
};
