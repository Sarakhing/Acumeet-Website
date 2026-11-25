import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 04 · Industries module (Figma section "04 · Industries", 48:287758). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const I = ROUTES.industry;

const IndustriesOverviewPage = lazy(() => import('./pages/IndustriesOverviewPage'));
const FinancialServicesPage = lazy(() => import('./pages/FinancialServicesPage'));

export const industriesRoutes = [
  { path: rel(I.overview), element: createElement(IndustriesOverviewPage) }, // 04.00 · 48:287759
  { path: rel(I.financialServices), element: createElement(FinancialServicesPage) }, // 04.01 · 48:287949
];
