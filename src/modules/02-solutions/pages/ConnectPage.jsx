import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Editorial from '@/components/blocks/Editorial';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Chapters from '@/components/blocks/Chapters';
import Stepper from '@/components/blocks/Stepper';
import Faq from '@/components/blocks/Faq';
import CtaBand from '@/components/blocks/CtaBand';
import { connect as c } from '../content/connect';

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

/** 03.07 · Connect (Figma 46:19542). No "Explore more" row in Figma. */
export default function ConnectPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <FeatureSplit {...c.meetings} />
      <Editorial {...c.crm} />
      <FeatureSplit {...c.projects} />
      <Editorial {...c.everyday} />
      <Chapters {...c.analytics} />
      <Editorial {...c.api} />
      <FeatureSplit {...c.webhooks} />
      <Stepper {...c.workflow} />
      <Faq items={c.faq} defaultOpen="all" />
      <CtaBand {...c.cta} />
    </>
  );
}
