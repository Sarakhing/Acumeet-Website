import { useId, useState } from 'react';
import Container from '@/components/ui/Container';
import FeatureSplit from '@/modules/03-products/components/FeatureSplit';

const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;

function Field({ label, value, min, max, step = 1, onChange }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] text-ink-700">
        {label}
      </label>
      <div className="flex h-11 items-center gap-4 rounded-[12px] border border-border-muted bg-[#fafafb] px-3">
        <output htmlFor={id} className="w-12 text-[15px] font-medium text-ink-900">
          {value}
        </output>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="min-w-0 flex-1 cursor-pointer accent-[#9e0059] sm:ml-auto sm:max-w-[200px]"
        />
      </div>
    </div>
  );
}

/* Faint white rings in the estimate card's lower right. */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 300"
      fill="none"
      className="pointer-events-none absolute -bottom-16 -right-16 size-[300px]"
    >
      {[16, 34, 52, 70, 88, 106, 124, 142].map((r) => (
        <circle key={r} cx="150" cy="150" r={r} stroke="#ffffff" strokeOpacity="0.1" />
      ))}
    </svg>
  );
}

/**
 * Figma "Index · 61 hrs" + the two result Splits (13.11): three sliders — meetings per week, minutes on
 * notes and follow-up per meeting, the note-taker's hourly cost — drive a night "Your estimate" card
 * (hours lost each month) and two splits with the monthly and yearly cost. Defaults reproduce Figma
 * (24 · 35 · 45 → 61 hrs, $2,730, $32,760).
 * results: [{ label, visual, tint, pattern }, { … }] — month first, then year.
 */
export default function ProductivityCalculator({ id, fields, results = [] }) {
  const [meetings, setMeetings] = useState(fields.meetings.value);
  const [minutes, setMinutes] = useState(fields.minutes.value);
  const [rate, setRate] = useState(fields.rate.value);

  const hoursPerMonth = ((meetings * minutes) / 60) * (52 / 12);
  const perMonth = hoursPerMonth * rate;
  const perYear = ((meetings * minutes) / 60) * 52 * rate;
  const values = [perMonth, perYear];

  return (
    <>
      <section id={id} className="scroll-mt-20 bg-surface-muted py-16 lg:py-28">
        <Container
          width="wide"
          className="grid gap-4 lg:grid-cols-[minmax(0,1.42fr)_minmax(0,1fr)] lg:gap-6"
        >
          <div className="flex flex-col gap-[18px] rounded-[28px] border border-border-muted bg-surface-white p-6 sm:p-9 lg:min-h-[400px]">
            <h2 className="text-[20px] font-medium text-ink-900">Your meetings</h2>
            <Field
              label={fields.meetings.label}
              {...fields.meetings}
              value={meetings}
              onChange={setMeetings}
            />
            <Field
              label={fields.minutes.label}
              {...fields.minutes}
              value={minutes}
              onChange={setMinutes}
            />
            <Field label={fields.rate.label} {...fields.rate} value={rate} onChange={setRate} />
          </div>
          <div
            className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[28px] bg-[#0b0b0f] p-6 sm:p-9 lg:min-h-[400px]"
            aria-live="polite"
          >
            <Rings />
            <p className="font-mono text-[12px] text-[#8e8ea0]">Your estimate</p>
            <p className="relative mt-6 text-[56px] font-light leading-none tracking-[-2px] text-ink-on-dark sm:text-[64px]">
              {Math.round(hoursPerMonth)} hrs
            </p>
            <p className="relative mt-6 text-[15px] text-ink-on-dark-muted">
              Hours lost to notes each month
            </p>
          </div>
        </Container>
      </section>
      {results.map((r, i) => (
        <FeatureSplit
          key={r.label}
          size="standard"
          reverse={i === 0}
          title={money(values[i])}
          bullets={[{ text: r.label }]}
          bulletStyle="dot"
          visual={{ tint: r.tint, pattern: r.pattern, content: r.visual }}
        />
      ))}
    </>
  );
}
