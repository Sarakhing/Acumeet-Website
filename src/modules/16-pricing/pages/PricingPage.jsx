import BlockPage from '@/components/blocks/BlockPage';
import Checklist from '@/modules/11-enterprise/components/Checklist';
import ComparisonTable from '../components/ComparisonTable';
import PlanCards from '../components/PlanCards';

/** Pricing-only section types on top of BlockPage's shared ones. */
const SECTIONS = { plans: PlanCards, comparison: ComparisonTable, checklist: Checklist };

/**
 * Pricing pages (16.01–16.06; Figma "16 · Pricing"): a BlockPage —
 * optional hero (+ carousel) → `sections` → optional FAQ → optional related row → CTA.
 * 16.01 and 16.03 have no hero: they open on the plan cards / comparison table.
 * Builders live in content/pricing.js.
 */
export default function PricingPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
