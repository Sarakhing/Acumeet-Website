import { ROUTES } from '@/constants/routes';
import { coBreadcrumb, ctaBand, INTEGRATIONS_LINK, PLATFORM, PLATFORMS, STAGES } from './company';

/** 17.04 · Our Technology (Figma 49:188272). */
export default {
  breadcrumb: coBreadcrumb('Our Technology'),
  sections: [
    {
      type: 'hero',
      eyebrow: 'Our technology',
      title: 'Technology built to make meeting knowledge useful',
      lead: 'Acumeet combines AI meeting capture, understanding, action tracking, protection, search and analytics to turn conversations into organisational intelligence.',
      leadWidth: 760,
      primary: PLATFORM,
    },
    {
      type: 'stack',
      eyebrow: 'How it fits together',
      title: 'From conversation to organisational intelligence',
      rows: STAGES,
    },
    {
      type: 'platforms',
      eyebrow: 'Capture',
      title: 'Works where your meetings happen',
      lead: 'Bring meetings from Microsoft Teams, Zoom and Google Meet into one workflow.',
      platforms: PLATFORMS,
      link: INTEGRATIONS_LINK,
    },
    {
      type: 'split',
      py: 120,
      eyebrow: 'Enterprise assurance',
      title: 'Control stays with your organisation',
      body: 'Role-based access, SSO and audit logs give you oversight. Eligible enterprise plans add customer-controlled storage and keys and data residency options.',
      chips: [
        'Role-based access',
        'SSO',
        'Audit logs',
        'Customer-controlled storage and keys',
        'Data residency options',
      ],
    },
    {
      type: 'goDeeper',
      links: [
        { label: 'Security overview', to: ROUTES.security },
        { label: 'Deployment', to: ROUTES.deployment },
        { label: 'Integrations', to: ROUTES.integrations },
        { label: 'Developers', to: ROUTES.developers },
      ],
    },
  ],
  cta: ctaBand('Technology built to make meeting knowledge useful'),
};
