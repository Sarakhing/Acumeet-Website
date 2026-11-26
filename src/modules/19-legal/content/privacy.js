import { ROUTES } from '@/constants/routes';
import doc from './doc-privacy';
import { LEGAL, legalPage } from './legal';

/** 19.01 · Privacy Policy (Figma 67:73553): hero, document, Directory · LEGAL, CTA. */
export default legalPage('privacy', doc, {
  directory: {
    type: 'directory',
    eyebrow: 'Legal',
    title: 'Explore Legal',
    items: [
      ...['terms', 'cookies', 'dpa', 'acceptableUse', 'security'].map((k) => ({
        title: LEGAL[k].title,
        description: LEGAL[k].title,
        to: LEGAL[k].to,
      })),
      {
        title: 'Subprocessors',
        description: 'Know who helps deliver the service',
        to: ROUTES.trustPage.subprocessors,
      },
    ],
  },
});
