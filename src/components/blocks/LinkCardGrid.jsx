import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import ring120 from '@/assets/images/industries/link-card-ring-120.svg';
import ring188 from '@/assets/images/industries/link-card-ring-188.svg';
import ring256 from '@/assets/images/industries/link-card-ring-256.svg';
import ring324 from '@/assets/images/industries/link-card-ring-324.svg';
import ring392 from '@/assets/images/industries/link-card-ring-392.svg';

const pad = (n) => String(n).padStart(2, '0');

/* Figma "Link card" Visual (46:5595): five concentric magenta 25% rings,
   centred at (304, 56) of the card's 112px-tall pink tile. */
const RINGS = [
  { src: ring120, size: 120, x: 244, y: -4 },
  { src: ring188, size: 188, x: 210, y: -38 },
  { src: ring256, size: 256, x: 176, y: -72 },
  { src: ring324, size: 324, x: 142, y: -106 },
  { src: ring392, size: 392, x: 108, y: -140 },
];

/**
 * Figma "Link card" (46:5594) — white 22px-radius card: pink tile with rings and
 * a 40px mono number, 22px title, 15px description, "Explore →" pinned to the bottom.
 */
export function LinkCard({ number, title, description, to, className }) {
  return (
    <Link
      to={to}
      className={cn(
        'group flex min-h-[320px] flex-col gap-4 overflow-hidden rounded-[22px] border border-border-muted bg-surface-white p-5 transition-shadow hover:shadow-mock',
        className,
      )}
    >
      <div aria-hidden="true" className="relative h-28 shrink-0 overflow-hidden rounded-[14px] bg-[#fbf0f5]">
        {RINGS.map((r) => (
          <img
            key={r.size}
            src={r.src}
            alt=""
            width={r.size}
            height={r.size}
            className="absolute max-w-none"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
        <span className="absolute left-5 top-[52px] font-mono text-[40px] leading-none text-brand-magenta">
          {number}
        </span>
      </div>
      <h3 className="text-[22px] font-medium text-ink-800">{title}</h3>
      <p className="text-[15px] leading-[1.5] text-ink-700">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-800 underline-offset-4 group-hover:underline">
        Explore
        <span aria-hidden="true" className="text-brand-magenta transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}

/**
 * Figma "Directory · …" (Industries overview 48:287927): mono overline + 44px
 * title, then a 3-up grid of LinkCards (413×320, 20px gaps). 2-up on md, 1-up on phones.
 * items: [{ title, description, to }] — numbered 01, 02… in order.
 */
export default function LinkCardGrid({ eyebrow, title, items = [], className }) {
  return (
    <section className={cn('bg-surface-muted py-16 lg:py-28', className)}>
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          {eyebrow && (
            <p className="font-mono text-[12px] uppercase leading-[1.3] tracking-[0.96px] text-ink-500">{eyebrow}</p>
          )}
          <h2 className="text-[32px] font-medium leading-[1.3] tracking-[-0.8px] text-ink-800 sm:text-[40px] lg:text-[44px]">
            {title}
          </h2>
        </div>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.to}>
              <LinkCard number={pad(i + 1)} {...item} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
