import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import ScaleToFit from '@/components/ui/ScaleToFit';
import DotGrid from '@/components/patterns/DotGrid';
import Rings from '@/components/patterns/Rings';
import Hairlines from '@/components/patterns/Hairlines';
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
      <span
        aria-hidden="true"
        className={cn(
          'transition-transform group-hover:translate-x-0.5',
          dark ? 'text-brand-magenta-soft' : 'text-brand-magenta',
        )}
      >
        →
      </span>
    </Link>
  );
}

/* lg title sizes for the wash hero: 56 (default), 58 (Solutions overview), 54 (EMI). */
const HERO_TITLE_SIZES = {
  hero: 'lg:text-display-hero',
  58: 'lg:text-[58px] lg:tracking-[-1.74px]',
  54: 'lg:text-[54px] lg:tracking-[-1.62px]',
  46: 'lg:text-[46px] lg:tracking-[-1.38px]', // Knowledge Repository (02.10)
};

/* ------------------------------------------------------------------ */
/* variant="wash" — Figma "Gradient wash" hero (Protect, Control, Govern…) */
/* ------------------------------------------------------------------ */
function WashHero({
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  visual,
  visualWidth,
  pattern = 'dots',
  eyebrowStyle = 'plain',
  secondaryStyle = 'link',
  visualAlign = 'start',
  copyTop = 76,
  padBottom = 111,
  copyWidth = 600,
  titleSize = 'hero',
  leadSize = 18,
  leadWidth = 560,
}) {
  const leadClass = cn(
    'text-[17px] leading-[1.35] text-ink-700',
    leadSize === 19 ? 'tracking-[-0.19px] sm:text-[19px]' : 'tracking-[-0.18px] sm:text-[18px]',
  );
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
      {typeof pattern === 'object' && pattern ? (
        /* Custom hairline field { src, width, height } (Solutions overview 720×884) */
        <img
          src={pattern.src}
          alt=""
          aria-hidden="true"
          width={pattern.width}
          height={pattern.height}
          className="pointer-events-none absolute right-0 top-0 max-w-none select-none"
          style={{ width: pattern.width, height: pattern.height }}
        />
      ) : pattern === 'hairlines' ? (
        /* Pattern · hairlines (Control) — right 680×900, clipped by the section */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[900px] w-[680px] max-w-full"
        >
          <Hairlines size="hero" />
        </div>
      ) : (
        /* Pattern · dot grid — right 640px, fading towards the copy */
        <DotGrid fade="left" className="left-auto w-full lg:w-[44.5%]" />
      )}

      <Container
        width="wide"
        className="relative flex flex-col gap-12 pb-16 pt-12 sm:pt-16 lg:flex-row lg:items-start lg:gap-5 lg:pb-(--hero-pb) lg:pt-16"
        style={{ '--hero-copy-top': `${copyTop}px`, '--hero-pb': `${padBottom}px`, '--hero-copy-w': `${copyWidth}px` }}
      >
        <div className="flex max-w-(--hero-copy-w) flex-col gap-[22px] lg:mt-(--hero-copy-top) lg:w-(--hero-copy-w) lg:shrink-0">
          {eyebrow && (
            <p
              className={cn(
                'font-mono text-overline font-medium tracking-[0.44px] text-brand-magenta uppercase',
                eyebrowStyle === 'chip' &&
                  'w-fit rounded-pill border border-border-muted bg-surface-white px-2.5 py-1',
              )}
            >
              {eyebrow}
            </p>
          )}
          <AccentTitle
            as="h1"
            accent={accent}
            className={cn(
              'text-[38px] font-medium leading-[1.04] tracking-[-1.2px] sm:text-[48px]',
              HERO_TITLE_SIZES[titleSize] ?? HERO_TITLE_SIZES.hero,
            )}
          >
            {title}
          </AccentTitle>
          {lead &&
            (Array.isArray(lead) ? (
              <div className="flex flex-col gap-6" style={{ maxWidth: leadWidth }}>
                {lead.map((para) => (
                  <p key={para} className={leadClass}>
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className={leadClass} style={{ maxWidth: leadWidth }}>
                {lead}
              </p>
            ))}
          {(primary || secondary) && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {primary && <Button to={primary.to}>{primary.label}</Button>}
              {secondary &&
                (secondaryStyle === 'button' ? (
                  <Button to={secondary.to} intent="secondary">
                    {secondary.label}
                  </Button>
                ) : (
                  <ArrowLink to={secondary.to}>{secondary.label}</ArrowLink>
                ))}
            </div>
          )}
        </div>
        {visual && (
          <div className="min-w-0 flex-1">
            <ScaleToFit width={visualWidth} align={visualAlign}>
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
function RingsHero({
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  secondaryStyle = 'button',
  children,
}) {
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[200px] h-[900px] w-[1440px] -translate-x-1/2"
      >
        <Rings size="hero" />
      </div>

      <Container
        width="wide"
        className="relative flex flex-col items-center gap-6 pt-16 text-center sm:pt-24 lg:gap-7 lg:pt-[120px]"
      >
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
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h1>
        {lead && (
          <p className="max-w-[700px] text-[17px] leading-[1.35] tracking-[-0.19px] text-ink-on-dark-muted sm:text-[19px]">
            {lead}
          </p>
        )}
        {(primary || secondary) && (
          <div
            className={cn(
              'flex flex-wrap justify-center gap-3',
              secondaryStyle === 'link' ? 'items-start' : 'items-center',
            )}
          >
            {primary && <Button to={primary.to}>{primary.label}</Button>}
            {secondary && secondaryStyle === 'link' && (
              /* Connect "Explore link": white 15px label + white arrow, top-aligned with the button */
              <Link
                to={secondary.to}
                className="group inline-flex items-center gap-1.5 text-[15px] font-medium leading-[1.5] text-ink-on-dark underline-offset-4 hover:underline"
              >
                {secondary.label}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            )}
            {secondary && secondaryStyle !== 'link' && (
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

/* ------------------------------------------------------------------ */
/* variant="centered" — light gradient wash, centred copy, wide visual below (Products 02.07) */
/* ------------------------------------------------------------------ */
function CenteredWashHero({
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  visual,
  visualWidth,
  visualCompact,
  visualCompactWidth = 520,
}) {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      {/* Pattern · glow ×2 (centres at 1440-frame x 288 / 1224, y 180) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(648px 585px at calc(50% - 432px) 180px, rgb(204 219 255 / 0.95), rgb(255 255 255 / 0) 100%), radial-gradient(576px 540px at calc(50% + 504px) 180px, rgb(252 214 235 / 0.85), rgb(255 255 255 / 0) 100%)',
        }}
      />
      {/* Pattern · dot grid — 360px band behind the visual. The `visual` canvas carries ~60px of bottom shadow room (Figma pb 80 = 20 + 60). */}
      <DotGrid fade="edges" className="top-auto bottom-[31px] h-[360px]" />

      <Container
        width="wide"
        className="relative flex flex-col items-center gap-12 pb-8 pt-12 sm:pt-16 lg:gap-16 lg:pb-5 lg:pt-24"
      >
        <div className="flex max-w-[960px] flex-col items-center gap-[22px] text-center">
          {eyebrow && (
            <p className="w-fit rounded-pill border border-border-muted bg-surface-white px-2.5 py-1 font-mono text-overline font-medium tracking-[0.44px] text-brand-magenta uppercase">
              {eyebrow}
            </p>
          )}
          <AccentTitle
            as="h1"
            accent={accent}
            className="text-[38px] font-medium leading-[1.04] tracking-[-1.2px] sm:text-[48px] lg:text-[60px] lg:tracking-[-1.8px]"
          >
            {title}
          </AccentTitle>
          {lead && (
            <p className="max-w-[700px] text-[17px] leading-[1.35] tracking-[-0.18px] text-ink-700 sm:text-[18px]">
              {lead}
            </p>
          )}
          {(primary || secondary) && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {primary && <Button to={primary.to}>{primary.label}</Button>}
              {secondary && (
                <Button to={secondary.to} intent="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {visual && (
          <div className={cn('w-full min-w-0', visualCompact && 'hidden md:block')}>
            <ScaleToFit width={visualWidth} align="center">
              {visual}
            </ScaleToFit>
          </div>
        )}
        {/* Optional simpler composition for phones, where the wide canvas would scale too small */}
        {visualCompact && (
          <div className="w-full min-w-0 md:hidden">
            <ScaleToFit width={visualCompactWidth} align="center">
              {visualCompact}
            </ScaleToFit>
          </div>
        )}
      </Container>
    </section>
  );
}

/**
 * Solutions hero.
 * variant: 'wash' (light, copy left + `visual` right) | 'rings' (dark, centred, `children` = HeroCarousel)
 *   | 'centered' (light wash, centred chip/title/lead/2 buttons, `visual` full width below; AI Redaction 02.07;
 *     optional `visualCompact` / `visualCompactWidth` replace `visual` below md)
 * wash-only options (all optional, defaults = Protect): pattern 'dots' | 'hairlines' (Control),
 *   eyebrowStyle 'plain' | 'chip' (Govern), secondaryStyle 'link' | 'button' (Control),
 *   visualAlign 'start' | 'end', copyTop (lg copy offset, 76), padBottom (lg bottom padding, 111).
 * rings-only option: secondaryStyle 'button' (default, white outlined pill) | 'link' (Connect: white text + →).
 * See src/components/blocks/README.md for props.
 */
export default function SolutionHero({ variant = 'wash', visualWidth = 665, ...props }) {
  if (variant === 'rings') return <RingsHero {...props} />;
  if (variant === 'centered') return <CenteredWashHero visualWidth={visualWidth} {...props} />;
  return <WashHero visualWidth={visualWidth} {...props} />;
}
