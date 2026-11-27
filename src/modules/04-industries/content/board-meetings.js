import { exploreIndustries, industryCta } from './industries';
import { actions, capture, decisions, explorerItems, fsBreadcrumb, heroCanvas, NOTE_CTAS, search, summary } from './detail';

const heroCapture = () =>
  capture(
    'Thu, May 5',
    [
      ['Strategy Offsite Review', '3:30 PM · Teams'],
      ['Executive Committee Meeting', '10:30 AM · Zoom'],
      ['Board Meeting · Q3', '11:00 AM · Meet'],
    ],
    { width: 480 },
  );

/** 04.09 · Board Meetings (Figma 48:289960). */
export default {
  breadcrumb: fsBreadcrumb('Board meetings'),

  /** 01 · Hero (48:289963) — centred light wash, 832 tall; canvas origin 1440-frame (80, 403). */
  hero: {
    variant: 'centered',
    eyebrow: 'Board meetings',
    title: 'Preserve board decisions and support follow-through',
    lead: 'Acumeet helps boards and company secretariats organise meeting discussions, capture decisions and track agreed actions across governance workflows.',
    visual: heroCanvas(
      409,
      [
        [400, 0, heroCapture()],
        [
          30,
          80,
          decisions(
            'May 30',
            ['Set up a cost optimisation working group', 'Approve the Q3 operating priorities'],
            'Budget pressure from currency movements',
            ['Expansion', 'Board pack', 'Priorities', 'Strategy'],
            380,
          ),
        ],
        [
          870,
          96,
          actions(
            3,
            [
              ['Confirm owners for the cost optimisation plan', 'Jun 24'],
              ['Share the revised hiring plan with HR', 'Next week'],
              ['Schedule the follow-up on regional expansion', 'Jun 7'],
            ],
            { width: 380, shadow: 'float' },
          ),
        ],
      ],
      1280,
    ),
    visualWidth: 1280,
    visualCompact: heroCapture(),
    visualCompactWidth: 480,
  },

  /** Tabs explorer (48:291103) + "✓ Explorer · " (48:269571; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Document strategic discussions',
        body: 'Create structured summaries that help authorised stakeholders revisit key topics and decisions from board discussions.',
        visual: summary('Executive Committee Meeting', [52, 80, 42], [
          'The committee approved the Q3 priorities with two changes.',
          'Finance flagged budget pressure from currency movements.',
        ]),
      },
      {
        title: 'Track resolutions and actions',
        body: 'Capture agreed actions and responsibilities to support follow-up between board and committee meetings.',
        visual: actions(
          3,
          [
            ['Confirm owners for the cost optimisation plan', 'Today'],
            ['Share the revised hiring plan with HR', 'Jun 12'],
            ['Schedule the follow-up on regional expansion', 'Fri'],
          ],
          { width: 400 },
        ),
      },
      {
        title: 'Maintain governance context',
        body: 'Retain meeting-derived knowledge so prior discussions and decisions are easier to retrieve when relevant matters return to the agenda.',
        visual: search(
          'regional expansion decision',
          [
            ['Management Meeting', 'Jun 13', '…agreed to defer the regional expansion review to Q4.'],
            ['Strategy Offsite Review', 'Apr 22', '…board requested a revised cost plan.'],
            ['Executive Committee Meeting', 'May 5', '…priorities circulated to department heads.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Board meeting workflows',
        body: 'Support board strategy sessions, committee updates, governance discussions, business performance reviews and action follow-ups.',
        visual: capture('Thu, Jun 16', [
          ['Board Meeting · Q3', '3:30 PM · Teams'],
          ['Management Meeting', '10:30 AM · Zoom'],
          ['Strategy Offsite Review', '11:00 AM · Meet'],
        ]),
      },
    ]),
  },

  /** 06 · Align With Formal Board Processes (48:291105). */
  note: {
    title: 'Align with formal board processes',
    body: 'Acumeet-generated summaries should be reviewed and approved through the organisation’s established processes.',
    ctas: NOTE_CTAS,
  },

  /** Explore more (48:291114). */
  related: exploreIndustries(['auditMeetings', 'amlReviews', 'customerStrategy', 'telecommunications'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Preserve Board Decisions and Support Follow-Through'),
};
