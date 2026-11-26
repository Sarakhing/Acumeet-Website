import BlockPage from '@/components/blocks/BlockPage';
import Stepper from '@/components/blocks/Stepper';

/** Deployment-only section types on top of BlockPage's shared ones. */
const SECTIONS = { stepper: Stepper };

/**
 * Deployment pages (10.01–10.10; Figma "10 · Deployment" 48:393382): a BlockPage —
 * hero (+ carousel) → `sections` → FAQ → optional related row → CTA.
 * Builders live in content/deployment.js.
 */
export default function DeploymentPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
