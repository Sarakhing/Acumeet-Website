import { createElement as h } from 'react';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import { exploreIndustries, industryCta } from './industries';
import { actions, capture, decisions, explorerItems, fsBreadcrumb, heroCanvas, NOTE_CTAS, search } from './detail';

const heroAnalytics = () =>
  h(MeetingAnalyticsCard, {
    width: 480,
    range: 'Last 7 days',
    barWidth: 34,
    barPitch: 45,
    legend: [
      { label: 'Sentiment', value: '88%', tone: 'green' },
      { label: 'Engagement', value: '40%', tone: 'blue' },
      { label: 'Quality', value: '78%', tone: 'amber' },
    ],
  });

/** 04.12 · Customer Strategy (Figma 48:292421). */
export default {
  breadcrumb: fsBreadcrumb('Customer strategy'),

  /** 01 · Hero (48:292424) — centred light wash, 838 tall; canvas origin 1440-frame (80, 403). */
  hero: {
    variant: 'centered',
    eyebrow: 'Customer strategy',
    title: 'Turn customer conversations into clear next steps',
    lead: 'Acumeet helps financial services teams document customer needs, preserve relationship context and follow up on commitments and opportunities.',
    visual: heroCanvas(
      415,
      [
        [400, 0, heroAnalytics()],
        [
          30,
          56,
          actions(
            3,
            [
              ['Share onboarding checklist with the account team', 'Fri'],
              ['Log renewal risks in the CRM', 'Jun 11'],
              ['Schedule the executive sponsor check-in', 'Today'],
            ],
            { width: 380, shadow: 'float' },
          ),
        ],
        [
          870,
          120,
          decisions(
            'Jun 2',
            ['Move the renewal discussion forward', 'Prioritise the reporting request'],
            'Renewal at risk without executive sponsor',
            ['Renewal', 'Onboarding', 'Proposal', 'Pricing'],
            380,
          ),
        ],
      ],
      1280,
    ),
    visualWidth: 1280,
    visualCompact: heroAnalytics(),
    visualCompactWidth: 480,
  },

  /** Tabs explorer (48:293568) + "✓ Explorer · " (48:270446; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Capture customer needs and priorities',
        body: 'Structure meeting summaries so teams can revisit customer goals, concerns, feedback and key discussion points.',
        visual: capture(
          'Fri, Jun 24',
          [
            ['Account Planning Session', '3:30 PM · Teams'],
            ['Customer Onboarding Call', '10:30 AM · Zoom'],
            ['Discovery Call', '11:00 AM · Meet'],
          ],
          { width: 480 },
        ),
      },
      {
        title: 'Track Commitments and Follow-Up',
        body: 'Record agreed next steps and responsibilities to help relationship managers and internal teams coordinate customer follow-up.',
        visual: actions(3, [
          ['Share onboarding checklist with the account team', 'Jun 12'],
          ['Log renewal risks in the CRM', 'Fri'],
          ['Schedule the executive sponsor check-in', 'Next week'],
        ]),
      },
      {
        title: 'Preserve relationship context',
        body: 'Make previous meeting-derived information easier to retrieve when customer relationships continue across teams or over time.',
        visual: search(
          'customer renewal next steps',
          [
            ['Discovery Call', 'May 24', '…next steps agreed with the procurement contact.'],
            ['Quarterly Business Review', 'Jun 7', '…phased rollout requested by the customer.'],
            ['Account Planning Session', 'Apr 16', '…renewal risk logged for follow-up.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Customer strategy workflows',
        body: 'Support key account reviews, customer feedback sessions, retention planning, service improvement discussions and relationship strategy meetings.',
        visual: capture('Thu, May 11', [
          ['Customer Onboarding Call', '9:00 AM · Teams'],
          ['Discovery Call', '2:00 PM · Zoom'],
          ['Quarterly Business Review', '4:00 PM · Meet'],
        ]),
      },
    ]),
  },

  /** 06 · Use Customer Information Responsibly (48:293570). */
  note: {
    title: 'Use customer information responsibly',
    body: 'Apply appropriate consent, access, retention and data-handling practices when meeting discussions include personal or confidential customer information.',
    ctas: NOTE_CTAS,
  },

  /** Explore more (48:293579). */
  related: exploreIndustries(['telecommunications', 'publicSector', 'enterprise', 'otherRegulated'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Turn Customer Conversations Into Clear Next Steps'),
};
