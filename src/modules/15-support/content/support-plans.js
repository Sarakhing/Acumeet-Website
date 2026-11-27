import { windowHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { supTasks } from './shared';
import {
  cta,
  DEMO,
  ENTERPRISE_TEAM,
  explorer,
  exploreSupport,
  link,
  RELATED,
  statement,
  supBreadcrumb,
  supportPlans,
} from './support';

/** 15.16 · Support Plans (Figma 49:168429). */
export default {
  breadcrumb: supBreadcrumb('Support plans'),

  /** 01 · Hero (680): support by plan in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Support  ·  Support plans',
    title: 'Support that fits how your',
    accent: 'organisation operates',
    lead: 'From email support to a dedicated Customer Success Manager and custom SLA.',
    primary: link('Explore Enterprise support', ROUTES.enterprisePage.support),
    secondary: ENTERPRISE_TEAM,
    window: supportPlans({ width: 420 }),
    overlay: supTasks(4, ['Jun 21', 'Next week', 'Jun 4'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'Every plan includes help resources. Paid plans add email or priority support, and Enterprise adds a dedicated team and service levels. For service-level details, talk',
      'to our team.',
    ),
    explorer({ title: 'Support by', accent: 'plan', lead: 'What support each plan includes.' }, [
      ['Free', 'Help centre, guides and FAQs.', supportPlans({ selected: 0 })],
      ['Individual', '', supportPlans({ selected: 1 })],
      ['Teams and Business', '', supportPlans({ selected: 2 })],
      [
        'Enterprise',
        'A dedicated Customer Success Manager and custom SLA.',
        supportPlans({ selected: 3 }),
      ],
    ]),
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'Need enterprise-level support?',
    'Talk to our team about service levels.',
    ENTERPRISE_TEAM,
    DEMO,
  ),
};
