import { ROUTES } from '@/constants/routes';
import { actions, audit, capture, decisions, redaction, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, note, outcomes, ringsHero, workflows } from './detail';

const cardRedaction = (count, match) =>
  redaction(
    count,
    ['Card ending', '[CARD_NUMBER]', 'was used by', '[PERSON_NAME]', 'from phone', '[PHONE_NUMBER]'],
    [
      ['Card number', '100%'],
      ['Phone number', match],
    ],
  );

/** 05.05 · Fraud & AML (Figma 48:306374). */
export default {
  breadcrumb: ucBreadcrumb('Fraud & AML'),

  /** 01 · Hero + "✓ Hero carousel · 05.05" (48:310784). */
  ...ringsHero({
    eyebrow: 'Fraud & AML',
    title: 'Keep Fraud & AML Meeting Discussions Organised and Accountable',
    lead: 'Fraud investigation and anti-money-laundering teams often coordinate sensitive cases, review emerging information, and agree on next steps across multiple stakeholders. Acumeet helps capture meeting discussions, summarise key points, and document assigned follow-ups—giving authorised teams a clearer record of what was discussed and what needs attention.',
    secondary: { label: 'Explore Security and Governance', to: ROUTES.security },
    slides: [
      [
        'Decisions',
        decisions(
          'May 30',
          ['Freeze the linked accounts pending review', 'Close three alerts as false positives'],
          'Linked accounts across two branches',
          ['Monitoring rules', 'Case reviews', 'Alerts', 'STR filing'],
          560,
        ),
      ],
      [
        'Action items',
        actions(
          5,
          [
            ['Review alerts above the risk threshold', 'Jun 7'],
            ['Update the case log with new evidence', 'This week'],
            ['Request transaction history for the flagged accounts', 'Jun 9'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Summary',
        summary(
          'Escalation Committee',
          [78, 79, 19],
          ['Alert backlog will be reviewed again on Thursday.', 'The team escalated one case to the MLRO for review.'],
          { width: 560 },
        ),
      ],
    ],
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Sensitive Cases Require Clear Coordination',
    [
      'Case reviews, investigation updates, escalation meetings, and AML-related discussions can involve confidential information and time-sensitive follow-up. When notes are scattered across documents, email, or personal records, it can be harder to preserve context, clarify responsibilities, and prepare for the next review.',
      'Investigation updates and decisions may be recorded inconsistently across meetings.',
      'Referrals, information requests, and next steps can be difficult to track across stakeholders.',
      'Teams may need to revisit the context behind a previous case discussion or escalation.',
    ],
    cardRedaction(6, '96%'),
  ),

  /** Tabs explorer + "✓ Explorer · How Acumeet Helps" (48:310918). */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture meeting context',
      'Maintain meeting records that help authorised participants revisit topics, updates, and issues discussed.',
      capture('Wed, May 23', [
        ['Fraud Case Review', '9:00 AM · Teams'],
        ['AML Review Meeting', '2:00 PM · Zoom'],
        ['Investigation Update', '4:00 PM · Meet'],
      ]),
    ],
    [
      'Summarise key points',
      'Use meeting summaries to review the main points raised and identify matters requiring further attention.',
      summary('Escalation Committee', [40, 77, 23], [
        'The team escalated one case to the MLRO for review.',
        'Investigations flagged linked accounts across two branches.',
      ]),
    ],
    [
      'Document follow-up responsibilities',
      'Make recorded next steps, information requests, and assigned owners easier to identify after a discussion.',
      actions(
        3,
        [
          ['Review alerts above the risk threshold', 'Jun 9'],
          ['Update the case log with new evidence', 'Today'],
          ['Request transaction history for the flagged accounts', 'Jun 12'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Support continuity between reviews',
      'Return to available meeting-derived records to understand earlier discussions and follow the progress of agreed actions.',
      search('case 1042 escalation', [
        ['AML Review Meeting', 'May 10', '…escalated case 1042 to the MLRO.'],
        ['Investigation Update', 'Jun 19', '…linked accounts frozen pending review.'],
        ['Escalation Committee', 'Apr 28', '…three alerts closed as false positives.'],
      ]),
    ],
  ]),

  /** Benefits. */
  workflows: workflows('Key', 'Workflows', [
    [
      'Fraud case review meetings',
      'Record investigation updates, questions raised, decisions documented, and follow-up tasks assigned to relevant team members.',
    ],
    [
      'AML operations discussions',
      'Summarise internal discussions about case handling, referrals, process questions, and next steps.',
    ],
    [
      'Escalation meetings',
      'Preserve the context of an escalated issue, the options discussed, and the responsibilities agreed for further review.',
    ],
    [
      'Cross-functional coordination',
      'Help authorised participants from relevant teams maintain a consistent record of meeting outcomes and follow-up actions.',
    ],
    [
      'Recurring case reviews',
      'Use prior meeting records to recover context and identify outstanding items before the next discussion.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer documentation of investigation and AML-related discussions.',
      'Improved visibility into assigned follow-up actions and responsibilities.',
      'Better continuity between case reviews and escalation meetings.',
      'Less dependence on fragmented notes and individual recollection.',
    ],
    audit([
      ['09:57', 'Signed in via SSO', 'Ruth Godwin'],
      ['09:39', 'Applied legal hold', 'Admin'],
      ['09:31', 'Edited action item', 'George Nwokoro'],
      ['09:16', 'Approved redactions', 'Faith Oluwale'],
    ]),
  ),

  /** Split. */
  note: note(
    'Privacy, Confidentiality, and Responsible Use',
    "Fraud and AML discussions may contain highly sensitive personal, financial, investigative, or legally restricted information. Before using Acumeet for these meetings, organisations should assess whether the product's verified security, access, consent, storage, retention, and deletion capabilities meet their requirements. Apply internal case-handling procedures and limit access to authorised participants.",
    cardRedaction(7, '97%'),
  ),

  /** FAQ (two questions in Figma). */
  faq: faq([
    [
      'Can Acumeet help document fraud investigation meetings?',
      'Acumeet can help capture meeting discussions, generate summaries, and document follow-up responsibilities for authorised teams to review.',
    ],
    [
      'Can it help teams maintain case review continuity?',
      "Available meeting records can help authorised participants revisit earlier discussions and documented actions, subject to the organisation's access and retention rules.",
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['projectGovernance', 'customerStrategy', 'sales', 'customerSuccess']),

  cta: ucCta(
    'Bring Greater Clarity to Sensitive Case Discussions',
    "Help authorised teams preserve meeting context, document responsibilities, and keep follow-up actions visible. Talk to Acumeet about your organisation's meeting documentation needs and requirements for sensitive workflows.",
  ),
};
