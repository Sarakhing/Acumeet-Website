import { ROUTES } from '@/constants/routes';
import { actions, audit, capture, decisions, search, summary } from '@/components/visuals/mocks';
import { exploreUseCases, USE_CASE_KEYS, USE_CASES } from './use-cases';
import { centeredHero, explorer, faq } from './detail';

const GRID_ID = 'choose-your-use-case';

const heroDecisions = (width) =>
  decisions(
    'May 26',
    ['Move go-live by one week', 'Add a data migration workstream'],
    'Vendor dependency on the integration API',
    ['UAT', 'Milestones', 'RAID log', 'Change requests'],
    width,
    { shadow: 'float' },
  );

/** 05.00 · Use Cases Overview (Figma 48:308252). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Use cases overview' }],

  /** 01 · Hero (48:308255) — 988 tall: action items + decisions + knowledge search over the hatch. */
  ...centeredHero({
    eyebrow: 'Acumeet',
    title: 'Every meeting has a purpose. Make',
    accent: 'every outcome count.',
    lead: 'Important decisions, customer commitments, project updates, and operational priorities often emerge in meetings. But when notes are scattered and follow-ups are manual, important context can be lost. Acumeet helps your team turn conversations into clear summaries, documented decisions, trackable actions, and searchable knowledge.',
    secondary: { label: 'Explore use cases', to: `#${GRID_ID}` },
    height: 988,
    copyHeight: 394,
    top: 556,
    gap: 66,
    items: [
      [483, 556, heroDecisions(480)],
      [
        157,
        612,
        actions(
          5,
          [
            ['Share the change request with the sponsor', 'Fri'],
            ['Re-baseline the migration plan', 'May 5'],
            ['Book the user acceptance testing window', 'Jun 10'],
          ],
          { width: 380, shadow: 'float' },
        ),
      ],
      [
        903,
        636,
        search(
          'go-live date change',
          [
            ['Delivery Review', 'Jun 19', '…go-live moved by one week.'],
            ['Project Stand-up', 'Apr 28', '…change request CR-14 approved.'],
            ['Stakeholder Update', 'May 11', '…migration dependency logged in the RAID log.'],
          ],
          { width: 380, shadow: 'float' },
        ),
      ],
    ],
    compact: heroDecisions(400), // phones: the 440 compact slot
  }),

  /** 02 · Choose Your Use Case (48:308359). The hidden "Index · Choose Your Use Case" (48:308429) is not built. */
  grid: {
    id: GRID_ID,
    title: 'Choose your use',
    accent: 'case',
    lead: 'Different teams meet for different reasons. Explore how Acumeet can support the conversations, decisions, and follow-through that matter to your organisation.',
    items: USE_CASE_KEYS.map((k) => ({ title: USE_CASES[k].title, description: USE_CASES[k].blurb, to: USE_CASES[k].to })),
  },

  /** Tabs explorer (48:308594) + "✓ Explorer · From Conversation to Action" (48:308740). */
  explorer: explorer('From Conversation to', 'Action', [
    [
      'Capture the discussion',
      'Create a usable record of meeting conversations and the context shared.',
      capture('Thu, Jun 24', [
        ['Stakeholder Update', '11:00 AM · Zoom'],
        ['Steering Committee', '3:30 PM · Meet'],
        ['Delivery Review', '10:30 AM · Teams'],
      ]),
    ],
    [
      'Understand the key points',
      'Generate meeting summaries that help participants review important topics.',
      summary('Project Stand-up', [83, 84, 44], [
        'Data migration is running a week behind plan.',
        'Go-live moved by one week to protect UAT.',
      ]),
    ],
    [
      'Document decisions and actions',
      'Make decisions, responsibilities, and next steps easier to identify.',
      actions(
        4,
        [
          ['Book the user acceptance testing window', 'This week'],
          ['Update the RAID log with new dependencies', 'Jun 9'],
          ['Confirm the revised go-live date', 'Today'],
        ],
        { width: 400 },
      ),
    ],
    [
      'Keep knowledge accessible',
      'Build a searchable record that helps teams return to previous discussions and decisions.',
      search('go-live date change', [
        ['Steering Committee', 'Jun 3', '…go-live moved by one week.'],
        ['Delivery Review', 'Apr 12', '…change request CR-14 approved.'],
        ['Project Stand-up', 'May 21', '…migration dependency logged in the RAID log.'],
      ]),
    ],
  ]),

  /** 04 · Connect Meeting Outcomes to Everyday Work (48:308598) — mint panel with centred 30px-pitch rings. */
  connect: {
    size: 'standard',
    title: 'Connect meeting outcomes to everyday work',
    body: [
      'Meetings should support the work that happens afterwards. Acumeet helps teams organise outcomes and follow-ups so that responsibilities are clearer and discussions can translate into practical next steps. Where supported, integrations can help connect meeting outcomes with the tools teams already use.',
    ],
    cta: { label: 'Explore Acumeet integrations', to: ROUTES.integrations, intent: 'secondary' },
    panel: actions(
      4,
      [
        ['Book the user acceptance testing window', 'May 7'],
        ['Update the RAID log with new dependencies', 'Jun 12'],
        ['Confirm the revised go-live date', 'Fri'],
      ],
      { width: 440 },
    ),
  },

  /** 05 · Build Continuity Across Your Organisation (48:308653). */
  continuity: {
    tone: 'subtle',
    title: 'Build continuity across your organisation',
    paragraphs: [
      'When meeting records are difficult to find, teams can lose valuable context and repeat discussions. Acumeet helps preserve meeting-derived knowledge so people can revisit previous conversations, understand what was decided, and maintain continuity as projects and responsibilities evolve.',
    ],
    cta: { label: 'Explore Enterprise Meeting Intelligence', to: ROUTES.solutions.emi },
  },

  /** Split (48:308661) — blue dot-grid panel. */
  security: {
    size: 'standard',
    title: 'Designed for Business-Critical Conversations',
    body: [
      "Many meetings involve confidential information, important decisions, or regulated business processes. Acumeet's enterprise positioning emphasises responsible access, governance, and secure handling of meeting information.",
    ],
    cta: { label: 'Explore security and governance', to: ROUTES.security },
    visual: {
      tint: 'blue',
      pattern: { type: 'dots', size: 'explorer' },
      content: audit([
        ['10:31', 'Signed in via SSO', 'Ruth Godwin'],
        ['10:17', 'Applied legal hold', 'Admin'],
        ['09:56', 'Edited action item', 'George Nwokoro'],
        ['09:45', 'Approved redactions', 'Faith Oluwale'],
      ]),
    },
  },

  /** Directory · USE CASES (48:308696). */
  directory: {
    eyebrow: 'Use cases',
    title: 'Explore use cases',
    items: USE_CASE_KEYS.map((k) => ({ title: USE_CASES[k].title, description: USE_CASES[k].tagline, to: USE_CASES[k].to })),
  },

  /** FAQ (48:308714). */
  faq: faq([
    [
      'What can Acumeet help teams do after meetings?',
      'Acumeet can help teams review meeting summaries, identify documented decisions and action items, and return to meeting-derived knowledge.',
    ],
    [
      'Can Acumeet support different departments?',
      'Yes. The use cases on this page show how meeting intelligence can support leadership, risk, audit, project delivery, sales, customer success, operations, product teams, and knowledge management.',
    ],
    [
      'Does Acumeet replace professional judgement or formal approval processes?',
      'No. Acumeet supports meeting documentation and follow-through. Decisions, approvals, investigations, and regulatory determinations remain with the authorised people and processes in your organisation.',
    ],
    ['Can Acumeet connect with our existing tools?', 'Acumeet is designed to connect meeting outcomes with business workflows.'],
    [
      'How can we see whether Acumeet fits our workflow?',
      'Book a demo to discuss your meeting processes, documentation needs, and the capabilities relevant to your team.',
    ],
  ]),

  /** Explore more (48:308726) — 580 tall, overline hidden. */
  related: exploreUseCases(['executiveBoardMeetings', 'riskCompliance', 'creditInvestmentCommittees', 'audit'], {
    eyebrow: null,
  }),

  cta: {
    title: 'Make every meeting more valuable',
    lead: 'Give your team a clearer way to capture discussions, preserve decisions, track follow-ups, and retain knowledge. Discover how Acumeet can support the meetings that move your organisation forward.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
