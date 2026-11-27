import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import { AVATARS } from '@/components/visuals/people';
import sparkleBlueLg from '@/assets/images/products/atlas-sparkle-blue-29x29.svg';
import sparkleBlue from '@/assets/images/products/atlas-sparkle-blue-24x24.svg';
import sparkleAmber from '@/assets/images/products/atlas-sparkle-amber-24x24.svg';
import sparkleTeal from '@/assets/images/products/atlas-sparkle-teal-24x24.svg';
import sparkleMagenta from '@/assets/images/products/atlas-sparkle-magenta-24x24.svg';
import searchPurple from '@/assets/images/products/atlas-search-purple-24x24.svg';
import searchGreen from '@/assets/images/products/atlas-search-green-24x24.svg';
import { exploreMore, productBreadcrumb } from './products';

const USAGE_PROMPTS = ['Show usage by team', 'Compare plans'];
const USAGE_SOURCES = ['Plan & usage', 'Billing'];

/** 02.08 · Atlas (Figma 46:41403). */
export const atlas = {
  breadcrumb: productBreadcrumb('Atlas'),

  /** 01 · Hero (46:41406) — dark rings hero, carousel bleeds into the next section. */
  hero: {
    variant: 'rings',
    eyebrow: 'Product · Atlas',
    title: 'Your Acumeet information. One conversation away.',
    lead: 'Ask Atlas about your meetings, account, subscription, and usage. Find relevant information across your available meeting knowledge, get answers in context, and explore the information you need through one conversational interface built into Acumeet.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 02.08 · Atlas" (46:47403) — Slide=1/2/3, 560px cards. */
  carousel: [
    {
      label: 'Ask',
      content: h(AtlasChatCard, {
        width: 560,
        question: 'How many minutes are left this month?',
        answer: [
          'You have 420 of 1,000 minutes left this month. At this pace you’ll stay within your plan.',
        ],
        sources: USAGE_SOURCES,
        prompts: USAGE_PROMPTS,
      }),
    },
    {
      label: 'Search',
      content: h(KnowledgeSearchCard, {
        width: 560,
        query: 'vendor approval workflow',
        results: [
          {
            meeting: 'Product Development Sync-Up',
            date: 'May 23',
            excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
          },
          {
            meeting: 'Client Feedback Analysis Session',
            date: 'Jun 6',
            excerpt: '…approval workflow dependencies raised for Q3 planning.',
          },
          {
            meeting: 'Weekly ProcureCentro Stand-up',
            date: 'Apr 15',
            excerpt: '…agreed to revisit the approval cycle after the pilot.',
          },
        ],
      }),
    },
    {
      label: 'Action items',
      content: h(ActionItemsCard, {
        width: 560,
        open: 3,
        avatarSize: 20,
        shadow: 'mock',
        tasks: [
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'This week',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Confirm supplier onboarding checklist owners',
            due: 'Jun 9',
            avatar: AVATARS['George Nwokoro'],
          },
          { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: AVATARS['Ruth Godwin'] },
        ],
      }),
    },
  ],

  /** Split 46:41434 — copy left, lilac rings panel with the account-scoped Atlas chat. */
  chatbot: {
    size: 'standard',
    title: 'More than a chatbot. A conversational way to navigate Acumeet.',
    body: [
      'Finding information should not mean manually searching through meeting records or navigating multiple areas of an application. Atlas gives users a conversational way to ask questions about available meeting information and relevant account details. Ask a question in everyday language and use the response to find the context you need.',
      'The information Atlas can return depends on the data available to it and the permissions assigned to the user.',
    ],
    visual: {
      tint: 'lilac',
      pattern: { type: 'rings', size: 'panel' },
      content: h(AtlasChatCard, {
        width: 440,
        scope: 'Account',
        question: 'How many minutes have we used this month?',
        answer: [
          'Your workspace has used ',
          { b: '580 of 1,000 minutes' },
          ' this month. At this pace you’ll stay ',
          { b: 'within your plan' },
          '.',
        ],
        sources: USAGE_SOURCES,
        prompts: USAGE_PROMPTS,
      }),
    },
  },

  /** 03 · rows (46:41500) "What you can do with Atlas" — 7 capability cards (4 + 3). */
  capabilities: {
    title: 'What you can do with Atlas',
    lead: 'Ask, search and act on your meetings and account from one conversation.',
    items: [
      { title: 'Conversational AI', icon: sparkleBlueLg, tone: 'blue' },
      { title: 'Semantic search', icon: searchPurple, tone: 'purple' },
      { title: 'Knowledge search', icon: searchGreen, tone: 'green' },
      { title: 'Contextual answers', icon: sparkleAmber, tone: 'amber' },
      { title: 'Source citations', icon: sparkleTeal, tone: 'teal' },
      { title: 'Permission-aware', icon: sparkleMagenta, tone: 'magenta' },
      { title: 'Account & usage', icon: sparkleBlue, tone: 'blue' },
    ],
  },

  /** Split 46:41557 — visual left, pink rings, knowledge search; magenta-dot prompt list. */
  naturally: {
    size: 'standard',
    reverse: true,
    title: 'Ask questions naturally',
    body: [
      'Atlas is designed to let users interact with Acumeet through natural-language prompts. Instead of needing to know where information is stored, users can ask questions about meetings, decisions, follow-ups, account details, subscription information, or usage data available to them.',
    ],
    bulletStyle: 'dot',
    bullets: [
      { text: '“What decisions did we make in our last project meeting?”' },
      { text: '“What action items are still outstanding?”' },
      { text: '“What subscription plan am I on?”' },
      { text: '“What usage information is available for my account?”' },
      {
        text: 'Benefit: Make it easier to find and understand information through a familiar conversational experience.',
      },
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(KnowledgeSearchCard, {
        width: 440,
        query: 'vendor approval workflow',
        results: [
          {
            meeting: 'Product Development Sync-Up',
            date: 'Jun 14',
            excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
          },
          {
            meeting: 'Client Feedback Analysis Session',
            date: 'Apr 23',
            excerpt: '…approval workflow dependencies raised for Q3 planning.',
          },
          {
            meeting: 'Weekly ProcureCentro Stand-up',
            date: 'May 6',
            excerpt: '…agreed to revisit the approval cycle after the pilot.',
          },
        ],
      }),
    },
  },

  /** Benefits 46:41612 + "✓ Card · …" (413×280, 3 × 2). */
  benefits: {
    title: 'Key',
    accent: 'benefits',
    accentBreak: false,
    cards: [
      {
        title: 'Conversational access',
        body: 'Ask questions in natural language.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Information discovery',
        body: 'Find relevant details across available meeting knowledge.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Contextual understanding',
        body: 'Receive responses tailored to the question and available context.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Source transparency',
        body: 'Verify answers through source references where supported.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Permission-aware access',
        body: 'Respect role-based access restrictions.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Account visibility',
        body: 'Retrieve available subscription and usage information through a conversational interface.',
        tint: 'grey',
        pattern: { type: 'hairlines', size: 'card' },
      },
    ],
  },

  /** FAQ 46:41622. */
  faq: [
    {
      q: 'What is Atlas?',
      a: 'Atlas is Acumeet’s in-app conversational assistant, designed to help users ask questions and find information about their meetings and other information made available to their account.',
    },
    {
      q: 'Can I ask Atlas questions about previous meetings?',
      a: 'The intended use includes asking questions about available meeting information.',
    },
    {
      q: 'What is semantic search?',
      a: 'Semantic search finds information based on meaning and intent, rather than relying only on exact keyword matches.',
    },
    {
      q: 'How does Atlas handle permissions?',
      a: 'The assistant should only return information the user is authorised to access, in line with Acumeet’s access-control implementation.',
    },
  ],

  /** Explore more 46:41633 ("Keep exploring" overline hidden). */
  related: exploreMore([
    'knowledgeRepository',
    'meetingIntelligence',
    'actionItemManagement',
    'analytics',
  ]),

  /** CTA band 46:41643. */
  cta: {
    title: 'Spend less time searching. Get more from your meeting knowledge.',
    lead: 'Discover how Atlas can help your team ask questions, find relevant meeting information, and navigate the information available in Acumeet through a conversational experience.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
