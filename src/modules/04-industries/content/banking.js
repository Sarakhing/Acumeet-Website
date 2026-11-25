import { exploreIndustries, industryCta } from './industries';
import {
  actions,
  appWindow,
  capture,
  decisions,
  explorerItems,
  floatChip,
  fsBreadcrumb,
  heroCanvas,
  NOTE_CTAS,
  search,
  summary,
} from './detail';

/** 04.02 · Banking (Figma 48:288112). */
export default {
  breadcrumb: fsBreadcrumb('Banking'),

  /** 01 · Hero (48:288115) — 630 tall wash, dot grid. */
  hero: {
    eyebrow: 'Banking',
    eyebrowStyle: 'chip',
    title: 'Bring Clarity to Banking Conversations',
    accent: 'and Decisions',
    lead: 'From operational reviews to customer strategy, Acumeet helps banking teams turn meetings into structured records, documented decisions and trackable next steps.',
    visual: heroCanvas(553, [
      [
        60,
        36,
        appWindow(
          600,
          decisions(
            'May 30',
            ['Extend branch hours in two high-traffic locations', 'Prioritise the mobile app login fix'],
            'Transfer failures during month-end peaks',
            ['Mobile app', 'SLAs', 'Channel uptime', 'Card disputes'],
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
            ['Update the USSD outage communication plan', 'Fri'],
            ['Confirm card dispute turnaround owners', 'Jun 17'],
            ['Prepare channel uptime summary for ExCo', 'Today'],
          ],
          { width: 360, shadow: 'float' },
        ),
      ],
      [480, 0, floatChip()],
    ]),
    visualWidth: 660,
    padBottom: 13,
  },

  /** Tabs explorer (48:288197) + "✓ Explorer · " (48:267263; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Support Better Meeting Continuity',
        body: 'Banking teams coordinate across operations, products, customer relationships, risk and leadership. Acumeet helps capture discussions and summarise key points so teams can revisit decisions and maintain continuity between meetings.',
        visual: summary('Branch Performance Review', [71, 81, 25], [
          'The team agreed to review USSD uptime weekly.',
          'Operations reported a drop in failed transfers after the switch update.',
        ]),
      },
      {
        title: 'Document Decisions and Follow-Up',
        body: 'Create clearer records of decisions, responsibilities and agreed actions. Teams can use these records to follow up on operational priorities, business initiatives and customer commitments.',
        visual: actions(5, [
          ['Confirm card dispute turnaround owners', 'Jun 7'],
          ['Prepare channel uptime summary for ExCo', 'This week'],
          ['Share branch downtime report with Operations', 'Jun 9'],
        ]),
      },
      {
        title: 'Retain Institutional Knowledge',
        body: 'Make previous meeting discussions easier to retrieve when teams need context on a project, customer issue or business decision.',
        visual: search('failed transfer escalation', [
          ['Customer Experience Forum', 'Apr 24', '…agreed to escalate failed transfers above the weekly threshold.'],
          ['Retail Banking Operations Review', 'May 7', '…switch provider SLA discussed with Operations.'],
          ['Branch Performance Review', 'Jun 16', '…dispute backlog review moved to twice weekly.'],
        ]),
      },
      {
        title: 'Banking Workflows',
        body: 'Support operational reviews, branch and business performance discussions, product planning, customer relationship reviews and cross-functional coordination.',
        visual: capture('Fri, May 21', [
          ['Digital Channels Sync', '2:00 PM · Meet'],
          ['Customer Experience Forum', '4:00 PM · Teams'],
          ['Retail Banking Operations Review', '9:00 AM · Zoom'],
        ]),
      },
    ]),
  },

  /** 06 · Responsible Information Handling (48:288199). */
  note: {
    title: 'Responsible Information Handling',
    body: 'Financial discussions can include sensitive information. Apply Acumeet’s available security and access controls in line with your institution’s policies, and confirm configuration and data-handling requirements before use.',
    ctas: NOTE_CTAS,
  },

  /** Explore more (48:288208) — overline hidden. */
  related: exploreIndustries(['insurance', 'executiveMeetings', 'creditCommittees', 'riskCommittees']),

  cta: industryCta('Bring Clarity to Banking Conversations and Decisions'),
};
