import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 19 · Legal module (Figma section "19 · Legal", 67:73552). Routes are children of the root
 * layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const L = ROUTES.legal;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/LegalPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const legalRoutes = [
  { path: rel(L.privacy), element: page(() => import('./content/privacy')) }, // 19.01 · 67:73553
  { path: rel(L.terms), element: page(() => import('./content/terms')) }, // 19.02 · 67:73711
  { path: rel(L.cookies), element: page(() => import('./content/cookies')) }, // 19.03 · 67:73894
  { path: rel(L.dpa), element: page(() => import('./content/dpa')) }, // 19.04 · 67:74033
  { path: rel(L.acceptableUse), element: page(() => import('./content/acceptable-use')) }, // 19.05 · 67:74285
  { path: rel(L.security), element: page(() => import('./content/security')) }, // 19.06 · 67:74422
];
