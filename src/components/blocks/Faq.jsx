import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Waveform from '@/components/patterns/Waveform';
import { cn } from '@/utils/cn';

function FaqItem({ q, a, open, onToggle }) {
  const id = useId();
  return (
    <div className="border-b border-border-default py-6">
      <h3>
        <button
          type="button"
          className="flex w-full items-center gap-4 text-left"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
        >
          <span className="flex-1 text-heading-4 text-ink-900">{q}</span>
          {open ? (
            <Minus size={20} className="shrink-0 text-brand-blue" />
          ) : (
            <Plus size={20} className="shrink-0 text-brand-blue" />
          )}
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={cn(
          'grid transition-[grid-template-rows] duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-body text-ink-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Figma "FAQ" (24:22059). items: [{ q, a }].
 * defaultOpen: index of the item open on load (default 0, -1 = none) or 'all'
 *   (Solutions pages show every answer expanded). With 'all', items toggle
 *   independently; otherwise it behaves as a single-open accordion.
 * eyebrow: overline above the title (default 'FAQ'; null hides it, as on Control).
 */
export default function Faq({ title = 'Frequently asked questions', eyebrow = 'FAQ', items = [], defaultOpen = 0 }) {
  const multi = defaultOpen === 'all';
  const [open, setOpen] = useState(() =>
    multi ? new Set(items.map((_, i) => i)) : new Set(defaultOpen >= 0 ? [defaultOpen] : []),
  );
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(multi ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  if (!items.length) return null;
  return (
    <section className="bg-surface-white py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="text-[30px] font-medium leading-[1.12] tracking-[-1.2px] text-ink-800 lg:text-heading-xl">
            {title}
          </h2>
          <Waveform bars={30} height={40} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {items.map((item, i) => (
            <FaqItem key={`${i}-${item.q}`} {...item} open={open.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
