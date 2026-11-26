import { access, audit, keys } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, members } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TRUST,
} from './enterprise';

/** 11.05 · Security (Figma 49:68554). */
export default {
  breadcrumb: entBreadcrumb('Security'),

  /** 01 · Hero + "Hero carousel · 11.05 · Security" (49:70671). */
  ...entPage('security', {
    hero: 'rings',
    eyebrow: 'Security',
    title: 'Control where meeting data lives',
    lead: 'Decide where meeting data is stored, who can access it and how sensitive information is handled.',
    primary: link('Explore security', ROUTES.security),
    secondary: TRUST,
    slides: [
      ['Access', access(members, { width: 380 })],
      [
        'Audit log',
        audit(
          [
            ['09:21', 'Downloaded recording', 'Fredelina Augustus'],
            ['09:10', 'Signed in via SSO', 'Ruth Godwin'],
            ['08:52', 'Applied legal hold', 'Admin'],
            ['08:44', 'Edited action item', 'George Nwokoro'],
          ],
          { width: 360 },
        ),
      ],
      ['Keys', keys(['Configure', 'Configure'])],
    ],
  }),

  sections: [
    statement(
      'Eligible plans add customer-controlled storage and keys. Role-based access, SSO, audit logs and data residency options help you govern access and oversight, and Redaction AI helps',
      'protect sensitive information.',
    ),
    checklist(
      'Security capabilities for enterprise teams',
      'Controls that help protect meeting data across identity, storage and access.',
      [
        ['Customer-controlled storage and keys (eligible plans)', 'key', 'teal'],
        ['Role-based access', 'user-check', 'magenta'],
        ['SSO', 'user-check', 'blue'],
        ['Audit logs', 'list-checks', 'purple'],
        ['Data residency', 'database', 'green'],
        ['Redaction AI', 'shield-check', 'amber'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
