import { exploreIndustries, industryCta } from './industries';
import { actions, capture, decisions, explorerItems, fsBreadcrumb, heroCanvas, NOTE_CTAS, search, summary } from './detail';

const heroDecisions = (width) =>
  decisions(
    'May 26',
    ['Reprice the SME property cover', 'Add a second review for high-value claims'],
    'Rising loss ratio on motor policies',
    ['Loss ratio', 'Brokers', 'Pricing', 'Claims'],
    width,
  );

/** 04.03 · Insurance (Figma 48:288221). */
export default {
  breadcrumb: fsBreadcrumb('Insurance'),

  /**
   * 01 · Hero (48:288224) — centred light wash, 955 tall. Cards sit on a 1280
   * canvas starting at 1440-frame (80, 427); phones get the decisions card only.
   */
  hero: {
    variant: 'centered',
    eyebrow: 'Insurance',
    title: 'Make Insurance Meetings More Structured and Actionable',
    lead: 'Acumeet helps insurance teams document discussions, preserve decisions and organise follow-up actions across claims, underwriting, broker relationships and customer strategy.',
    visual: heroCanvas(
      508,
      [
        [400, 0, heroDecisions(480)],
        [
          30,
          56,
          actions(
            3,
            [
              ['Confirm reinsurance treaty renewal timeline', 'Jun 6'],
              ['Share broker commission reconciliation', 'May 11'],
              ['Update the fraud referral checklist', 'Today'],
            ],
            { width: 380, shadow: 'float' },
          ),
        ],
        [
          870,
          120,
          search(
            'claims triage threshold',
            [
              ['Underwriting Review', 'Jun 15', '…agreed the claims triage threshold for fast-track approval.'],
              ['Product Pricing Forum', 'Apr 24', '…loss ratio trend discussed with Underwriting.'],
              ['Broker Partnerships Sync', 'May 7', '…second review required for high-value claims.'],
            ],
            { width: 380, shadow: 'float' },
          ),
        ],
      ],
      1280,
    ),
    visualWidth: 1280,
    visualCompact: heroDecisions(480),
    visualCompactWidth: 480,
  },

  /** Tabs explorer (48:289360) + "✓ Explorer · " (48:267558; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Keep Complex Discussions Organised',
        body: 'Insurance workflows bring together claims teams, underwriters, brokers, operations and customer-facing teams. Structured meeting records help preserve what was discussed and what needs to happen next.',
        visual: summary('Claims Review Committee', [65, 72, 18], [
          'Underwriting flagged rising losses on motor policies.',
          'The committee agreed to review pricing next month.',
        ]),
      },
      {
        title: 'Capture Decisions and Commitments',
        body: 'Summaries and action items can help teams record decisions, outstanding questions, assigned responsibilities and customer or broker follow-ups.',
        visual: actions(4, [
          ['Share broker commission reconciliation', 'Today'],
          ['Update the fraud referral checklist', 'Jun 12'],
          ['Circulate the updated claims triage criteria', 'Fri'],
        ]),
      },
      {
        title: 'Maintain Context Across Teams',
        body: 'Make meeting-derived information easier to revisit across ongoing claims, policy servicing, renewal planning and operational reviews.',
        visual: search(
          'claims triage threshold',
          [
            ['Product Pricing Forum', 'Jun 17', '…agreed the claims triage threshold for fast-track approval.'],
            ['Broker Partnerships Sync', 'Apr 26', '…loss ratio trend discussed with Underwriting.'],
            ['Claims Review Committee', 'May 9', '…second review required for high-value claims.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Insurance Workflows',
        body: 'Support claims review meetings, underwriting discussions, broker meetings, policy and renewal planning, customer service reviews and internal business planning.',
        visual: capture('Fri, Jun 12', [
          ['Underwriting Review', '11:00 AM · Zoom'],
          ['Product Pricing Forum', '3:30 PM · Meet'],
          ['Broker Partnerships Sync', '10:30 AM · Teams'],
        ]),
      },
    ]),
  },

  /** 06 · Use Appropriate Information Safeguards (48:289362). */
  note: {
    title: 'Use Appropriate Information Safeguards',
    body: 'Insurance meetings may involve confidential customer or claim information. Follow internal policies and validate Acumeet’s available access, retention and data-handling controls before processing sensitive information.',
    ctas: NOTE_CTAS,
  },

  /** Explore more (48:289371) — "Keep exploring" shown. */
  related: exploreIndustries(['executiveMeetings', 'creditCommittees', 'riskCommittees', 'complianceMeetings'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Make Insurance Meetings More Structured and Actionable'),
};
