import { analytics, capture } from '@/components/visuals/mocks';
import { entPage, tasks } from './shared';
import {
  checklist,
  CONTACT,
  entBreadcrumb,
  exploreEnterprise,
  RELATED,
  statement,
} from './enterprise';

/** 11.15 · Request a PoC (Figma 49:69711). Its "Request a PoC" buttons go to the contact form. */
export default {
  breadcrumb: entBreadcrumb('Request a PoC', { poc: true }),

  /** 01 · Hero + "Hero carousel · 11.15 · Request a PoC" (49:72303). */
  ...entPage('requestPoc', {
    hero: 'rings',
    tabKey: 'poc',
    eyebrow: 'Request a PoC',
    title: 'Request a proof of concept',
    lead: 'Tell us what you need to validate, from workflows and integrations to security, governance and search.',
    primary: CONTACT('Request a PoC'),
    secondary: CONTACT('Contact the enterprise team'),
    slides: [
      [
        'Capture',
        capture('Mon, Jun 8', [
          ['Deployment Planning', '9:00 AM · Teams'],
          ['Architecture Review', '2:00 PM · Zoom'],
          ['Implementation Kick-off', '4:00 PM · Meet'],
        ]),
      ],
      [
        'Action items',
        tasks(
          3,
          [
            ['failover', 'Today'],
            ['region', 'Jun 12'],
            ['network', 'Fri'],
          ],
          { width: 560, footer: false },
        ),
      ],
      ['Analytics', analytics('Last 7 days', [83, 55, 43], { width: 350 })],
    ],
  }),

  sections: [
    statement(
      'Define the business use case, technical environment and success measures you',
      'want to test.',
    ),
    checklist(
      'What to prepare for your PoC',
      'Share these details so we can scope the evaluation with your team.',
      [
        ['Business use case', 'briefcase', 'purple'],
        ['Technical environment', 'cpu', 'green'],
        ['Required controls', 'sparkle', 'amber'],
        ['Evaluation goals', 'sparkle', 'teal'],
        ['Key stakeholders', 'key', 'magenta'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
