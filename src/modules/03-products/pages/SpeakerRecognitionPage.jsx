import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Stepper from '@/components/blocks/Stepper';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { speakerRecognition as c } from '../content/speaker-recognition';

/** 02.06 · Speaker Recognition (Figma 46:39919). */
export default function SpeakerRecognitionPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.split} />
      <Explorer {...c.explorer} />
      <CardGrid {...c.benefits} />
      <Stepper {...c.how} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
