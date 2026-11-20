import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import overviewHairlines from '@/assets/images/solutions/overview-hero-hairlines-720x884.svg';
import showcaseHairlines from '@/assets/images/solutions/showcase-hairlines-760x330.svg';
import showcaseDots from '@/assets/images/solutions/showcase-dot-grid-488x308.svg';
import showcaseRingsWide from '@/assets/images/solutions/showcase-rings-680x420.svg';
import showcaseRings from '@/assets/images/solutions/showcase-rings-410x327.svg';
import keyMagenta from '@/assets/images/solutions/ic-key-magenta-18.svg';
import databaseBlue from '@/assets/images/solutions/ic-database-blue-18.svg';
import icLock from '@/assets/images/solutions/ic-lock-band.svg';
import icActivity from '@/assets/images/solutions/ic-activity-band.svg';
import icKey from '@/assets/images/solutions/ic-key-band.svg';
import avatar1 from '@/assets/images/solutions/avatar-record-1.png';
import avatar2 from '@/assets/images/solutions/avatar-record-2.png';
import avatar3 from '@/assets/images/solutions/avatar-record-3.png';
import avatar4 from '@/assets/images/solutions/avatar-record-4.png';
import avatar5 from '@/assets/images/solutions/avatar-fredelina.png';
import taskAvatar1 from '@/assets/images/home/industries-avatar-1.jpg';
import taskAvatar2 from '@/assets/images/home/industries-avatar-4.jpg';
import taskAvatar3 from '@/assets/images/home/industries-avatar-3.jpg';
import OverviewHeroVisual from '../components/visuals/OverviewHeroVisual';
import RedactionReview from '../components/visuals/RedactionReview';
import KeysStorageCard from '../components/visuals/KeysStorageCard';
import OverviewIntegrationsCard from '../components/visuals/OverviewIntegrationsCard';
import WorkspaceAccessCard from '../components/visuals/WorkspaceAccessCard';
import RetentionPolicyCard from '../components/visuals/RetentionPolicyCard';
import MeetingAnalyticsCard from '../components/visuals/MeetingAnalyticsCard';
import OverviewDecisionsCard from '../components/visuals/OverviewDecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import MeetingRecordCard from '../components/visuals/MeetingRecordCard';
import { SOLUTIONS } from './solutions';

/* ------------------------------------------------------------------ */
/* Showcase tiles (Figma 46:11702)                                     */
/* ------------------------------------------------------------------ */

/** Tile ids double as the "Solution index" jump-link targets. */
const tile = (key, props) => ({
  id: key,
  eyebrow: SOLUTIONS[key].title,
  link: { label: `Explore ${SOLUTIONS[key].title}`, to: SOLUTIONS[key].to },
  ...props,
});

