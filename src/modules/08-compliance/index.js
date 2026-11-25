import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 08 · Compliance module (Figma section "08 · Compliance", 48:369038). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const C = ROUTES.compliancePage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/CompliancePage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const complianceRoutes = [
  { path: rel(C.overview), element: page(() => import('./content/overview')) }, // 08.01 · 48:369434
  { path: rel(C.ndpr), element: page(() => import('./content/ndpr')) }, // 08.02 · 48:369834
  { path: rel(C.iso27001), element: page(() => import('./content/iso-27001')) }, // 08.03 · 48:369992
  { path: rel(C.soc2), element: page(() => import('./content/soc-2')) }, // 08.04 · 48:370159
  { path: rel(C.gdpr), element: page(() => import('./content/gdpr')) }, // 08.05 · 48:370251
  { path: rel(C.cbn), element: page(() => import('./content/cbn-requirements')) }, // 08.06 · 48:369039
  {
    path: rel(C.financialServices),
    element: page(() => import('./content/financial-services')),
  }, // 08.07 · 48:369157
  { path: rel(C.dataGovernance), element: page(() => import('./content/data-governance')) }, // 08.08 · 48:370412
  { path: rel(C.auditReadiness), element: page(() => import('./content/audit-readiness')) }, // 08.09 · 48:369199
  {
    path: rel(C.regulatorySupport),
    element: page(() => import('./content/regulatory-support')),
  }, // 08.10 · 48:369307
  { path: rel(C.documentation), element: page(() => import('./content/documentation')) }, // 08.11 · 48:370556
];
