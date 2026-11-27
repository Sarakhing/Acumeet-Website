import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import RedactionReview from '@/components/visuals/RedactionReview';
import SummaryCard from '@/components/visuals/SummaryCard';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import { AVATARS } from '@/components/visuals/people';
import TalkTimeCard from '../components/visuals/TalkTimeCard';
import captureDots from '@/assets/images/products/overview-capture-dot-grid-740x308.svg';
import transcriptionWave from '@/assets/images/products/overview-transcription-waveform-496x394.svg';
import speakerRings from '@/assets/images/products/overview-speaker-rings-628x323.svg';
import redactionHairlines from '@/assets/images/products/overview-redaction-hairlines-628x313.svg';
import intelligenceDots from '@/assets/images/products/overview-intelligence-dot-grid-614x272.svg';
import actRings from '@/assets/images/products/overview-act-rings-700x560.svg';
import knowledgeDots from '@/assets/images/products/overview-knowledge-dot-grid-614x380.svg';
import teamsLogo from '@/assets/images/products/platform-teams-161x148.png';
import zoomLogo from '@/assets/images/products/platform-zoom-148x148.png';
import meetLogo from '@/assets/images/products/platform-meet-261x148.png';
import { PRODUCTS } from './products';

/* ------------------------------------------------------------------ */
/* Tiles (Figma stages 46:31818 · 46:32821 · 46:34526 · 46:34588)       */
/* ------------------------------------------------------------------ */

const slug = (key) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** Tile ids double as the product index jump-link targets. */
const tile = (key, fig, props) => ({
  id: slug(key),
  eyebrow: `Fig ${fig} · ${PRODUCTS[key].title}`,
  link: { label: `Explore ${PRODUCTS[key].title}`, to: PRODUCTS[key].to },
  ...props,
});

const pattern = (src, width, height, x = 0, y = 0) => ({ src, width, height, x, y });

const capture = [
  [
    tile('meetingCapture', '1.1', {
      width: 760,
      tint: 'lilac',
      title: 'Capture every important business conversation.',
      titleWidth: 688,
      body: 'Acumeet helps organisations capture meeting content so conversations can become searchable information, summaries, decisions, and actionable follow-ups.',
      bodyWidth: 560,
      visual: {
        width: 760,
        height: 351.5,
        pattern: pattern(captureDots, 740, 308, 9, 9),
        x: 150,
        y: 50.5,
        content: h(MeetingCaptureCard, {
          width: 460,
          date: 'Thu, May 11',
          meetings: [
            { title: 'Client feedback analysis session', meta: '10:30 AM · Meet' },
            { title: 'Weekly ProcureCentro Stand-up', meta: '11:00 AM · Teams' },
            { title: 'Monthly marketing strategy review', meta: '3:30 PM · Zoom' },
          ],
        }),
      },
    }),
    tile('aiTranscription', '1.2', {
      width: 496,
      tint: 'pink',
      title: 'Turn business conversations into usable text',
      titleWidth: 424,
      body: 'Acumeet AI meeting transcription software helps teams turn spoken business discussions into text they can review, reference and use after the meeting.',
      bodyWidth: 424,
      visual: {
        width: 496,
        height: 394,
        pattern: pattern(transcriptionWave, 496, 394),
        x: 48,
        y: 28,
        content: h(TranscriptCard, {
          width: 400,
          lines: [
            { name: 'Faith Oluwale', time: '19:05', text: 'Vendor approvals are taking nine days on average. That’s where onboarding stalls.' },
            { name: 'George Nwokoro', time: '20:12', text: 'If we pilot automated POs on recurring items, we cut most of that wait.' },
            { name: 'Fredelina Augustus', time: '21:19', text: 'Let’s agree the pilot scope today and review results in two weeks.' },
          ],
        }),
      },
    }),
  ],
  [
    tile('speakerRecognition', '1.3', {
      width: 628,
      tint: 'blue',
      titleSize: 24,
      title: 'Know who said what in every meeting',
      body: 'Keep meeting conversations clear and easier to review with AI speaker recognition.',
      bodyWidth: 556,
      visual: {
        width: 628,
        height: 323,
        pattern: pattern(speakerRings, 628, 323),
        x: 104,
        y: 49,
        content: h(TalkTimeCard, {
          width: 420,
          duration: '52 min',
          speakers: [
            { name: 'Faith Oluwale', share: 25, tone: 'magenta' },
            { name: 'Fredelina Augustus', share: 25, tone: 'blue' },
            { name: 'Ruth Godwin', share: 20, tone: 'green' },
            { name: 'George Nwokoro', share: 15, tone: 'purple' },
            { name: 'Warith Abraham', share: 15, tone: 'amber' },
          ],
        }),
      },
    }),
    tile('aiRedaction', '1.4', {
      width: 628,
      tint: 'night',
      titleSize: 24,
      title: 'Protect sensitive data before it becomes a risk',
      body: 'Meetings can contain personal details, financial information, and confidential business discussions.',
      bodyWidth: 556,
      visual: {
        width: 628,
        height: 313,
        pattern: pattern(redactionHairlines, 628, 313),
        x: 94,
        y: 59,
        content: h(RedactionReview, {
          width: 440,
          count: 6,
          sentence: ['Card ending', { token: '[CARD_NUMBER]' }, 'was used by', { token: '[PERSON_NAME]' }, 'from phone', { token: '[PHONE_NUMBER]' }],
          rows: [
            { label: 'Card number', match: '100%' },
            { label: 'Phone number', match: '84%' },
          ],
        }),
      },
    }),
  ],
];