const showcaseRows = [
  [
    tile('protect', {
      width: 760,
      tint: 'pink',
      title: 'Protect Sensitive Information in Every Meeting.',
      titleWidth: 688,
      body: 'Acumeet helps enterprises protect sensitive meeting information by turning business conversations into structured, searchable intelligence while supporting responsible handling of confidential data.',
      bodyWidth: 560,
      visual: {
        width: 760,
        height: 330,
        pattern: { src: showcaseHairlines, width: 760, height: 330 },
        x: 140,
        y: 40,
        content: h(RedactionReview, {
          width: 480,
          count: 7,
          tone: 'highlight',
          sentence: ['Send the contract to', { token: '[EMAIL_ADDRESS]' }, 'and copy', { token: '[PERSON_NAME]' }, 'on account', { token: '[ACCOUNT_NUMBER]' }],
          rows: [
            { label: 'Email address', match: '100%' },
            { label: 'Account number', match: '89%' },
          ],
        }),
      },
    }),
    tile('control', {
      width: 496,
      tint: 'lilac',
      title: 'Your Data. Your Keys. Your Rules.',
      body: 'Keep greater control over where your meeting data is stored, how it is protected, and how long it is retained.',
      bodyWidth: 424,
      visual: {
        width: 496,
        height: 399,
        pattern: { src: showcaseDots, width: 488, height: 308, x: 9, y: 9 },
        x: 38,
        y: 28,
        content: h(KeysStorageCard, {
          width: 420,
          actions: ['Connected', 'Connected'],
          keyIcon: { src: keyMagenta, tone: 'magenta' },
          storageIcon: { src: databaseBlue, tone: 'blue' },
          iconSize: 36,
        }),
      },
    }),
  ],
  [
    tile('connect', {
      layout: 'split',
      tint: 'grey',
      title: 'Connect Your Meetings to the Tools That Move Work Forward',
      titleWidth: 528,
      bodyWidth: 528,
      body: 'Acumeet helps connect meeting intelligence with the tools your teams already use, bringing conversations, decisions, and action items closer to the workflows where work gets done.',
      visual: {
        width: 680,
        height: 420,
        pattern: { src: showcaseRingsWide, width: 680, height: 420 },
        x: 110,
        y: 133,
        content: h(OverviewIntegrationsCard),
      },
    }),
  ],
  [
    tile('secure', {
      width: 410,
      tint: 'blue',
      title: 'Security Should Never Be an Afterthought.',
      body: 'Protect every meeting with a security-first approach to identity, access, encryption, and accountability.',
      visual: {
        width: 410,
        height: 327,
        pattern: { src: showcaseRings, width: 410, height: 327 },
        x: 30,
        y: 32,
        content: h(WorkspaceAccessCard, {
          width: 350,
          members: [
            { name: 'George Nwokoro', role: 'Owner' },
            { name: 'Ruth Godwin', role: 'Admin' },
            { name: 'Warith Abraham', role: 'Viewer' },
            { name: 'Faith Oluwale', role: 'Viewer' },
          ],
        }),
      },
    }),
    tile('govern', {
      width: 410,
      tint: 'mint',
      title: 'Govern Every Meeting. Strengthen Every Decision.',
      body: 'Establish clear rules for how your organisation records, manages, shares, and retains meeting information.',
      visual: {
        width: 410,
        height: 363,
        x: 30,
        y: 28,
        content: h(RetentionPolicyCard, {
          width: 350,
          status: 'All meetings',
          rules: [
            { label: 'Recordings', keep: '180 days' },
            { label: 'Transcripts', keep: '2 years' },
            { label: 'Summaries', keep: '5 years' },
            { label: 'Audit logs', keep: '7 years' },
          ],
        }),
      },
    }),
    tile('understand', {
      width: 412,
      tint: 'amber',
      title: 'Turn Every Conversation Into Business Intelligence.',
      body: 'Your meetings are full of decisions, ideas, commitments, and knowledge.',
      visual: {
        width: 412,
        height: 300,
        x: 31,
        y: 28,
        content: h(MeetingAnalyticsCard, {
          width: 350,
          range: 'This month',
          legend: [
            { label: 'Sentiment', value: '83%', tone: 'green' },
            { label: 'Engagement', value: '55%', tone: 'blue' },
            { label: 'Quality', value: '43%', tone: 'amber' },
          ],
        }),
      },
    }),
  ],
  [
    tile('emi', {
      layout: 'feature',
      tint: 'night',
      title: 'Enterprise meeting intelligence, governed end to end',
      titleWidth: 488,
      bodyWidth: 488,
      body: 'Documentation, decisions and institutional memory for organisations where meetings carry real accountability.',
      visual: {
        width: 720,
        height: 560,
        dots: 'dark',
        glow: 'radial-gradient(450px 400px at 390px 260px, rgb(158 0 89 / 0.6) 0%, rgb(88 9 57 / 0.3) 50%, rgb(18 18 26 / 0) 100%)',
        x: 60,
        y: 38,
        content: h(
          'div',
          { className: 'relative h-[507px] w-[600px]' },
          h(OverviewDecisionsCard, {
            className: 'absolute left-0 top-0',
            date: 'May 30',
            items: [
              { kind: 'Decision', text: 'Consolidate ERP sync alerts' },
              { kind: 'Decision', text: 'Revisit the vendor approval cycle' },
              { kind: 'Risk', text: 'Low supplier engagement on savings' },
            ],
            topics: ['ERP integration', 'Supplier contracts', 'KPIs', 'PO automation'],
          }),
          h(ActionItemsCard, {
            className: 'absolute left-[200px] top-[231px]',
            open: 4,
            shadow: 'mock',
            avatarSize: 20,
            tasks: [
              { title: 'Identify top recurring items for PO automation pilot', due: 'Fri', avatar: taskAvatar1 },
              { title: 'Confirm supplier onboarding checklist owners', due: 'May 8', avatar: taskAvatar2 },
              { title: 'Draft the Q3 vendor scorecard', due: 'Jun 13', avatar: taskAvatar3 },
            ],
          }),
        ),
      },
    }),
  ],
];

