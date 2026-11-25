import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 06 · Security module (Figma section "06 · Security", 48:325158). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const S = ROUTES.securityPage;

/** Every page shares SecurityPage; each content module loads as its own chunk. */
const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/SecurityPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const securityRoutes = [
  { path: rel(S.overview), element: page(() => import('./content/overview')) }, // 06.01 · 48:325159
  { path: rel(S.zeroTrust), element: page(() => import('./content/zero-trust-architecture')) }, // 06.02 · 48:325303
  { path: rel(S.identityAccess), element: page(() => import('./content/identity-access')) }, // 06.03 · 48:325402
  { path: rel(S.dataSecurity), element: page(() => import('./content/data-security')) }, // 06.04 · 48:325595
  { path: rel(S.aiSecurity), element: page(() => import('./content/ai-security')) }, // 06.05 · 48:325695
  { path: rel(S.auditMonitoring), element: page(() => import('./content/audit-monitoring')) }, // 06.06 · 48:325863
  { path: rel(S.dataLifecycle), element: page(() => import('./content/data-lifecycle')) }, // 06.07 · 48:326037
];
