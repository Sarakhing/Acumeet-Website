import { createBrowserRouter } from 'react-router';
import SiteLayout from '@/layouts/SiteLayout';
import ComingSoon from '@/modules/placeholder/ComingSoon';
import { homeRoutes } from '@/modules/01-home';
import { solutionsRoutes } from '@/modules/02-solutions';
import { productsRoutes } from '@/modules/03-products';
import { industriesRoutes } from '@/modules/04-industries';
import { useCasesRoutes } from '@/modules/05-use-cases';
import { securityRoutes } from '@/modules/06-security';
import { trustCenterRoutes } from '@/modules/07-trust-center';
import { complianceRoutes } from '@/modules/08-compliance';

/**
 * Each Figma section is a module exporting its own lazy routes.
 * Adding a section = one import + one spread here.
 */
export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      ...homeRoutes,
      ...solutionsRoutes,
      ...productsRoutes,
      ...industriesRoutes,
      ...useCasesRoutes,
      ...securityRoutes,
      ...trustCenterRoutes,
      ...complianceRoutes,
      { path: '*', element: <ComingSoon /> },
    ],
  },
]);
