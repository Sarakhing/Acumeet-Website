import { decisions } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import {
  exploreResources,
  knowSummary,
  knowTasks,
  listing,
  RELATED,
  resBreadcrumb,
  resCta,
} from './resources';

const heroActions = knowTasks(4, ['Jun 12', 'Next week', 'Jun 22'], {
  width: 400,
  shadow: 'float',
});

/** 13.08 · Webinars (Figma 49:139175). Register / watch go to the contact form until sessions are live. */
export default {
  breadcrumb: resBreadcrumb('Webinars'),

  /** 01 · Hero (884): summary (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Webinars',
    title: 'Big questions. Practical',
    accent: 'conversations.',
    lead: 'Watch sessions on enterprise AI, secure meeting intelligence and governance.',
    primary: { label: 'Watch webinars', to: '#webinars' },
    secondary: { label: 'View upcoming sessions', to: '#webinars' },
    height: 884,
    copyHeight: 288,
    top: 430,
    gap: 46,
    items: [
      [
        230,
        494,
        knowSummary('Leadership Offsite', [56, 81, 45], ['onboarding', 'handbook'], 400, 'float'),
        6,
      ],
      [
        807,
        494,
        decisions(
          'Jun 6',
          ['Keep retrospectives in one folder', 'Add decision summaries to the handbook'],
          'Duplicate notes across teams',
          ['Lessons learned', 'Policies', 'Onboarding', 'Handover'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 430, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** 02 · Listing (49:139286): a featured upcoming session, then six cards. */
    listing(
      {
        id: 'webinars',
        chips: ['All', 'Upcoming', 'On demand'],
        start: 2,
        featured: {
          meta: 'Upcoming  ·  14 Oct 2026, 11:00 WAT',
          title: 'Governing AI meeting records in regulated teams',
          byline: 'With Rachel Falade and George Okoro',
          cover: 'record',
          link: 'Register',
          to: ROUTES.contactSales,
          tags: ['Upcoming'],
        },
      },
      [
        ['On demand  |  42 min', 'Responsible AI for board and committee meetings', ['On demand']],
        ['On demand  |  36 min', 'What auditors want from meeting records', ['On demand']],
        ['Upcoming  |  28 Oct 2026', 'Redaction AI in practice', ['Upcoming']],
        ['On demand  |  45 min', 'Rolling out meeting intelligence across a bank', ['On demand']],
        ['On demand  |  30 min', 'Atlas: asking better questions of past meetings', ['On demand']],
        [
          'Upcoming  |  11 Nov 2026',
          'Data residency and customer-controlled storage',
          ['Upcoming'],
        ],
      ],
      'Watch webinar',
      ROUTES.contactSales,
    ),
  ],

  related: exploreResources(RELATED),
  cta: resCta('Big questions. Practical conversations.'),
};
