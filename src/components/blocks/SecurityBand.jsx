import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/**
 * Figma "Security band" (46:14132, Solutions overview "04 · Security teaser"):
 * a dark rounded band with a 48px title, lead and CTA on the left and a
 * stack of glassy control rows (24px blue icon, title, one-liner) on the right.
 * Stacks below lg.
 * items: [{ icon (imported SVG), iconWidth, iconHeight, title, body }]
 */
export default function SecurityBand({ title, lead, cta, items = [], className }) {
  return (
    <section className={cn('bg-surface-white pb-16 pt-16 lg:pb-[100px] lg:pt-[112px]', className)}>
      <Container>
        <div className="flex flex-col gap-10 overflow-hidden rounded-[24px] bg-surface-dark p-6 sm:rounded-[32px] sm:p-10 lg:flex-row lg:items-center lg:gap-16 lg:p-16">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[18px]">
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.9px] text-ink-on-dark sm:text-[40px] lg:text-[48px] lg:tracking-[-1.2px]">
              {title}
            </h2>
            {lead && <p className="text-body-lead text-ink-on-dark/78">{lead}</p>}
            {cta && (
              <div className="pt-3">
                <Button to={cta.to}>{cta.label}</Button>
              </div>
            )}
          </div>
          <ul className="flex w-full flex-col gap-2.5 lg:w-[420px] lg:shrink-0">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3.5 rounded-[14px] border border-white/10 bg-white/6 px-[18px] py-4 text-ink-on-dark"
              >
                <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center">
                  <img src={item.icon} alt="" width={item.iconWidth} height={item.iconHeight} style={{ width: item.iconWidth, height: item.iconHeight }} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-[15px] font-semibold leading-[1.4] tracking-[-0.075px]">{item.title}</span>
                  <span className="text-[14.5px] leading-[1.6] opacity-65">{item.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
