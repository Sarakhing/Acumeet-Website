import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "03 · EMI Approach" Head + Flow (46:20866 / 46:20869): night section
 * with a rings pattern, a centred mono eyebrow + 48px title (accent phrase in
 * the light pink→blue gradient), then numbered steps joined by a magenta→blue
 * line; the last node is filled magenta (the outcome). Horizontal on lg, a
 * vertical timeline below.
 * steps: [{ title, body }]; pattern: { src, width, height } (top-centred)
 */
export default function FlowSteps({ eyebrow, title, accent, steps = [], pattern, className }) {
  return (
    <section className={cn('relative overflow-hidden bg-surface-night py-16 lg:py-32', className)}>
      {pattern && (
        <img
          src={pattern.src}
          alt=""
          aria-hidden="true"
          width={pattern.width}
          height={pattern.height}
          className="pointer-events-none absolute left-1/2 top-0 max-w-none -translate-x-1/2 select-none"
          style={{ width: pattern.width, height: pattern.height }}
        />
      )}
      <Container width="wide" className="relative flex flex-col items-center gap-10 lg:gap-14">
        <div className="flex max-w-[900px] flex-col items-center gap-3.5 text-center">
          {eyebrow && (
            <p className="eyebrow-dark">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[32px] font-medium leading-[1.12] text-ink-on-dark sm:text-[40px] lg:text-[48px]">
            {title}
            {accent && (
              <>
                {' '}
                <span>{accent}</span>
              </>
            )}
          </h2>
        </div>

        <ol className="flex w-full flex-col lg:flex-row">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={step.title} className="flex min-w-0 flex-1 gap-4 lg:flex-col lg:px-3">
                <div className="flex shrink-0 flex-col items-center lg:flex-row">
                  <span
                    className={cn(
                      'flex size-[52px] shrink-0 items-center justify-center rounded-pill border border-white/18 font-mono text-[13px] font-medium leading-normal text-brand-magenta-soft',
                      last ? 'bg-brand-magenta' : 'bg-surface-night-card',
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="w-0.5 flex-1 bg-[linear-gradient(180deg,#9e0059,rgb(0_97_255/0.4))] lg:h-0.5 lg:w-auto lg:bg-[linear-gradient(90deg,#9e0059,rgb(0_97_255/0.4))]"
                    />
                  )}
                </div>
                <div className={cn('mb-4 flex min-w-0 flex-1 flex-col gap-2.5 rounded-[18px] border border-white/8 bg-surface-night-card p-5 lg:mb-0 lg:flex-none', last && 'mb-0')}>
                  <h3 className="text-[19px] font-medium leading-normal text-ink-on-dark">{step.title}</h3>
                  <p className="text-[14px] leading-[1.5] text-ink-on-dark-subtle">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
