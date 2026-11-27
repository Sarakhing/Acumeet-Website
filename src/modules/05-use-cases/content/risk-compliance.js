import { ROUTES } from '@/constants/routes';
import { actions, analytics, audit, capture, decisions, redaction, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, note, outcomes, windowHero, workflows } from './detail';

/** 05.02 · Risk & Compliance (Figma 48:305805). */
export default {
  breadcrumb: ucBreadcrumb('Risk & compliance'),

  /** 01 · Hero (48:305808) — 670 tall: audit log in the window, decisions card overlapping. */
  ...windowHero({
    eyebrow: 'Risk & compliance',
    title: 'Bring clarity and accountability to risk',
    accent: '& compliance meetings',
    lead: 'Risk and compliance teams need a clear record of issues discussed, decisions made, and actions assigned. Acumeet helps capture meeting discussions, summarise key points, and organise follow-up actions so teams can revisit context and keep responsibilities visible.',
    secondary: { label: 'Explore enterprise governance', to: ROUTES.solutions.govern },
    window: audit(
      [
        ['10:04', 'Signed in via SSO', 'Ruth Godwin'],
        ['09:52', 'Applied legal hold', 'Admin'],
        ['09:33', 'Edited action item', 'George Nwokoro'],
        ['09:24', 'Approved redactions', 'Faith Oluwale'],
      ],
      { width: 500 },
    ),
    overlay: decisions(
      'Jun 2',
      ['Escalate the vendor risk finding to ExCo', 'Close two remediated control gaps'],
      'Third-party outage exposure',
      ['Remediation', 'Risk register', 'KRIs', 'Controls'],
      360,
      { shadow: 'float' },
    ),
    overlayY: 335,
    height: 670,
  }),

  /** Split (48:305884). */
  challenge: challenge(
    'The Challenge: Decisions and Follow-Ups Must Stay Visible',
    [
      'Risk reviews, compliance meetings, control assessments, and issue-escalation discussions can involve many stakeholders and complex follow-up work. When records are spread across notes, email threads, and individual files, it can become harder to track what was discussed, who owns an action, and what still requires review.',
      'Risk discussions and agreed responses may be documented inconsistently.',
      'Action owners and due dates can be difficult to track across recurring meetings.',
      'Teams may need to recover the context behind a prior decision or escalation.',
    ],
    actions(
      5,
      [
        ['Share the key risk indicator dashboard with ExCo', 'Jun 18'],
        ['Review third-party risk assessments due this month', 'Next week'],
        ['Schedule the incident root-cause review', 'Jun 28'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer (48:305931) + "✓ Explorer · How Acumeet Helps" (48:309567). */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture key discussions',
      'Maintain meeting records that help authorised participants revisit topics, context, and issues raised.',
      capture('Mon, Jun 26', [
        ['Control Assessment Review', '10:30 AM · Meet'],
        ['Risk Committee Meeting', '11:00 AM · Teams'],
        ['Operational Risk Review', '3:30 PM · Zoom'],
      ]),
    ],
    [
      'Summarise complex conversations',
      'Use meeting summaries to review the main points and identify matters that require further attention.',
      summary('Risk & Compliance Forum', [54, 88, 36], [
        'Owners will update remediation dates by Friday.',
        'Risk reported two control gaps closed since the last meeting.',
      ]),
    ],
    [
      'Document actions and ownership',
      'Make follow-up responsibilities easier to identify and review after risk or compliance meetings.',
      actions(
        5,
        [
          ['Confirm owners for overdue control remediation', 'This week'],
          ['Share the key risk indicator dashboard with ExCo', 'Jun 9'],
          ['Review third-party risk assessments due this month', 'Today'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Maintain continuity between reviews',
      'Use available meeting-derived knowledge to reconnect current discussions with previous topics and decisions.',
      search('control remediation owner', [
        ['Risk Committee Meeting', 'Apr 17', '…owners agreed for overdue control remediation.'],
        ['Operational Risk Review', 'May 26', '…vendor risk finding escalated to ExCo.'],
        ['Risk & Compliance Forum', 'Jun 9', '…KRI thresholds reviewed for payment failures.'],
      ]),
    ],
  ]),

  /** Benefits (48:305935). */
  workflows: workflows('Key', 'Workflows', [
    ['Risk review meetings', 'Capture discussions about identified risks, proposed responses, owners, and follow-up items.'],
    [
      'Compliance programme reviews',
      'Summarise meeting topics and record actions agreed by the team for further assessment or completion.',
    ],
    [
      'Control and remediation discussions',
      'Keep a clearer record of issues raised, proposed corrective actions, and the people responsible for follow-up.',
    ],
    [
      'Issue escalation meetings',
      'Document the context of an escalation, options discussed, decisions recorded, and next steps.',
    ],
    [
      'Recurring governance reviews',
      'Revisit previous meeting records to understand outstanding actions and the history of an issue.',
    ],
  ]),

  /** Split (48:305944). */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer visibility into risk and compliance discussions.',
      'More consistent documentation of follow-up responsibilities.',
      'Improved continuity across recurring reviews and escalations.',
      'Less reliance on scattered notes and individual recollection.',
    ],
    analytics('This quarter', [93, 25, 83]),
  ),

  /** Split (48:305986). */
  note: note(
    'Support for Sensitive Workflows',
    'Risk and compliance meetings may contain confidential, commercially sensitive, or regulated information. Organisations should apply appropriate consent practices, access restrictions, retention rules, and internal policies when using any meeting intelligence system.',
    redaction(
      6,
      ['Send the contract to', '[EMAIL_ADDRESS]', 'and copy', '[PERSON_NAME]', 'on account', '[ACCOUNT_NUMBER]'],
      [
        ['Email address', '100%'],
        ['Account number', '90%'],
      ],
    ),
  ),

  /** FAQ (48:306024). */
  faq: faq([
    [
      'Can Acumeet help document risk and compliance meetings?',
      'Acumeet can help capture meeting discussions, produce summaries, and organise documented actions so teams can review key points and follow-ups.',
    ],
    [
      'Does Acumeet automatically determine whether we are compliant?',
      'Compliance interpretation and formal determinations remain the responsibility of authorised professionals and established processes.',
    ],
    ['Can teams track remediation discussions?', 'Acumeet can help document actions and responsibilities discussed in meetings.'],
    [
      'Is Acumeet suitable for sensitive meetings?',
      "Suitability depends on your organisation's requirements and the product's verified security, access, consent, and retention capabilities. Review these requirements before use.",
    ],
    [
      'How can we evaluate Acumeet for our team?',
      'Book a demo to discuss your meeting types, documentation practices, governance needs, and the capabilities available for your intended workflow.',
    ],
  ]),

  /** Explore more (48:306036). */
  related: exploreUseCases(['creditInvestmentCommittees', 'audit', 'fraudAml', 'projectGovernance']),

  cta: ucCta(
    'Make Risk Discussions Easier to Follow Through',
    'Help your team preserve the context of important discussions, make responsibilities visible, and maintain continuity from one review to the next. Explore how Acumeet can support your risk and compliance meeting workflows.',
  ),
};
