import { actions, keys, retention, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { POLICY_ROWS } from './shared';
import { BOOK_DEMO, chapters, exploreTrust, faq, REQUEST, tcBreadcrumb } from './trust-center';

const TITLE = 'Make data location a defined deployment requirement.';

/** 07.06 · Data Residency (Figma 48:338502). */
export default {
  breadcrumb: tcBreadcrumb('Data Residency'),

  /** 01 · Hero (765 tall): keys & storage in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Data Residency',
    title: 'Make data location a defined',
    accent: 'deployment requirement.',
    lead: 'Data residency requirements should be discussed before implementation, not after rollout. Work with Acumeet to identify the data types involved, applicable locations, processing dependencies, and the evidence your organisation needs for approval.',
    primary: REQUEST('Discuss data residency'),
    secondary: REQUEST('Request a data-handling review'),
    window: keys(['Configure', 'Configure'], { width: 500 }),
    overlay: actions(
      3,
      [
        ['Review privileged role assignments', 'Fri'],
        ['Confirm MFA enforcement for admins', 'May 20'],
        ['Share the penetration test summary', 'Jun 25'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 412,
    height: 765,
  }),

  sections: [
    /** Chapters + "Chapters · Map the data lifecycle" (48:340354) — 4 chapters. */
    chapters([
      [
        'Map the data lifecycle',
        'Map the data lifecycle',
        'Identify where recordings, uploaded files, transcripts, summaries, metadata, logs, backups, and support data are stored or processed. The precise data map must be confirmed for the selected configuration.',
        retention(POLICY_ROWS, { status: 'Customer calls', width: 460 }),
      ],
      [
        'Distinguish storage from processing',
        'Distinguish storage from processing',
        'Data stored in one location may be processed by services in another. Review both storage and processing locations, including subprocessors and operational dependencies, as relevant to your requirements.',
        keys(['Configure', 'Configure']),
      ],
      [
        'Document the agreed position',
        'Document the agreed position',
        'Record applicable regions, exclusions, exceptions, retention and deletion behaviour, backup handling, and any contractual commitments.',
        actions(
          3,
          [
            ['Review privileged role assignments', 'Jun 12'],
            ['Confirm MFA enforcement for admins', 'Fri'],
            ['Share the penetration test summary', 'Next week'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Identify the data types and locations that matter to your policy.',
            'Assess storage and processing separately.',
            'Obtain written confirmation of applicable regions and exceptions.',
          ],
        },
        summary(
          'Architecture Review',
          [70, 77, 23],
          [
            'Security confirmed MFA is enforced for administrators.',
            'The access review found three stale accounts.',
          ],
          { width: 460 },
        ),
      ],
    ]),
  ],

  faq: faq([
    [
      'Where is Acumeet customer data stored?',
      'The applicable location depends on the service configuration and must be confirmed by Acumeet. Contact the team with your required region and data categories.',
    ],
    [
      'Does data residency also cover backups and logs?',
      'These should be considered separately in the data map. Ask Acumeet to confirm the locations and handling of backups, logs, telemetry, and support data.',
    ],
    [
      'Can we require data to remain in a specific country or region?',
      'Share the requirement during assessment. Acumeet must confirm whether it can be met and document any limitations or exceptions.',
    ],
    [
      'Does customer-owned storage guarantee data residency?',
      'Not by itself. Processing, metadata, logs, backups, and other dependencies may also matter.',
    ],
  ]),

  related: exploreTrust(['subprocessors', 'securityArchitecture', 'policies', 'certifications']),

  /** This page uses the Security-style CTA: headline, blank sub-line, one button. */
  cta: { title: TITLE, lead: ' ', primary: BOOK_DEMO, secondary: null },
};
