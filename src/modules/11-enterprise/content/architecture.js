import { access, audit, keys } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, members } from './shared';
import { entBreadcrumb, link, statement, TALK } from './enterprise';

/** 11.02 · Enterprise Architecture (Figma 49:68145). No related row in Figma. */
export default {
  breadcrumb: entBreadcrumb('Enterprise architecture'),

  /** 01 · Hero + "Hero carousel · 11.02 · Enterprise Architecture" (49:70434). */
  ...entPage('architecture', {
    hero: 'rings',
    eyebrow: 'Architecture',
    title: 'Fit Acumeet into your environment',
    lead: 'Connect meeting capture, identity, storage and governance to the environment you already run.',
    primary: TALK,
    secondary: link('Explore deployment', ROUTES.deployment),
    slides: [
      ['Keys', keys(['Connected', 'Configure'], { width: 560 })],
      ['Access', access(members, { width: 380 })],
      [
        'Audit log',
        audit(
          [
            ['09:23', 'Signed in via SSO', 'Ruth Godwin'],
            ['09:17', 'Applied legal hold', 'Admin'],
            ['09:04', 'Edited action item', 'George Nwokoro'],
            ['08:44', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 360 },
        ),
      ],
    ],
  }),

  sections: [
    statement(
      'Acumeet supports Microsoft Teams, Zoom and Google Meet, with access controls, enterprise sign-in and data residency options. Eligible plans add customer-controlled',
      'storage and keys.',
    ),

    /** Index · Built to fit your environment (49:68182). */
    {
      type: 'index',
      title: 'Built to fit your environment',
      lead: 'Meeting platforms, access controls and data options supported in enterprise deployments.',
      items: [
        { title: 'Microsoft Teams', icon: 'microsoft-teams' },
        { title: 'Zoom', icon: 'zoom' },
        { title: 'Google Meet', icon: 'google-meet' },
        { title: 'Role-based access', icon: 'users-three' },
        { title: 'SSO', icon: 'lock-key' },
        {
          title: 'Data residency',
          icon: 'globe-hemisphere-west',
          to: ROUTES.trustPage.dataResidency,
        },
        { title: 'Customer-controlled storage and keys (eligible plans)', icon: 'database' },
      ],
    },
  ],
};
