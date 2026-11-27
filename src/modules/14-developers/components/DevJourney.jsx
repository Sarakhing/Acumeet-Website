import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/**
 * Figma "D · Developer journey" (14.01): on #f7f7f9 with faint rings, an overline + 44px title, then
 * five white step cards (mono number disc, "→" — the last card a dark disc and green "✓").
 */
export default function DevJourney({ eyebrow, title, steps = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f9] py-16 lg:py-[120px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {Array.from({ length: 12 }, (_, i) => 60 * (i + 1)).map((r) => (
          <circle key={r} cx="1440" cy="0" r={r} stroke="#0b0b12" strokeOpacity="0.04" />
        ))}
      </svg>
      <Container width="wide" className="relative flex flex-col gap-12 lg:gap-14">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">
            {eyebrow}
          </p>
          <h2 className="text-[34px] font-medium tracking-[-1px] text-ink-900 sm:text-[44px]">
            {title}
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={s}
                className="flex flex-col gap-8 rounded-[18px] border border-border-muted bg-surface-white p-5 lg:min-h-[218px]"
              >
                <span className="flex items-center justify-between">
                  <span
                    className={cn(
                      'flex size-9 items-center justify-center rounded-full font-mono text-[11px]',
                      last
                        ? 'bg-[#0b0b12] text-white'
                        : 'border border-[#f2d6e3] text-brand-magenta',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className={last ? 'text-[16px] text-[#0e8a5f]' : 'text-ink-500'}
                  >
                    {last ? '✓' : '→'}
                  </span>
                </span>
                <span className="text-[14.5px] leading-[1.5] text-ink-900">{s}</span>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
