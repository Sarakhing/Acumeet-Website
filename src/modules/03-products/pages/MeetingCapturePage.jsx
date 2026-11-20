import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Explorer from '@/components/blocks/Explorer';
import Stepper from '@/components/blocks/Stepper';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { meetingCapture as c } from '../content/meeting-capture';

/**
 * 02.02 · Meeting Capture (Figma 46:37362). The "04 · Why Meeting Capture
 * Matters" statement (46:38580) is hidden in Figma and not rendered.
 */
export default function MeetingCapturePage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Explorer {...c.explorer} />
      <FeatureSplit {...c.split} />
      <Stepper {...c.why} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
