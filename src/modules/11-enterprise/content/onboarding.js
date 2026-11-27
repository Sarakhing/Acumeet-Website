import { capture } from '@/components/visuals/mocks';
import { entPage, tasks, team } from './shared';
import {
  checklist,
  ENTERPRISE,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TALK,
} from './enterprise';

/** 11.09 · User Onboarding (Figma 49:68961). */
export default {
  breadcrumb: entBreadcrumb('User onboarding'),

  /** 01 · Hero + "Hero carousel · 11.09 · User Onboarding" (49:71538). */
  ...entPage('onboarding', {
    hero: 'rings',
    eyebrow: 'Onboarding',
    title: 'Get every team productive quickly',
    lead: 'Help teams capture meetings, find decisions, track actions and use meeting knowledge responsibly.',
    primary: TALK,
    secondary: link('Explore training', ENTERPRISE.training.to),
    slides: [
      [
        'Access',
        team(
          [
            ['Faith Oluwale', 'Owner'],
            ['George Nwokoro', 'Admin'],
            ['Ruth Godwin', 'Member'],
            ['Warith Abraham', 'Viewer'],
          ],
          560,
        ),
      ],
      [
        'Capture',
        capture('Mon, Jun 8', [
          ['Architecture Review', '11:00 AM · Zoom'],
          ['Implementation Kick-off', '3:30 PM · Meet'],
          ['Cutover Readiness Review', '10:30 AM · Teams'],
        ]),
      ],
      [
        'Action items',
        tasks(
          4,
          [
            ['region', 'Jun 7'],
            ['network', 'This week'],
            ['storage', 'Jun 9'],
          ],
          { width: 400 },
        ),
      ],
    ],
  }),

  sections: [
    statement(
      'Role-based onboarding helps administrators, control functions and business users learn the workflows that',
      'matter to them.',
    ),
    checklist(
      'What onboarding covers',
      'Guidance for administrators and business users as Acumeet rolls out.',
      [
        ['Admin onboarding', 'books', 'purple'],
        ['Business-user workflows', 'user-check', 'green'],
        ['Security and governance guidance', 'shield-check', 'amber'],
        ['Adoption support', 'wrench', 'teal'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
