import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Statement from '@/components/blocks/Statement';
import Editorial from '@/components/blocks/Editorial';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Bento from '@/components/blocks/Bento';
import StepCards from '@/components/blocks/StepCards';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { secure as c } from '../content/secure';

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

/** 03.04 · Secure (Figma 46:17316). */
export default function SecurePage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>
        <HeroCarousel slides={c.carousel} />
      </SolutionHero>
      <Statement {...c.statement} />
      <Editorial {...c.editorial} />
      <FeatureSplit {...c.rbac} />
      <Bento {...c.identity} />
      <FeatureSplit {...c.encryption} />
      <FeatureSplit {...c.audit} />
      <StepCards {...c.siem} />
      <CardGrid {...c.industries} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
