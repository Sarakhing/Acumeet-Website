import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import IntegrationsCard from '@/components/visuals/IntegrationsCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import { AVATARS } from '@/components/visuals/people';
import SummariesHeroVisual from '../components/visuals/SummariesHeroVisual';
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

/** 02.04 · AI Meeting Summaries (Figma 46:35486). */
export const aiMeetingSummaries = {
  breadcrumb: productBreadcrumb('AI meeting summaries'),

  /** 01 · Hero (46:35489) — 721 tall, 46px title, outlined secondary button, hairline field. */
  hero: {
    eyebrow: 'AI meeting summaries',
    eyebrowStyle: 'chip',
    pattern: 'hairlines',
    title: 'Turn business meetings into clear summaries and tracked actions',
    titleSize: 46,
    copyWidth: 580,
    copyTop: 56,
    lead: [
      'Meetings should move work forward, not leave teams searching for notes or chasing forgotten decisions. Acumeet helps organisations capture meeting information, create useful summaries, and connect decisions to the actions that follow.',
      'Use Acumeet as an AI meeting summarizer to review key discussion points, keep track of actions from previous meetings, and make meeting knowledge easier to revisit.',
    ],
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    secondaryStyle: 'button',
    visual: h(SummariesHeroVisual),
    visualWidth: 665,
    padBottom: 46,
  },

  /** Tabs explorer (46:35647) + "✓ Explorer · Capture, Track and Build" (46:44886). */
  explorer: {
    title: 'Capture, track and build',
    accent: 'knowledge',
    tone: 'white',
    items: [
      {
        title: 'Capture what matters',
        body: 'Turn business meeting conversations into structured summaries that help participants revisit key topics, decisions and next steps. AI meeting notes give teams a more consistent way to review what was discussed after a meeting ends.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(SummaryCard, {
          width: 480,
          title: 'Monthly marketing strategy review',
          scores: [
            { label: 'Quality', value: 54, bar: 'amber' },
            { label: 'Sentiment', value: 73, bar: 'green' },
            { label: 'Engagement', value: 41, bar: 'blue' },
          ],
          insights: [
            'George asked for a system sync audit before the next release.',
            'Faith proposed reworking the vendor approval process to unblock onboarding.',
          ],
        }),
      },
      {
        title: 'Track actions across meetings',
        body: 'Meeting actions should not disappear when the call ends. Acumeet helps teams carry action items forward from previous meetings and review outstanding actions before the next meeting begins. This gives participants useful context on what was agreed, what has progressed and what still needs attention.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(ActionItemsCard, {
          width: 480,
          open: 5,
          avatarSize: 20,
          shadow: 'mock',
          tasks: [
            { title: 'Begin ERP sync audit diagnostics', due: 'Jun 7', avatar: AVATARS['Ruth Godwin'] },
            {
              title: 'Identify top recurring items for PO automation pilot',
              due: 'This week',
              avatar: AVATARS['George Nwokoro'],
            },
            {
              title: 'Confirm supplier onboarding checklist owners',
              due: 'Jun 9',
              avatar: AVATARS['Faith Oluwale'],
            },
          ],
        }),
      },
      {
        title: 'Connect meeting actions to your workflow',
        body: 'Bring meeting follow-through closer to the tools your teams already use. With integrations into project management and collaboration tools such as Slack, Jira, Asana and ClickUp, Acumeet can help connect meeting actions with everyday workflows.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(IntegrationsCard, { width: 480, connected: 6, items: INTEGRATIONS }),
      },
      {
        title: 'Build a searchable meeting knowledge base',
        body: 'Meetings generate organisational knowledge that can be useful long after the conversation ends. Acumeet can help teams build a knowledge base of meeting information, making it easier to revisit previous discussions, find shared context and look back at decisions instead of relying on memory or scattered notes.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(KnowledgeSearchCard, {
          width: 480,
          query: 'vendor approval workflow',
          results: [
            {
              meeting: 'Product Development Sync-Up',
              date: 'Apr 7',
              excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            },
            {
              meeting: 'Client Feedback Analysis Session',
              date: 'May 16',
              excerpt: '…approval workflow dependencies raised for Q3 planning.',
            },
            {
              meeting: 'Weekly ProcureCentro Stand-up',
              date: 'Jun 25',
              excerpt: '…agreed to revisit the approval cycle after the pilot.',
            },
          ],
        }),
      },
    ],
  },

  /** Split 46:35651 — visual left, amber rings, "UI · Action items" (440). The "THE CHALLENGE" overline is hidden. */
  split: {
    size: 'standard',
    reverse: true,
    title: 'The meeting ends. The work continues.',
    body: [
      'After a meeting, teams still need to identify decisions, follow up on commitments and prepare for the next discussion. When actions are buried in notes or spread across separate tools, it becomes harder to maintain continuity and accountability.',
      'Acumeet connects meeting summaries with action tracking and meeting knowledge, helping teams carry context forward from one conversation to the next.',
    ],
    visual: {
      tint: 'amber',
      pattern: { type: 'rings', size: 'panel' },
      content: h(ActionItemsCard, {
        width: 440,
        open: 4,
        avatarSize: 20,
        shadow: 'mock',
        tasks: [
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'May 3',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Confirm supplier onboarding checklist owners',
            due: 'Next week',
            avatar: AVATARS['George Nwokoro'],
          },
          { title: 'Draft the Q3 vendor scorecard', due: 'May 13', avatar: AVATARS['Ruth Godwin'] },
        ],
      }),
    },
  },

  /** Stepper 46:35706 + "✓ Stepper · How It Works" (46:45118) — 5 steps. */
  how: {
    title: 'How it',
    accent: 'works',
    accentBreak: false,
    tone: 'white',
    steps: [
      {
        label: 'Capture the conversation',
        body: 'Create a structured record of the meeting and its key discussion points.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 400,
          shadow: 'float',
          date: 'Mon, Jun 8',
          meetings: [
            { title: 'Weekly ProcureCentro Stand-up', meta: '9:00 AM · Teams' },
            { title: 'Monthly marketing strategy review', meta: '2:00 PM · Zoom' },
            { title: 'Product Development Sync-Up', meta: '4:00 PM · Meet' },
          ],
        }),
      },
      {
        label: 'Summarise decisions and next steps',
        body: 'Make the main outcomes easier for participants to review.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(SummaryCard, {
          width: 440,
          title: 'Client feedback analysis session',
          scores: [
            { label: 'Quality', value: 49, bar: 'amber' },
            { label: 'Sentiment', value: 83, bar: 'green' },
            { label: 'Engagement', value: 31, bar: 'blue' },
          ],
          insights: [
            'Faith proposed reworking the vendor approval process to unblock onboarding.',
            'Fredelina flagged missed savings from low supplier engagement.',
          ],
        }),
      },
      {
        label: 'Carry actions forward',
        body: 'Review outstanding items from earlier meetings before the next meeting begins.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(ActionItemsCard, {
          width: 440,
          open: 3,
          avatarSize: 20,
          shadow: 'mock',
          tasks: [
            { title: 'Begin ERP sync audit diagnostics', due: 'Jun 9', avatar: AVATARS['Ruth Godwin'] },
            {
              title: 'Identify top recurring items for PO automation pilot',
              due: 'Today',
              avatar: AVATARS['George Nwokoro'],
            },
            {
              title: 'Confirm supplier onboarding checklist owners',
              due: 'Jun 12',
              avatar: AVATARS['Faith Oluwale'],
            },
          ],
        }),
      },
      {
        label: 'Connect to team tools',
        body: 'Link meeting follow-through with supported project management and collaboration workflows.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(IntegrationsCard, { width: 440, connected: 6, items: INTEGRATIONS }),
      },
      {
        label: 'Revisit meeting knowledge',
        body: 'Return to previous meeting information when the team needs context or a reminder of what was shared.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(KnowledgeSearchCard, {
          width: 440,
          query: 'vendor approval workflow',
          results: [
            {
              meeting: 'Weekly ProcureCentro Stand-up',
              date: 'May 5',
              excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            },
            {
              meeting: 'Monthly Marketing Strategy Review',
              date: 'Jun 14',
              excerpt: '…approval workflow dependencies raised for Q3 planning.',
            },
            {
              meeting: 'Product Development Sync-Up',
              date: 'Apr 23',
              excerpt: '…agreed to revisit the approval cycle after the pilot.',
            },
          ],
        }),
      },
    ],
  },

  /** Statement 46:35710 — night + dot grid, gradient accent. */
  statement: {
    tone: 'dark',
    title: 'Designed for Business',
    accent: 'meetings',
    paragraphs: [
      'From project reviews and operational check-ins to leadership discussions, Acumeet helps teams retain meeting context and make follow-through more organised. Summaries help people understand what was discussed, action tracking supports continuity between meetings, and a meeting knowledge base helps preserve useful organisational information.',
    ],
  },

  /** FAQ 46:37215. */
  faq: [
    {
      q: 'What is an AI meeting summarizer?',
      a: 'An AI meeting summarizer turns meeting information into a concise recap of key discussion points and outcomes. Acumeet helps teams review meeting information and connect it to follow-up work.',
    },
    {
      q: 'Can Acumeet track action items from previous meetings?',
      a: 'Acumeet is designed to help teams review actions from previous meetings before the next meeting takes place, making it easier to revisit outstanding items and maintain continuity.',
    },
    {
      q: 'Does Acumeet integrate with project management tools?',
      a: 'Acumeet’s intended workflow connects meeting actions with tools teams use to manage work, including Slack, Jira, Asana and ClickUp.',
    },
    {
      q: 'Can Acumeet create a knowledge base from meetings?',
      a: 'Acumeet can help organisations retain meeting information as a knowledge resource, so teams can revisit previous discussions and shared context.',
    },
    {
      q: 'How do AI meeting notes help teams?',
      a: 'AI meeting notes give participants a more consistent way to review discussions, revisit decisions and understand what needs follow-up after a meeting.',
    },
  ],

  /** Explore more 46:37227 — "Keep exploring" overline shown. */
  related: exploreMore(
    ['actionItemManagement', 'meetingIntelligence', 'aiTranscription', 'atlas'],
    { eyebrow: 'Keep exploring' },
  ),

  /** CTA band 46:37237. */
  cta: {
    title: 'Make every meeting count beyond the call',
    lead: 'Capture the conversation, carry actions forward and keep important meeting knowledge within reach.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore meeting intelligence', to: ROUTES.product.meetingIntelligence },
  },
};
