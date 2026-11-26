import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import InfoNote from '@/components/blocks/InfoNote';
import Explorer from '@/components/blocks/Explorer';
import CardGrid from '@/components/blocks/CardGrid';
import Chapters from '@/components/blocks/Chapters';
import LinkCardGrid from '@/components/blocks/LinkCardGrid';
import Statement from '@/components/blocks/Statement';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';

/** Section types every BlockPage understands; modules add their own via `sections`. */
const BASE_SECTIONS = {
  info: InfoNote,
  explorer: Explorer,
  cards: CardGrid,
  chapters: Chapters,
  split: FeatureSplit,
  directory: LinkCardGrid,
  statement: Statement,
};

/**
 * Data-driven page (Security 06.x, Trust Center 07.x): breadcrumb → hero (+ carousel) →
 * `content.sections: [{ type, ...props }]` in Figma order → optional FAQ → optional
 * related row → CTA band. `hero` is optional (Pricing 16.01 / 16.03 open on a section).
 * `sections` maps extra type names to module components;
 * `subnav` renders between the breadcrumb and the hero (Enterprise tabs).
 */
export default function BlockPage({ content: c, sections = {}, subnav }) {
  const registry = { ...BASE_SECTIONS, ...sections };
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      {subnav}
      {c.hero && (
        <SolutionHero {...c.hero}>{c.carousel && <HeroCarousel slides={c.carousel} />}</SolutionHero>
      )}
      {c.sections.map(({ type, ...props }, i) => {
        const Section = registry[type];
        return <Section key={i} {...props} />;
      })}
      {c.faq && <Faq {...c.faq} />}
      {c.related && <RelatedRow {...c.related} />}
      <CtaBand {...c.cta} />
    </>
  );
}
