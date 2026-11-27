import { HERO_WASH } from '@/components/blocks/heroWash';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ScaleToFit from '@/components/ui/ScaleToFit';
import heroDots from '@/assets/images/products/overview-hero-dot-grid-1410x398.svg';
import ProductsOverviewHeroVisual, {
  ProductsOverviewHeroVisualCompact,
} from './visuals/ProductsOverviewHeroVisual';

/**
 * Figma "01 · Hero" (46:30446, 990 tall): the site's soft hero wash (HERO_WASH), a dark dot field across the lower part, centred
 * copy (chip, 64px title, 19px lead, two buttons) and the floating product
 * composition. Glow centres are expressed relative to the page centre so they
 * stay put on wider/narrower screens.
 */


export default function ProductsOverviewHero({ chip, title, lead, primary, secondary }) {
  return (
    <section
      aria-labelledby="products-hero-title"
      className="relative overflow-hidden pb-14 pt-14 sm:pb-16 lg:pb-[50px] lg:pt-24"
      style={{ background: HERO_WASH }}
    >
      <img
        src={heroDots}
        alt=""
        aria-hidden="true"
        width={1410}
        height={398}
        className="motion-pan pointer-events-none absolute bottom-[-59px] left-1/2 h-[398px] w-[1410px] max-w-none -translate-x-1/2 select-none"
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <p className="eyebrow">
            {chip}
          </p>
          <h1
            id="products-hero-title"
            className="text-[38px] font-medium leading-[1.06] tracking-[-1.1px] text-ink-800 text-balance sm:text-[52px] sm:tracking-[-1.56px] lg:text-[64px] lg:leading-[1.04] lg:tracking-[-1.92px]"
          >
            {title}
          </h1>
          <p className="max-w-[660px] text-[17px] leading-[1.45] tracking-[-0.17px] text-ink-700 sm:text-[19px] sm:leading-[1.35] sm:tracking-[-0.19px]">
            {lead}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to={primary.to}>{primary.label}</Button>
            <Button href={secondary.href} intent="secondary" className="bg-transparent">
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>

      {/* Full composition from sm up (scaled), summary + Atlas prompt on phones. */}
      <div className="relative mx-auto mt-12 hidden w-full max-w-[calc(1248px+2*var(--gutter))] px-(--gutter) sm:block lg:mt-[72px]">
        <ScaleToFit width={1248}>
          <ProductsOverviewHeroVisual />
        </ScaleToFit>
      </div>
      <div className="relative mx-auto mt-10 w-full px-5 sm:hidden">
        <ScaleToFit width={500}>
          <ProductsOverviewHeroVisualCompact />
        </ScaleToFit>
      </div>
    </section>
  );
}
