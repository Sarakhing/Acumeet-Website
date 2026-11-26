import { useId, useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/* Faint lilac rings behind the visual panel. */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMaxYMin slice"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {Array.from({ length: 12 }, (_, i) => 50 * (i + 1)).map((r) => (
        <circle key={r} cx="800" cy="0" r={r} stroke="#6b3fd4" strokeOpacity="0.08" />
      ))}
    </svg>
  );
}

/**
 * Figma "D · Start with the resource" + "Dev · Resource accordion" (14.01): 52px title + lead, then an
 * accordion (gradient rule over the open item; title, tagline, body, blue "Open …" button) beside a
 * lilac panel showing the open resource's visual. One item is always open.
 * items: [{ title, tagline, body, cta: { label, to }, visual }].
 */
export default function ResourceAccordion({ title, lead, items = [] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <section className="bg-surface-white py-16 lg:pb-[120px] lg:pt-32">
      <Container width="wide" className="flex flex-col gap-12 lg:gap-14">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-[34px] font-medium leading-[1.12] tracking-[-1px] text-ink-900 sm:text-[44px]">
            {title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink-700">{lead}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col">
            {items.map((it, i) => {
              const on = i === open;
              return (
                <div key={it.title} className="relative border-t border-border-muted last:border-b">
                  {on && (
                    <span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-0.5 w-1/4 bg-[image:var(--gradient-brand)]"
                    />
                  )}
                  <h3>
                    <button
                      type="button"
                      id={`${base}-h-${i}`}
                      aria-expanded={on}
                      aria-controls={`${base}-p-${i}`}
                      onClick={() => setOpen(i)}
                      className={cn(
                        'flex w-full items-center justify-between py-5 text-left text-[22px] font-medium tracking-[-0.4px] transition-colors',
                        on ? 'text-ink-900' : 'text-ink-500 hover:text-ink-800',
                      )}
                    >
                      {it.title}
                      <span aria-hidden="true" className="text-[18px] font-light text-ink-500">
                        {on ? '–' : '+'}
                      </span>
                    </button>
                  </h3>
                  {on && (
                    <div
                      id={`${base}-p-${i}`}
                      role="region"
                      aria-labelledby={`${base}-h-${i}`}
                      className="flex animate-fade-up flex-col items-start gap-4 pb-7"
                    >
                      <p className="text-[15px] font-medium leading-[1.5] text-ink-900">
                        {it.tagline}
                      </p>
                      <p className="text-[14px] leading-[1.6] text-ink-700">{it.body}</p>
                      <Link
                        to={it.cta.to}
                        className="rounded-pill bg-brand-blue px-4 py-2 text-[13px] font-medium text-white hover:bg-[#0050d6]"
                      >
                        {it.cta.label}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px] overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#f6f3fc_0%,#f3eefa_60%,#f2e3f0_100%)] p-6 sm:p-10">
            <Rings />
            <div key={open} className="relative flex w-full animate-fade-up justify-center">
              {items[open]?.visual}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