/** "Gradient wash" (46:32837): #fbfbfd with a blue and a pink radial glow. */
const SUMMARY_WASH = [
  'radial-gradient(342px 364px at 152px 112px, rgb(204 219 255 / 0.95), rgb(255 255 255 / 0))',
  'radial-gradient(304px 336px at 646px 112px, rgb(252 214 235 / 0.85), rgb(255 255 255 / 0))',
  'linear-gradient(#fbfbfd, #fbfbfd)',
].join(', ');

const understand = [
  [
    tile('aiMeetingSummaries', '2.1', {
      layout: 'split',
      tint: 'white',
      copyWidth: 520,
      title: 'Turn business meetings into clear summaries and tracked actions',
      titleWidth: 416,
      body: 'Meetings should move work forward, not leave teams searching for notes or chasing forgotten decisions.',
      bodyWidth: 416,
      visual: {
        width: 760,
        height: 558,
        glow: SUMMARY_WASH,
        x: 150,
        y: 144,
        content: h(SummaryCard, {
          width: 460,
          title: 'Monthly marketing strategy review',
          scores: [
            { label: 'Quality', value: 47, bar: 'amber' },
            { label: 'Sentiment', value: 75, bar: 'green' },
            { label: 'Engagement', value: 37, bar: 'blue' },
          ],
          insights: [
            'Fredelina flagged missed savings from low supplier engagement.',
            'George asked for a system sync audit before the next release.',
          ],
        }),
      },
    }),
  ],
  [
    tile('meetingIntelligence', '2.2', {
      width: 628,
      tint: 'mint',
      titleSize: 24,
      title: 'Turn every meeting into business intelligence.',
      body: 'Acumeet helps turn meeting conversations into structured business intelligence.',
      bodyWidth: 556,
      visual: {
        width: 628,
        height: 299,
        pattern: pattern(intelligenceDots, 614, 272, 9, 9),
        x: 94,
        y: 63,
        content: h(DecisionsCard, {
          width: 440,
          date: 'May 26',
          rows: [
            { kind: 'decision', text: 'Consolidate ERP sync alerts' },
            { kind: 'decision', text: 'Revisit the vendor approval cycle' },
            { kind: 'risk', text: 'Low supplier engagement on savings' },
          ],
          topics: ['Savings', 'Vendor onboarding', 'ERP integration', 'Supplier contracts'],
        }),
      },
    }),
    tile('analytics', '2.3', {
      width: 628,
      tint: 'amber',
      titleSize: 24,
      title: 'Turn meeting activity into clear, actionable insights.',
      body: 'Understand how your organisation meets, participates, and follows through.',
      bodyWidth: 556,
      visual: {
        width: 628,
        height: 290,
        x: 94,
        y: 24,
        content: h(MeetingAnalyticsCard, {
          width: 440,
          range: 'This month',
          barWidth: 30,
          barPitch: 40,
          legend: [
            { label: 'Sentiment', value: '93%', tone: 'green' },
            { label: 'Engagement', value: '55%', tone: 'blue' },
            { label: 'Quality', value: '68%', tone: 'amber' },
          ],
        }),
      },
    }),
  ],
];

const act = [
  [
    tile('actionItemManagement', '3.1', {
      layout: 'split',
      reverse: true,
      tint: 'amber-deep',
      copyWidth: 580,
      title: 'Turn meeting decisions into actions that move forward',
      titleWidth: 480,
      body: 'Meetings should create progress, not just conversations. Acumeet helps teams identify next steps, maintain visibility into follow-up work and carry important actions from one meeting to the next.',
      bodyWidth: 480,
      visual: {
        width: 700,
        height: 560,
        pattern: pattern(actRings, 700, 560),
        x: 110,
        y: 122,
        content: h(ActionItemsCard, {
          width: 480,
          open: 4,
          shadow: 'mock',
          avatarSize: 20,
          sync: ['Jira', 'Asana', 'Trello'],
          tasks: [
            { title: 'Draft the Q3 vendor scorecard', due: 'Next week', avatar: AVATARS['Faith Oluwale'] },
            { title: 'Share feedback on the vendor approval cycle draft', due: 'Jun 21', avatar: AVATARS['George Nwokoro'] },
            { title: 'Begin ERP sync audit diagnostics', due: 'May 26', avatar: AVATARS['Fredelina Augustus'] },
          ],
        }),
      },
    }),
  ],
];

