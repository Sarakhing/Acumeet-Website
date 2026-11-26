import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 17 · Company module (Figma section "17 · Company", 49:187600). Routes are children of the root
 * layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const C = ROUTES.companyPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/CompanyPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const companyRoutes = [
  { path: rel(C.hub), element: page(() => import('./content/hub')) }, // 17.01 · 49:187601
  { path: rel(C.about), element: page(() => import('./content/about')) }, // 17.02 · 49:187863
  { path: rel(C.snapnet), element: page(() => import('./content/snapnet')) }, // 17.03 · 49:188183
  { path: rel(C.technology), element: page(() => import('./content/technology')) }, // 17.04 · 49:188272
  {
    path: rel(C.securityPhilosophy),
    element: page(() => import('./content/security-philosophy')),
  }, // 17.05 · 49:188445
  { path: rel(C.partners), element: page(() => import('./content/partners')) }, // 17.06 · 49:188618
  { path: rel(C.careers), element: page(() => import('./content/careers')) }, // 17.07 · 49:188763
  { path: rel(C.contact), element: page(() => import('./content/contact')) }, // 17.08 · 49:188858
  { path: rel(C.news), element: page(() => import('./content/news')) }, // 17.09 · 49:188970
];
