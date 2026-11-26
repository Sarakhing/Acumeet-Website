import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 15 · Support module (Figma section "15 · Support", 49:167019). Routes are children of the root
 * layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const S = ROUTES.supportPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/SupportPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const supportRoutes = [
  { path: rel(S.overview), element: page(() => import('./content/overview')) }, // 15.01 · 49:167033
  { path: rel(S.gettingStarted), element: page(() => import('./content/getting-started')) }, // 15.04 · 49:167278
  { path: rel(S.featureGuides), element: page(() => import('./content/feature-guides')) }, // 15.05 · 49:167407
  { path: rel(S.administration), element: page(() => import('./content/administration')) }, // 15.07 · 49:167457
  { path: rel(S.billing), element: page(() => import('./content/billing')) }, // 15.08 · 49:167571
  { path: rel(S.security), element: page(() => import('./content/security')) }, // 15.09 · 49:167728
  { path: rel(S.troubleshooting), element: page(() => import('./content/troubleshooting')) }, // 15.10 · 49:167791
  { path: rel(S.faqs), element: page(() => import('./content/faqs')) }, // 15.11 · 49:167903
  { path: rel(S.contact), element: page(() => import('./content/contact')) }, // 15.12 · 49:168043
  { path: rel(S.raiseTicket), element: page(() => import('./content/raise-ticket')) }, // 15.13 · 49:168095
  { path: rel(S.ticketStatus), element: page(() => import('./content/ticket-status')) }, // 15.14 · 49:168230
  { path: rel(S.serviceStatus), element: page(() => import('./content/service-status')) }, // 15.15 · 49:168369
  { path: rel(S.supportPlans), element: page(() => import('./content/support-plans')) }, // 15.16 · 49:168429
];
