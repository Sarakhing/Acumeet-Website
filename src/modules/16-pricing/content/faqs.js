import { access } from '@/components/visuals/mocks';
import { PRICING_FAQS } from './overview';
import {
  addOns,
  billing,
  CONTACT_SALES,
  cta,
  DEMO,
  explorePricing,
  explorer,
  faq,
  members,
  plans,
  priBreadcrumb,
  statement,
  supplierAtlas,
  VIEW_PRICING,
} from './pricing';

/** 16.06 · FAQs (Figma 49:174719). */
export default {
  breadcrumb: priBreadcrumb('FAQs'),

  /** 01 · Hero + "Hero carousel · 16.06 · FAQs" (49:175518). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Pricing  ·  FAQs',
    title: 'Pricing FAQs',
    lead: 'Answers to common questions about plans, features and data.',
    primary: VIEW_PRICING,
    secondary: CONTACT_SALES,
  },
  carousel: [
    { label: 'Plans', content: plans() },
    { label: 'Add-ons', content: addOns() },
    { label: 'Billing', content: billing() },
  ],

  sections: [
    statement('The questions people ask most before', 'choosing a plan.'),
    /** Tabs explorer + "Explorer · Topics" (49:175662). */
    explorer(
      {
        title: 'Topics',
        titleSize: 48,
        lead: 'Answers grouped by features, data and privacy, and Enterprise pricing.',
      },
      [
        ['Features', 'Atlas, Redaction AI and languages.', supplierAtlas],
        ['Data and privacy', 'How Acumeet protects your data.', access(members, { width: 380 })],
        ['Enterprise', 'How Enterprise pricing works.', plans({ selected: 'Enterprise' })],
      ],
    ),
  ],

  faq: faq('Questions', PRICING_FAQS),

  related: explorePricing(['overview', 'featureComparison', 'enterprise', 'addOns']),
  cta: cta(
    'Not sure which plan fits?',
    'Tell us how your teams meet and what control you need. We will help you choose.',
    CONTACT_SALES,
    DEMO,
  ),
};
