import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import GovernHeroVisual from '../components/visuals/GovernHeroVisual';
import TranscriptCard from '../components/visuals/TranscriptCard';
import AuditLogCard from '../components/visuals/AuditLogCard';
import RedactionReview from '../components/visuals/RedactionReview';
import { SOLUTIONS, solutionBreadcrumb } from './solutions';

/** 03.05 · Govern (Figma 46:17748). */
export const govern = {
  breadcrumb: solutionBreadcrumb('Govern'),

  hero: {
    variant: 'wash',
    eyebrowStyle: 'chip',
    eyebrow: 'Solutions · Govern',
    title: 'Govern Every Meeting. Strengthen',
    accent: 'Every Decision.',
    lead: 'Establish clear rules for how your organisation records, manages, shares, and retains meeting information. Acumeet helps enterprises bring structure, consistency, and accountability to meeting governance.',
    primary: { label: 'Book an Enterprise Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet', to: ROUTES.products },
    visual: h(GovernHeroVisual),
    visualWidth: 665,
    padBottom: 36, // 738 − 64 − 638 (canvas incl. 64px shadow room)
  },

  /** Split 46:18902. */
  policies: {
    size: 'compact',
    reverse: true,
    eyebrow: 'Meeting governance',
    eyebrowStyle: 'mono',
    title: 'Turn Meeting Policies into a More Consistent Way of Working.',
    body: [
      'Every meeting creates business information that needs to be managed responsibly. From recordings and transcripts to summaries and decisions, organisations need clear policies for how this information is handled.',
      'Acumeet supports a structured approach to meeting governance, helping organisations align meeting workflows with their internal policies, data-handling requirements, and business responsibilities.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(TranscriptCard, {
        lines: [
          { name: 'Faith Oluwale', time: '03:21', text: 'We completed 23 story points, which is a 15% increase from the previous sprint.' },
          { name: 'George Nwokoro', time: '04:28', text: 'The authentication module is progressing well, but we need a security review.' },
          { name: 'Fredelina Augustus', time: '05:35', text: 'I can coordinate with the InfoSec team to schedule that audit.' },
        ],
      }),
    },
  },

  /** Editorial 46:18953. */
  transparency: {
    tone: 'subtle',
    title: 'Make Transparency Part of Every Recorded Meeting.',
    paragraphs: [
      'Recording meetings should come with clear expectations. Help your organisation establish responsible recording practices that respect participant privacy and align with applicable requirements.',
      'Acumeet supports a governance approach that prioritises transparency, consent, and responsible handling of recorded conversations.',
    ],
  },

  /** Split 46:18960 (dark). */
  retention: {
    size: 'compact',
    tone: 'dark',
    reverse: true,
    title: 'Keep Meeting Information for the Right Amount of Time.',
    body: [
      'Not every meeting record needs to be kept indefinitely. Establish retention periods that reflect your organisation’s data governance policies, legal obligations, contractual requirements, and records-management practices.',
      'Acumeet supports configurable retention options, including 30 days, 90 days, 180 days, and a custom period for applicable storage configurations.',
      'Align your retention decisions with your organisation’s data classification, data-loss prevention (DLP) policies, and operational needs.',
    ],
    visual: {
      tint: 'night',
      pattern: { type: 'waveform', size: 'panel' },
      content: h(AuditLogCard, {
        width: 440,
        events: [
          { time: '11:43', action: 'Edited action item', actor: 'George Nwokoro' },
          { time: '11:30', action: 'Approved redactions', actor: 'Faith Oluwale' },
          { time: '11:10', action: 'Exported summary', actor: 'George Nwokoro' },
          { time: '11:00', action: 'Updated retention policy', actor: 'Admin' },
        ],
      }),
    },
  },

  /** "02 · rows" 46:18994 / 46:19001 / 46:19008 — alternating subtle / white / subtle. */
  rows: [
    {
      tone: 'subtle',
      title: 'Keep Sensitive Meeting Information in the Right Hands.',
      paragraphs: [
        'Meeting recordings, transcripts, and summaries can contain confidential business information. Clear sharing rules help organisations manage who should be able to access and distribute these records.',
        'Support responsible collaboration by aligning information sharing with your organisation’s access permissions, confidentiality requirements, and internal policies.',
      ],
    },
    {
      tone: 'white',
      title: 'Access Should Not Last Longer Than Necessary.',
      paragraphs: [
        'Business needs change, projects end, and responsibilities shift. Time-bound access can help organisations manage temporary access arrangements and reduce the risk of permissions remaining active beyond their intended purpose.',
        'Establish clearer expectations for temporary collaboration and periodic access reviews, in line with your organisation’s access-management policies.',
      ],
    },
    {
      tone: 'subtle',
      title: 'Classify Meeting Records. Make Information Easier to Govern.',
      paragraphs: [
        'Consistent classification helps organisations organise meeting information and understand how different records should be handled.',
        'Use a structured tagging approach to categorise meeting records by relevant business context, such as department, project, meeting type, confidentiality level, or records-management category.',
        'Clear classification practices help teams organise information and support more consistent governance decisions.',
      ],
    },
  ],

  /** Split 46:19017. */
  redaction: {
    size: 'compact',
    reverse: true,
    title: 'Define How Sensitive Information Should Be Handled.',
    body: [
      'Meeting records may contain personal information, financial details, and confidential business discussions. Organisations need clear rules for identifying and protecting this information.',
      'Acumeet’s AI redaction capabilities can help identify and redact selected sensitive content, supporting your organisation’s approach to privacy and responsible information handling.',
      'Establish redaction requirements that reflect the sensitivity of your information and the policies governing its use.',
    ],
    visual: {
      tint: 'pink',
      pattern: { type: 'waveform', size: 'panel' },
      content: h(RedactionReview, {
        count: 6,
        width: 440,
        sentence: ['Card ending', { token: '[CARD_NUMBER]' }, 'was used by', { token: '[PERSON_NAME]' }, 'from phone', { token: '[PHONE_NUMBER]' }],
        rows: [
          { label: 'Card number', match: '100%' },
          { label: 'Phone number', match: '86%' },
        ],
      }),
    },
  },

  /** Editorial 46:19056. */
  visibility: {
    tone: 'subtle',
    title: 'Bring Greater Visibility to Meeting Governance.',
    paragraphs: [
      'Governance requires more than policies on paper. Organisations need visibility into relevant activity to support internal reviews, oversight, and compliance processes.',
      'Compliance reporting can help authorised teams review available governance information, support internal assessments, and identify areas that may require further attention.',
      'Bring meeting governance into your wider approach to enterprise accountability and oversight.',
    ],
  },

  /** "Benefits" 46:19063 — ✓ Card · … (46:21702 / 46:21730 / 46:21753). */
  industries: {
    title: 'Governance for Sensitive Business',
    accent: 'Environments',
    cards: [
      {
        title: 'Financial Services and Insurance',
        body: 'Support consistent handling of sensitive discussions and business records.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card' },
        to: ROUTES.industries,
      },
      {
        title: 'Energy and Telecommunications',
        body: 'Establish clearer governance practices for operational meetings, project discussions, and confidential information.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
        to: ROUTES.industries,
      },
      {
        title: 'Legal, Compliance and Executive Teams',
        body: 'Support responsible recording, classification, retention, and review of important organisational conversations.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
        to: ROUTES.industries,
      },
    ],
  },

  faq: [
    {
      q: 'What is meeting governance?',
      a: 'Meeting governance defines the policies and practices for recording, managing, sharing, retaining, and reviewing meeting information.',
    },
    {
      q: 'How is governance different from security?',
      a: 'Security focuses on protecting systems and information through measures such as authentication, permissions, and encryption. Governance establishes the rules and processes for how meeting information should be handled.',
    },
    {
      q: 'Can we align retention with our internal policies?',
      a: 'Acumeet supports configurable retention options, including 30-day, 90-day, 180-day, and custom periods for applicable storage configurations. Your organisation can determine the appropriate period based on its policies and obligations.',
    },
    {
      q: 'Why is recording consent important?',
      a: 'Consent and transparency help participants understand when meetings are recorded and how recording aligns with organisational policies and applicable requirements.',
    },
    {
      q: 'Why should meeting records be tagged?',
      a: 'Classification helps organisations organise records by business context and sensitivity, supporting more consistent decisions about handling, access, and retention.',
    },
    {
      q: 'Can Acumeet support compliance reporting?',
      a: 'Available reporting depends on the governance information and controls supported by the platform. Organisations should assess these capabilities against their specific reporting requirements.',
    },
  ],

  /**
   * Row 46:19088. Figma keeps the thumbnails positional on this page (slot 1
   * lilac rings, slot 2 pink dots, slot 3 blue waveform), so tint/pattern are
   * overridden per slot rather than taken from each solution's default.
   */
  related: [
    { ...SOLUTIONS.secure, tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
    { ...SOLUTIONS.control, tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
    { ...SOLUTIONS.protect, tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
    SOLUTIONS.emi,
  ],

  cta: {
    title: 'Bring Structure to the Way Your Organisation Governs Meetings.',
    lead: 'Create clearer expectations for recording, consent, information sharing, retention, and accountability across your meeting workflows.',
    primary: { label: 'Book an Enterprise Demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact Our Team', to: ROUTES.contactSales },
  },
};
