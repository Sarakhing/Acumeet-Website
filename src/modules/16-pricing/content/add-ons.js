import { centeredHero } from '@/components/blocks/heroPresets';
import { decisions } from '@/components/visuals/mocks';
import {
  addOnCards,
  addOns,
  CONTACT_SALES,
  cta,
  explorePricing,
  priBreadcrumb,
  priTasks,
  statement,
  VIEW_PRICING,
} from './pricing';

const heroActions = priTasks(4, ['Jun 12', 'Next week', 'Jun 22'], { width: 400, shadow: 'float' });

/** 16.05 · Add-ons (Figma 49:174584). */
export default {
  breadcrumb: priBreadcrumb('Add-ons'),

  /** 01 · Hero (846): add-ons and decisions (−6°) behind action items. */
  ...centeredHero({
    eyebrow: 'Pricing  ·  Add-ons',
    title: 'Add capacity when you',
    accent: 'need it',
    lead: 'Buy extra AI minutes without moving to a higher plan. Availability depends on your plan.',
    primary: VIEW_PRICING,
    secondary: CONTACT_SALES,
    height: 846,
    copyHeight: 250,
    top: 392,
    gap: 46,
    items: [
      [255, 425, addOns({ shadow: 'float' })],
      [
        807,
        456,
        decisions(
          'Jun 4',
          ['Add Redaction AI for compliance teams', 'Pool minutes across workspaces'],
          'Budget approval needed before renewal',
          ['Seats', 'Minutes', 'Add-ons', 'Renewal'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 392, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Some months bring more meetings than others. Add-ons let you add capacity without changing plan. [Add-on list and',
      'prices to confirm.]',
    ),
    /** Benefits · Available add-ons (second card is a Figma placeholder). */
    addOnCards({ title: 'Available', accent: 'add-ons' }, [
      ['Extra AI minutes', 'Add transcription and AI processing minutes to your plan.'],
      ['[Add-on to confirm]', '[Description]'],
    ]),
  ],

  related: explorePricing(['overview', 'featureComparison', 'enterprise']),
  cta: cta(
    'Need more capacity?',
    'Add minutes or talk to sales about a larger plan.',
    VIEW_PRICING,
    CONTACT_SALES,
  ),
};
