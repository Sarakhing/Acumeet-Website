import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import RedactionReview from '@/components/visuals/RedactionReview';
import WorkspaceAccessCard from '../components/visuals/WorkspaceAccessCard';
import RetentionPolicyCard from '../components/visuals/RetentionPolicyCard';
import AuditLogCard from '../components/visuals/AuditLogCard';
import KeysStorageCard from '../components/visuals/KeysStorageCard';
import ProtectHeroVisual from '../components/visuals/ProtectHeroVisual';
import { relatedSolutions, solutionBreadcrumb } from './solutions';

/** 03.02 · Protect (Figma 46:14208). */
export const protect = {
  breadcrumb: solutionBreadcrumb('Protect'),

  hero: {
    variant: 'wash',
    eyebrow: 'Solutions · Protect',
    title: 'Protect sensitive information in',
    accent: 'every meeting.',
    lead: 'Acumeet helps enterprises protect sensitive meeting information by turning business conversations into structured, searchable intelligence while supporting responsible handling of confidential data. Give your teams the information they need while keeping privacy and data protection in focus.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore Acumeet security', to: ROUTES.security },
    visual: h(ProtectHeroVisual),
    visualWidth: 665,
  },

  statement: {
    tone: 'dark',
    title: 'Important conversations contain sensitive information.',
    paragraphs: [
      'Enterprise meetings often involve financial discussions, employee information, customer details, commercial decisions and confidential business plans. When meeting information is recorded, transcribed and shared, organisations need to consider how that information is accessed, stored and used.',
      'Without appropriate safeguards, sensitive meeting content can create unnecessary exposure and make it harder for organisations to manage information responsibly.',
      'Acumeet is designed to help organisations bring meeting intelligence into their workflows with security and data protection in mind.',
    ],
  },

  explorer: {
    title: 'How Acumeet helps protect',
    accent: 'meeting information',
    items: [
      {
        title: 'Protect sensitive information',
        body: 'Use AI-powered redaction capabilities to help identify and remove sensitive information from meeting content where supported by your configured workflow. This can help reduce unnecessary exposure of personal, financial and confidential data.',
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(RedactionReview, {
          count: 5,
          width: 480,
          sentence: ['Send the contract to', { token: '[EMAIL_ADDRESS]' }, 'and copy', { token: '[PERSON_NAME]' }, 'on account', { token: '[ACCOUNT_NUMBER]' }],
          rows: [
            { label: 'Email address', match: '100%' },
            { label: 'Account number', match: '91%' },
          ],
        }),
      },
      {
        title: 'Support responsible access to meeting knowledge',
        body: 'Meeting summaries, decisions, transcripts and action items can become valuable business records. Appropriate access controls help ensure that meeting information is made available according to organisational permissions.',
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(WorkspaceAccessCard, {
          members: [
            { name: 'Faith Oluwale', role: 'Owner' },
            { name: 'George Nwokoro', role: 'Admin' },
            { name: 'Ruth Godwin', role: 'Member' },
            { name: 'Warith Abraham', role: 'Viewer' },
          ],
        }),
      },
      {
        title: 'Keep data handling aligned with enterprise needs',
        body: "Organisations have different requirements for how business information is stored and managed. Acumeet's enterprise capabilities, including BYOS and BYOK where configured and supported, are relevant to organisations evaluating greater control over storage and encryption keys.",
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(RetentionPolicyCard, {
          rules: [
            { label: 'Recordings', keep: '90 days' },
            { label: 'Transcripts', keep: '1 year' },
            { label: 'Summaries', keep: '3 years' },
            { label: 'Audit logs', keep: '7 years' },
          ],
        }),
      },
      {
        title: 'Make data protection part of meeting intelligence',
        body: 'Bring privacy considerations into the process of capturing, processing and using meeting information, rather than treating protection as an afterthought.',
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(AuditLogCard, {
          events: [
            { time: '09:11', action: 'Approved redactions', actor: 'Faith Oluwale' },
            { time: '09:02', action: 'Exported summary', actor: 'George Nwokoro' },
            { time: '08:46', action: 'Updated retention policy', actor: 'Admin' },
            { time: '08:40', action: 'Viewed transcript', actor: 'Ruth Godwin' },
          ],
        }),
      },
    ],
  },

  audiences: {
    title: 'Designed for sensitive business',
    accent: 'conversations',
    items: [
      { body: "Acumeet's Protect solution is relevant to teams that regularly handle confidential information, including:" },
      { title: 'Financial services', body: 'discussions involving financial performance, risk and commercial decisions.' },
      { title: 'Human resources', body: 'conversations involving employee information and internal matters.' },
      { title: 'Legal and compliance', body: 'discussions that may contain confidential or regulated information.' },
      { title: 'Oil and gas', body: 'operational reviews, project updates and commercially sensitive decisions.' },
      { title: 'Executive leadership', body: 'strategic planning, business performance and high-level decisions.' },
    ],
  },

  split: {
    title: 'Protect the value created in meetings',
    body: [
      'Security is not just about protecting a recording. It also matters when meeting information becomes summaries, action items, searchable records and organisational knowledge.',
      'Acumeet helps organisations turn conversations into useful business information.',
    ],
    cta: { label: 'See how Acumeet works', to: ROUTES.products },
    visual: { tint: 'lilac', pattern: { type: 'rings', size: 'panel' }, content: h(KeysStorageCard, { actions: ['Manage', 'Connected'] }) },
  },

  faq: [
    {
      q: 'What is secure AI meeting software?',
      a: 'Secure AI meeting software helps organisations capture and process meeting information while considering data protection, access permissions and the handling of sensitive content.',
    },
    {
      q: 'How does Acumeet help protect sensitive meeting data?',
      a: "Acumeet's relevant capabilities include AI redaction and enterprise data-control options. The exact protection available depends on the features deployed and the organisation's configuration.",
    },
    {
      q: 'Does Acumeet guarantee regulatory compliance?',
      a: "No software platform should be presented as guaranteeing compliance on its own. Compliance depends on the platform's actual controls, how it is configured and how the organisation uses it within its policies and applicable legal requirements.",
    },
    {
      q: "How can enterprises learn more about Acumeet's security controls?",
      a: "Organisations can explore Acumeet's Security page or book a demo to discuss their security, governance and data-protection requirements.",
    },
  ],

  related: relatedSolutions('control', 'secure', 'govern', 'emi'),

  cta: {
    title: 'Protect sensitive information in every meeting.',
    lead: null,
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: null,
  },
};
