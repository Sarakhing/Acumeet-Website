import { access, actions, analytics, audit, CONNECTED, decisions, integrations, redaction, summary } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { cards, exploreSecurity, explorer, faq, HERO_ACTIONS, secBreadcrumb, secCta } from './security';

const heroActions = actions(
  5,
  [
    ['Share the audit status report with the committee', 'Fri'],
    ['Schedule the IT general controls walkthrough', 'May 23'],
    ['Close out last quarter’s low-risk findings', 'Today'],
  ],
  { width: 400, shadow: 'float' },
);

/** 06.06 · Audit & Monitoring (Figma 48:325863). */
export default {
  breadcrumb: secBreadcrumb('Audit & monitoring'),

  /** 01 · Hero (910 tall): audit log (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Audit & monitoring',
    title: 'Make relevant activity easier to review',
    accent: 'and investigate.',
    lead: 'Audit and monitoring capabilities can help teams understand activity, identify operational or security concerns, and support investigation. Confirm which events are recorded, how long they are retained, and which monitoring or SIEM integrations are supported.',
    ...HERO_ACTIONS,
    height: 910,
    copyHeight: 368,
    top: 508,
    gap: 44,
    items: [
      [
        230,
        572,
        audit(
          [
            ['10:36', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:21', 'Applied legal hold', 'Admin'],
            ['09:59', 'Edited action item', 'George Nwokoro'],
            ['09:47', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        572,
        decisions(
          'May 30',
          ['Request management responses by Friday', 'Extend the remediation date for finding 3'],
          'Incomplete evidence for access reviews',
          ['Controls', 'Findings', 'Evidence', 'Remediation'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 508, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** Tabs explorer + "Explorer · " (48:330472) — no overline. */
    explorer(
      {
        titleSize: 44,
        title: 'Make activity visible and reviewable',
        lead: 'How auditability, monitoring and alerting, and SIEM integration work together.',
      },
      [
        [
          'Auditability',
          'Identify the user, administrative, access, configuration, and data-related events recorded by Acumeet. Confirm event detail, timestamps, actor attribution, retention, export, and access controls.',
          audit(
            [
              ['08:56', 'Applied legal hold', 'Admin'],
              ['08:39', 'Edited action item', 'George Nwokoro'],
              ['08:32', 'Approved redactions', 'Faith Oluwale'],
              ['08:18', 'Exported summary', 'George Nwokoro'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Monitoring and alerting',
          'Define which events or conditions are monitored, what triggers an alert, who receives it, and how an alert becomes an actionable response.',
          analytics('This quarter', [91, 49, 45], { width: 350 }),
        ],
        [
          'SIEM integration',
          'Where supported, SIEM integration can help route selected security events into an organisation’s monitoring workflows. Confirm the supported integration method, event schema, delivery behaviour, and scope.',
          integrations(CONNECTED, 6),
        ],
        [
          'Key points',
          'Distinguish recorded logs from real-time security monitoring.',
          summary(
            'Audit Walkthrough',
            [76, 71, 35],
            ['Internal Audit reported two findings closed this quarter.', 'Evidence is outstanding for the access review finding.'],
            { width: 480 },
          ),
        ],
      ],
    ),

    /** Immutable audit logs — four cards. */
    cards(
      {
        eyebrow: 'Immutable audit logs',
        title: 'Preserve a reliable record of',
        accent: 'important activity.',
        lead: 'Audit logs can help teams reconstruct relevant actions and support investigations. If logs are described as immutable, the underlying design must prevent or detect unauthorised alteration for the stated scope.',
      },
      [
        [
          'Define logged events',
          'Document which user, administrator, access, configuration, and data lifecycle events are captured, including actor, timestamp, outcome, and relevant context.',
        ],
        [
          'Verify integrity protections',
          'Confirm whether logs are append-only, cryptographically protected, stored under restricted permissions, or protected by another mechanism.',
        ],
        [
          'Control access and retention',
          'Define who can view, export, administer, and retain logs, and how log access itself is audited.',
        ],
        ['Key points', 'Explain the integrity mechanism accurately. Confirm retention, export, and access restrictions.'],
      ],
    ),

    /** SIEM + "Explorer · Bring supported Acumeet events…" (48:330809). */
    explorer(
      {
        eyebrow: 'SIEM',
        title: 'Bring supported Acumeet events into your',
        accent: 'security workflow.',
        lead: 'A SIEM integration can help security teams centralise and correlate selected events from supported systems. Confirm how Acumeet can provide events, which data is included, and how delivery and access are secured.',
      },
      [
        [
          'Confirm supported integration paths',
          'Determine whether events are available through a native connector, API, export, webhook, or another supported mechanism.',
          integrations(CONNECTED, 6),
        ],
        [
          'Define event scope and format',
          'Confirm event types, schema, timestamps, identifiers, filtering, delivery frequency, and any data minimisation requirements.',
          audit(
            [
              ['11:38', 'Downloaded recording', 'Fredelina Augustus'],
              ['11:17', 'Signed in via SSO', 'Ruth Godwin'],
              ['11:06', 'Applied legal hold', 'Admin'],
              ['10:48', 'Edited action item', 'George Nwokoro'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Secure and monitor delivery',
          'Establish authentication, permissions, failure handling, monitoring, and ownership for the integration.',
          access(
            [
              ['Faith Oluwale', 'Owner'],
              ['George Nwokoro', 'Admin'],
              ['Ruth Godwin', 'Member'],
              ['Warith Abraham', 'Viewer'],
            ],
            { width: 380 },
          ),
        ],
        [
          'Key points',
          'Clarify delivery method and event coverage. Protect event payloads and credentials.',
          summary(
            'Remediation Follow-up',
            [81, 76, 20],
            ['Management responses are due before the next committee.', 'Internal Audit reported two findings closed this quarter.'],
            { width: 480 },
          ),
        ],
      ],
    ),

    /** Security monitoring — four cards. */
    cards(
      {
        eyebrow: 'Security monitoring',
        title: 'Understand how security-relevant activity',
        accent: 'is observed.',
        lead: 'Security monitoring helps teams review relevant events and conditions for potential issues. Confirm which components and activities are monitored, what signals are collected, and how findings are triaged.',
      },
      [
        [
          'Define the monitoring scope',
          'Identify the applications, infrastructure, integrations, identity events, and operational signals covered by the monitoring programme.',
        ],
        [
          'Separate telemetry from security evidence',
          'Not every metric or application log is a security alert. Document how signals are classified, retained, reviewed, and escalated.',
        ],
        [
          'Clarify response ownership',
          'Confirm who investigates alerts, what escalation process applies, and which response commitments are part of the service arrangement.',
        ],
        ['Key points', 'Describe scope and limits clearly. Explain escalation and responsibility boundaries.'],
      ],
    ),

    /** Alerting + "Explorer · Route important signals…" (48:331145). */
    explorer(
      {
        eyebrow: 'Alerting',
        title: 'Route important signals to the people',
        accent: 'who can act.',
        lead: 'Alerts are useful when they are tied to defined conditions, assigned to an owner, and connected to a response process. Confirm which alerts Acumeet supports and how administrators configure recipients and thresholds.',
      },
      [
        [
          'Define alert conditions',
          'Identify supported triggers, thresholds, severity levels, and whether the alert is security-related, operational, or usage-related.',
          analytics('Last 30 days', [80, 26, 61], { width: 350 }),
        ],
        [
          'Set recipients and escalation',
          'Confirm who can configure alerts, where notifications are delivered, and how missed or unacknowledged alerts are escalated.',
          actions(
            4,
            [
              ['Confirm remediation date for finding 3', 'Today'],
              ['Share the audit status report with the committee', 'Jun 12'],
              ['Schedule the IT general controls walkthrough', 'Fri'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Reduce noise and protect information',
          'Tune alert rules where supported and avoid placing sensitive meeting content or credentials in notification messages.',
          redaction(
            6,
            ['The salary review for', '[PERSON_NAME]', 'is set at', '[SALARY_AMOUNT]', 'effective', '[DATE]'],
            [
              ['Salary amount', '97%'],
              ['Person name', '90%'],
            ],
          ),
        ],
        [
          'Key points',
          'Define ownership and escalation for each alert.',
          summary(
            'Internal Audit Status Review',
            [41, 81, 45],
            ['Evidence is outstanding for the access review finding.', 'Management responses are due before the next committee.'],
            { width: 480 },
          ),
        ],
      ],
    ),
  ],

  faq: faq([
    ['Are audit logs immutable?', 'Immutability is a specific technical property.'],
    ['Can Acumeet send logs to our SIEM?', 'SIEM integration and supported event types must be confirmed with Acumeet.'],
    [
      'Does monitoring guarantee detection of every threat?',
      'No monitoring system can guarantee detection of every threat. Describe the verified scope and response process.',
    ],
    [
      'What makes an audit log immutable?',
      'The term should be used only when supported by a verified design that prevents or detects unauthorised alteration within the stated scope.',
    ],
    ['Can customers export audit logs?', 'Export capability, format, and permissions must be confirmed with Acumeet.'],
    ['Which SIEM platforms are supported?', 'Confirm currently supported platforms and integration methods with Acumeet.'],
    [
      'Are all audit events sent to the SIEM?',
      'Event coverage depends on the supported integration and configuration. Confirm the event catalogue.',
    ],
    ['Does monitoring mean incidents are prevented?', 'Monitoring can support detection and response but does not eliminate all risk.'],
    ['Which alert channels are supported?', 'Supported channels and configuration options must be confirmed with Acumeet.'],
    ['Can alerts be sent to a SIEM or ticketing system?', 'Confirm supported integrations, event formats, and delivery behaviour.'],
  ]),

  related: exploreSecurity(['overview', 'zeroTrust', 'identityAccess', 'dataSecurity']),

  cta: secCta('Make relevant activity easier to review and investigate.'),
};
