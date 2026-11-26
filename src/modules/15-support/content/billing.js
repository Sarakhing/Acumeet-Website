import { access } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { members } from './shared';
import {
  addOns,
  billing,
  CONTACT_SUPPORT,
  cta,
  explorer,
  exploreSupport,
  invoices,
  link,
  plans,
  RELATED,
  statement,
  supBreadcrumb,
} from './support';

const heroInvoices = invoices({ shadow: 'float' });

/** 15.08 · Billing (Figma 49:167571). */
export default {
  breadcrumb: supBreadcrumb('Billing'),

  /** 01 · Hero (820): billing and plans behind invoices. */
  ...centeredHero({
    eyebrow: 'Support  ·  Billing',
    title: 'Billing',
    accent: 'help',
    lead: 'Plans, invoices and account questions.',
    primary: CONTACT_SUPPORT,
    secondary: link('View pricing', ROUTES.pricing),
    height: 820,
    copyHeight: 224,
    top: 363,
    gap: 43,
    items: [
      [255, 363, billing({ shadow: 'float' })],
      [807, 430, plans({ shadow: 'float' })],
      [520, 366, heroInvoices],
    ],
    compact: heroInvoices,
  }),

  sections: [
    statement(
      'Find answers to common billing questions, or contact our team',
      'about your account.',
    ),
    explorer({ title: 'Billing', accent: 'topics' }, [
      ['Plans', 'Free, Individual, Teams, Business and Enterprise plans.', plans()],
      ['Changing plan', 'Upgrade or downgrade your plan.', billing()],
      ['Invoices', 'Download invoices and update billing details.', invoices()],
      ['Add-ons', 'Buy extra AI minutes without moving to a higher plan.', addOns()],
      ['Seats', '', access(members, { width: 380 })],
      ['Enterprise billing', 'Talk to sales about custom pricing.', plans()],
    ]),
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'Questions about your account?',
    'Our team can help with plans and invoices.',
    CONTACT_SUPPORT,
    link('Contact sales', ROUTES.contactSales),
  ),
};
