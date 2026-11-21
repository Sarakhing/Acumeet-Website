import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Split from '@/components/blocks/Split';
import Editorial from '@/components/blocks/Editorial';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '../components/FeatureSplit';
import { knowledgeRepository as c } from '../content/knowledge-repository';

/**
 * 02.10 · Knowledge Repository (Figma 46:43025). Figma places the FAQ after
 * "Explore more" on this page; the "03 · rows" duplicate (46:43381) is hidden.
 */
export default function KnowledgeRepositoryPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <FeatureSplit {...c.split} />
      <Editorial {...c.archive} />
      <Split {...c.search} />
      <Editorial {...c.crossMeeting} />
      <FeatureSplit {...c.preserve} />
      <CardGrid {...c.benefits} />
      <RelatedRow {...c.related} />
      <Faq items={c.faq} defaultOpen="all" waveform={false} />
      <CtaBand {...c.cta} />
    </>
  );
}
