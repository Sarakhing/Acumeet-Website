import { useId, useRef } from 'react';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';
import VisualPanel from './VisualPanel';

const pad = (n) => String(n).padStart(2, '0');
const GLOWS = {
  magenta:
    'radial-gradient(400px 350px at 340px 250px, rgb(158 0 89 / 0.5) 0%, rgb(92 13 64 / 0.25) 50%, rgb(26 26 38 / 0) 100%)',
  blue: 'radial-gradient(400px 350px at 340px 250px, rgb(0 77 229 / 0.45) 0%, rgb(5 43 124 / 0.22) 50%, rgb(26 26 38 / 0) 100%)',
};

const TONES = {
  dark: {
    section: 'bg-surface-night',
    heading: 'text-ink-on-dark!',
    title: 'text-ink-on-dark',
    body: 'text-ink-on-dark-muted',
    check: 'text-[#12b76a]',
    checkText: 'text-ink-on-dark-soft',
  },
  // Understand page instance (46:19376): light section, magenta ticks.
  light: {
    section: 'bg-surface-muted',
    heading: '',
    title: 'text-[#292d32]',
    body: 'text-ink-700',
    check: 'text-brand-magenta',
    checkText: 'text-[#707070]',
  },
};

/** Copy column + visual of one chapter (Figma "Body"). */
function ChapterBody({ ch, index, count, tone, showCounter, as: Heading = 'h3' }) {
  const t = TONES[tone] ?? TONES.dark;
  const panel = ch.panel ?? {};
  return (
    <>
      <div className="flex flex-col gap-4 lg:w-[560px] lg:shrink-0">
        {showCounter && (
          <p className="eyebrow-dark">
            Chapter {pad(index + 1)} / {pad(count)}
          </p>
        )}
        <Heading
          className={cn(
            'text-[28px] font-medium leading-[1.12] tracking-[-0.76px] sm:text-[38px]',
            t.title,
          )}
        >
          {ch.title}
        </Heading>
        {ch.paragraphs?.map((p) => (
          <p key={p} className={cn('max-w-[540px] text-[16px] leading-[1.5]', t.body)}>
            {p}
          </p>
        ))}
        {ch.checks?.length > 0 && (
          <ul className="flex flex-col gap-4">
            {ch.checks.map((c) => (
              <li key={c} className="flex items-start gap-2.5 leading-[1.5]">
                <span aria-hidden="true" className={cn('text-[13px] font-medium', t.check)}>
                  ✓
                </span>
                <span className={cn('max-w-[520px] text-[15px]', t.checkText)}>{c}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="min-w-0 lg:flex-1">
        <VisualPanel
          width={panel.width ?? 664}
          height={panel.height ?? 500}
          tint={panel.tint ?? 'night'}
          glow={'glow' in panel ? panel.glow : GLOWS[ch.glow ?? 'magenta']}
          pattern={panel.pattern ?? { type: 'dots', size: 'chapters' }}
        >
          {ch.visual}
        </VisualPanel>
      </div>
    </>
  );
}

/**
 * Figma "Chapters" + "✓ Chapters · …" (Understand 46:21861, Connect 46:19702):
 * pill chapter nav, then "CHAPTER 0N / 0M" copy column (560) + 664×500 dark
 * visual (glow + dark dot grid + mock). Manual by default; pass `interval` (ms)
 * to auto-advance (pauses on hover/focus, off for reduced motion).
 *
 * On the real pages Figma hides the nav and the counter and shows a single
 * chapter as a static row (no tabs): pass one chapter, or `showNav={false}`.
 *
 * tone: 'dark' (default, night section, green ticks) | 'light' (Understand
 *   46:19376: #fafafb section, dark text, magenta ticks).
 * chapters: [{ tab, title, paragraphs: string[], checks: string[], visual,
 *   glow?: magenta|blue, panel?: { width, height, tint, pattern, glow } }]
 *   `panel` overrides the default 664×500 night/dots/glow VisualPanel
 *   (Understand uses { width:656, height:480, tint:'mint', pattern: rings, glow:null }).
 */
export default function Chapters({
  title,
  accent,
  chapters = [],
  interval = 0,
  tone = 'dark',
  showNav = chapters.length > 1,
  showCounter = showNav,
  className,
}) {
  const auto = useAutoAdvance(chapters.length, { interval: showNav ? interval : 0 });
  const baseId = useId();
  const tabRefs = useRef([]);
  const ch = chapters[showNav ? auto.index : 0];
  const t = TONES[tone] ?? TONES.dark;

  const onKeyDown = (e) => {
    const n = chapters.length;
    const map = {
      ArrowRight: (auto.index + 1) % n,
      ArrowLeft: (auto.index - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      auto.select(map[e.key]);
      tabRefs.current[map[e.key]]?.focus();
    }
  };

  const bodyClass = 'flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14';

  return (
    <section className={cn('relative py-16 lg:py-[120px]', t.section, className)}>
      <Container
        width="wide"
        className="flex flex-col gap-8"
        {...(showNav ? { ...auto.hoverProps, ...auto.focusProps } : {})}
      >
        {title && (
          <AccentTitle
            accent={accent}
            className={cn(
              'mb-4 max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] lg:text-display-section',
              t.heading,
            )}
          >
            {title}
          </AccentTitle>
        )}
        {showNav && (
          <div
            role="tablist"
            aria-label="Chapters"
            onKeyDown={onKeyDown}
            className="relative -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {chapters.map((c, i) => {
              const on = i === auto.index;
              return (
                <button
                  key={c.tab}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={on}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => auto.select(i)}
                  className={cn(
                    'flex shrink-0 items-center gap-2 whitespace-nowrap rounded-pill border px-4 py-2.5 leading-[1.5] transition-colors',
                    on
                      ? 'border-transparent bg-surface-white'
                      : 'border-border-night bg-surface-night-chip hover:border-white/30',
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-[11px] font-medium tracking-[0.44px]',
                      on ? 'text-brand-magenta' : 'text-[#8e8ea0]',
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <span
                    className={cn(
                      'text-[14px] font-medium',
                      on ? 'text-ink-800' : 'text-ink-on-dark-soft',
                    )}
                  >
                    {c.tab}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {ch &&
          (showNav ? (
            <div
              key={auto.index}
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${auto.index}`}
              className={cn('animate-fade-up', bodyClass)}
            >
              <ChapterBody
                ch={ch}
                index={auto.index}
                count={chapters.length}
                tone={tone}
                showCounter={showCounter}
              />
            </div>
          ) : (
            <div className={bodyClass}>
              <ChapterBody
                ch={ch}
                index={0}
                count={chapters.length}
                tone={tone}
                showCounter={showCounter}
                as={title ? 'h3' : 'h2'}
              />
            </div>
          ))}
        {showNav && auto.enabled && (
          <AutoAdvanceTimer
            key={auto.index}
            duration={interval}
            paused={auto.paused}
            onDone={auto.next}
          />
        )}
      </Container>
    </section>
  );
}
