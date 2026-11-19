import { ROUTES } from '@/constants/routes';

/**
 * Solutions catalogue — one entry per 03.x page. Used for RelatedRow cards
 * ("✓ Related · X" components) and breadcrumbs. Card tint/pattern/descriptions
 * come straight from the Figma Related components.
 */
export const SOLUTIONS = {
  protect: {
    title: 'Protect',
    description: 'Protect Sensitive Information in Every Meeting.',
    to: ROUTES.solutions.protect,
    tint: 'lilac',
    pattern: { type: 'rings', size: 'mini' },
  },
  control: {
    title: 'Control',
    description: 'Your Data. Your Keys. Your Rules.',
    to: ROUTES.solutions.control,
    tint: 'lilac',
    pattern: { type: 'rings', size: 'mini' },
  },
  secure: {
    title: 'Secure',
    description: 'Security Should Never Be an Afterthought.',
    to: ROUTES.solutions.secure,
    tint: 'pink',
    pattern: { type: 'dots', size: 'mini' },
  },
  govern: {
    title: 'Govern',
    description: 'Govern Every Meeting. Strengthen Every Decision.',
    to: ROUTES.solutions.govern,
    tint: 'blue',
    pattern: { type: 'waveform', size: 'mini' },
  },
  understand: {
    title: 'Understand',
    description: 'Turn Every Conversation Into Business Intelligence.',
    to: ROUTES.solutions.understand,
    tint: 'mint',
    pattern: { type: 'hairlines', size: 'mini' },
  },
  connect: {
    title: 'Connect',
    description: 'Connect Your Meetings to the Tools That Move Work Forward',
    to: ROUTES.solutions.connect,
    tint: 'lilac',
    pattern: { type: 'rings', size: 'mini' },
  },
  emi: {
    title: 'Enterprise Meeting Intelligence',
    description: 'Enterprise meeting intelligence, governed end to end',
    to: ROUTES.solutions.emi,
    tint: 'mint',
    pattern: { type: 'hairlines', size: 'mini' },
  },
};

/** Related cards for a page, in Figma order. */
export const relatedSolutions = (...keys) => keys.map((k) => SOLUTIONS[k]);

/** Breadcrumb trail: Home / Solutions overview / {page}. */
export const solutionBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Solutions overview', to: ROUTES.solutions.overview },
  { label },
];
