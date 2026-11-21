import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import IntegrationsCard from '@/components/visuals/IntegrationsCard';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import { AVATARS } from '@/components/visuals/people';
import sarah from '@/assets/images/solutions/avatar-task-sarah.jpg';
import daniel from '@/assets/images/solutions/avatar-task-daniel.jpg';
import rachel from '@/assets/images/solutions/avatar-task-rachel.jpg';
import ActionItemsHeroVisual from '../components/visuals/ActionItemsHeroVisual';
import { exploreMore, productBreadcrumb } from './products';

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

/** Shared props of the "UI · Action items" mock-ups on this page. */
const actions = (width, open, tasks) =>
  h(ActionItemsCard, { width, open, avatarSize: 20, shadow: 'mock', tasks });

/**
 * 02.05 · Action Item Management (Figma 46:38621). The first "Statement"
 * (46:39810, "THE PROBLEM") is hidden in Figma; "02 · Overview" (46:39819)
 * is the visible copy of it.
 */
export const actionItemManagement = {
  breadcrumb: productBreadcrumb('Action Item Management'),

  /** 01 · Hero (46:38624) — 786 tall, dot grid. */
  hero: {
    eyebrow: 'Product · Action Item Management',
    eyebrowStyle: 'chip',
    title: 'Turn Meeting Decisions into Actions That',
    accent: 'Move Forward',
    lead: 'Meetings should create progress, not just conversations. Acumeet helps teams identify next steps, maintain visibility into follow-up work and carry important actions from one meeting to the next.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    visual: h(ActionItemsHeroVisual),
    visualWidth: 665,
    padBottom: 0,
  },

  /** 02 · Overview (46:39819) — white statement, CTA + waveform bars. */
  overview: {
    tone: 'white',
    title: 'A Decision Only Matters if Someone',
    accent: 'Follows Through',
    bodyWidth: 1000,
    paragraphs: [
      'Meetings generate ideas, decisions and commitments, but important tasks can easily get lost when the conversation ends. Responsibilities may be unclear, deadlines may be forgotten, and teams can spend valuable time trying to remember what was agreed. Acumeet helps make meeting outcomes easier to revisit, giving teams a clearer path from discussion to action.',
    ],
    cta: { label: 'See How Acumeet Works', to: ROUTES.products },
    waveform: true,
  },

  /** Tabs explorer (46:39829) + "✓ Explorer · Key Features" (46:45604). */
  explorer: {
    title: 'Key',
    accent: 'Features',
    tone: 'white',
    items: [
      {
        title: 'Identify Action Items',
        body: 'Bring tasks, commitments and follow-up points from meeting discussions into view, making it easier to understand what needs to happen next.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: actions(480, 5, [
          {
            title: 'Share feedback on the vendor approval cycle draft',
            due: 'Jun 14',
            avatar: AVATARS['Ruth Godwin'],
          },
          { title: 'Begin ERP sync audit diagnostics', due: 'Jun 7', avatar: AVATARS['George Nwokoro'] },
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'This week',
            avatar: AVATARS['Faith Oluwale'],
          },
        ]),
      },
      {
        title: 'Clarify Ownership and Deadlines',
        body: 'Make responsibilities and expected timelines easier to review and confirm, helping teams establish accountability for agreed actions.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: actions(400, 5, [
          { title: 'Confirm supplier onboarding checklist owners', due: 'Jun 9', avatar: sarah },
          { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: daniel },
          { title: 'Share feedback on the vendor approval cycle draft', due: 'Jun 12', avatar: rachel },
        ]),
      },
      {
        title: 'Track Actions Across Meetings',
        body: 'Revisit outstanding tasks before the next meeting. Give your team a clearer view of what has progressed, what remains open and what requires attention.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: actions(400, 5, [
          { title: 'Begin ERP sync audit diagnostics', due: 'Fri', avatar: sarah },
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Next week',
            avatar: daniel,
          },
          { title: 'Confirm supplier onboarding checklist owners', due: 'Jun 14', avatar: rachel },
        ]),
      },
      {
        title: 'Connect Meeting Actions to Your Workflow',
        body: 'Bring meeting follow-up closer to the tools your team already uses. Where supported by Acumeet’s available integrations, connect workflows with platforms such as Slack, Jira, Asana and ClickUp.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(IntegrationsCard, { width: 480, connected: 6, items: INTEGRATIONS }),
      },
    ],
  },

  /** Split 46:39833 — copy left (hidden "CROSS-MEETING CONTINUITY" overline), mint rings panel. */
  split: {
    size: 'standard',
    title: 'Every Meeting Should Build on the Last',
    body: [
      'The next meeting should not begin with everyone trying to remember what happened in the previous one.',
      'Acumeet helps teams revisit earlier discussions, recover important context and review outstanding actions before moving forward. This creates a more connected workflow in which decisions and commitments remain relevant beyond the meeting where they were made.',
    ],
    cta: { label: 'Make Meetings More Productive', to: ROUTES.bookDemo },
    visual: {
      tint: 'mint',
      pattern: { type: 'rings', size: 'panel' },
      content: h(DecisionsCard, {
        width: 440,
        date: 'Jun 6',
        rows: [
          { kind: 'decision', text: 'Consolidate ERP sync alerts' },
          { kind: 'decision', text: 'Revisit the vendor approval cycle' },
          { kind: 'risk', text: 'Low supplier engagement on savings' },
        ],
        topics: ['ERP integration', 'Supplier contracts', 'KPIs', 'PO automation'],
      }),
    },
  },

  /** Benefits 46:39880 — bento: 846 + 413, then 3 × 413 ("✓ Card · …"). */
  benefits: {
    title: 'Turn Accountability into',
    accent: 'Progress',
    accentBreak: false,
    cards: [
      {
        title: 'Reduce forgotten follow-ups',
        body: 'Keep important commitments visible after discussions end.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-wide' },
        span: 2,
      },
      {
        title: 'Improve ownership',
        body: 'Make it easier to establish who is responsible for the next step.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Maintain continuity',
        body: 'Carry outstanding actions from previous meetings into future discussions.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Support better coordination',
        body: 'Help teams work from a clearer understanding of decisions and responsibilities.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Make meeting time count',
        body: 'Spend less time reconstructing past discussions and more time progressing agreed work.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
    ],
  },

  /** Stepper 46:39890 + "✓ Stepper · From Conversation to Fol…" (46:45975). */
  how: {
    title: 'From Conversation to',
    accent: 'Follow-Through',
    accentBreak: false,
    tone: 'white',
    steps: [
      {
        label: 'Capture the discussion',
        body: 'Preserve meeting context using Acumeet’s supported meeting capture workflow.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 400,
          shadow: 'float',
          date: 'Wed, Jun 18',
          meetings: [
            { title: 'Monthly Marketing Strategy Review', meta: '10:30 AM · Meet' },
            { title: 'Product Development Sync-Up', meta: '11:00 AM · Teams' },
            { title: 'Client Feedback Analysis Session', meta: '3:30 PM · Zoom' },
          ],
        }),
      },
      {
        label: 'Identify next steps',
        body: 'Bring action items and commitments into view for review.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: actions(440, 5, [
          {
            title: 'Share feedback on the vendor approval cycle draft',
            due: 'Jun 12',
            avatar: AVATARS['Ruth Godwin'],
          },
          { title: 'Begin ERP sync audit diagnostics', due: 'Fri', avatar: AVATARS['George Nwokoro'] },
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Next week',
            avatar: AVATARS['Faith Oluwale'],
          },
        ]),
      },
      {
        label: 'Confirm responsibility',
        body: 'Review task ownership and timelines so expectations are clear.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: actions(400, 5, [
          { title: 'Confirm supplier onboarding checklist owners', due: 'Jun 14', avatar: daniel },
          { title: 'Draft the Q3 vendor scorecard', due: 'Jun 7', avatar: sarah },
          { title: 'Share feedback on the vendor approval cycle draft', due: 'This week', avatar: rachel },
        ]),
      },
      {
        label: 'Review progress',
        body: 'Return to outstanding actions and carry the relevant context into the next meeting.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingAnalyticsCard, {
          width: 350,
          range: 'Last 7 days',
          legend: [
            { label: 'Sentiment', value: '83%', tone: 'green' },
            { label: 'Engagement', value: '55%', tone: 'blue' },
            { label: 'Quality', value: '43%', tone: 'amber' },
          ],
        }),
      },
    ],
  },

  /** FAQ 46:39895. */
  faq: [
    {
      q: 'What is an AI meeting action item tracker?',
      a: 'An AI meeting action item tracker helps teams identify and organise tasks or commitments discussed during meetings, making follow-up easier to review and manage.',
    },
    {
      q: 'How does Acumeet help teams follow up after meetings?',
      a: 'Acumeet brings meeting information into a broader meeting intelligence workflow, helping teams revisit discussions and keep track of the actions that follow.',
    },
    {
      q: 'Can teams review actions from previous meetings?',
      a: 'The intended workflow is to revisit earlier actions before a follow-up meeting and review what remains outstanding.',
    },
    {
      q: 'Why is action item management important?',
      a: 'It helps teams maintain accountability, clarify responsibilities and ensure that meeting discussions translate into practical next steps.',
    },
  ],

  /** Explore more 46:39906 — "Keep exploring" overline shown. */
  related: exploreMore(['aiMeetingSummaries', 'meetingIntelligence', 'analytics', 'atlas'], {
    eyebrow: 'Keep exploring',
  }),

  /** CTA band 46:39916. */
  cta: {
    title: 'Keep the Work Moving After the Meeting',
    lead: 'Connect meeting discussions with the actions that follow. Help your team spend less time reconstructing decisions and more time moving work forward with Acumeet.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Get Started', to: ROUTES.getStarted },
  },
};
