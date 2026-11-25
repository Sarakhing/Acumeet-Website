import { ROUTES } from '@/constants/routes';
import { exploreIndustries, industryCta } from './industries';
import { actions, capture, decisions, explorerItems, fsBreadcrumb, heroCanvas, search, summary } from './detail';

/** 04.06 · Risk Committees (Figma 48:289571). */
export default {
  breadcrumb: fsBreadcrumb('Risk Committees'),

  /** 01 · Hero (48:289574) — 613 wash with hairlines, same composition as the Industries overview. */
  hero: {
    eyebrow: 'Risk Committees',
    eyebrowStyle: 'chip',
    pattern: 'hairlines',
    title: 'Keep Risk Discussions, Decisions and Actions Connected',
    titleSize: 54,
    copyWidth: 580,
    copyTop: 56,
    leadWidth: 540,
    lead: 'Acumeet helps risk teams document committee discussions, retain decision context and organise follow-up actions across risk management workflows.',
    visual: heroCanvas(
      526,
      [
        [
          140,
          46,
          decisions(
            'Jun 9',
            ['Raise the KRI threshold for failed transactions', 'Escalate the vendor risk finding to ExCo'],
            'Overdue remediation on payment controls',
            ['Risk register', 'KRIs', 'Controls', 'Third parties'],
            440,
          ),
        ],
        [
          260,
          186,
          actions(
            3,
            [
              ['Share the key risk indicator dashboard with ExCo', 'Fri'],
              ['Review third-party risk assessments due this month', 'Jun 20'],
              ['Schedule the incident root-cause review', 'May 25'],
            ],
            { width: 400, shadow: 'float' },
          ),
        ],
      ],
      680,
    ),
    visualWidth: 680,
    padBottom: 23,
  },

  /** Tabs explorer (48:289734) + "✓ Explorer · " (48:268568; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Document Risk Discussions',
        body: 'Create structured records of discussions about operational, enterprise and emerging risks so teams can revisit key points and agreed responses.',
        visual: summary('Risk Committee Meeting', [81, 76, 50], [
          'Owners will update remediation dates by Friday.',
          'Risk reported two control gaps closed since the last meeting.',
        ]),
      },
      {
        title: 'Track Mitigation Commitments',
        body: 'Capture action items, responsibilities and next steps associated with risk discussions, making follow-up easier to manage.',
        visual: actions(5, [
          ['Update the risk register with new operational risks', 'Today'],
          ['Confirm owners for overdue control remediation', 'Jun 12'],
          ['Share the key risk indicator dashboard with ExCo', 'Fri'],
        ]),
      },
      {
        title: 'Preserve Historical Context',
        body: 'Retrieve prior meeting-derived information to support continuity when risk matters return for review.',
        visual: search(
          'control remediation owner',
          [
            ['Risk & Compliance Forum', 'Apr 5', '…owners agreed for overdue control remediation.'],
            ['Control Assessment Review', 'May 14', '…vendor risk finding escalated to ExCo.'],
            ['Risk Committee Meeting', 'Jun 23', '…KRI thresholds reviewed for payment failures.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Risk Committee Workflows',
        body: 'Support enterprise risk reviews, operational risk discussions, incident reviews, mitigation planning and risk-related steering meetings.',
        visual: capture('Tue, Jun 14', [
          ['Operational Risk Review', '10:30 AM · Meet'],
          ['Risk & Compliance Forum', '11:00 AM · Teams'],
          ['Control Assessment Review', '3:30 PM · Zoom'],
        ]),
      },
    ]),
  },

  /** Split (48:289736) — knowledge search on a pink rings panel, visual left. */
  split: {
    size: 'compact',
    reverse: true,
    title: 'Complement Existing Risk Systems',
    body: [
      'Acumeet supports meeting intelligence and documentation. It does not replace formal risk assessment, monitoring or governance systems.',
    ],
    cta: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact Our Team', to: ROUTES.contactSales },
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: search(
        'control remediation owner',
        [
          ['Risk Committee Meeting', 'Jun 8', '…owners agreed for overdue control remediation.'],
          ['Operational Risk Review', 'Apr 17', '…vendor risk finding escalated to ExCo.'],
          ['Risk & Compliance Forum', 'May 26', '…KRI thresholds reviewed for payment failures.'],
        ],
        { width: 440 },
      ),
    },
  },

  /** Explore more (48:289772). */
  related: exploreIndustries(['complianceMeetings', 'fraudInvestigations', 'boardMeetings', 'auditMeetings'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Keep Risk Discussions, Decisions and Actions Connected'),
};
