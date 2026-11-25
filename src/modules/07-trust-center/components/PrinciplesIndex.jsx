import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import { cn } from '@/utils/cn';
import magenta from '@/assets/images/trust-center/principle-rings-magenta-413x110.svg';
import blue from '@/assets/images/trust-center/principle-rings-blue-413x110.svg';
import purple from '@/assets/images/trust-center/principle-rings-purple-413x110.svg';
import green from '@/assets/images/trust-center/principle-rings-green-413x110.svg';
import amber from '@/assets/images/trust-center/principle-rings-amber-413x110.svg';
import grey from '@/assets/images/trust-center/principle-rings-grey-413x110.svg';

/* Badge tint, label colour and ring pattern per tone (Figma "Principle · …" cards). */
const TONES = {
  magenta: { badge: 'bg-[#fbf0f5] text-[#9e0059]', rings: magenta },
  blue: { badge: 'bg-[#eef4ff] text-[#0060ff]', rings: blue },
  purple: { badge: 'bg-[#f4f1fa] text-[#6b3fd4]', rings: purple },
  green: { badge: 'bg-[#f1faf5] text-[#0e8a5f]', rings: green },
  amber: { badge: 'bg-[#fff8e8] text-[#b7791f]', rings: amber },
  grey: { badge: 'bg-[#f6f6f8] text-[#4f5566]', rings: grey },
};
const ORDER = ['magenta', 'blue', 'purple', 'green', 'amber', 'grey'];
const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Index · Control comes first" (07.01, 48:337077): 48px title, a pill filter
 * (All + groups) and a 3-up grid of white 413px principle cards — coloured
 * "PRINCIPLE 0N" badge, 22px title, 15px line, tinted rings top-right.
 * filters: string[] (after "All"); items: [{ title, body, group }] — tones cycle in Figma order.
 */
export default function PrinciplesIndex({ title, accent, filters = [], items = [] }) {
  const [filter, setFilter] = useState('All');
  const shown = items
    .map((item, i) => ({ ...item, index: i }))
    .filter((it) => filter === 'All' || it.group === filter);
  return (
    <section className="bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeading title={title} accent={accent} titleSize={48} />
        <div className="flex flex-col gap-7">
          <div
            role="group"
            aria-label="Filter principles"
            className="flex w-fit flex-wrap gap-2 rounded-pill bg-[#f3f3f6] p-1.5"
          >
            {['All', ...filters].map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-pill px-[18px] py-2.5 text-[14px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
                  filter === f ? 'bg-ink-800 text-white' : 'text-ink-700 hover:text-ink-800',
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {shown.map((item) => {
              const tone = TONES[ORDER[item.index % ORDER.length]];
              return (
                <li
                  key={item.title}
                  className="relative flex flex-col items-start gap-3.5 overflow-hidden rounded-[22px] border border-border-muted bg-surface-white p-7"
                >
                  <img
                    src={tone.rings}
                    alt=""
                    aria-hidden="true"
                    width={413}
                    height={110}
                    className="pointer-events-none absolute -right-px -top-px h-[110px] w-[413px] max-w-none"
                  />
                  <span
                    className={cn(
                      'relative rounded-pill px-2.5 py-1.5 font-mono text-[11px] leading-[14px] tracking-[0.44px]',
                      tone.badge,
                    )}
                  >
                    PRINCIPLE {pad(item.index + 1)}
                  </span>
                  <h3 className="relative text-[20px] font-medium leading-[1.3] text-ink-800 sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="relative text-[15px] leading-[1.5] text-ink-700">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
