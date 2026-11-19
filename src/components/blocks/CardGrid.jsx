import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import Pattern from '@/components/patterns/Pattern';
import DotGrid from '@/components/patterns/DotGrid';
import { cn } from '@/utils/cn';
import { PANEL_TINTS } from './VisualPanel';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Benefits" + "✓ Card · …" (413×280): tinted cards with a pattern,
 * number, ↗ arrow, title and body. Hover/focus = State 2 (night bg, dark dot
 * grid, light text, white arrow). Cards are links when `to` is given.
 *
 * cards: [{ title, body, tint: lilac|pink|blue|mint, pattern: { type, size:'card' }, to? }]
 */
function Card({ card, index }) {
  const Tag = card.to ? Link : 'div';
  return (
    <Tag
      {...(card.to ? { to: card.to } : {})}
      className={cn(
        'group relative flex min-h-[280px] flex-col gap-3.5 overflow-hidden rounded-tile p-8 transition-colors duration-300',
        PANEL_TINTS[card.tint ?? 'lilac'],
        'hover:bg-surface-night focus-visible:bg-surface-night',
      )}
    >
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
        <Pattern {...card.pattern} />
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <DotGrid size="card-dark" />
      </div>
      <div className="relative flex items-center">
        <span className="font-mono text-[13px] font-medium leading-[1.5] tracking-[0.52px] text-brand-magenta transition-colors group-hover:text-brand-magenta-soft group-focus-visible:text-brand-magenta-soft">
          {pad(index + 1)}
        </span>
        <span className="h-px flex-1" />
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-[18px] bg-white/70 text-[15px] font-medium leading-[1.5] text-ink-500 transition-colors group-hover:bg-surface-white group-hover:text-ink-800 group-focus-visible:bg-surface-white group-focus-visible:text-ink-800"
        >
          ↗
        </span>
      </div>
      <span className="relative flex-1" />
      <h3 className="relative text-[20px] font-medium leading-[1.35] tracking-[-0.22px] text-ink-800 transition-colors group-hover:text-ink-on-dark group-focus-visible:text-ink-on-dark sm:text-[22px]">
        {card.title}
      </h3>
      <p className="relative text-[15px] leading-[1.5] text-ink-700 transition-colors group-hover:text-ink-on-dark-muted group-focus-visible:text-ink-on-dark-muted">
        {card.body}
      </p>
    </Tag>
  );
}

export default function CardGrid({ title, accent, cards = [], tone = 'white', className }) {
  return (
    <section className={cn(tone === 'subtle' ? 'bg-surface-muted' : 'bg-surface-white', 'py-16 lg:py-[120px]', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        {title && (
          <AccentTitle
            accent={accent}
            accentBreak
            className="max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] lg:text-display-section"
          >
            {title}
          </AccentTitle>
        )}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} card={card} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
