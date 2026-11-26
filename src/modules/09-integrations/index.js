import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 09 · Integrations module (Figma section "09 · Integrations", 48:383882). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const I = ROUTES.integrationsPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/IntegrationsPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const integrationsRoutes = [
  { path: rel(I.overview), element: page(() => import('./content/overview')) }, // 09.01 · 48:383883
  {
    path: rel(I.meetingPlatforms),
    element: page(() => import('./content/meeting-platforms')),
  }, // 09.02 · 48:384226
  { path: rel(I.productivity), element: page(() => import('./content/productivity')) }, // 09.03 · 48:384547
  { path: rel(I.identity), element: page(() => import('./content/identity')) }, // 09.04 · 48:384738
  { path: rel(I.storage), element: page(() => import('./content/storage')) }, // 09.05 · 48:385025
  { path: rel(I.security), element: page(() => import('./content/security')) }, // 09.06 · 48:385243
  { path: rel(I.analytics), element: page(() => import('./content/analytics')) }, // 09.07 · 48:385427
  { path: rel(I.crm), element: page(() => import('./content/crm')) }, // 09.08 · 48:385586
  {
    path: rel(I.projectManagement),
    element: page(() => import('./content/project-management')),
  }, // 09.09 · 48:385861
  { path: rel(I.developer), element: page(() => import('./content/developer')) }, // 09.10 · 48:386166
];
