import { coBreadcrumb, INTEGRATIONS_LINK, PLATFORMS } from './company';
import { ROUTES } from '@/constants/routes';

/** 17.06 · Partners (Figma 49:188618). */
export default {
  breadcrumb: coBreadcrumb('Partners'),
  sections: [
    {
      type: 'hero',
      eyebrow: 'Partners',
      title: 'Better enterprise technology works better together',
      lead: 'The technology and ecosystem relationships that help Acumeet connect with enterprise workflows.',
    },
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      framed: true,
      pt: 24,
      pb: 96,
      gap: 28,
      title: 'How we work with partners',
      cards: [
        {
          icon: 'plugs-connected',
          title: 'Technology partners',
          body: 'Platforms and tools that Acumeet connects with, so meeting knowledge reaches the systems teams already use.',
        },
        {
          icon: 'wrench',
          title: 'Implementation partners',
          body: 'Consultancies and integrators who help organisations plan, deploy and roll out Acumeet.',
        },
        {
          icon: 'storefront',
          title: 'Channel partners',
          body: 'Resellers and distributors who bring Acumeet to organisations in their markets.',
        },
      ],
    },
    {
      type: 'platforms',
      variant: 'outline',
      tone: 'muted',
      titleSize: 40,
      py: 96,
      gap: 32,
      eyebrow: 'Works with',
      title: 'The platforms your teams already meet on',
      lead: 'Bring meetings from Microsoft Teams, Zoom and Google Meet into one workflow.',
      platforms: PLATFORMS,
      link: INTEGRATIONS_LINK,
    },
    {
      type: 'closing',
      layout: 'row',
      title: 'Interested in partnering with Acumeet?',
      lead: 'Tell us about your organisation and how you work with enterprise customers. We will follow up to explore a fit.',
      cta: { label: 'Talk to us', to: ROUTES.companyPage.contact },
    },
  ],
};
