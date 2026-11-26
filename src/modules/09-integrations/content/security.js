import { access, actions, audit, keys } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { members, secTasks } from './shared';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

/** 09.06 · Security (Figma 48:385243). */
export default {
  breadcrumb: intBreadcrumb('Security'),

  /** 01 · Hero + "Hero carousel · 09.06 · Security" (46:93213). */
  ...ringsHero({
    eyebrow: 'Integrations  ·  Security',
    title: 'Connect security controls to your operating model.',
    lead: 'Security integration should fit the controls and monitoring practices your organisation already uses. Explore the key-management and security-monitoring topics below, then confirm the supported configuration with Acumeet.',
    primary: CONTACT('Discuss your security requirements'),
    secondary: null,
    slides: [
      ['Access', access(members, { width: 380 })],
      [
        'Audit log',
        audit(
          [
            ['09:22', 'Applied legal hold', 'Admin'],
            ['09:01', 'Edited action item', 'George Nwokoro'],
            ['08:50', 'Approved redactions', 'Faith Oluwale'],
            ['08:32', 'Exported summary', 'George Nwokoro'],
          ],
          { width: 360 },
        ),
      ],
      ['Keys', keys(['Configure', 'Configure'])],
    ],
  }),

  sections: splits([
    {
      eyebrow: 'Key management',
      title: 'Protect sensitive keys with an appropriate key-management approach.',
      body: [
        'Azure Key Vault can provide a managed service for storing and controlling access to secrets and cryptographic keys. Discuss how Acumeet uses or plans to use a key vault in your deployment, including key access, rotation, permissions, and recovery.',
        'Clarify where secrets and keys are stored.',
        'Review access policies and administrative boundaries.',
        'Plan rotation and operational ownership.',
      ],
      cta: CONTACT('Discuss Azure Key Vault'),
      visual: keys(['Configure', 'Configure']),
    },
    {
      eyebrow: 'Bring your own key',
      title: 'Bring your organisation’s key-management requirements into the conversation.',
      body: [
        'Bring Your Own Key (BYOK) is a model in which a customer supplies or controls a key used in an agreed encryption workflow.',
        'Define key ownership and control boundaries.',
        'Review rotation, revocation, and recovery implications.',
        'Clarify what happens to data when keys are unavailable or deleted.',
      ],
      cta: CONTACT('Discuss BYOK'),
      visual: actions(5, secTasks(['May 9', 'Next week', 'May 19']), { width: 440 }),
    },
    {
      eyebrow: 'Security monitoring',
      title: 'Explore how Acumeet security events could fit your monitoring workflow.',
      body: [
        'Security Information and Event Management (SIEM) tools help organisations centralise and analyse security events. Discuss which Acumeet audit or security events can be exported, by what mechanism, and in what format for your monitoring environment.',
        'Map relevant events to monitoring requirements.',
        'Clarify event fields, delivery method, and retention.',
        'Align integration design with security operations.',
      ],
      cta: CONTACT('Discuss SIEM integration'),
      visual: audit(
        [
          ['10:25', 'Updated retention policy', 'Admin'],
          ['10:13', 'Viewed transcript', 'Ruth Godwin'],
          ['09:54', 'Shared meeting record', 'Warith Abraham'],
          ['09:45', 'Changed role to Admin', 'Admin'],
        ],
        { width: 440 },
      ),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Connect security controls to your operating model.'),
};
