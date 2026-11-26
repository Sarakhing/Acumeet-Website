import { decisions } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, team } from './shared';
import { checklist, DEMO, entBreadcrumb, exploreEnterprise, link, statement } from './enterprise';

/** 11.03 · Enterprise Administration (Figma 49:68282). */
export default {
  breadcrumb: entBreadcrumb('Enterprise Administration'),

  /** 01 · Hero (695): workspace access in the window, decisions overlapping, "Live" chip. */
  ...entPage('administration', {
    hero: 'window',
    eyebrow: 'Administration',
    title: 'Manage access with',
    accent: 'confidence',
    lead: 'Role-based controls and enterprise sign-in for meeting intelligence.',
    primary: DEMO,
    secondary: link('Explore security', ROUTES.security),
    window: team([
      ['Warith Abraham', 'Owner'],
      ['Faith Oluwale', 'Admin'],
      ['George Nwokoro', 'Member'],
      ['Ruth Godwin', 'Viewer'],
    ]),
    overlay: decisions(
      'May 28',
      ['Run failover tests quarterly', 'Go live after the pilot group'],
      'Firewall approvals pending',
      ['Keys', 'Failover', 'Cutover', 'Pilot'],
      360,
      { shadow: 'float' },
    ),
    overlayY: 360,
    height: 695,
  }),

  sections: [
    statement(
      'Give administrators visibility and control without turning every meeting into an IT task. Manage who can access meeting knowledge and review activity',
      'through audit logs.',
    ),
    checklist(
      'Controls for workspace administrators',
      'Manage access, sign-in and oversight for your organisation from one admin view.',
      [
        ['Role-based access', 'user-check', 'green'],
        ['Enterprise sign-in', 'user-check', 'amber'],
        ['Audit logs', 'list-checks', 'teal'],
        ['Administrative visibility', 'sparkle', 'magenta'],
      ],
    ),
  ],

  related: exploreEnterprise(['overview', 'architecture']),
};
