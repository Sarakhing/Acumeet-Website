import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Explorer from '@/components/blocks/Explorer';
import Stepper from '@/components/blocks/Stepper';
import Statement from '@/components/blocks/Statement';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { aiMeetingSummaries as c } from '../content/ai-meeting-summaries';

/** 02.04 · AI Meeting Summaries (Figma 46:35486). */
export default function AiMeetingSummariesPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Explorer {...c.explorer} />
      <FeatureSplit {...c.split} />
      <Stepper {...c.how} />
      <Statement {...c.statement} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
