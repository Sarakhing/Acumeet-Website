import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Statement from '@/components/blocks/Statement';
import Explorer from '@/components/blocks/Explorer';
import NumberedGrid from '@/components/blocks/NumberedGrid';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { protect as c } from '../content/protect';

/** 03.02 · Protect (Figma 46:14208). */
export default function ProtectPage() {
  const { visual, ...split } = c.split;
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Statement {...c.statement} />
      <Explorer {...c.explorer} />
      <NumberedGrid {...c.audiences} />
      <Split
        {...split}
        visual={
          <VisualPanel tint={visual.tint} pattern={visual.pattern}>
            {visual.content}
          </VisualPanel>
        }
      />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
