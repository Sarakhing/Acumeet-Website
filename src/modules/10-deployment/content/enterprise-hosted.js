import { access, decisions, keys, redaction } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { keySummary, members, tasks } from './shared';
import { chapters, CONTACT, depBreadcrumb, depCta, exploreDeployment, faq } from './deployment';

/** 10.03 · Enterprise Hosted (Figma 48:393631). */
export default {
  breadcrumb: depBreadcrumb('Enterprise Hosted'),

  /** 01 · Hero (771): keys & storage in the window, decisions overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Enterprise Hosted',
    title: 'A deployment discussion shaped around',
    accent: 'enterprise requirements.',
    lead: 'Plan Acumeet around your organisation’s operational realities: identity, access, integrations, governance, scale, support, and the policies that shape how meeting-derived information is handled.',
    primary: CONTACT('Plan an enterprise deployment'),
    secondary: CONTACT('Speak with Acumeet'),
    window: keys(['Connected', 'Configure'], { width: 500 }),
    overlay: decisions(
      'May 30',
      ['Use customer-managed keys from day one', 'Run failover tests quarterly'],
      'Cutover clashes with month-end',
      ['Pilot', 'Azure tenant', 'Storage', 'Keys'],
      360,
      { shadow: 'float' },
    ),
    overlayY: 436,
    height: 771,
  }),

  sections: [
    /** Chapters + "Chapters · Designed around enterprise readiness" (48:352747). */
    chapters([
      [
        'Designed around enterprise readiness',
        'Designed around enterprise readiness',
        'Enterprise deployment planning brings technical and business stakeholders together to clarify architecture, administrator responsibilities, security requirements, user groups, and rollout expectations.',
        access(members, { width: 380 }),
      ],
      [
        'Connect deployment to governance',
        'Connect deployment to governance',
        'Meeting intelligence may contain sensitive business discussions. Establish how access is assigned, how administrators manage users, which integrations are permitted, and how information is handled under your organisation’s policies.',
        redaction(
          4,
          [
            'Send the contract to',
            '[EMAIL_ADDRESS]',
            'and copy',
            '[PERSON_NAME]',
            'on account',
            '[ACCOUNT_NUMBER]',
          ],
          [
            ['Email address', '100%'],
            ['Account number', '94%'],
          ],
        ),
      ],
      [
        'Define the operating model',
        'Define the operating model',
        'Document who owns configuration, approvals, incident escalation, user support, change management, and ongoing reviews. Confirm the applicable service commitments before production rollout.',
        tasks(
          5,
          [
            ['cutover', 'This week'],
            ['failover', 'Jun 9'],
            ['region', 'Today'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Key value points',
        'Key value points',
        {
          checks: [
            'Bring IT, Security, Compliance, and business owners into the same planning process.',
            'Map identity and integration requirements before rollout.',
            'Agree the operating model and acceptance criteria up front.',
          ],
        },
        keySummary('Deployment Planning', [63, 64, 54], ['cutover', 'tenant'], 440),
      ],
    ]),
  ],

  /** FAQ (48:393718). */
  faq: faq([
    [
      'What is included in Enterprise Hosted?',
      'The exact configuration and service scope depend on the agreed arrangement. Acumeet should confirm availability, support, responsibilities, and contractual terms.',
    ],
    [
      'Can we use our identity provider?',
      'Identity integrations should be assessed against your requirements. Confirm the supported providers and configuration options with Acumeet.',
    ],
    [
      'Can the deployment be tailored to our policies?',
      'Requirements can be assessed during discovery. Any customisation, limitations, and commitments should be documented before implementation.',
    ],
  ]),

  related: exploreDeployment(['overview', 'cloudHosted']),
  cta: depCta('A deployment discussion shaped around enterprise requirements.'),
};
