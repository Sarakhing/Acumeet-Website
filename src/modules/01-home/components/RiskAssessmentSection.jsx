import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { EXTERNAL } from '@/constants/routes';
import { cn } from '@/utils/cn';

const SCORE = 62;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

// Figma "Score" (46:8666) conic gradient, from 3 o'clock clockwise.
const ARC_STOPS = [
  [0, [255, 186, 0]],
  [7.75, [251, 171, 12]],
  [15.5, [248, 156, 24]],
  [31, [241, 125, 47]],
  [46.5, [234, 94, 71]],
  [62, [227, 64, 94]],
];
const TRACK = '#e5e5eb';

const SIZE = 132;
const STROKE = 14;
const C = SIZE / 2;
const R = C - STROKE / 2;

function colorAt(pct) {
  for (let i = 1; i < ARC_STOPS.length; i += 1) {
    const [p1, c1] = ARC_STOPS[i];
    const [p0, c0] = ARC_STOPS[i - 1];
    if (pct <= p1) {
      const t = (pct - p0) / (p1 - p0);
      return `rgb(${c0.map((v, k) => Math.round(v + (c1[k] - v) * t)).join(' ')})`;
    }
  }
  return `rgb(${ARC_STOPS.at(-1)[1].join(' ')})`;
}

function point(pct) {
  const a = (pct / 100) * Math.PI * 2;
  return `${(C + R * Math.cos(a)).toFixed(3)} ${(C + R * Math.sin(a)).toFixed(3)}`;
}

// SVG has no conic gradients, so the arc is drawn as thin slices, each
// slightly overlapping the next to avoid hairline seams.
const STEP = 0.5;
const SEGMENTS = Array.from({ length: Math.ceil(SCORE / STEP) }, (_, i) => {
  const from = i * STEP;
  const to = Math.min(SCORE, from + STEP + 0.15);
  return { d: `M ${point(from)} A ${R} ${R} 0 0 1 ${point(to)}`, color: colorAt(from + STEP / 2) };
});

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

/** Circular score gauge; the arc fills once when scrolled into view. */
function ScoreGauge({ score = SCORE }) {
  const ref = useRef(null);
  const maskId = `gauge-mask-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const reducedMotion = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const filled = reducedMotion || revealed;

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`Meeting risk score: ${score} out of 100`}
      className="relative size-[132px] shrink-0"
    >
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true" className="block">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={SIZE} height={SIZE}>
            <circle
              cx={C}
              cy={C}
              r={R}
              fill="none"
              stroke="white"
              strokeWidth={STROKE + 2}
              pathLength={100}
              strokeDasharray="100 100"
              strokeDashoffset={filled ? 100 - score : 100}
              style={{
                transition: reducedMotion ? 'none' : 'stroke-dashoffset 1.4s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s',
              }}
            />
          </mask>
        </defs>
        <circle cx={C} cy={C} r={R} fill="none" stroke={TRACK} strokeWidth={STROKE} />
        <g mask={`url(#${maskId})`} fill="none" strokeWidth={STROKE}>
          {SEGMENTS.map((seg) => (
            <path key={seg.d} d={seg.d} stroke={seg.color} />
          ))}
        </g>
      </svg>
      <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-display-2 leading-[1.1] font-medium text-brand-magenta">{score}</span>
        <span className="text-caption text-ink-400">of 100</span>
      </div>
    </div>
  );
}

const PILL_TONES = {
  'Needs work': 'bg-tint-amber text-brand-magenta',
  'At risk': 'bg-tint-magenta text-signal-red',
  Good: 'bg-tint-green text-signal-green',
};

const ROWS = [
  { label: 'Decision traceability', status: 'Needs work' },
  { label: 'Action follow-through', status: 'At risk' },
  { label: 'Meeting records', status: 'Good' },
  { label: 'Access & governance', status: 'Needs work' },
];

/**
 * Figma "06b · Meeting risk assessment" (46:8645): tinted card with copy +
 * CTA on the left and a sample "Meeting risk score" card on the right.
 */
export default function RiskAssessmentSection() {
  const headingId = `${useId()}-risk-heading`;

  return (
    <section aria-labelledby={headingId} className="bg-surface-subtle py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="rounded-[24px] bg-surface-tint p-6 sm:rounded-[32px] sm:p-10 lg:p-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Copy */}
            <div className="flex min-w-0 flex-1 flex-col items-start">
              <p className="eyebrow">Meeting risk assessment</p>
              <h2
                id={headingId}
                className="mt-[14px] max-w-[579px] text-[32px] leading-[1.1] font-medium tracking-[-0.8px] text-balance text-ink-900 sm:text-[40px] sm:tracking-[-1px] lg:text-[48px] lg:tracking-[-1.2px]"
              >
                How secure are your meetings?
              </h2>
              <p className="mt-[18px] text-body text-ink-600 sm:text-body-lead">
                Answer a few questions about how your teams meet, record and follow up. See where decisions,
                actions and sensitive information are most likely to go missing.
              </p>
              <Button
                href={EXTERNAL.riskAssessment}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[38px]"
              >
                Check my risk score
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
              <div className="mt-5 flex w-full flex-col gap-1.5 border-l-2 border-border-default py-1 pl-[18px]">
                <h3 className="text-heading-4 text-ink-900">See where your meetings may be losing accountability</h3>
                <p className="text-body-sm text-ink-600">
                  Take the Meeting Risk Assessment and identify gaps in how decisions, actions and meeting
                  knowledge are captured and managed.
                </p>
              </div>
            </div>

            {/* Risk score card (46:8663) */}
            <div className="w-full shrink-0 rounded-[16px] border border-border-default bg-surface-white p-5 shadow-[0_16px_40px_-12px_rgb(10_10_13/0.12)] sm:p-7 lg:w-[460px]">
              <h3 className="text-heading-4 text-ink-900">Meeting Risk Score</h3>
              <div className="mt-[18px]">
                <ScoreGauge />
              </div>
              <ul className="mt-[22px]">
                {ROWS.map((row, index) => (
                  <li
                    key={row.label}
                    className={cn(
                      'flex items-center justify-between gap-3 py-3',
                      index > 0 && 'border-t border-border-subtle',
                    )}
                  >
                    <span className="min-w-0 flex-1 text-body-sm text-ink-900">{row.label}</span>
                    <span
                      className={cn(
                        'shrink-0 rounded-pill px-2.5 py-1 text-caption whitespace-nowrap',
                        PILL_TONES[row.status],
                      )}
                    >
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
