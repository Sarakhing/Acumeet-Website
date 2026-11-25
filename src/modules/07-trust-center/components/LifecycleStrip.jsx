import { Fragment } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import DotGrid from '@/components/patterns/DotGrid';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Index · Control data from collection to deletion" (07.01, 48:337186): 48px
 * title + 17px lead, then a dark 28px-radius strip of numbered stages joined by
 * 40px magenta→blue connectors. `highlight` = index of the magenta stage (Figma: the last).
 * steps: [{ label, caption? }]. Below lg the stages wrap into a 3- / 2-column grid without connectors.
 */
export default function LifecycleStrip({
  title,
  accent,
  lead,
  steps = [],
  highlight = steps.length - 1,
}) {
  return (
    <section className="bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeading title={title} accent={accent} lead={lead} titleSize={48} leadSize="md" />
        <ol className="relative grid grid-cols-2 gap-x-4 gap-y-8 overflow-hidden rounded-visual bg-surface-night p-8 sm:grid-cols-3 lg:flex lg:items-center lg:gap-0 lg:p-10">
          <DotGrid tone="dark" />
          {steps.map((step, i) => (
            <Fragment key={step.label}>
              {i > 0 && (
                <li
                  aria-hidden="true"
                  className="relative hidden h-0.5 w-10 shrink-0 bg-[image:var(--gradient-accent)] lg:block"
                />
              )}
              <li className="relative flex min-w-0 flex-col items-center gap-3 text-center lg:flex-1">
                <span
                  className={cn(
                    'flex size-14 items-center justify-center rounded-pill border border-[#2e2e3c] font-mono text-[13px] text-[#e6b3cf]',
                    i === highlight ? 'bg-brand-magenta' : 'bg-[#1b1b26]',
                  )}
                >
                  {pad(i + 1)}
                </span>
                <span className="text-[17px] font-medium text-white">{step.label}</span>
                {step.caption && <span className="text-[12px] text-[#8e8ea0]">{step.caption}</span>}
              </li>
            </Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}
