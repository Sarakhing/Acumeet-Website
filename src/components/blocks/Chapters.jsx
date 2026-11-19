import { useId, useRef } from 'react';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';
import VisualPanel from './VisualPanel';

const pad = (n) => String(n).padStart(2, '0');
const GLOWS = {
  magenta: 'radial-gradient(400px 350px at 340px 250px, rgb(158 0 89 / 0.5) 0%, rgb(92 13 64 / 0.25) 50%, rgb(26 26 38 / 0) 100%)',
  blue: 'radial-gradient(400px 350px at 340px 250px, rgb(0 77 229 / 0.45) 0%, rgb(5 43 124 / 0.22) 50%, rgb(26 26 38 / 0) 100%)',
};

/**
 * Figma "Chapters" + "✓ Chapters · …" (Understand): dark section, pill
 * chapter nav, then "CHAPTER 0N / 0M" copy column (560) + 664×500 dark visual
 * (glow + dark dot grid + mock). Manual by default; pass `interval` (ms) to
 * auto-advance (pauses on hover/focus, off for reduced motion).
 *
 * chapters: [{ tab, title, paragraphs: string[], checks: string[], visual, glow?: magenta|blue }]
 */
export default function Chapters({ title, accent, chapters = [], interval = 0, className }) {
  const auto = useAutoAdvance(chapters.length, { interval });
  const baseId = useId();
  const tabRefs = useRef([]);
  const ch = chapters[auto.index];

  const onKeyDown = (e) => {
    const n = chapters.length;
    const map = { ArrowRight: (auto.index + 1) % n, ArrowLeft: (auto.index - 1 + n) % n, Home: 0, End: n - 1 };
    if (e.key in map) {
      e.preventDefault();
      auto.select(map[e.key]);
      tabRefs.current[map[e.key]]?.focus();
    }
  };

  return (
    <section className={cn('relative bg-surface-night py-16 lg:py-[120px]', className)}>
      <Container width="wide" className="flex flex-col gap-8" {...auto.hoverProps} {...auto.focusProps}>
        {title && (
          <AccentTitle
            accent={accent}
            className="mb-4 max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] [&>span:first-child]:text-ink-on-dark sm:text-[40px] lg:text-display-section"
          >
            {title}
          </AccentTitle>
        )}
        <div
          role="tablist"
          aria-label="Chapters"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
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
                  on ? 'border-transparent bg-surface-white' : 'border-border-night bg-surface-night-chip hover:border-white/30',
                )}
              >
                <span className={cn('font-mono text-[11px] font-medium tracking-[0.44px]', on ? 'text-brand-magenta' : 'text-[#8e8ea0]')}>
                  {pad(i + 1)}
                </span>
                <span className={cn('text-[14px] font-medium', on ? 'text-ink-800' : 'text-ink-on-dark-soft')}>{c.tab}</span>
              </button>
            );
          })}
        </div>

        {ch && (
          <div
            key={auto.index}
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${auto.index}`}
            className="flex animate-fade-up flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
          >
            <div className="flex flex-col gap-4 lg:w-[560px] lg:shrink-0">
              <p className="font-mono text-overline uppercase text-[#8e8ea0]">
                Chapter {pad(auto.index + 1)} / {pad(chapters.length)}
              </p>
              <h3 className="text-[28px] font-medium leading-[1.12] tracking-[-0.76px] text-ink-on-dark sm:text-[38px]">{ch.title}</h3>
              {ch.paragraphs?.map((p) => (
                <p key={p} className="max-w-[540px] text-[16px] leading-[1.5] text-ink-on-dark-muted">
                  {p}
                </p>
              ))}
              {ch.checks?.length > 0 && (
                <ul className="flex flex-col gap-4">
                  {ch.checks.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 leading-[1.5]">
                      <span aria-hidden="true" className="text-[13px] font-medium text-[#12b76a]">
                        ✓
                      </span>
                      <span className="max-w-[520px] text-[15px] text-ink-on-dark-soft">{c}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="min-w-0 lg:flex-1">
              <VisualPanel width={664} height={500} tint="night" glow={GLOWS[ch.glow ?? 'magenta']} pattern={{ type: 'dots', size: 'chapters' }}>
                {ch.visual}
              </VisualPanel>
            </div>
          </div>
        )}
        {auto.enabled && <AutoAdvanceTimer key={auto.index} duration={interval} paused={auto.paused} onDone={auto.next} />}
      </Container>
    </section>
  );
}
