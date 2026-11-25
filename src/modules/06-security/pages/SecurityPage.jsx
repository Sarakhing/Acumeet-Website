import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import InfoNote from '@/components/blocks/InfoNote';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Chapters from '@/components/blocks/Chapters';
import LinkCardGrid from '@/components/blocks/LinkCardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';

const SECTIONS = {
  info: InfoNote,
  explorer: Explorer,
  cards: CardGrid,
  chapters: Chapters,
  split: FeatureSplit,
  directory: LinkCardGrid,
};

/**
 * Security pages (06.01–06.07, Figma "06 · Security" 48:325158): breadcrumb →
 * hero (+ carousel) → `sections` in Figma order → FAQ → optional "Explore
 * Security" row → CTA band. Section builders live in content/security.js.
 */
export default function SecurityPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>{c.carousel && <HeroCarousel slides={c.carousel} />}</SolutionHero>
      {c.sections.map(({ type, ...props }, i) => {
        const Section = SECTIONS[type];
        return <Section key={i} {...props} />;
      })}
      <Faq {...c.faq} />
      {c.related && <RelatedRow {...c.related} />}
      <CtaBand {...c.cta} />
    </>
  );
}
