import { access, decisions, keys, retention } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { keySummary, members, POLICY_ROWS, rollout, tasks } from './shared';
import { CONTACT, DEPLOYMENT, DEPLOYMENT_KEYS, depCta, faq, options } from './deployment';

const heroActions = rollout(4, ['Fri', 'May 26', 'Today'], { width: 400, shadow: 'float' });

/* Explorer panels in Figma order: lilac dots, pink rings, blue hairlines, mint waveform, amber dots. */
const PANELS = [
  ['lilac', 'dots'],
  ['pink', 'rings'],
  ['blue', 'hairlines'],
  ['mint', 'waveform'],
  ['amber', 'dots'],
];

const APPROACHES = [
  [
    'Cloud Hosted',
    'Explore a hosted approach designed to help teams access Acumeet without managing the underlying application infrastructure themselves. Confirm the service configuration and availability with Acumeet.',
  ],
  [
    'Enterprise Hosted',
    'Discuss an enterprise-focused deployment assessment that considers your organisation’s scale, identity environment, integrations, governance, and support expectations.',
  ],
  [
    'Customer Azure Tenant',
    'Assess whether deploying or operating agreed components within your organisation’s Azure tenant is suitable for your architecture and control requirements.',
  ],
  [
    'BYOS Deployment',
    'Discuss Bring Your Own Storage (BYOS) requirements, including supported storage configuration, access permissions, key handling, and responsibility boundaries.',
  ],
  [
    'Private Deployment',
    'Explore whether a private deployment arrangement is available and appropriate for your organisation’s isolation, access, and operational requirements.',
  ],
];

const stepPanel = (tint) => ({ tint, pattern: { type: 'rings', size: 'stepper' } });

/** 10.01 · Deployment Overview (Figma 48:393391). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Deployment Overview' }],

  /** 01 · Hero (1011): keys & storage (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Deployment Overview',
    title: 'Meeting intelligence that fits',
    accent: 'your environment.',
    lead: 'Acumeet helps organisations turn meetings into searchable knowledge, clear decisions, and accountable actions. Explore deployment approaches with our team to determine the right fit for your organisation’s architecture, governance, storage, and operational requirements.',
    primary: CONTACT('Discuss your deployment'),
    secondary: CONTACT('Talk to an enterprise specialist'),
    height: 1011,
    copyHeight: 366,
    top: 508,
    gap: 46,
    items: [
      [230, 572, keys(['Connected', 'Configure'], { width: 400, shadow: 'float' }), 6],
      [
        807,
        572,
        decisions(
          'Jun 6',
          ['Go live after the pilot group', 'Deploy in the customer Azure tenant'],
          'Cutover clashes with month-end',
          ['Storage', 'Keys', 'Failover', 'Cutover'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 508, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** Tabs explorer + "Explorer · Choose a deployment approach" (48:351784). */
    {
      type: 'explorer',
      title: 'Choose a deployment',
      accent: 'approach',
      lead: 'Different organisations have different requirements for infrastructure, control, storage, and implementation. Acumeet’s deployment discussions help your team evaluate the available approach against your technical environment and governance needs.',
      items: APPROACHES.map(([title, body], i) => ({
        title,
        body,
        tint: PANELS[i][0],
        pattern: { type: PANELS[i][1], size: 'explorer' },
        visual: options(i),
      })),
    },

    /** Split · Deployment is more than infrastructure (48:393509). */
    {
      type: 'split',
      size: 'standard',
      reverse: true,
      title: 'Deployment is more than infrastructure',
      body: [
        'A successful rollout also depends on identity and access, data handling, integrations, administrator responsibilities, user enablement, and operational readiness. Acumeet works with stakeholders to define the requirements and agree the next steps before implementation.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: access(members, { width: 380 }),
      },
    },

    /** Stepper + "Stepper · How to get started" (48:352124): sentence labels, no body. */
    {
      type: 'stepper',
      title: 'How to get',
      accent: 'started',
      accentBreak: false,
      tone: 'white',
      steps: [
        {
          label:
            'Share your environment: outline your cloud platform, identity setup, storage preferences, and relevant policies.',
          ...stepPanel('blue'),
          visual: keys(['Configure', 'Configure']),
        },
        {
          label:
            'Define the requirements: identify data residency, security, availability, recovery, and integration needs.',
          ...stepPanel('mint'),
          visual: retention(POLICY_ROWS, { status: 'All meetings', width: 350 }),
        },
        {
          label:
            'Review the fit: work with Acumeet to confirm which deployment options are supported for your use case.',
          ...stepPanel('amber'),
          visual: keySummary('Deployment Planning', [66, 76, 30], ['cutover', 'tenant'], 440),
        },
        {
          label:
            'Plan implementation: agree responsibilities, configuration, testing, rollout, and acceptance criteria.',
          ...stepPanel('grey'),
          visual: tasks(
            5,
            [
              ['region', 'Jun 14'],
              ['network', 'Jun 7'],
              ['storage', 'This week'],
            ],
            { width: 440, footer: false },
          ),
        },
      ],
    },

    /** Directory · DEPLOYMENT (48:393556): 10 link cards (06 and 10 are shared pages). */
    {
      type: 'directory',
      eyebrow: 'Deployment',
      title: 'Explore Deployment',
      items: DEPLOYMENT_KEYS.map((k) => ({
        title: DEPLOYMENT[k].title,
        description: DEPLOYMENT[k].tagline,
        to: DEPLOYMENT[k].to,
      })),
    },
  ],

  /** FAQ (48:393571). */
  faq: faq([
    [
      'Which deployment option is right for us?',
      'It depends on your infrastructure, security policies, storage requirements, and operating model. Acumeet can review these requirements with your team.',
    ],
    [
      'Can Acumeet use our Azure environment?',
      'Customer Azure Tenant is a deployment topic for technical assessment. Availability, scope, and responsibility boundaries must be confirmed with Acumeet.',
    ],
    [
      'Does Acumeet support customer-owned storage?',
      'BYOS is part of the deployment discussion. Ask Acumeet to confirm supported providers, configuration requirements, and availability.',
    ],
    [
      'Can we confirm data residency before implementation?',
      'Yes. Raise data location and processing requirements during the deployment assessment and obtain written confirmation of the applicable configuration.',
    ],
  ]),

  cta: depCta('Meeting intelligence that fits your environment.'),
};
