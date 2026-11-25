import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 07 · Trust Center module (Figma section "07 · Trust Center", 48:336975). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 * 07.02 / 07.04 / 07.12 are "shared" entries in Figma (Security / Compliance pages).
 */
const rel = (path) => path.replace(/^\//, '');
const T = ROUTES.trustPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/TrustCenterPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const trustCenterRoutes = [
  { path: rel(T.overview), element: page(() => import('./content/overview')) }, // 07.01 · 48:336988
  { path: rel(T.privacy), element: page(() => import('./content/privacy')) }, // 07.03 · 48:337641
  { path: rel(T.dataProcessing), element: page(() => import('./content/data-processing')) }, // 07.05 · 48:337726
  { path: rel(T.dataResidency), element: page(() => import('./content/data-residency')) }, // 07.06 · 48:338502
  { path: rel(T.subprocessors), element: page(() => import('./content/subprocessors')) }, // 07.07 · 48:337849
  {
    path: rel(T.securityArchitecture),
    element: page(() => import('./content/security-architecture')),
  }, // 07.08 · 48:337990
  { path: rel(T.policies), element: page(() => import('./content/policies')) }, // 07.09 · 48:338077
  { path: rel(T.certifications), element: page(() => import('./content/certifications')) }, // 07.10 · 48:337477
  {
    path: rel(T.securityDocumentation),
    element: page(() => import('./content/security-documentation')),
  }, // 07.11 · 48:338251
  { path: rel(T.trustUpdates), element: page(() => import('./content/trust-updates')) }, // 07.13 · 48:338442
];
