import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Explorer from '@/components/blocks/Explorer';
import LinkCardGrid from '@/components/blocks/LinkCardGrid';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { industriesOverview as c } from '../content/overview';

/** 04.00 · Industries Overview (Figma 48:287759). */
export default function IndustriesOverviewPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Explorer {...c.explorer} />
      <LinkCardGrid {...c.directory} />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
