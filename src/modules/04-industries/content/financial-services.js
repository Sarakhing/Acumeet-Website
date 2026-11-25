import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import RedactionReview from '@/components/visuals/RedactionReview';
import { AVATARS } from '@/components/visuals/people';
import WorkspaceAccessCard from '@/modules/02-solutions/components/visuals/WorkspaceAccessCard';
import { INDUSTRIES, exploreIndustries, industryCta, linkCard } from './industries';

const FS_KEYS = [
  'banking',
  'insurance',
  'executiveMeetings',
  'creditCommittees',
  'riskCommittees',
  'complianceMeetings',
  'fraudInvestigations',
  'boardMeetings',
  'auditMeetings',
  'amlReviews',
  'customerStrategy',
];

/* "Benefits" card bodies (✓ Card · … 413×280), in Figma order. */
const WORKFLOW_BODIES = {
  banking:
    'Support conversations across banking operations, business strategy and customer relationships. Acumeet helps teams capture meeting discussions, generate structured summaries, document decisions and track follow-up actions across departments.',
  insurance:
    'Keep insurance-related discussions organised and actionable, from claims reviews and underwriting discussions to broker meetings and customer strategy sessions. Document key considerations, decisions and follow-up actions.',
  executiveMeetings:
    'Give leadership teams a clearer record of strategic discussions, business priorities and key decisions. Turn executive conversations into structured summaries and actionable follow-ups.',
  creditCommittees:
    'Create clearer records of credit discussions, lending considerations and committee decisions. Capture key points, document agreed outcomes and organise follow-up actions.',
  riskCommittees:
    'Preserve the context behind risk discussions, mitigation decisions and outstanding actions. Create structured summaries and decision records teams can revisit.',
  complianceMeetings:
    'Make compliance discussions easier to document, retrieve and follow through. Capture summaries, decisions and actions relating to policies, obligations and internal controls.',
  fraudInvestigations:
    'Maintain structured records of meetings about suspected fraud, findings, outstanding questions and agreed next steps, subject to institutional information-handling policies and appropriate access controls.',
  boardMeetings:
    'Help boards and company secretariats maintain clearer records of strategic discussions, resolutions and assigned actions, supporting continuity between board meetings.',
  auditMeetings:
    'Turn audit discussions into organised records of findings, recommendations, responsibilities and remediation actions. Retain context and follow up on agreed next steps.',
  amlReviews:
    'Support structured documentation of anti-money laundering review meetings, case discussions, escalation decisions and follow-up actions. Acumeet supports meeting documentation, not AML screening or transaction monitoring.',
  customerStrategy:
    'Turn customer and relationship meetings into actionable business knowledge. Document customer needs, commitments, strategic opportunities and next steps to maintain continuity across teams.',
};

/* Card tints/patterns repeat every six cards in Figma. */
const CARD_STYLES = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'card' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'card' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'card' } },
  { tint: 'mint', pattern: { type: 'rings', size: 'card' } },
  { tint: 'amber', pattern: { type: 'dots', size: 'card' } },
  { tint: 'grey', pattern: { type: 'hairlines', size: 'card' } },
];

const avatar = (name) => AVATARS[name];

