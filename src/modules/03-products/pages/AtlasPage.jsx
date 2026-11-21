import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import AtlasCapabilityGrid from '../components/AtlasCapabilityGrid';
import { atlas as c } from '../content/atlas';

/** 02.08 · Atlas (Figma 46:41403). */
export default function AtlasPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.chatbot} />
      <AtlasCapabilityGrid {...c.capabilities} />
      <FeatureSplit {...c.naturally} />
      <CardGrid {...c.benefits} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
