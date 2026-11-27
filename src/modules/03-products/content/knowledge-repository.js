import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import VisualPanel from '@/components/blocks/VisualPanel';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import KnowledgeHeroVisual from '../components/visuals/KnowledgeHeroVisual';
import { exploreMore, productBreadcrumb } from './products';

const P = ROUTES.product;

/* "Pattern · glow" of the 664×500 dark visual (46:43248): blue radial glow, 800×700 at (-60,-100). */
const BLUE_GLOW =
  'radial-gradient(400px 350px at 340px 250px, rgb(0 77 229 / 0.45) 0%, rgb(13 51 134 / 0.225) 50%, rgb(26 26 38 / 0) 100%)';

/** 02.10 · Knowledge Repository (Figma 46:43025). */
export const knowledgeRepository = {
  breadcrumb: productBreadcrumb('Knowledge repository'),

  /** 01 · Hero (46:43028) — 737 tall: 64 + 650 canvas + 23; hairline field, 580px copy at y=120. */
  hero: {
    pattern: 'hairlines',
    eyebrow: 'Product · Knowledge repository',
    eyebrowStyle: 'chip',
    title: 'Turn meeting records into knowledge your organisation can reuse.',
    titleSize: 46,
    copyWidth: 580,
    copyTop: 56,
    lead: 'Keep valuable meeting information organised and easier to retrieve. Acumeet’s Knowledge Repository is designed to help teams revisit meeting records, find relevant details across conversations, and preserve organisational knowledge for future use.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    secondaryStyle: 'button',
    visual: h(KnowledgeHeroVisual),
    visualWidth: 660,
    padBottom: 23,
  },

  /** 02 · A Central Place for Your Meeting Knowledge (46:43188) — visual left, pink rings. */
  split: {
    size: 'compact',
    reverse: true,
    title: 'A central place for your meeting knowledge',
    body: [
      'Meetings generate decisions, discussions, commitments, and context that teams may need long after a call ends. When this information is scattered or difficult to locate, people can lose time reconstructing past conversations or repeating work.',
      'A knowledge repository helps make meeting information easier to organise and revisit. The content available depends on the meeting artefacts Acumeet stores and makes searchable, and on the user’s permissions.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(KnowledgeSearchCard, {
        width: 440,
        query: 'pricing decision last year',
        results: [
          {
            meeting: 'Policy Handover',
            date: 'Apr 23',
            excerpt: '…pricing approach agreed for enterprise plans.',
          },
          {
            meeting: 'Programme Retrospective',
            date: 'May 6',
            excerpt: '…decision linked to the policy library.',
          },
          {
            meeting: 'Knowledge Sharing Session',
            date: 'Jun 15',
            excerpt: '…lessons learned shared at the retrospective.',
          },
        ],
      }),
    },
  },

  /** 03 · rows (46:43229) — the "MEETING ARCHIVE" overline is hidden in Figma. */
  archive: {
    title: 'Preserve meeting records according to your organisation’s policies',
    paragraphs: [
      'Meeting records should be managed in line with the organisation’s or institution’s data-handling, retention, privacy, and governance policies. Data Loss Prevention (DLP) policies can help guide how sensitive information is protected and handled, based on the rules the organisation defines and the controls the platform supports.',
      'An organisation may have requirements for which records can be stored, who can access them, how information can be shared, and when records should be retained or deleted.',
    ],
    bullets: [
      'Example use case: An organisation defines policies for handling sensitive meeting records and wants its archive practices to align with those requirements.',
      'Benefit: Support more consistent, policy-led handling of meeting information.',
    ],
    cta: { label: 'Explore meeting archive', to: ROUTES.solutions.govern, size: 'lg' },
  },

  /** 03 · rows Split (46:43245) — dark, 664×500 night panel (blue glow + dark dots). */
  search: {
    size: 'compact',
    tone: 'dark',
    reverse: true,
    title: 'Make meeting information easier to find',
    body: [
      'Help users retrieve relevant information from meeting records instead of manually reviewing every conversation. Depending on the content types Acumeet supports, searchable knowledge may include transcripts, summaries, decisions, action items, and discussion points.',
    ],
    bulletStyle: 'dot',
    bullets: [
      { text: 'Example prompt: “Where did we discuss the updated delivery timeline?”' },
      { text: 'Benefit: Reduce the effort involved in finding useful information from past meetings.' },
    ],
    cta: { label: 'Search meeting knowledge', to: P.atlas, intent: 'ghost-light' },
    visual: h(
      VisualPanel,
      {
        width: 664,
        height: 500,
        tint: 'night',
        glow: BLUE_GLOW,
        pattern: { type: 'dots', size: 'chapters' },
      },
      h(KnowledgeSearchCard, {
        width: 460,
        query: 'pricing decision last year',
        results: [
          {
            meeting: 'Knowledge Sharing Session',
            date: 'May 28',
            excerpt: '…pricing approach agreed for enterprise plans.',
          },
          {
            meeting: 'Leadership Offsite',
            date: 'Jun 11',
            excerpt: '…decision linked to the policy library.',
          },
          {
            meeting: 'Policy Handover',
            date: 'Apr 20',
            excerpt: '…lessons learned shared at the retrospective.',
          },
        ],
      }),
    ),
  },

  /** 03 · rows (46:43285). */
  crossMeeting: {
    title: 'Connect information across multiple meetings',
    paragraphs: [
      'Important topics often span multiple conversations. Cross-meeting search helps users find relevant information across available meeting records, making it easier to follow how decisions developed, revisit recurring issues, and connect related discussions over time.',
    ],
    bullets: [
      'Example prompt: “How has our approach to this project changed over the last four meetings?”',
      'Benefit: Help teams build a clearer picture from information spread across multiple meetings.',
    ],
    cta: { label: 'Explore cross-meeting search', to: P.atlas, size: 'lg' },
  },

  /**
   * Split (46:43299) — Chapter-style row; Figma hides the counter and the ✓
   * markers, so the points render as plain lines. The Editorial duplicate of
   * this copy (46:43381) is hidden in Figma and not rendered.
   */
  preserve: {
    size: 'chapter',
    title: 'Preserve knowledge beyond the meeting',
    body: [
      'Meeting records can contain institutional context, lessons learned, project history, and the reasoning behind important decisions. Making this information easier to preserve and retrieve helps organisations maintain continuity and reuse knowledge instead of relying solely on individual memory.',
    ],
    bulletStyle: 'none',
    bullets: [
      { text: 'Example prompt: “What lessons from previous projects could help with this decision?”' },
      {
        text: 'Benefit: Help retain organisational context and make accumulated meeting knowledge more useful over time.',
      },
    ],
    visual: {
      tint: 'lilac',
      pattern: { type: 'rings', size: 'panel' },
      content: h(AtlasChatCard, {
        width: 460,
        question: 'What did we agree on supplier reviews last quarter?',
        answer: [
          'In the Q2 Procurement Review, the team agreed to ',
          { b: 'move supplier reviews to monthly' },
          ' and keep the scorecard in one place.',
        ],
        quote: {
          name: 'Ruth Godwin',
          time: '33:48',
          text: '“Monthly reviews give us enough time to act before the quarter closes.”',
        },
        sources: ['Q2 Review · 33:48 · Ruth', 'Stand-up · 12:05'],
        prompts: ['Show the scorecard decision', 'Who attended?'],
      }),
    },
  },

  /** Benefits (46:43395) — 846 + 413, then 3 × 413. */
  benefits: {
    title: 'Business',
    accent: 'benefits',
    accentBreak: false,
    cards: [
      {
        title: 'Better retrieval',
        body: 'Make relevant meeting records easier to locate.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-span' },
        span: 2,
      },
      {
        title: 'Continuity',
        body: 'Revisit previous decisions and discussions when work continues.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Policy alignment',
        body: 'Manage meeting information in line with organisational requirements and supported controls.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Knowledge reuse',
        body: 'Help teams apply lessons and context from earlier meetings.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'Reduced information loss',
        body: 'Make useful meeting knowledge less dependent on personal notes or recollection.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
    ],
  },

  /** Explore more (46:43404) — Figma hides the "Explore the platform" title here. */
  related: {
    ...exploreMore(['atlas', 'meetingIntelligence', 'aiRedaction', 'aiMeetingSummaries'], {
      eyebrow: 'Keep exploring',
    }),
    title: null,
  },

  /** 05 · faq (46:43414) — after Explore more, no waveform. */
  faq: [
    {
      q: 'What is a meeting knowledge repository?',
      a: 'A meeting knowledge repository is an organised place to preserve and retrieve information captured from meetings, subject to the content and search capabilities the platform supports.',
    },
    {
      q: 'What is included in the Meeting Archive?',
      a: 'The archive may contain meeting records and related artefacts supported by Acumeet.',
    },
    {
      q: 'How does DLP relate to meeting archiving?',
      a: 'Data Loss Prevention policies help govern the handling of sensitive information. Their relationship to archiving, retention, access, sharing, and deletion depends on the controls implemented and configured by the organisation.',
    },
    {
      q: 'Can archive policies differ between organisations?',
      a: 'Organisations can have different data-handling and governance requirements.',
    },
    {
      q: 'What is organisational memory?',
      a: 'Organisational memory is the accumulated information, context, decisions, and lessons an organisation can refer to over time. Meeting records can be one source of this knowledge.',
    },
  ],

  /** CTA band (46:43425). */
  cta: {
    title: 'Make your meeting knowledge work beyond the meeting.',
    lead: 'Organise the information your team creates in meetings, make it easier to retrieve, and help preserve useful context for the work that comes next.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
  },
};
