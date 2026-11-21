import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Editorial from '@/components/blocks/Editorial';
import Chapters from '@/components/blocks/Chapters';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { analytics as c } from '../content/analytics';

/** 02.11 · Analytics (Figma 46:43428). */
export default function AnalyticsPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.split} />
      <Editorial {...c.activity} />
      <Chapters {...c.participation} />
      <Editorial {...c.actions} />
      <Editorial {...c.topics} />
      <Editorial {...c.quality} />
      <CardGrid {...c.benefits} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
