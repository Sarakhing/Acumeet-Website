import BlockPage from '@/components/blocks/BlockPage';
import LegalDocument from '../components/LegalDocument';

const SECTIONS = { document: LegalDocument };

/**
 * Legal pages (19.01–19.06; Figma "19 · Legal"): a BlockPage — centred hero → legal document
 * (+ directory on 19.01) → optional "Explore Legal" row → CTA. Builders in content/legal.js.
 */
export default function LegalPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
