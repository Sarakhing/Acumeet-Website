import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import PillarTabs from '@/components/blocks/PillarTabs';
import FlowSteps from '@/components/blocks/FlowSteps';
import AudienceGrid from '@/components/blocks/AudienceGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { emi as c } from '../content/emi';

/** 03.08 · Enterprise Meeting Intelligence (Figma 46:20684). */
export default function EmiPage() {
  const { hash } = useLocation();
  // The hero's primary CTA jumps to the pillars ("#pillars").
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <PillarTabs id="pillars" items={c.pillars} />
      <FlowSteps {...c.approach} />
      <AudienceGrid {...c.audiences} />
      <Faq title="Frequently Asked Questions" items={c.faq} defaultOpen="all" />
      <RelatedRow cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