const remember = [
  [
    tile('knowledgeRepository', '4.1', {
      width: 628,
      tint: 'lilac-deep',
      titleSize: 24,
      title: 'Turn meeting records into knowledge your organisation can reuse.',
      body: 'Keep valuable meeting information organised and easier to retrieve.',
      bodyWidth: 556,
      visual: {
        width: 628,
        height: 407,
        pattern: pattern(knowledgeDots, 614, 380, 9, 9),
        x: 84,
        y: 65,
        content: h(KnowledgeSearchCard, {
          width: 460,
          query: 'vendor approval workflow',
          results: [
            { meeting: 'Client Feedback Analysis Session', date: 'Jun 13', excerpt: '…suggested revising the vendor approval workflow to minimise bottlenecks.' },
            { meeting: 'Weekly ProcureCentro Stand-up', date: 'Apr 22', excerpt: '…approval workflow dependencies raised for Q3 planning.' },
            { meeting: 'Monthly Marketing Strategy Review', date: 'May 5', excerpt: '…agreed to revisit the approval cycle after the pilot.' },
          ],
        }),
      },
    }),
    tile('atlas', '4.2', {
      width: 628,
      tint: 'night-card',
      titleSize: 24,
      title: 'Your Acumeet information. One conversation away.',
      body: 'Ask Atlas about your meetings, account, subscription, and usage.',
      bodyWidth: 556,
      visual: {
        width: 628,
        // 4px taller than Figma's 420: our AtlasChatCard runs ~10px taller than the scaled Figma card.
        height: 424,
        glow: 'radial-gradient(376.8px 280px at 314px 200px, rgb(158 0 89 / 0.55) 0%, rgb(89 10 60 / 0.275) 50%, rgb(20 20 31 / 0) 100%)',
        x: 117,
        y: 30,
        // Figma's "UI · Atlas" is the 420px card at 0.94 scale (394.66 wide).
        content: h(
          'div',
          { style: { transform: 'scale(0.9397)', transformOrigin: 'top left' } },
          h(AtlasChatCard, {
            width: 420,
            question: 'What did we decide about the vendor approval cycle?',
            answer: [
              'In the Weekly ProcureCentro Stand-up, the team agreed to ',
              { b: 'revisit the vendor approval cycle' },
              ' and ',
              { b: 'pilot automated PO generation' },
              '.',
            ],
            quote: { name: 'Faith Oluwale', time: '14:32', text: '“Let’s revisit the approval cycle and pilot PO automation on our recurring items first.”' },
            sources: ['Stand-up · 14:32 · Faith'],
          }),
        ),
      },
    }),
  ],
];

/* ------------------------------------------------------------------ */

/** 02.01 · Product overview (Figma 46:30443). */
export const overview = {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Product overview' }],

  hero: {
    chip: 'Product',
    title: 'AI meeting transcription, summaries and action tracking',
    lead: 'Acumeet captures your meetings and turns them into structured transcripts, summaries, decisions, actions and searchable knowledge.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore the platform', href: '#capture' },
  },

  index: Object.keys(PRODUCTS).map((key) => ({ label: PRODUCTS[key].title, href: `#${slug(key)}` })),

  stages: [
    { id: 'capture', number: '01', title: 'Capture', tone: 'white', rows: capture },
    { id: 'understand', number: '02', title: 'Understand', tone: 'muted', rows: understand },
    { id: 'act', number: '03', title: 'Act', tone: 'white', rows: act },
    { id: 'remember', number: '04', title: 'Remember', tone: 'muted', rows: remember },
  ],

  workspace: { caption: 'Meeting details — Acumeet workspace' },

  platforms: {
    title: 'Bring every important conversation into one workflow',
    lead: 'Capture calls from the platforms you use, or upload recordings.',
    cards: [
      {
        title: 'Microsoft Teams',
        body: 'Capture Teams meetings without another manual step.',
        logo: { src: teamsLogo, boxWidth: 40, boxHeight: 37, style: { left: '-10.22%', top: '-9.45%', width: '117.52%', height: '116.54%' } },
      },
      {
        title: 'Zoom',
        body: 'Turn Zoom calls into structured, usable records.',
        logo: { src: zoomLogo, boxWidth: 40, boxHeight: 40, style: { left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' } },
      },
      {
        title: 'Google Meet',
        body: 'Get a structured record of what was discussed, decided and assigned.',
        logo: { src: meetLogo, boxWidth: 40, boxHeight: 39, style: { left: '-34.44%', top: 0, width: '172.85%', height: '100%' } },
      },
      { title: 'Audio and video upload', body: 'Bring in recordings that were not captured live.', highlight: true },
    ],
  },

  cta: {
    title: 'See Acumeet AI in action',
    lead: 'Experience meeting capture, transcription, summaries, action tracking, redaction, search and analytics, all in one platform.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Request a PoC', to: ROUTES.contactSales },
  },
};
