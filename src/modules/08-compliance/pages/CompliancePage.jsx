import BlockPage from '@/components/blocks/BlockPage';
import InfoCards from '../components/InfoCards';

/** Compliance-only section types on top of BlockPage's shared ones. */
const SECTIONS = { infoCards: InfoCards };

/**
 * Compliance pages (08.01–08.11; Figma "08 · Compliance" 48:369038): a BlockPage —
 * hero (+ carousel) → `sections` → optional FAQ → related row → CTA.
 * Builders live in content/compliance.js.
 */
export default function CompliancePage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
