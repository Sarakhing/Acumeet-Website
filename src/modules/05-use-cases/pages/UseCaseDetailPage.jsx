import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';

/**
 * Use Cases detail template (05.01–05.13, Figma "05 · Use Cases" 48:305346):
 * breadcrumb → hero (rings + carousel, wash or centred) → challenge split →
 * "How Acumeet Helps" explorer → workflow cards → outcomes split → optional
 * note split → FAQ → "Explore Use Cases" → CTA band. Content: content/<slug>.js
 * (builders in content/detail.js).
 */
export default function UseCaseDetailPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>{c.carousel && <HeroCarousel slides={c.carousel} />}</SolutionHero>
      <FeatureSplit {...c.challenge} />
      <Explorer {...c.explorer} />
      <CardGrid {...c.workflows} />
      <FeatureSplit {...c.outcomes} />
      {c.note && <FeatureSplit {...c.note} />}
      <Faq {...c.faq} />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
