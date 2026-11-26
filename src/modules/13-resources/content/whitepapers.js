import { decisions } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import {
  exploreResources,
  knowTasks,
  listing,
  pricingSearch,
  RELATED,
  resBreadcrumb,
  resCta,
} from './resources';

const heroActions = knowTasks(4, ['Fri', 'Jun 8', 'May 13'], { width: 400, shadow: 'float' });

/** 13.05 · Whitepapers (Figma 49:138861). Downloads go to the contact form until files are published. */
export default {
  breadcrumb: resBreadcrumb('Whitepapers'),

  /** 01 · Hero (884): knowledge search (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Whitepapers',
    title: 'Go deeper than the',
    accent: 'headline',
    lead: 'In-depth thinking on enterprise AI, security, governance and organisational knowledge.',
    primary: { label: 'Explore whitepapers', to: '#whitepapers' },
    height: 884,
    copyHeight: 250,
    top: 392,
    gap: 46,
    items: [
      [
        230,
        456,
        pricingSearch(
          [
            ['Policy Handover', 'Jun 20'],
            ['Programme Retrospective', 'Apr 3'],
            ['Knowledge Sharing Session', 'May 12'],
          ],
          400,
          'float',
        ),
        6,
      ],
      [
        807,
        456,
        decisions(
          'May 28',
          ['Add decision summaries to the handbook', 'Review archived meetings yearly'],
          'Knowledge lost when owners change roles',
          ['Handover', 'Archive', 'Decisions', 'Lessons learned'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 392, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** 02 · Listing (49:138963). */
    listing(
      { id: 'whitepapers', chips: ['All', 'Enterprise AI', 'Security', 'Governance', 'Knowledge'] },
      [
        [
          'Whitepaper  |  18 pages',
          'Governing AI meeting records in financial services',
          ['Governance', 'Enterprise AI'],
        ],
        ['Whitepaper  |  12 pages', 'The hidden cost of undocumented decisions', ['Knowledge']],
        [
          'Whitepaper  |  16 pages',
          'Meeting data and Nigerian data protection reviews',
          ['Security', 'Governance'],
        ],
        [
          'Whitepaper  |  20 pages',
          'Designing retention policies for conversation data',
          ['Governance'],
        ],
        [
          'Whitepaper  |  14 pages',
          'Inference-only AI: what it means for your data',
          ['Enterprise AI', 'Security'],
        ],
        ['Whitepaper  |  10 pages', 'Turning meetings into institutional knowledge', ['Knowledge']],
      ],
      'Download whitepaper',
      ROUTES.contactSales,
    ),
  ],

  related: exploreResources(RELATED),
  cta: resCta('Go deeper than the headline'),
};
