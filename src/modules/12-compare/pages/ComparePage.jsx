import BlockPage from '@/components/blocks/BlockPage';
import CustomerLogos from '@/modules/01-home/components/CustomerLogos';
import IntegrationsSection from '@/modules/01-home/components/IntegrationsSection';
import Checklist from '@/modules/11-enterprise/components/Checklist';
import CompareTable from '../components/CompareTable';
import VsBanner from '../components/VsBanner';

/** Compare-only section types on top of BlockPage's shared ones. */
const SECTIONS = {
  checklist: Checklist,
  integrations: IntegrationsSection,
  logos: CustomerLogos,
  table: CompareTable,
  vs: VsBanner,
};

/**
 * Compare pages (12.01–12.08; Figma "12 · Compare" 49:115722): a BlockPage —
 * hero → `sections` → optional related row → CTA. Builders live in content/compare.js.
 */
export default function ComparePage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
