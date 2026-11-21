import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Editorial from '@/components/blocks/Editorial';
import NumberedGrid from '@/components/blocks/NumberedGrid';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { aiRedaction as c } from '../content/ai-redaction';

/** 02.07 · AI Redaction (Figma 46:40048). Figma has no "Explore more" row on this page. */
export default function AiRedactionPage() {
  const { panel, visual: financialVisual, ...financial } = c.financial;
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <FeatureSplit {...c.responsible} />
      <Editorial {...c.pii} />
      <Split {...financial} visual={<VisualPanel {...panel}>{financialVisual}</VisualPanel>} />
      <Editorial {...c.confidential} />
      <FeatureSplit {...c.policies} />
      <Editorial {...c.preStorage} />
      <NumberedGrid {...c.how} />
      <CardGrid {...c.benefits} />
      <Faq items={c.faq} defaultOpen="all" />
      <CtaBand {...c.cta} />
    </>
  );
}
