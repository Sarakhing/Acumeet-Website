import { access, actions, audit, keys, retention, summary } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { cards, chapters, exploreSecurity, explorer, faq, HERO_ACTIONS, secBreadcrumb, secCta } from './security';

const members = [
  ['Faith Oluwale', 'Admin'],
  ['George Nwokoro', 'Owner'],
  ['Ruth Godwin', 'Viewer'],
  ['Warith Abraham', 'Member'],
];

const policy = (status, width = 350) =>
  retention(
    [
      ['Recordings', '180 days'],
      ['Transcripts', '2 years'],
      ['Summaries', '5 years'],
      ['Audit logs', '7 years'],
    ],
    { status, width },
  );

/** 06.04 · Data Security (Figma 48:325595). */
export default {
  breadcrumb: secBreadcrumb('Data security'),

  /** 01 · Hero + "Hero carousel · 06.04" (48:328239). */
  ...ringsHero({
    eyebrow: 'Data security',
    title: 'Protect meeting information throughout its journey.',
    lead: 'Meeting recordings, transcripts, summaries, and decisions can contain sensitive business information. Evaluate how data is protected in transit and at rest, how customer-managed key or storage options work, and how location requirements are handled in the selected Acumeet configuration.',
    ...HERO_ACTIONS,
    slides: [
      ['Keys', keys(['Configure', 'Configure'])],
      ['Retention', policy('All meetings')],
      ['Access', access(members, { width: 380 })],
    ],
  }),

  sections: [
    /** Chapters + "Chapters · Encryption" (48:328366) — 4 chapters. */
    chapters([
      [
        'Encryption',
        'Encryption',
        'Review the encryption controls applied to data in transit and at rest, including the relevant systems, protocols, key management responsibilities, and any exceptions.',
        keys(['Connected', 'Connected'], { width: 440 }),
      ],
      [
        'Customer-managed keys and storage',
        'Customer-managed keys and storage',
        'BYOK and BYOS can involve additional customer responsibilities and architecture requirements. Confirm supported providers, key or credential handling, supported data types, and current product availability.',
        actions(3, [
          ['Rotate the storage access keys', 'Today'],
          ['Review privileged role assignments', 'Jun 12'],
          ['Confirm MFA enforcement for admins', 'Fri'],
        ]),
      ],
      [
        'Data location and lifecycle',
        'Data location and lifecycle',
        'Data residency should be assessed alongside processing, backups, logs, and retention—not only the primary storage location. Confirm the documented data flows and applicable contractual commitments.',
        retention(
          [
            ['Recordings', '90 days'],
            ['Transcripts', '1 year'],
            ['Summaries', '3 years'],
            ['Audit logs', '7 years'],
          ],
          { status: 'Active', width: 440 },
        ),
      ],
      [
        'Key points',
        'Key points',
        {
          checks: [
            'Ask for the current data-flow and encryption documentation.',
            'Clarify customer and Acumeet responsibilities for keys and storage.',
            'Confirm data location, retention, and deletion behaviour by data type.',
          ],
        },
        summary('Access Review Meeting', [46, 71, 45], [
          'Security confirmed MFA is enforced for administrators.',
          'The access review found three stale accounts.',
        ]),
      ],
    ]),

    /** Encryption at rest + "Explorer · Protect stored data with…" (48:328568). */
    explorer(
      {
        eyebrow: 'Encryption at rest',
        title: 'Protect stored data with verified',
        accent: 'encryption controls.',
        lead: 'Encryption at rest helps protect stored information if the underlying storage media or files are accessed outside their intended boundary. Review which Acumeet data stores are encrypted, the applicable mechanisms, and how keys are managed.',
      },
      [
        [
          'Identify covered data stores',
          'Map the storage systems and data categories in scope, including files, transcripts, summaries, databases, backups, and logs where applicable.',
          policy('All meetings'),
        ],
        [
          'Understand key management',
          'Confirm who manages encryption keys, how keys are protected and rotated, and what responsibilities sit with Acumeet versus the customer.',
          keys(['Configure', 'Configure']),
        ],
        [
          'Document exceptions',
          'The published statement should match the actual architecture and identify material exceptions rather than implying that every data type is covered identically.',
          actions(
            4,
            [
              ['Rotate the storage access keys', 'Fri'],
              ['Review privileged role assignments', 'Next week'],
              ['Confirm MFA enforcement for admins', 'Jun 14'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Key points',
          'Request current encryption scope and evidence. Clarify key management and rotation responsibilities.',
          summary('Security Review', [47, 90, 42], [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ]),
        ],
      ],
    ),

    /** Encryption in transit — four cards. */
    cards(
      {
        eyebrow: 'Encryption in transit',
        title: 'Protect information as it moves',
        accent: 'between systems.',
        lead: 'Encryption in transit helps protect information exchanged between users, Acumeet components, and supported integrations. Confirm the protocols, endpoints, and data flows covered by the current implementation.',
      },
      [
        [
          'Map communication paths',
          'Identify user connections, service-to-service traffic, integrations, storage access, and third-party service calls that carry Acumeet data.',
        ],
        [
          'Verify protocol and certificate handling',
          'Confirm the approved transport protocols, minimum versions, certificate validation, and configuration for each relevant path.',
        ],
        [
          'Review external dependencies',
          'The security of an end-to-end workflow can depend on connected systems and customer configuration. Make those boundaries clear.',
        ],
        ['Key points', 'Include relevant integration and service boundaries. Review third-party and customer-managed paths.'],
      ],
    ),

    /** BYOK + "Explorer · Assess customer-managed key requirements…" (48:328904). */
    explorer(
      {
        eyebrow: 'BYOK',
        title: 'Assess customer-managed key requirements for',
        accent: 'your environment.',
        lead: 'Bring Your Own Key (BYOK) is relevant to organisations that need greater involvement in encryption-key management. Confirm which key providers and workflows Acumeet supports, how keys are protected and used, and what happens when a key is rotated, revoked, or unavailable.',
      },
      [
        [
          'Define the key-management model',
          'Establish who creates, owns, stores, rotates, and revokes keys; how Acumeet accesses them; and which data or operations are protected by the key.',
          keys(['Configure', 'Configure']),
        ],
        [
          'Protect key material and credentials',
          'Use the approved key-management service and access model.',
          access(members, { width: 380 }),
        ],
        [
          'Plan failure and lifecycle behaviour',
          'Confirm the effect of key rotation, revocation, permissions changes, or key-service outages on reading, writing, processing, and recovering data.',
          audit(
            [
              ['08:54', 'Downloaded recording', 'Fredelina Augustus'],
              ['08:46', 'Signed in via SSO', 'Ruth Godwin'],
              ['08:31', 'Applied legal hold', 'Admin'],
              ['08:09', 'Edited action item', 'George Nwokoro'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Key points',
          'Confirm supported key providers and product availability. Document key custody, access, rotation, and revocation. Test failure scenarios before production use.',
          summary('Architecture Review', [52, 65, 27], [
            'Security confirmed MFA is enforced for administrators.',
            'The access review found three stale accounts.',
          ]),
        ],
      ],
    ),

    /** BYOS — four cards. */
    cards(
      {
        eyebrow: 'BYOS',
        title: 'Evaluate customer-owned storage for',
        accent: 'meeting data.',
        lead: 'Bring Your Own Storage (BYOS) is intended for organisations that want to assess the use of their own storage environment for supported Acumeet data. Confirm supported providers, data flows, credentials, and operational responsibilities.',
      },
      [
        [
          'Confirm data coverage',
          'Identify which files or meeting artefacts are stored in customer-owned storage and which metadata, processing outputs, logs, or backups may remain elsewhere.',
        ],
        [
          'Secure the connection',
          'Confirm the approved access method, least-privilege permissions, credential or secret handling, and revocation process.',
        ],
        [
          'Define operational ownership',
          'Document responsibility for storage availability, backup, retention, deletion, monitoring, and incident response.',
        ],
        ['Key points', 'Confirm provider support and credential protection. Document lifecycle and recovery responsibilities.'],
      ],
    ),

    /** Data residency + "Explorer · Understand where information is stored…" (48:329231). */
    explorer(
      {
        eyebrow: 'Data residency',
        title: 'Understand where information is stored',
        accent: 'and processed.',
        lead: 'Data residency requirements should be assessed across the full data lifecycle. Identify the location of stored information and the locations where it may be processed, backed up, logged, or accessed for support.',
      },
      [
        [
          'Inventory data categories',
          'Consider recordings, uploaded files, transcripts, summaries, metadata, audit logs, telemetry, backups, and support records as distinct categories.',
          policy('All meetings'),
        ],
        [
          'Distinguish storage from processing',
          'A storage region does not by itself establish where all processing occurs. Map the services and subprocessors relevant to the selected deployment.',
          keys(['Configure', 'Configure']),
        ],
        [
          'Obtain documented confirmation',
          'Record approved locations, exceptions, retention behaviour, and applicable contractual commitments.',
          actions(
            5,
            [
              ['Rotate the storage access keys', 'Today'],
              ['Review privileged role assignments', 'Jun 12'],
              ['Confirm MFA enforcement for admins', 'Fri'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Key points',
          'Confirm locations by data category and service. Include backups, logs, and processing dependencies. Document exceptions and contractual commitments.',
          summary('Incident Response Sync', [57, 70, 52], [
            'Storage keys will be rotated this week.',
            'Security confirmed MFA is enforced for administrators.',
          ]),
        ],
      ],
    ),
  ],

  faq: faq([
    ['Is all Acumeet data encrypted?', 'Ask Acumeet for the current encryption scope and exceptions.'],
    [
      'Does BYOK mean Acumeet never handles keys?',
      'That depends on the implementation. Confirm key custody, key use, secret storage, and responsibilities with Acumeet.',
    ],
    [
      'Does BYOS keep all data in our storage?',
      'Not necessarily. Confirm the data types and supporting metadata, logs, processing, and backup locations for the selected configuration.',
    ],
    ['Are backups encrypted?', 'Confirm backup coverage and encryption controls separately.'],
    [
      'Are all third-party connections covered?',
      'Review each data path and dependency; do not assume every integration has identical controls.',
    ],
    ['Which key providers are supported?', 'Confirm the current supported providers and deployment configurations with Acumeet.'],
    [
      'What happens if a key is revoked?',
      'The behaviour depends on the design and must be documented before BYOK is used in production.',
    ],
    ['Which storage providers are supported?', 'Confirm the current supported providers and configurations with Acumeet.'],
    [
      'Does BYOS change backup responsibility?',
      'It may. Confirm backup, recovery, and availability responsibilities for each storage component.',
    ],
    ['Where is Acumeet data hosted?', 'The applicable locations must be confirmed for the chosen configuration by Acumeet.'],
  ]),

  /** Explore more — three cards in Figma. */
  related: exploreSecurity(['overview', 'zeroTrust', 'identityAccess']),

  cta: secCta('Protect meeting information throughout its journey.'),
};
