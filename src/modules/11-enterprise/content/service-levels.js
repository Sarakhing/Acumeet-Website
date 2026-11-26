import { analytics } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, rollout } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TALK,
} from './enterprise';

/** 11.13 · Service Levels (Figma 49:69408). */
export default {
  breadcrumb: entBreadcrumb('Service Levels'),

  /** 01 · Hero (680): meeting analytics in the window, action items overlapping, "Live" chip. */
  ...entPage('serviceLevels', {
    hero: 'window',
    eyebrow: 'Service Levels',
    title: 'Service commitments that match',
    accent: 'your deployment',
    lead: 'Align support coverage and operational requirements with your enterprise deployment.',
    primary: TALK,
    secondary: link('Contact support', ROUTES.support),
    window: analytics('This month', [83, 55, 43], { width: 500 }),
    overlay: rollout(5, ['Fri', 'May 14', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'Talk to the enterprise team about the service levels your organisation needs. Commitments are documented for your',
      'plan and deployment.',
    ),
    checklist(
      'What service levels cover',
      'Clear expectations for support coverage, response and operations.',
      [
        ['Support coverage', 'wrench', 'magenta'],
        ['Response expectations', 'lifebuoy', 'blue'],
        ['Operational requirements', 'funnel-simple', 'purple'],
        ['Documented commitments', 'sparkle', 'green'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
