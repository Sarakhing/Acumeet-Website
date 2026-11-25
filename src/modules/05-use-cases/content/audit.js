import { ROUTES } from '@/constants/routes';
import { actions, analytics, audit, capture, redaction, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, note, outcomes, windowHero, workflows } from './detail';

/** 05.04 · Audit (Figma 48:305347). */
export default {
  breadcrumb: ucBreadcrumb('Audit'),

  /** 01 · Hero (48:305350) — 668 tall: audit log in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Audit',
    title: 'Make Audit Discussions Easier to Document, Review,',
    accent: 'and Follow Up',
    lead: 'Audit meetings often involve findings, evidence requests, recommendations, deadlines, and corrective actions across multiple stakeholders. Acumeet helps teams capture discussions, summarise key points, document follow-up responsibilities, and revisit meeting context when work continues.',
    secondary: { label: 'Explore Enterprise Meeting Intelligence', to: ROUTES.solutions.emi },
    window: audit(
      [
        ['10:28', 'Signed in via SSO', 'Ruth Godwin'],
        ['10:22', 'Applied legal hold', 'Admin'],
        ['10:09', 'Edited action item', 'George Nwokoro'],
        ['09:49', 'Approved redactions', 'Faith Oluwale'],
      ],
      { width: 500 },
    ),
    overlay: actions(
      4,
      [
        ['Share the audit status report with the committee', 'Fri'],
        ['Schedule the IT general controls walkthrough', 'May 8'],
        ['Close out last quarter’s low-risk findings', 'Today'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 311,
    height: 668,
  }),

  /** Split (48:305360). */
  challenge: challenge(
    'The Challenge: Audit Follow-Through Depends on Clear Records',
    [
      'Audit planning, status reviews, walkthroughs, and remediation meetings can generate detailed discussions and many follow-up tasks. When meeting notes are fragmented or actions are not clearly recorded, teams may spend additional time confirming what was discussed, who is responsible, and which items need to be revisited.',
      'Findings and recommendations may be captured inconsistently across meeting records.',
      'Evidence requests and follow-up owners can be difficult to keep visible.',
      'Teams may need to reconstruct the context behind an earlier discussion or agreed action.',
    ],
    actions(
      3,
      [
        ['Close out last quarter’s low-risk findings', 'May 10'],
        ['Upload evidence for the access review finding', 'Today'],
        ['Confirm remediation date for finding 3', 'May 20'],
      ],
      { width: 440 },
    ),
  ),

  /** Tabs explorer + "✓ Explorer · How Acumeet Helps" (48:310377). */
  explorer: explorer('How Acumeet', 'Helps', [
    [
      'Capture audit discussions',
      'Create a meeting record that helps authorised participants revisit the topics, questions, and context discussed.',
      capture('Mon, Jun 12', [
        ['Audit Walkthrough', '11:00 AM · Zoom'],
        ['Audit Committee Meeting', '3:30 PM · Meet'],
        ['Internal Audit Status Review', '10:30 AM · Teams'],
      ]),
    ],
    [
      'Summarise key points',
      'Use AI-generated summaries to review the main issues raised and matters requiring further attention.',
      summary('Remediation Follow-up', [74, 78, 56], [
        'Evidence is outstanding for the access review finding.',
        'Management responses are due before the next committee.',
      ]),
    ],
    [
      'Document follow-up actions',
      'Make recorded action items, responsibilities, and next steps easier to identify after meetings.',
      actions(
        4,
        [
          ['Confirm remediation date for finding 3', 'Fri'],
          ['Share the audit status report with the committee', 'Next week'],
          ['Schedule the IT general controls walkthrough', 'Jun 14'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve context between reviews',
      'Return to available meeting records to understand prior discussions as findings and remediation activities progress.',
      search('access review finding evidence', [
        ['Audit Committee Meeting', 'Jun 15', '…evidence requested for the access review finding.'],
        ['Internal Audit Status Review', 'Apr 24', '…remediation date extended for finding 3.'],
        ['Remediation Follow-up', 'May 7', '…two low-risk findings closed.'],
      ]),
    ],
  ]),

  /** Benefits. */
  workflows: workflows('Key', 'Workflows', [
    [
      'Audit planning meetings',
      'Document the scope and priorities discussed, responsibilities assigned, and items requiring further preparation.',
    ],
    ['Audit status reviews', 'Summarise progress discussions, open questions, evidence requests, and follow-up actions.'],
    [
      'Findings and recommendations',
      'Record how findings were discussed, the proposed next steps, and the owners assigned to follow-up.',
    ],
    [
      'Remediation meetings',
      'Maintain a clearer record of corrective actions, dependencies, and items to review at the next checkpoint.',
    ],
    [
      'Cross-functional audit discussions',
      'Help participants from audit, finance, operations, and other functions maintain a shared record of agreed follow-ups.',
    ],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'More consistent documentation of audit discussions.',
      'Clearer visibility into action owners and follow-up items.',
      'Easier access to historical context across recurring reviews.',
      'Reduced dependence on scattered notes and manual recollection.',
    ],
    analytics('This month', [83, 35, 43]),
  ),

  /** Split. */
  note: note(
    'Support for Audit Governance',
    'Audit records may contain confidential business information, sensitive findings, or regulated data. Organisations should apply their own requirements for access, retention, review, evidence handling, and approval of formal audit records. Acumeet can support meeting documentation and follow-through.',
    redaction(
      6,
      ['The salary review for', '[PERSON_NAME]', 'is set at', '[SALARY_AMOUNT]', 'effective', '[DATE]'],
      [
        ['Salary amount', '97%'],
        ['Person name', '84%'],
      ],
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet help document audit meetings?',
      'Acumeet can help capture meeting discussions, generate summaries, and organise documented follow-up actions for review by the audit team.',
    ],
    ['Can it track findings and corrective actions?', 'Acumeet can help record actions and responsibilities discussed during meetings.'],
    [
      'Does Acumeet verify audit evidence or certify findings?',
      'Auditors remain responsible for evaluating evidence and forming conclusions.',
    ],
    [
      'Can audit teams revisit previous discussions?',
      'Meeting-derived records can help teams recover earlier discussion context, subject to applicable access and retention policies.',
    ],
    [
      'How can we assess Acumeet for our audit workflow?',
      'Book a demo to discuss your audit meeting process, documentation requirements, and the product capabilities available for your organisation.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['fraudAml', 'projectGovernance', 'customerStrategy', 'sales']),

  cta: ucCta(
    'Keep Audit Actions Visible from Discussion to Follow-Up',
    'Give your team a clearer record of audit discussions, agreed next steps, and follow-up responsibilities. Explore how Acumeet can support your audit meeting workflow.',
  ),
};
