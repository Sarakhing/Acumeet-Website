import { ROUTES } from '@/constants/routes';
import { actions, analytics, capture, decisions, integrations, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, CONNECTED, explorer, faq, outcomes, ringsHero, workflows } from './detail';

/** 05.09 · Customer Success (Figma 48:307158; 48:307157 is an empty duplicate frame). */
export default {
  breadcrumb: ucBreadcrumb('Customer Success'),

  /** 01 · Hero + "Hero carousel · 05.09 · Customer Success" (48:312982). */
  ...ringsHero({
    eyebrow: 'Customer Success',
    title: 'Keep Customer Commitments Visible After Every Meeting',
    lead: 'Customer success depends on understanding customer goals, responding to concerns, and following through on agreed actions. Acumeet helps teams capture customer meeting discussions, summarise key points, and document next steps—making it easier to maintain context across onboarding, reviews, and ongoing account conversations.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    slides: [
      ['Analytics', analytics('Last 30 days', [84, 18, 47], { width: 560 })],
      [
        'Action items',
        actions(
          5,
          [
            ['Log renewal risks in the CRM', 'Today'],
            ['Schedule the executive sponsor check-in', 'Jun 12'],
            ['Send the proposal follow-up to the customer', 'Fri'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Decisions',
        decisions(
          'Jun 9',
          ['Move the renewal discussion forward', 'Prioritise the reporting request'],
          'Renewal at risk without executive sponsor',
          ['Proposal', 'Pricing', 'Stakeholders', 'Next steps'],
          560,
        ),
      ],
    ],
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Customer Follow-Through Takes Coordination',
    [
      'Onboarding sessions, service reviews, escalation calls, and account check-ins often create commitments across customer success, support, product, and delivery teams. When notes and follow-ups are fragmented, teams can lose track of what was promised, what remains open, and what matters most to the customer.',
      'Customer goals, concerns, and expectations may be recorded in different formats.',
      'Follow-up tasks from onboarding and review meetings can be difficult to track consistently.',
      'Teams may lack context when an account changes hands or an issue escalates.',
    ],
    actions(
      4,
      [
        ['Share onboarding checklist with the account team', 'Fri'],
        ['Log renewal risks in the CRM', 'Jun 8'],
        ['Schedule the executive sponsor check-in', 'May 13'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps Customer Success Teams" (48:313118) — 5 tabs. */
  explorer: explorer('How Acumeet Helps Customer', 'Success Teams', [
    [
      'Capture customer conversations',
      'Maintain meeting records that help authorised team members revisit goals, questions, feedback, and issues raised by customers.',
      capture('Wed, Jun 8', [
        ['Discovery Call', '3:30 PM · Teams'],
        ['Quarterly Business Review', '10:30 AM · Zoom'],
        ['Account Planning Session', '11:00 AM · Meet'],
      ]),
    ],
    [
      'Summarise review outcomes',
      'Make the main points from onboarding sessions, account reviews, and escalation meetings easier to review and share.',
      summary('Customer Onboarding Call', [40, 62, 48], [
        'The customer asked for a phased rollout across regions.',
        'The account team flagged renewal risk without a sponsor.',
      ]),
    ],
    [
      'Document commitments and owners',
      'Help teams identify agreed actions and responsibilities so that follow-up is clearer after the meeting.',
      actions(
        3,
        [
          ['Log renewal risks in the CRM', 'Fri'],
          ['Schedule the executive sponsor check-in', 'Next week'],
          ['Send the proposal follow-up to the customer', 'Jun 14'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve relationship context',
      'Use available meeting-derived knowledge to recover context across recurring reviews, account handovers, and cross-functional collaboration.',
      search('customer renewal next steps', [
        ['Quarterly Business Review', 'May 25', '…next steps agreed with the procurement contact.'],
        ['Account Planning Session', 'Jun 8', '…phased rollout requested by the customer.'],
        ['Customer Onboarding Call', 'Apr 17', '…renewal risk logged for follow-up.'],
      ]),
    ],
    [
      'Coordinate follow-up across teams',
      'Where supported integrations are configured, connect meeting outcomes with the tools teams use to coordinate tasks and service delivery.',
      integrations(CONNECTED, 6),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Customer Success', 'Workflows', [
    [
      'Customer onboarding',
      'Document goals, implementation discussions, questions, dependencies, and next steps agreed during onboarding meetings.',
    ],
    [
      'Customer success reviews',
      'Summarise progress, feedback, open concerns, and commitments discussed during recurring account reviews.',
    ],
    [
      'Service and support escalations',
      'Preserve the issue context, options discussed, responsibilities, and follow-up agreed during escalation meetings.',
    ],
    [
      'Customer feedback sessions',
      'Capture product feedback, requests, and customer concerns for review by the relevant internal teams.',
    ],
    [
      'Renewal and account planning',
      'Keep meeting-derived context about customer priorities and commitments accessible for planning conversations. Use verified CRM and commercial systems for formal renewal status and forecasts.',
    ],
    [
      'Internal customer health reviews',
      'Help customer success, sales, support, and product teams review relevant meeting outcomes and coordinate next steps.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'More consistent follow-up on customer commitments.',
      'Improved continuity across onboarding, reviews, and escalations.',
      'Less time spent searching for historical customer context.',
      'Clearer collaboration between customer-facing and delivery teams.',
    ],
    actions(
      5,
      [
        ['Confirm next steps with the procurement contact', 'May 17'],
        ['Share onboarding checklist with the account team', 'Fri'],
        ['Log renewal risks in the CRM', 'May 27'],
      ],
      { width: 440 },
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet replace our customer success platform?',
      'Acumeet supports meeting documentation and access to meeting-derived context.',
    ],
    [
      'Can Acumeet help with customer onboarding?',
      'Meeting records and summaries can help teams revisit onboarding goals, questions, dependencies, and agreed actions.',
    ],
    [
      'Can customer success teams track follow-up actions?',
      'Acumeet can help document actions and responsibilities discussed in meetings. Workflow synchronisation with other tools depends on the integrations available and configured.',
    ],
    [
      'Can Acumeet support account handovers?',
      'Available meeting-derived records can help incoming team members understand previous conversations and commitments, subject to access and retention rules.',
    ],
  ]),

  /** Explore more — from 05.09 on, Figma leads with the overview. */
  related: exploreUseCases(['overview', 'executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees']),

  cta: ucCta(
    'Build Stronger Follow-Through into Every Customer Conversation',
    'Help your team preserve customer context, coordinate commitments, and keep next steps visible. Explore how Acumeet can support your customer success meeting workflows.',
  ),
};
