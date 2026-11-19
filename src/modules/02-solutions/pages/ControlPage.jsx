import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import IconCardGrid from '@/components/blocks/IconCardGrid';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { control as c } from '../content/control';

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

/** 03.03 · Control (Figma 46:16979). */
export default function ControlPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <IconCardGrid {...c.storage} />
      <FeatureSplit {...c.retention} />
      <FeatureSplit {...c.visibility} />
      <Faq items={c.faq} eyebrow={null} defaultOpen="all" />
      <RelatedRow eyebrow={null} cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
