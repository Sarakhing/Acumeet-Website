import BlockPage from '@/components/blocks/BlockPage';
import ResourceIndex from '@/modules/13-resources/components/ResourceIndex';
import SupportForm from '../components/SupportForm';

/** Support-only section types on top of BlockPage's shared ones. */
const SECTIONS = { form: SupportForm, index: ResourceIndex };

/**
 * Support pages (15.01–15.16; Figma "15 · Support" 49:167019): a BlockPage —
 * hero (+ carousel) → `sections` → optional FAQ → optional related row → CTA.
 * Builders live in content/support.js.
 */
export default function SupportPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
