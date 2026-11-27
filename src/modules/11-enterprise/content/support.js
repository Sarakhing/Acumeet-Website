import { decisions } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, keySummary, tasks } from './shared';
import {
  checklist,
  CONTACT,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
} from './enterprise';

/** 11.12 · Enterprise Support (Figma 49:69323). */
export default {
  breadcrumb: entBreadcrumb('Enterprise support'),

  /** 01 · Hero + "Hero carousel · 11.12 · Enterprise Support" (49:71926). */
  ...entPage('support', {
    hero: 'rings',
    eyebrow: 'Support',
    title: 'Support for enterprise teams',
    lead: 'A clear path to product guidance and issue resolution for technical and business stakeholders.',
    primary: CONTACT('Contact enterprise support'),
    secondary: link('Visit the Help Center', ROUTES.support),
    slides: [
      [
        'Decisions',
        decisions(
          'May 30',
          ['Use customer-managed keys from day one', 'Run failover tests quarterly'],
          'Cutover clashes with month-end',
          ['Pilot', 'Azure tenant', 'Storage', 'Keys'],
          560,
        ),
      ],
      [
        'Action items',
        tasks(
          5,
          [
            ['cutover', 'Jun 7'],
            ['failover', 'This week'],
            ['region', 'Jun 9'],
          ],
          { width: 560, footer: false },
        ),
      ],
      ['Summary', keySummary('Cutover Readiness Review', [50, 82, 22], ['cutover', 'tenant'], 560)],
    ],
  }),

  sections: [
    statement(
      'A structured route for troubleshooting, product questions and escalation throughout',
      'the customer lifecycle.',
    ),
    checklist(
      'What enterprise support includes',
      'Help from setup through day-to-day use, with a clear path for escalation.',
      [
        ['Product guidance', 'books', 'teal'],
        ['Troubleshooting', 'wrench', 'magenta'],
        ['Escalation path', 'lifebuoy', 'blue'],
        ['Enterprise support coordination', 'buildings', 'purple'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
