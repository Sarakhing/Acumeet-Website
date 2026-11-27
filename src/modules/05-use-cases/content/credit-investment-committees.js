import { ROUTES } from '@/constants/routes';
import { actions, audit, capture, decisions, redaction, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, note, outcomes, stackedHero, workflows } from './detail';

/** 05.03 · Credit & Investment Committees (Figma 48:306049). */
export default {
  breadcrumb: ucBreadcrumb('Credit & investment committees'),

  /** 01 · Hero (48:306052) — 654 tall, 46px title, decisions + action items over hairlines. */
  ...stackedHero({
    eyebrow: 'Credit & investment committees',
    title: 'Bring structure and clarity to credit & investment committee meetings',
    titleSize: 46,
    lead: 'Credit and investment committees weigh complex information, discuss risks and opportunities, and record decisions that can shape significant financial outcomes. Acumeet helps teams capture meeting discussions, summarise key points, document decisions and conditions, and keep follow-up responsibilities visible.',
    secondary: { label: 'Explore Enterprise Meeting Intelligence', to: ROUTES.solutions.emi },
    back: decisions(
      'Jun 9',
      ['Reduce the single-obligor limit for the sector', 'Move two accounts to the watch list'],
      'Concentration in the oil and gas portfolio',
      ['Exposure', 'Conditions', 'Facilities', 'Collateral'],
      440,
      { shadow: 'float' },
    ),
    front: actions(
      4,
      [
        ['Circulate approved credit conditions to Relationship Management', 'May 12'],
        ['Review covenant breaches on the SME portfolio', 'Next week'],
        ['Prepare the watch-list summary for the next sitting', 'May 22'],
      ],
      { width: 400, shadow: 'float' },
    ),
    frontY: 250,
    height: 654,
  }),

  /** Split (48:306215). */
  challenge: challenge(
    'The Challenge: Committee Decisions Need Context',
    [
      'Committee meetings can involve detailed proposals, supporting analysis, competing viewpoints, and conditions that must be followed up. When the record is incomplete or fragmented, participants may find it difficult to revisit the reasoning behind a decision, confirm outstanding conditions, or identify who is responsible for the next step.',
      'Discussions may cover multiple proposals, applicants, transactions, or investment opportunities in one meeting.',
      'Conditions, caveats, and outstanding information requests can be difficult to track consistently.',
      'Committee members may need to revisit the context behind a previous decision.',
    ],
    actions(
      3,
      [
        ['Prepare the watch-list summary for the next sitting', 'Next week'],
        ['Request updated cash-flow statements from the applicant', 'May 24'],
        ['Confirm collateral valuation before disbursement', 'Fri'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer (48:306262) + "✓ Explorer · How Acumeet Helps" (48:309977). */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture the discussion',
      'Create a meeting record that helps authorised participants revisit the topics and context considered by the committee.',
      capture('Mon, Jun 8', [
        ['Investment Committee', '3:30 PM · Teams'],
        ['Loan Review Meeting', '10:30 AM · Zoom'],
        ['Portfolio Risk Review', '11:00 AM · Meet'],
      ]),
    ],
    [
      'Summarise key considerations',
      'Use AI-generated summaries to review the main points discussed and the issues requiring further attention.',
      summary('Credit Committee Meeting', [64, 68, 46], [
        'The committee approved the facility subject to collateral valuation.',
        'Risk flagged rising concentration in one sector.',
      ]),
    ],
    [
      'Document decisions and conditions',
      'Make recorded outcomes, follow-up conditions, and next steps easier to identify in meeting records.',
      decisions(
        'Jun 9',
        ['Move two accounts to the watch list', 'Approve the facility subject to collateral valuation'],
        'Delayed audited financials from applicants',
        ['Watch list', 'Exposure', 'Conditions', 'Facilities'],
      ),
    ],
    [
      'Maintain continuity across meetings',
      'Return to available meeting-derived knowledge when a proposal or investment is reviewed again.',
      search('collateral valuation condition', [
        ['Loan Review Meeting', 'May 3', '…approved subject to an updated collateral valuation.'],
        ['Portfolio Risk Review', 'Jun 12', '…deferred pending audited financial statements.'],
        ['Credit Committee Meeting', 'Apr 21', '…two accounts moved to the watch list.'],
      ]),
    ],
  ]),

  /** Benefits (48:306266). */
  workflows: workflows('Key', 'Workflows', [
    [
      'Credit committee reviews',
      'Record key discussion points, questions raised, conditions noted, and follow-up information requested during a credit review.',
    ],
    [
      'Investment committee meetings',
      'Preserve the main arguments, risks and opportunities discussed, recorded outcomes, and assigned next steps.',
    ],
    [
      'Follow-up on conditions',
      'Document responsibilities and outstanding items that need to be addressed after a committee discussion.',
    ],
    [
      'Reconsideration of a proposal',
      'Use available meeting records to revisit the previous discussion and understand the context before the next review.',
    ],
    [
      'Committee reporting and preparation',
      "Help coordinators prepare summaries and organise records for review under the organisation's established approval process.",
    ],
  ]),

  /** Split (48:306275). */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer records of committee discussions and recorded outcomes.',
      'Improved visibility into conditions and follow-up responsibilities.',
      'Easier retrieval of the context behind earlier discussions.',
      'More consistent handover between committee meetings and responsible teams.',
    ],
    audit([
      ['10:09', 'Updated retention policy', 'Admin'],
      ['09:54', 'Viewed transcript', 'Ruth Godwin'],
      ['09:32', 'Shared meeting record', 'Warith Abraham'],
      ['09:20', 'Changed role to Admin', 'Admin'],
    ]),
  ),

  /** Split (48:306311). */
  note: note(
    'Support for Sensitive Financial Decisions',
    'Credit and investment committee meetings may contain confidential financial, customer, transaction, or commercially sensitive information. Organisations should define appropriate participant consent, access, retention, and handling procedures. Acumeet supports meeting documentation and follow-through.',
    redaction(
      3,
      ['The facility for', '[CUSTOMER_NAME]', 'is secured against account', '[ACCOUNT_NUMBER]', 'held with', '[BANK_NAME]'],
      [
        ['Account number', '98%'],
        ['Customer name', '93%'],
      ],
    ),
  ),

  /** FAQ (48:306349). */
  faq: faq([
    [
      'Can Acumeet document credit committee meetings?',
      'Acumeet can help capture meeting discussions, summarise key points, and organise documented decisions and follow-up actions.',
    ],
    [
      'Can it record the rationale behind an investment decision?',
      'Meeting records and summaries can help preserve the discussion context. The committee remains responsible for validating and approving its official decision record.',
    ],
    [
      'Does Acumeet approve credit or investment proposals?',
      "No. Those decisions remain with authorised committee members and the organisation's established process.",
    ],
    [
      'Can it help track conditions or requests for additional information?',
      'Acumeet can help document conditions and follow-up responsibilities discussed in meetings.',
    ],
    [
      'How can we evaluate Acumeet for our committee process?',
      'Book a demo to discuss your committee workflow, documentation requirements, and the capabilities relevant to your organisation.',
    ],
  ]),

  /** Explore more (48:306361). */
  related: exploreUseCases(['audit', 'fraudAml', 'projectGovernance', 'customerStrategy']),

  cta: ucCta(
    'Keep Committee Decisions Clear, Traceable, and Actionable',
    'Help your team preserve the context behind important financial discussions, document recorded outcomes, and maintain visibility into next steps. Explore how Acumeet can support credit and investment committee meetings.',
  ),
};
