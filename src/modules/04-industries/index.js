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
  { path: rel(I.creditCommittees), element: detail(() => import('./content/credit-committees')) }, // 04.05 · 48:289461
  { path: rel(I.riskCommittees), element: detail(() => import('./content/risk-committees')) }, // 04.06 · 48:289571
  { path: rel(I.complianceMeetings), element: detail(() => import('./content/compliance-meetings')) }, // 04.07 · 48:289785
  { path: rel(I.fraudInvestigations), element: detail(() => import('./content/fraud-investigations')) }, // 04.08 · 48:289851
  { path: rel(I.boardMeetings), element: detail(() => import('./content/board-meetings')) }, // 04.09 · 48:289960
  { path: rel(I.auditMeetings), element: detail(() => import('./content/audit-meetings')) }, // 04.10 · 48:291127
  { path: rel(I.amlReviews), element: detail(() => import('./content/aml-reviews')) }, // 04.11 · 48:292310
];
