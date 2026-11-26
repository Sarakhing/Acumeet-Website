import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 16 · Pricing module (Figma section "16 · Pricing"). Routes are children of the root layout,
 * so paths are relative (no leading slash). 16.02 Plans is the overview and 16.07 Contact Sales
 * is the shared 18.06 page.
 */
const rel = (path) => path.replace(/^\//, '');
const P = ROUTES.pricingPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/PricingPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const pricingRoutes = [
  { path: rel(P.overview), element: page(() => import('./content/overview')) }, // 16.01 · 49:173600
  {
    path: rel(P.featureComparison),
    element: page(() => import('./content/feature-comparison')),
  }, // 16.03 · 49:173923
  { path: rel(P.enterprise), element: page(() => import('./content/enterprise')) }, // 16.04 · 49:174456
  { path: rel(P.addOns), element: page(() => import('./content/add-ons')) }, // 16.05 · 49:174584
  { path: rel(P.faqs), element: page(() => import('./content/faqs')) }, // 16.06 · 49:174719
];
