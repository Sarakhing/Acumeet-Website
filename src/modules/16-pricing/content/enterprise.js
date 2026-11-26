import { windowHero } from '@/components/blocks/heroPresets';
import { retention } from '@/components/visuals/mocks';
import { options } from '@/modules/10-deployment/content/deployment';
import {
  CONTACT_SALES,
  cta,
  DEMO,
  enterpriseTabs,
  explorePricing,
  explorer,
  faq,
  POLICY_ROWS,
  priBreadcrumb,
  priTasks,
  REQUEST_POC,
  statement,
} from './pricing';

/** 16.04 · Enterprise Pricing (Figma 49:174456). */
export default {
  breadcrumb: priBreadcrumb('Enterprise Pricing'),

  /** 01 · Hero (630): deployment options in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Pricing  ·  Enterprise Pricing',
    title: 'Need more',
    accent: 'control?',
    lead: 'Enterprise pricing is built around your deployment, security, governance and support needs.',
    primary: CONTACT_SALES,
    secondary: DEMO,
    window: options(0),
    overlay: priTasks(5, ['May 18', 'Next week', 'May 28'], { width: 360, shadow: 'float' }),
    overlayY: 277,
    height: 630,
  }),

  sections: [
    statement(
      'Enterprise is for organisations with advanced security, compliance and deployment needs. We build a proposal around how you',
      'will use Acumeet.',
    ),
    /** Tabs explorer + "Explorer · What Enterprise includes" (49:175120). */
    explorer(
      { title: 'What Enterprise', accent: 'includes', titleSize: 48 },
      enterpriseTabs(retention(POLICY_ROWS, { status: 'All meetings' })),
    ),
  ],

  faq: faq('Enterprise pricing questions', [
    [
      'How does Enterprise pricing work?',
      'It depends on your usage, deployment, security, governance and support needs. Contact sales for a proposal.',
    ],
    [
      'Can we start with a proof of concept?',
      'Yes. Request a PoC and we will agree scope and success criteria with you.',
    ],
  ]),

  related: explorePricing(['overview', 'featureComparison']),
  cta: cta(
    'Get an Enterprise proposal',
    'Tell us how your teams meet and what control you need.',
    CONTACT_SALES,
    REQUEST_POC,
  ),
};
