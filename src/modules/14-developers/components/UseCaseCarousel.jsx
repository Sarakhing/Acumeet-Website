import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { Method } from './code';

const TINTS = ['#f4f1fa', '#eef4ff', '#fdf0f6', '#f1faf5', '#fff8e8', '#f6f6f8'];

/* Faint rings at each card's lower left. */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 346 412"
      preserveAspectRatio="xMinYMax slice"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {Array.from({ length: 10 }, (_, i) => 40 * (i + 1)).map((r) => (
        <circle key={r} cx="0" cy="412" r={r} stroke="#0b0b12" strokeOpacity="0.04" />
      ))}
    </svg>
  );
}

/**
 * Figma "D · Use cases" + "Dev · Use-case carousel" (14.01): overline, 44px title, lead and ← / →
 * buttons; a horizontally scrolling row of 346×412 tinted cards (method pill + path, 20px
 * description, a small visual at the bottom) and a progress rail. Scroll-snap on touch; the buttons
 * move one card at a time.
 * items: [{ method, path, title, visual }].
 */
export default function UseCaseCarousel({ eyebrow, title, lead, items = [] }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const [end, setEnd] = useState(false);

  const go = (dir) => {
    const t = track.current;
    if (!t) return;
    const card = t.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : 360;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  const onScroll = () => {
    const t = track.current;
    const card = t?.firstElementChild;
    if (!t || !card) return;
    setIndex(Math.round(t.scrollLeft / (card.getBoundingClientRect().width + 16)));
    setEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
  };

  return (
    <section className="overflow-hidden bg-surface-white py-16 lg:py-32">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="eyebrow">
              {eyebrow}
            </p>
            <h2 className="text-[34px] font-medium leading-[1.12] tracking-[-1px] text-ink-900 sm:text-[44px]">
              {title}
            </h2>
            <p className="text-[16px] leading-[1.6] text-ink-700">{lead}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous use case"
              disabled={index === 0}
              className="flex size-11 items-center justify-center rounded-full bg-[#f2f2f5] text-ink-800 transition-colors disabled:text-ink-400 hover:bg-[#e8e8ee]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next use case"
              disabled={end}
              className="flex size-11 items-center justify-center rounded-full bg-brand-blue text-white transition-colors hover:bg-[#0050d6] disabled:bg-[#9db8f5]"
            >
              →
            </button>
          </div>
        </div>
        <ul
          ref={track}
          onScroll={onScroll}
          className="-mx-(--gutter) flex snap-x snap-mandatory scroll-px-(--gutter) gap-4 overflow-x-auto px-(--gutter) pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it, i) => (
            <li
              key={it.path}
              className="relative flex h-[440px] w-[300px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[24px] p-6 sm:w-[380px] lg:h-[578px] lg:w-[487px] lg:p-8"
              style={{ backgroundColor: TINTS[i % TINTS.length] }}
            >
              <Rings />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-surface-white px-2 py-1">
                  <Method m={it.method} />
                  <span className="font-mono text-[11px] text-ink-900">{it.path}</span>
                </span>
                <p className="text-[19px] font-medium leading-[1.35] text-ink-900 lg:text-[24px]">
                  {it.title}
                </p>
              </div>
              <div className="relative">{it.visual}</div>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="flex gap-1.5">
          {items.map((it, i) => (
            <span
              key={it.path}
              className={cn(
                'h-0.5 rounded-full transition-all',
                i === index ? 'w-6 bg-[image:var(--gradient-brand)]' : 'w-3 bg-[#d9d9e0]',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
