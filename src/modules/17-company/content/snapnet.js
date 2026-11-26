import { coBreadcrumb, companyCards, ctaBand } from './company';

/** 17.03 · About Snapnet (Figma 49:188183). Bracketed copy is Figma placeholder text. */
export default {
  breadcrumb: coBreadcrumb('About Snapnet'),
  sections: [
    {
      type: 'hero',
      titleSize: 68,
      eyebrow: 'About Snapnet',
      title: 'About Snapnet',
      lead: 'Learn about Snapnet and the company behind Acumeet.',
    },
    {
      type: 'story',
      eyebrow: 'Who we are',
      title: 'The company behind Acumeet',
      statement:
        'Snapnet builds Acumeet for organisations where meetings carry decisions, sensitive information and accountability.',
      note: '[Add a short description of Snapnet: what the company does, where it is based, who it serves and the other products it builds.]',
      facts: [
        ['Founded', '[Year]'],
        ['Headquarters', '[City, Country]'],
        ['Products', 'Acumeet · [Others]'],
        ['Team', '[Team size]'],
      ],
    },
    {
      type: 'cards',
      tone: 'muted',
      title: 'Keep exploring',
      titleSize: 32,
      pt: 96,
      pb: 96,
      gap: 32,
      cards: companyCards(['about', 'technology', 'careers', 'contact']),
    },
  ],
  cta: ctaBand('About Acumeet'),
};
