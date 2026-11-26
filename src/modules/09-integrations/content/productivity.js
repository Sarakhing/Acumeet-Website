import {
  actions,
  CONNECTED,
  CRM_CONNECTED,
  decisions,
  integrations,
} from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { meetingSummary, po } from './shared';
import { CONTACT, exploreIntegrations, intBreadcrumb, intCta, splits } from './integrations';

/** 09.03 · Productivity (Figma 48:384547). */
export default {
  breadcrumb: intBreadcrumb('Productivity'),

  /** 01 · Hero + "Hero carousel · 09.03 · Productivity" (46:92890). */
  ...ringsHero({
    eyebrow: 'Integrations  ·  Productivity',
    title: 'Put meeting context closer to everyday work.',
    lead: 'Meeting outcomes are most useful when teams can find and act on them in their normal working environment. Explore the productivity tools listed below and confirm the supported connection and sharing workflows for your organisation.',
    primary: CONTACT('Discuss your productivity requirements'),
    secondary: null,
    slides: [
      ['Integrations', integrations(CRM_CONNECTED, 6, { width: 560 })],
      [
        'Action items',
        actions(
          5,
          [
            ['Confirm supplier onboarding checklist owners', 'Jun 9'],
            ['Draft the Q3 vendor scorecard', 'Today'],
            ['Share feedback on the vendor approval cycle draft', 'Jun 12'],
          ],
          { width: 560, footer: false },
        ),
      ],
      [
        'Decisions',
        decisions(
          'Jun 9',
          ['Pilot automated PO generation', 'Move supplier reviews to monthly'],
          'Low supplier engagement on savings',
          ['Savings', 'Vendor onboarding', 'ERP integration', 'Supplier contracts'],
          560,
        ),
      ],
    ],
  }),

  sections: splits([
    {
      eyebrow: 'Calendar and email workflows',
      title: 'Connect meeting context with the way your team plans its work.',
      body: [
        'Explore supported Outlook workflows for coordinating meeting context and follow-up. The available connection may depend on calendar permissions, account configuration, and the integration approach enabled for your Acumeet environment.',
        'Help teams connect meetings with their working day.',
        'Make follow-up easier to organise.',
        'Review permission and calendar-access requirements.',
      ],
      cta: CONTACT('Ask about Outlook'),
      visual: actions(5, po(['Fri', 'May 5', 'Today']), { width: 440 }),
    },
    {
      eyebrow: 'Microsoft 365 ecosystem',
      title: 'Bring meeting intelligence into your Microsoft 365 environment.',
      body: [
        'Acumeet can be assessed alongside your Microsoft 365 environment to understand how meeting knowledge should fit into existing productivity and governance workflows. Confirm the specific Microsoft services and data flows supported for your deployment.',
        'Align the workflow with existing tools.',
        'Assess identity and administrative requirements.',
        'Define the intended content-sharing experience.',
      ],
      cta: CONTACT('Discuss Microsoft 365'),
      visual: integrations(CONNECTED, 6),
    },
    {
      eyebrow: 'Team collaboration',
      title: 'Move meeting outcomes into the conversations where work happens.',
      body: [
        'Use supported Slack workflows to help teams share meeting summaries, decisions, or action items with the people who need them. Confirm the available delivery method, channel permissions, and controls before enabling a workflow.',
        'Share relevant meeting context with teams.',
        'Make next steps visible after discussions.',
        'Keep access and channel permissions in view.',
      ],
      cta: CONTACT('Ask about Slack'),
      visual: meetingSummary(
        'Monthly Marketing Strategy Review',
        [51, 91, 25],
        ['audit', 'vendor'],
      ),
    },
  ]),

  related: exploreIntegrations(['overview', 'meetingPlatforms']),
  cta: intCta('Put meeting context closer to everyday work.'),
};
