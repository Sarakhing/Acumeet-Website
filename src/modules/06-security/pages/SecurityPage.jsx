import BlockPage from '@/components/blocks/BlockPage';

/**
 * Security pages (06.01–06.07, Figma "06 · Security" 48:325158): a BlockPage —
 * hero (+ carousel) → `sections` in Figma order → FAQ → optional "Explore
 * Security" row → CTA band. Section builders live in content/security.js.
 */
export default function SecurityPage(props) {
  return <BlockPage {...props} />;
}
