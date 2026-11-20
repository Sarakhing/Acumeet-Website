import { useId, useRef } from 'react';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import AccentTitle from '@/components/ui/AccentTitle';
import AutoAdvanceTimer from '@/components/ui/AutoAdvanceTimer';
import useAutoAdvance from '@/hooks/useAutoAdvance';
import { cn } from '@/utils/cn';
import VisualPanel from './VisualPanel';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Stepper" + "✓ Stepper · …" (Connect "From Conversation to
 * Coordinated Action"): 4-step track (bar + numbered dot + label), then a big
 * light "01" number, title, body and a 664×420 visual. The active bar fills
 * over `interval` ms then advances; completed steps keep a full bar and a dark
 * dot. Pauses on hover/focus; manual pick or reduced motion stops auto-play.
 *
 * steps: [{ label, title?, body?, tint, pattern: { type, size:'stepper' }, visual }]
 *   Products pages: `label` can be a full sentence (multi-line tab) and `body` omitted —
 *   the panel then shows the number + title only (Meeting Capture "Why … Matters").
 * accentBreak (default true) puts the accent on its own line; false keeps it inline.
 */
export default function Stepper({
  eyebrow,
  title,
  accent,
  accentBreak = true,
  steps = [],
  interval = 6000,
  tone = 'subtle',
  className,
}) {
  const auto = useAutoAdvance(steps.length, { interval });
  const baseId = useId();
  const tabRefs = useRef([]);
  const step = steps[auto.index];
  // Sentence-length labels with no body (Meeting Capture): the panel title repeats
  // the label, so below md the track shows numbers only (labels stay for screen readers).
  const numbersOnMobile = steps.length > 0 && steps.every((s) => !s.body);

  const onKeyDown = (e) => {
    const n = steps.length;
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

  return (
    <section
      className={cn(
        tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted',
        'py-16 lg:py-[120px]',
        className,
      )}
    >
      <Container
        width="wide"
        className="flex flex-col gap-10"
        {...auto.hoverProps}
        {...auto.focusProps}
      >
        {(eyebrow || title) && (
          <div className="flex flex-col gap-4">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <AccentTitle
                accent={accent}
                accentBreak={accentBreak}
                className="max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] lg:text-display-section"
              >
                {title}
              </AccentTitle>
            )}
          </div>
        )}
        <div
          role="tablist"
          aria-label="Steps"
          onKeyDown={onKeyDown}
          className={cn(
            'grid gap-4 md:grid-cols-4',
            numbersOnMobile ? 'grid-cols-4 gap-2' : 'grid-cols-2',
          )}
        >
          {steps.map((s, i) => {
            const on = i === auto.index;
            const done = i < auto.index;
            return (
              <button
                key={s.label}
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
                className="flex flex-col gap-3 pt-5 text-left"
              >
                <span className="relative block h-[3px] w-full overflow-hidden rounded-[2px] bg-border-muted">
                  {on && auto.enabled ? (
                    <AutoAdvanceTimer
                      key={auto.index}
                      visible
                      duration={interval}
                      paused={auto.paused}
                      onDone={auto.next}
                      className="h-full w-full bg-brand-magenta"
                    />
                  ) : (
                    (on || done) && <span className="block h-full w-full bg-brand-magenta" />
                  )}
                </span>
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-[14px] font-mono text-[12px] font-medium leading-[1.5] tracking-[0.48px]',
                      on && 'bg-brand-magenta text-ink-on-dark',
                      done && 'bg-ink-800 text-ink-on-dark',
                      !on && !done && 'border border-border-muted bg-surface-white text-ink-500',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={cn(
                      'max-w-[260px] text-[15px] font-medium leading-[1.5]',
                      on ? 'text-ink-800' : 'text-ink-500',
                      numbersOnMobile && 'max-md:sr-only',
                    )}
                  >
                    {s.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {step && (
          <div
            key={auto.index}
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${auto.index}`}
            className="flex animate-fade-up flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
          >
            <div className="flex flex-col gap-4 lg:w-[560px] lg:shrink-0">
              <p
                aria-hidden="true"
                className="text-[64px] font-light leading-[0.9] tracking-[-2.5px] text-brand-magenta sm:text-[96px] sm:tracking-[-3.84px]"
              >
                {pad(auto.index + 1)}
              </p>
              <h3 className="text-[28px] font-medium leading-[1.12] tracking-[-0.68px] text-ink-800 sm:text-[34px]">
                {step.title ?? step.label}
              </h3>
              {step.body && (
                <p className="max-w-[540px] text-[17px] leading-[1.35] tracking-[-0.18px] text-ink-700 sm:text-[18px]">
                  {step.body}
                </p>
              )}
            </div>
            <div className="min-w-0 lg:flex-1">
              <VisualPanel width={664} height={420} tint={step.tint} pattern={step.pattern}>
                {step.visual}
              </VisualPanel>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
