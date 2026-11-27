import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import RedactionReview from '@/components/visuals/RedactionReview';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import RetentionPolicyCard from '@/modules/02-solutions/components/visuals/RetentionPolicyCard';
import RedactionHeroVisual, {
  RedactionHeroVisualCompact,
} from '../components/visuals/RedactionHeroVisual';
import { productBreadcrumb } from './products';

const S = ROUTES.solutions;

/** "Pattern · glow" of the dark Split visual (46:41264): 800×700 at (-60,-100) in the 664×500 panel. */
const BLUE_GLOW =
  'radial-gradient(400px 350px at 340px 250px, rgb(0 77 229 / 0.45) 0%, rgb(13 51 134 / 0.225) 50%, rgb(26 26 38 / 0) 100%)';

const FAQ_COMPLIANCE =
  'No single redaction feature guarantees compliance. Redaction can support a broader privacy and governance programme, alongside appropriate policies, access controls, retention practices, and organisational processes.';

/**
 * 02.07 · AI Redaction (Figma 46:40048).
 * Editorial / Split CTA targets are not specified in Figma; they point at the
 * closest Solutions pages (Protect, Control, Govern) and Security.
 */
export const aiRedaction = {
  breadcrumb: productBreadcrumb('AI redaction'),

  /** 01 · Hero (46:40051) — centred wash hero, 951 tall, 3-card composition below the copy. */
  hero: {
    variant: 'centered',
    eyebrow: 'Product · AI redaction',
    title: 'Protect sensitive data before it becomes a risk',
    lead: 'Meetings can contain personal details, financial information, and confidential business discussions. Acumeet AI Redaction is designed to help teams identify and handle sensitive information in meeting content according to defined privacy and governance requirements.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore the Trust Center', to: ROUTES.trustCenter },
    visual: h(RedactionHeroVisual),
    visualWidth: 1280,
    visualCompact: h(RedactionHeroVisualCompact),
    visualCompactWidth: 520,
  },

  /** 02 · Meeting Intelligence Requires Responsible Data Handling (46:41199) — visual left, pink rings. */
  responsible: {
    size: 'compact',
    reverse: true,
    title: 'Meeting intelligence requires responsible data handling',
    body: [
      'Meeting records can become valuable organisational knowledge, but they may also contain information that should not be widely exposed. Redaction helps reduce unnecessary exposure by removing or masking selected information before it is shared or used further, depending on the product’s supported workflow.',
      'Acumeet’s redaction approach should be configured around the types of information your organisation needs to protect and the controls that govern access to meeting content.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(RedactionReview, {
        width: 440,
        count: 7,
        sentence: [
          'Send the contract to',
          { token: '[EMAIL_ADDRESS]' },
          'and copy',
          { token: '[PERSON_NAME]' },
          'on account',
          { token: '[ACCOUNT_NUMBER]' },
        ],
        rows: [
          { label: 'Email address', match: '100%' },
          { label: 'Account number', match: '89%' },
        ],
      }),
    },
  },

  /** 03 · rows (46:41247) — the "PII REDACTION" overline is hidden in Figma. */
  pii: {
    title: 'Help protect personally identifiable information',
    paragraphs: [
      'Meeting discussions may include personal information such as names, contact details, identification numbers, or other details that can identify an individual. PII redaction is intended to help teams identify and mask supported personal data in meeting content, reducing unnecessary exposure when records are stored, reviewed, or shared.',
    ],
    cta: { label: 'Explore PII protection', to: S.protect, size: 'lg' },
  },

  /** 03 · rows (46:41256) — dark split, 664×500 night panel with blue glow + dark dots. */
  financial: {
    size: 'compact',
    tone: 'dark',
    title: 'Reduce exposure of sensitive financial details',
    body: [
      'Business meetings may include account details, payment information, transaction references, or other financial data. Financial data redaction helps organisations apply appropriate handling to supported financial information within meeting content, in line with their internal policies.',
    ],
    cta: { label: 'Protect financial meeting data', to: S.protect, intent: 'ghost-light' },
    panel: {
      width: 664,
      height: 500,
      tint: 'night',
      pattern: { type: 'dots', size: 'chapters' },
      glow: BLUE_GLOW,
    },
    visual: h(MeetingAnalyticsCard, {
      width: 460,
      range: 'This quarter',
      barWidth: 32,
      barPitch: 42,
      legend: [
        { label: 'Sentiment', value: '93%', tone: 'green' },
        { label: 'Engagement', value: '25%', tone: 'blue' },
        { label: 'Quality', value: '53%', tone: 'amber' },
      ],
    }),
  },

  /** 03 · rows (46:41298). */
  confidential: {
    title: 'Keep confidential business discussions under control',
    paragraphs: [
      'Strategic plans, customer information, internal commercial terms, and other confidential material may arise during meetings. Redaction controls can help limit exposure of supported confidential information in meeting records, complementing access controls and organisational data-handling policies.',
    ],
    cta: { label: 'Protect confidential information', to: S.control, size: 'lg' },
  },

  /** Split 46:41306 — visual left, amber rings, retention policy; 40px title / 18px body. */
  policies: {
    size: 'wide',
    reverse: true,
    title: 'Align redaction with your organisation’s policies',
    body: [
      'Different organisations define sensitive information differently. Custom redaction rules can support tailored handling for selected terms, patterns, or categories, where supported by the product. This helps teams align redaction behaviour with internal requirements and the needs of specific workflows.',
    ],
    cta: { label: 'Explore custom redaction rules', to: S.govern, intent: 'secondary' },
    visual: {
      tint: 'amber',
      pattern: { type: 'rings', size: 'panel' },
      content: h(RetentionPolicyCard, {
        width: 460,
        status: 'Board',
        rules: [
          { label: 'Recordings', keep: '30 days' },
          { label: 'Transcripts', keep: '6 months' },
          { label: 'Summaries', keep: '2 years' },
          { label: 'Audit logs', keep: '7 years' },
        ],
      }),
    },
  },

  /** 03 · rows (46:41354). */
  preStorage: {
    title: 'Consider sensitive data before it is stored',
    paragraphs: [
      'Pre-storage redaction refers to identifying and masking selected sensitive information before the relevant content is persisted. This can help reduce the amount of unredacted sensitive data retained by a system.',
    ],
    cta: { label: 'Learn about pre-storage redaction', to: ROUTES.security, size: 'lg' },
  },

  /** 04 · How AI Redaction Works (46:41362) — NumberedGrid compact, white. */
  how: {
    title: 'How AI redaction works',
    tone: 'white',
    size: 'compact',
    items: [
      { body: 'Identify the content and workflow where redaction is required.' },
      { body: 'Detect supported sensitive information using the available redaction rules.' },
      { body: 'Apply the configured masking or removal behaviour to matched information.' },
      {
        body: 'Handle the resulting content according to the relevant access, storage, and governance controls.',
      },
    ],
  },

  /** Benefits 46:41378 — bento: 846 + 413, then 3 × 413 ("✓ Card · …"). */
  benefits: {
    title: 'Business',
    accent: 'benefits',
    accentBreak: false,
    cards: [
      {
        title: 'Data protection',
        body: 'Help reduce unnecessary exposure of sensitive information in meeting records.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card-wide' },
        span: 2,
      },
      {
        title: 'Confidentiality',
        body: 'Support careful handling of personal, financial, and business-sensitive content.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
      },
      {
        title: 'Policy alignment',
        body: 'Tailor redaction rules to organisational requirements where supported.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
      },
      {
        title: 'Governance support',
        body: 'Complement access controls, retention practices, and wider data-handling procedures.',
        tint: 'mint',
        pattern: { type: 'rings', size: 'card' },
      },
      {
        title: 'More responsible knowledge sharing',
        body: 'Help teams manage meeting content before it is reused or shared.',
        tint: 'amber',
        pattern: { type: 'dots', size: 'card' },
      },
    ],
  },

  /** FAQ 46:41387 — Figma repeats the compliance answer on items 3–6. */
  faq: [
    {
      q: 'What is AI meeting data redaction?',
      a: 'AI meeting data redaction is the use of automated techniques to identify and mask or remove selected sensitive information from meeting content.',
    },
    {
      q: 'What types of information can be redacted?',
      a: 'It means redacting supported sensitive information before the relevant content is saved.',
    },
    { q: 'Can we define our own redaction rules?', a: FAQ_COMPLIANCE },
    { q: 'What does pre-storage redaction mean?', a: FAQ_COMPLIANCE },
    { q: 'Does redaction guarantee regulatory compliance?', a: FAQ_COMPLIANCE },
    { q: 'Which meeting content can be redacted?', a: FAQ_COMPLIANCE },
  ],

  /** CTA band 46:41400. (No "Explore more" row on this page in Figma.) */
  cta: {
    title: 'Protect sensitive data. Strengthen meeting intelligence.',
    lead: 'Explore how Acumeet can help your organisation manage sensitive information in meeting content while supporting responsible, governed access to meeting knowledge.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore the Trust Center', to: ROUTES.trustCenter },
  },
};
