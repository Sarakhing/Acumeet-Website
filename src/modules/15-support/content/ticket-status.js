import { centeredHero } from '@/components/blocks/heroPresets';
import { supDecisions, supTasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  explorer,
  exploreSupport,
  RAISE,
  RELATED,
  statement,
  supBreadcrumb,
  ticket,
  tickets,
} from './support';

const heroActions = supTasks(3, ['Fri', 'May 11', 'Today'], { width: 400, shadow: 'float' });

/** 15.14 · Ticket Status (Figma 49:168230). */
export default {
  breadcrumb: supBreadcrumb('Ticket Status'),

  /** 01 · Hero (820): my tickets and decisions (−6°) behind action items. */
  ...centeredHero({
    eyebrow: 'Support  ·  Ticket Status',
    title: 'Check ticket',
    accent: 'status',
    lead: 'Already raised a ticket? Check where it is and add more detail.',
    primary: RAISE,
    secondary: CONTACT_SUPPORT,
    height: 820,
    copyHeight: 224,
    top: 366,
    gap: 46,
    items: [
      [255, 400, tickets({ shadow: 'float' })],
      [
        807,
        430,
        supDecisions(
          'Jun 6',
          ['Enable SSO before rollout', 'Run admin training in two sessions'],
          'Delayed response on priority tickets',
          ['Training', 'Release notes', 'Integrations', 'Onboarding'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 366, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Enter your ticket reference and work email to see the latest status and any replies',
      'from our team.',
    ),
    explorer(
      {
        title: 'What each status',
        accent: 'means',
        lead: 'What each ticket status means and what happens next.',
      },
      [
        ['Received', 'We have your request.', ticket({ step: 0 })],
        ['In review', 'Our team is working on it.', ticket({ step: 1 })],
        ['Waiting on you', 'We need more information from you.', ticket({ step: 2 })],
        ['Resolved', 'The issue is fixed or answered.', ticket({ step: 3 })],
      ],
    ),

    /** 04 · form (49:168348). */
    {
      type: 'form',
      variant: 'status',
      title: 'Find your ticket',
      lead: 'Enter your ticket reference to see its latest status.',
    },
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'Need to add something?',
    'Reply to your ticket email or contact support.',
    CONTACT_SUPPORT,
    RAISE,
  ),
};
