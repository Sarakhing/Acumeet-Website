import { ROUTES } from '@/constants/routes';
import aiMark from '@/assets/images/compare/mark-ai-assistants.png';
import notesMark from '@/assets/images/compare/mark-meeting-notes.png';
import enterpriseMark from '@/assets/images/compare/mark-enterprise.png';
import firefliesMark from '@/assets/images/compare/mark-fireflies.png';
import otterMark from '@/assets/images/compare/mark-otter.png';
import teamsMark from '@/assets/images/compare/mark-teams.png';
import acumeetMark from '@/assets/logos/acumeet-mark.svg';

const C = ROUTES.comparePage;

/**
 * Compare catalogue (Figma "12 · Compare", 49:115722). `tagline` = the 12.01 Directory line (also
 * the page headline); `image` = the competitor's app mark (VS banner, table header, "Compare
 * Acumeet" tile); `vs` = the VS banner name (line breaks as in Figma).
 */
export const COMPARE = {
  why: {
    title: 'Why Acumeet',
    tile: 'Why Acumeet',
    image: acumeetMark,
    to: C.why,
    figma: '49:115723',
  },
  aiAssistants: {
    title: 'Acumeet vs AI Meeting Assistants',
    tile: 'Acumeet vs AI meeting assistants',
    tagline: 'When notes are not enough, you need meeting intelligence',
    vs: 'AI meeting\nassistants',
    image: aiMark,
    to: C.aiAssistants,
    figma: '49:115909',
  },
  meetingNotes: {
    title: 'Acumeet vs Traditional Meeting Notes',
    tile: 'Acumeet vs traditional meeting notes',
    tagline: 'Stop relying on memory, minutes and manual follow-up',
    vs: 'Traditional notes',
    image: notesMark,
    to: C.meetingNotes,
    figma: '49:116107',
  },
  enterprisePlatforms: {
    title: 'Acumeet vs Enterprise Meeting Intelligence Platforms',
    tile: 'Acumeet vs enterprise platforms',
    tagline: 'Enterprise meeting intelligence should go beyond recording the meeting',
    vs: 'Enterprise\nplatforms',
    image: enterpriseMark,
    to: C.enterprisePlatforms,
    figma: '49:116398',
  },
  fireflies: {
    title: 'Acumeet vs Fireflies',
    tile: 'Acumeet vs Fireflies',
    tagline: 'Acumeet vs Fireflies: compare more than meeting notes',
    vs: 'Fireflies',
    image: firefliesMark,
    to: C.fireflies,
    figma: '49:116516',
  },
  otter: {
    title: 'Acumeet vs Otter',
    tile: 'Acumeet vs Otter',
    tagline: 'Acumeet vs Otter: how your meeting knowledge is captured, controlled and used',
    vs: 'Otter',
    image: otterMark,
    to: C.otter,
    figma: '49:116782',
  },
  teamsPremium: {
    title: 'Acumeet vs Microsoft Teams Premium',
    tile: 'Acumeet vs Microsoft Teams Premium',
    tagline:
      'Acumeet vs Microsoft Teams Premium: Teams-native or cross-platform meeting intelligence?',
    vs: 'Microsoft Teams\nPremium',
    image: teamsMark,
    to: C.teamsPremium,
    figma: '49:117101',
  },
  overview: {
    title: 'Competitive Comparison',
    tile: 'Competitor overview',
    tagline: 'Compare the meeting intelligence that fits your enterprise',
    to: C.overview,
    figma: '49:117344',
  },
};

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export const DEMO = { label: 'Book a demo', to: ROUTES.bookDemo };
export const ENTERPRISE_DEMO = { label: 'Request an enterprise demo', to: ROUTES.bookDemo };

/** Home / Why Acumeet / {page}. */
export const cmpBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Why Acumeet', to: C.why },
  { label },
];

/** CTA band with a single button. */
export const cta = (title, lead, primary = DEMO) => ({ title, lead, primary, secondary: null });

/* ------------------------------------------------------------------ */
/* Heroes                                                              */
/* ------------------------------------------------------------------ */

/** Dark rings hero with copy only (12.02, 12.05, 12.08). */
export const darkHero = ({ eyebrow, title, lead, primary = DEMO, height }) => ({
  hero: {
    variant: 'rings',
    minHeight: height,
    secondaryStyle: 'link',
    eyebrow,
    title,
    lead,
    primary,
    secondary: null,
  },
});

/** Centred light hero over hairlines with copy only (12.01, 12.04). */
export const lightHero = ({
  eyebrow,
  title,
  accent,
  lead,
  primary = DEMO,
  secondary = null,
  height,
}) => ({
  hero: {
    variant: 'centered',
    minHeight: height,
    pattern: 'hairlines',
    titleSize: 62,
    leadSize: 19,
    copyWidth: 980,
    secondaryStyle: 'link',
    eyebrow,
    title,
    accent,
    lead,
    primary,
    secondary,
  },
});

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

