import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Explorer from '@/components/blocks/Explorer';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Editorial from '@/components/blocks/Editorial';
import LinkCardGrid from '@/components/blocks/LinkCardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';
import UseCaseGrid from '../components/UseCaseGrid';
import c from '../content/overview';

/*
 * Figma "Pattern · rings" on the 05.00 "Connect" panel (48:308606): ten centred
 * circles, radius 30 → 300 (30px pitch). Drawn as a repeating radial gradient,
 * with the panel colour painted over everything beyond r = 300.
 */
const CENTRED_RINGS = [
  'radial-gradient(circle at 50% 50%, transparent 300.5px, var(--color-panel-mint) 301px)',
  // 30px period, a 1px line straddling every multiple of 30
  'repeating-radial-gradient(circle at 50% 50%, rgb(158 0 89 / 0.14) 0 0.5px, transparent 0.5px 29.5px, rgb(158 0 89 / 0.14) 29.5px 30px)',
].join(', ');

/** 05.00 · Use Cases Overview (Figma 48:308252). */
export default function UseCasesOverviewPage() {
  const { panel, ...connect } = c.connect;
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <UseCaseGrid {...c.grid} />
      <Explorer {...c.explorer} />
      <Split
        {...connect}
        visual={
          <VisualPanel tint="mint" glow={CENTRED_RINGS}>
            {panel}
          </VisualPanel>
        }
      />
      <Editorial {...c.continuity} />
      <FeatureSplit {...c.security} />
      <LinkCardGrid {...c.directory} />
      <Faq {...c.faq} />
      <RelatedRow {...c.related} />
      <CtaBand {...c.cta} />
    </>
  );
}
