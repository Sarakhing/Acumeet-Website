import { createElement as h } from 'react';
import KeysStorageCard from '@/modules/02-solutions/components/visuals/KeysStorageCard';
import { exploreIndustries, industryCtaFull } from './industries';
import { actions, decisions, heroCanvas, industryBreadcrumb } from './detail';

/** 04.15 · Enterprise (Figma 48:294092). */
export default {
  breadcrumb: industryBreadcrumb('Enterprise'),

  /** 01 · Hero (48:294095) — 654 wash with hairlines, overview composition, no buttons. */
  hero: {
    eyebrow: 'Enterprise',
    eyebrowStyle: 'chip',
    pattern: 'hairlines',
    title: 'Connect enterprise conversations to decisions and delivery',
    titleSize: 54,
    copyWidth: 580,
    copyTop: 56,
    leadWidth: 540,
    lead: 'Large organisations make decisions across leadership teams, business units, projects and operational functions. Acumeet helps turn meeting discussions into structured summaries, documented decisions, trackable actions and searchable organisational knowledge.',
    visual: heroCanvas(
      526,
      [
        [
          140,
          46,
          decisions(
            'Jun 4',
            ['Defer the regional expansion review to Q4', 'Adopt the revised hiring plan'],
            'Budget pressure from currency movements',
            ['Expansion', 'Board pack', 'Priorities', 'Strategy'],
            440,
          ),
        ],
        [
          260,
          186,
          actions(
            3,
            [
              ['Confirm owners for the cost optimisation plan', 'Jun 15'],
              ['Share the revised hiring plan with HR', 'Next week'],
              ['Schedule the follow-up on regional expansion', 'Jun 25'],
            ],
            { width: 400, shadow: 'float' },
          ),
        ],
      ],
      680,
    ),
    visualWidth: 680,
    padBottom: 64,
  },

  sections: [
    /** 02 · Improve Continuity Across Teams (48:294259). */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Improve continuity across teams',
      body: [
        'Give teams a more consistent way to retain meeting context as initiatives move between departments, project groups and leadership.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: actions(
          5,
          [
            ['Schedule the follow-up on regional expansion', 'Next week'],
            ['Circulate the approved Q3 priorities to department heads', 'Jun 27'],
            ['Prepare the board pack for the next sitting', 'Fri'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 03 · Make Decisions Easier to Revisit (48:294312). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Make decisions easier to revisit',
      paragraphs: [
        'Capture key decisions and the reasoning discussed in meetings so teams can find relevant context when priorities or plans are reviewed.',
      ],
    },
    /** 04 · Turn Meetings Into Follow-Through (48:294318) — dark split, waveform panel. */
    {
      type: 'split',
      size: 'compact',
      tone: 'dark',
      reverse: true,
      title: 'Turn Meetings Into Follow-Through',
      body: [
        'Record action items and responsibilities to support accountability after planning sessions, project reviews and operating meetings.',
      ],
      visual: {
        tint: 'night',
        pattern: { type: 'waveform', size: 'panel' },
        content: actions(
          4,
          [
            ['Prepare the board pack for the next sitting', 'Jun 2'],
            ['Confirm owners for the cost optimisation plan', 'Fri'],
            ['Share the revised hiring plan with HR', 'Jun 12'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 05 · Build Searchable Meeting Knowledge (48:294361). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Build searchable meeting knowledge',
      paragraphs: [
        'Help people retrieve meeting-derived information instead of relying solely on individual notes, inboxes or memory.',
      ],
    },
    /** 06 · Fit Into Existing Workflows (48:294367). */
    {
      type: 'editorial',
      tone: 'white',
      title: 'Fit into existing workflows',
      paragraphs: [
        'Where supported integrations are available, connect meeting outputs to the tools teams already use.',
      ],
    },
    /** 07 · Workflows this page can speak to (48:294373). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Workflows this page can speak to',
      paragraphs: [
        'Executive and leadership meetings',
        'Cross-functional planning and operating reviews',
        'Project steering committees and programme reviews',
        'Sales, customer and partner meetings',
        'Product and engineering planning',
      ],
    },
    /** 08 · Security and responsible use (48:294383) — keys & storage on a pink waveform panel. */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Security and responsible use',
      body: [
        'Enterprise deployments should be assessed against the organisation’s access control, identity, data retention, storage, integration and governance requirements.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'waveform', size: 'panel' },
        content: h(KeysStorageCard, { width: 440, actions: ['Manage', 'Connected'] }),
      },
    },
  ],

  /** Explore more (48:294421) — overline hidden. */
  related: exploreIndustries(['otherRegulated', 'overview', 'financialServices', 'banking']),

  cta: industryCtaFull('Connect Enterprise Conversations to Decisions and Delivery'),
};