/* ------------------------------------------------------------------ */
/* Meeting types (Figma 46:13442 / spec 46:29753)                       */
/* ------------------------------------------------------------------ */

const AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];
const STATUSES = [
  { tone: 'decision', label: 'Decision' },
  { tone: 'done', label: 'Done' },
  { tone: 'progress', label: 'In progress' },
  { tone: 'owner', label: 'Owner set' },
  { tone: 'neutral', label: 'Searchable' },
];
const TINTS = ['amber', 'blue', 'pink', 'mint'];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/** "Learn more" goes to the matching use-case page (Figma: "Button → 15.x <meeting type>"). */
const meetingType = (i, { title, lead, captures, record }) => ({
  title,
  lead,
  captures,
  cta: { label: 'Learn more', to: `${ROUTES.useCases}/${slugify(title)}` },
  tint: TINTS[i % TINTS.length],
  visual: h(MeetingRecordCard, {
    title: `${title} record`,
    mark: i === 0 ? 'acumeet' : 'record',
    fixedOwner: i === 0,
    rows: record.map((label, r) => ({ label, avatar: AVATARS[r], status: STATUSES[r] })),
  }),
});

const meetingTypes = [
  {
    title: 'Executive meetings',
    lead: 'Turn leadership discussions into structured records of decisions, owners and next steps.',
    captures: ['Key discussion points', 'Decisions and rationale', 'Action items and owners', 'Follow-up status'],
    record: ['Key discussion points', 'Decisions and rationale', 'Action items and owners', 'Follow-up status', 'Searchable meeting history'],
  },
  {
    title: 'Credit committees',
    lead: 'Capture committee discussions, decisions, responsibilities and follow-up in a record your team can search.',
    captures: ['Decision context', 'Conditions and follow-up', 'Assigned actions', 'Owners and deadlines'],
    record: ['Decision context', 'Conditions and follow-up', 'Assigned actions', 'Owners and deadlines', 'Searchable committee history'],
  },
  {
    title: 'Risk committees',
    lead: 'Capture emerging risks, decisions, owners and follow-up in one structured record.',
    captures: ['Risks raised', 'Decisions taken', 'Mitigation actions', 'Owners and deadlines'],
    record: ['Risks raised', 'Decisions taken', 'Mitigation actions', 'Owners and deadlines', 'Searchable meeting history'],
  },
  {
    title: 'Compliance meetings',
    lead: 'Capture discussions, approvals, responsibilities and follow-up in structured records.',
    captures: ['Discussion context', 'Decisions and approvals', 'Action ownership', 'Follow-up status'],
    record: ['Discussion context', 'Decisions and approvals', 'Action ownership', 'Follow-up status', 'Searchable meeting records'],
  },
  {
    title: 'Fraud investigations',
    lead: 'Capture discussion context, decisions and assigned actions while applying stronger controls to sensitive information.',
    captures: ['Discussion summaries', 'Decisions and next steps', 'Action owners', 'Sensitive-data redaction'],
    record: ['Discussion summaries', 'Decisions and next steps', 'Action owners', 'Searchable meeting context', 'Sensitive-data redaction'],
  },
  {
    title: 'Board meetings',
    lead: 'Capture board discussion, decisions and actions in structured records authorised teams can find when they need them.',
    captures: ['Key discussions', 'Decisions and approvals', 'Action owners', 'Follow-up items'],
    record: ['Key discussions', 'Decisions and approvals', 'Action owners', 'Follow-up items', 'Searchable meeting history'],
  },
  {
    title: 'Audit meetings',
    lead: 'Capture findings, discussion context, responsibilities and follow-up in a record your team can search.',
    captures: ['Findings discussed', 'Decisions and responses', 'Remediation actions', 'Owners and deadlines'],
    record: ['Findings discussed', 'Decisions and responses', 'Remediation actions', 'Owners and deadlines', 'Searchable meeting history'],
  },
  {
    title: 'AML reviews',
    lead: 'Capture sensitive discussions, review decisions and assigned actions with stronger control over meeting information.',
    captures: ['Review discussion context', 'Decisions and escalation points', 'Assigned actions', 'Sensitive-data redaction'],
    record: ['Review discussion context', 'Decisions and escalation points', 'Assigned actions', 'Searchable meeting history', 'Sensitive-data redaction'],
  },
  {
    title: 'Customer strategy',
    lead: 'Capture customer context, decisions and action ownership so teams move from discussion to coordinated execution.',
    captures: ['Customer priorities', 'Decisions and commitments', 'Action owners', 'Follow-up deadlines'],
    record: ['Customer priorities', 'Decisions and commitments', 'Action owners', 'Follow-up deadlines', 'Searchable account context'],
  },
].map((m, i) => meetingType(i, m));

