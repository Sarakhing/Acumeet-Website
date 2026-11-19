import { useId, useRef } from 'react';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';
import VisualPanel from './VisualPanel';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Tabs explorer" + "✓ Explorer · …" (1280×520): numbered vertical tab
 * list (460) + 780×520 visual panel. The active tab expands to show its body
 * and a magenta progress bar that fills over `interval` ms, then advances.
 * Pauses on hover/focus; manual selection or reduced motion stops auto-play.
 * Below lg the list stacks above the (scaled) panel.
 *
 * items: [{ title, body, tint, pattern: { type, size: 'explorer' }, visual, chip? }]
 *   chip defaults to "NN · title".
 */
export default function Explorer({ title, accent, items = [], interval = 7000, tone = 'subtle', className }) {
  const auto = useAutoAdvance(items.length, { interval });
  const baseId = useId();
  const tabRefs = useRef([]);
  const active = items[auto.index];

  const focusTab = (i) => {
    auto.select(i);
    tabRefs.current[i]?.focus();
  };
  const onKeyDown = (e) => {
    const n = items.length;
    const map = {
      ArrowDown: (auto.index + 1) % n,
      ArrowRight: (auto.index + 1) % n,
      ArrowUp: (auto.index - 1 + n) % n,
      ArrowLeft: (auto.index - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      focusTab(map[e.key]);
    }
  };

  return (
    <section className={cn(tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted', 'py-16 lg:py-[120px]', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        {title && (
          <AccentTitle
            accent={accent}
            className="max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] lg:text-display-section"
          >
            {title}
          </AccentTitle>
        )}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10" {...auto.hoverProps} {...auto.focusProps}>
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={typeof title === 'string' ? title : undefined}
            onKeyDown={onKeyDown}
            className="flex flex-col gap-1 lg:w-[460px] lg:shrink-0"
          >
            {items.map((item, i) => {
              const on = i === auto.index;
              return (
                <div
                  key={item.title}
                  className={cn(
                    'flex flex-col gap-2 rounded-mock px-5 py-[18px] transition-colors duration-300',
                    on
                      ? 'border border-border-muted bg-surface-white shadow-[0_7.2px_9.6px_rgb(11_11_18/0.04),0_1px_1px_rgb(11_11_18/0.02)]'
                      : 'border border-transparent bg-surface-muted hover:bg-surface-white/70',
                  )}
                >
                  <button
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
                    className="flex items-center gap-3 text-left"
                  >
                    <span
                      className={cn(
                        'shrink-0 font-mono text-[12px] font-medium leading-[1.5] tracking-[0.48px]',
                        on ? 'text-brand-magenta' : 'text-ink-500',
                      )}
                    >
                      {pad(i + 1)}
                    </span>
                    <span
                      className={cn(
                        'text-[17px] font-medium leading-[1.35] tracking-[-0.18px] sm:text-[18px] lg:max-w-[360px]',
                        on ? 'text-ink-800' : 'text-ink-700',
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                  {on && (
                    <>
                      <p className="max-w-[388px] text-[15px] leading-[1.5] text-ink-700">{item.body}</p>
                      <div className="relative h-[3px] w-full max-w-[388px] overflow-hidden rounded-[2px] bg-[#efeff4]">
                        {auto.enabled ? (
                          <AutoAdvanceTimer
                            key={auto.index}
                            visible
                            duration={interval}
                            paused={auto.paused}
                            onDone={auto.next}
                            className="h-full w-full rounded-[2px] bg-brand-magenta"
                          />
                        ) : (
                          <span className="block h-full w-full rounded-[2px] bg-brand-magenta" />
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${auto.index}`}
            className="min-w-0 lg:flex-1"
          >
            {active && (
              <VisualPanel
                key={auto.index}
                width={780}
                height={520}
                tint={active.tint}
                pattern={active.pattern}
                chip={active.chip ?? `${pad(auto.index + 1)} · ${active.title}`}
                className="animate-fade-up"
              >
                {active.visual}
              </VisualPanel>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
