import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Editorial from '@/components/blocks/Editorial';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Chapters from '@/components/blocks/Chapters';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { understand as c } from '../content/understand';

/** Split with its VisualPanel built from `{ visual: { tint, pattern, content } }` data. */
function FeatureSplit({ visual, ...props }) {
  return (
    <Split
      {...props}
      visual={
        <VisualPanel tint={visual.tint} pattern={visual.pattern}>
          {visual.content}
        </VisualPanel>
      }
    />
  );
}

/** 03.06 · Understand (Figma 46:19096). */
export default function UnderstandPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <FeatureSplit {...c.transcript} />
      <Editorial {...c.decisions} />
      <FeatureSplit {...c.actions} />
      <Chapters {...c.atlas} />
      <Editorial {...c.knowledge} />
      <Explorer {...c.explorer} />
      <CardGrid {...c.audiences} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
