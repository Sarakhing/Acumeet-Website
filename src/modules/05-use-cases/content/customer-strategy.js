import { ROUTES } from '@/constants/routes';
import { access, actions, analytics, capture, decisions, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { centeredHero, challenge, explorer, faq, outcomes, workflows } from './detail';

const heroActions = actions(
  4,
  [
    ['Share onboarding checklist with the account team', 'Jun 21'],
    ['Log renewal risks in the CRM', 'May 26'],
    ['Schedule the executive sponsor check-in', 'Today'],
  ],
  { width: 400, shadow: 'float' },
);

/** 05.07 · Customer Strategy (Figma 48:306787). */
export default {
  breadcrumb: ucBreadcrumb('Customer Strategy'),

  /** 01 · Hero (48:306790) — 997 tall: analytics (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Customer Strategy',
    title: 'Turn Customer Conversations into Clearer Strategies',
    accent: 'and Follow-Through',
    lead: 'Customer strategy depends on understanding priorities, aligning stakeholders, and following through on commitments. Acumeet helps teams capture customer-related meeting discussions, summarise key points, and document decisions and next steps—so teams can return to the context behind their plans and conversations.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    height: 997,
    copyHeight: 458,
    top: 598,
    gap: 44,
    items: [
      [230, 662, analytics('This quarter', [83, 45, 73], { width: 400, shadow: 'float' }), 6],
      [
        807,
        662,
        decisions(
          'May 30',
          ['Assign a dedicated success manager', 'Move the renewal discussion forward'],
          'Delayed onboarding on the customer side',
          ['Onboarding', 'Proposal', 'Pricing', 'Stakeholders'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 598, heroActions],
    ],
    compact: heroActions,
  }),

  /** Split (735 tall in Figma: 3-line title). */
  challenge: challenge(
    'The Challenge: Customer Context Is Often Spread Across Teams',
    [
      'Account planning sessions, customer business reviews, strategy workshops, and internal account discussions can generate valuable insight. When the record of these conversations is fragmented across individual notes and communication channels, teams may struggle to maintain a shared understanding of customer goals, concerns, commitments, and opportunities.',
      'Customer priorities and expectations are documented differently by different stakeholders.',
      'Commitments made during meetings may be difficult to revisit or follow up consistently.',
      'Account teams can lose context when responsibilities change or new colleagues join.',
    ],
    access([
      ['Warith Abraham', 'Owner'],
      ['Faith Oluwale', 'Admin'],
      ['George Nwokoro', 'Member'],
      ['Ruth Godwin', 'Viewer'],
    ]),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps" (48:311837) — 5 tabs. */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture customer discussions',
      'Keep meeting records that help authorised team members revisit customer goals, concerns, requirements, and strategic topics discussed.',
      capture('Fri, Jun 16', [
        ['Discovery Call', '3:30 PM · Teams'],
        ['Quarterly Business Review', '10:30 AM · Zoom'],
        ['Account Planning Session', '11:00 AM · Meet'],
      ]),
    ],
    [
      'Summarise key insights',
      'Make important themes and meeting outcomes easier to review after account planning sessions and customer reviews.',
      summary('Customer Onboarding Call', [61, 86, 40], [
        'The customer asked for a phased rollout across regions.',
        'The account team flagged renewal risk without a sponsor.',
      ]),
    ],
    [
      'Document commitments and next steps',
      'Help teams identify the actions, owners, and follow-up agreed during customer-related meetings.',
      actions(
        3,
        [
          ['Send the proposal follow-up to the customer', 'Fri'],
          ['Confirm next steps with the procurement contact', 'Next week'],
          ['Share onboarding checklist with the account team', 'Jun 14'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve account context',
      'Use available meeting-derived knowledge to recover context across recurring reviews, planning cycles, and team handovers.',
      search('customer renewal next steps', [
        ['Quarterly Business Review', 'May 17', '…next steps agreed with the procurement contact.'],
        ['Account Planning Session', 'Jun 26', '…phased rollout requested by the customer.'],
        ['Customer Onboarding Call', 'Apr 9', '…renewal risk logged for follow-up.'],
      ]),
    ],
    [
      'Support cross-functional alignment',
      'Give relevant stakeholders a clearer shared reference for what was discussed and what the team agreed to do next.',
      access([
        ['Faith Oluwale', 'Admin'],
        ['George Nwokoro', 'Owner'],
        ['Ruth Godwin', 'Viewer'],
        ['Warith Abraham', 'Member'],
      ]),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Customer Strategy', 'Workflows', [
    [
      'Strategic account planning',
      'Capture discussions about customer objectives, priorities, stakeholders, potential opportunities, and agreed account-planning actions.',
    ],
    [
      'Customer business reviews',
      'Summarise progress, feedback, open issues, and commitments raised during recurring customer review meetings.',
    ],
    [
      'Customer needs and requirements workshops',
      'Document requirements and questions raised so teams can revisit them during planning and delivery.',
    ],
    [
      'Renewal and relationship planning',
      'Preserve relevant meeting context around customer concerns, value discussions, and agreed follow-up.',
    ],
    [
      'Internal account strategy meetings',
      'Align sales, customer success, product, and delivery teams around customer feedback and the next steps agreed internally.',
    ],
    [
      'Customer escalation reviews',
      'Record the issue discussed, the options considered, responsibilities assigned, and follow-up agreed by the team.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'A clearer shared record of customer priorities and commitments.',
      'More consistent follow-up after customer and account planning meetings.',
      'Less time spent searching for historical meeting context.',
      'Improved continuity across sales, customer success, product, and delivery teams.',
    ],
    access([
      ['Faith Oluwale', 'Admin'],
      ['George Nwokoro', 'Owner'],
      ['Ruth Godwin', 'Viewer'],
      ['Warith Abraham', 'Member'],
    ]),
  ),

  /** FAQ. */
  faq: faq([
    ['Can Acumeet replace our CRM?', 'Acumeet supports meeting documentation and access to meeting-derived context.'],
    [
      'Can Acumeet help customer success teams prepare for reviews?',
      'Available meeting summaries and records can help teams revisit previous discussions, commitments, and open follow-up items when preparing for customer reviews.',
    ],
    [
      'Can teams use Acumeet to understand customer needs?',
      'Acumeet can help preserve and summarise needs and requirements discussed in meetings. Teams remain responsible for validating customer requirements and deciding how to act on them.',
    ],
    [
      'How does Acumeet help when account ownership changes?',
      'Available meeting-derived records can help incoming team members recover context about previous discussions, commitments, and follow-up, subject to access and retention rules.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['sales', 'customerSuccess', 'operations', 'productTeams']),

  cta: ucCta(
    'Give Every Customer Conversation a Clearer Next Step',
    'Help your teams preserve customer context, align around priorities, and follow through on commitments. Explore how Acumeet can support your customer strategy and account planning meetings.',
  ),
};
