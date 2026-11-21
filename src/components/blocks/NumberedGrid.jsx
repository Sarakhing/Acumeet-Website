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
 * size: 'default' | 'compact' (40px title, 40 gap, py-112 — Products 02.07).
 */
export default function NumberedGrid({ title, accent, items = [], tone = 'subtle', size = 'default', className }) {
  // size="compact" (AI Redaction "How AI Redaction Works"): 40px title, 40px gap, py-112.
  const compact = size === 'compact';
  return (
    <section
      className={cn(
        tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted',
        compact ? 'py-16 lg:py-28' : 'py-16 lg:py-[120px]',
        className,
      )}
    >
      <Container width="wide" className={cn('flex flex-col', compact ? 'gap-10' : 'gap-12 lg:gap-20')}>
        <AccentTitle
          accent={accent}
          accentBreak
          className={cn(
            'font-medium leading-[1.12]',
            compact
              ? 'max-w-[880px] text-[30px] tracking-[-0.9px] sm:text-[34px] lg:text-[40px] lg:tracking-[-1.2px]'
              : 'max-w-[797px] text-[32px] tracking-[-1px] sm:text-[40px] lg:text-display-section',
          )}
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
