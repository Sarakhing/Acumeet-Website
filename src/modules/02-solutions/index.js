import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 02 · Solutions module. Routes are children of the root layout, so paths are
 * relative (no leading slash). Unregistered pages fall through to ComingSoon.
 */
const rel = (path) => path.replace(/^\//, '');

const ProtectPage = lazy(() => import('./pages/ProtectPage'));
const SecurePage = lazy(() => import('./pages/SecurePage'));

export const solutionsRoutes = [
  // TODO(03.01 Overview, Figma 46:11504):   { path: rel(ROUTES.solutions.overview), element: createElement(OverviewPage) },
  { path: rel(ROUTES.solutions.protect), element: createElement(ProtectPage) },
  // TODO(03.03 Control, Figma 46:16979):    { path: rel(ROUTES.solutions.control), element: createElement(ControlPage) },
  { path: rel(ROUTES.solutions.secure), element: createElement(SecurePage) },
  // TODO(03.05 Govern, Figma 46:17748):     { path: rel(ROUTES.solutions.govern), element: createElement(GovernPage) },
  // TODO(03.06 Understand, Figma 46:19096): { path: rel(ROUTES.solutions.understand), element: createElement(UnderstandPage) },
  // TODO(03.07 Connect, Figma 46:19542):    { path: rel(ROUTES.solutions.connect), element: createElement(ConnectPage) },
  // TODO(03.08 EMI, Figma 46:20684):        { path: rel(ROUTES.solutions.emi), element: createElement(EmiPage) },
];
