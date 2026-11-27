import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import IntegrationsCard from '@/components/visuals/IntegrationsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import { AVATARS } from '@/components/visuals/people';
import { solutionBreadcrumb } from './solutions';

const faith = AVATARS['Faith Oluwale'];
const george = AVATARS['George Nwokoro'];
const ruth = AVATARS['Ruth Godwin'];

/** Figma "UI · Connect" grid: 6 connected, Salesforce + HubSpot greyed. */
const INTEGRATIONS = [
  { name: 'Microsoft Teams' },
  { name: 'Zoom' },
  { name: 'Google Meet' },
  { name: 'Slack' },
  { name: 'Jira' },
  { name: 'Asana' },
  { name: 'Salesforce', muted: true },
  { name: 'HubSpot', muted: true },
];

/** 03.07 · Connect (Figma 46:19542). */
export const connect = {
  breadcrumb: solutionBreadcrumb('Connect'),

  hero: {
    variant: 'rings',
    eyebrow: 'Solutions · Connect',
    title: 'Connect your meetings to the tools that move work forward',
    lead: 'Your meetings shouldn’t operate in isolation. Acumeet helps connect meeting intelligence with the tools your teams already use, bringing conversations, decisions, and action items closer to the workflows where work gets done.',
    primary: { label: 'Explore integrations', to: ROUTES.integrations },
    secondary: { label: 'Talk to our team', to: ROUTES.contactSales },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 03.07 · Connect" (46:28504) — 3 slides. */
  carousel: [
    {
      label: 'Integrations',
      content: h(IntegrationsCard, { width: 560, connected: 6, items: INTEGRATIONS }),
    },
    {
      label: 'Action items',
      content: h(ActionItemsCard, {
        avatarSize: 20,
        width: 560,
        open: 4,
        shadow: 'mock',
        tasks: [
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Next week',
            avatar: faith,
          },
          { title: 'Confirm supplier onboarding checklist owners', due: 'Jun 14', avatar: george },
          { title: 'Draft the Q3 vendor scorecard', due: 'Jun 7', avatar: ruth },
        ],
      }),
    },
    {
      label: 'Meetings',
      content: h(MeetingCaptureCard, {
        width: 560,
        date: 'Mon, Jun 6',
        meetings: [
          { title: 'Monthly marketing strategy review', meta: '11:00 AM · Zoom' },
          { title: 'Product Development Sync-Up', meta: '3:30 PM · Meet' },
          { title: 'Client feedback analysis session', meta: '10:30 AM · Teams' },
        ],
      }),
    },
  ],

  /** Split 46:19574 — visual left. */
  meetings: {
    size: 'compact',
    reverse: true,
    eyebrow: 'Meeting integrations',
    eyebrowStyle: 'mono',
    title: 'Bring your meetings into one connected workflow',
    body: [
      'Connect Acumeet with supported meeting platforms to capture conversations and transform them into structured, useful information. Turn meetings into transcripts, summaries, decisions, and action items that teams can revisit and act on.',
      'Connect supported meeting platforms to your meeting intelligence workflow.',
      'Make meeting records and outcomes easier to access.',
      'Reduce manual effort in documenting conversations.',
      'Create a foundation for consistent meeting follow-up.',
    ],
    cta: { label: 'Explore meeting integrations', to: ROUTES.integrations, intent: 'secondary' },
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(TranscriptCard, {
        lines: [
          {
            name: 'Faith Oluwale',
            time: '11:43',
            text: 'The ERP sync failed twice during peak hours this week.',
          },
          {
            name: 'George Nwokoro',
            time: '12:50',
            text: 'We should run a sync audit before the next release goes out.',
          },
          {
            name: 'Fredelina Augustus',
            time: '13:57',
            text: 'I’ll own the audit and share findings by Friday.',
          },
        ],
      }),
    },
  },

  /** Editorial 46:19630. */
  crm: {
    tone: 'subtle',
    title: 'Turn customer conversations into actionable context',
    paragraphs: [
      'Connect meeting intelligence with customer relationship management workflows to help teams maintain context across sales conversations, account discussions, and customer engagements. With supported CRM integrations, teams can bring relevant meeting insights closer to customer records and follow-up activities.',
      'Keep meeting context accessible alongside customer information.',
      'Support more informed sales and account-management follow-ups.',
      'Improve continuity across customer conversations.',
      'Help teams track commitments made during meetings.',
    ],
    cta: { label: 'Connect your customer workflows', to: ROUTES.integrations, size: 'lg' },
  },

  /** Dark Split 46:19642 — visual left, magenta 12% waveform bars on night. */
  projects: {
    size: 'compact',
    tone: 'dark',
    reverse: true,
    title: 'Turn meeting decisions into project progress',
    body: [
      'Important decisions and commitments should not disappear when a meeting ends. Connect meeting outcomes with project-management workflows to help teams translate discussions into tasks and follow-up activities. With supported integrations, Acumeet can help bridge the gap between what teams discuss and the work they need to complete.',
      'Turn meeting action items into trackable tasks.',
      'Connect decisions with ongoing project work.',
      'Improve visibility into responsibilities and follow-ups.',
      'Help teams revisit outstanding commitments from previous meetings.',
    ],
    cta: { label: 'Connect meetings to projects', to: ROUTES.integrations, intent: 'ghost-light' },
    visual: {
      tint: 'night',
      pattern: { type: 'waveform', size: 'panel' },
      content: h(ActionItemsCard, {
        avatarSize: 20,
        width: 440,
        open: 4,
        shadow: 'mock',
        tasks: [
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Fri',
            avatar: faith,
          },
          { title: 'Confirm supplier onboarding checklist owners', due: 'May 26', avatar: george },
          { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: ruth },
        ],
      }),
    },
  },

  /** Editorial 46:19691. */
  everyday: {
    tone: 'subtle',
    title: 'Bring meeting outcomes into everyday work',
    paragraphs: [
      'Help your teams access meeting insights within the tools they use to communicate, collaborate, and organise their work. Connect Acumeet with supported productivity tools to make meeting summaries, decisions, and follow-up information easier to share and act on.',
      'Share relevant meeting outcomes with the right teams.',
      'Keep follow-up activities connected to everyday workflows.',
      'Reduce repetitive manual updates.',
      'Improve access to meeting knowledge across teams.',
    ],
    cta: { label: 'Connect your team’s tools', to: ROUTES.integrations, size: 'lg' },
  },

  /**
   * "✓ Chapters · Bring Your Meetings Into…" instance 46:19703 — Figma hides
   * the nav and counter and shows chapter 05/07 statically (dark, magenta glow).
   */
  analytics: {
    chapters: [
      {
        tab: 'Make Meeting Data More',
        title: 'Make meeting data more useful for your business',
        paragraphs: [
          'Meeting activity can reveal patterns in collaboration, participation, productivity, and execution. Connect relevant meeting data to reporting and analytics workflows to support a broader understanding of how your organisation works. Where supported, integrations and data exports can help teams incorporate meeting information into their existing reporting environments.',
          'Analyse meeting activity and participation patterns.',
          'Support reporting on meeting trends and action completion.',
        ],
        checks: [
          'Bring relevant meeting metrics into business intelligence workflows.',
          'Help leadership teams make more informed operational decisions.',
        ],
        glow: 'magenta',
        visual: h(MeetingAnalyticsCard, {
          width: 460,
          range: 'Last 30 days',
          barWidth: 32,
          barPitch: 42,
          legend: [
            { label: 'Sentiment', value: '82%', tone: 'green' },
            { label: 'Engagement', value: '42%', tone: 'blue' },
            { label: 'Quality', value: '54%', tone: 'amber' },
          ],
        }),
      },
    ],
  },

  /** Editorial 46:20612 (46:20600 is hidden). */
  api: {
    tone: 'subtle',
    title: 'Build custom integrations around your workflow',
    paragraphs: [
      'Every organisation has its own systems, processes, and technology requirements. API capabilities can help technical teams connect Acumeet with internal applications and build workflows tailored to their business needs. Depending on the APIs and permissions available, integrations could enable approved systems to work with meeting records, summaries, action items, and other supported data.',
      'Connect Acumeet with internal business applications.',
      'Support organisation-specific workflows.',
      'Reduce repetitive data handling between systems.',
      'Extend meeting intelligence across your technology environment.',
    ],
    cta: { label: 'Discuss API access', to: ROUTES.developers, size: 'lg' },
  },

  /** Split 46:20624 — visual left, magenta waveform on pink. */
  webhooks: {
    size: 'compact',
    reverse: true,
    title: 'Trigger workflows when meeting events occur',
    body: [
      'Help connected applications respond to meeting-related events through supported webhook capabilities. Webhooks can enable systems to receive notifications when defined events occur, allowing teams to build more responsive workflows. Depending on supported events, these workflows could include notifications when meeting processing is complete, a summary is ready, or an action item is created or updated.',
      'Trigger workflows in connected applications.',
      'Notify systems when relevant meeting events occur.',
      'Reduce reliance on manual status checks.',
    ],
    cta: { label: 'Explore webhook capabilities', to: ROUTES.developers, intent: 'secondary' },
    visual: {
      tint: 'pink',
      pattern: { type: 'waveform', size: 'panel' },
      content: h(SummaryCard, {
        title: 'Monthly marketing strategy review',
        scores: [
          { label: 'Quality', value: 71, bar: 'amber' },
          { label: 'Sentiment', value: 81, bar: 'green' },
          { label: 'Engagement', value: 25, bar: 'blue' },
        ],
        insights: [
          'Fredelina flagged missed savings from low supplier engagement.',
          'George asked for a system sync audit before the next release.',
        ],
      }),
    },
  },

  /** Head 46:20665 + "✓ Stepper · From Conversation to Coordinated Action" (46:28640). */
  workflow: {
    eyebrow: 'One connected meeting workflow',
    title: 'From conversation to coordinated',
    accent: 'action',
    tone: 'white',
    steps: [
      {
        label: 'Capture',
        body: 'Bring meetings into Acumeet through supported meeting platforms and capture methods.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 440,
          date: 'Tue, May 7',
          meetings: [
            { title: 'Product Development Sync-Up', meta: '2:00 PM · Meet' },
            { title: 'Client feedback analysis session', meta: '4:00 PM · Teams' },
            { title: 'Weekly ProcureCentro Stand-up', meta: '9:00 AM · Zoom' },
          ],
        }),
      },
      {
        label: 'Understand',
        body: 'Transform conversations into transcripts, summaries, decisions, and action items.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TranscriptCard, {
          lines: [
            {
              name: 'Faith Oluwale',
              time: '03:21',
              text: 'We completed 23 story points, which is a 15% increase from the previous sprint.',
            },
            {
              name: 'George Nwokoro',
              time: '04:28',
              text: 'The authentication module is progressing well, but we need a security review.',
            },
            {
              name: 'Fredelina Augustus',
              time: '05:35',
              text: 'I can coordinate with the InfoSec team to schedule that audit.',
            },
          ],
        }),
      },
      {
        label: 'Connect',
        body: 'Bring relevant meeting outcomes into supported CRM, project management, productivity, and reporting workflows.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(IntegrationsCard, { width: 440, connected: 6, items: INTEGRATIONS }),
      },
      {
        label: 'Follow through',
        body: 'Help teams maintain context, track commitments, and move work forward beyond the meeting.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(ActionItemsCard, {
          avatarSize: 20,
          width: 440,
          open: 5,
          shadow: 'mock',
          tasks: [
            {
              title: 'Share feedback on the vendor approval cycle draft',
              due: 'Today',
              avatar: faith,
            },
            { title: 'Begin ERP sync audit diagnostics', due: 'Jun 12', avatar: george },
            {
              title: 'Identify top recurring items for PO automation pilot',
              due: 'Fri',
              avatar: ruth,
            },
          ],
        }),
      },
    ],
  },

  faq: [
    {
      q: 'Which tools can Acumeet integrate with?',
      a: 'Integration availability depends on the platforms and connection methods currently supported. Contact our team to discuss your organisation’s requirements.',
    },
    {
      q: 'Can Acumeet connect meeting action items to project-management tools?',
      a: 'Acumeet is designed to help teams turn meeting outcomes into actionable work. Available integrations and automation capabilities depend on the supported platform and implementation.',
    },
    {
      q: 'Can we connect Acumeet to our CRM?',
      a: 'CRM integration requirements can be assessed based on your existing systems and workflow needs. Contact our team to discuss the available options.',
    },
    {
      q: 'Can our developers build custom integrations?',
      a: 'Custom integrations may be possible through supported APIs and webhooks. Available capabilities, access permissions, and technical requirements should be confirmed with our team.',
    },
    {
      q: 'Can Acumeet send meeting data to analytics platforms?',
      a: 'Where supported, meeting data and metrics can be made available for reporting and analysis. The available data and connection methods depend on the integration.',
    },
  ],

  cta: {
    title: 'Make every meeting part of your workflow',
    lead: 'Connect meeting intelligence to the tools your teams use to communicate, collaborate, and execute. Build workflows that help turn conversations into coordinated action.',
    primary: { label: 'Discuss your integration needs', to: ROUTES.contactSales },
    secondary: { label: 'Integration enquiries', to: ROUTES.integrations },
  },
};
