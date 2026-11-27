import { ROUTES } from '@/constants/routes';
import { access, audit, keys, redaction, retention } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { explorer, faq, HERO_ACTIONS, info, SECURITY, SECURITY_KEYS, secCta, split } from './security';

const members = [
  ['Faith Oluwale', 'Admin'],
  ['George Nwokoro', 'Owner'],
  ['Ruth Godwin', 'Viewer'],
  ['Warith Abraham', 'Member'],
];

/** 06.01 · Security Overview (Figma 48:325159). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Security overview' }],

  /** 01 · Hero + "Hero carousel · 06.01" (48:326135). */
  ...ringsHero({
    eyebrow: 'Security overview',
    title: 'Security and governance for meeting intelligence.',
    lead: 'Meetings can contain sensitive decisions, confidential business information, personal data, and regulated discussions. Acumeet’s security approach is designed to help organisations evaluate how meeting information is accessed, processed, protected, monitored, and managed throughout its lifecycle. Explore the controls and evidence relevant to your requirements.',
    ...HERO_ACTIONS,
    slides: [
      ['Access', access(members, { width: 380 })],
      [
        'Audit log',
        audit(
          [
            ['09:35', 'Shared meeting record', 'Warith Abraham'],
            ['09:15', 'Changed role to Admin', 'Admin'],
            ['09:05', 'Downloaded recording', 'Fredelina Augustus'],
            ['08:48', 'Signed in via SSO', 'Ruth Godwin'],
          ],
          { width: 360 },
        ),
      ],
      ['Keys', keys(['Configure', 'Configure'])],
    ],
  }),

  sections: [
    /** 02 · Protect the information behind every meeting (48:325190). */
    info(
      'Protect the information behind every meeting',
      'Acumeet helps organisations turn conversations into summaries, decisions, action items, and searchable knowledge. Security needs to cover more than the meeting itself: it also includes who can access the information, how AI processing is governed, how activity is monitored, and how data is retained or deleted.',
    ),

    /** Split (48:325196) — pink rings, visual left. */
    split({
      reverse: true,
      title: 'A layered approach to security',
      body: [
        'Security is most effective when identity, access, data protection, AI governance, monitoring, and lifecycle controls work together. Acumeet’s Security section explains these areas so your teams can assess the approach against their internal policies and risk requirements.',
      ],
      visual: { tint: 'pink', pattern: { type: 'rings', size: 'panel' }, content: access(members, { width: 380 }) },
    }),

    /** Tabs explorer (48:325239) + "Explorer · Explore security domains" (48:326260) — 6 tabs, each a link. */
    {
      ...explorer({ title: 'Explore security', accent: 'domains', titleSize: 'section' }, [
        [
          'Zero Trust Architecture',
          'Review the principles used to evaluate access, trust boundaries, and verification throughout the environment.',
          access(members, { width: 380 }),
        ],
        [
          'Identity & Access',
          'Explore role-based access control, single sign-on, multi-factor authentication, provisioning, identity-provider integration, and conditional access considerations.',
          access(members, { width: 380 }),
        ],
        [
          'Data Security',
          'Review encryption, customer key and storage options, and data residency requirements.',
          keys(['Configure', 'Configure']),
        ],
        [
          'AI Security',
          'Understand the approach to redaction, sensitive information, pre-storage processing, and AI governance.',
          redaction(
            3,
            ['Send the contract to', '[EMAIL_ADDRESS]', 'and copy', '[PERSON_NAME]', 'on account', '[ACCOUNT_NUMBER]'],
            [
              ['Email address', '100%'],
              ['Account number', '93%'],
            ],
          ),
        ],
        [
          'Audit & Monitoring',
          'Review auditability, SIEM integration, security monitoring, and alerting.',
          audit(
            [
              ['10:08', 'Approved redactions', 'Faith Oluwale'],
              ['09:49', 'Exported summary', 'George Nwokoro'],
              ['09:40', 'Updated retention policy', 'Admin'],
              ['09:24', 'Viewed transcript', 'Ruth Godwin'],
            ],
            { width: 480 },
          ),
        ],
        [
          'Data Lifecycle',
          'Understand how retention, archiving, secure deletion, and lifecycle policies should be defined.',
          retention(
            [
              ['Recordings', '180 days'],
              ['Transcripts', '2 years'],
              ['Summaries', '5 years'],
              ['Audit logs', '7 years'],
            ],
            { status: 'All meetings', width: 350 },
          ),
        ],
      ]),
    },

    /** Split (48:325243) — blue dots, visual right. */
    split({
      title: 'Security evidence and assurance',
      body: [
        'Enterprise teams often need more than a product description. Where available and approved for disclosure, Acumeet can provide relevant security documentation and explain the scope of its controls, certifications, and compliance posture through the appropriate review process.',
        'SECURITY REVIEW Need to assess Acumeet for your organisation? Contact the team to discuss your requirements and request the approved evidence available for your evaluation.',
      ],
      visual: {
        tint: 'blue',
        pattern: { type: 'dots', size: 'explorer' },
        content: audit(
          [
            ['10:46', 'Updated retention policy', 'Admin'],
            ['10:26', 'Viewed transcript', 'Ruth Godwin'],
            ['10:16', 'Shared meeting record', 'Warith Abraham'],
            ['09:59', 'Changed role to Admin', 'Admin'],
          ],
          { width: 360 },
        ),
      },
    }),

    /** Directory · SECURITY (48:325277). */
    {
      type: 'directory',
      eyebrow: 'Security',
      title: 'Explore security',
      items: SECURITY_KEYS.map((k) => ({ title: SECURITY[k].title, description: SECURITY[k].tagline, to: SECURITY[k].to })),
    },
  ],

  /** FAQ (48:325288). */
  faq: faq([
    ['Which security certifications does Acumeet hold?', 'Acumeet’s approved materials identify SOC 2 and ISO 27001 certification.'],
    [
      'Does Acumeet support GDPR, NDPR, and HIPAA requirements?',
      'Acumeet’s current messaging identifies GDPR, NDPR, and HIPAA compliance. Compliance depends on the applicable scope, use case, configuration, contracts, and responsibilities. Review the approved Compliance page and supporting evidence.',
    ],
    [
      'Can we review Acumeet’s technical controls?',
      'Contact Acumeet to request the security evidence and technical details that are approved and available for customer review.',
    ],
    [
      'Does Acumeet use customer-controlled keys or storage?',
      'BYOK and BYOS are included in the security sitemap. Confirm current availability, supported configurations, and technical scope with Acumeet before relying on either capability.',
    ],
    [
      'How is meeting data retained and deleted?',
      'Retention and deletion behaviour should be confirmed for the relevant data types, configuration, and contractual terms. The Data Lifecycle pages explain the questions to review.',
    ],
  ]),

  cta: secCta('Security and governance for meeting intelligence.'),
};
