import { keys, retention } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { POLICY_ROWS } from '@/modules/07-trust-center/content/shared';
import { floatActions, floatDecisions, po } from './shared';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

const heroActions = floatActions(3, po(['Jun 15', 'Next week', 'Jun 25']));

/** 09.05 · Storage (Figma 48:385025). */
export default {
  breadcrumb: intBreadcrumb('Storage'),

  /** 01 · Hero (985): keys & storage (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Integrations  ·  Storage',
    title: 'Choose a storage approach that fits',
    accent: 'your requirements.',
    lead: 'Storage requirements differ across organisations. Explore the storage options listed here and work with Acumeet to confirm data paths, access controls, encryption, retention, and deployment-specific responsibilities.',
    primary: CONTACT('Discuss your storage requirements'),
    height: 985,
    copyHeight: 340,
    top: 482,
    gap: 46,
    items: [
      [230, 546, keys(['Manage', 'Connected'], { width: 400, shadow: 'float' }), 6],
      [
        807,
        546,
        floatDecisions(
          'Jun 9',
          ['Consolidate ERP sync alerts', 'Revisit the vendor approval cycle'],
          'Low supplier engagement on savings',
          ['KPIs', 'PO automation', 'Savings', 'Vendor onboarding'],
        ),
        -6,
      ],
      [520, 482, heroActions],
    ],
    compact: heroActions,
  }),

  sections: splits([
    {
      eyebrow: 'Object storage',
      title: 'Assess Azure Blob Storage for meeting-content storage workflows.',
      body: [
        'For environments using Azure Blob Storage, review the supported storage architecture and how meeting content may be stored, accessed, and governed. Confirm the exact configuration and account requirements for your Acumeet deployment.',
        'Evaluate storage location and access boundaries.',
        'Clarify data retention and deletion behaviour.',
        'Review operational and security responsibilities.',
      ],
      cta: CONTACT('Discuss Azure Blob Storage'),
      visual: keys(['Configure', 'Configure'], { width: 440 }),
    },
    {
      eyebrow: 'Bring your own storage',
      title: 'Keep storage decisions aligned with your organisation’s requirements.',
      body: [
        'Bring Your Own Storage (BYOS) is an approach in which an organisation uses its own storage environment for supported data. Confirm Acumeet’s available BYOS workflow, supported providers, key handling, and operational boundaries with the team.',
        'Review control over storage location and access.',
        'Clarify ownership of credentials and configuration.',
        'Define responsibilities for retention, deletion, and recovery.',
      ],
      cta: CONTACT('Discuss BYOS'),
      visual: retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Choose a storage approach that fits your requirements.'),
};
