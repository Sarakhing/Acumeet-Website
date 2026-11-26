import { ROUTES } from '@/constants/routes';
import { coBreadcrumb } from './company';

/** 17.07 · Careers (Figma 49:188763). "[careers email]" is Figma placeholder text. */
export default {
  breadcrumb: coBreadcrumb('Careers'),
  sections: [
    {
      type: 'hero',
      eyebrow: 'Careers',
      title: 'Help build what better enterprise meetings look like',
      lead: 'Join a team building technology that helps organisations capture decisions, protect important information and turn conversations into knowledge.',
      primary: { label: 'Explore open roles', to: '#open-roles' },
    },
    {
      type: 'cards',
      variant: 'value',
      columns: 3,
      framed: true,
      pt: 24,
      pb: 96,
      gap: 28,
      title: 'Why work on Acumeet',
      cards: [
        {
          title: 'Work on problems that matter',
          body: 'Meetings hold decisions, commitments and sensitive information. Your work helps organisations keep them.',
        },
        {
          title: 'Build for trust',
          body: 'Security, governance and control are part of the product from the start, not an afterthought.',
        },
        {
          title: 'Ship with a focused team',
          body: 'Small teams, clear ownership and room to shape how the product grows.',
        },
      ],
    },
    {
      type: 'roles',
      id: 'open-roles',
      eyebrow: 'Open roles',
      title: 'Open roles',
      teams: ['All teams', 'Engineering', 'Product & design', 'Go-to-market'],
      empty: {
        title: 'There are no open roles listed right now',
        body: 'Interested in working with us? Send your CV and a short note to [careers email]. We will keep it on file for future roles.',
        cta: { label: 'Contact us', to: ROUTES.companyPage.contact },
      },
    },
  ],
};
