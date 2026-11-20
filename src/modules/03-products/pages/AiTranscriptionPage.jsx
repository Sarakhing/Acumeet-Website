import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Stepper from '@/components/blocks/Stepper';
import CardGrid from '@/components/blocks/CardGrid';
import Statement from '@/components/blocks/Statement';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { aiTranscription as c } from '../content/ai-transcription';

/** 02.03 · AI Transcription (Figma 46:37240). */
export default function AiTranscriptionPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.split} />
      <Stepper {...c.how} />
      <CardGrid {...c.benefits} />
      <Statement {...c.statement} />
      <Faq title={c.faqTitle} items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
