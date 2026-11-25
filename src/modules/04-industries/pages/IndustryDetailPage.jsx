import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Explorer from '@/components/blocks/Explorer';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import InfoNote from '../components/InfoNote';

/**
 * Industries detail page (FS sub-pages 04.02–04.12): breadcrumb → hero (wash
 * with a composition, or rings + `carousel`) → tabs explorer → info note →
 * "Explore Industries" row → CTA band. Content lives in content/<slug>.js.
 */
export default function IndustryDetailPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>{c.carousel && <HeroCarousel slides={c.carousel} />}</SolutionHero>
      {c.explorer && <Explorer {...c.explorer} />}
      {c.note && <InfoNote {...c.note} />}
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
