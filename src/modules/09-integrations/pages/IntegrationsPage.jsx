import BlockPage from '@/components/blocks/BlockPage';
import IntegrationIndex from '../components/IntegrationIndex';

/** Integrations-only section types on top of BlockPage's shared ones. */
const SECTIONS = { index: IntegrationIndex };

/**
 * Integrations pages (09.01–09.10; Figma "09 · Integrations" 48:383882): a BlockPage —
 * hero (+ carousel) → `sections` → optional related row → CTA.
 * Builders live in content/integrations.js.
 */
export default function IntegrationsPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
