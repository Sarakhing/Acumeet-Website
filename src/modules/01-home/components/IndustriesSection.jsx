import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import ringsPattern from '@/assets/images/home/industries-rings.svg';
import IndustryAppPreview from './industries/IndustryAppPreview';
import { INDUSTRIES } from './industries/industriesData';

const AUTO_ADVANCE_MS = 6000;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(callback) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );
}

/**
 * Figma "06 · Industries" (46:8640) with "Industries / Interactive"
 * (46:10376): pill tab bar + tinted panel per industry. Auto-advances every
 * 6 s (per the Figma spec) while in view; pauses on hover/focus, stops for
 * good once the visitor picks a tab, and never runs with reduced motion.
 */
export default function IndustriesSection() {
  const baseId = useId();
  const headingId = `${baseId}-heading`;
  const panelId = `${baseId}-panel`;
  const tabId = (id) => `${baseId}-tab-${id}`;

  const sectionRef = useRef(null);
  const tabRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const active = INDUSTRIES[activeIndex];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || paused || !inView || reducedMotion) return undefined;
    const timer = window.setTimeout(
      () => setActiveIndex((i) => (i + 1) % INDUSTRIES.length),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplay, paused, inView, reducedMotion]);

  const select = (index, { focus = false } = {}) => {
    setAutoplay(false);
    setActiveIndex(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (event) => {
    const last = INDUSTRIES.length - 1;
    const next = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next, { focus: true });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="bg-surface-white py-20 sm:py-24 lg:py-[120px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <Container width="wide">
        {/* Head (46:8641) */}
        <div className="flex flex-col gap-[14px]">
          <h2
            id={headingId}
            className="max-w-[900px] text-[30px] leading-[1.12] font-medium tracking-[-0.9px] text-balance text-ink-800 sm:text-[38px] sm:tracking-[-1.1px] lg:text-[48px] lg:tracking-[-1.44px]"
          >
            Meeting intelligence for industries where every decision matters
          </h2>
          <p className="max-w-[820px] text-[16px] leading-[1.5] text-[#4f5566] sm:text-[17px]">
            Acumeet AI helps financial services, banking, insurance and regulated organisations turn critical
            meeting discussions into searchable records, clear decisions and assigned actions, with controls to
            protect sensitive information
          </p>
        </div>

        {/* Tabs (46:10379) — scrolls horizontally on narrow screens */}
        <div className="-mx-(--gutter) mt-8 overflow-x-auto px-(--gutter) pt-1 pb-6 [scrollbar-width:none] lg:mt-10 [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Industries"
            onKeyDown={onTabKeyDown}
            className="inline-flex gap-1 rounded-pill border border-border-default bg-surface-white p-1.5 shadow-[0_14px_32px_-10px_rgb(31_51_120/0.12)]"
          >
            {INDUSTRIES.map((industry, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={industry.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={tabId(industry.id)}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  className={cn(
                    'cursor-pointer rounded-pill px-5 py-3 text-body leading-[1.2] whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:px-6',
                    selected
                      ? 'bg-tint-blue font-semibold text-brand-blue'
                      : 'font-normal text-ink-600 hover:bg-surface-subtle hover:text-ink-900',
                  )}
                >
                  {industry.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Industry panel (46:10388) */}
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabId(active.id)}
          className={cn(
            'relative overflow-hidden rounded-[20px] transition-colors duration-500 sm:rounded-[28px] xl:h-[440px]',
            active.panelBg,
          )}
        >
          <img
            src={ringsPattern}
            alt=""
            aria-hidden="true"
            width={720}
            height={440}
            className="motion-breathe pointer-events-none absolute top-0 right-0 h-[440px] w-[720px] max-w-none [--motion-origin:right_top]"
          />

          <div
            key={active.id}
            className="relative mx-auto flex h-full max-w-[1200px] flex-col gap-8 p-5 motion-safe:animate-fade-up sm:p-8 xl:flex-row xl:items-center xl:gap-14 xl:py-0"
          >
            <div className="flex shrink-0 flex-col items-start gap-4 xl:w-[360px]">
              <h3 className="text-[26px] leading-[1.15] font-medium tracking-[-0.52px] text-ink-900 sm:text-display-3">
                {active.label}
              </h3>
              <p className="max-w-[520px] text-body text-ink-600 sm:text-body-lead">{active.description}</p>
              <div className="pt-4">
                <Button to={active.to}>{active.cta}</Button>
              </div>
            </div>

            <IndustryAppPreview meeting={active.meeting} />
          </div>
        </div>
      </Container>
    </section>
  );
}
