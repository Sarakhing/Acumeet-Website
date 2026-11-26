import { decisions } from '@/components/visuals/mocks';
import {
  exploreResources,
  listing,
  pricingSearch,
  RELATED,
  resBreadcrumb,
  resCta,
  tasks,
} from './resources';

const TITLE = 'Practical guidance for better-run meetings';

/** 13.06 · Guides (Figma 49:138997). */
export default {
  breadcrumb: resBreadcrumb('Guides'),

  /** 01 · Hero + "Hero carousel · 13.06 · Guides" (49:80611). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Guides',
    title: TITLE,
    lead: 'Step-by-step resources for follow-up, accountability, security and knowledge capture.',
    primary: { label: 'Browse guides', to: '#guides' },
  },
  carousel: [
    {
      label: 'Search',
      content: pricingSearch(
        [
          ['Knowledge Sharing Session', 'Jun 27'],
          ['Leadership Offsite', 'Apr 10'],
          ['Policy Handover', 'May 19'],
        ],
        560,
      ),
    },
    {
      label: 'Action items',
      content: tasks(
        4,
        [
          ['link', 'Jun 14'],
          ['share', 'Jun 7'],
          ['archive', 'This week'],
        ],
        { width: 560, footer: false },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'Jun 9',
        ['Add decision summaries to the handbook', 'Review archived meetings yearly'],
        'Knowledge lost when owners change roles',
        ['Handover', 'Archive', 'Decisions', 'Lessons learned'],
        560,
      ),
    },
  ],

  sections: [
    /** 02 · Listing (49:139025). */
    listing(
      {
        id: 'guides',
        chips: ['All', 'Follow-up', 'Accountability', 'Security', 'Knowledge capture'],
        start: 3,
      },
      [
        [
          'Guide  |  8 min',
          'Run a credit committee that leaves a clear record',
          ['Accountability'],
        ],
        ['Guide  |  6 min', 'Set up retention policies for meeting data', ['Security']],
        [
          'Guide  |  5 min',
          'Give every action an owner and a due date',
          ['Follow-up', 'Accountability'],
        ],
        ['Guide  |  10 min', 'Prepare for a vendor security review', ['Security']],
        ['Guide  |  7 min', 'Roll out Acumeet to your first team', ['Knowledge capture']],
        [
          'Guide  |  4 min',
          'Write summaries leadership actually reads',
          ['Follow-up', 'Knowledge capture'],
        ],
      ],
      'Read guide',
    ),
  ],

  related: exploreResources(RELATED),
  cta: resCta(TITLE),
};
