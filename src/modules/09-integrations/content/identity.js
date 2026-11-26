import { access, actions, audit, CONNECTED, integrations } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { members, secTasks } from './shared';
import { CONTACT, exploreIntegrations, intBreadcrumb, intCta, splits } from './integrations';

/** 09.04 · Identity (Figma 48:384738). */
export default {
  breadcrumb: intBreadcrumb('Identity'),

  /** 01 · Hero (689): workspace access in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Integrations  ·  Identity',
    title: 'Make access fit your',
    accent: 'organisation.',
    lead: 'Enterprise identity is central to secure adoption. Explore the identity options in the sitemap and work with Acumeet to confirm how authentication, directory services, and user lifecycle management can be supported in your environment.',
    primary: CONTACT('Discuss your identity requirements'),
    window: access(
      [
        ['Ruth Godwin', 'Owner'],
        ['Warith Abraham', 'Admin'],
        ['Faith Oluwale', 'Member'],
        ['George Nwokoro', 'Viewer'],
      ],
      { width: 500 },
    ),
    overlay: actions(4, secTasks(['May 21', 'Jun 26', 'Today']), { width: 360, shadow: 'float' }),
    overlayY: 336,
    height: 689,
  }),

  sections: splits([
    {
      eyebrow: 'Identity provider',
      title: 'Align Acumeet access with your Microsoft identity environment.',
      body: [
        'For organisations using Microsoft Entra ID, review the supported approach for connecting identity and access workflows with Acumeet. The exact configuration depends on authentication and provisioning capabilities available in your deployment.',
        'Plan access around your existing identity environment.',
        'Clarify administrator and user setup requirements.',
        'Review sign-in and lifecycle needs before rollout.',
      ],
      cta: CONTACT('Discuss Microsoft Entra ID'),
      visual: access(members, { width: 380 }),
    },
    {
      eyebrow: 'Single sign-on',
      title: 'Give users a consistent way to sign in.',
      body: [
        'Single sign-on can simplify access by allowing users to authenticate through an organisation-approved identity provider.',
        'Support a consistent enterprise sign-in experience.',
        'Align authentication with organisational policies.',
        'Document setup and testing requirements.',
      ],
      cta: CONTACT('Ask about SSO'),
      visual: audit(
        [
          ['09:42', 'Signed in via SSO', 'Ruth Godwin'],
          ['09:31', 'Signed in via SSO', 'Faith Oluwale'],
          ['09:18', 'Signed in via SSO', 'Warith Abraham'],
          ['08:57', 'Signed in via SSO', 'George Nwokoro'],
        ],
        { width: 360 },
      ),
    },
    {
      eyebrow: 'Directory services',
      title: 'Assess directory-based identity requirements.',
      body: [
        'If your organisation relies on LDAP-based directory services, discuss the intended identity workflow with Acumeet. Support may depend on the architecture and whether a direct connection, identity-provider bridge, or another approach is required.',
        'Map directory requirements before implementation.',
        'Clarify network and security considerations.',
        'Choose an approach that fits your environment.',
      ],
      cta: CONTACT('Discuss LDAP requirements'),
      visual: integrations(CONNECTED, 6),
    },
    {
      eyebrow: 'User provisioning',
      title: 'Make user lifecycle management easier to govern.',
      body: [
        'SCIM can help automate user provisioning and deprovisioning between identity systems and applications when supported. Confirm Acumeet’s available SCIM endpoints, supported operations, and identity-provider compatibility.',
        'Plan joiner and leaver workflows.',
        'Reduce manual user-administration steps where supported.',
        'Define provisioning and deprovisioning behaviour.',
      ],
      cta: CONTACT('Ask about SCIM provisioning'),
      visual: actions(
        4,
        [
          ['Remove leavers from the Acumeet workspace', 'Fri'],
          ['Confirm SCIM provisioning scope with IT', 'May 8'],
          ['Review admin role assignments', 'Jun 13'],
        ],
        { width: 400 },
      ),
    },
  ]),

  related: exploreIntegrations(['overview', 'meetingPlatforms', 'productivity']),
  cta: intCta('Make access fit your organisation.'),
};
