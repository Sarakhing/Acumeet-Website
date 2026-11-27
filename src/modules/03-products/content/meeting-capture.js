import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import { AVATARS } from '@/components/visuals/people';
import MeetingCaptureHeroVisual from '../components/visuals/MeetingCaptureHeroVisual';
import { exploreMore, productBreadcrumb } from './products';

const FAQ_DOWNSTREAM =
  'Captured content can feed into downstream Acumeet capabilities such as transcription, summaries, action items, and meeting intelligence, depending on the supported workflow.';

/** 02.02 · Meeting Capture (Figma 46:37362). */
export const meetingCapture = {
  breadcrumb: productBreadcrumb('Meeting capture'),

  /** 01 · Hero (46:37365) — 800 tall. */
  hero: {
    eyebrow: 'Product · Meeting capture',
    eyebrowStyle: 'chip',
    title: 'Capture every important business',
    accent: 'conversation.',
    lead: 'Acumeet helps organisations capture meeting content so conversations can become searchable information, summaries, decisions, and actionable follow-ups. Bring meeting information into your workflow through supported meeting integrations and audio/video uploads.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    visual: h(MeetingCaptureHeroVisual),
    visualWidth: 665,
    padBottom: 36,
  },

  /** Tabs explorer (46:38522) + "✓ Explorer · Connect to the Meetings…" (46:43657). */
  explorer: {
    title: 'Connect to the meetings you',
    accent: 'already use',
    items: [
      {
        title: 'Microsoft Teams',
        body: 'Bring supported Microsoft Teams meeting content into Acumeet for processing and subsequent meeting intelligence.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(MeetingCaptureCard, {
          title: 'Microsoft Teams meetings',
          width: 480,
          date: 'Mon, May 12',
          meetings: [
            { title: 'Weekly ProcureCentro Stand-up', meta: '9:00 AM · Teams' },
            { title: 'Client feedback analysis session', meta: '11:30 AM · Teams' },
            { title: 'Product Development Sync-Up', meta: '3:00 PM · Teams' },
          ],
        }),
      },
      {
        title: 'Zoom',
        body: 'Bring supported Zoom meeting content into Acumeet for processing and later review.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(MeetingCaptureCard, {
          title: 'Zoom meetings',
          width: 400,
          date: 'Mon, May 12',
          meetings: [
            { title: 'Monthly marketing strategy review', meta: '10:00 AM · Zoom' },
            { title: 'Partner onboarding call', meta: '1:00 PM · Zoom' },
            { title: 'Vendor quarterly review', meta: '4:30 PM · Zoom' },
          ],
        }),
      },
      {
        title: 'Google Meet',
        body: 'Support meeting-content capture through the Google Meet workflow where enabled and available.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(MeetingCaptureCard, {
          title: 'Google Meet meetings',
          width: 400,
          date: 'Mon, May 12',
          meetings: [
            { title: 'Design review', meta: '9:30 AM · Meet' },
            { title: 'Hiring panel debrief', meta: '12:00 PM · Meet' },
            { title: 'Sprint planning', meta: '2:30 PM · Meet' },
          ],
        }),
      },
      {
        title: 'Audio and video uploads',
        body: 'Bring supported existing audio or video files into Acumeet so recorded conversations can be processed without requiring every meeting to be captured live.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(MeetingCaptureCard, {
          title: 'Recent uploads',
          width: 400,
          date: 'This week',
          liveLabel: 'Processing',
          idleLabel: 'Transcribed',
          meetings: [
            { title: 'Board_Q3_review.mp4', meta: '186 MB · Uploaded 2m ago' },
            { title: 'Credit_committee_0610.m4a', meta: '42 MB · Uploaded today' },
            { title: 'Townhall_recording.mp4', meta: '520 MB · Uploaded yesterday' },
          ],
        }),
      },
    ],
  },

  /** Split 46:38526 — visual left, pink rings, "UI · Summary". */
  split: {
    size: 'standard',
    reverse: true,
    title: 'Your meeting is just the beginning.',
    body: [
      'Meeting capture is the entry point into the Acumeet workflow. Once supported meeting content is available, it can feed into other product capabilities.',
      'Capture meeting content through supported meeting workflows or file uploads.',
      'Transcribe supported audio into text where transcription is enabled.',
      'Use downstream capabilities such as summaries, decisions, action items, and searchable meeting knowledge where supported.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(SummaryCard, {
        title: 'Product Development Sync-Up',
        scores: [
          { label: 'Quality', value: 81, bar: 'amber' },
          { label: 'Sentiment', value: 76, bar: 'green' },
          { label: 'Engagement', value: 20, bar: 'blue' },
        ],
        insights: [
          'George asked for a system sync audit before the next release.',
          'Faith proposed reworking the vendor approval process to unblock onboarding.',
        ],
      }),
    },
  },

  /**
   * Stepper 46:38576 + "✓ Stepper · Why Meeting Capture Matters" (46:43879).
   * Tab labels are full sentences; the panel repeats them as the 34px title, no body.
   */
  why: {
    title: 'Why meeting capture',
    accent: 'matters',
    accentBreak: false,
    tone: 'white',
    steps: [
      {
        label:
          'Reduce dependence on manual notes by making meeting content available for downstream processing.',
        tint: 'blue',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(MeetingCaptureCard, {
          width: 440,
          date: 'Thu, May 5',
          meetings: [
            { title: 'Weekly ProcureCentro Stand-up', meta: '2:00 PM · Meet' },
            { title: 'Monthly marketing strategy review', meta: '4:00 PM · Teams' },
            { title: 'Product Development Sync-Up', meta: '9:00 AM · Zoom' },
          ],
        }),
      },
      {
        label: 'Preserve meeting context so teams can revisit conversations after the meeting.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(TranscriptCard, {
          lines: [
            {
              name: 'Faith Oluwale',
              time: '02:10',
              text: 'We completed 23 story points, which is a 15% increase from the previous sprint.',
            },
            {
              name: 'George Nwokoro',
              time: '02:34',
              text: 'The authentication module is progressing well, but we need a security review.',
            },
            {
              name: 'Fredelina Augustus',
              time: '02:56',
              text: 'I can coordinate with the InfoSec team to schedule that audit.',
            },
          ],
        }),
      },
      {
        label:
          'Support follow-through by making captured content available to features that identify decisions and actions.',
        tint: 'amber',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(ActionItemsCard, {
          width: 440,
          open: 5,
          avatarSize: 20,
          shadow: 'mock',
          tasks: [
            {
              title: 'Draft the Q3 vendor scorecard',
              due: 'Jun 9',
              avatar: AVATARS['Faith Oluwale'],
            },
            {
              title: 'Share feedback on the vendor approval cycle draft',
              due: 'Today',
              avatar: AVATARS['George Nwokoro'],
            },
            {
              title: 'Begin ERP sync audit diagnostics',
              due: 'Jun 12',
              avatar: AVATARS['Ruth Godwin'],
            },
          ],
        }),
      },
      {
        label:
          'Create reusable knowledge by helping turn conversations into information teams can search and reference.',
        tint: 'grey',
        pattern: { type: 'rings', size: 'stepper' },
        visual: h(KnowledgeSearchCard, {
          width: 440,
          query: 'vendor approval workflow',
          results: [
            {
              meeting: 'Monthly Marketing Strategy Review',
              date: 'Apr 28',
              excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.',
            },
            {
              meeting: 'Product Development Sync-Up',
              date: 'May 11',
              excerpt: '…approval workflow dependencies raised for Q3 planning.',
            },
            {
              meeting: 'Client Feedback Analysis Session',
              date: 'Jun 20',
              excerpt: '…agreed to revisit the approval cycle after the pilot.',
            },
          ],
        }),
      },
    ],
  },

  /** FAQ 46:38596 — Figma repeats the downstream answer on items 2–5. */
  faq: [
    {
      q: 'What is meeting capture?',
      a: 'Meeting capture is the process of bringing meeting content into Acumeet through supported meeting workflows or file uploads so it can be processed and revisited.',
    },
    { q: 'What happens after a meeting is captured?', a: FAQ_DOWNSTREAM },
    { q: 'Can I upload a meeting recording?', a: FAQ_DOWNSTREAM },
    { q: 'Does Acumeet automatically join meetings?', a: FAQ_DOWNSTREAM },
    // Figma duplicates question 2 as the 5th item (46:38607).
    { q: 'What happens after a meeting is captured?', a: FAQ_DOWNSTREAM },
  ],

  /** Explore more 46:38608. */
  related: exploreMore(['aiTranscription', 'aiMeetingSummaries', 'speakerRecognition', 'atlas']),

  /** CTA band 46:38618. */
  cta: {
    title: 'Bring Your Meetings into Acumeet.',
    lead: 'Capture or import supported meeting content and make it available for the next steps in your meeting intelligence workflow.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
