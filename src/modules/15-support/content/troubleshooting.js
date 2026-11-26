import { createElement as h } from 'react';
import { audit, capture, CONNECTED, integrations, transcript } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import TalkTimeCard from '@/modules/03-products/components/visuals/TalkTimeCard';
import { MEETINGS, SPRINT, supTasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  explorer,
  exploreSupport,
  link,
  RAISE,
  RELATED,
  statement,
  SUPPORT,
  supBreadcrumb,
} from './support';

const talk = h(TalkTimeCard, {
  duration: '52 min',
  width: 420,
  speakers: [
    { name: 'Faith Oluwale', share: 25, tone: 'magenta' },
    { name: 'Fredelina Augustus', share: 25, tone: 'blue' },
    { name: 'Ruth Godwin', share: 20, tone: 'green' },
    { name: 'George Nwokoro', share: 15, tone: 'purple' },
    { name: 'Warith Abraham', share: 15, tone: 'amber' },
  ],
});

/** 15.10 · Troubleshooting (Figma 49:167791). */
export default {
  breadcrumb: supBreadcrumb('Troubleshooting'),

  /** 01 · Hero (680): upcoming meetings in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Support  ·  Troubleshooting',
    title: 'Troubleshooting',
    lead: 'Quick answers and fixes for common issues.',
    primary: RAISE,
    secondary: link('Check service status', SUPPORT.serviceStatus.to),
    window: capture('Mon, Jun 8', MEETINGS, { width: 500 }),
    overlay: supTasks(4, ['Jun 3', 'May 8', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'Start here if something is not working as expected. If these fixes do not help, raise a ticket and our team will',
      'take a look.',
    ),
    explorer({ title: 'Common', accent: 'issues' }, [
      [
        'Acumeet did not join',
        'Check the invite and platform connection.',
        capture('Mon, Jun 8', MEETINGS),
      ],
      [
        'Transcript is missing',
        'Check processing status and recording permissions.',
        transcript(SPRINT),
      ],
      ['Wrong speaker labels', 'Correct labels and improve recognition.', talk],
      [
        'Sign-in problems',
        '',
        audit(
          [
            ['09:16', 'Edited action item', 'George Nwokoro'],
            ['09:09', 'Approved redactions', 'Faith Oluwale'],
            ['08:55', 'Exported summary', 'George Nwokoro'],
            ['08:34', 'Updated retention policy', 'Admin'],
          ],
          { width: 360 },
        ),
      ],
      ['Integration errors', 'Reconnect and reauthorise integrations.', integrations(CONNECTED, 6)],
      [
        'Upload failed',
        'Supported formats and file sizes.',
        capture('Mon, Jun 8', [
          ['Service Review', '3:30 PM · Teams'],
          ['Customer Onboarding Call', '10:30 AM · Zoom'],
          ['Support Escalation Review', '11:00 AM · Meet'],
        ]),
      ],
    ]),
  ],

  related: exploreSupport(RELATED),
  cta: cta('Still stuck?', 'Raise a ticket and our team will review it.', RAISE, CONTACT_SUPPORT),
};
