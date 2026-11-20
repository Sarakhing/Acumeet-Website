import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import TalkTimeCard from '../components/visuals/TalkTimeCard';
import { exploreMore, productBreadcrumb } from './products';

/* Stepper steps 2 and 3 show the same sprint conversation at different times. */
const sprintLines = (t1, t2, t3) => [
  {
    name: 'Faith Oluwale',
    time: t1,
    text: 'We completed 23 story points, which is a 15% increase from the previous sprint.',
  },
  {
    name: 'George Nwokoro',
    time: t2,
    text: 'The authentication module is progressing well, but we need a security review.',
  },
  {
    name: 'Fredelina Augustus',
    time: t3,
    text: 'I can coordinate with the InfoSec team to schedule that audit.',
  },
];

/** 02.03 · AI Transcription (Figma 46:37240). */
export const aiTranscription = {
  breadcrumb: productBreadcrumb('AI Transcription'),

  /** 01 · Hero (46:37243) — dark rings hero, carousel bleeds into the next section. */
  hero: {
    variant: 'rings',
    eyebrow: 'Product · AI Transcription',
    title: 'Turn Business Conversations into Usable Text',
    lead: 'Acumeet AI meeting transcription software helps teams turn spoken business discussions into text they can review, reference and use after the meeting. Keep important details from conversations accessible, reduce reliance on handwritten notes and give your team a clearer record of what was discussed.',
    primary: { label: 'Explore Acumeet', to: ROUTES.products },
    secondary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 02.03 · AI Transcription" (46:44259) — 3 slides. */
  carousel: [
    {
      label: 'Transcript',
      content: h(TranscriptCard, {
        width: 560,
        lines: [
          {
            name: 'Faith Oluwale',
            time: '23:46',
            text: 'The ERP sync failed twice during peak hours this week.',
          },
          {
            name: 'George Nwokoro',
            time: '24:53',
            text: 'We should run a sync audit before the next release goes out.',
          },
          {
            name: 'Fredelina Augustus',
            time: '25:00',
            text: 'I’ll own the audit and share findings by Friday.',
          },
        ],
      }),
    },
    {
      label: 'Speakers',
      content: h(TalkTimeCard, {
        duration: '45 min',
        speakers: [
          { name: 'Faith Oluwale', share: 40, tone: 'magenta' },
          { name: 'Fredelina Augustus', share: 12, tone: 'blue' },
          { name: 'Ruth Godwin', share: 18, tone: 'green' },
          { name: 'George Nwokoro', share: 14, tone: 'purple' },
          { name: 'Warith Abraham', share: 16, tone: 'amber' },
        ],
      }),
    },
    {
      label: 'Summary',
      content: h(SummaryCard, {
        width: 560,
        title: 'Monthly Marketing Strategy Review',
        scores: [
          { label: 'Quality', value: 77, bar: 'amber' },
          { label: 'Sentiment', value: 75, bar: 'green' },
          { label: 'Engagement', value: 57, bar: 'blue' },
        ],
        insights: [
          'Fredelina flagged missed savings from low supplier engagement.',
          'George asked for a system sync audit before the next release.',
        ],
      }),
    },
  ],

  /** Split 46:37271 — copy left, blue rings panel with the transcript. */
  split: {
    size: 'standard',
    title: 'Important Details Should Not Disappear When a Meeting Ends',
    body: [
      'Business meetings move quickly. People may miss details while taking notes, misunderstand a point or struggle to find a specific statement later. When meeting information is scattered across personal notes and follow-up messages, it becomes harder for teams to work from a shared record.',
      'Automated meeting transcription can help make conversations easier to review by creating a text record of meeting discussions. With Acumeet, teams can use captured meeting information as a reference point for follow-up and organisational knowledge, subject to their workspace settings and available features.',
    ],
    visual: {
      tint: 'blue',
      pattern: { type: 'rings', size: 'panel' },
      content: h(TranscriptCard, {
        lines: [
          {
            name: 'Faith Oluwale',
            time: '27:27',
            text: 'Supplier engagement dropped after we changed the portal.',
          },
          {
            name: 'George Nwokoro',
            time: '28:34',
            text: 'That explains the missed savings we flagged last month.',
          },
          {
            name: 'Fredelina Augustus',
            time: '29:41',
            text: 'Let’s move supplier reviews to monthly and track it as a KPI.',
          },
        ],
      }),
    },
  },

  /** Stepper 46:37322 + "✓ Stepper · How Acumeet AI Meeting Transcription Works" (46:44404). */
  how: {
    title: 'How Acumeet AI Meeting',
    accent: 'Transcription Works',
    accentBreak: false,
    tone: 'white',
    steps: [
      {
        label: 'Capture the meeting',
        body: 'Use Acumeet’s supported meeting capture workflow to record or process eligible business meetings.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 440,
          date: 'Mon, May 25',
          meetings: [
            { title: 'Product Development Sync-Up', meta: '2:00 PM · Meet' },
            { title: 'Client Feedback Analysis Session', meta: '4:00 PM · Teams' },
            { title: 'Weekly ProcureCentro Stand-up', meta: '9:00 AM · Zoom' },
          ],
        }),
      },
      {
        label: 'Convert speech to text',
        body: 'Generate a written transcript of the conversation so participants can review what was said.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TranscriptCard, { lines: sprintLines('02:10', '02:34', '02:56') }),
      },
      {
        label: 'Review the discussion',
        body: 'Return to the transcript to check details, revisit key parts of the conversation and support follow-up work.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TranscriptCard, { lines: sprintLines('03:21', '04:28', '05:35') }),
      },
      {
        label: 'Keep information accessible',
        body: 'Where enabled, retain meeting information in the appropriate workspace or knowledge repository for later reference.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(KnowledgeSearchCard, {
          width: 440,
          query: 'vendor approval workflow',
          results: [
            {
              meeting: 'Client Feedback Analysis Session',
              date: 'Apr 4',
              excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            },
            {
              meeting: 'Weekly ProcureCentro Stand-up',
              date: 'May 13',
              excerpt: '…approval workflow dependencies raised for Q3 planning.',
            },
            {
              meeting: 'Monthly Marketing Strategy Review',
              date: 'Jun 22',
              excerpt: '…agreed to revisit the approval cycle after the pilot.',
            },
          ],
        }),
      },
    ],
  },

  /** Benefits 46:37326 + "✓ Card · …" (630×280, State 2 = night) — CardGrid columns={2}. */
  benefits: {
    title: 'Benefits of Business Meeting',
    accent: 'Transcription',
    columns: 2,
    cards: [
      {
        title: 'A written record of discussions',
        body: 'Use business meeting transcription to revisit what was discussed instead of relying only on memory.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-wide' },
      },
      {
        title: 'Less pressure to take notes manually',
        body: 'Give participants more opportunity to engage in the conversation while preserving a transcript for later review.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card-wide' },
      },
      {
        title: 'Easier review and follow-up',
        body: 'Use transcripts as a reference when preparing summaries, checking decisions or confirming next steps.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card-wide' },
      },
      {
        title: 'More accessible meeting knowledge',
        body: 'Keep meeting information available to authorised team members where workspace permissions and product settings allow.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card-wide' },
      },
    ],
  },

  /** Statement 46:37334 — #fafafb, magenta 4% waveform field. */
  statement: {
    tone: 'subtle',
    pattern: 'waveform',
    title: 'Built for Business and',
    accent: 'Enterprise Meetings',
    paragraphs: [
      'Acumeet is designed for organisations that need meeting information to remain useful beyond the live conversation. Teams can use AI meeting transcription as part of a broader meeting intelligence workflow that supports review, summaries, action tracking and knowledge retention.',
    ],
  },

  /** FAQ 46:37338. */
  faqTitle: 'FAQs',
  faq: [
    {
      q: 'What is AI meeting transcription software?',
      a: 'AI meeting transcription software converts spoken meeting conversations into written text, helping teams review and reference discussions after a meeting.',
    },
    {
      q: 'What is the difference between a transcript and a meeting summary?',
      a: 'A transcript is a text record of the conversation, while a summary condenses the discussion into its main points. The two can serve different purposes: a transcript helps users check details, and a summary helps them review the meeting quickly.',
    },
    {
      q: 'Can a transcript be used for follow-up actions?',
      a: 'A transcript can help teams revisit discussion details and clarify next steps.',
    },
    {
      q: 'Who benefits from business meeting transcription?',
      a: 'Teams that need to review discussions, maintain records and share meeting context may benefit from transcription, including project, operations, leadership and customer-facing teams.',
    },
  ],

  /** Explore more 46:37349. */
  related: exploreMore([
    'speakerRecognition',
    'aiMeetingSummaries',
    'knowledgeRepository',
    'atlas',
  ]),

  /** CTA band 46:37359 — single CTA. */
  cta: {
    title: 'Make Every Business Conversation Easier to Revisit',
    lead: 'Turn spoken discussions into a written record your team can review, reference and build on. Explore how Acumeet brings meeting transcription into a broader workflow for meeting intelligence.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: null,
  },
};