/* ------------------------------------------------------------------ */

/** 03.01 · Solutions overview (Figma 46:11504). */
export const overview = {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Solutions overview' }],

  hero: {
    variant: 'wash',
    eyebrow: 'Solutions',
    title: 'Meeting intelligence for regulated and enterprise teams',
    lead: 'Capture decisions, assign actions and control sensitive meeting data in your industry.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore solutions', to: '#solutions' },
    secondaryStyle: 'button',
    pattern: { src: overviewHairlines, width: 720, height: 884 },
    titleSize: 58,
    leadSize: 19,
    copyWidth: 560,
    copyTop: 86,
    padBottom: 66,
    visual: h(OverviewHeroVisual),
    visualWidth: 600,
    visualAlign: 'end',
  },

  showcase: {
    eyebrow: 'Solutions',
    title: 'Explore Acumeet solutions',
    index: ['protect', 'control', 'secure', 'govern', 'understand', 'connect', 'emi'].map((k) => ({
      label: SOLUTIONS[k].title,
      href: `#${k}`,
    })),
    rows: showcaseRows,
  },

  meetingTypes: {
    title: 'Explore Acumeet',
    accent: 'by meeting type',
    titleTo: ROUTES.useCases,
    lead: 'See how Acumeet supports the meetings where decisions, approvals and follow-up matter most.',
    slides: meetingTypes,
  },

  security: {
    title: 'Security travels with your meeting data',
    lead: 'Access controls, audit logs and data ownership are built in. See how Acumeet handles security and privacy.',
    cta: { label: 'Visit the Trust Center', to: ROUTES.trustCenter },
    items: [
      { icon: icLock, iconWidth: 15.8, iconHeight: 17.8, title: 'Access controls', body: 'Decide who sees each meeting' },
      { icon: icActivity, iconWidth: 19.8, iconHeight: 17.8, title: 'Audit logs', body: 'Every admin action recorded' },
      { icon: icKey, iconWidth: 16.8, iconHeight: 16.8, title: 'Data ownership', body: 'Your organisation owns its records' },
    ],
  },

  industries: {
    title: 'Explore Acumeet by industry',
    titleTo: ROUTES.industries,
    lead: 'Every industry has different workflows, risks and meeting needs. See how Acumeet reduces manual documentation and keeps critical meeting knowledge easy to find.',
    items: [
      { title: 'Financial Services', body: 'Turn Financial Meetings Into Actionable Intelligence', slug: 'financial-services' },
      { title: 'Banking', body: 'Bring Clarity to Banking Conversations and Decisions', slug: 'banking' },
      { title: 'Insurance', body: 'Make Insurance Meetings More Structured and Actionable', slug: 'insurance' },
      { title: 'Telecommunications', body: 'Turn Telecommunications Meetings Into Coordinated Action', slug: 'telecommunications' },
      { title: 'Public Sector', body: 'Make Public Sector Meetings Easier to Document and Follow Through', slug: 'public-sector' },
      { title: 'Enterprise', body: 'Connect Enterprise Conversations to Decisions and Delivery', slug: 'enterprise' },
      {
        title: 'Other Regulated Industries',
        body: 'Meeting Intelligence for Regulated and Accountability-Driven Organisations',
        slug: 'other-regulated-industries',
      },
    ].map(({ slug, ...item }) => ({ ...item, to: `${ROUTES.industries}/${slug}` })),
  },

  cta: {
    title: 'See Acumeet in your industry',
    lead: 'Bring a real meeting and we will show you the record it creates.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: null,
    size: 'home',
  },
};
