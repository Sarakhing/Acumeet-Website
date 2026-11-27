import { actions, CONNECTED, CRM_CONNECTED, integrations } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { approvalSearch, po, vendor } from './shared';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

/** 09.10 · Developer Integrations (Figma 48:386166). */
export default {
  breadcrumb: intBreadcrumb('Developer integrations'),

  /** 01 · Hero (610): integrations in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Integrations  ·  Developer integrations',
    title: 'Build around your systems',
    accent: 'and workflows.',
    lead: 'For teams with specific technical requirements, developer integration paths can help define how Acumeet exchanges data and triggers downstream workflows. Confirm the current API surface, event support, authentication, rate limits, and documentation access with the Acumeet team.',
    primary: CONTACT('Discuss your developer integrations requirements'),
    window: integrations(CRM_CONNECTED, 6, { width: 500 }),
    overlay: actions(4, po(['May 12', 'Next week', 'May 22']), { width: 360, shadow: 'float' }),
    overlayY: 227,
    height: 610,
  }),

  sections: splits([
    {
      eyebrow: 'Application programming interface',
      title: 'Connect systems through a clearly defined API workflow.',
      body: [
        'A REST API can provide a structured way for systems to exchange data and trigger supported operations. Review Acumeet’s available endpoints, authentication method, permissions, limits, and versioning before building against it.',
        'Define the workflow and required data.',
        'Review authentication and access controls.',
        'Plan error handling, retries, and version changes.',
      ],
      cta: CONTACT('Request API information'),
      visual: integrations(CRM_CONNECTED, 6, { width: 440 }),
    },
    {
      eyebrow: 'Event-driven workflows',
      title: 'Let supported events trigger downstream processes.',
      body: [
        'Webhooks can notify an external system when defined events occur. Confirm which Acumeet events are available, how webhook delivery is authenticated, and how retries, signatures, and failure handling work.',
        'Identify the events your workflow needs.',
        'Plan secure endpoint verification.',
        'Define retry and failure-handling expectations.',
      ],
      cta: CONTACT('Ask about webhooks'),
      visual: actions(3, vendor(['Next week', 'May 24', 'Jun 2']), { width: 440 }),
    },
    {
      eyebrow: 'Developer documentation',
      title: 'Find the technical details needed to plan an integration.',
      body: [
        'Use Acumeet’s API documentation, when available, to understand supported endpoints, authentication, request and response formats, errors, and implementation requirements. If documentation is not publicly available, request access from the Acumeet team.',
        'Review supported endpoints and schemas.',
        'Understand authentication and permission requirements.',
        'Plan testing and production rollout.',
      ],
      cta: CONTACT('Request API documentation'),
      visual: approvalSearch([
        ['Weekly ProcureCentro Stand-up', 'Jun 14'],
        ['Monthly Marketing Strategy Review', 'Apr 23'],
        ['Product Development Sync-Up', 'May 6'],
      ]),
    },
    {
      eyebrow: 'Tailored integration work',
      title: 'Have a workflow that does not fit a standard connector?',
      body: [
        'Share the systems involved, the information that needs to move, and the outcome you want. Acumeet can assess feasibility and recommend a suitable approach, which may include an API-based connection or a scoped custom implementation.',
        'Start with the business outcome, not just the tool.',
        'Identify data, security, and operational requirements.',
        'Agree feasibility, scope, and ownership before work begins.',
      ],
      cta: CONTACT('Discuss a custom integration'),
      visual: integrations(CONNECTED, 6),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Build around your systems and workflows.'),
};
