import { windowHero } from '@/components/blocks/heroPresets';
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

/** 13.07 · Reports (Figma 49:139059). "View report" goes to the contact form until files are published. */
export default {
  breadcrumb: resBreadcrumb('Reports'),

  /** 01 · Hero (736): knowledge search in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Reports',
    title: 'Research for smarter enterprise',
    accent: 'decisions',
    lead: 'Research and analysis on meetings, enterprise AI and governance.',
    primary: { label: 'View reports', to: '#reports' },
    window: pricingSearch([
      ['Knowledge Sharing Session', 'Jun 24'],
      ['Leadership Offsite', 'Apr 7'],
      ['Policy Handover', 'May 16'],
    ]),
    overlay: knowTasks(5, ['May 18', 'Jun 23', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 383,
    height: 736,
  }),

  sections: [
    /** 02 · Listing (49:139143). */
    listing(
      { id: 'reports', chips: ['All', 'Meetings', 'Enterprise AI', 'Governance'], start: 1 },
      [
        ['Report  |  2026', 'The state of meeting governance', ['Governance', 'Meetings']],
        ['Report  |  2026', 'Meeting intelligence in African financial services', ['Meetings']],
        ['Report  |  2026', 'Where decisions go missing after the call', ['Meetings']],
        ['Report  |  2025', 'Enterprise AI adoption in regulated industries', ['Enterprise AI']],
        ['Report  |  2025', 'Benchmarks for action follow-through', ['Meetings']],
        [
          'Report  |  2025',
          'Security reviews for AI vendors: what buyers ask',
          ['Enterprise AI', 'Governance'],
        ],
      ],
      'View report',
      ROUTES.contactSales,
    ),
  ],

  related: exploreResources(RELATED),
  cta: resCta('Research for smarter enterprise decisions'),
};
