import { access, actions, atlas, audit, redaction, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { cards, exploreSecurity, explorer, faq, HERO_ACTIONS, info, secBreadcrumb, secCta } from './security';

const members = [
  ['Faith Oluwale', 'Admin'],
  ['George Nwokoro', 'Owner'],
  ['Ruth Godwin', 'Viewer'],
  ['Warith Abraham', 'Member'],
];

const contract = (count, match, width = 440) =>
  redaction(
    count,
    ['Send the contract to', '[EMAIL_ADDRESS]', 'and copy', '[PERSON_NAME]', 'on account', '[ACCOUNT_NUMBER]'],
    [
      ['Email address', '100%'],
      ['Account number', match],
    ],
    { width },
  );

/** 06.05 · AI Security (Figma 48:325695). */
export default {
  breadcrumb: secBreadcrumb('AI Security'),

  /** 01 · Hero (668 tall): redaction review in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'AI Security',
    title: 'Build safeguards around sensitive',
    accent: 'meeting content.',
    lead: 'AI can help organisations extract useful knowledge from meetings, but meeting data may contain personal, confidential, or regulated information. Review the safeguards, processing sequence, governance, and human oversight relevant to your Acumeet configuration.',
    ...HERO_ACTIONS,
    window: contract(3, '85%', 500),
    overlay: actions(
      3,
      [
        ['Review privileged role assignments', 'Fri'],
        ['Confirm MFA enforcement for admins', 'Jun 2'],
        ['Share the penetration test summary', 'May 7'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 295,
    height: 668,
  }),

  sections: [
    /** 02 · Redaction and sensitive information. */
    info(
      'Redaction and sensitive information',
      'AI redaction and sensitive-data protection should be assessed in terms of what is detected, when it is processed, what is removed or masked, and where limitations remain.',
    ),

    /** Tabs explorer + "Explorer · " (48:329531) — no overline, 3 tabs. */
    explorer(
      {
        titleSize: 44,
        title: 'Govern how AI handles meeting content',
        lead: 'What to define about processing before storage and AI governance, and what to confirm with Acumeet.',
      },
      [
        [
          'Processing before storage',
          'If processing occurs before storage, define exactly which data is processed, what is stored afterward, and what temporary copies or downstream dependencies exist. Confirm the implemented sequence with Engineering.',
          contract(5, '91%'),
        ],
        [
          'AI governance',
          'Define appropriate use, access, human review, quality checks, risk assessment, and accountability for AI-generated outputs. AI-generated summaries and extracted actions should be reviewed where accuracy or consequences matter.',
          access(members, { width: 380 }),
        ],
        [
          'Key points',
          'Explain the supported redaction scope and limitations. Set expectations for AI output review and governance.',
          summary('Architecture Review', [67, 65, 47], [
            'Security confirmed MFA is enforced for administrators.',
            'The access review found three stale accounts.',
          ]),
        ],
      ],
    ),

    /** AI redaction — four cards. */
    cards(
      {
        eyebrow: 'AI redaction',
        title: 'Reduce exposure of sensitive information in',
        accent: 'meeting workflows.',
        lead: 'AI redaction can help identify and mask selected sensitive information in supported meeting content. Understand what categories are covered, when redaction runs, how results are reviewed, and what limitations apply.',
      },
      [
        [
          'Define the redaction scope',
          'Confirm which data types and sensitive-information categories are supported, including any language, format, or context limitations.',
        ],
        [
          'Understand when redaction happens',
          'Document whether processing applies to live capture, uploaded media, transcripts, stored artefacts, or only specific stages.',
        ],
        [
          'Review quality and exceptions',
          'Test representative cases, including false positives and missed detections. Establish a process for reporting issues and reviewing high-impact content.',
        ],
        [
          'Key points',
          'Specify supported categories and workflow stages. Provide a clear explanation of limitations and review expectations.',
        ],
      ],
    ),

    /** Sensitive data protection + "Explorer · Treat sensitive meeting information with care" (48:329795). */
    explorer(
      {
        eyebrow: 'Sensitive data protection',
        title: 'Treat sensitive meeting information',
        accent: 'with care.',
        lead: 'Meeting content can include personal information, confidential strategy, financial information, and other sensitive material. Assess how Acumeet handles sensitive content and how your organisation should configure access, processing, and governance.',
      },
      [
        [
          'Identify sensitive content',
          'Define the types of information your organisation considers sensitive and which meeting workflows are likely to contain it.',
          contract(4, '84%'),
        ],
        [
          'Apply layered safeguards',
          'Consider access permissions, approved use, redaction where supported, secure integration practices, retention, and user training as complementary controls.',
          access(members, { width: 380 }),
        ],
        [
          'Review responsibilities',
          'Confirm which safeguards are provided by Acumeet, which depend on customer configuration, and which remain organisational responsibilities.',
          actions(
            5,
            [
              ['Share the penetration test summary', 'Jun 9'],
              ['Revoke access for leavers from last month', 'Today'],
              ['Rotate the storage access keys', 'Jun 12'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Key points',
          'Map customer and provider responsibilities. Align technical controls with policy and user training.',
          summary('Access Review Meeting', [66, 91, 25], [
            'Storage keys will be rotated this week.',
            'Security confirmed MFA is enforced for administrators.',
          ]),
        ],
      ],
    ),

    /** Pre-storage processing — four cards. */
    cards(
      {
        eyebrow: 'Pre-storage processing',
        title: 'Understand what happens before information',
        accent: 'is stored.',
        lead: 'Where a workflow processes meeting content before storage, the sequence matters. Confirm which inputs are processed, which outputs are retained, whether temporary copies exist, and which downstream services are involved.',
      },
      [
        [
          'Map the exact processing flow',
          'Document the journey from meeting or file ingestion through transcription, redaction, AI processing, storage, and downstream integrations as applicable.',
        ],
        [
          'Identify transient and retained data',
          'Distinguish temporary processing from persistent storage. Confirm caches, queues, logs, error traces, backups, and any other copies that may be created.',
        ],
        [
          'Describe only verified behaviour',
          'Use an approved data-flow diagram and feature specification to explain the implemented sequence.',
        ],
        ['Key points', 'Use an approved data-flow diagram. Identify temporary copies and logging paths.'],
      ],
    ),

    /** AI governance + "Explorer · Make AI use understandable…" (48:330129). */
    explorer(
      {
        eyebrow: 'AI governance',
        title: 'Make AI use understandable, reviewable,',
        accent: 'and accountable.',
        lead: 'AI governance connects technology to policy, accountability, and appropriate human oversight. Establish how AI-generated meeting outputs are used, reviewed, accessed, and evaluated in your organisation.',
      },
      [
        [
          'Define intended use',
          'Identify which workflows use AI, the expected outcomes, and the decisions that should not rely on AI output alone.',
          atlas({
            question: 'What changed in our supplier engagement this month?',
            answer: [
              'Across 3 meetings, the team linked ',
              { b: 'low supplier engagement to missed savings' },
              ' and agreed a ',
              { b: 'monthly supplier review' },
              '.',
            ],
            quote: {
              name: 'Fredelina Augustus',
              time: '09:12',
              text: '“We’re missing savings because suppliers aren’t engaging with the new process.”',
            },
            sources: ['Strategy Review · 09:12', 'Stand-up · 21:40'],
            prompts: ['Compare with last month', 'Who owns the review?'],
          }),
        ],
        [
          'Set oversight and accountability',
          'Assign owners for evaluating output quality, addressing errors, reviewing sensitive or high-impact results, and managing user feedback.',
          actions(
            4,
            [
              ['Rotate the storage access keys', 'Jun 9'],
              ['Review privileged role assignments', 'Today'],
              ['Confirm MFA enforcement for admins', 'Jun 12'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Assess change and risk',
          'Review changes to models, prompts, processing flows, integrations, and product behaviour for their impact on accuracy, privacy, security, and compliance.',
          audit(
            [
              ['10:38', 'Edited action item', 'George Nwokoro'],
              ['10:16', 'Approved redactions', 'Faith Oluwale'],
              ['10:04', 'Exported summary', 'George Nwokoro'],
              ['09:45', 'Updated retention policy', 'Admin'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Key points',
          'Explain what AI does and does not do. Keep human accountability for important decisions. Review quality, changes, and risks over time.',
          summary('Security Review', [71, 66, 50], [
            'The access review found three stale accounts.',
            'Storage keys will be rotated this week.',
          ]),
        ],
      ],
    ),
  ],

  faq: faq([
    [
      'Does AI redaction remove every sensitive detail?',
      'No redaction system should be represented as perfect without evidence. Explain the supported detection scope, limitations, and any required human review.',
    ],
    [
      'Can AI outputs be relied on without review?',
      'AI-generated outputs may be incomplete or inaccurate. Review important decisions, actions, and regulated content according to organisational policy.',
    ],
    ['What can AI Redaction identify?', 'The supported categories and content types must be confirmed against the current feature specification.'],
    [
      'Can redaction miss sensitive information?',
      'AI-based detection can have limitations. Organisations should test relevant scenarios and apply appropriate review controls.',
    ],
    ['Does Acumeet automatically detect all sensitive data?', 'Confirm the supported detection scope and limitations.'],
    [
      'Can we control which users access sensitive meetings?',
      'Review the available permissions and access controls with Acumeet and validate the configuration for your use case.',
    ],
    [
      'Does pre-storage processing mean raw data is never stored?',
      'Not necessarily. The exact sequence and all temporary or persistent copies must be confirmed with Acumeet.',
    ],
    ['Does every meeting workflow use this sequence?', 'Confirm which workflows, data types, and deployment configurations are covered.'],
    [
      'Are AI-generated summaries always accurate?',
      'No. AI outputs can omit context or contain errors. Important information should be reviewed by an accountable person.',
    ],
    [
      'Does AI Governance mean Acumeet is certified to an AI standard?',
      'No certification should be implied unless separately verified and approved.',
    ],
    ['Can customers define their own AI policies?', 'The available configuration and governance controls must be confirmed with Acumeet.'],
  ]),

  related: exploreSecurity(['overview', 'zeroTrust', 'identityAccess', 'dataSecurity']),

  cta: secCta('Build safeguards around sensitive meeting content.'),
};
