import { lazy } from 'react';
import { createElement } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));

export const homeRoutes = [{ index: true, element: createElement(HomePage) }];
