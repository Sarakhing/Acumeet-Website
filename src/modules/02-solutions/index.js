import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 02 · Solutions module. Routes are children of the root layout, so paths are
 * relative (no leading slash). Unregistered pages fall through to ComingSoon.
 */
const rel = (path) => path.replace(/^\//, '');

const ProtectPage = lazy(() => import('./pages/ProtectPage'));
const SecurePage = lazy(() => import('./pages/SecurePage'));
const ControlPage = lazy(() => import('./pages/ControlPage'));
const GovernPage = lazy(() => import('./pages/GovernPage'));
const SolutionsOverviewPage = lazy(() => import('./pages/SolutionsOverviewPage'));
const EmiPage = lazy(() => import('./pages/EmiPage'));
const UnderstandPage = lazy(() => import('./pages/UnderstandPage'));
const ConnectPage = lazy(() => import('./pages/ConnectPage'));

export const solutionsRoutes = [
  { path: rel(ROUTES.solutions.overview), element: createElement(SolutionsOverviewPage) },
  { path: rel(ROUTES.solutions.protect), element: createElement(ProtectPage) },
  { path: rel(ROUTES.solutions.control), element: createElement(ControlPage) },
  { path: rel(ROUTES.solutions.secure), element: createElement(SecurePage) },
  { path: rel(ROUTES.solutions.govern), element: createElement(GovernPage) },
  { path: rel(ROUTES.solutions.understand), element: createElement(UnderstandPage) },
  { path: rel(ROUTES.solutions.connect), element: createElement(ConnectPage) },
  { path: rel(ROUTES.solutions.emi), element: createElement(EmiPage) },
];
