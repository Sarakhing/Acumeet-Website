import { ROUTES } from '@/constants/routes';

const U = ROUTES.useCase;

/**
 * Use Cases catalogue — one entry per 05.x page (Figma "05 · Use Cases", 48:305346).
 * `title` = Figma "✓ Related · X" card title, `tagline` = the page headline (also
 * the Directory "Link card" line), `blurb` = the overview "Choose Your Use Case"
 * card line. Slugs match the header mega menu (src/constants/megaMenu.js).
 */
export const USE_CASES = {
  overview: { title: 'Use cases overview', to: U.overview, figma: '48:308252' },
  executiveBoardMeetings: {
    title: 'Executive & board meetings',
    tagline: 'Turn Executive Discussions into Clear Decisions and Follow-Through',
    blurb: 'Give leadership teams a clearer record of strategic discussions, decisions, and commitments.',
    to: U.executiveBoardMeetings,
    figma: '48:305601',
  },
  riskCompliance: {
    title: 'Risk & compliance',
    tagline: 'Bring Clarity and Accountability to Risk & Compliance Meetings',
    blurb: 'Organise risk and compliance meeting records, assigned actions, and follow-up responsibilities.',
    to: U.riskCompliance,
    figma: '48:305805',
  },
  creditInvestmentCommittees: {
    title: 'Credit & investment committees',
    tagline: 'Bring Structure and Clarity to Credit & Investment Committee Meetings',
    blurb: 'Document committee discussions, decision rationale, conditions, and next steps.',
    to: U.creditInvestmentCommittees,
    figma: '48:306049',
  },
  audit: {
    title: 'Audit',
    tagline: 'Make Audit Discussions Easier to Document, Review, and Follow Up',
    blurb: 'Keep audit discussions, findings, corrective actions, and owners easier to follow.',
    to: U.audit,
    figma: '48:305347',
  },
  fraudAml: {
    title: 'Fraud & AML',
    tagline: 'Keep Fraud & AML Meeting Discussions Organised and Accountable',
    blurb: 'Maintain organised records of sensitive investigation discussions and assigned follow-ups.',
    to: U.fraudAml,
    figma: '48:306374',
  },
  projectGovernance: {
    title: 'Project governance',
    tagline: 'Turn Project Meetings into Clear Decisions and Accountable Follow-Through',
    blurb: 'Track project decisions, dependencies, risks, blockers, and milestones across governance meetings.',
    to: U.projectGovernance,
    figma: '48:306542',
  },
  customerStrategy: {
    title: 'Customer strategy',
    tagline: 'Turn Customer Conversations into Clearer Strategies and Follow-Through',
    blurb: 'Preserve customer insights, strategic priorities, and agreed initiatives across account discussions.',
    to: U.customerStrategy,
    figma: '48:306787',
  },
  sales: {
    title: 'Sales',
    tagline: 'Turn Sales Conversations into Clear Next Steps',
    blurb: 'Capture prospect needs, commitments, objections discussed, and next steps after sales conversations.',
    to: U.sales,
    figma: '48:307020',
  },
  customerSuccess: {
    title: 'Customer success',
    tagline: 'Keep Customer Commitments Visible After Every Meeting',
    blurb: 'Keep onboarding discussions, customer goals, open issues, and account follow-ups connected.',
    to: U.customerSuccess,
    figma: '48:307158',
  },
  operations: {
    title: 'Operations',
    tagline: 'Bring Clearer Follow-Through to Operational Meetings',
    blurb: 'Turn operational reviews and process discussions into clear actions and accountable ownership.',
    to: U.operations,
    figma: '48:307330',
  },
  productTeams: {
    title: 'Product teams',
    tagline: 'Turn Product Discussions into Decisions Teams Can Build On',
    blurb: 'Capture product requirements, prioritisation discussions, user feedback, and delivery blockers.',
    to: U.productTeams,
    figma: '48:307638',
  },
  managementMeetings: {
    title: 'Management meetings',
    tagline: 'Keep Management Decisions Clear, Connected, and Actionable',
    blurb: 'Create continuity across performance reviews, departmental updates, and cross-functional decisions.',
    to: U.managementMeetings,
    figma: '48:307791',
  },
  enterpriseKnowledgeManagement: {
    title: 'Enterprise knowledge management',
    tagline: 'Turn Meeting Conversations into Organisational Knowledge',
    blurb: 'Make meeting-derived knowledge easier to retain, search, and reuse across the organisation.',
    to: U.enterpriseKnowledgeManagement,
    figma: '48:308004',
  },
};

/** The 13 use-case pages in Figma order (overview grid + directory). */
export const USE_CASE_KEYS = Object.keys(USE_CASES).filter((k) => k !== 'overview');

/** Positional "Explore more" thumbnails, same as Products/Industries: lilac rings, pink dots, blue waveform, mint hairlines. */
const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/** "Explore Use Cases" row. Every "✓ Related" card's line reads "Use Cases". Detail pages show "Keep exploring"; the overview hides it. */
export const exploreUseCases = (keys, { eyebrow = 'Keep exploring' } = {}) => ({
  eyebrow,
  title: 'Explore use cases',
  cards: keys.map((k, i) => ({
    title: USE_CASES[k].title,
    description: 'Use Cases',
    to: USE_CASES[k].to,
    ...SLOTS[i % SLOTS.length],
  })),
});

/** Home / Use Cases Overview / {page}. */
export const ucBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Use cases overview', to: USE_CASES.overview.to },
  { label },
];

/** Figma "CTA band" on every detail page: headline + sub-line + Book a Demo / Talk to Our Team. */
export const ucCta = (title, lead) => ({
  title,
  lead,
  primary: { label: 'Book a demo', to: ROUTES.bookDemo },
  secondary: { label: 'Talk to our team', to: ROUTES.contactSales },
});
