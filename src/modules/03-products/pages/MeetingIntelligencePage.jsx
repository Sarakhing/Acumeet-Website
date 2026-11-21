import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Editorial from '@/components/blocks/Editorial';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { meetingIntelligence as c } from '../content/meeting-intelligence';

/** 02.09 · Meeting Intelligence (Figma 46:41646). */
export default function MeetingIntelligencePage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <FeatureSplit {...c.split} />
      <Editorial {...c.decisions} />
      <FeatureSplit {...c.actions} />
      <Editorial {...c.discussions} />
      <FeatureSplit {...c.history} />
      <Editorial {...c.memory} />
      <CardGrid {...c.benefits} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
