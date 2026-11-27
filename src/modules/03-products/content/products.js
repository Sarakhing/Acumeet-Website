import { ROUTES } from '@/constants/routes';

const P = ROUTES.product;

/**
 * Products catalogue — one entry per 02.x page (Figma "03. Products", 46:30442).
 * Used for RelatedRow cards ("✓ Related · X", 308×300) and breadcrumbs.
 * Titles/descriptions come from the Figma Related components and page heroes.
 * `figma` is the page frame id, for the agents building the remaining pages.
 */
export const PRODUCTS = {
  meetingCapture: {
    title: 'Meeting capture',
    description: 'Capture Every Important Business Conversation.',
    to: P.meetingCapture,
    figma: '46:37362',
  },
  aiTranscription: {
    title: 'AI transcription',
    description: 'Turn Business Conversations into Usable Text',
    to: P.aiTranscription,
    figma: '46:37240',
  },
  aiMeetingSummaries: {
    title: 'AI meeting summaries',
    description: 'Turn Business Meetings into Clear Summaries and Tracked Actions',
    to: P.aiMeetingSummaries,
    figma: '46:35486',
  },
  actionItemManagement: {
    title: 'Action item management',
    description: 'Turn Meeting Decisions into Actions That Move Forward',
    to: P.actionItemManagement,
    figma: '46:38621',
  },
  speakerRecognition: {
    title: 'Speaker recognition',
    description: 'Know Who Said What in Every Meeting',
    to: P.speakerRecognition,
    figma: '46:39919',
  },
  aiRedaction: {
    title: 'AI redaction',
    description: 'Protect Sensitive Data Before It Becomes a Risk',
    to: P.aiRedaction,
    figma: '46:40048',
  },
  atlas: {
    title: 'Atlas',
    description: 'Your Acumeet Information. One Conversation Away.',
    to: P.atlas,
    figma: '46:41403',
  },
  meetingIntelligence: {
    title: 'Meeting intelligence',
    description: 'Turn Every Meeting into Business Intelligence.',
    to: P.meetingIntelligence,
    figma: '46:41646',
  },
  knowledgeRepository: {
    title: 'Knowledge repository',
    description: 'Turn Meeting Records into Knowledge Your Organisation Can Reuse.',
    to: P.knowledgeRepository,
    figma: '46:43025',
  },
  analytics: {
    title: 'Analytics',
    description: 'Turn Meeting Activity into Clear, Actionable Insights.',
    to: P.analytics,
    figma: '46:43428',
  },
};

/**
 * In every product "Explore more" row Figma keeps the card thumbnails
 * positional, whatever the product: lilac rings, pink dots, blue waveform,
 * mint hairlines (checked on 02.02, 02.03, 02.04, 02.05, 02.10).
 */
const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** Related cards for a page, in Figma order: relatedProducts('aiTranscription', 'atlas', …). */
export const relatedProducts = (...keys) =>
  keys.map((k, i) => {
    const { title, description, to } = PRODUCTS[k];
    return { title, description, to, ...SLOTS[i % SLOTS.length] };
  });

/** Breadcrumb trail: Home / Product overview / {page}. */
export const productBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Product overview', to: P.overview },
  { label },
];

/** Shared "Explore more" row props for product pages (Figma hides the "Keep exploring" overline on 02.02/02.03). */
export const exploreMore = (keys, { eyebrow = null } = {}) => ({
  eyebrow,
  title: 'Explore the platform',
  titleTo: P.overview,
  cards: relatedProducts(...keys),
});