/** 04.01 · Financial Services (Figma 48:287949). */
export const financialServices = {
  breadcrumb: [
    { label: 'Home', to: ROUTES.home },
    { label: 'Industries', to: INDUSTRIES.overview.to },
    { label: 'Financial Services' },
  ],

  /** 01 · Hero (48:287952) — dark rings hero, carousel bleeds into the next section. */
  hero: {
    variant: 'rings',
    eyebrow: 'Financial Services',
    title: 'Turn Financial Meetings Into Actionable Intelligence',
    lead: 'Financial institutions make critical decisions every day across leadership meetings, risk reviews, credit committees, compliance discussions and customer engagements. Acumeet helps teams turn these conversations into structured records, clear decisions, trackable actions and searchable organisational knowledge.',
    primary: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Solutions', to: ROUTES.solutions.overview },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 04.01 · Financial Services" (48:266582) — 3 slides, 560px cards. */
  carousel: [
    {
      label: 'Decisions',
      content: h(DecisionsCard, {
        width: 560,
        date: 'May 30',
        rows: [
          { kind: 'decision', text: 'Move dispute reviews to twice weekly' },
          { kind: 'decision', text: 'Escalate the switch provider SLA breach' },
          { kind: 'risk', text: 'Transfer failures during month-end peaks' },
        ],
        topics: ['Channel uptime', 'Card disputes', 'Branch network', 'Customer complaints'],
      }),
    },
    {
      label: 'Action items',
      content: h(ActionItemsCard, {
        width: 560,
        open: 3,
        avatarSize: 20,
        shadow: 'mock',
        tasks: [
          { title: 'Prepare channel uptime summary for ExCo', due: 'This week', avatar: avatar('Faith Oluwale') },
          { title: 'Share branch downtime report with Operations', due: 'Jun 9', avatar: avatar('Warith Abraham') },
          { title: 'Review failed transfer cases from last week', due: 'Today', avatar: avatar('Ruth Godwin') },
        ],
      }),
    },
    {
      label: 'Summary',
      content: h(SummaryCard, {
        width: 560,
        title: 'Retail Banking Operations Review',
        scores: [
          { label: 'Quality', value: 76, bar: 'amber' },
          { label: 'Sentiment', value: 86, bar: 'green' },
          { label: 'Engagement', value: 30, bar: 'blue' },
        ],
        insights: [
          'Operations reported a drop in failed transfers after the switch update.',
          'Customer Experience flagged longer dispute resolution times.',
        ],
      }),
    },
  ],

  /** 02 · Bring Structure to High-Stakes Financial Discussions (48:287967) — visual left. */
  intro: {
    size: 'compact',
    reverse: true,
    title: 'Bring Structure to High-Stakes Financial Discussions',
    body: [
      'Financial decisions often involve multiple stakeholders, detailed discussions, sensitive information and actions that must be followed through. When meeting outcomes are scattered across notes, emails and individual follow-ups, important context can be difficult to retrieve. Acumeet helps financial services teams create a more consistent way to document meetings, retain context and follow decisions through to action.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(RedactionReview, {
        width: 440,
        count: 6,
        sentence: [
          'The facility for',
          { token: 'CUSTOMER_NAME' },
          'is secured against account',
          { token: 'ACCOUNT_NUMBER' },
          'held with',
          { token: 'BANK_NAME' },
        ],
        rows: [
          { label: 'Account number', match: 98 },
          { label: 'Customer name', match: 92 },
        ],
      }),
    },
  },

  /** Tabs explorer (48:288014) + "✓ Explorer · How Acumeet Supports Financial Services" (48:266716). */
  explorer: {
    title: 'How Acumeet Supports Financial',
    accent: 'Services',
    tone: 'subtle',
    items: [
      {
        title: 'Meeting Documentation',
        body: 'Generate structured transcripts and meeting summaries to help teams retain the key points discussed.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(SummaryCard, {
          width: 440,
          title: 'Branch Performance Review',
          scores: [
            { label: 'Quality', value: 44, bar: 'amber' },
            { label: 'Sentiment', value: 63, bar: 'green' },
            { label: 'Engagement', value: 41, bar: 'blue' },
          ],
          insights: [
            'Customer Experience flagged longer dispute resolution times.',
            'The team agreed to review USSD uptime weekly.',
          ],
        }),
      },
      {
        title: 'Decision and Action Tracking',
        body: 'Capture decisions and action items, clarify responsibilities and make follow-up easier to manage.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(ActionItemsCard, {
          width: 480,
          open: 4,
          avatarSize: 20,
          shadow: 'mock',
          tasks: [
            { title: 'Review failed transfer cases from last week', due: 'Jun 7', avatar: avatar('Faith Oluwale') },
            { title: 'Update the USSD outage communication plan', due: 'This week', avatar: avatar('Warith Abraham') },
            { title: 'Confirm card dispute turnaround owners', due: 'Jun 9', avatar: avatar('Ruth Godwin') },
          ],
        }),
      },
      {
        title: 'Searchable Meeting Knowledge',
        body: 'Make it easier to retrieve previous discussions and the context behind decisions.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(KnowledgeSearchCard, {
          width: 460,
          query: 'failed transfer escalation',
          results: [
            { meeting: 'Customer Experience Forum', date: 'Jun 10', excerpt: '…agreed to escalate failed transfers above the weekly threshold.' },
            { meeting: 'Retail Banking Operations Review', date: 'Apr 19', excerpt: '…switch provider SLA discussed with Operations.' },
            { meeting: 'Branch Performance Review', date: 'May 28', excerpt: '…dispute backlog review moved to twice weekly.' },
          ],
        }),
      },
      {
        title: 'Security and Governance',
        body: 'Support more controlled handling of meeting information through applicable access, security and governance capabilities.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(WorkspaceAccessCard, {
          width: 380,
          members: [
            { name: 'Faith Oluwale', role: 'Admin' },
            { name: 'George Nwokoro', role: 'Owner' },
            { name: 'Ruth Godwin', role: 'Viewer' },
            { name: 'Warith Abraham', role: 'Member' },
          ],
        }),
      },
    ],
  },

  /** Benefits (48:288018) — 11 workflow cards linking to the FS sub-pages. */
  workflows: {
    title: 'Explore Financial Services',
    accent: 'Workflows',
    accentBreak: false,
    lead: 'Explore how Acumeet can support the conversations that drive financial institutions.',
    cards: FS_KEYS.map((k, i) => ({
      title: INDUSTRIES[k].title,
      body: WORKFLOW_BODIES[k],
      to: INDUSTRIES[k].to,
      ...CARD_STYLES[i % CARD_STYLES.length],
    })),
  },

  /** Split (48:288034) — "Turn Conversations Into Follow-Through", visual left. */
  followThrough: {
    size: 'compact',
    reverse: true,
    title: 'Turn Conversations Into Follow-Through',
    body: [
      'Give your teams a clearer way to document discussions, retrieve institutional knowledge and follow up on decisions across financial services workflows.',
    ],
    cta: { label: 'Book a Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact Our Team', to: ROUTES.contactSales },
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(ActionItemsCard, {
        width: 440,
        open: 5,
        avatarSize: 20,
        tasks: [
          { title: 'Update the USSD outage communication plan', due: 'Fri', avatar: avatar('Faith Oluwale') },
          { title: 'Confirm card dispute turnaround owners', due: 'May 23', avatar: avatar('Warith Abraham') },
          { title: 'Prepare channel uptime summary for ExCo', due: 'Jun 28', avatar: avatar('Ruth Godwin') },
        ],
      }),
    },
  },

  /** Directory · FINANCIAL SERVICES (48:288083). */
  directory: {
    eyebrow: 'Financial Services',
    title: 'Explore Financial Services',
    items: FS_KEYS.map(linkCard),
  },

  /** Explore more (48:288099) — "Keep exploring" overline shown. */
  related: exploreIndustries(['banking', 'insurance', 'executiveMeetings', 'creditCommittees'], {
    eyebrow: 'Keep exploring',
  }),

  /** CTA band (48:288109). */
  cta: industryCta('Turn Financial Meetings Into Actionable Intelligence'),
};
