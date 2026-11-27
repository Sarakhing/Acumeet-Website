import { ROUTES } from '@/constants/routes';
import { coBreadcrumb, ctaBand } from './company';

/** 17.05 · Security Philosophy (Figma 49:188445). */
export default {
  breadcrumb: coBreadcrumb('Security philosophy'),
  sections: [
    {
      type: 'hero',
      eyebrow: 'Security philosophy',
      title: 'Security is part of the product, not the fine print',
      lead: 'Meeting data can include sensitive, financial, customer and strategic information. That makes security and control part of the value from the start.',
      primary: { label: 'Explore security', to: ROUTES.security },
    },
    { type: 'belief', text: 'Security is not an add-on. It is part of the reason Acumeet exists.' },
    {
      type: 'principles',
      eyebrow: 'Principles',
      title: 'Control comes first',
      items: [
        ['Access', 'Invited meetings only', 'Acumeet joins only the meetings it is invited to.'],
        ['Access', 'Least privilege', 'We request only the permissions the service needs.'],
        ['Access', 'Revocable access', 'Administrators can control and revoke access.'],
        ['Data', 'Your data, your ownership', 'Your organisation owns its meeting data.'],
        ['Data', 'Tenant isolation', 'Meeting data is logically separated by organisation.'],
        ['Oversight', 'Audit logs', 'Administrative and access activity is logged for review.'],
      ],
    },
    {
      type: 'goDeeper',
      tone: 'muted',
      links: [
        { label: 'Security overview', to: ROUTES.security },
        { label: 'Trust Center', to: ROUTES.trustCenter },
        { label: 'Deployment', to: ROUTES.deployment },
        { label: 'Contact', to: ROUTES.companyPage.contact },
      ],
    },
  ],
  cta: ctaBand('Security is part of the product, not the fine print'),
};
