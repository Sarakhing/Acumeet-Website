import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import { AVATARS } from '@/components/visuals/people';
import TalkTimeCard from '../components/visuals/TalkTimeCard';
import { exploreMore, productBreadcrumb } from './products';

const P = ROUTES.product;

/* "UI · Speaker talk time" shares used by the hero slide and the chapter (52 min meeting). */
const SPEAKERS = [
  { name: 'Faith Oluwale', share: 28, tone: 'magenta' },
  { name: 'Fredelina Augustus', share: 22, tone: 'blue' },
  { name: 'Ruth Godwin', share: 15, tone: 'green' },
  { name: 'George Nwokoro', share: 20, tone: 'purple' },
  { name: 'Warith Abraham', share: 15, tone: 'amber' },
];

/** 02.11 · Analytics (Figma 46:43428). */
export const analytics = {
  breadcrumb: productBreadcrumb('Analytics'),

  /** 01 · Hero (46:43431) — dark rings hero, carousel bleeds into the next section. */
  hero: {
    variant: 'rings',
    eyebrow: 'Product · Analytics',
    title: 'Turn Meeting Activity into Clear, Actionable Insights.',
    lead: 'Understand how your organisation meets, participates, and follows through. Acumeet Analytics brings meeting activity, participation, action item status, discussion topics, quality, sentiment, and engagement metrics into reports that help teams explore patterns and make more informed decisions.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet Analytics', to: ROUTES.products },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 02.11 · Analytics" (46:48206) — 3 slides, 560px cards. */
  carousel: [
    {
      label: 'Trends',
      content: h(MeetingAnalyticsCard, {
        width: 560,
        range: 'Last 7 days',
        barWidth: 42,
        barPitch: 52,
        legend: [
          { label: 'Sentiment', value: '72%', tone: 'green' },
          { label: 'Engagement', value: '52%', tone: 'blue' },
          { label: 'Quality', value: '74%', tone: 'amber' },
        ],
      }),
    },
    {
      label: 'Participation',
      content: h(TalkTimeCard, { duration: '52 min', speakers: SPEAKERS }),
    },
    {
      label: 'Action status',
      content: h(ActionItemsCard, {
        width: 560,
        open: 5,
        avatarSize: 20,
        shadow: 'mock',
        tasks: [
          {
            title: 'Share feedback on the vendor approval cycle draft',
            due: 'Jun 12',
            avatar: AVATARS['Faith Oluwale'],
          },
          { title: 'Begin ERP sync audit diagnostics', due: 'Fri', avatar: AVATARS['George Nwokoro'] },
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Next week',
            avatar: AVATARS['Ruth Godwin'],
          },
        ],
      }),
    },
  ],

  /** Split (46:43459) — visual left, amber rings. */
  split: {
    size: 'standard',
    reverse: true,
    title: 'See the Patterns Behind Your Meetings',
    body: [
      'Meeting activity creates data that can help teams understand how time is spent, who participates, what topics are discussed, and how meeting outcomes are progressing. Acumeet presents this information through reporting views, charts, distributions, and time-based trends.',
      'Use the available reports to explore activity over a selected period, examine meeting quality and engagement indicators, and review topics and action item statuses. The metrics shown depend on the data available, selected filters, and enabled features.',
    ],
    visual: {
      tint: 'amber',
      pattern: { type: 'rings', size: 'panel' },
      content: h(MeetingAnalyticsCard, {
        width: 440,
        range: 'This month',
        barWidth: 30,
        barPitch: 40,
        legend: [
          { label: 'Sentiment', value: '67%', tone: 'green' },
          { label: 'Engagement', value: '27%', tone: 'blue' },
          { label: 'Quality', value: '69%', tone: 'amber' },
        ],
      }),
    },
  },

  /** 03 · rows (46:43508) — "MEETING ANALYTICS" overline hidden in Figma. */
  activity: {
    title: 'Understand Your Meeting Activity',
    paragraphs: [
      'Get a clearer view of meeting volume, duration, attendance, recording, and scheduling patterns. Acumeet’s Analytics interface includes reporting metrics such as:',
      'Total number of meetings',
      'Average meeting duration and total meeting time',
      'Percentage of meetings completed',
      'Average number of participants',
    ],
    cta: { label: 'Explore Meeting Analytics', to: ROUTES.bookDemo, size: 'lg' },
  },

  /** Chapters (46:43521) — nav + "Chapter 02 / 05" counter hidden: one static dark row. */
  participation: {
    chapters: [
      {
        tab: 'Understand Participation and Engagement',
        title: 'Understand Participation and Engagement',
        paragraphs: [
          'Explore participation patterns across meetings and teams. The current interface includes team participation, participant-level engagement information, average participants, active participants, engagement scores, and engagement by time of day.',
          'These views can help teams examine who is participating and how engagement indicators vary across the selected reporting period. Interpret participant-level information in the context of meeting type, data availability, and the organisation’s policies.',
        ],
        glow: 'blue',
        visual: h(TalkTimeCard, { width: 460, duration: '52 min', speakers: SPEAKERS }),
      },
    ],
  },

  /** 03 · rows (46:43590). */
  actions: {
    title: 'Keep Track of Meeting Actions and Their Status',
    paragraphs: [
      'Meeting discussions often generate tasks and follow-ups. Acumeet’s interface includes action item status indicators such as actions generated, in progress, overdue, and completed. These views help users review the current status of meeting-related actions.',
      'Where supported by the available reporting data, action status information can help teams identify outstanding work and follow up on commitments.',
    ],
    cta: { label: 'Review Action Item Status', to: P.actionItemManagement, size: 'lg' },
  },

  /** 03 · rows (46:43599) — white. */
  topics: {
    tone: 'white',
    title: 'Discover the Topics Shaping Your Meetings',
    paragraphs: [
      'Topic Insights helps users explore themes that appear in meeting discussions. The current interface shows topic search, topic cards, mention counts, dates or date ranges, and sentiment indicators associated with topics.',
      'Examples visible in the interface include budgeting and financial visibility, cash flow management, resource risks and recruitment, marketing and website engagement, enterprise onboarding issues, BYOK/BYOS architecture, workspace and billing development, and KPI dashboard metrics.',
      'Use topic insights to identify recurring subjects and explore how discussions are represented in the available meeting data. The topics shown will depend on the meetings and reporting period selected.',
    ],
    cta: { label: 'Explore Topic Insights', to: P.meetingIntelligence, size: 'lg' },
  },

  /** 03 · rows (46:43609). */
  quality: {
    title: 'Explore Meeting Quality, Sentiment, and Engagement',
    paragraphs: [
      'Bring together indicators that help teams examine meeting experience and patterns over time. The current Analytics interface includes the following reporting views:',
      'Meeting Quality: Average Meeting Quality Score; total meetings scored; excellent and poor meeting counts; quality score distribution; quality score by meeting type; quality score drivers by meeting type; quality score over time',
      'Sentiment: Total sentiment score; positive, neutral, and negative meeting counts; sentiment distribution; sentiment score over time; sentiment by meeting type; sentiment in relation to duration and participants, where shown',
      'Engagement: Average engagement score; average drop-off time; active participants; interactivity; engagement distribution',
      'These views can help organisations explore patterns in meeting quality, sentiment, and engagement. Scores are indicators generated by the product and should be interpreted as signals for review, not as definitive judgements about an individual or team.',
    ],
    cta: { label: 'Explore Organisational Insights', to: ROUTES.solutions.understand, size: 'lg' },
  },

  /** Benefits (46:43621) — 2 rows of 3 × 413. */
  benefits: {
    title: 'Key',
    accent: 'Benefits',
    accentBreak: false,
    cards: [
      {
        title: 'Visibility into meeting activity',
        body: 'Review volume, duration, completion, recording, and scheduling indicators.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Participation insights',
        body: 'Explore participant and team engagement patterns.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Action status visibility',
        body: 'Review generated, in-progress, overdue, and completed actions.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Topic discovery',
        body: 'Identify discussion themes and examine topic mentions and sentiment.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Quality and engagement reporting',
        body: 'Explore score distributions and changes over time.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Period-based analysis',
        body: 'Use available date filters to investigate patterns across selected reporting windows.',
        tint: 'grey',
        pattern: { type: 'hairlines', size: 'card' },
      },
    ],
  },

  /** FAQ (46:43631). */
  faq: [
    {
      q: 'What can I see in Acumeet Analytics?',
      a: 'The current interface includes meeting activity, duration, completion and recording indicators, participation and engagement information, action item statuses, topic insights, and quality and sentiment reporting.',
    },
    {
      q: 'Can I see meeting trends over time?',
      a: 'The interface includes time-based charts for several metrics. The available trend depends on the report, selected date range, and data present.',
    },
    {
      q: 'Does Acumeet report on meeting quality?',
      a: 'The current interface includes Meeting Quality Score, score distributions, quality by meeting type, quality drivers, and quality over time.',
    },
    {
      q: 'Can I explore topics discussed in meetings?',
      a: 'Topic Insights includes topic search, topic cards, mention counts, and sentiment indicators in the current interface.',
    },
    {
      q: 'Are sentiment and quality scores definitive assessments?',
      a: 'They should be treated as analytical indicators to support review and discussion, not as definitive judgements. Interpret them in context.',
    },
  ],

  /** Explore more (46:43643). */
  related: exploreMore(
    ['meetingIntelligence', 'speakerRecognition', 'actionItemManagement', 'aiMeetingSummaries'],
    { eyebrow: 'Keep exploring' },
  ),

  /** CTA band (46:43653). */
  cta: {
    title: 'Make Better-Informed Decisions About How Your Organisation Meets.',
    lead: 'Explore meeting activity, participation, action statuses, discussion themes, quality, sentiment, and engagement through Acumeet Analytics.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
