import { ROUTES } from '@/constants/routes';
import { access, actions, audit, keys } from '@/components/visuals/mocks';
import { members, supplierAtlas } from './shared';
import { windowHero } from '@/components/blocks/heroPresets';
import {
  BOOK_DEMO,
  cards,
  docs,
  explorer,
  faq,
  REQUEST,
  split,
  statement,
  TRUST,
  TRUST_KEYS,
} from './trust-center';

/** 07.01 · Trust Center Overview (Figma 48:336988). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Trust Center overview' }],

  /** 01 · Hero (664 tall): audit log in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Trust Center',
    title: 'Trust Center: security, privacy and compliance',
    accent: 'for meeting data',
    lead: 'See how Acumeet controls access, protects data and supports your security review.',
    primary: REQUEST('Request trust documentation'),
    secondary: BOOK_DEMO,
    window: audit(
      [
        ['10:53', 'Updated retention policy', 'Admin'],
        ['10:40', 'Viewed transcript', 'Ruth Godwin'],
        ['10:20', 'Shared meeting record', 'Warith Abraham'],
        ['10:10', 'Changed role to Admin', 'Admin'],
      ],
      { width: 500 },
    ),
    overlay: actions(
      3,
      [
        ['Review privileged role assignments', 'Fri'],
        ['Confirm MFA enforcement for admins', 'Jun 20'],
        ['Share the penetration test summary', 'Today'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 311,
    height: 664,
  }),

  sections: [
    /** Index · Control comes first (48:337077). Figma doesn't assign principles to filters; grouped by theme here. */
    {
      type: 'principles',
      title: 'Control comes',
      accent: 'first',
      filters: ['Access', 'Data', 'Oversight'],
      items: [
        {
          title: 'Invited meetings only',
          body: 'Acumeet joins only the meetings it is invited to.',
          group: 'Access',
        },
        {
          title: 'Least privilege',
          body: 'We request only the permissions the service needs.',
          group: 'Access',
        },
        {
          title: 'Your data, your ownership',
          body: 'Your organisation owns its meeting data.',
          group: 'Data',
        },
        {
          title: 'Revocable access',
          body: 'Administrators can control and revoke access.',
          group: 'Access',
        },
        {
          title: 'Tenant isolation',
          body: 'Meeting data is logically separated by organisation.',
          group: 'Data',
        },
        {
          title: 'Audit logs',
          body: 'Administrative and access activity is logged for review.',
          group: 'Oversight',
        },
      ],
    },

    /** Tabs explorer + "Explorer · Security built into the product" (48:338861). */
    explorer(
      {
        title: 'Security built into the',
        accent: 'product',
        lead: 'Identity controls, encryption and monitoring protect meeting data from capture to deletion.',
      },
      [
        [
          'Identity and access',
          'SSO, role-based access and administrator consent control who can see meeting intelligence.',
          access(members, { width: 380 }),
        ],
        [
          'Encryption',
          'Meeting data is encrypted in transit and at rest.',
          keys(['Configure', 'Configure']),
        ],
        [
          'Monitoring',
          'Logged administrative actions give your team visibility into platform activity.',
          audit(
            [
              ['10:05', 'Exported summary', 'George Nwokoro'],
              ['09:46', 'Updated retention policy', 'Admin'],
              ['09:37', 'Viewed transcript', 'Ruth Godwin'],
              ['09:21', 'Shared meeting record', 'Warith Abraham'],
            ],
            { width: 360 },
          ),
        ],
      ],
    ),

    /** Benefits (48:337174). */
    cards(
      {
        title: 'Access limited to what the meeting needs',
        lead: 'What Acumeet can access, and what it does not.',
        titleSize: 44,
      },
      [
        [
          'Access only what the meeting needs',
          'Customer meeting data is not used for advertising or profiling.',
        ],
        [
          'What Acumeet accesses',
          'Meetings it is invited to, their audio and transcripts, and meeting details such as title, duration and participants.',
        ],
        [
          'What Acumeet does not access',
          'Email inboxes, Teams chat messages, SharePoint or OneDrive files, or anything outside the meetings it is invited to.',
        ],
      ],
    ),

    /** Tabs explorer + "Explorer · AI with clear limits" (48:339094). */
    explorer({ title: 'AI with clear', accent: 'limits' }, [
      [
        'Inference only',
        'Your meeting data is not used to train public or shared AI models.',
        supplierAtlas,
      ],
      [
        'Restricted access',
        'Human access to AI processing environments is limited and logged.',
        access(members, { width: 380 }),
      ],
      [
        'Your approval',
        'Any future use of customer data for training would need your explicit approval.',
        audit(
          [
            ['11:07', 'Edited action item', 'George Nwokoro'],
            ['10:54', 'Approved redactions', 'Faith Oluwale'],
            ['10:34', 'Exported summary', 'George Nwokoro'],
            ['10:24', 'Updated retention policy', 'Admin'],
          ],
          { width: 360 },
        ),
      ],
    ]),

    /** Index · Control data from collection to deletion (48:337186). */
    {
      type: 'lifecycle',
      title: 'Control data from collection',
      accent: 'to deletion',
      lead: 'Each stage of the meeting data lifecycle, from collection to deletion.',
      steps: [
        { label: 'Collect', caption: 'Invitation received' },
        { label: 'Process' },
        { label: 'Store' },
        { label: 'Retain' },
        { label: 'Delete' },
        { label: 'End of contract' },
      ],
    },

    /** Statement (48:337223) — no overline here. */
    statement('Choose the level of control', 'you need', {
      eyebrow: null,
      paragraphs: [
        'Compare the Standard and Enterprise options, including where your data is stored.',
      ],
    }),

    /** Splits (48:337227 / 48:337276 / 48:337317). */
    split(
      'Standard',
      'A managed service designed for fast onboarding.',
      {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: access([
          ['Warith Abraham', 'Owner'],
          ['Faith Oluwale', 'Member'],
          ['George Nwokoro', 'Admin'],
          ['Ruth Godwin', 'Viewer'],
        ]),
      },
      true,
    ),
    split(
      'Enterprise',
      'Eligible plans add customer-managed encryption keys and customer-controlled storage.',
      {
        tint: 'blue',
        pattern: { type: 'dots', size: 'explorer' },
        content: keys(['Configure', 'Configure']),
      },
    ),
    split(
      'Data residency',
      'Store data in configured service regions where available.',
      {
        tint: 'lilac',
        pattern: { type: 'hairlines', size: 'explorer' },
        content: keys(['Connected', 'Configure']),
      },
      true,
    ),

    /** Checklist (48:337358) — providers. */
    docs(
      {
        title: 'Know who helps deliver',
        accent: 'the service',
        lead: 'Acumeet uses reviewed third-party providers for cloud hosting, AI processing and monitoring. Providers are assessed before use and their access is controlled.',
      },
      [
        ['Cloud hosting', '#7c4ddb', 'cloud'],
        ['AI processing', '#1e9e62', 'sparkle'],
        ['Monitoring', '#d97706', 'pulse'],
      ],
    ),

    /** Checklist (48:337386) — documents, 4 + 3. */
    docs(
      {
        title: 'Documents for security, legal and',
        accent: 'procurement teams',
        lead: 'Review our public policies or request documents for your due diligence.',
        cta: REQUEST('Request documentation'),
        rows: [4, 3],
      },
      [
        ['Terms of Service', '#1e9e62'],
        ['Privacy Policy', '#d97706'],
        ['Data Processing Agreement', '#0e9aa7'],
        ['Security architecture overview', '#c2185b'],
        ['Data deletion policy', '#2185f6'],
        ['Access control policy', '#7c4ddb', 'user-check'],
        ['Incident response policy', '#1e9e62'],
      ],
    ),

    /** Directory · TRUST CENTER (48:337445). */
    {
      type: 'directory',
      eyebrow: 'Trust Center',
      title: 'Explore the Trust Center',
      items: TRUST_KEYS.map((k) => ({
        title: TRUST[k].title,
        description: TRUST[k].tagline,
        to: TRUST[k].to,
      })),
    },
  ],

  faq: faq([
    [
      'Does Acumeet monitor meetings automatically?',
      'No. Acumeet joins meetings only when it is invited.',
    ],
    [
      'Does Acumeet access emails or chat messages?',
      'No. It works only with the meeting content it is invited to process.',
    ],
    ['Who owns the meeting data?', 'You do. The customer retains ownership of its meeting data.'],
    [
      'Is customer data used to train AI models?',
      'No. Customer meeting data is not used to train public or shared AI models. Any future training use would need your explicit approval.',
    ],
    [
      'Can administrators revoke access?',
      'Yes. Administrators can control and revoke permissions.',
    ],
    [
      'Can we control data residency?',
      'Enterprise options can support configured service regions and customer-controlled storage. We confirm available locations during solution design.',
    ],
    [
      'Do you support enterprise security reviews?',
      'Yes. We provide security, privacy and compliance documentation for due diligence and vendor review.',
    ],
    [
      'What happens when we end our contract?',
      'Customer data follows the agreed offboarding and secure deletion process for your deployment.',
    ],
  ]),

  /** CTA band — "Book a demo" leads here. */
  cta: {
    title: 'Meeting intelligence with enterprise control',
    lead: 'Keep access, storage, retention and governance in your hands.',
    primary: BOOK_DEMO,
    secondary: REQUEST('Request trust documentation'),
  },
};
