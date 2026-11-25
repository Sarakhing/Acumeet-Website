import { ROUTES } from '@/constants/routes';
import { access, actions, capture, decisions, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, ucBreadcrumb, ucCta } from './use-cases';
import { challenge, explorer, faq, outcomes, ringsHero, workflows } from './detail';

/** 05.11 · Product Teams (Figma 48:307638). */
export default {
  breadcrumb: ucBreadcrumb('Product Teams'),

  /** 01 · Hero + "Hero carousel · 05.11 · Product Teams" (48:314195). */
  ...ringsHero({
    eyebrow: 'Product Teams',
    title: 'Turn Product Discussions into Decisions Teams Can Build On',
    lead: 'Product teams make decisions across discovery interviews, roadmap reviews, prioritisation sessions, sprint ceremonies, and customer feedback meetings. Acumeet helps capture those conversations, summarise key points, and document decisions and follow-up actions—making it easier to preserve context from discovery through delivery.',
    secondary: { label: 'Explore Meeting Intelligence', to: ROUTES.product.meetingIntelligence },
    slides: [
      [
        'Access',
        access(
          [
            ['George Nwokoro', 'Owner'],
            ['Ruth Godwin', 'Admin'],
            ['Warith Abraham', 'Member'],
            ['Faith Oluwale', 'Viewer'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Meetings',
        capture(
          'Fri, May 11',
          [
            ['Roadmap Review', '4:00 PM · Zoom'],
            ['Discovery Interview', '9:00 AM · Meet'],
            ['Sprint Planning', '2:00 PM · Teams'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Decisions',
        decisions(
          'Jun 9',
          ['Ship search filters behind a flag', 'Move bulk export to the next sprint'],
          'Dependency on the billing API',
          ['Discovery', 'Onboarding', 'Search', 'Pricing feedback'],
          560,
        ),
      ],
    ],
  }),

  /** Split. */
  challenge: challenge(
    'The Challenge: Product Context Is Spread Across Conversations',
    [
      'Product decisions often depend on input from customers, design, engineering, sales, support, and leadership. When the reasoning behind a feature request, prioritisation choice, or scope decision is difficult to find later, teams may repeat discussions or lose sight of the context behind their plans.',
      'Customer feedback and discovery insights are scattered across interviews and internal discussions.',
      'The rationale behind prioritisation and roadmap decisions may not be easy to retrieve.',
      'Requirements, dependencies, and open questions can become fragmented between meetings.',
    ],
    access([
      ['Ruth Godwin', 'Admin'],
      ['Warith Abraham', 'Owner'],
      ['Faith Oluwale', 'Viewer'],
      ['George Nwokoro', 'Member'],
    ]),
  ),

  /** Tabs explorer + "Explorer · How Acumeet Helps Product Teams" (48:314321) — 5 tabs. */
  explorer: explorer('How Acumeet Helps Product', 'Teams', [
    [
      'Capture discovery and research discussions',
      'Keep meeting records that help teams revisit customer needs, pain points, questions, and feedback raised during research and discovery.',
      capture('Mon, Jun 18', [
        ['Sprint Planning', '2:00 PM · Meet'],
        ['Design Review', '4:00 PM · Teams'],
        ['Roadmap Review', '9:00 AM · Zoom'],
      ]),
    ],
    [
      'Summarise product decisions',
      'Make the main outcomes of roadmap reviews, prioritisation sessions, and product planning meetings easier to review.',
      summary('Design Review', [63, 79, 19], [
        'The team agreed to test two onboarding flows.',
        'Customers asked for bulk export in three interviews.',
      ]),
    ],
    [
      'Document requirements and follow-up',
      'Help teams identify requirements, open questions, action owners, and next steps discussed during meetings.',
      actions(
        5,
        [
          ['Schedule usability tests for onboarding', 'Next week'],
          ['Share interview findings with design', 'Jun 14'],
          ['Update the roadmap after the pricing feedback', 'Jun 7'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Preserve decision context',
      'Use available meeting-derived knowledge to revisit the reasoning and discussion around earlier product choices.',
      decisions(
        'Jun 4',
        ['Drop the legacy dashboard', 'Test two onboarding flows'],
        'Dependency on the billing API',
        ['Releases', 'Roadmap', 'Discovery', 'Onboarding'],
      ),
    ],
    [
      'Support cross-functional alignment',
      'Give product, design, engineering, sales, and customer-facing teams a clearer reference for meeting outcomes and responsibilities.',
      search('bulk export customer feedback', [
        ['Roadmap Review', 'Apr 13', '…three customers asked for bulk export.'],
        ['Discovery Interview', 'May 22', '…moved to the next sprint.'],
        ['Sprint Planning', 'Jun 5', '…dependency on the billing API flagged.'],
      ]),
    ],
  ]),

  /** Benefits — six cards. */
  workflows: workflows('Key Product Team', 'Workflows', [
    [
      'Product discovery',
      'Capture discussions about customer problems, use cases, assumptions, and questions requiring further validation.',
    ],
    [
      'Roadmap planning and prioritisation',
      'Summarise options discussed, dependencies, trade-offs, and the decisions or follow-up that emerged from planning sessions.',
    ],
    [
      'Sprint planning and reviews',
      "Document meeting outcomes, blockers, decisions, and assigned next steps without replacing the team's delivery management system.",
    ],
    [
      'Customer feedback and feature requests',
      "Preserve feedback discussed by product and customer-facing teams so it can be reviewed and assessed through the team's established process.",
    ],
    [
      'Requirements and scope alignment',
      'Capture questions, dependencies, and agreements that help teams align before work proceeds.',
    ],
    ['Product retrospectives', 'Keep a record of lessons raised, improvement ideas, and actions agreed for subsequent cycles.'],
  ]),

  /** Split. */
  outcomes: outcomes(
    'Business Outcomes',
    [
      'Clearer documentation of product decisions and their meeting context.',
      'Less time spent searching for earlier feedback and discussion notes.',
      'Improved alignment between product, design, engineering, and customer-facing teams.',
      'More visible ownership of follow-up questions and actions.',
    ],
    search(
      'bulk export customer feedback',
      [
        ['Sprint Planning', 'Jun 26', '…three customers asked for bulk export.'],
        ['Design Review', 'Apr 9', '…moved to the next sprint.'],
        ['Roadmap Review', 'May 18', '…dependency on the billing API flagged.'],
      ],
      { width: 440 },
    ),
  ),

  /** FAQ. */
  faq: faq([
    [
      'Can Acumeet replace our product management tool?',
      'Acumeet supports meeting capture, summaries, and access to meeting-derived context.',
    ],
    [
      'Can Acumeet help document product decisions?',
      'Meeting records and summaries can help teams revisit decisions and the context discussed during planning, prioritisation, and review meetings.',
    ],
    [
      'Can product teams use Acumeet during discovery interviews?',
      'Teams can use supported meeting capture and summary workflows to preserve discussion context, subject to meeting setup, participant consent, and organisational policies.',
    ],
    [
      'Can teams connect meeting outcomes to delivery tools?',
      'Workflow connections depend on the integrations currently supported and configured for the organisation.',
    ],
  ]),

  /** Explore more. */
  related: exploreUseCases(['overview', 'executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees']),

  cta: ucCta(
    'Keep Product Decisions Connected to Their Context',
    'Help your team preserve discovery insights, document decisions, and make follow-up responsibilities easier to find. Explore how Acumeet can support your product meeting workflows.',
  ),
};
