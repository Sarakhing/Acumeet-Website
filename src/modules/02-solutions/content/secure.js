import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import WorkspaceAccessCard from '../components/visuals/WorkspaceAccessCard';
import AuditLogCard from '../components/visuals/AuditLogCard';
import KeysStorageCard from '../components/visuals/KeysStorageCard';
import RolePermissionsWindow from '../components/visuals/RolePermissionsWindow';
import EncryptionWindow from '../components/visuals/EncryptionWindow';
import AuditTimelineWindow from '../components/visuals/AuditTimelineWindow';
import keyMagenta from '@/assets/images/solutions/ic-key-magenta-18.svg';
import keyPurple from '@/assets/images/solutions/ic-key-purple-18.svg';
import keyPurple26 from '@/assets/images/solutions/ic-key-purple-26.svg';
import usersThree from '@/assets/images/solutions/ic-users-three.svg';
import stack from '@/assets/images/solutions/ic-stack.svg';
import eyeSlash from '@/assets/images/solutions/ic-eye-slash.svg';
import globe from '@/assets/images/solutions/ic-globe-18.svg';
import databaseBlue from '@/assets/images/solutions/ic-database-blue-18.svg';
import lockKey from '@/assets/images/solutions/ic-lock-key-26.svg';
import arrowsClockwise from '@/assets/images/solutions/ic-arrows-clockwise-26.svg';
import { relatedSolutions, solutionBreadcrumb } from './solutions';

