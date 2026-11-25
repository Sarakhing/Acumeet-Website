import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 05 · Use Cases module (Figma section "05 · Use Cases", 48:305346). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const U = ROUTES.useCase;

const UseCasesOverviewPage = lazy(() => import('./pages/UseCasesOverviewPage'));

/** Detail pages share one page component; each content module loads as its own chunk. */
const detail = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/UseCaseDetailPage'), loadContent()]).then(([page, content]) => ({
        default: () => createElement(page.default, { content: content.default }),
      })),
    ),
  );

export const useCasesRoutes = [
  { path: rel(U.overview), element: createElement(UseCasesOverviewPage) }, // 05.00 · 48:308252
  { path: rel(U.executiveBoardMeetings), element: detail(() => import('./content/executive-board-meetings')) }, // 05.01 · 48:305601
  { path: rel(U.riskCompliance), element: detail(() => import('./content/risk-compliance')) }, // 05.02 · 48:305805
  { path: rel(U.creditInvestmentCommittees), element: detail(() => import('./content/credit-investment-committees')) }, // 05.03 · 48:306049
  { path: rel(U.audit), element: detail(() => import('./content/audit')) }, // 05.04 · 48:305347
  { path: rel(U.fraudAml), element: detail(() => import('./content/fraud-aml')) }, // 05.05 · 48:306374
  { path: rel(U.projectGovernance), element: detail(() => import('./content/project-governance')) }, // 05.06 · 48:306542
  { path: rel(U.customerStrategy), element: detail(() => import('./content/customer-strategy')) }, // 05.07 · 48:306787
  { path: rel(U.sales), element: detail(() => import('./content/sales')) }, // 05.08 · 48:307020
  { path: rel(U.customerSuccess), element: detail(() => import('./content/customer-success')) }, // 05.09 · 48:307158
  { path: rel(U.operations), element: detail(() => import('./content/operations')) }, // 05.10 · 48:307330
  { path: rel(U.productTeams), element: detail(() => import('./content/product-teams')) }, // 05.11 · 48:307638
  { path: rel(U.managementMeetings), element: detail(() => import('./content/management-meetings')) }, // 05.12 · 48:307791
  {
    path: rel(U.enterpriseKnowledgeManagement),
    element: detail(() => import('./content/enterprise-knowledge-management')),
  }, // 05.13 · 48:308004
];
