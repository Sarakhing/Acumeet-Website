import BlockPage from '@/components/blocks/BlockPage';
import PrinciplesIndex from '../components/PrinciplesIndex';
import LifecycleStrip from '../components/LifecycleStrip';
import DocCardGrid from '../components/DocCardGrid';

/** Trust Center-only section types on top of BlockPage's shared ones. */
const SECTIONS = { principles: PrinciplesIndex, lifecycle: LifecycleStrip, docs: DocCardGrid };

/**
 * Trust Center pages (07.01, 07.03, 07.05–07.11, 07.13; Figma "07 · Trust Center" 48:336975):
 * a BlockPage — hero (+ carousel) → `sections` → optional FAQ → optional related row → CTA.
 * Builders live in content/trust-center.js.
 */
export default function TrustCenterPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
