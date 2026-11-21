import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import TalkTimeCard from '../components/visuals/TalkTimeCard';
import { exploreMore, productBreadcrumb } from './products';

/* "UI · Transcript" sprint conversation, at different timestamps. */
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

/* Talk-time rows: Faith / Fredelina / Ruth / George / Warith (Figma bar colours). */
const speakers = (faith, fredelina, ruth, george, warith) => [
  { name: 'Faith Oluwale', share: faith, tone: 'magenta' },
  { name: 'Fredelina Augustus', share: fredelina, tone: 'blue' },
  { name: 'Ruth Godwin', share: ruth, tone: 'green' },
  { name: 'George Nwokoro', share: george, tone: 'purple' },
  { name: 'Warith Abraham', share: warith, tone: 'amber' },
];

const reviewSummary = (title, width) =>
  h(SummaryCard, {
    width,
    title,
    scores: [
      { label: 'Quality', value: 71, bar: 'amber' },
      { label: 'Sentiment', value: 81, bar: 'green' },
      { label: 'Engagement', value: 25, bar: 'blue' },
    ],
    insights: [
      'George asked for a system sync audit before the next release.',
      'Faith proposed reworking the vendor approval process to unblock onboarding.',
    ],
  });

/** 02.06 · Speaker Recognition (Figma 46:39919). */
export const speakerRecognition = {
  breadcrumb: productBreadcrumb('Speaker Recognition'),

  /** 01 · Hero (46:39922) — dark rings hero, outlined "Explore Acumeet" pill. */
  hero: {
    variant: 'rings',
    eyebrow: 'Product · Speaker Recognition',
    title: 'Know Who Said What in Every Meeting',
    lead: 'Keep meeting conversations clear and easier to review with AI speaker recognition. Acumeet helps teams connect spoken contributions to the right speakers, making meeting transcripts more useful for understanding discussions, decisions, and next steps.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },

  /** "✓ Hero carousel · 02.06 · Speaker Reco…" (46:46368) — 3 slides. */
  carousel: [
    {
      label: 'Talk time',
      content: h(TalkTimeCard, { duration: '52 min', speakers: speakers(33, 17, 17, 10, 23) }),
    },
    {
      label: 'Transcript',
      content: h(TranscriptCard, { width: 560, lines: sprintLines('02:10', '02:34', '02:56') }),
    },
    {
      label: 'Analytics',
      content: h(MeetingAnalyticsCard, {
        width: 560,
        range: 'Last 7 days',
        barWidth: 42,
        barPitch: 52,
        legend: [
          { label: 'Sentiment', value: '80%', tone: 'green' },
          { label: 'Engagement', value: '56%', tone: 'blue' },
          { label: 'Quality', value: '61%', tone: 'amber' },
        ],
      }),
    },
  ],

  /** Split 46:39950 — visual left, blue rings, transcript (hidden "THE PROBLEM" overline). */
  split: {
    size: 'standard',
    reverse: true,
    title: 'A Meeting Transcript Is More Useful When You Know Who Spoke',
    body: [
      'A transcript may capture the words spoken during a meeting, but understanding the conversation also requires knowing who contributed each point.',
      'When speaker attribution is unclear, teams can struggle to follow the flow of a discussion, revisit specific contributions, and understand the context behind important decisions.',
      'Acumeet’s speaker recognition experience is designed to make conversations easier to interpret by helping distinguish speakers within meeting transcripts.',
    ],
    cta: { label: 'See How Acumeet Works', to: ROUTES.products },
    visual: {
      tint: 'blue',
      pattern: { type: 'rings', size: 'panel' },
      content: h(TranscriptCard, {
        lines: [
          {
            name: 'Faith Oluwale',
            time: '39:30',
            text: 'Supplier engagement dropped after we changed the portal.',
          },
          {
            name: 'George Nwokoro',
            time: '40:37',
            text: 'That explains the missed savings we flagged last month.',
          },
          {
            name: 'Fredelina Augustus',
            time: '41:44',
            text: 'Let’s move supplier reviews to monthly and track it as a KPI.',
          },
        ],
      }),
    },
  },

  /** Tabs explorer (46:40004) + "✓ Explorer · Key Features" (46:46515). */
  explorer: {
    title: 'Key',
    accent: 'Features',
    items: [
      {
        title: 'Speaker Identification',
        body: 'Make it easier to distinguish different speakers in a meeting transcript so readers can follow the conversation and understand individual contributions.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(TalkTimeCard, { width: 480, duration: '60 min', speakers: speakers(25, 25, 20, 15, 15) }),
      },
      {
        title: 'Clear Speaker Attribution',
        body: 'Associate transcript segments with identified speakers where supported, helping teams understand who made a point or contributed to a discussion.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(TranscriptCard, { lines: sprintLines('03:21', '04:28', '05:35') }),
      },
      {
        title: 'Easier Transcript Review',
        body: 'Make conversations easier to revisit by giving readers more context around the flow of the discussion and the people involved.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: reviewSummary('Monthly Marketing Strategy Review', 440),
      },
      {
        title: 'Better Context for Meeting Intelligence',
        body: 'Speaker attribution can support a clearer understanding of meeting discussions alongside summaries, decisions, and follow-up actions.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(DecisionsCard, {
          width: 420,
          date: 'Jun 4',
          rows: [
            { kind: 'decision', text: 'Revisit the vendor approval cycle' },
            { kind: 'decision', text: 'Pilot automated PO generation' },
            { kind: 'risk', text: 'Sync lag during peak transaction periods' },
          ],
          topics: ['Supplier contracts', 'KPIs', 'PO automation', 'Savings'],
        }),
      },
    ],
  },

  /** Benefits 46:40008 — bento: 846 + 413, then 3 × 413 ("✓ Card · …"). */
  benefits: {
    title: 'Bring More Context to',
    accent: 'Every Conversation',
    accentBreak: false,
    tone: 'subtle',
    cards: [
      {
        title: 'Understand contributions',
        body: 'Follow who said what during a meeting.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-wide' },
        span: 2,
      },
      {
        title: 'Review discussions with greater clarity',
        body: 'Make transcripts easier to navigate and interpret.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Support better decision reviews',
        body: 'Revisit discussions with more context about the participants.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Strengthen meeting intelligence',
        body: 'Use speaker-attributed information alongside other meeting records where supported.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Save time reviewing meetings',
        body: 'Reduce the effort required to reconstruct who contributed to a discussion.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
    ],
  },

  /** Stepper 46:40018 + "✓ Stepper · From Spoken Conversation…" (46:46882). */
  how: {
    title: 'From Spoken Conversation to Clearer',
    accent: 'Meeting Records',
    accentBreak: false,
    tone: 'white',
    steps: [
      {
        label: 'Capture the meeting',
        body: 'Use Acumeet’s supported meeting capture workflow to record or process the conversation.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 440,
          date: 'Tue, Jun 14',
          meetings: [
            { title: 'Monthly Marketing Strategy Review', meta: '10:30 AM · Meet' },
            { title: 'Product Development Sync-Up', meta: '11:00 AM · Teams' },
            { title: 'Client Feedback Analysis Session', meta: '3:30 PM · Zoom' },
          ],
        }),
      },
      {
        label: 'Process the conversation',
        body: 'Convert the meeting audio into a transcript using the available transcription workflow.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TranscriptCard, { lines: sprintLines('02:10', '02:34', '02:56') }),
      },
      {
        label: 'Distinguish speakers',
        body: 'Apply speaker identification or diarization where available to separate contributions in the transcript.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TalkTimeCard, { width: 440, duration: '52 min', speakers: speakers(25, 25, 20, 15, 15) }),
      },
      {
        label: 'Review the conversation',
        body: 'Revisit the transcript with clearer speaker context to support understanding and follow-up.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: reviewSummary('Product Development Sync-Up', 440),
      },
    ],
  },

  /** FAQ 46:40023. */
  faq: [
    {
      q: 'What is AI speaker recognition?',
      a: 'AI speaker recognition refers to technology that helps identify or distinguish speakers in audio. In meeting transcription, speaker diarization commonly means separating a conversation into segments associated with different speakers.',
    },
    {
      q: 'What is the difference between speaker recognition and speaker diarization?',
      a: 'Speaker diarization identifies when different speakers are speaking in an audio recording. Speaker recognition may go further by identifying who a speaker is, depending on the technology and available reference data.',
    },
    {
      q: 'Why is speaker identification useful in business meetings?',
      a: 'It adds context to meeting transcripts, helping people follow contributions, review discussions, and understand how conversations developed.',
    },
    {
      q: 'Can Acumeet identify every speaker by name?',
      a: 'That depends on the speaker identification capabilities currently available and whether the system has enough information to associate a voice with a known individual.',
    },
    {
      q: 'Does speaker recognition work with every meeting platform?',
      a: 'Platform compatibility depends on Acumeet’s supported capture and transcription workflows.',
    },
  ],

  /** Explore more 46:40035 — overline hidden. */
  related: exploreMore(['aiTranscription', 'analytics', 'meetingIntelligence', 'aiMeetingSummaries']),

  /** CTA band 46:40045. */
  cta: {
    title: 'Give Every Voice More Context',
    lead: 'Make meeting conversations easier to understand and revisit. Explore how Acumeet’s meeting intelligence capabilities can help your team get more value from the conversations that move work forward.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Get Started', to: ROUTES.getStarted },
  },
};
