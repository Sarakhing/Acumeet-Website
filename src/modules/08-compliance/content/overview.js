import { createElement as h } from 'react';
import { access, actions, audit, redaction, retention, summary } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import ComplianceBadge from '../components/ComplianceBadge';
import {
  DOCUMENT_CARDS,
  GOVERNANCE_CARDS,
  members,
  NIN_SENTENCE,
  POLICY_ROWS,
  supplierAtlas,
} from './shared';
import {
  COMPLIANCE,
  COMPLIANCE_KEYS,
  CONTACT,
  DEFAULT_CTA,
  exploreCompliance,
  explorer,
  faq,
  infoCards,
  panel,
  PRIVACY_NOTICE,
  RELATED,
  REQUEST_DOCS,
  split,
  VISIT_TRUST,
} from './compliance';

/** 08.01 · Compliance Overview (Figma 48:369434). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Compliance Overview' }],

  /** 01 · Hero + "Hero carousel · 08.01 · Compliance Overview" (48:344810). */
  ...ringsHero({
    eyebrow: 'Compliance',
    title: 'Compliance built for organisations where trust matters.',
    lead: 'Acumeet helps organisations turn meetings into transcripts, summaries, decisions, action items and searchable knowledge. We understand that enterprise adoption also depends on clear privacy commitments, recognised security assurance and responsible handling of information.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    slides: [
      [
        'Audit log',
        audit(
          [
            ['10:27', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:20', 'Applied legal hold', 'Admin'],
            ['10:06', 'Edited action item', 'George Nwokoro'],
            ['09:45', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 560 },
        ),
      ],
      ['Retention', retention(POLICY_ROWS, { status: 'All meetings', width: 350 })],
      ['Access', access(members, { width: 380 })],
    ],
  }),

  sections: [
    /** 02 · Clear commitments (48:369465). */
    infoCards(
      {
        eyebrow: 'Compliance overview',
        title: 'Clear commitments. Responsible information handling.',
        paragraphs: [
          'Meetings can contain personal data, confidential business discussions and decisions that affect customers, employees and operations. Acumeet’s compliance approach supports the responsible use of meeting intelligence and helps enterprise teams understand the commitments relevant to their evaluation.',
          'This page summarises Acumeet’s stated certifications and compliance commitments. It is intended to help security, legal, privacy, procurement and business teams find the right starting point for due diligence.',
        ],
        cta: CONTACT('Talk to Our Team'),
      },
      [
        [
          'Security assurance',
          'SOC 2 and ISO 27001 provide assurance frameworks relevant to evaluating security practices and information security management.',
        ],
        [
          'Privacy and data protection',
          'GDPR and NDPR relate to the handling of personal data and applicable data-protection responsibilities.',
        ],
        [
          'Health information',
          'HIPAA is relevant to applicable uses involving protected health information and the responsibilities of covered entities and business associates.',
        ],
      ],
    ),

    /** Split · SOC 2 (48:369486). */
    split({
      reverse: true,
      eyebrow: 'SOC 2',
      title: 'SOC 2 certified.',
      body: [
        'Acumeet is SOC 2 certified. SOC 2 is an assurance framework used to evaluate controls relevant to areas such as security, availability, processing integrity, confidentiality and privacy, depending on the scope of the examination.',
        'For enterprise customers, SOC 2 documentation can support vendor-risk assessments by providing information about the controls covered by the applicable assurance engagement.',
      ],
      bullet: [
        'For your review —',
        'Contact Acumeet to request available SOC 2 supporting documentation and information about the scope and period covered.',
      ],
      cta: CONTACT('Request SOC 2 Documentation'),
      visual: panel(
        'pink',
        'rings',
        audit(
          [
            ['10:46', 'Updated retention policy', 'Admin'],
            ['10:26', 'Viewed transcript', 'Ruth Godwin'],
            ['10:16', 'Shared meeting record', 'Warith Abraham'],
            ['09:59', 'Changed role to Admin', 'Admin'],
          ],
          { width: 360 },
        ),
      ),
    }),

    /** Split · ISO 27001 (48:369535). */
    split({
      eyebrow: 'ISO 27001',
      title: 'ISO 27001 certified.',
      body: [
        'Acumeet is ISO 27001 certified. ISO/IEC 27001 is an international standard for information security management systems. It provides a structured framework for managing information security risks and continually improving information security management.',
        'For customers, the certification is one part of understanding how Acumeet approaches information security governance and risk management.',
      ],
      bullet: [
        'For your review —',
        'Contact Acumeet for the current certificate and information about the applicable certification scope.',
      ],
      cta: CONTACT('Request ISO 27001 Documentation'),
      visual: panel('blue', 'dots', access(members, { width: 380 })),
    }),

    /** Split · GDPR (48:369576) with "Badge / GDPR". */
    split({
      reverse: true,
      eyebrow: 'GDPR',
      title: 'GDPR compliance and personal data protection.',
      body: [
        'Acumeet is GDPR compliant. The General Data Protection Regulation establishes requirements for the processing of personal data within its scope. Because meetings may include names, voices, opinions, business discussions and other personal information, organisations need clear information about how that data is processed.',
        'Acumeet’s privacy information and applicable contractual terms are the starting points for understanding data-processing purposes, roles and responsibilities, retention, deletion and related privacy matters.',
      ],
      bullet: [
        'What customers should be able to understand —',
        'What categories of data are processed; why data is processed; the roles and responsibilities of the parties; applicable retention and deletion arrangements; and how privacy enquiries are handled.',
      ],
      cta: PRIVACY_NOTICE,
      secondary: CONTACT('Discuss Data Protection Requirements'),
      visual: panel('lilac', 'hairlines', h(ComplianceBadge, { region: 'PRIVACY', label: 'GDPR' })),
    }),

    /** Split · NDPR (48:369603) with "Badge / NDPR". */
    split({
      eyebrow: 'NDPR',
      title: 'NDPR compliance and Nigerian data protection.',
      body: [
        'Acumeet is NDPR compliant. The Nigeria Data Protection Regulation is part of the Nigerian data-protection landscape. Organisations evaluating Acumeet should be able to understand the relevant privacy practices and responsibilities that apply to their use of the platform.',
        'Our privacy information and relevant contractual documentation provide a starting point for discussions about personal data, customer responsibilities and data handling in the context of Acumeet.',
      ],
      bullet: [
        'For Nigerian organisations —',
        'Contact our team for information relevant to your organisation’s data-protection review and procurement process.',
      ],
      cta: CONTACT('Discuss NDPR Requirements'),
      visual: panel('mint', 'waveform', h(ComplianceBadge, { region: 'NIGERIA', label: 'NDPR' })),
    }),

    /** Split · HIPAA (48:369626). */
    split({
      reverse: true,
      eyebrow: 'HIPAA',
      title: 'HIPAA compliance for applicable healthcare use cases.',
      body: [
        'Acumeet is HIPAA compliant. The Health Insurance Portability and Accountability Act (HIPAA) establishes requirements for protecting certain health information in applicable contexts. Organisations considering Acumeet for healthcare-related workflows should assess the intended use, the information involved and the responsibilities that apply to each party.',
        'Our team can discuss the documentation and contractual arrangements relevant to your organisation’s proposed use of Acumeet.',
      ],
      bullet: [
        'For healthcare organisations —',
        'Discuss your use case and request the information needed to evaluate Acumeet against your organisation’s privacy, security and procurement requirements.',
      ],
      cta: CONTACT('Discuss Healthcare Compliance'),
      visual: panel(
        'amber',
        'rings',
        redaction(7, NIN_SENTENCE, [
          ['NIN', '100%'],
          ['Phone number', '93%'],
        ]),
      ),
    }),

    /** 08 · Responsible handling of meeting information (48:369680). */
    infoCards(
      {
        eyebrow: 'Privacy and data governance',
        title: 'Responsible handling of meeting information.',
        paragraphs: [
          'Meeting intelligence is useful only when organisations can understand and govern the information behind it. Acumeet helps turn meeting activity into structured knowledge, so privacy and data governance need to be considered across capture, processing, access, retention and deletion.',
        ],
        columns: 2,
        cta: { label: 'Explore Privacy & Data Protection', to: ROUTES.trustPage.privacy },
      },
      GOVERNANCE_CARDS,
    ),

    /** Tabs explorer + "Explorer · Use AI-generated meeting content" (48:344931). */
    explorer(
      {
        eyebrow: 'Responsible AI and meeting intelligence',
        title: 'Use AI-generated meeting content with',
        accent: 'appropriate oversight.',
        titleSize: 48,
        lead: [
          'Acumeet uses AI-enabled workflows to help generate transcripts, summaries, decisions, action items and searchable meeting knowledge. AI-generated outputs can help teams work more efficiently, but they may require review against the original meeting context—particularly where decisions have legal, financial, regulatory, medical or operational consequences.',
          'Organisations should apply appropriate internal governance when using AI-generated meeting content and should understand the applicable data-handling arrangements for the features they use.',
        ],
      },
      [
        [
          'Human accountability',
          'People remain responsible for reviewing and acting on important meeting outputs.',
          actions(
            4,
            [
              ['Review open regulator queries', 'Next week'],
              ['Share the compliance monitoring report', 'Jun 14'],
              ['Submit the monthly regulatory return', 'Jun 7'],
            ],
            { width: 400 },
          ),
        ],
        [
          'Governed use',
          'Organisations should align AI use with their internal policies, regulatory obligations and risk appetite.',
          access(
            [
              ['Faith Oluwale', 'Owner'],
              ['George Nwokoro', 'Admin'],
              ['Ruth Godwin', 'Member'],
              ['Warith Abraham', 'Viewer'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Data-handling transparency',
          'Review Acumeet’s privacy and AI information to understand the applicable processing arrangements.',
          supplierAtlas,
        ],
      ],
    ),

    /** Split · Enterprise due diligence (48:369711). */
    split({
      eyebrow: 'Enterprise due diligence',
      title: 'Support for your vendor review.',
      body: [
        'Security, legal, privacy and procurement teams often need evidence that goes beyond a website summary. Acumeet can provide a route for requesting available documentation and discussing the questions relevant to your organisation’s assessment.',
        'Tell us which standards, use case and documentation your team needs so we can direct your request appropriately.',
        'SOC 2 supporting documentation',
        'ISO 27001 certificate and applicable scope information',
      ],
      cta: REQUEST_DOCS,
      visual: panel(
        'pink',
        'dots',
        summary(
          'Vendor Risk Review',
          [71, 81, 25],
          [
            'Procurement requested the SOC 2 report and the security architecture overview.',
            'Compliance will share the completed security questionnaire by Friday.',
          ],
        ),
      ),
    }),

    /** 11 · Find the information relevant to your assessment (48:369754). */
    infoCards(
      {
        eyebrow: 'Compliance documentation',
        title: 'Find the information relevant to your assessment.',
        paragraphs: [
          'Use the resources below to begin your compliance review. If a document is not publicly available, request it from our team.',
        ],
      },
      DOCUMENT_CARDS,
    ),

    /** Directory · COMPLIANCE (48:369792). */
    {
      type: 'directory',
      eyebrow: 'Compliance',
      title: 'Explore Compliance',
      items: COMPLIANCE_KEYS.map((k) => ({
        title: COMPLIANCE[k].title,
        description: COMPLIANCE[k].tagline,
        to: COMPLIANCE[k].to,
      })),
    },
  ],

  /** FAQ (48:369807). */
  faq: faq([
    [
      'What certifications does Acumeet hold?',
      'Acumeet is SOC 2 certified and ISO 27001 certified. Contact us to request available supporting documentation.',
    ],
    [
      'Is Acumeet GDPR and NDPR compliant?',
      'Yes. Acumeet is GDPR and NDPR compliant. Our privacy information and applicable contractual terms are the starting point for reviewing data-protection responsibilities.',
    ],
    [
      'Is Acumeet HIPAA compliant?',
      'Yes. Acumeet is HIPAA compliant. Healthcare organisations should discuss their intended use case and request the relevant documentation for their assessment.',
    ],
    [
      'Can we receive Acumeet’s SOC 2 documentation?',
      'Contact us to request the available SOC 2 supporting documentation and information about its scope.',
    ],
    [
      'Can we receive the ISO 27001 certificate?',
      'Contact us to request the current certificate and applicable scope information.',
    ],
    [
      'Does compliance mean every customer use case is automatically compliant?',
      'No platform statement replaces an organisation’s own assessment. Customers should consider their intended use, configuration, responsibilities and applicable legal or regulatory requirements.',
    ],
    [
      'How can our team begin a compliance review?',
      'Use the Request Compliance Documentation option and tell us which standards, use case and materials your team needs.',
    ],
  ]),

  related: exploreCompliance(RELATED),

  cta: DEFAULT_CTA,
};
