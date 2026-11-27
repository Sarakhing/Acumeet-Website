import { useEffect, useId, useRef } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';

/** Per-pillar accent: number/progress/check colour + eyebrow pill fill. */
const ACCENTS = {
  magenta: { text: 'text-brand-magenta', bg: 'bg-brand-magenta', wash: 'bg-panel-pink' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue', wash: 'bg-panel-blue' },
  purple: { text: 'text-accent-purple', bg: 'bg-accent-purple', wash: 'bg-panel-lilac' },
  green: { text: 'text-accent-green', bg: 'bg-accent-green', wash: 'bg-panel-mint' },
  amber: { text: 'text-accent-amber', bg: 'bg-accent-amber', wash: 'bg-panel-amber' },
};

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "EMI pillars" (component 46:29435, Pillar=1…5; used at 46:20847).
 * A 360px numbered tab list next to a white 28px-radius panel: accent arcs
 * (top right), eyebrow pill, 36px title, body, a grey "Key benefits" box with
 * accent check circles, and a CTA. The active tab is a white card whose 3px bar
 * fills over `interval`, then the next pillar shows. Pauses on hover/focus,
 * stops once the user picks a tab, off under reduced motion. ARIA tabs with
 * arrow keys / Home / End. Below lg the tabs become a swipeable row above the panel.
 *
 * items: [{ tab, eyebrow, title, body, benefits[], cta: { label, to },
 *           accent: magenta|blue|purple|green|amber, pattern (imported 880×360 SVG) }]
 */
export default function PillarTabs({ id, items = [], interval = 7000, label = 'Enterprise meeting intelligence pillars', tone = 'subtle', className }) {
  const auto = useAutoAdvance(items.length, { interval });
  const baseId = useId();
  const tabRefs = useRef([]);
  const listRef = useRef(null);
  const active = items[auto.index];
  const accent = ACCENTS[active?.accent] ?? ACCENTS.magenta;

  // Swipe row (below lg): keep the active tab in view as pillars advance, without scrolling the page.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[auto.index];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - list.offsetLeft - 20, behavior: 'smooth' });
  }, [auto.index]);

  const onKeyDown = (e) => {
    const n = items.length;
    const map = {
      ArrowDown: auto.index + 1,
      ArrowRight: auto.index + 1,
      ArrowUp: auto.index - 1,
      ArrowLeft: auto.index - 1,
      Home: 0,
      End: n - 1,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    const i = (map[e.key] + n) % n;
    auto.select(i);
    tabRefs.current[i]?.focus();
  };

  if (!active) return null;

  return (
    <section id={id} className={cn(tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted', 'scroll-mt-nav py-16 lg:py-[112px]', className)}>
      <Container width="wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10" {...auto.hoverProps} {...auto.focusProps}>
          <div
            ref={listRef}
            role="tablist"
            aria-label={label}
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="relative -mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:w-[360px] lg:shrink-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => {
              const on = i === auto.index;
              const a = ACCENTS[item.accent] ?? ACCENTS.magenta;
              return (
                <button
                  key={item.tab}
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
                    'flex shrink-0 flex-col gap-2.5 rounded-mock border px-5 py-[18px] text-left transition-colors duration-300 lg:w-full',
                    on
                      ? 'border-border-muted bg-surface-white shadow-[0_8px_24px_rgb(15_13_38/0.06)]'
                      : 'border-transparent hover:bg-surface-white/70',
                  )}
                >
                  <span className="flex items-center gap-3.5 whitespace-nowrap font-medium leading-normal">
                    <span className={cn('font-mono text-[12px]', on ? a.text : 'text-ink-500')}>{pad(i + 1)}</span>
                    <span className={cn('text-[16px] sm:text-[18px]', on ? 'text-ink-800' : 'text-ink-700')}>{item.tab}</span>
                  </span>
                  {on && (
                    <span className="relative block h-[3px] w-full overflow-hidden rounded-[2px] bg-[#efeff4]">
                      {auto.enabled ? (
                        <AutoAdvanceTimer
                          key={auto.index}
                          visible
                          duration={interval}
                          paused={auto.paused}
                          onDone={auto.next}
                          className={cn('h-full w-full rounded-[2px]', a.bg)}
                        />
                      ) : (
                        <span className={cn('block h-full w-full rounded-[2px]', a.bg)} />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${auto.index}`}
            className="relative min-w-0 overflow-hidden rounded-visual border border-border-muted bg-surface-white lg:h-[687px] lg:flex-1"
          >
            {active.pattern && (
              <img
                src={active.pattern}
                alt=""
                aria-hidden="true"
                width={880}
                height={360}
                className="pointer-events-none absolute right-[-1px] top-[-1px] h-[360px] w-[880px] max-w-none select-none"
              />
            )}
            <div key={auto.index} className="relative flex animate-fade-up flex-col items-start gap-5 p-6 sm:p-10 lg:p-11">
              <p className="eyebrow">
                {active.eyebrow}
              </p>
              <h3 className="text-[28px] font-medium leading-[1.15] text-ink-800 sm:text-[36px]">{active.title}</h3>
              <p className="text-[16px] leading-[1.55] text-ink-700 sm:text-[17px]">{active.body}</p>
              <div className="flex w-full flex-col gap-3.5 rounded-panel bg-surface-muted p-5 sm:p-6">
                <p className="font-mono text-[13px] font-medium leading-normal tracking-[0.52px] text-ink-500">Key Benefits</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {active.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 md:max-w-[360px]">
                      <span
                        aria-hidden="true"
                        className={cn('flex size-[22px] shrink-0 items-center justify-center rounded-pill text-[11px] font-medium leading-normal text-white', accent.bg)}
                      >
                        ✓
                      </span>
                      <span className="min-w-0 flex-1 text-[15px] leading-[1.45] text-ink-800">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {active.cta && (
                <Link
                  to={active.cta.to}
                  className="inline-flex items-center gap-2 rounded-pill bg-brand-blue px-5 py-3 text-[15px] font-medium leading-normal text-ink-on-dark transition-colors hover:bg-[#0052db]"
                >
                  {active.cta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
