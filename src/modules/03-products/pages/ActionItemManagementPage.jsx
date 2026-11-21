import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Statement from '@/components/blocks/Statement';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Stepper from '@/components/blocks/Stepper';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { actionItemManagement as c } from '../content/action-item-management';

/**
 * 02.05 · Action Item Management (Figma 46:38621). The hidden "Statement"
 * (46:39810) is not rendered; "02 · Overview" (46:39819) is.
 */
export default function ActionItemManagementPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Statement {...c.overview} />
      <Explorer {...c.explorer} />
      <FeatureSplit {...c.split} />
      <CardGrid {...c.benefits} />
      <Stepper {...c.how} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
