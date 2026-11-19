import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Checklist" (Protect "Designed for Sensitive Business Conversations"):
 * heading + 4-column grid of items with a 2px magenta top rule, a large light
 * number, an optional title and body. An item without `title` renders its
 * body as an intro line (16px ink).
 * items: [{ title?, body }]
 */
export default function NumberedGrid({ title, accent, items = [], tone = 'subtle', className }) {
  return (
    <section className={cn(tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted', 'py-16 lg:py-[120px]', className)}>
      <Container width="wide" className="flex flex-col gap-12 lg:gap-20">
        <AccentTitle
          accent={accent}
          accentBreak
          className="max-w-[797px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] lg:text-display-section"
        >
          {title}
        </AccentTitle>
        <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.title ?? item.body} className="flex flex-col gap-3.5 border-t-2 border-brand-magenta pt-6">
              <span className="text-[40px] font-light leading-[1.12] tracking-[-0.8px] text-brand-magenta">{pad(i + 1)}</span>
              {item.title ? (
                <>
                  <h3 className="text-[18px] font-medium leading-[1.35] tracking-[-0.18px] text-ink-800">{item.title}</h3>
                  <p className="text-[15px] leading-[1.5] text-ink-700">{item.body}</p>
                </>
              ) : (
                <p className="text-[16px] leading-[1.5] text-ink-800">{item.body}</p>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
