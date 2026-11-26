import { audit, decisions } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { link, listing, pricingSearch, resBreadcrumb, resCta } from './resources';

const TITLE = 'Ideas for better meetings and better decisions';
const heroAudit = audit(
  [
    ['10:05', 'Signed in via SSO', 'Ruth Godwin'],
    ['09:43', 'Applied legal hold', 'Admin'],
    ['09:31', 'Edited action item', 'George Nwokoro'],
    ['09:12', 'Approved redactions', 'Faith Oluwale'],
  ],
  { width: 400, shadow: 'float' },
);

/** 13.02 · Blog (Figma 49:138510). No related row in Figma. */
export default {
  breadcrumb: resBreadcrumb('Blog'),

  /** 01 · Hero (922): knowledge search (+6°) and decisions (−6°) tilted behind the audit log. */
  ...centeredHero({
    eyebrow: 'Blog',
    title: 'Ideas for better meetings and',
    accent: 'better decisions',
    lead: 'Perspectives on enterprise AI, meeting intelligence, security and compliance.',
    primary: link('Read latest articles', '#articles'),
    secondary: link('Browse categories', ROUTES.resourcesPage.blogCategories),
    height: 922,
    copyHeight: 288,
    top: 454,
    gap: 70,
    items: [
      [
        230,
        494,
        pricingSearch(
          [
            ['Programme Retrospective', 'Jun 27'],
            ['Knowledge Sharing Session', 'Apr 10'],
            ['Leadership Offsite', 'May 19'],
          ],
          400,
          'float',
        ),
        6,
      ],
      [
        807,
        494,
        decisions(
          'Jun 4',
          ['Review archived meetings yearly', 'Tag all committee meetings by topic'],
          'Duplicate notes across teams',
          ['Lessons learned', 'Policies', 'Onboarding', 'Handover'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 454, heroAudit],
    ],
    compact: heroAudit,
  }),

  sections: [
    /** 02 · Listing (49:138604). */
    listing(
      {
        id: 'articles',
        chips: [
          'All',
          'Product',
          'AI',
          'Meeting Intelligence',
          'Security',
          'Compliance',
          'Enterprise Technology',
          'Industry Insights',
        ],
        more: 'Load more articles',
      },
      [
        [
          '6 min read  |  George Okoro',
          'What a credit committee record should capture',
          ['Meeting Intelligence', 'Industry Insights'],
        ],
        [
          '5 min read  |  Rachel Falade',
          'Redaction before storage: why timing matters',
          ['Security', 'Product'],
        ],
        [
          '4 min read  |  Sarah King',
          'Five signs your meeting actions are going missing',
          ['Meeting Intelligence'],
        ],
        [
          '7 min read  |  Ogonna Williams',
          'Responsible AI in regulated meetings',
          ['AI', 'Compliance'],
        ],
        [
          '5 min read  |  Faith Adeola',
          'From transcript to decision log',
          ['Product', 'Meeting Intelligence'],
        ],
        [
          '8 min read  |  George Okoro',
          'Data residency questions to ask any AI vendor',
          ['Security', 'Enterprise Technology'],
        ],
      ],
      'Read more',
    ),
  ],

  cta: resCta(TITLE),
};
