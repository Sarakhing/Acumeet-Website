import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import { AVATARS } from '@/components/visuals/people';
import IntelligenceHeroVisual from '../components/visuals/IntelligenceHeroVisual';
import { exploreMore, productBreadcrumb } from './products';

const P = ROUTES.product;

/** 02.09 · Meeting Intelligence (Figma 46:41646). */
export const meetingIntelligence = {
  breadcrumb: productBreadcrumb('Meeting Intelligence'),

  /** 01 · Hero (46:41649) — 691 tall: 64 + 591 canvas + 36. */
  hero: {
    eyebrow: 'Product · Meeting Intelligence',
    eyebrowStyle: 'chip',
    title: 'Turn Every Meeting into',
    accent: 'Business Intelligence.',
    lead: 'Acumeet helps turn meeting conversations into structured business intelligence. Capture decisions, identify actions, understand discussions, revisit meeting history, and preserve institutional knowledge—so your organisation can put meeting information to work.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    visual: h(IntelligenceHeroVisual),
    visualWidth: 665,
    padBottom: 36,
  },

  /** 02 · Go Beyond the Conversation (46:42802) — visual left, pink rings. */
  split: {
    size: 'compact',
    reverse: true,
    title: 'Go Beyond the Conversation',
    body: [
      'Meetings contain more than spoken words. They hold decisions, commitments, context, lessons, and information that can shape what happens next. When these details are difficult to find or revisit, important knowledge can be lost between meetings.',
      'Acumeet Meeting Intelligence is designed to help teams organise and revisit the information that matters, making meeting outcomes easier to understand and use. The precise information captured depends on the meeting content available and the product features enabled.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(KnowledgeSearchCard, {
        width: 440,
        query: 'vendor approval workflow',
        results: [
          {
            meeting: 'Client Feedback Analysis Session',
            date: 'Jun 3',
            excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
          },
          {
            meeting: 'Weekly ProcureCentro Stand-up',
            date: 'Apr 12',
            excerpt: '…approval workflow dependencies raised for Q3 planning.',
          },
          {
            meeting: 'Monthly Marketing Strategy Review',
            date: 'May 21',
            excerpt: '…agreed to revisit the approval cycle after the pilot.',
          },
        ],
      }),
    },
  },

  /** 03 · rows (46:42843) — the "DECISIONS" overline is hidden in Figma. */
  decisions: {
    title: 'Keep Important Decisions Visible',
    paragraphs: [
      'Make key decisions from meetings easier to identify and revisit. Preserve what was agreed and, where available, the context surrounding a decision so teams can refer back to previous outcomes instead of relying on memory or scattered notes.',
    ],
    bullets: [
      'Example: “What did we decide about the product launch timeline?”',
      'Business value: Improve visibility into decisions and help teams maintain continuity across discussions.',
    ],
    cta: { label: 'Explore Meeting Decisions', to: P.aiMeetingSummaries, size: 'lg' },
  },

  /** 03 · rows Split (46:42858) — dark, crimson waveform panel. */
  actions: {
    size: 'compact',
    tone: 'dark',
    reverse: true,
    title: 'Connect Conversations to Next Steps',
    body: [
      'Meetings often end with commitments, tasks, and follow-ups. Meeting Intelligence helps surface action-related information from discussions so teams can understand what needs to happen next. Where supported, actions may be associated with owners, deadlines, and follow-up status.',
    ],
    bulletStyle: 'dot',
    bullets: [
      { text: 'Example: “What tasks were assigned, who owns them, and what needs to happen next?”' },
      {
        text: 'Business value: Make commitments easier to revisit and reduce the risk of follow-ups being overlooked.',
      },
    ],
    cta: { label: 'Track Meeting Actions', to: P.actionItemManagement, intent: 'ghost-light' },
    visual: {
      tint: 'night',
      pattern: { type: 'waveform', size: 'panel' },
      content: h(ActionItemsCard, {
        width: 440,
        open: 3,
        avatarSize: 20,
        shadow: 'mock',
        tasks: [
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Fri',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Confirm supplier onboarding checklist owners',
            due: 'May 20',
            avatar: AVATARS['George Nwokoro'],
          },
          { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: AVATARS['Ruth Godwin'] },
        ],
      }),
    },
  },

  /** 03 · rows (46:42909). */
  discussions: {
    title: 'Understand What Was Discussed and Why',
    paragraphs: [
      'Keep the substance of a meeting accessible beyond the live conversation. Organise key topics, concerns, proposals, questions, and perspectives so users can return to the relevant context when they need to make a decision or continue a discussion.',
    ],
    bullets: [
      'Example: “What were the main concerns raised during the budget review?”',
      'Business value: Help teams recover context and understand the reasoning behind important conversations.',
    ],
    cta: { label: 'Explore Meeting Discussions', to: P.aiTranscription, size: 'lg' },
  },

  /** Split (46:42923) — Chapter-style row ("Chapter 04 / 05" hidden), green ticks, lilac rings. */
  history: {
    size: 'chapter',
    title: 'See How Conversations Evolve Over Time',
    body: [
      'Important work rarely happens in a single meeting. Accessing previous meeting information can help teams understand how a topic has progressed, what was agreed earlier, and which issues or actions still need attention.',
    ],
    bulletStyle: 'tick',
    bullets: [
      { text: 'Example: “How has our approach to this project changed over the last four meetings?”' },
      {
        text: 'Business value: Support continuity between meetings and make historical context easier to retrieve.',
      },
    ],
    visual: {
      tint: 'lilac',
      pattern: { type: 'rings', size: 'panel' },
      content: h(MeetingAnalyticsCard, {
        width: 460,
        range: 'This month',
        barWidth: 32,
        barPitch: 42,
        legend: [
          { label: 'Sentiment', value: '73%', tone: 'green' },
          { label: 'Engagement', value: '55%', tone: 'blue' },
          { label: 'Quality', value: '48%', tone: 'amber' },
        ],
      }),
    },
  },

  /** 03 · rows (46:42978). */
  memory: {
    title: 'Turn Meeting Records into Organisational Memory',
    paragraphs: [
      'Meetings can contain valuable knowledge about processes, customers, projects, decisions, and lessons learned. Making that information easier to preserve and retrieve can help teams retain context beyond the original meeting and the people who attended it.',
    ],
    bullets: [
      'Example: “What lessons from previous projects should inform this decision?”',
      'Business value: Help preserve organisational context and make accumulated knowledge more useful over time.',
    ],
    cta: { label: 'Preserve Institutional Knowledge', to: P.knowledgeRepository, size: 'lg' },
  },

  /** Benefits (46:42992) — 846 + 413, then 3 × 413. */
  benefits: {
    title: 'How Meeting Intelligence Helps',
    accent: 'Teams',
    accentBreak: false,
    cards: [
      {
        title: 'Decision visibility',
        body: 'Make important meeting outcomes easier to revisit.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-span' },
        span: 2,
      },
      {
        title: 'Action clarity',
        body: 'Surface commitments and next steps discussed in meetings.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Discussion context',
        body: 'Retain access to key topics and the reasoning behind them.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Continuity',
        body: 'Connect current work with relevant information from previous meetings.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Knowledge retention',
        body: 'Make useful meeting information available for future reference.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
    ],
  },

  /** FAQ (46:43001). */
  faq: [
    {
      q: 'What is meeting intelligence?',
      a: 'Meeting intelligence is the process of turning meeting content into useful information such as decisions, actions, discussion context, historical records, and organisational knowledge.',
    },
    {
      q: 'How is meeting intelligence different from meeting summaries?',
      a: 'A summary gives users a condensed account of a meeting. Meeting intelligence focuses on making specific information—such as decisions, actions, discussion points, and historical context—easier to find and use. The exact capabilities depend on the product.',
    },
    {
      q: 'What does institutional knowledge mean?',
      a: 'Institutional knowledge is information and context accumulated through an organisation’s work, decisions, processes, and experiences. Meeting records can be one source of that knowledge.',
    },
    {
      q: 'Does meeting intelligence replace analytics?',
      a: 'Not necessarily. Meeting Intelligence focuses on understanding meeting content and outcomes, while an Analytics page can focus on measurable patterns, trends, and performance metrics.',
    },
  ],

  /** Explore more (46:43012). */
  related: exploreMore(['analytics', 'knowledgeRepository', 'aiMeetingSummaries', 'actionItemManagement'], {
    eyebrow: 'Keep exploring',
  }),

  /** CTA band (46:43022). */
  cta: {
    title: 'Make Every Meeting More Valuable.',
    lead: 'Turn meeting conversations into information your team can revisit, learn from, and use to move work forward.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
