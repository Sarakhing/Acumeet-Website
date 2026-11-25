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

/** Detail pages share IndustryDetailPage; each loads its own content chunk. */
const detail = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/IndustryDetailPage'), loadContent()]).then(([page, content]) => ({
        default: () => createElement(page.default, { content: content.default }),
      })),
    ),
  );

export const industriesRoutes = [
  { path: rel(I.overview), element: createElement(IndustriesOverviewPage) }, // 04.00 · 48:287759
  { path: rel(I.financialServices), element: createElement(FinancialServicesPage) }, // 04.01 · 48:287949
  { path: rel(I.banking), element: detail(() => import('./content/banking')) }, // 04.02 · 48:288112
  { path: rel(I.insurance), element: detail(() => import('./content/insurance')) }, // 04.03 · 48:288221
  { path: rel(I.executiveMeetings), element: detail(() => import('./content/executive-meetings')) }, // 04.04 · 48:289384
];
