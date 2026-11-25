import { ROUTES } from '@/constants/routes';

const I = ROUTES.industry;

/**
 * Industries catalogue — one entry per 04.x page (Figma "04. Industries", 48:287758).
 * `title` = Figma "✓ Related · X" card title; `description` = the Directory
 * "Link card" line where Figma has one. `figma` is the page frame id.
 * Slugs match the header mega menu (src/constants/megaMenu.js).
 */
export const INDUSTRIES = {
  overview: { title: 'Industries Overview', to: I.overview, figma: '48:287759' },
  financialServices: {
    title: 'Financial Services',
    description: 'Turn Financial Meetings Into Actionable Intelligence',
    to: I.financialServices,
    figma: '48:287949',
  },
  banking: {
    title: 'Banking',
    description: 'Bring Clarity to Banking Conversations and Decisions',
    to: I.banking,
    figma: '48:288112',
  },
  insurance: {
    title: 'Insurance',
    description: 'Make Insurance Meetings More Structured and Actionable',
    to: I.insurance,
    figma: '48:288221',
  },
  executiveMeetings: {
    title: 'Executive Meetings',
    description: 'Turn Executive Discussions Into Clear Priorities and Action',
    to: I.executiveMeetings,
    figma: '48:289384',
  },
  creditCommittees: {
    title: 'Credit Committees',
    description: 'Create Clearer Records of Credit Committee Decisions',
    to: I.creditCommittees,
    figma: '48:289461',
  },
  riskCommittees: {
    title: 'Risk Committees',
    description: 'Keep Risk Discussions, Decisions and Actions Connected',
    to: I.riskCommittees,
    figma: '48:289571',
  },
  complianceMeetings: {
    title: 'Compliance Meetings',
    description: 'Make Compliance Discussions Easier to Document and Follow Up',
    to: I.complianceMeetings,
    figma: '48:289785',
  },
  fraudInvestigations: {
    title: 'Fraud Investigations',
    description: 'Organise Investigation Discussions and Follow-Up Actions',
    to: I.fraudInvestigations,
    figma: '48:289851',
  },
  boardMeetings: {
    title: 'Board Meetings',
    description: 'Preserve Board Decisions and Support Follow-Through',
    to: I.boardMeetings,
    figma: '48:289960',
  },
  auditMeetings: {
    title: 'Audit Meetings',
    description: 'Turn Audit Discussions Into Trackable Follow-Up',
    to: I.auditMeetings,
    figma: '48:291127',
  },
  amlReviews: {
    title: 'AML Reviews',
    description: 'Bring Structure to Anti-Money Laundering Review Meetings',
    to: I.amlReviews,
    figma: '48:292310',
  },
  customerStrategy: {
    title: 'Customer Strategy',
    description: 'Turn Customer Conversations Into Clear Next Steps',
    to: I.customerStrategy,
    figma: '48:292421',
  },
  telecommunications: {
    title: 'Telecommunications',
    description: 'Turn Telecommunications Meetings Into Coordinated Action',
    to: I.telecommunications,
    figma: '48:293592',
  },
  publicSector: {
    title: 'Public Sector',
    description: 'Make Public Sector Meetings Easier to Document and Follow Through',
    to: I.publicSector,
    figma: '48:293890',
  },
  enterprise: {
    title: 'Enterprise',
    description: 'Connect Enterprise Conversations to Decisions and Delivery',
    to: I.enterprise,
    figma: '48:294092',
  },
  otherRegulated: {
    title: 'Other Regulated Industries',
    description: 'Meeting Intelligence for Regulated and Accountability-Driven Organisations',
    to: I.otherRegulated,
    figma: '48:294434',
  },
};

/** Positional "Explore more" thumbnails, same as Products: lilac rings, pink dots, blue waveform, mint hairlines. */
const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** Related cards in Figma order. Every Industries "✓ Related" card's line reads "Industries". */
export const relatedIndustries = (...keys) =>
  keys.map((k, i) => ({
    title: INDUSTRIES[k].title,
    description: 'Industries',
    to: INDUSTRIES[k].to,
    ...SLOTS[i % SLOTS.length],
  }));

/** "Explore Industries" row (36px title). The overview hides the "Keep exploring" overline; FS pages show it. */
export const exploreIndustries = (keys, { eyebrow = null } = {}) => ({
  eyebrow,
  title: 'Explore Industries',
  cards: relatedIndustries(...keys),
});

/** Figma "CTA band" on every Industries page: the page headline, a blank sub-line, one "Book a demo" button. */
export const industryCta = (title) => ({
  title,
  lead: '\u00a0',
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: null,
});

/** Directory link card for an industry: { title, description, to }. */
export const linkCard = (key) => {
  const { title, description, to } = INDUSTRIES[key];
  return { title, description, to };
};
