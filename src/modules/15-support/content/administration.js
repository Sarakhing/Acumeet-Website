import {
  access,
  audit,
  CONNECTED,
  integrations,
  keys,
  retention,
} from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { ninReview, POLICY_ROWS, supTasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  ENTERPRISE_TEAM,
  explorer,
  exploreSupport,
  link,
  statement,
  supBreadcrumb,
} from './support';

/** 15.07 · Administration (Figma 49:167457). */
export default {
  breadcrumb: supBreadcrumb('Administration'),

  /** 01 · Hero (689): workspace access in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Support  ·  Administration',
    title: 'Administration',
    accent: 'guides',
    lead: 'Manage users, access and enterprise controls.',
    primary: link('Browse guides', '#topics'),
    secondary: CONTACT_SUPPORT,
    window: access(
      [
        ['Warith Abraham', 'Admin'],
        ['Faith Oluwale', 'Owner'],
        ['George Nwokoro', 'Viewer'],
        ['Ruth Godwin', 'Member'],
      ],
      { width: 500 },
    ),
    overlay: supTasks(4, ['May 21', 'Next week', 'May 4'], { width: 360, shadow: 'float' }),
    overlayY: 336,
    height: 689,
  }),

  sections: [
    statement('Guides for administrators who set up and manage Acumeet', 'for their organisation.'),
    {
      ...explorer({ title: 'Admin', accent: 'topics' }, [
        [
          'Users and roles',
          'Add users, assign roles and remove access.',
          access(
            [
              ['Faith Oluwale', 'Owner'],
              ['George Nwokoro', 'Member'],
              ['Ruth Godwin', 'Admin'],
              ['Warith Abraham', 'Viewer'],
            ],
            { width: 480 },
          ),
        ],
        [
          'SSO and provisioning',
          'Connect your identity provider and SCIM.',
          integrations(CONNECTED, 6),
        ],
        [
          'Retention and deletion',
          'Set retention periods and delete records.',
          retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
        ],
        ['Governance settings', 'Consent, sharing, tagging and redaction policies.', ninReview(6)],
        [
          'Audit logs',
          'Review access and administrative activity.',
          audit(
            [
              ['09:22', 'Signed in via SSO', 'Ruth Godwin'],
              ['09:15', 'Applied legal hold', 'Admin'],
              ['09:01', 'Edited action item', 'George Nwokoro'],
              ['08:40', 'Approved redactions', 'Faith Oluwale'],
            ],
            { width: 360 },
          ),
        ],
        [
          'Workspace settings',
          'Configure your workspace and integrations.',
          keys(['Configure', 'Configure']),
        ],
      ]),
      id: 'topics',
    },
  ],

  related: exploreSupport(['overview', 'gettingStarted', 'featureGuides']),
  cta: cta(
    'Need admin help?',
    'Our support team works with administrators every day.',
    CONTACT_SUPPORT,
    ENTERPRISE_TEAM,
  ),
};
