import { access, keys, retention } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { keySummary, members, POLICY_ROWS } from './shared';
import {
  chapters,
  CONTACT,
  depBreadcrumb,
  depCta,
  exploreDeployment,
  faq,
  RELATED,
} from './deployment';

const TITLE = 'Explore customer-owned storage for meeting data.';

/** 10.05 · BYOS Deployment (Figma 48:393876). */
export default {
  breadcrumb: depBreadcrumb('BYOS deployment'),

  /** 01 · Hero + "Hero carousel · 10.05 · BYOS Deployment" (48:353285). */
  ...ringsHero({
    eyebrow: 'BYOS deployment',
    title: TITLE,
    lead: 'Bring Your Own Storage (BYOS) is intended for organisations that want to assess the use of their own storage environment for supported Acumeet data. Confirm supported providers, data flows, key handling, and responsibility boundaries before relying on BYOS in production.',
    primary: CONTACT('Discuss BYOS requirements'),
    secondary: CONTACT('Review storage architecture'),
    slides: [
      ['Keys', keys(['Configure', 'Configure'], { width: 560 })],
      ['Retention', retention(POLICY_ROWS, { status: 'All meetings', width: 350 })],
      ['Access', access(members, { width: 380 })],
    ],
  }),

  sections: [
    /** Chapters + "Chapters · Understand what is stored" (48:353408). */
    chapters([
      [
        'Understand what is stored',
        'Understand what is stored and where',
        'Map the data types involved, including meeting recordings or uploads, transcripts, summaries, and related artefacts. The exact data stored in customer-managed storage must be confirmed for the selected implementation.',
        keys(['Configure', 'Configure']),
      ],
      [
        'Define secure access',
        'Define secure access',
        'Review how Acumeet connects to the storage environment, how credentials or permissions are provided, how access is limited, and how secrets are protected and rotated. Never send storage credentials through ordinary email or unapproved channels.',
        access(members, { width: 380 }),
      ],
      [
        'Agree ownership and lifecycle',
        'Agree ownership and lifecycle',
        'Document who owns the storage account, who configures retention and deletion, how access is revoked, and which party is responsible for backup, availability, and recovery.',
        retention(
          [
            ['Recordings', '90 days'],
            ['Transcripts', '1 year'],
            ['Summaries', '3 years'],
            ['Audit logs', '7 years'],
          ],
          { status: 'Active', width: 460 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Make storage ownership and responsibilities explicit.',
            'Assess data flows, access, secrets, and lifecycle requirements.',
            'Confirm supported storage providers and production readiness with Acumeet.',
          ],
        },
        keySummary('Deployment Planning', [71, 66, 30], ['network', 'cutover']),
      ],
    ]),
  ],

  /** FAQ (48:393909). */
  faq: faq([
    [
      'Which storage providers are supported?',
      'Confirm the current supported providers and configurations with Acumeet.',
    ],
    [
      'Does BYOS mean all Acumeet data stays in our storage?',
      'That should not be assumed. Confirm which data types are stored in customer-owned storage and identify any metadata or processing that remains elsewhere.',
    ],
    [
      'How are storage credentials protected?',
      'The implementation should document the approved secret-management approach, access restrictions, rotation, and revocation. Confirm the current design with Acumeet Engineering.',
    ],
    [
      'Is BYOS available in production today?',
      'Availability and scope must be confirmed with Acumeet.',
    ],
  ]),

  related: exploreDeployment(RELATED),
  cta: depCta(TITLE),
};
