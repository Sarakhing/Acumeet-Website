import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import {
  CapturePanel,
  FollowThroughPanel,
  InvitePanel,
  StatusPill,
} from './how-it-works/HowItWorksPanels';
import dot from '@/assets/images/home/hiw-dot.svg';

/**
 * Figma "04 · How it works" (46:8635) driven by the interactive component set
 * "How it works / Interactive" (46:10206): click a step to switch state,
 * auto-advances every 5 s (progress bar under the active step).
 */

const STEP_DURATION = 5000;

const STEPS = [
  {
    id: 'invite',
    label: 'Step 1',
    title: 'Invite',
    body: 'Add Acumeet to any Microsoft Teams, Zoom or Google Meet call.',
    windowTitle: 'New meeting',
    Panel: InvitePanel,
    note: { tone: 'blue', pill: 'Joining', text: 'Acumeet joins at 10:00', position: 'xl:left-[385px] xl:top-[342px]' },
  },
  {
    id: 'capture',
    label: 'Step 2',
    title: 'Capture',
    body: 'Get the transcript, summary and decisions when the call ends.',
    windowTitle: 'Weekly credit review: record',
    Panel: CapturePanel,
    note: { tone: 'green', pill: 'Ready', text: 'Summary sent to 4 attendees', position: 'xl:left-[355px] xl:top-[362px]' },
  },
  {
    id: 'follow-through',
    label: 'Step 3',
    title: 'Follow through',
    body: 'Owners see their actions. Everyone can search the record.',
    windowTitle: 'My actions',
    Panel: FollowThroughPanel,
    note: { tone: 'amber', pill: 'Reminder', text: '1 action due Friday', position: 'xl:left-[401px] xl:top-[333px]' },
  },
];

const KEYFRAMES = `
@keyframes hiw-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes hiw-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
`;

const CARD_SHADOW = 'shadow-[0_18px_40px_-12px_rgba(31,51,120,0.14)]';

// Radial washes from Figma: blue off the top-right edge, magenta off the left edge, on Surface/Subtle.
const BACKGROUND = [
  'radial-gradient(1200px 568px at 108.33% 6.25%, rgba(0,96,255,0.1), rgba(0,96,255,0))',
  'radial-gradient(1029px 505px at -7.14% 16.67%, rgba(158,0,89,0.1), rgba(158,0,89,0))',
].join(', ');

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(callback) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => true,
  );
}

export default function HowItWorksSection() {
  const uid = useId();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const tabRefs = useRef([]);

  // Only run the timer while the stepper is on screen.
  useEffect(() => {
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const autoAdvance = !reducedMotion;
  const running = autoAdvance && inView && !hovered && !focused;

  const goTo = useCallback((index, { focus = false } = {}) => {
    const next = (index + STEPS.length) % STEPS.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }, []);

  const handleKeyDown = (event) => {
    const keyMap = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: STEPS.length - 1,
    };
    if (!(event.key in keyMap)) return;
    event.preventDefault();
    goTo(keyMap[event.key], { focus: true });
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };

  const step = STEPS[active];
  const { Panel, note } = step;

  return (
    <section
      aria-labelledby={`${uid}-heading`}
      className="overflow-hidden bg-surface-subtle py-20 sm:py-24 lg:py-28"
      style={{ backgroundImage: BACKGROUND }}
    >
      <style>{KEYFRAMES}</style>
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <h2
          id={`${uid}-heading`}
          className="max-w-[810px] text-center text-[32px] font-medium leading-[1.12] tracking-[-0.64px] text-ink-900 text-balance sm:text-[40px] sm:tracking-[-0.8px] lg:text-[48px] lg:tracking-[-0.96px]"
        >
          Critical Decisions Shouldn’t Disappear After the Meeting.
        </h2>

        <div
          ref={rootRef}
          className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:min-h-[521px] xl:gap-16"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
        >
          {/* Steps */}
          <div
            role="tablist"
            aria-label="How Acumeet works"
            aria-orientation="vertical"
            className="flex w-full max-w-[640px] flex-col gap-2 lg:w-[46%] lg:max-w-none lg:shrink-0 xl:w-[540px]"
            onKeyDown={handleKeyDown}
          >
            {STEPS.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${uid}-tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls={`${uid}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => goTo(i)}
                  className={cn(
                    'flex w-full cursor-pointer flex-col items-start gap-2 rounded-[22px] border px-5 py-5 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:px-[30px] sm:py-[26px]',
                    selected
                      ? cn('border-border-default bg-surface-white', CARD_SHADOW)
                      : 'border-transparent hover:bg-surface-white/60',
                  )}
                >
                  <span
                    className={cn(
                      'text-eyebrow transition-colors duration-300',
                      selected ? 'text-brand-blue' : 'text-ink-400',
                    )}
                  >
                    {s.label}
                  </span>
                  <span
                    className={cn(
                      'text-[22px] font-medium leading-[1.2] transition-colors duration-300 sm:text-[26px]',
                      selected ? 'text-brand-blue' : 'text-ink-900',
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="text-[16px] leading-[1.55] text-ink-600 sm:text-body-lead">{s.body}</span>
                  {selected && (
                    <span
                      aria-hidden="true"
                      className="block h-[3px] w-full overflow-hidden rounded-[99px] bg-border-subtle"
                    >
                      <span
                        key={active}
                        className="block h-full w-full origin-left bg-brand-blue"
                        style={
                          autoAdvance
                            ? {
                                animation: `hiw-progress ${STEP_DURATION}ms linear forwards`,
                                animationPlayState: running ? 'running' : 'paused',
                              }
                            : undefined
                        }
                        onAnimationEnd={() => goTo(active + 1)}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Product window */}
          <div className="relative mb-6 w-full max-w-[640px] min-w-0 lg:max-w-none lg:flex-1 xl:mb-0">
            <div
              role="tabpanel"
              id={`${uid}-panel`}
              aria-labelledby={`${uid}-tab-${step.id}`}
              className={cn('overflow-hidden rounded-[18px] border border-border-default bg-surface-white', CARD_SHADOW)}
            >
              <div className="flex items-center gap-2 border-b border-border-default px-4 py-3">
                <img src={dot} alt="" width={9} height={9} />
                <img src={dot} alt="" width={9} height={9} />
                <img src={dot} alt="" width={9} height={9} />
                <p className="truncate text-[12px] font-semibold leading-[1.4] text-ink-600">{step.windowTitle}</p>
              </div>
              <div key={step.id} className="motion-safe:animate-[hiw-fade_0.4s_cubic-bezier(0.2,0.7,0.2,1)_both]">
                <Panel />
              </div>
            </div>

            <div
              key={`${step.id}-note`}
              className={cn(
                'absolute -bottom-6 right-3 flex items-center gap-[9px] rounded-[14px] border border-border-default bg-surface-white px-[14px] py-2.5 sm:-right-4 xl:right-auto xl:bottom-auto motion-safe:animate-[hiw-fade_0.5s_0.1s_cubic-bezier(0.2,0.7,0.2,1)_both]',
                CARD_SHADOW,
                note.position,
              )}
            >
              <StatusPill tone={note.tone}>{note.pill}</StatusPill>
              <p className="whitespace-nowrap text-[12.5px] leading-[1.4] text-ink-900">{note.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
