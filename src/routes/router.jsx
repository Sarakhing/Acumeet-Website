import { createBrowserRouter } from 'react-router';
import SiteLayout from '@/layouts/SiteLayout';
import ComingSoon from '@/modules/placeholder/ComingSoon';
import { homeRoutes } from '@/modules/01-home';
import { solutionsRoutes } from '@/modules/02-solutions';

/**
 * Each Figma section is a module exporting its own lazy routes.
 * Adding a section = one import + one spread here.
 */
export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [...homeRoutes, ...solutionsRoutes, { path: '*', element: <ComingSoon /> }],
  },
]);
