import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 14 · Developers module (Figma section "14 · Developers", 49:155703). Routes are children of the
 * root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const D = ROUTES.developersPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/DevelopersPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const developersRoutes = [
  { path: rel(D.overview), element: page(() => import('./content/overview')) }, // 14.01 · 49:155906
  { path: rel(D.api), element: page(() => import('./content/api')) }, // 14.02 · 49:156383
  { path: rel(D.apiDocumentation), element: page(() => import('./content/api-documentation')) }, // 14.03 · 49:156617
  { path: rel(D.authentication), element: page(() => import('./content/authentication')) }, // 14.04 · 49:156820
  { path: rel(D.restApis), element: page(() => import('./content/rest-apis')) }, // 14.05 · 49:155704
  { path: rel(D.webhooks), element: page(() => import('./content/webhooks')) }, // 14.06 · 49:157036
  { path: rel(D.integrationGuides), element: page(() => import('./content/integration-guides')) }, // 14.07 · 49:157258
  { path: rel(D.sdks), element: page(() => import('./content/sdks')) }, // 14.08 · 49:157482
  { path: rel(D.apiReference), element: page(() => import('./content/api-reference')) }, // 14.09 · 49:157693
  { path: rel(D.resources), element: page(() => import('./content/resources')) }, // 14.10 · 49:157905
];
