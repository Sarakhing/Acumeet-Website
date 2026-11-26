import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 11 · Enterprise module (Figma section "11 · Enterprise", 49:67845). Routes are children of the
 * root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const E = ROUTES.enterprisePage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/EnterprisePage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const enterpriseRoutes = [
  { path: rel(E.overview), element: page(() => import('./content/overview')) }, // 11.01 · 49:67846
  { path: rel(E.architecture), element: page(() => import('./content/architecture')) }, // 11.02 · 49:68145
  { path: rel(E.administration), element: page(() => import('./content/administration')) }, // 11.03 · 49:68282
  { path: rel(E.governance), element: page(() => import('./content/governance')) }, // 11.04 · 49:68418
  { path: rel(E.security), element: page(() => import('./content/security')) }, // 11.05 · 49:68554
  { path: rel(E.compliance), element: page(() => import('./content/compliance')) }, // 11.06 · 49:68654
  { path: rel(E.deployment), element: page(() => import('./content/deployment')) }, // 11.07 · 49:68805
  { path: rel(E.implementation), element: page(() => import('./content/implementation')) }, // 11.08 · 49:70267
  { path: rel(E.onboarding), element: page(() => import('./content/onboarding')) }, // 11.09 · 49:68961
  { path: rel(E.training), element: page(() => import('./content/training')) }, // 11.10 · 49:69046
  { path: rel(E.changeManagement), element: page(() => import('./content/change-management')) }, // 11.11 · 49:69194
  { path: rel(E.support), element: page(() => import('./content/support')) }, // 11.12 · 49:69323
  { path: rel(E.serviceLevels), element: page(() => import('./content/service-levels')) }, // 11.13 · 49:69408
  { path: rel(E.poc), element: page(() => import('./content/poc')) }, // 11.14 · 49:69557
  { path: rel(E.requestPoc), element: page(() => import('./content/request-poc')) }, // 11.15 · 49:69711
  { path: rel(E.pocProcess), element: page(() => import('./content/poc-process')) }, // 11.16 · 49:69804
  { path: rel(E.pocScope), element: page(() => import('./content/poc-scope')) }, // 11.17 · 49:69969
  { path: rel(E.pocSuccess), element: page(() => import('./content/poc-success')) }, // 11.18 · 49:70167
];
