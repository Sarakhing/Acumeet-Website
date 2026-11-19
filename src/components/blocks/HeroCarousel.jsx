import { useId, useRef } from 'react';
import AppWindow from '@/components/ui/AppWindow';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import ScaleToFit from '@/components/ui/ScaleToFit';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';

/**
 * Figma "✓ Hero carousel · …" (900 wide): dark pill tab switcher above an
 * 820px app window whose body swaps per slide. Auto-advances every
 * `interval` ms; pauses on hover/focus; off under reduced motion or after a
 * manual pick. ARIA tabs with ←/→/Home/End.
 *
 * slides: [{ label, content }]  (content = the mock card shown in the window)
 */
export default function HeroCarousel({ slides, interval = 5000, windowWidth = 820, flushBottom = true, className }) {
  const auto = useAutoAdvance(slides.length, { interval });
  const baseId = useId();
  const tabRefs = useRef([]);

  const focusTab = (i) => {
    auto.select(i);
    tabRefs.current[i]?.focus();
  };
  const onKeyDown = (e) => {
    const n = slides.length;
    const map = { ArrowRight: (auto.index + 1) % n, ArrowLeft: (auto.index - 1 + n) % n, Home: 0, End: n - 1 };
    if (e.key in map) {
      e.preventDefault();
      focusTab(map[e.key]);
    }
  };

  return (
    <div
      className={cn('relative mx-auto flex w-full max-w-[900px] flex-col items-center gap-5 pt-6', className)}
      {...auto.hoverProps}
      {...auto.focusProps}
    >
      <div
        role="tablist"
        aria-label="Product preview"
        onKeyDown={onKeyDown}
        className="flex max-w-full gap-2 overflow-x-auto rounded-pill border border-border-night bg-surface-night-chip p-1.5"
      >
        {slides.map((s, i) => {
          const active = i === auto.index;
          return (
            <button
              key={s.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={active}
              aria-controls={`${baseId}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => auto.select(i)}
              className={cn(
                'shrink-0 whitespace-nowrap rounded-pill px-4 py-2 text-[13px] font-medium leading-[1.5] transition-colors duration-300',
                active ? 'bg-surface-white text-ink-800' : 'bg-surface-night-chip text-ink-on-dark-muted hover:text-ink-on-dark',
              )}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${auto.index}`}
        className="w-full"
      >
        <ScaleToFit width={windowWidth}>
          <AppWindow flushBottom={flushBottom} className="w-full">
            <div key={auto.index} className="animate-fade-up">
              {slides[auto.index].content}
            </div>
          </AppWindow>
        </ScaleToFit>
      </div>

      {auto.enabled && (
        <AutoAdvanceTimer key={auto.index} duration={interval} paused={auto.paused} onDone={auto.next} />
      )}
    </div>
  );
}
