import { exploreIndustries, industryCta } from './industries';
import {
  actions,
  appWindow,
  capture,
  decisions,
  disclaimer,
  explorerItems,
  floatChip,
  fsBreadcrumb,
  heroCanvas,
  summary,
} from './detail';

/** 04.05 · Credit Committees (Figma 48:289461). */
export default {
  breadcrumb: fsBreadcrumb('Credit Committees'),

  /** 01 · Hero (48:289464) — 630 wash, same composition as Banking. */
  hero: {
    eyebrow: 'Credit Committees',
    eyebrowStyle: 'chip',
    title: 'Create Clearer Records of Credit Committee',
    accent: 'Decisions',
    lead: 'Acumeet helps teams document credit discussions, capture agreed outcomes and organise follow-up actions without replacing credit assessment or approval systems.',
    visual: heroCanvas(553, [
      [
        60,
        36,
        appWindow(
          600,
          decisions(
            'Jun 2',
            ['Move two accounts to the watch list', 'Approve the facility subject to collateral valuation'],
            'Delayed audited financials from applicants',
            ['Collateral', 'Covenants', 'Watch list', 'Exposure'],
            500,
          ),
        ),
      ],
      [
        0,
        213,
        actions(
          4,
          [
            ['Circulate approved credit conditions to Relationship Management', 'Jun 21'],
            ['Review covenant breaches on the SME portfolio', 'Next week'],
            ['Prepare the watch-list summary for the next sitting', 'Jun 4'],
          ],
          { width: 360, shadow: 'float' },
        ),
      ],
      [480, 0, floatChip()],
    ]),
    visualWidth: 660,
    padBottom: 13,
  },

  /** Tabs explorer (48:289546) + "✓ Explorer · " (48:268270; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Preserve the Context Behind Deliberations',
        body: 'Credit committee meetings can involve detailed proposals, lending considerations, questions and conditions. Structured summaries help retain the discussion context.',
        visual: summary('Investment Committee', [71, 81, 25], [
          'The committee approved the facility subject to collateral valuation.',
          'Risk flagged rising concentration in one sector.',
        ]),
      },
      {
        title: 'Record Outcomes and Next Steps',
        body: 'Capture key points, decisions and outstanding actions so relevant stakeholders can review what was agreed and what remains to be done.',
        visual: decisions(
          'May 28',
          ['Approve the facility subject to collateral valuation', 'Defer the trade finance request pending documents'],
          'Concentration in the oil and gas portfolio',
          ['Facilities', 'Collateral', 'Covenants', 'Watch list'],
          420,
        ),
      },
      {
        title: 'Support Follow-Up Between Meetings',
        body: 'Keep meeting-derived records available for subsequent discussions, subject to institutional access and recordkeeping policies.',
        visual: actions(3, [
          ['Review covenant breaches on the SME portfolio', 'Today'],
          ['Prepare the watch-list summary for the next sitting', 'Jun 12'],
          ['Request updated cash-flow statements from the applicant', 'Fri'],
        ]),
      },
      {
        title: 'Credit Committee Workflows',
        body: 'Support discussions about credit proposals, lending reviews, outstanding documentation, conditions, escalations and follow-up actions.',
        visual: capture('Tue, May 23', [
          ['Loan Review Meeting', '9:00 AM · Teams'],
          ['Portfolio Risk Review', '2:00 PM · Zoom'],
          ['Credit Committee Meeting', '4:00 PM · Meet'],
        ]),
      },
    ]),
  },

  /** Statement (48:289548). */
  statement: disclaimer(
    'A Documentation Aid, Not a Credit',
    'Decision Engine',
    'Acumeet supports meeting documentation and knowledge retrieval. Credit analysis, risk evaluation and lending approvals remain with authorised personnel and approved systems.',
  ),

  /** Explore more (48:289558). */
  related: exploreIndustries(['riskCommittees', 'complianceMeetings', 'fraudInvestigations', 'boardMeetings'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Create Clearer Records of Credit Committee Decisions'),
};