/** Statement: tone 'subtle' (waveform, #fafafb) or 'dark' (night + dot grid). */
export const statement = (title, accent, body, tone = 'subtle') => ({
  type: 'statement',
  tone,
  ...(tone === 'subtle' ? { pattern: 'waveform' } : null),
  title,
  accent,
  paragraphs: body ? [body] : [],
});

/** Customer logo strip (home "09 · Customer proof"). */
export const LOGOS = { type: 'logos' };

/** VS banner for a COMPARE key. */
export const vs = (key) => ({
  type: 'vs',
  competitor: { name: COMPARE[key].vs, image: COMPARE[key].image },
});

/** Comparison table: table(key, title, competitorLabel, [[label, them, us], …]). */
export const table = (key, title, name, rows) => ({
  type: 'table',
  title,
  lead: 'How each approach handles capture, decisions, actions and control.',
  competitor: { name, image: COMPARE[key].image },
  rows,
});

/** "Compare Acumeet" — eight link tiles (Competitor overview first, highlighted). */
const TILE_ORDER = [
  'overview',
  'aiAssistants',
  'meetingNotes',
  'enterprisePlatforms',
  'fireflies',
  'otter',
  'teamsPremium',
  'why',
];
const TILE_TONES = ['teal', 'magenta', 'blue', 'purple', 'green', 'amber', 'purple', 'magenta'];
export const COMPARE_TILES = {
  type: 'checklist',
  title: 'Compare',
  accent: 'Acumeet',
  lead: 'See how Acumeet compares with other ways of capturing and managing meetings.',
  items: TILE_ORDER.map((k, i) => ({
    label: COMPARE[k].tile,
    to: COMPARE[k].to,
    tone: TILE_TONES[i],
    ...(k === 'overview' ? { icon: 'file-text' } : { image: COMPARE[k].image }),
  })),
};

/** Checklist with duotone icons: checklist(title, accent, lead, [[label, icon, tone], …], layout?). */
export const checklist = (title, accent, lead, items, layout) => ({
  type: 'checklist',
  title,
  accent,
  lead,
  layout,
  items: items.map(([label, icon, tone]) => ({ label, icon, tone })),
});

/* Explorer panels in Figma order: lilac, pink, blue, mint, amber, grey. */
const PANELS = [
  ['lilac', 'dots'],
  ['pink', 'rings'],
  ['blue', 'hairlines'],
  ['mint', 'waveform'],
  ['amber', 'dots'],
  ['grey', 'rings'],
];

/** Explorer: explorer({ title, accent, lead? }, [[tab, body, visual], …]). */
export const explorer = (head, items) => ({
  type: 'explorer',
  ...head,
  items: items.map(([title, body, visual], i) => ({
    title,
    body,
    tint: PANELS[i % PANELS.length][0],
    pattern: { type: PANELS[i % PANELS.length][1], size: 'explorer' },
    visual,
  })),
});

/** "Why teams choose Acumeet" explorer (12.02, 12.03, 12.05–12.08): four tabs, page-specific visuals. */
export const whyChoose = ([control, decisions, protect, ask]) =>
  explorer(
    {
      title: 'Why teams choose Acumeet',
      titleSize: 44,
      lead: 'Control, one record for decisions and actions, protection for sensitive data, and answers across every meeting.',
    },
    [
      ['Teams that need control choose Acumeet', '\u00a0', control],
      [
        'Decisions and actions on one record',
        'Meeting summaries and action items turn every call into topics, decisions, owners and status.',
        decisions,
      ],
      [
        'Protect what matters',
        'Redaction AI detects and masks personal and financial details in meeting records.',
        protect,
      ],
      [
        'Ask across every meeting',
        'Atlas answers questions across past meetings and points back to the source.',
        ask,
      ],
    ],
  );

/** Dot-bullet split (12.05 / 12.06 "which approach fits" rows). */
export const fitSplit = ({ title, bullet, visual, tint, pattern, reverse }) => ({
  type: 'split',
  size: 'standard',
  reverse,
  title,
  bullets: [{ text: bullet }],
  bulletStyle: 'dot',
  visual: {
    tint,
    pattern: { type: pattern, size: pattern === 'rings' ? 'panel' : 'explorer' },
    content: visual,
  },
});

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Compare" row — every "Related" card reads "Compare". */
export const exploreCompare = (keys) => ({
  eyebrow: 'Keep exploring',
  title: 'Explore Compare',
  cards: keys.map((k, i) => ({
    title: COMPARE[k].title,
    description: 'Compare',
    to: COMPARE[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** The related row on 12.05–12.08 (12.03 shows the first two, 12.04 the first three). */
export const RELATED = ['why', 'aiAssistants', 'meetingNotes', 'enterprisePlatforms'];

/** Home "07 · Integrations" band (12.07, 12.08). */
export const INTEGRATIONS = {
  type: 'integrations',
  className: 'lg:flex lg:min-h-[800px] lg:flex-col lg:justify-center',
};
