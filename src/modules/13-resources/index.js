import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 13 · Resources module (Figma section "13 · Resources", 49:138233). Routes are children of the root
 * layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const R = ROUTES.resourcesPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/ResourcesPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const resourcesRoutes = [
  { path: rel(R.overview), element: page(() => import('./content/overview')) }, // 13.01 · 49:138234
  { path: rel(R.blog), element: page(() => import('./content/blog')) }, // 13.02 · 49:138510
  { path: rel(R.blogCategories), element: page(() => import('./content/blog-categories')) }, // 13.03 · 49:138636
  { path: rel(R.caseStudies), element: page(() => import('./content/case-studies')) }, // 13.04 · 49:138741
  { path: rel(R.whitepapers), element: page(() => import('./content/whitepapers')) }, // 13.05 · 49:138861
  { path: rel(R.guides), element: page(() => import('./content/guides')) }, // 13.06 · 49:138997
  { path: rel(R.reports), element: page(() => import('./content/reports')) }, // 13.07 · 49:139059
  { path: rel(R.webinars), element: page(() => import('./content/webinars')) }, // 13.08 · 49:139175
  { path: rel(R.productUpdates), element: page(() => import('./content/product-updates')) }, // 13.09 · 49:139325
  { path: rel(R.customerStories), element: page(() => import('./content/customer-stories')) }, // 13.10 · 49:139652
  { path: rel(R.calculator), element: page(() => import('./content/calculator')) }, // 13.11 · 49:139942
  { path: rel(R.documentation), element: page(() => import('./content/documentation')) }, // 13.12 · 49:140194
];
