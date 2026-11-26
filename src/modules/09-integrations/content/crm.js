import { actions, CRM_CONNECTED, integrations } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { floatActions, floatDecisions, po, vendor } from './shared';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

const heroActions = floatActions(3, po(['Fri', 'Jun 2', 'Today']));

/** 09.08 · CRM (Figma 48:385586). */
export default {
  breadcrumb: intBreadcrumb('CRM'),

  /** 01 · Hero (907): integrations (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Integrations  ·  CRM',
    title: 'Connect meeting outcomes with',
    accent: 'customer context.',
    lead: 'Customer conversations create valuable context for sales, account management, and customer success. Explore the CRM options below and confirm how supported workflows can help teams associate meeting outcomes with customer records and follow-up activities.',
    primary: CONTACT('Discuss your CRM requirements'),
    height: 907,
    copyHeight: 366,
    top: 508,
    gap: 46,
    items: [
      [230, 572, integrations(CRM_CONNECTED, 6, { width: 400 }), 6],
      [
        810,
        572,
        floatDecisions(
          'May 30',
          ['Move supplier reviews to monthly', 'Consolidate ERP sync alerts'],
          'Sync lag during peak transaction periods',
          ['Vendor onboarding', 'ERP integration', 'Supplier contracts', 'KPIs'],
        ),
        -6,
      ],
      [520, 508, heroActions],
    ],
    compact: heroActions,
  }),

  sections: splits([
    {
      eyebrow: 'Customer relationship management',
      title: 'Keep customer conversations connected to account workflows.',
      body: [
        'Explore a supported Salesforce workflow for bringing relevant meeting outcomes into customer and account processes. Confirm which objects, fields, permissions, and actions are supported before committing to a specific workflow.',
        'Help teams retain context around customer conversations.',
        'Clarify follow-up ownership and record placement.',
        'Review permissions and data-mapping needs.',
      ],
      cta: CONTACT('Ask about Salesforce'),
      visual: actions(5, vendor(['Jun 4', 'Today', 'Jun 14']), { width: 440 }),
    },
    {
      eyebrow: 'Customer relationship management',
      title: 'Carry meeting context into your HubSpot workflow.',
      body: [
        'Assess how Acumeet meeting outcomes may fit into supported HubSpot contact, company, or deal workflows. The exact behaviour depends on the integration method and fields and actions available.',
        'Keep relevant customer context easier to review.',
        'Support consistent follow-up processes.',
        'Define the right records and permissions.',
      ],
      cta: CONTACT('Ask about HubSpot'),
      visual: actions(
        4,
        [
          ['Begin ERP sync audit diagnostics', 'Today'],
          ['Identify top recurring items for PO automation pilot', 'Jun 16'],
          ['Confirm supplier onboarding checklist owners', 'May 21'],
        ],
        { width: 440 },
      ),
    },
    {
      eyebrow: 'CRM integration options',
      title: 'Have a different CRM? Let’s map the workflow.',
      body: [
        'If your organisation uses another CRM, share the platform and the outcome you need. Acumeet can assess the available integration route, such as an API, webhook, supported automation, or custom implementation, where feasible.',
        'Start with your CRM and desired use case.',
        'Identify available APIs and security requirements.',
        'Agree scope and feasibility before implementation.',
      ],
      cta: CONTACT('Discuss your CRM'),
      visual: integrations(CRM_CONNECTED, 6, { width: 440 }),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Connect meeting outcomes with customer context.'),
};
