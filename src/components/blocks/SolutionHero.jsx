import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import ScaleToFit from '@/components/ui/ScaleToFit';
import DotGrid from '@/components/patterns/DotGrid';
import Rings from '@/components/patterns/Rings';
import { cn } from '@/utils/cn';

/** Magenta-arrow text link ("Explore Acumeet Security →"). */
function ArrowLink({ to, children, dark }) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-1.5 text-[15px] font-medium leading-[1.5] hover:underline underline-offset-4',
        dark ? 'text-ink-on-dark' : 'text-ink-800',
      )}
    >
      {children}
      <span aria-hidden="true" className={cn('transition-transform group-hover:translate-x-0.5', dark ? 'text-brand-magenta-soft' : 'text-brand-magenta')}>
        →
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* variant="wash" — Figma "Gradient wash" hero (Protect, Control, Govern…) */
/* ------------------------------------------------------------------ */
function WashHero({ eyebrow, title, accent, lead, primary, secondary, visual, visualWidth }) {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      {/* Pattern · glow ×2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(648px 533px at 20% 164px, rgb(204 219 255 / 0.95), rgb(255 255 255 / 0) 100%), radial-gradient(576px 492px at 85% 164px, rgb(252 214 235 / 0.85), rgb(255 255 255 / 0) 100%)',
        }}
      />
      {/* Pattern · dot grid — right 640px, fading towards the copy */}
      <DotGrid fade="left" className="left-auto w-full lg:w-[44.5%]" />

      <Container
        width="wide"
        className="relative flex flex-col gap-12 pb-16 pt-12 sm:pt-16 lg:flex-row lg:items-start lg:gap-5 lg:pb-[111px] lg:pt-16"
      >
        <div className="flex max-w-[600px] flex-col gap-[22px] lg:mt-[76px] lg:w-[600px] lg:shrink-0">
          {eyebrow && (
            <p className="font-mono text-overline font-medium tracking-[0.44px] text-brand-magenta uppercase">{eyebrow}</p>
          )}
          <AccentTitle
            as="h1"
            accent={accent}
            className="text-[38px] font-medium leading-[1.04] tracking-[-1.2px] sm:text-[48px] lg:text-display-hero"
          >
            {title}
          </AccentTitle>
          {lead && <p className="max-w-[560px] text-[17px] leading-[1.35] tracking-[-0.18px] text-ink-700 sm:text-[18px]">{lead}</p>}
          {(primary || secondary) && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {primary && <Button to={primary.to}>{primary.label}</Button>}
              {secondary && <ArrowLink to={secondary.to}>{secondary.label}</ArrowLink>}
            </div>
          )}
        </div>
        {visual && (
          <div className="min-w-0 flex-1">
            <ScaleToFit width={visualWidth} align="start">
              {visual}
            </ScaleToFit>
          </div>
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* variant="rings" — Figma "Pattern · rings" dark centred hero (Secure, Connect) */
/* ------------------------------------------------------------------ */
function RingsHero({ eyebrow, title, accent, lead, primary, secondary, children }) {
  return (
    <section className="relative overflow-hidden bg-surface-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px 450px at calc(50% - 320px) 250px, rgb(158 0 89 / 0.55) 0%, rgb(84 5 54 / 0.275) 50%, rgb(10 10 18 / 0) 100%), radial-gradient(550px 450px at calc(50% + 450px) 330px, rgb(0 77 229 / 0.45) 0%, rgb(5 43 124 / 0.225) 50%, rgb(10 10 18 / 0) 100%)',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[200px] h-[900px] w-[1440px] -translate-x-1/2">
        <Rings size="hero" />
      </div>

      <Container width="wide" className="relative flex flex-col items-center gap-6 pt-16 text-center sm:pt-24 lg:gap-7 lg:pt-[120px]">
        {eyebrow && (
          <p className="rounded-pill border border-border-night bg-surface-night-chip px-2.5 py-1 font-mono text-overline font-medium tracking-[0.44px] text-brand-magenta-soft uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-[1000px] text-[38px] font-medium leading-[1.04] tracking-[-1.2px] text-ink-on-dark sm:text-[52px] lg:text-[64px] lg:tracking-[-1.92px]">
          {title}
          {accent && (
            <>
              {' '}
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">{accent}</span>
            </>
          )}
        </h1>
        {lead && (
          <p className="max-w-[700px] text-[17px] leading-[1.35] tracking-[-0.19px] text-ink-on-dark-muted sm:text-[19px]">{lead}</p>
        )}
        {(primary || secondary) && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {primary && <Button to={primary.to}>{primary.label}</Button>}
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center rounded-pill border border-white px-3 py-2 text-[15px] font-medium leading-[1.5] text-ink-on-dark transition-colors hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
        {children && <div className="w-full text-left">{children}</div>}
      </Container>
    </section>
  );
}

/**
 * Solutions hero.
 * variant: 'wash' (light, copy left + `visual` right) | 'rings' (dark, centred, `children` = HeroCarousel)
 * See src/components/blocks/README.md for props.
 */
export default function SolutionHero({ variant = 'wash', visualWidth = 665, ...props }) {
  if (variant === 'rings') return <RingsHero {...props} />;
  return <WashHero visualWidth={visualWidth} {...props} />;
}
