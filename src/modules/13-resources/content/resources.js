import { createElement as h } from 'react';
import { search, actions, summary } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import TalkTimeCard from '@/modules/03-products/components/visuals/TalkTimeCard';

const R = ROUTES.resourcesPage;

/**
 * Resources catalogue (Figma "13 · Resources", 49:138233). `tagline` = the Directory line on 13.01
 * (also each page's headline). Slugs match the header mega menu.
 */
export const RESOURCES = {
  overview: { title: 'Resources overview', to: R.overview, figma: '49:138234' },
  blog: {
    title: 'Blog',
    tagline: 'Ideas for better meetings and better decisions',
    to: R.blog,
    figma: '49:138510',
  },
  blogCategories: {
    title: 'Blog categories',
    tagline: 'Explore the blog by topic',
    to: R.blogCategories,
    figma: '49:138636',
  },
  caseStudies: {
    title: 'Case studies',
    tagline: 'See meeting intelligence in practice',
    to: R.caseStudies,
    figma: '49:138741',
  },
  whitepapers: {
    title: 'Whitepapers',
    tagline: 'Go deeper than the headline',
    to: R.whitepapers,
    figma: '49:138861',
  },
  guides: {
    title: 'Guides',
    tagline: 'Practical guidance for better-run meetings',
    to: R.guides,
    figma: '49:138997',
  },
  reports: {
    title: 'Reports',
    tagline: 'Research for smarter enterprise decisions',
    to: R.reports,
    figma: '49:139059',
  },
  webinars: {
    title: 'Webinars',
    tagline: 'Big questions. Practical conversations.',
    to: R.webinars,
    figma: '49:139175',
  },
  productUpdates: {
    title: 'Product updates',
    tagline: 'What is new in Acumeet',
    to: R.productUpdates,
    figma: '49:139325',
  },
  customerStories: {
    title: 'Customer stories',
    tagline: 'The people behind better meeting outcomes',
    to: R.customerStories,
    figma: '49:139652',
  },
  calculator: {
    title: 'Meeting productivity calculator',
    tagline: 'What are your meetings really costing you?',
    to: R.calculator,
    figma: '49:139942',
  },
  documentation: {
    title: 'Acumeet documentation',
    tagline: 'Everything you need to work with Acumeet',
    to: R.documentation,
    figma: '49:140194',
  },
};

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export const DEMO = { label: 'Book a demo', to: ROUTES.bookDemo };
export const CONTACT = (label) => ({ label, to: ROUTES.contactSales });
export const link = (label, to) => ({ label, to });

/** Home / Resources Overview / {page} (Blog Categories adds "Blog"). */
export const resBreadcrumb = (label, { blog = false } = {}) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Resources overview', to: R.overview },
  ...(blog ? [{ label: 'Blog', to: R.blog }] : []),
  { label },
];

/** Figma "CTA band": the page headline, a blank sub-line, one "Book a demo" button. */
export const resCta = (title) => ({ title, lead: ' ', primary: DEMO, secondary: null });

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Resources" row — every "Related" card reads "Resources". */
export const exploreResources = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore resources',
  cards: keys.map((k, i) => ({
    title: RESOURCES[k].title,
    description: 'Resources',
    to: RESOURCES[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 13.05–13.12 (13.03 shows the first two, 13.04 the first three). */
export const RELATED = ['overview', 'blog', 'blogCategories', 'caseStudies'];

/* ------------------------------------------------------------------ */
/* Shared visuals                                                      */
/* ------------------------------------------------------------------ */

const EXCERPTS = [
  '…pricing approach agreed for enterprise plans.',
  '…decision linked to the policy library.',
  '…lessons learned shared at the retrospective.',
];

/** "pricing decision last year" search: pricingSearch([[meeting, date] ×3], width). */
export const pricingSearch = (rows, width = 500, shadow) =>
  search(
    'pricing decision last year',
    rows.map(([meeting, date], i) => [meeting, date, EXCERPTS[i]]),
    { width, shadow },
  );

const TASKS = {
  share: 'Share the retrospective notes with new joiners',
  archive: 'Archive completed project meetings',
  review: 'Review search results for the onboarding guide',
  link: 'Link decisions to the policy library',
};

/** Knowledge tasks: knowTasks(open, [due, due, due], opts) — share → archive → review. */
export const knowTasks = (open, [a, b, c], opts) =>
  actions(
    open,
    [
      [TASKS.share, a],
      [TASKS.archive, b],
      [TASKS.review, c],
    ],
    opts,
  );

/** Any knowledge tasks: tasks(open, [[key, due], …], opts). */
export const tasks = (open, rows, opts) =>
  actions(
    open,
    rows.map(([k, due]) => [TASKS[k], due]),
    opts,
  );

const INSIGHTS = {
  handbook: 'Decision summaries will be added to the handbook.',
  tag: 'The team agreed to tag committee meetings by topic.',
  onboarding: 'New joiners will use past retrospectives for onboarding.',
};

/** Knowledge summary: knowSummary(title, [q, s, e], [insightKey, insightKey], width, shadow). */
export const knowSummary = (title, scores, keys, width = 440, shadow) =>
  summary(
    title,
    scores,
    keys.map((k) => INSIGHTS[k]),
    { width, shadow },
  );

/** "Speaker talk time": talkTime([faith, fredelina, ruth, george, warith], width). */
export const talkTime = ([faith, fredelina, ruth, george, warith], width = 440, shadow) =>
  h(TalkTimeCard, {
    duration: '52 min',
    width,
    shadow,
    speakers: [
      { name: 'Faith Oluwale', share: faith, tone: 'magenta' },
      { name: 'Fredelina Augustus', share: fredelina, tone: 'blue' },
      { name: 'Ruth Godwin', share: ruth, tone: 'green' },
      { name: 'George Nwokoro', share: george, tone: 'purple' },
      { name: 'Warith Abraham', share: warith, tone: 'amber' },
    ],
  });

/* ------------------------------------------------------------------ */
/* Listings                                                            */
/* ------------------------------------------------------------------ */

const COVER_ORDER = ['orbit', 'bands', 'record', 'waveform', 'supermark', 'peaks'];

/**
 * listing({ chips, more?, id?, start = 0 }, [[meta, title, tags[]], …], linkLabel, to?) — covers
 * rotate through Figma's six artworks starting at `start`.
 */
export const listing = ({ chips, more, id, start = 0, featured }, rows, linkLabel, to) => ({
  type: 'listing',
  id,
  chips,
  more,
  featured,
  items: rows.map(([meta, title, tags], i) => ({
    meta,
    title,
    tags,
    cover: COVER_ORDER[(start + i) % COVER_ORDER.length],
    link: linkLabel,
    to,
  })),
});

/** Subtle waveform statement with a sub-line. */
export const statement = (title, accent, body) => ({
  type: 'statement',
  tone: 'subtle',
  pattern: 'waveform',
  title,
  accent,
  paragraphs: body ? [body] : [],
});
