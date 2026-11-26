import { windowHero } from '@/components/blocks/heroPresets';
import { exploreResources, knowSummary, knowTasks, resBreadcrumb, resCta } from './resources';

/** 13.04 · Case Studies (Figma 49:138741). The listing is a placeholder until stories are approved. */
export default {
  breadcrumb: resBreadcrumb('Case Studies'),

  /** 01 · Hero (680): summary in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Case studies',
    title: 'See meeting intelligence in',
    accent: 'practice',
    lead: 'How organisations approach meeting accountability, governance and knowledge.',
    primary: { label: 'Explore case studies', to: '#case-studies' },
    window: knowSummary('Leadership Offsite', [66, 91, 25], ['handbook', 'tag'], 500),
    overlay: knowTasks(5, ['Jun 9', 'Next week', 'Jun 19'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    {
      type: 'placeholder',
      id: 'case-studies',
      note: 'Placeholder · awaiting approved customer stories',
    },
  ],

  related: exploreResources(['overview', 'blog', 'blogCategories']),
  cta: resCta('See meeting intelligence in practice'),
};
