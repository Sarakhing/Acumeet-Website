import { analytics, audit, capture, keys } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { keySummary, rollout, tasks } from './shared';
import { CONTACT, entBreadcrumb, exploreEnterprise } from './enterprise';

const TITLE = 'Move from deployment decision to a controlled rollout.';
const stepPanel = (tint) => ({ tint, pattern: { type: 'rings', size: 'stepper' } });

/**
 * 11.08 · Implementation (Figma 49:70267). Also the Deployment "Enterprise Implementation" entry
 * (10.11). Built like a Deployment page: no Enterprise tabs; Figma's "Copy status badge" is a
 * designer note and is not rendered.
 */
export default {
  breadcrumb: entBreadcrumb('Implementation'),

  /** 01 · Hero (680): summary in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Enterprise implementation',
    title: 'Move from deployment decision to a',
    accent: 'controlled rollout.',
    lead: 'A successful Acumeet implementation aligns technical configuration with business outcomes. Bring your business owners, IT, Security, Compliance, and relevant administrators together to plan readiness, validate workflows, and prepare users for adoption.',
    primary: CONTACT('Plan your Acumeet implementation'),
    secondary: CONTACT('Talk to the team'),
    window: keySummary('Architecture Review', [51, 91, 45], ['cutover', 'tenant'], 500),
    overlay: rollout(5, ['Jun 27', 'May 5', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    /** Stepper + "Stepper · From discovery to go-live" (49:71051): 5 sentence steps. */
    {
      type: 'stepper',
      title: 'From discovery to',
      accent: 'go-live',
      accentBreak: false,
      tone: 'white',
      steps: [
        {
          label:
            'Discovery and requirements: Confirm business goals, user groups, meeting workflows, data categories, integrations, identity, storage, compliance requirements, and deployment constraints. Record open decisions and owners.',
          ...stepPanel('blue'),
          visual: capture('Mon, Jun 8', [
            ['Implementation Kick-off', '9:00 AM · Teams'],
            ['Cutover Readiness Review', '2:00 PM · Zoom'],
            ['Deployment Planning', '4:00 PM · Meet'],
          ]),
        },
        {
          label:
            'Architecture and configuration: Agree the selected deployment approach, configuration, access model, integrations, and data-handling requirements. Document customer and Acumeet responsibilities before changes are made.',
          ...stepPanel('mint'),
          visual: keys(['Configure', 'Configure']),
        },
        {
          label:
            'Validation and pilot: Test the agreed workflows with representative users. Validate meeting capture or upload paths, transcript and summary quality, action tracking, access controls, integration behaviour, and administrative processes as applicable.',
          ...stepPanel('amber'),
          visual: analytics('Last 30 days', [83, 55, 43], { width: 350 }),
        },
        {
          label:
            'Training and change management: Prepare role-based guidance for end users, administrators, and support teams. Explain appropriate use, handling of sensitive meeting content, and the process for reporting issues.',
          ...stepPanel('grey'),
          visual: keySummary('Cutover Readiness Review', [71, 81, 25], ['tenant', 'network'], 440),
        },
        {
          label:
            'Go-live and optimisation: Use agreed acceptance criteria to make the go-live decision. Monitor adoption and issues, assign owners to follow-up actions, and review whether the implementation is delivering the intended value.',
          ...stepPanel('lilac'),
          visual: tasks(
            3,
            [
              ['failover', 'Jun 9'],
              ['region', 'Today'],
              ['network', 'Jun 12'],
            ],
            { width: 400 },
          ),
        },
      ],
    },

    /** Split · Key value points (49:70365). */
    {
      type: 'split',
      size: 'standard',
      reverse: true,
      title: 'Key value points',
      bullets: [
        { text: 'Give every workstream a named owner and acceptance criteria.' },
        { text: 'Test the real workflows users will depend on.' },
        { text: 'Treat training, governance, and post-launch support as part of implementation.' },
      ],
      bulletStyle: 'check',
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: audit(
          [
            ['10:31', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:22', 'Applied legal hold', 'Admin'],
            ['10:06', 'Edited action item', 'George Nwokoro'],
            ['10:00', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 440 },
        ),
      },
    },
  ],

  /** FAQ (49:70409). */
  faq: {
    defaultOpen: 'all',
    items: [
      [
        'How long does implementation take?',
        'Timing depends on the deployment arrangement, integrations, customer approvals, data requirements, and scope. Acumeet should provide a timeline after discovery.',
      ],
      [
        'Who should be involved?',
        'Typically, business owners, IT, Security, Compliance or Legal where relevant, identity and storage administrators, and representatives of the teams using Acumeet.',
      ],
      [
        'Can we start with a pilot?',
        'A pilot can be considered as part of the implementation plan. Agree the scope, participants, success measures, data handling, and exit criteria with Acumeet.',
      ],
      [
        'What determines go-live readiness?',
        'Use agreed acceptance criteria covering configuration, security and access, integrations, user readiness, support ownership, and any applicable compliance approvals.',
      ],
    ].map(([q, a]) => ({ q, a })),
  },

  related: exploreEnterprise(['onboarding', 'training', 'changeManagement', 'support']),

  cta: {
    title: TITLE,
    lead: ' ', // Figma keeps an empty sub-line
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: null,
  },
};
