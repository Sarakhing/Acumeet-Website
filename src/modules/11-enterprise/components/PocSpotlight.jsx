import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/**
 * Figma "E · PoC spotlight" (11.01, 49:68103): a 32px-radius card with a pink → blue wash —
 * overline, 44px title, 18px lead, a blue button + "Label →" link on the left; on the right a
 * caption and four white numbered step rows (first number magenta, the rest dark).
 */
export default function PocSpotlight({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  caption,
  steps = [],
}) {
  return (
    <section className="bg-surface-white py-16 lg:py-32">
      <Container width="wide">
        <div className="flex flex-col gap-10 rounded-[32px] bg-[linear-gradient(90deg,#fbeef4_0%,#f3f2fa_50%,#edf3ff_100%)] p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-5 lg:w-[520px] lg:shrink-0">
            <p className="eyebrow">
              {eyebrow}
            </p>
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-1px] text-ink-900 sm:text-[44px]">
              {title}
            </h2>
            <p className="text-[18px] leading-[1.5] text-ink-700">{lead}</p>
            <div className="flex flex-wrap items-center gap-3">
              {primary && <Button to={primary.to}>{primary.label}</Button>}
              {secondary && (
                <Link
                  to={secondary.to}
                  className="group inline-flex items-center gap-1.5 px-1.5 py-3 text-[14px] font-medium text-ink-800"
                >
                  {secondary.label}
                  <span
                    aria-hidden="true"
                    className="text-brand-magenta transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {caption && <p className="text-[14px] font-medium text-[#8b90a3]">{caption}</p>}
            <ol className="flex flex-col gap-3">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-[18px] rounded-[18px] border border-border-muted bg-surface-white px-[22px] py-5"
                >
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-full font-mono text-[13px] text-ink-on-dark',
                      i === 0 ? 'bg-brand-magenta' : 'bg-[#0b0b12]',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[18px] font-medium leading-[1.3] text-ink-900">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
