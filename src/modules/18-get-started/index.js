import { createElement, lazy, Suspense } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 18 · Get Started module (Figma section "18 · Get Started", 49:196073). `getStartedRoutes` are
 * children of the site layout; `signUpRoute` is standalone (18.02 has no site nav or footer).
 */
const rel = (path) => path.replace(/^\//, '');
const G = ROUTES.getStartedPage;

const page = (loadContent) =>
  createElement(
    lazy(() =>
      Promise.all([import('./pages/GetStartedPage'), loadContent()]).then(([p, content]) => ({
        default: () => createElement(p.default, { content: content.default }),
      })),
    ),
  );

export const getStartedRoutes = [
  { path: rel(G.overview), element: page(() => import('./content/overview')) }, // 18.01 · 49:197079
  { path: rel(G.bookDemo), element: page(() => import('./content/book-demo')) }, // 18.03 · 49:196176
  { path: rel(G.enterpriseDemo), element: page(() => import('./content/enterprise-demo')) }, // 18.04 · 49:196342
  { path: rel(G.poc), element: page(() => import('./content/poc')) }, // 18.05 · 49:196527
  { path: rel(G.contactSales), element: page(() => import('./content/contact-sales')) }, // 18.06 · 49:196717
  {
    path: rel(G.contactEnterprise),
    element: page(() => import('./content/contact-enterprise')),
  }, // 18.07 · 49:196883
];

const SignUp = lazy(() => import('./pages/SignUpPage'));

/** 18.02 · Sign Up (49:196074), outside the site layout. */
export const signUpRoute = {
  path: G.signUp,
  element: createElement(
    Suspense,
    { fallback: createElement('div', { className: 'min-h-screen' }) },
    createElement(SignUp),
  ),
};
