import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import HeroCarousel from '@/components/blocks/HeroCarousel';
import Explorer from '@/components/blocks/Explorer';
import Editorial from '@/components/blocks/Editorial';
import Statement from '@/components/blocks/Statement';
import CardGrid from '@/components/blocks/CardGrid';
import Split from '@/components/blocks/Split';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';
import InfoNote from '@/components/blocks/InfoNote';

const BLOCKS = {
  explorer: Explorer,
  editorial: Editorial,
  statement: Statement,
  cards: CardGrid,
  split: FeatureSplit, // { visual: { tint, pattern, content } } → 656×480 panel
  rawSplit: Split, // pass a ready `visual` node (e.g. a 664×500 night panel)
  note: InfoNote,
};

/**
 * Industries top-level pages (04.13–04.16): breadcrumb → hero (+ optional
 * carousel) → `sections` in Figma order → "Explore Industries" → CTA band.
 * sections: [{ type: keyof BLOCKS, ...props }]
 */
export default function IndustrySectionsPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero}>{c.carousel && <HeroCarousel slides={c.carousel} />}</SolutionHero>
      {c.sections.map(({ type, ...props }, i) => {
        const Block = BLOCKS[type];
        return <Block key={`${type}-${i}`} {...props} />;
      })}
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
