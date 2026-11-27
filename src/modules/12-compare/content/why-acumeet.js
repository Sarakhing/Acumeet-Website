import { access, capture, decisions, search } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { members, ninReview, taskList } from './shared';
import { COMPARE, cta, DEMO, explorer, lightHero, statement } from './compare';

const DIRECTORY = [
  'aiAssistants',
  'meetingNotes',
  'enterprisePlatforms',
  'fireflies',
  'otter',
  'teamsPremium',
  'overview',
];

/** 12.01 · Why Acumeet (Figma 49:115723). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Why Acumeet' }],

  /** 01 · Hero (560): centred copy over hairlines. */
  ...lightHero({
    height: 560,
    eyebrow: 'Why Acumeet',
    title: 'Your meetings already hold the intelligence.',
    accent: 'Keep it.',
    lead: 'Acumeet turns business conversations into structured, searchable records so decisions, actions and context do not disappear when the call ends.',
    primary: DEMO,
    secondary: { label: 'Request a PoC', to: ROUTES.enterprisePage.requestPoc },
  }),

  sections: [
    statement(
      'A meeting should create more than',
      'a transcript',
      'Important meetings hold decisions, commitments and sensitive information. When they live in notes, files and memory, teams lose visibility once the call is over.',
    ),
    statement(
      'When context disappears, accountability goes',
      'with it',
      'Leaders cannot reconstruct what was agreed. Follow-ups slip. Risk and compliance teams piece records together by hand.',
      'dark',
    ),

    /** Tabs explorer + "Explorer · Built for what happens after the meeting" (49:74637). */
    explorer({ title: 'Built for what happens after', accent: 'the meeting', titleSize: 48 }, [
      [
        'Capture',
        'Speaker-labelled transcripts and summaries across Microsoft Teams, Zoom and Google Meet.',
        capture(
          'Fri, May 5',
          [
            ['Monthly Marketing Strategy Review', '10:30 AM · Meet'],
            ['Product Development Sync-Up', '11:00 AM · Teams'],
            ['Client Feedback Analysis Session', '3:30 PM · Zoom'],
          ],
          { width: 480 },
        ),
      ],
      [
        'Decide',
        'Key discussions, decisions and outcomes, easy to find later.',
        decisions(
          'May 28',
          ['Revisit the vendor approval cycle', 'Pilot automated PO generation'],
          'Sync lag during peak transaction periods',
          ['Supplier contracts', 'KPIs', 'PO automation', 'Savings'],
          420,
        ),
      ],
      [
        'Act',
        'Action items with owners and status, tracked after the call.',
        taskList(
          5,
          [
            ['Confirm supplier onboarding checklist owners', 'Jun 14'],
            ['Draft the Q3 vendor scorecard', 'Jun 7'],
            ['Share feedback on the vendor approval cycle draft', 'This week'],
          ],
          { width: 400 },
        ),
      ],
      ['Protect', 'Redaction AI and enterprise controls for sensitive meetings.', ninReview(6)],
      [
        'Remember',
        'A searchable repository, plus Atlas to find context across past meetings.',
        search(
          'vendor approval workflow',
          [
            [
              'Monthly Marketing Strategy Review',
              'Apr 26',
              '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            ],
            [
              'Product Development Sync-Up',
              'May 9',
              '…approval workflow dependencies raised for Q3 planning.',
            ],
            [
              'Client Feedback Analysis Session',
              'Jun 18',
              '…agreed to revisit the approval cycle after the pilot.',
            ],
          ],
          { width: 480 },
        ),
      ],
    ]),

    /** Split · Control stays with your organisation (49:115847). */
    {
      type: 'split',
      size: 'standard',
      reverse: true,
      title: 'Control stays with your organisation',
      body: [
        'Role-based access, SSO and audit logs give you oversight. Eligible enterprise plans add customer-controlled storage and keys and data residency options.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: access(members, { width: 380 }),
      },
    },

    statement(
      'Make every critical meeting easier to trace, search',
      'and act on',
      'Executives get visibility, business teams get follow-through, IT gets control and risk teams get a reliable record.',
    ),

    /** Directory · COMPARE (49:115894). */
    {
      type: 'directory',
      eyebrow: 'Compare',
      title: 'Explore competitor',
      items: DIRECTORY.map((k) => ({
        title: COMPARE[k].title,
        description: COMPARE[k].tagline,
        to: COMPARE[k].to,
      })),
    },
  ],

  cta: cta(
    'Turn meetings into organisational intelligence',
    'See how Acumeet fits your meeting, security and knowledge requirements.',
  ),
};
