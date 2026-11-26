import { keys } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, rollout } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TALK,
} from './enterprise';

const heroActions = rollout(4, ['Fri', 'Jun 17', 'Today'], { width: 400, shadow: 'float' });

/** 11.07 · Deployment (Figma 49:68805). */
export default {
  breadcrumb: entBreadcrumb('Deployment'),

  /** 01 · Hero (745): keys & storage behind action items. */
  ...entPage('deployment', {
    hero: 'centered',
    eyebrow: 'Deployment',
    title: 'Choose how you',
    accent: 'deploy',
    lead: 'Align deployment with your infrastructure, storage and data residency needs.',
    primary: link('Explore deployment', ROUTES.deployment),
    secondary: TALK,
    height: 745,
    copyHeight: 224,
    top: 363,
    gap: 43,
    items: [
      [758, 363, keys(['Configure', 'Configure'], { width: 400, shadow: 'float' })],
      [300, 366, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'From cloud-hosted environments to greater customer control over',
      'storage and infrastructure.',
    ),
    checklist(
      'Deployment options',
      'Choose the deployment model that fits your security and infrastructure requirements.',
      [
        ['Cloud hosted', 'cloud', 'blue'],
        ['Customer-controlled storage', 'database', 'purple'],
        ['Private deployment', 'cloud', 'green'],
        ['Data residency', 'database', 'amber'],
        ['High availability', 'sparkle', 'teal'],
        ['Disaster recovery', 'sparkle', 'magenta'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
