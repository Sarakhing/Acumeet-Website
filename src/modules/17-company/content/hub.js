import { ROUTES } from '@/constants/routes';
import { companyCards, DEMO, PLATFORM } from './company';

/** 17.01 · Company Hub (Figma 49:187601). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Company Hub' }],
  sections: [
    {
      type: 'hero',
      align: 'center',
      titleSize: 68,
      flow: true,
      eyebrow: 'About Acumeet',
      title: 'Meetings end. Their value should not.',
      lead: 'Acumeet is an enterprise meeting intelligence platform that turns important conversations into structured, searchable and secure knowledge.',
      primary: DEMO,
      secondary: PLATFORM,
    },
    {
      type: 'split',
      title: 'We built Acumeet for what happens after the meeting ends',
      body: 'Decisions get buried, actions lose owners and knowledge stays with individuals. Acumeet keeps the value of important conversations alive.',
    },
    {
      type: 'cards',
      title: 'Explore the company',
      cards: companyCards(
        [
          'about',
          'snapnet',
          'technology',
          'securityPhilosophy',
          'partners',
          'careers',
          'contact',
          'news',
        ],
        true,
      ),
    },
    {
      type: 'closing',
      title: 'We are building for organisations where meetings matter',
      lead: 'For teams handling sensitive information, important decisions and institutional knowledge, meetings are too valuable to become another forgotten file.',
      cta: DEMO,
    },
  ],
};
