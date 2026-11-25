import { exploreIndustries, industryCta } from './industries';
import { actions, capture, decisions, explorerItems, followSplit, fsBreadcrumb, search, summary } from './detail';

/** 04.04 · Executive Meetings (Figma 48:289384). */
export default {
  breadcrumb: fsBreadcrumb('Executive Meetings'),

  /** 01 · Hero (48:289387) — dark rings hero, no buttons, 867 tall. */
  hero: {
    variant: 'rings',
    eyebrow: 'Executive Meetings',
    title: 'Turn Executive Discussions Into Clear Priorities and Action',
    lead: 'Help leadership teams preserve strategic context, document decisions and follow through on priorities with Acumeet meeting intelligence.',
  },

  /** "✓ Hero carousel · 04.04 · Executive Meetings" (48:267853; slide 1 from the page instance). */
  carousel: [
    {
      label: 'Meetings',
      content: capture(
        'Mon, Jun 16',
        [
          ['Strategy Offsite Review', '3:30 PM · Teams'],
          ['Executive Committee Meeting', '10:30 AM · Zoom'],
          ['Board Meeting · Q3', '11:00 AM · Meet'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'May 28',
        ['Adopt the revised hiring plan', 'Set up a cost optimisation working group'],
        'Delayed delivery of the core banking upgrade',
        ['Strategy', 'Budget', 'Hiring', 'Expansion'],
        560,
      ),
    },
    {
      label: 'Summary',
      content: summary(
        'Board Meeting · Q3',
        [58, 89, 29],
        ['The committee approved the Q3 priorities with two changes.', 'Finance flagged budget pressure from currency movements.'],
        { width: 560 },
      ),
    },
  ],

  /** Tabs explorer (48:289397) + "✓ Explorer · " (48:267978; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Keep Leadership Aligned',
        body: 'Executive meetings cover business performance, priorities, resource decisions and cross-functional initiatives. Structured summaries help participants revisit the same decisions and agreed direction.',
        visual: summary('Management Meeting', [71, 66, 40], [
          'Finance flagged budget pressure from currency movements.',
          'Department heads will report progress at the next meeting.',
        ]),
      },
      {
        title: 'Record Decisions and Ownership',
        body: 'Capture key decisions and action items so responsibilities and next steps are easier to review after the meeting.',
        visual: actions(
          4,
          [
            ['Circulate the approved Q3 priorities to department heads', 'Fri'],
            ['Prepare the board pack for the next sitting', 'Next week'],
            ['Confirm owners for the cost optimisation plan', 'Jun 14'],
          ],
          { width: 400 },
        ),
      },
      {
        title: 'Connect Discussions Across Time',
        body: 'Retrieve meeting-derived knowledge to understand how priorities evolved and what was agreed in earlier discussions.',
        visual: search(
          'regional expansion decision',
          [
            ['Executive Committee Meeting', 'Jun 13', '…agreed to defer the regional expansion review to Q4.'],
            ['Board Meeting · Q3', 'Apr 22', '…board requested a revised cost plan.'],
            ['Management Meeting', 'May 5', '…priorities circulated to department heads.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Executive Workflows',
        body: 'Support leadership meetings, strategy reviews, operating reviews, planning sessions, business performance discussions and cross-functional steering meetings.',
        visual: capture('Tue, Jun 10', [
          ['Strategy Offsite Review', '11:00 AM · Zoom'],
          ['Executive Committee Meeting', '3:30 PM · Meet'],
          ['Board Meeting · Q3', '10:30 AM · Teams'],
        ]),
      },
    ]),
  },

  /** Split (48:289399). */
  split: followSplit(
    'Make Follow-Through Easier',
    'Use structured meeting outputs alongside your existing task and collaboration workflows to help teams keep initiatives moving.',
    actions(
      5,
      [
        ['Confirm owners for the cost optimisation plan', 'May 27'],
        ['Share the revised hiring plan with HR', 'Next week'],
        ['Schedule the follow-up on regional expansion', 'May 10'],
      ],
      { width: 440 },
    ),
  ),

  /** Explore more (48:289448). */
  related: exploreIndustries(['creditCommittees', 'riskCommittees', 'complianceMeetings', 'fraudInvestigations'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Turn Executive Discussions Into Clear Priorities and Action'),
};
