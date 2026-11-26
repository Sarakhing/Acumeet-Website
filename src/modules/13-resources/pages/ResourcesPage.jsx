import BlockPage from '@/components/blocks/BlockPage';
import Checklist from '@/modules/11-enterprise/components/Checklist';
import CustomerStories from '../components/CustomerStories';
import ListingPlaceholder from '../components/ListingPlaceholder';
import ProductivityCalculator from '../components/ProductivityCalculator';
import ResourceIndex from '../components/ResourceIndex';
import ResourceListing from '../components/ResourceListing';

/** Resources-only section types on top of BlockPage's shared ones. */
const SECTIONS = {
  calculator: ProductivityCalculator,
  checklist: Checklist,
  index: ResourceIndex,
  listing: ResourceListing,
  placeholder: ListingPlaceholder,
  stories: CustomerStories,
};

/**
 * Resources pages (13.01–13.12; Figma "13 · Resources" 49:138233): a BlockPage —
 * hero (+ carousel) → `sections` → optional related row → CTA. Builders live in content/resources.js.
 */
export default function ResourcesPage(props) {
  return <BlockPage {...props} sections={SECTIONS} />;
}
