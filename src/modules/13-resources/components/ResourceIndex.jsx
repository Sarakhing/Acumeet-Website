import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Pattern from '@/components/patterns/Pattern';
import SectionHeading from '@/components/blocks/SectionHeading';
import { cn } from '@/utils/cn';

/* Tile header tint, pattern and number colour, in Figma order (the first tile is the dark one). */
const TILES = [
  { bg: '#1b1b26', pattern: null, num: '#e6a6c8' },
  { bg: '#eef4ff', pattern: { type: 'dots', size: 'mini' }, num: '#0060ff' },
  { bg: '#f4f1fa', pattern: { type: 'hairlines', size: 'mini' }, num: '#6b3fd4' },
  { bg: '#f1faf5', pattern: { type: 'rings', size: 'mini' }, num: '#0e8a5f' },
  { bg: '#fff8e8', pattern: { type: 'dots', size: 'mini' }, num: '#b7791f' },
  { bg: '#f6f6f8', pattern: { type: 'hairlines', size: 'mini' }, num: '#4f5566' },
  { bg: '#fbf0f5', pattern: { type: 'rings', size: 'mini' }, num: '#9e0059' },
  { bg: '#eef4ff', pattern: { type: 'dots', size: 'mini' }, num: '#0060ff' },
  { bg: '#f4f1fa', pattern: { type: 'hairlines', size: 'mini' }, num: '#6b3fd4' },
  { bg: '#f1faf5', pattern: { type: 'rings', size: 'mini' }, num: '#0e8a5f' },
];

/* Faint white rings on the dark tile's header. */
function DarkRings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 100"
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {[18, 36, 54, 72, 90, 108, 126].map((r) => (
        <circle key={r} cx="490" cy="50" r={r} stroke="#ffffff" strokeOpacity="0.12" />
      ))}
    </svg>
  );
}

function Tile({ it, i }) {
  const t = TILES[i % TILES.length];
  const dark = i === 0;
  const Tag = it.to ? Link : 'div';
  return (
    <Tag
      {...(it.to ? { to: it.to } : null)}
      className={cn(
        'group flex h-full flex-col gap-3.5 rounded-[24px] border p-[22px] pb-7 transition-shadow',
        dark ? 'border-[#0b0b12] bg-[#0b0b12]' : 'border-border-muted bg-surface-white',
        it.to && 'hover:shadow-mock',
      )}
    >
      <span
        className="relative flex h-[140px] items-end overflow-hidden rounded-[16px] px-5 pb-3"
        style={{ backgroundColor: t.bg }}
      >
        {dark ? <DarkRings /> : t.pattern && <Pattern {...t.pattern} />}
        <span
          className="relative font-mono text-[44px] font-light leading-none tracking-[-1.5px]"
          style={{ color: t.num }}
        >
          {String(i + 1).padStart(2, '0')}
        </span>
      </span>
      <span
        className={cn(
          'text-[20px] font-medium leading-[1.3] sm:text-[22px]',
          dark ? 'text-ink-on-dark' : 'text-ink-900',
        )}
      >
        {it.title}
      </span>
      {it.body && (
        <span
          className={cn(
            'text-[15px] leading-[1.5]',
            dark ? 'text-ink-on-dark-muted' : 'text-ink-700',
          )}
        >
          {it.body}
        </span>
      )}
      {it.link && (
        <span
          className={cn(
            'flex items-center gap-1.5 text-[13px] font-medium',
            dark ? 'text-ink-on-dark' : 'text-ink-800',
          )}
        >
          {it.link}
          <span
            aria-hidden="true"
            className="text-brand-magenta transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      )}
    </Tag>
  );
}

/**
 * Figma "Index · …" bento (Resources 13.01, 13.03, 13.12): on #fafafb, a 3-column grid whose first
 * tile is dark and spans two columns. Each tile: a 100px 140px tinted header with a pattern and a large mono
 * number, then a title, an optional 13px body and an optional "Link →". Tiles with `to` are links.
 * items: [{ title, body?, link?, to? }]; optional 44px `title` + `accent` heading (Support 15.01).
 */
export default function ResourceIndex({ id, title, accent, items = [] }) {
  return (
    <section id={id} className="scroll-mt-20 bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-12">
        {title && (
          <SectionHeading title={title} accent={accent} accentBreak={false} titleSize={44} />
        )}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.title} className={cn(i === 0 && 'sm:col-span-2')}>
              <Tile it={it} i={i} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
