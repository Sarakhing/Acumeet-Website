import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ScaleToFit from '@/components/ui/ScaleToFit';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import bullet from '@/assets/images/solutions/dot-blue-6.svg';
import { cn } from '@/utils/cn';

const SLIDE_TINTS = {
  amber: 'bg-tint-amber',
  blue: 'bg-panel-blue',
  pink: 'bg-panel-pink',
  mint: 'bg-panel-mint',
  lilac: 'bg-panel-lilac',
};

/** Scroll distance (px) that advances one slide in the pinned desktop mode. */
const STEP = 420;
/** Pinned (scroll-driven) mode needs room for the 453px row + progress. */
const PIN_QUERY = '(min-width: 1024px) and (min-height: 760px)';

function useMedia(query) {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const pad = (n) => String(n).padStart(2, '0');

function Slide({ slide, i, n, headingId }) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <p className="text-[14px] font-semibold leading-[1.45] text-brand-blue">
          {pad(i + 1)} / {pad(n)}
        </p>
        <h3 id={headingId} className="mt-3.5 text-[28px] font-medium leading-[1.15] tracking-[-0.51px] text-ink-900 sm:text-[34px]">
          {slide.title}
        </h3>
        <p className="mt-3.5 max-w-[520px] text-[16px] leading-[1.45] text-ink-600 sm:text-[17px]">{slide.lead}</p>
        <p className="mt-7 text-[12px] font-semibold uppercase leading-[1.45] tracking-[0.72px] text-ink-900">
          {slide.capturesLabel ?? 'What Acumeet captures'}
        </p>
        <ul className="mt-2.5 w-full">
          {slide.captures.map((c) => (
            <li key={c} className="flex items-center gap-3 border-b border-[#e7e8ee] py-3 text-[15px] leading-[1.45] text-ink-900">
              <img src={bullet} alt="" width={6} height={6} className="size-1.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
        {slide.cta && (
          <Button to={slide.cta.to} className="mt-8" aria-label={`${slide.cta.label}: ${slide.title}`}>
            {slide.cta.label}
          </Button>
        )}
      </div>
      <div className={cn('relative w-full shrink-0 overflow-hidden rounded-tile lg:w-[576px]', SLIDE_TINTS[slide.tint] ?? SLIDE_TINTS.amber)}>
        <div className="flex min-h-[220px] items-center justify-center p-5 sm:p-9 lg:h-[440px]">
          <ScaleToFit width={slide.visualWidth ?? 468}>{slide.visual}</ScaleToFit>
        </div>
      </div>
    </div>
  );
}

/**
 * Figma "03 · By meeting type" header + "Meeting types · scroll area" (46:13442,
 * spec 46:29753): N slides (copy + "what Acumeet captures" list + tinted
 * visual) driven by scrolling, with a segmented progress bar (segments up to
 * and including the current slide are blue, as in the spec).
 *
 * - lg and tall viewports: the stage pins under the nav and page scroll moves
 *   through the slides (STEP px each). Segments are tabs: click/arrow keys
 *   scroll to that slide.
 * - Smaller screens: a native horizontal scroll-snap row (swipe); segments
 *   track and set the scroll position.
 * Nothing auto-advances; smooth scrolling is off under reduced motion.
 *
 * slides: [{ title, lead, captures[], capturesLabel?, cta: { label, to }, tint: amber|blue|pink|mint, visual, visualWidth? }]
 */
export default function ScrollSlides({ title, accent, titleTo, lead, slides = [], className }) {
  const n = slides.length;
  const pinned = useMedia(PIN_QUERY);
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const rowRef = useRef(null);
  const tabRefs = useRef([]);
  const baseId = useId();

  /* Pinned mode: derive the slide from the scroll position. */
  useEffect(() => {
    if (!pinned) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current;
      if (!track) return;
      const navH = parseFloat(getComputedStyle(track).getPropertyValue('--pin-top')) || 0;
      const p = Math.max(0, (navH - track.getBoundingClientRect().top) / STEP);
      const i = Math.min(n - 1, Math.floor(p));
      setIndex(i);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pinned, n]);

  /* Swipe mode: the scroll-snap row decides the slide. */
  const onRowScroll = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    setIndex(Math.max(0, Math.min(n - 1, Math.round(row.scrollLeft / row.clientWidth))));
  }, [n]);

  const goTo = (i) => {
    const behavior = reduced ? 'auto' : 'smooth';
    if (pinned) {
      const track = trackRef.current;
      const navH = parseFloat(getComputedStyle(track).getPropertyValue('--pin-top')) || 0;
      const top = window.scrollY + track.getBoundingClientRect().top - navH + i * STEP + 1;
      window.scrollTo({ top, behavior });
    } else {
      rowRef.current?.scrollTo({ left: i * rowRef.current.clientWidth, behavior });
    }
    setIndex(i);
  };

  const onKeyDown = (e) => {
    const map = { ArrowRight: index + 1, ArrowDown: index + 1, ArrowLeft: index - 1, ArrowUp: index - 1, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const i = (map[e.key] + n) % n;
    goTo(i);
    tabRefs.current[i]?.focus();
  };

  const progress = (
    <div role="tablist" aria-label="Meeting types" onKeyDown={onKeyDown} className="flex gap-1.5">
      {slides.map((s, i) => {
        const on = i === index;
        return (
          <button
            key={s.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={on}
            aria-controls={pinned ? `${baseId}-panel` : `${baseId}-slide-${i}`}
            aria-label={s.title}
            tabIndex={on ? 0 : -1}
            onClick={() => goTo(i)}
            className="group flex min-w-0 flex-1 py-2"
          >
            <span className="relative h-1 w-full overflow-hidden rounded-[2px] bg-[#e7e8ee] transition-colors group-hover:bg-ink-300">
              <span
                className={cn(
                  'absolute inset-0 origin-left rounded-[2px] bg-brand-blue transition-transform duration-300',
                  i <= index ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <section className={cn('bg-surface-white', className)}>
      <Container className="flex flex-col items-center pt-16 text-center lg:pt-[132px]">
        <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-1px] text-ink-900 sm:text-[40px] lg:text-[48px] lg:tracking-[-1.2px]">
          {titleTo ? (
            <Link to={titleTo} className="underline-offset-4 hover:underline">
              {title} {accent && <span className="text-[#292d32]">{accent}</span>}
            </Link>
          ) : (
            <>
              {title} {accent && <span className="text-[#292d32]">{accent}</span>}
            </>
          )}
        </h2>
        {lead && <p className="mt-4 max-w-[620px] text-[17px] leading-[1.45] text-ink-600 sm:text-[18px]">{lead}</p>}
      </Container>

      {pinned ? (
        <div
          ref={trackRef}
          className="relative [--pin-top:var(--spacing-nav)]"
          style={{ height: `calc(100vh - var(--spacing-nav) + ${(n - 1) * STEP}px)` }}
        >
          <div className="sticky top-(--pin-top) flex h-[calc(100vh-var(--spacing-nav))] items-center">
            <Container className="flex flex-col gap-10">
              <div
                id={`${baseId}-panel`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${index}`}
                aria-live="polite"
                className="h-[453px]"
              >
                <div key={index} className="h-full animate-fade-up">
                  <Slide slide={slides[index]} i={index} n={n} />
                </div>
              </div>
              {progress}
            </Container>
          </div>
        </div>
      ) : (
        <Container className="flex flex-col gap-8 pb-16 pt-12">
          <div
            ref={rowRef}
            onScroll={onRowScroll}
            className="relative -mx-5 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] sm:-mx-8 [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((s, i) => (
              <div
                key={s.title}
                id={`${baseId}-slide-${i}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}: ${s.title}`}
                className="w-full shrink-0 snap-start px-5 sm:px-8"
              >
                <Slide slide={s} i={i} n={n} />
              </div>
            ))}
          </div>
          {progress}
        </Container>
      )}
    </section>
  );
}
