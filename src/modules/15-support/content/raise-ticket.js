import { access, capture, CONNECTED, integrations, transcript } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { members, SPRINT, supplierAtlas, supTasks } from './shared';
import {
  billing,
  cta,
  ENTERPRISE_TEAM,
  explorer,
  exploreSupport,
  link,
  RELATED,
  statement,
  SUPPORT,
  supBreadcrumb,
  ticket,
} from './support';

/** 15.13 · Raise a Ticket (Figma 49:168095). */
export default {
  breadcrumb: supBreadcrumb('Raise a Ticket'),

  /** 01 · Hero (680): support ticket in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Support  ·  Raise a Ticket',
    title: 'Raise a support',
    accent: 'ticket',
    lead: 'Send us the details so the support team can review them.',
    primary: link('Check ticket status', SUPPORT.ticketStatus.to),
    secondary: link('Browse FAQs', SUPPORT.faqs.to),
    window: ticket({ width: 420 }),
    overlay: supTasks(4, ['Fri', 'Jun 17', 'May 22'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'The more detail you share, the faster we can help. Tell us what you were trying to do, what happened and whether you saw',
      'an error message.',
    ),
    explorer(
      {
        title: 'Issue',
        accent: 'types',
        lead: 'Choose the issue type that best matches your request.',
      },
      [
        ['Account and access', 'Sign-in, users and permissions.', access(members, { width: 380 })],
        [
          'Meeting capture',
          'Acumeet joining and recording meetings.',
          capture('Mon, Jun 8', [
            ['Service Review', '11:00 AM · Zoom'],
            ['Customer Onboarding Call', '3:30 PM · Meet'],
            ['Support Escalation Review', '10:30 AM · Teams'],
          ]),
        ],
        ['Transcription and summaries', 'Transcript and summary quality.', transcript(SPRINT)],
        ['Atlas', 'Questions, answers and sources.', supplierAtlas],
        ['Integrations', '', integrations(CONNECTED, 6)],
        ['Billing', '', billing()],
      ],
    ),

    /** 04 · form (49:168203). */
    {
      type: 'form',
      variant: 'full',
      id: 'request',
      title: 'Your request',
      lead: 'Send the details so the support team can review them.',
    },
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'Prefer to talk to someone?',
    'Enterprise customers can contact their enterprise team.',
    ENTERPRISE_TEAM,
    link('Browse FAQs', SUPPORT.faqs.to),
  ),
};
