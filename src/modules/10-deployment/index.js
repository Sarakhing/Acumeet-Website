import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 10 · Deployment module (Figma section "10 · Deployment", 48:393382). Routes are children
 * of the root layout, so paths are relative (no leading slash). 10.07 Data Residency and
 * 10.11 Implementation are shared pages (07.06 / 11.08) and have no route here.
 */
const rel = (path) => path.replace(/^\//, '');
const D = ROUTES.deploymentPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/DeploymentPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const deploymentRoutes = [
  { path: rel(D.overview), element: page(() => import('./content/overview')) }, // 10.01 · 48:393391
  { path: rel(D.cloudHosted), element: page(() => import('./content/cloud-hosted')) }, // 10.02 · 48:393585
  {
    path: rel(D.enterpriseHosted),
    element: page(() => import('./content/enterprise-hosted')),
  }, // 10.03 · 48:393631
  {
    path: rel(D.customerAzureTenant),
    element: page(() => import('./content/customer-azure-tenant')),
  }, // 10.04 · 48:393739
  { path: rel(D.byos), element: page(() => import('./content/byos')) }, // 10.05 · 48:393876
  {
    path: rel(D.privateDeployment),
    element: page(() => import('./content/private-deployment')),
  }, // 10.06 · 48:393933
  {
    path: rel(D.azureArchitecture),
    element: page(() => import('./content/azure-architecture')),
  }, // 10.08 · 48:394053
  {
    path: rel(D.highAvailability),
    element: page(() => import('./content/high-availability')),
  }, // 10.09 · 48:394191
  {
    path: rel(D.disasterRecovery),
    element: page(() => import('./content/disaster-recovery')),
  }, // 10.10 · 48:394247
];