/** 03.04 · Secure (Figma 46:17316). */
export const secure = {
  breadcrumb: solutionBreadcrumb('Secure'),

  hero: {
    variant: 'rings',
    eyebrow: 'Solutions · Secure',
    title: 'Security should never be an afterthought.',
    lead: 'Protect every meeting with a security-first approach to identity, access, encryption, and accountability. Acumeet is built for organisations that need to manage sensitive conversations with greater control and confidence.',
    primary: { label: 'Book a security demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore the Trust Center', to: ROUTES.trustCenter },
  },

  /** "✓ Hero carousel · 03.04 · Secure" (46:21414) — 3 slides. */
  carousel: [
    {
      label: 'Access',
      content: h(WorkspaceAccessCard, {
        width: 560,
        members: [
          { name: 'Ruth Godwin', role: 'Admin' },
          { name: 'Warith Abraham', role: 'Member' },
          { name: 'Faith Oluwale', role: 'Member' },
          { name: 'George Nwokoro', role: 'Viewer' },
        ],
      }),
    },
    {
      label: 'Audit log',
      content: h(AuditLogCard, {
        width: 560,
        events: [
          { time: '09:31', action: 'Signed in via SSO', actor: 'Ruth Godwin' },
          { time: '09:16', action: 'Applied legal hold', actor: 'Admin' },
          { time: '08:54', action: 'Edited action item', actor: 'George Nwokoro' },
          { time: '08:42', action: 'Approved redactions', actor: 'Faith Oluwale' },
        ],
      }),
    },
    { label: 'Keys', content: h(KeysStorageCard, { width: 560, actions: ['Configure', 'Configure'] }) },
  ],

  statement: {
    tone: 'light',
    title: 'Enterprise security, built around the way your organisation works',
    paragraphs: [
      'Business meetings contain more than conversations. They contain financial information, strategic decisions, customer data, employee discussions, confidential plans, and commercially sensitive information.',
      'Your organisation needs confidence in who can access that information, how it is protected, and whether access and administrative activity can be traced. Acumeet’s security approach brings together identity management, access controls, encryption, and auditability to support more secure enterprise meeting intelligence.',
    ],
  },

  editorial: {
    title: 'Trust must be verified, not assumed.',
    paragraphs: [
      'A secure environment requires more than a login screen. Access to sensitive business information should be governed by identity, permissions, and the controls applied to each user and resource.',
      'A Zero Trust approach centres security around verification and least-privilege access, rather than assuming that a user or device is trustworthy simply because it is inside a network.',
      'Make access decisions based on verified identity and permissions.',
      'Limit access to the information and functions a user is authorised to use.',
      'Apply security controls consistently across the environment.',
    ],
  },

  rbac: {
    size: 'feature',
    reverse: true,
    title: 'The right access for the right role. Nothing more than necessary.',
    body: [
      'Not everyone in an organisation should have the same level of access to meeting intelligence, administrative settings, or sensitive information. RBAC assigns permissions according to defined roles, helping organisations establish clear boundaries between users and administrative responsibilities.',
    ],
    bullets: [
      { lead: 'Access by role:', text: "align permissions with a user's responsibilities." },
      { lead: 'Administrative separation:', text: 'distinguish administrative capabilities from standard user access.' },
      { lead: 'Controlled information access:', text: 'help ensure users access only the resources their permissions allow.' },
      { lead: 'Clearer governance:', text: 'establish a structured approach to managing access across teams.' },
    ],
    footnote: ['The goal is simple: make access intentional, manageable, and aligned with organisational responsibilities.'],
    visual: {
      tint: 'pink',
      pattern: { type: 'rings', size: 'panel' },
      content: h(RolePermissionsWindow, {
        rows: [
          { icon: keyMagenta, tone: 'magenta', title: 'Administrative settings', subtitle: 'Administrators only', on: true },
          { icon: usersThree, tone: 'blue', title: 'User management', subtitle: 'Administrators only', on: true },
          { icon: stack, tone: 'purple', title: 'Meeting intelligence', subtitle: 'By role and permissions', on: true },
          { icon: eyeSlash, tone: 'green', title: 'Sensitive information', subtitle: 'Restricted by default', on: false },
        ],
      }),
    },
  },

  identity: {
    title: 'Identity management that fits your IT environment',
    tiles: [
      {
        title: 'Single Sign-On (SSO)',
        body: 'One identity. A more consistent way to access Acumeet. SSO can allow users to access Acumeet through an organisation’s supported identity provider, reducing the need to manage separate credentials, and can help IT teams centralise authentication and align access with established identity policies.',
        icon: keyPurple26,
        iconTone: 'purple',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'bento' },
        pills: ['Streamlined sign-in', 'Centralised identity', 'Policy alignment', 'Less complexity'],
        miniHeight: 182,
      },
      {
        title: 'Multi-Factor Authentication (MFA)',
        body: 'A password alone may not be enough. Passwords can be compromised, reused, or exposed. MFA adds another verification step to help reduce the risk of unauthorised account access. For organisations handling confidential meetings, stronger authentication is an important layer in a broader security strategy.',
        icon: lockKey,
        iconTone: 'magenta',
        tint: 'peach',
        pattern: 'tiled-dots',
        pills: ['Second verification step', 'Stronger authentication'],
        miniHeight: 150,
      },
      {
        title: 'SCIM provisioning',
        body: 'Access should change when your workforce changes. SCIM supports automated user provisioning and deprovisioning between compatible identity systems and applications, making user access management more scalable as an organisation grows.',
        icon: arrowsClockwise,
        iconTone: 'green',
        tint: 'mint',
        pattern: { type: 'hairlines', size: 'bento' },
        pills: ['Automated provisioning', 'Synced identity changes', 'Less manual admin'],
        note: 'Consistent onboarding and offboarding',
        miniHeight: 223,
      },
    ],
  },

  encryption: {
    size: 'feature',
    title: 'Your meeting data deserves protection at every stage.',
    body: [
      'Meeting intelligence can contain highly sensitive information. Encryption is a fundamental safeguard for reducing the risk of unauthorised disclosure when data is stored or transmitted.',
    ],
    bulletStyle: 'check',
    bullets: [
      { lead: 'Encryption in Transit:', text: 'protect data as it moves between supported systems and services using secure transport protocols.' },
      { lead: 'Encryption at Rest:', text: 'protect stored data against unauthorised access to the underlying storage environment.' },
      {
        lead: 'Enterprise Key Management:',
        text: 'for organisations with additional requirements, customer-managed storage and encryption-key options can support greater control over data infrastructure and cryptographic keys.',
      },
    ],
    footnote: ['Encryption is one layer of security, not a substitute for strong authentication, access controls, and sound operational practices.'],
    visual: {
      tint: 'lilac',
      pattern: { type: 'rings', size: 'panel' },
      content: h(EncryptionWindow, {
        rows: [
          { icon: globe, tone: 'magenta', title: 'In transit', subtitle: 'Secure transport protocols', state: 'On', highlight: true },
          { icon: databaseBlue, tone: 'blue', title: 'At rest', subtitle: 'Stored data protected', state: 'On' },
          { icon: keyPurple, tone: 'purple', title: 'Enterprise key management', subtitle: 'Customer-managed storage and keys', state: 'Option' },
        ],
      }),
    },
  },

  audit: {
    size: 'feature',
    reverse: true,
    eyebrow: 'Audit logs',
    title: 'Security is not only about preventing incidents. It is also about understanding what happened.',
    body: [
      'Organisations need visibility into relevant activity across their systems. Audit logs help create a record of events that can support security investigations, operational oversight, and compliance processes.',
      'Where supported, Acumeet audit logging should help authorised teams investigate relevant activity, establish timelines, and support internal reviews.',
    ],
    bulletStyle: 'check',
    bullets: [
      { text: 'Investigate suspicious or unexpected activity.' },
      { text: 'Review relevant administrative actions.' },
      { text: 'Support internal security assessments.' },
      { text: 'Maintain evidence for governance and operational reviews.' },
    ],
    visual: {
      tint: 'mint',
      pattern: { type: 'rings', size: 'panel' },
      content: h(AuditTimelineWindow, {
        events: [
          { meta: '08:47 · User', title: 'Signed in with SSO and MFA', tag: 'Sign-in', tagTone: 'blue' },
          { meta: '09:02 · Identity provider', title: 'New user provisioned via SCIM', tag: 'Provisioning', tagTone: 'mint' },
          { meta: '09:14 · Administrator', title: 'Role permissions updated', tag: 'Admin action', tagTone: 'magenta' },
        ],
      }),
    },
  },

  siem: {
    eyebrow: 'SIEM integration',
    title: 'Your meeting intelligence platform should fit into your security ecosystem.',
    lead: 'Security teams often use Security Information and Event Management (SIEM) platforms to collect and analyse events from multiple systems, identify suspicious patterns, and support incident response. Integrating relevant Acumeet security events with an organisation’s SIEM could help security teams incorporate meeting-platform activity into their existing monitoring and investigation workflows.',
    steps: [
      { title: 'Collect and analyse', body: 'Events from multiple systems, including relevant meeting-platform activity.' },
      { title: 'Identify patterns', body: 'Spot suspicious activity across your environment.' },
      { title: 'Support response', body: 'Feed existing monitoring and investigation workflows.' },
    ],
    footnote: 'The intended value is a more connected security operation, not another isolated source of information.',
  },

  industries: {
    title: 'Security that supports enterprise',
    accent: 'requirements',
    cards: [
      {
        title: 'Financial services and insurance',
        body: 'Help protect sensitive business discussions, customer-related information, and commercially confidential decisions.',
        tint: 'lilac',
        pattern: { type: 'rings', size: 'card' },
        to: ROUTES.industries,
      },
      {
        title: 'Energy and Telecommunications',
        body: 'Support structured access and governance for complex organisations with sensitive operational and strategic discussions.',
        tint: 'pink',
        pattern: { type: 'dots', size: 'card' },
        to: ROUTES.industries,
      },
      {
        title: 'Legal, compliance and executive teams',
        body: 'Apply security-conscious practices to conversations involving confidential matters, internal decisions, and business strategy.',
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'card' },
        to: ROUTES.industries,
      },
    ],
  },

  faq: [
    {
      q: 'What security controls should an enterprise meeting intelligence platform provide?',
      a: 'Enterprises commonly assess identity and access management, authentication, encryption, audit logging, data handling, and compatibility with their security operations.',
    },
    {
      q: 'What is the difference between RBAC and SSO?',
      a: 'SSO concerns how users authenticate. RBAC concerns what authenticated users are authorised to access and do.',
    },
    {
      q: 'How does MFA improve security?',
      a: 'MFA adds an additional identity-verification step beyond a password, helping reduce the risk of unauthorised access from compromised credentials.',
    },
    {
      q: 'What is SCIM used for?',
      a: 'SCIM can automate user provisioning and deprovisioning between compatible identity systems, helping organisations manage account changes more consistently.',
    },
    {
      q: 'Why are audit logs important?',
      a: 'Audit logs provide records of relevant activity that can help authorised teams investigate incidents, review administrative actions, and support governance.',
    },
    {
      q: 'Can Acumeet integrate with our SIEM?',
      a: 'SIEM integration depends on the supported event sources, connectors, and integration capabilities available. Enterprise teams should confirm compatibility with their existing security platform.',
    },
  ],

  related: relatedSolutions('protect', 'control', 'govern', 'emi'),

  cta: {
    title: 'Make security part of every meeting.',
    lead: 'Give your organisation a clearer path to secure, controlled, and accountable meeting intelligence. Explore Acumeet with your IT and security requirements in mind.',
    primary: { label: 'Book a security demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact our team', to: ROUTES.contactSales },
  },
};
