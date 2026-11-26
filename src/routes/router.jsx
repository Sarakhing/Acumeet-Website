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
import { integrationsRoutes } from '@/modules/09-integrations';
import { deploymentRoutes } from '@/modules/10-deployment';
import { enterpriseRoutes } from '@/modules/11-enterprise';
import { compareRoutes } from '@/modules/12-compare';
import { resourcesRoutes } from '@/modules/13-resources';
import { developersRoutes } from '@/modules/14-developers';
import { supportRoutes } from '@/modules/15-support';

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
      ...integrationsRoutes,
      ...deploymentRoutes,
      ...enterpriseRoutes,
      ...compareRoutes,
      ...resourcesRoutes,
      ...developersRoutes,
      ...supportRoutes,
      { path: '*', element: <ComingSoon /> },
    ],
  },
]);
