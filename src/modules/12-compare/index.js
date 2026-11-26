import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 12 · Compare module (Figma section "12 · Compare", 49:115722). Routes are children of the root
 * layout, so paths are relative (no leading slash). 12.01 Why Acumeet lives at /why-acumeet and
 * 12.08 Competitive Comparison is the /compare overview.
 */
const rel = (path) => path.replace(/^\//, '');
const C = ROUTES.comparePage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/ComparePage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const compareRoutes = [
  { path: rel(C.why), element: page(() => import('./content/why-acumeet')) }, // 12.01 · 49:115723
  { path: rel(C.aiAssistants), element: page(() => import('./content/ai-assistants')) }, // 12.02 · 49:115909
  { path: rel(C.meetingNotes), element: page(() => import('./content/meeting-notes')) }, // 12.03 · 49:116107
  {
    path: rel(C.enterprisePlatforms),
    element: page(() => import('./content/enterprise-platforms')),
  }, // 12.04 · 49:116398
  { path: rel(C.fireflies), element: page(() => import('./content/fireflies')) }, // 12.05 · 49:116516
  { path: rel(C.otter), element: page(() => import('./content/otter')) }, // 12.06 · 49:116782
  { path: rel(C.teamsPremium), element: page(() => import('./content/teams-premium')) }, // 12.07 · 49:117101
  { path: rel(C.overview), element: page(() => import('./content/overview')) }, // 12.08 · 49:117344
];
