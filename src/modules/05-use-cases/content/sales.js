import { ROUTES } from '@/constants/routes';
import { actions, analytics, capture, decisions, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, outcomes, ringsHero, workflows } from './detail';

/** 05.08 · Sales (Figma 48:307020). */
export default {
  breadcrumb: ucBreadcrumb('Sales'),

  /** 01 · Hero + "Hero carousel · 05.08 · Sales" (48:312339). */
  ...ringsHero({
    eyebrow: 'Sales',
    title: 'Turn Sales Conversations into Clear Next Steps',
    lead: 'Sales teams handle discovery calls, product demonstrations, stakeholder meetings, negotiations, and pipeline reviews. Acumeet helps capture meeting discussions, summarise customer needs and key points, and document agreed follow-ups—so teams can spend less time reconstructing conversations and more time moving opportunities forward.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    slides: [
      ['Analytics', analytics('Last 30 days', [66, 54, 80], { width: 560 })],
      [
        'Action items',
        actions(
          5,
          [
            ['Schedule the executive sponsor check-in', 'Jun 14'],
            ['Send the proposal follow-up to the customer', 'Jun 7'],
            ['Confirm next steps with the procurement contact', 'This week'],
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
    'The Challenge: Important Sales Context Gets Lost Between Calls',
    [
      'A sales opportunity may involve several conversations with different stakeholders. When requirements, objections, commitments, and next steps are scattered across individual notes and messages, it becomes harder for the team to maintain a consistent account view and follow up reliably.',
      'Discovery notes and customer requirements are recorded inconsistently.',
      'Objections, questions, and promised follow-ups can be difficult to retrieve later.',
      'Account handovers may leave new team members without the context behind earlier conversations.',
    ],
    actions(
      3,
      [
        ['Share onboarding checklist with the account team', 'May 15'],
        ['Log renewal risks in the CRM', 'Next week'],
        ['Schedule the executive sponsor check-in', 'May 25'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps Sales Teams" (48:312475) — 5 tabs. */
  explorer: explorer('How Acumeet Helps Sales', 'Teams', [
    [
      'Capture discovery and demo discussions',
      'Keep meeting records that help sales representatives revisit customer needs, use cases, questions, and concerns raised during conversations.',
      capture('Thu, Jun 12', [
        ['Discovery Call', '3:30 PM · Teams'],
        ['Quarterly Business Review', '10:30 AM · Zoom'],
        ['Account Planning Session', '11:00 AM · Meet'],
      ]),
    ],
    [
      'Summarise key points and requirements',
      'Make the main themes of customer conversations easier to review after calls and demonstrations.',
      summary('Customer Onboarding Call', [73, 74, 44], [
        'The customer asked for a phased rollout across regions.',
        'The account team flagged renewal risk without a sponsor.',
      ]),
    ],
    [
      'Document commitments and next steps',
      'Help teams identify follow-up actions and responsibilities agreed during sales meetings.',
      actions(
        3,
        [
          ['Schedule the executive sponsor check-in', 'This week'],
          ['Send the proposal follow-up to the customer', 'Jun 9'],
          ['Confirm next steps with the procurement contact', 'Today'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Support account continuity',
      'Use available meeting-derived records to recover context when opportunities involve multiple representatives or stakeholders.',
      search('customer renewal next steps', [
        ['Quarterly Business Review', 'May 21', '…next steps agreed with the procurement contact.'],
        ['Account Planning Session', 'Jun 4', '…phased rollout requested by the customer.'],
        ['Customer Onboarding Call', 'Apr 13', '…renewal risk logged for follow-up.'],
      ]),
    ],
    [
      'Improve pipeline review preparation',
      "Bring meeting summaries and recorded outcomes into the team's preparation for opportunity reviews, while retaining the CRM or pipeline system as the source of record where applicable.",
      analytics('This month', [83, 55, 43], { width: 350 }),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Sales', 'Workflows', [
    [
      'Discovery calls',
      'Capture customer challenges, business priorities, requirements, questions, and the follow-up agreed with the prospect.',
    ],
    [
      'Product demonstrations',
      'Record areas of interest, questions raised, objections, and requested next steps for the sales team to review.',
    ],
    [
      'Stakeholder and buying-group meetings',
      'Preserve the context of discussions involving business sponsors, technical reviewers, procurement, and other relevant stakeholders.',
    ],
    [
      'Proposal and negotiation discussions',
      'Document topics discussed, open questions, commitments, and items requiring confirmation without implying that Acumeet negotiates or approves commercial terms.',
    ],
    [
      'Pipeline and forecast reviews',
      'Summarise opportunity updates, risks discussed, and agreed actions to support internal sales reviews.',
    ],
    [
      'Sales-to-customer-success handovers',
      'Help pass along relevant meeting context, customer goals, requirements, and commitments when an opportunity moves into onboarding or account management.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'More consistent documentation of customer conversations.',
      'Clearer visibility into promised follow-ups and assigned responsibilities.',
      'Less time spent rewriting notes or searching for previous call context.',
      'Smoother collaboration across sales representatives and supporting teams.',
    ],
    search(
      'customer renewal next steps',
      [
        ['Customer Onboarding Call', 'Jun 18', '…next steps agreed with the procurement contact.'],
        ['Discovery Call', 'Apr 27', '…phased rollout requested by the customer.'],
        ['Quarterly Business Review', 'May 10', '…renewal risk logged for follow-up.'],
      ],
      { width: 440 },
    ),
  ),

  /** FAQ. */
  faq: faq([
    ['Does Acumeet replace our CRM?', 'Acumeet supports meeting capture, summaries, and access to meeting-derived context.'],
    [
      'Can Acumeet help sales representatives follow up after calls?',
      'Acumeet can help document the actions and responsibilities agreed in meetings. Any automatic synchronisation with CRM or sales tools depends on the integrations available and configured.',
    ],
    [
      'Can sales teams use Acumeet for product demonstrations?',
      'Yes, teams can use meeting records and summaries to revisit questions, requirements, feedback, and agreed next steps from demonstrations, subject to the supported meeting setup.',
    ],
    [
      'Can Acumeet support sales-to-customer-success handovers?',
      'Available meeting-derived records can help receiving teams understand prior discussions and commitments, subject to access permissions and retention rules.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['customerSuccess', 'operations', 'productTeams', 'managementMeetings']),

  cta: ucCta(
    'Make Every Sales Conversation Easier to Act On',
    'Give your sales team a clearer record of customer needs, key discussion points, and agreed next steps. Explore how Acumeet can support your sales meeting workflow.',
  ),
};
