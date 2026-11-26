import { coBreadcrumb, ctaBand } from './company';

const CATS = ['All news', 'Company updates', 'Product announcements', 'Events'];
const story = (category, t) => ({ category, title: '[News headline]', date: '[Date]', tint: t });

/** 17.09 · News (Figma 49:188970). Stories are Figma placeholders until real news is added. */
export default {
  breadcrumb: coBreadcrumb('News'),
  sections: [
    {
      type: 'hero',
      pb: 56,
      eyebrow: 'News',
      title: 'What is happening at Acumeet',
      lead: 'Company updates, product announcements, events and other news from Acumeet.',
      primary: { label: 'View latest news', to: '#newsroom' },
    },
    {
      type: 'newsroom',
      id: 'newsroom',
      categories: CATS,
      featured: {
        category: 'Company updates',
        title: '[Featured news headline]',
        summary: '[One or two sentences summarising the story.]',
        meta: '[Date] · [Read time]',
      },
      stories: [
        story('Product announcements', 0),
        story('Events', 1),
        story('Company updates', 2),
        story('Product announcements', 3),
        story('Company updates', 4),
        story('Events', 5),
      ],
    },
  ],
  cta: ctaBand('What is happening at Acumeet'),
};
