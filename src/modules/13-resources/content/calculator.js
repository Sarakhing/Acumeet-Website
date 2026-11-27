import { analytics, capture, decisions } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { DEMO, exploreResources, RELATED, resBreadcrumb, resCta, talkTime } from './resources';

const heroAnalytics = analytics('Last 30 days', [68, 50, 73], { width: 400, shadow: 'float' });

/** 13.11 · Meeting Productivity Calculator (Figma 49:139942). */
export default {
  breadcrumb: resBreadcrumb('Meeting productivity calculator'),

  /** 01 · Hero (829): talk time and decisions (−6°) behind meeting analytics. */
  ...centeredHero({
    eyebrow: 'Meeting productivity calculator',
    title: 'What are your meetings really',
    accent: 'costing you?',
    lead: 'Estimate the time and productivity lost to manual notes and unclear follow-up.',
    primary: { label: 'Calculate meeting productivity', to: '#calculator' },
    secondary: DEMO,
    height: 829,
    copyHeight: 288,
    top: 454,
    gap: 70,
    items: [
      [220, 472, talkTime([25, 25, 20, 15, 15], 420, 'float')],
      [
        807,
        494,
        decisions(
          'May 26',
          ['Tag all committee meetings by topic', 'Keep retrospectives in one folder'],
          'Knowledge lost when owners change roles',
          ['Handover', 'Archive', 'Decisions', 'Lessons learned'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 454, heroAnalytics],
    ],
    compact: heroAnalytics,
  }),

  sections: [
    /** Index · 61 hrs (49:140060) + the two cost Splits (49:140097, 49:140143). */
    {
      type: 'calculator',
      id: 'calculator',
      fields: {
        meetings: { label: 'Meetings per week', value: 24, min: 1, max: 60 },
        minutes: {
          label: 'Time on notes and follow-up per meeting',
          value: 35,
          min: 5,
          max: 120,
          step: 5,
        },
        rate: {
          label: 'Average hourly cost of the note-taker',
          value: 45,
          min: 10,
          max: 200,
          step: 5,
        },
      },
      results: [
        {
          label: 'Estimated cost each month',
          tint: 'pink',
          pattern: { type: 'rings', size: 'panel' },
          visual: capture('Mon, Jun 8', [
            ['Knowledge Sharing Session', '9:00 AM · Teams'],
            ['Leadership Offsite', '2:00 PM · Zoom'],
            ['Programme Retrospective', '4:00 PM · Meet'],
          ]),
        },
        {
          label: 'Estimated cost each year',
          tint: 'blue',
          pattern: { type: 'dots', size: 'explorer' },
          visual: analytics('Last 7 days', [82, 32, 54]),
        },
      ],
    },
  ],

  related: exploreResources(RELATED),
  cta: resCta('What are your meetings really costing you?'),
};
