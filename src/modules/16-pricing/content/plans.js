import { ROUTES } from '@/constants/routes';

/**
 * Plans (Figma 16.01 "01 · Hero and plans" 49:173603 and 16.03 "Comparison table" 49:173926).
 * `yearly` is the per-seat monthly price billed yearly, as shown in Figma.
 * TODO(pricing): `monthly` prices aren't in Figma. These are placeholders until billing confirms them.
 */
export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    yearly: '$0',
    monthly: '$0',
    unit: 'free forever',
    audience: 'For trying Acumeet on your own meetings.',
    cta: { label: 'Try free', to: ROUTES.getStarted },
    ai: ['Essential AI', 'Transcription, summaries and search'],
    includes: 'Free includes:',
    features: [
      'AI transcription',
      'AI summaries (limited)',
      'Basic speaker identification',
      'Smart search',
      'Zoom, Google Meet and Microsoft Teams',
      'Mobile app and personal meeting library',
    ],
  },
  {
    id: 'individual',
    name: 'Individual',
    yearly: '$7.99',
    monthly: '$9.99',
    unit: 'seat / month',
    audience: 'For professionals, consultants and freelancers.',
    cta: { label: 'Get started', to: ROUTES.getStarted },
    ai: ['More AI capacity', 'Redaction AI included'],
    includes: 'Includes Free, plus:',
    features: [
      'More AI meeting capacity',
      'Improved speaker identification',
      'Redaction AI',
      'Audio and video upload',
      'TXT, PDF and DOCX export',
      'Email support',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    yearly: '$14.99',
    monthly: '$18.99',
    unit: 'seat / month',
    audience: 'For small and growing teams.',
    cta: { label: 'Get started', to: ROUTES.getStarted },
    ai: ['Team AI', 'Shared meeting library'],
    includes: 'Includes Individual, plus:',
    features: [
      'Shared workspace, meeting library and templates',
      'Action tracking and task assignment',
      'Team collaboration and seat management',
      'Priority support',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    yearly: '$24.99',
    monthly: '$30.99',
    unit: 'seat / month',
    audience: 'For larger organisations.',
    cta: { label: 'Choose business', to: ROUTES.getStarted },
    featured: true,
    ai: ['Governed AI', 'Access and audit controls'],
    includes: 'Includes Team, plus:',
    features: [
      'Role-based access control',
      'Audit logs',
      'DLP integration',
      'Customer reporting',
      'SSO option',
      'Advanced administration',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    yearly: 'Custom',
    monthly: 'Custom',
    unit: 'pricing',
    audience: 'For advanced security, compliance and deployment needs.',
    cta: { label: 'Contact sales', to: ROUTES.contactSales },
    ai: ['Enterprise AI', 'Deployment and data control'],
    includes: 'Includes Business, plus:',
    features: [
      'Private and self-hosted deployment',
      'Granular role-based access',
      'Advanced audit and security logs',
      'Custom data retention',
      'Advanced compliance controls',
      'Unlimited storage',
      'Dedicated Customer Success Manager',
      'Custom SLA',
    ],
  },
];

/* Comparison cells: Y = included, N = not included, a string = a level ("Limited", "Basic"…). */
const Y = true;
const N = false;
const ALL = [Y, Y, Y, Y, Y];
const PAID = [N, Y, Y, Y, Y];
const TEAM = [N, N, Y, Y, Y];
const BIZ = [N, N, N, Y, Y];
const ENT = [N, N, N, N, Y];

/** 16.03 table groups: [group, [[feature, [free, individual, team, business, enterprise]], …]]. */
export const COMPARISON = [
  [
    'Core AI and transcription',
    [
      ['AI transcription', ALL],
      ['AI summaries', ['Limited', Y, Y, Y, Y]],
      ['Speaker identification', ['Basic', 'Improved', 'Improved', 'Improved', 'Improved']],
      ['Smart search', ALL],
      ['Redaction AI', PAID],
      ['Audio and video upload', PAID],
      ['TXT, PDF and DOCX export', PAID],
      ['Mobile app and personal meeting library', ALL],
    ],
  ],
  [
    'Workspace and collaboration',
    [
      ['Shared workspace, meeting library and templates', TEAM],
      ['Action tracking and task assignment', TEAM],
      ['Team collaboration and seat management', TEAM],
    ],
  ],
  ['Integrations', [['Zoom, Google Meet and Microsoft Teams', ALL]]],
  [
    'Security, compliance and administration',
    [
      ['Role-based access control', BIZ],
      ['Audit logs', BIZ],
      ['DLP integration', BIZ],
      ['Customer reporting', BIZ],
      ['Single sign-on (SSO)', [N, N, N, 'Optional', Y]],
      ['Granular role-based access', ENT],
      ['Advanced audit and security logs', ENT],
      ['Custom data retention', ENT],
      ['Advanced compliance controls', ENT],
    ],
  ],
  [
    'Deployment and support',
    [
      ['Email support', PAID],
      ['Priority support', TEAM],
      ['Private and self-hosted deployment', ENT],
      ['Unlimited storage', ENT],
      ['Dedicated Customer Success Manager', ENT],
      ['Custom SLA', ENT],
    ],
  ],
];
