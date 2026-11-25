import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import LinkCardGrid from '@/components/blocks/LinkCardGrid';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';
import { financialServices as c } from '../content/financial-services';

/** 04.01 · Financial Services (Figma 48:287949). */
export default function FinancialServicesPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.intro} />
      <Explorer {...c.explorer} />
      <CardGrid {...c.workflows} />
      <FeatureSplit {...c.followThrough} />
      <LinkCardGrid {...c.directory} />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
