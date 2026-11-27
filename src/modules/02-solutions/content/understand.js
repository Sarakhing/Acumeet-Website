import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import UnderstandHeroVisual from '../components/visuals/UnderstandHeroVisual';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import { AVATARS } from '@/components/visuals/people';
import { SOLUTIONS, solutionBreadcrumb } from './solutions';

const faith = AVATARS['Faith Oluwale'];
const george = AVATARS['George Nwokoro'];
const ruth = AVATARS['Ruth Godwin'];

/** 03.06 · Understand (Figma 46:19096). */
export const understand = {
  breadcrumb: solutionBreadcrumb('Understand'),

  hero: {
    variant: 'wash',
    pattern: 'hairlines',
    eyebrowStyle: 'chip',
    secondaryStyle: 'button',
    eyebrow: 'Solutions · Understand',
    title: 'Turn every conversation into business intelligence.',
    lead: 'Your meetings are full of decisions, ideas, commitments, and knowledge. Acumeet helps your organisation uncover the value in those conversations, connect insights across meetings, and turn information into meaningful business action.',
    primary: { label: 'Book an enterprise demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    visual: h(UnderstandHeroVisual),
    visualWidth: 660,
    copyWidth: 580,
    titleSize: 54,
    // Figma copy at y=120 and a 643px hero (see UnderstandHeroVisual for the canvas).
    copyTop: 56,
    padBottom: 23,
  },

  /** "02 · rows" Split 46:19268 — visual left. */
  transcript: {
    size: 'compact',
    reverse: true,
    title: 'Understand more than what was said.',
    body: [
      'A meeting transcript tells you what people said. Meeting intelligence helps you understand what matters.',
      'Acumeet transforms meeting conversations into structured information, helping teams identify important discussions, follow key developments, and revisit the context behind business decisions.',
      'With meeting intelligence, your organisation can:',
      'Turn conversations into organised meeting summaries.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(TranscriptCard, {
        lines: [
          {
            name: 'Faith Oluwale',
            time: '07:02',
            text: 'Supplier engagement dropped after we changed the portal.',
          },
          {
            name: 'George Nwokoro',
            time: '08:09',
            text: 'That explains the missed savings we flagged last month.',
          },
          {
            name: 'Fredelina Augustus',
            time: '09:16',
            text: 'Let’s move supplier reviews to monthly and track it as a KPI.',
          },
        ],
      }),
    },
  },

  /** Editorial 46:19321. */
  decisions: {
    tone: 'subtle',
    title: 'Know what was decided. Understand why it matters.',
    paragraphs: [
      'Important business decisions are often spread across multiple meetings, conversations, and follow-ups. When that context is difficult to find, teams can lose sight of why a decision was made or what informed it.',
      'Acumeet helps teams capture and revisit decisions from meeting conversations, making it easier to understand the reasoning and context behind important business outcomes.',
      'Decision visibility: Identify key decisions discussed during meetings.',
      'Decision context: Revisit the conversations surrounding important decisions.',
      'Historical reference: Find relevant information from previous meetings when reviewing a decision.',
    ],
  },

  /** Dark Split 46:19331 — visual left, white 4% waveform bars on night. */
  actions: {
    size: 'compact',
    tone: 'dark',
    reverse: true,
    title: 'Turn meeting commitments into meaningful progress.',
    body: [
      'Meetings should move work forward. But when action items are forgotten, ownership is unclear, or follow-ups are missed, even productive discussions can fail to deliver results.',
      'Acumeet helps turn meeting conversations into actionable follow-through by identifying action items, organising commitments, and helping teams keep track of what needs to happen next.',
      'Action item extraction: Identify tasks and commitments discussed in meetings.',
      'Ownership and accountability: Make responsibilities clearer where action owners are identified.',
    ],
    visual: {
      tint: 'night',
      pattern: { type: 'waveform', size: 'panel', color: 'rgb(245 245 245 / 0.333)' },
      content: h(ActionItemsCard, {
        avatarSize: 20,
        width: 440,
        open: 4,
        shadow: 'mock',
        tasks: [
          { title: 'Draft the Q3 vendor scorecard', due: 'Jun 7', avatar: faith },
          {
            title: 'Share feedback on the vendor approval cycle draft',
            due: 'May 12',
            avatar: george,
          },
          { title: 'Begin ERP sync audit diagnostics', due: 'Fri', avatar: ruth },
        ],
      }),
    },
  },

  /**
   * "✓ Chapters · Know What Was Decided…" instance 46:19377 (the visible one;
   * 46:19483 is hidden). Figma hides the nav + counter and overrides the
   * chapter to the Atlas copy on a light section with a mint rings panel.
   */
  atlas: {
    tone: 'light',
    chapters: [
      {
        tab: 'Your Meeting and Account',
        title: 'Your meeting and account intelligence, one conversation away.',
        paragraphs: [
          'Finding information should not mean searching through countless transcripts, summaries, and account screens.',
          'Atlas is Acumeet’s conversational AI assistant, designed to help users ask questions and retrieve relevant information from the meetings and account information available to them.',
          'Instead of manually searching through records, users can ask questions in natural language and explore the information they need through a conversational experience.',
        ],
        checks: [
          'Ask questions. Find context. Get to the information that matters.',
          'Ask questions about previous meetings.',
          'Retrieve relevant information from available meeting records.',
          'Explore discussions, decisions, and action items.',
          'Ask about available account, subscription, and usage information.',
        ],
        panel: {
          width: 656,
          height: 480,
          tint: 'mint',
          pattern: { type: 'rings', size: 'panel' },
          glow: null,
        },
        visual: h(AtlasChatCard, {
          width: 460,
          question: 'What changed in our supplier engagement this month?',
          answer: [
            'Across 3 meetings, the team linked ',
            { b: 'low supplier engagement' },
            ' to missed savings and agreed a ',
            { b: 'monthly supplier review' },
            '.',
          ],
          quote: {
            name: 'Fredelina Augustus',
            time: '09:12',
            text: '“We’re missing savings because suppliers aren’t engaging with the new process.”',
          },
          sources: ['Strategy Review · 09:12', 'Stand-up · 21:40'],
          prompts: ['Compare with last month', 'Who owns the review?'],
        }),
      },
    ],
  },

  /** Editorial 46:19495 (46:19485 is a hidden duplicate). */
  knowledge: {
    tone: 'white',
    title: 'Turn meeting history into lasting organisational knowledge.',
    paragraphs: [
      'Every organisation accumulates valuable knowledge through its meetings. Strategies are discussed, problems are solved, decisions are made, and lessons are learned.',
      'But when that knowledge remains scattered across individual calendars, recordings, and disconnected conversations, it becomes difficult to retrieve and reuse.',
      'Acumeet helps organisations preserve and access meeting-derived knowledge, making past conversations a more useful resource for current and future work.',
      'Centralised meeting knowledge: Bring meeting-derived information into a more accessible environment.',
      'Searchable history: Find relevant information from previous conversations.',
    ],
  },

  /** Head 46:19505 + "✓ Explorer · One Platform. Five Ways…" (spec 46:22156). */
  explorer: {
    title: 'One platform. Five ways to',
    accent: 'understand more.',
    items: [
      {
        title: 'Meeting intelligence',
        body: 'Understand conversations, themes, and important discussion points.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(SummaryCard, {
          title: 'Weekly ProcureCentro Stand-up',
          scores: [
            { label: 'Quality', value: 68, bar: 'amber' },
            { label: 'Sentiment', value: 84, bar: 'green' },
            { label: 'Engagement', value: 54, bar: 'blue' },
          ],
          insights: [
            'Fredelina flagged missed savings from low supplier engagement.',
            'George asked for a system sync audit before the next release.',
          ],
        }),
      },
      {
        title: 'Decision intelligence',
        body: 'Revisit decisions and the context behind them.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(DecisionsCard, {
          date: 'May 28',
          rows: [
            { kind: 'decision', text: 'Consolidate ERP sync alerts' },
            { kind: 'decision', text: 'Revisit the vendor approval cycle' },
            { kind: 'risk', text: 'Low supplier engagement on savings' },
          ],
          topics: ['ERP integration', 'Supplier contracts', 'KPIs', 'PO automation'],
        }),
      },
      {
        title: 'Action intelligence',
        body: 'Keep commitments, responsibilities, and follow-ups visible.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(ActionItemsCard, {
          avatarSize: 20,
          width: 480,
          open: 4,
          shadow: 'mock',
          tasks: [
            {
              title: 'Identify top recurring items for PO automation pilot',
              due: 'Jun 9',
              avatar: faith,
            },
            { title: 'Confirm supplier onboarding checklist owners', due: 'Today', avatar: george },
            { title: 'Draft the Q3 vendor scorecard', due: 'Jun 12', avatar: ruth },
          ],
        }),
      },
      {
        title: 'Atlas',
        body: 'Ask questions and retrieve information through conversation.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(AtlasChatCard, {
          width: 480,
          question: 'Show all my action items',
          answer: [
            'You have 3 open action items from the Weekly ProcureCentro Stand-up. The nearest is vendor approval feedback, due Jun 7.',
          ],
          quote: {
            name: 'George Nwokoro',
            time: '27:15',
            text: '“Faith, can you share feedback on the approval draft by June 7?”',
          },
          sources: ['Stand-up · 27:15 · George'],
          prompts: ['Mark one as done', 'What’s overdue?'],
        }),
      },
      {
        title: 'Organisational knowledge',
        body: 'Preserve and reuse the knowledge generated through meetings.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(KnowledgeSearchCard, {
          query: 'vendor approval workflow',
          results: [
            {
              meeting: 'Weekly ProcureCentro Stand-up',
              date: 'Jun 3',
              excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            },
            {
              meeting: 'Monthly Marketing Strategy Review',
              date: 'Apr 12',
              excerpt: '…approval workflow dependencies raised for Q3 planning.',
            },
            {
              meeting: 'Product Development Sync-Up',
              date: 'May 21',
              excerpt: '…agreed to revisit the approval cycle after the pilot.',
            },
          ],
        }),
      },
    ],
  },

  /** "Benefits" Head 46:19509 + Grid 46:19511 ("✓ Card · …" 630×280, 2-up). */
  audiences: {
    title: 'Built for teams that need more',
    accent: 'from their meetings',
    accentBreak: false,
    columns: 2,
    cards: [
      {
        title: 'Leadership and executive teams',
        body: 'Maintain visibility into business discussions, important decisions, and commitments across meetings.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-wide' },
        to: ROUTES.useCases,
      },
      {
        title: 'Project and operations teams',
        body: 'Keep actions, follow-ups, and previous discussions connected to ongoing work.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card-wide' },
        to: ROUTES.useCases,
      },
      {
        title: 'Sales and customer success teams',
        body: 'Revisit conversations, commitments, and relevant context to support better-informed customer engagement.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card-wide' },
        to: ROUTES.useCases,
      },
      {
        title: 'Enterprise and knowledge teams',
        body: 'Make institutional knowledge more accessible and reduce reliance on individual memory.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card-wide' },
        to: ROUTES.useCases,
      },
    ],
  },

  faq: [
    {
      q: 'What is meeting intelligence?',
      a: 'Meeting intelligence transforms meeting conversations into structured information and insights, helping teams understand discussions, decisions, and actions.',
    },
    {
      q: 'How is decision intelligence different from meeting summaries?',
      a: 'A meeting summary recaps a conversation. Decision intelligence focuses on identifying decisions and helping users revisit the context in which they were made.',
    },
    {
      q: 'How does Acumeet help teams follow up on actions?',
      a: 'Acumeet can identify action items from meeting conversations and help teams revisit commitments and follow-ups. Supported integrations can connect meeting actions with collaboration and project management tools.',
    },
    {
      q: 'What can I ask Atlas?',
      a: 'Users can ask about available meeting information, including previous discussions, decisions, and action items, as well as relevant account, subscription, and usage information available to them.',
    },
    {
      q: 'What is organisational knowledge?',
      a: 'Organisational knowledge is the information, context, and experience an organisation accumulates through its work. Acumeet helps make meeting-derived knowledge easier to preserve and retrieve.',
    },
    {
      q: 'How does Acumeet help organisations get more value from meetings?',
      a: 'By making meeting information easier to understand, decisions easier to revisit, actions easier to follow up on, and previous knowledge easier to find.',
    },
  ],

  // Figma keeps related thumbnails positional on this page (lilac rings, pink
  // dots, blue waveform, mint hairlines), so EMI and Protect are re-tinted.
  related: [
    SOLUTIONS.connect,
    { ...SOLUTIONS.emi, tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
    SOLUTIONS.govern,
    { ...SOLUTIONS.protect, tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
  ],

  cta: {
    title: 'Your meetings have more to offer.',
    lead: 'Discover how Acumeet can help your organisation turn conversations into intelligence, decisions into direction, and meeting knowledge into lasting business value.',
    primary: { label: 'Book an enterprise demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
