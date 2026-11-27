import { access, actions, audit, retention, search, summary } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { cards, chapters, exploreSecurity, explorer, faq, HERO_ACTIONS, secBreadcrumb, secCta } from './security';

const policy = (status, rows, width = 350) =>
  retention(
    rows ?? [
      ['Recordings', '180 days'],
      ['Transcripts', '2 years'],
      ['Summaries', '5 years'],
      ['Audit logs', '7 years'],
    ],
    { status, width },
  );

const adminSearch = (dates, width) =>
  search(
    'admin access review',
    [
      ['Access Review Meeting', dates[0], '…three stale admin accounts found.'],
      ['Incident Response Sync', dates[1], '…MFA enforced for all administrators.'],
      ['Architecture Review', dates[2], '…exports restricted to admin roles.'],
    ],
    { width },
  );

/** 06.07 · Data Lifecycle (Figma 48:326037). */
export default {
  breadcrumb: secBreadcrumb('Data lifecycle'),

  /** 01 · Hero + "Hero carousel · 06.07" (48:331458). */
  ...ringsHero({
    eyebrow: 'Data lifecycle',
    title: 'Define how meeting data is kept, moved, and removed.',
    lead: 'Data lifecycle controls establish how information is retained, archived, and deleted. Organisations should define policies for each data category and understand how those policies apply across Acumeet, connected services, customer-owned storage, logs, and backups.',
    ...HERO_ACTIONS,
    slides: [
      [
        'Retention',
        policy(
          'Legal hold',
          [
            ['Recordings', '90 days'],
            ['Transcripts', '1 year'],
            ['Summaries', '3 years'],
            ['Audit logs', '7 years'],
          ],
          560,
        ),
      ],
      [
        'Audit log',
        audit(
          [
            ['09:26', 'Downloaded recording', 'Fredelina Augustus'],
            ['09:20', 'Signed in via SSO', 'Ruth Godwin'],
            ['09:07', 'Applied legal hold', 'Admin'],
            ['08:47', 'Edited action item', 'George Nwokoro'],
          ],
          { width: 360 },
        ),
      ],
      ['Search', adminSearch(['May 4', 'Jun 13', 'Apr 22'], 460)],
    ],
  }),

  sections: [
    /** Chapters + "Chapters · Retention" (48:331576). */
    chapters([
      [
        'Retention',
        'Retention',
        'Define how long each data type is kept, which event starts the retention period, who can approve exceptions, and how legal or regulatory holds are handled.',
        policy(
          'HR',
          [
            ['Recordings', '30 days'],
            ['Transcripts', '6 months'],
            ['Summaries', '2 years'],
            ['Audit logs', '7 years'],
          ],
          440,
        ),
      ],
      [
        'Archiving',
        'Archiving',
        'Clarify whether archival is available, what data is eligible, how archived data is accessed, and whether archiving changes availability, cost, or deletion timing.',
        adminSearch(['Jun 24', 'Apr 7', 'May 16'], 460),
      ],
      [
        'Secure deletion',
        'Secure deletion',
        'Document how deletion is initiated, which copies and derivatives are included, how downstream systems are handled, and what limitations apply to backups or legal holds.',
        audit([
          ['10:23', 'Downloaded recording', 'Fredelina Augustus'],
          ['10:07', 'Signed in via SSO', 'Ruth Godwin'],
          ['10:01', 'Applied legal hold', 'Admin'],
          ['09:48', 'Edited action item', 'George Nwokoro'],
        ]),
      ],
      [
        'Policy ownership',
        'Policy ownership',
        'Assign responsibility for defining, approving, applying, and reviewing lifecycle policies. Confirm which policies are configurable and which are fixed by the service or contract.',
        actions(4, [
          ['Share the penetration test summary', 'Today'],
          ['Revoke access for leavers from last month', 'Jun 12'],
          ['Rotate the storage access keys', 'Fri'],
        ]),
      ],
      [
        'Key points',
        'Key points',
        {
          checks: [
            'Define policies by data type, not just by account.',
            'Account for derived data, logs, backups, and connected systems.',
            'Confirm deletion timing and exceptions in writing.',
          ],
        },
        summary('Incident Response Sync', [41, 66, 20], [
          'The access review found three stale accounts.',
          'Storage keys will be rotated this week.',
        ]),
      ],
    ]),

    /** Retention + "Explorer · Keep information for a defined…" (48:331846). */
    explorer(
      {
        eyebrow: 'Retention',
        title: 'Keep information for a defined and',
        accent: 'defensible period.',
        lead: 'Retention policies should reflect business needs, legal obligations, and data minimisation. Confirm which retention controls Acumeet supports and how they apply to recordings, transcripts, summaries, metadata, logs, and backups.',
      },
      [
        [
          'Set rules by data category',
          'Different types of meeting information may require different retention periods. Identify the data category, business purpose, retention trigger, and owner.',
          policy('All meetings'),
        ],
        [
          'Clarify policy enforcement',
          'Confirm whether retention is configurable by administrators, applied automatically, or governed by contractual/service defaults.',
          access(
            [
              ['Faith Oluwale', 'Admin'],
              ['George Nwokoro', 'Owner'],
              ['Ruth Godwin', 'Viewer'],
              ['Warith Abraham', 'Member'],
            ],
            { width: 380 },
          ),
        ],
        [
          'Manage exceptions',
          'Define how legal holds, investigations, customer requests, and policy exceptions are authorised, documented, and reviewed.',
          audit(
            [
              ['11:15', 'Viewed transcript', 'Ruth Godwin'],
              ['11:09', 'Shared meeting record', 'Warith Abraham'],
              ['10:56', 'Changed role to Admin', 'Admin'],
              ['10:36', 'Downloaded recording', 'Fredelina Augustus'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Key points',
          'Document data category, retention period, and policy owner. Confirm actual settings and enforcement behaviour. Review exceptions and downstream copies.',
          summary('Incident Response Sync', [48, 64, 24], [
            'Storage keys will be rotated this week.',
            'Security confirmed MFA is enforced for administrators.',
          ]),
        ],
      ],
    ),

    /** Archiving — four cards. */
    cards(
      {
        eyebrow: 'Archiving',
        title: 'Preserve information that must remain available',
        accent: 'for reference.',
        lead: 'Archiving can help organisations retain selected information for longer-term reference while separating it from everyday workflows. Confirm whether Acumeet supports archiving and how archived information is stored, accessed, and governed.',
      },
      [
        [
          'Define what can be archived',
          'Confirm which data types are eligible, who can initiate archiving, and whether archiving is automatic or administrator-controlled.',
        ],
        [
          'Understand access and retrieval',
          'Document who can retrieve archived information, how retrieval works, and whether access or response times differ from active data.',
        ],
        [
          'Align archive and retention rules',
          'Specify how long archived information remains available and how deletion, legal holds, and customer-owned storage affect the archive.',
        ],
        [
          'Key points',
          'Confirm archiving is a supported product capability. Clarify access, retrieval, retention, and deletion behaviour.',
        ],
      ],
    ),

    /** Secure deletion + "Explorer · Remove data through a defined…" (48:332169). */
    explorer(
      {
        eyebrow: 'Secure deletion',
        title: 'Remove data through a defined and',
        accent: 'verifiable process.',
        lead: 'Secure deletion should account for the original data and relevant copies, derived artefacts, metadata, and downstream systems. Confirm Acumeet’s deletion workflow, timing, verification, and any limitations before making specific guarantees.',
      },
      [
        [
          'Define the deletion request',
          'Identify who can request deletion, what data is in scope, what approval is required, and how the request is tracked.',
          actions(
            4,
            [
              ['Review privileged role assignments', 'Jun 12'],
              ['Confirm MFA enforcement for admins', 'Fri'],
              ['Share the penetration test summary', 'Next week'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Map copies and dependencies',
          'Consider recordings, uploaded files, transcripts, summaries, embeddings or indexes where applicable, logs, exports, connected services, customer-owned storage, and backups.',
          policy('All meetings'),
        ],
        [
          'Document timing and exceptions',
          'Confirm when deletion is completed, what happens to backups, how legal holds or technical constraints apply, and what confirmation can be provided.',
          audit(
            [
              ['10:09', 'Applied legal hold', 'Admin'],
              ['10:02', 'Edited action item', 'George Nwokoro'],
              ['09:48', 'Approved redactions', 'Faith Oluwale'],
              ['09:27', 'Exported summary', 'George Nwokoro'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Key points',
          'Define deletion scope and exceptions clearly. Confirm key-destruction behaviour separately if relevant.',
          summary('Access Review Meeting', [53, 69, 49], [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ]),
        ],
      ],
    ),

    /** Data lifecycle policies — four cards. */
    cards(
      {
        eyebrow: 'Data lifecycle policies',
        title: 'Turn data-handling requirements into clear',
        accent: 'operating rules.',
        lead: 'A data lifecycle policy connects retention, access, archiving, deletion, and exception handling to an accountable owner. Define the rules for each relevant data category and verify which controls Acumeet can enforce directly.',
      },
      [
        [
          'Create a policy inventory',
          'List the data categories, business purposes, owners, retention requirements, access rules, and deletion expectations.',
        ],
        [
          'Map policy to product controls',
          'For each rule, identify whether it is enforced through Acumeet configuration, an identity provider, customer-owned storage, a connected system, or an operational process.',
        ],
        [
          'Review and evidence compliance',
          'Assign owners to review policies, test enforcement, handle exceptions, and retain evidence of relevant changes and approvals.',
        ],
        [
          'Key points',
          'Make policy ownership explicit. Separate product-enforced controls from manual processes. Review the policy after material product or regulatory changes.',
        ],
      ],
    ),
  ],

  faq: faq([
    ['Can we configure retention periods?', 'The available retention settings and scope must be confirmed with Acumeet.'],
    [
      'Does deleting a meeting delete every copy immediately?',
      'Confirm deletion behaviour, propagation, and exceptions for the relevant data types.',
    ],
    [
      'Does archiving equal deletion?',
      'No. Archiving generally preserves information for later access; deletion is a separate lifecycle action.',
    ],
    ['Can administrators set custom retention periods?', 'The supported configuration options must be confirmed with Acumeet.'],
    [
      'Are logs and backups covered by the same retention policy?',
      'Not necessarily. Confirm retention separately for each relevant data category.',
    ],
    ['Does Acumeet currently support archiving?', 'Confirm current availability and scope with Acumeet.'],
    [
      'Is archived data automatically deleted later?',
      'Only if the configured policy and supported behaviour establish that outcome; confirm it with Acumeet.',
    ],
    [
      'Is deletion immediate?',
      'Timing varies by data type and system. Acumeet should confirm the applicable process and any backup or legal-hold exceptions.',
    ],
    ['Does deleting a meeting remove derived summaries too?', 'Confirm the deletion scope for each related artefact and downstream copy.'],
    ['Can we obtain deletion confirmation?', 'Available confirmation or audit evidence must be confirmed with Acumeet.'],
    [
      'Can Acumeet enforce our internal data lifecycle policy?',
      'The enforceable controls and configuration options must be mapped and confirmed with Acumeet.',
    ],
    [
      'Who is responsible for lifecycle policy compliance?',
      'Responsibility depends on the applicable contract, configuration, law, and organisation’s role. Agree ownership with relevant stakeholders.',
    ],
  ]),

  related: exploreSecurity(['overview', 'zeroTrust', 'identityAccess', 'dataSecurity']),

  cta: secCta('Define how meeting data is kept, moved, and removed.'),
};
