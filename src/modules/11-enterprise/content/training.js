import { ROUTES } from '@/constants/routes';
import { entPage, rollout, team } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TALK,
} from './enterprise';

/** 11.10 · Training (Figma 49:69046). */
export default {
  breadcrumb: entBreadcrumb('Training'),

  /** 01 · Hero (689): workspace access in the window, action items overlapping, "Live" chip. */
  ...entPage('training', {
    hero: 'window',
    eyebrow: 'Training',
    title: 'Give every audience the training',
    accent: 'it needs',
    lead: 'Help each audience use the platform with confidence.',
    primary: TALK,
    secondary: link('Contact support', ROUTES.support),
    window: team([
      ['George Nwokoro', 'Admin'],
      ['Ruth Godwin', 'Member'],
      ['Warith Abraham', 'Member'],
      ['Faith Oluwale', 'Viewer'],
    ]),
    overlay: rollout(5, ['May 27', 'Next week', 'May 10'], { width: 360, shadow: 'float' }),
    overlayY: 336,
    height: 689,
  }),

  sections: [
    statement(
      'Training covers everyday meeting workflows, administration, security controls, governance responsibilities and',
      'enterprise use cases.',
    ),
    checklist(
      'Training for every role',
      'Sessions for business users, administrators and governance teams.',
      [
        ['Business-user training', 'user-check', 'green'],
        ['Administrator training', 'books', 'amber'],
        ['Security and governance guidance', 'shield-check', 'teal'],
        ['Use-case enablement', 'sparkle', 'magenta'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
