import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/blocks/SectionHeading';
import { cn } from '@/utils/cn';
import DocIcon from './DocIcon';

const pad = (n) => String(n).padStart(2, '0');

/** "#1e9e62" → "rgb(30 158 98 / a)". */
const tint = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${a})`;
};

/**
 * Figma "Checklist" (Trust Center document / provider cards, 07.01 48:337386): 44px title
 * (780 wide) + 17px lead (+ optional button), then rows of equal-width cards (16px gaps).
 * The first card is featured: tinted with its colour, 52px icon tile, 19px title.
 * The rest are white with a 44px tile and 17px title. Each card has a coloured mono number.
 * items: [{ title, color: '#hex', icon }]; rows: [4, 3] (cards per row on lg);
 * headPad: Figma's 16px padding around the text block on the subpages.
 */
export default function DocCardGrid({
  title,
  accent,
  lead,
  cta,
  items = [],
  rows = [items.length],
  headPad = false,
}) {
  const offsets = rows.map((_, r) => rows.slice(0, r).reduce((sum, n) => sum + n, 0));
  const grouped = rows.map((n, r) =>
    items.slice(offsets[r], offsets[r] + n).map((item, j) => ({ ...item, index: offsets[r] + j })),
  );
  return (
    <section className="bg-surface-muted py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-12">
        <div className={cn('flex max-w-[780px] flex-col gap-4', headPad && 'lg:p-4')}>
          <SectionHeading title={title} accent={accent} titleSize={44} />
          {lead && <p className="text-[17px] leading-[1.5] text-ink-700">{lead}</p>}
          {cta && (
            <div>
              <Button to={cta.to}>{cta.label}</Button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {grouped.map((row, r) => (
            <ul key={r} className="grid gap-4 sm:grid-cols-2 lg:flex">
              {row.map((item) => {
                const featured = item.index === 0;
                return (
                  <li
                    key={item.title}
                    className={cn(
                      'flex min-w-0 flex-col items-start rounded-[20px] border lg:flex-1',
                      featured
                        ? 'gap-7 p-[26px]'
                        : 'gap-6 border-border-muted bg-surface-white p-[22px] shadow-[0_6px_18px_-6px_rgb(10_10_26/0.04)]',
                    )}
                    style={
                      featured
                        ? { background: tint(item.color, 0.07), borderColor: tint(item.color, 0.2) }
                        : undefined
                    }
                  >
                    <div className="flex w-full items-start">
                      <span
                        className={cn(
                          'flex items-center justify-center border bg-surface-white',
                          featured ? 'size-[52px] rounded-[16px]' : 'size-11 rounded-[12px]',
                        )}
                        style={{ borderColor: tint(item.color, 0.28) }}
                      >
                        <DocIcon
                          name={item.icon}
                          color={item.color}
                          size={featured ? 28.6 : 24.2}
                        />
                      </span>
                      <span className="flex-1" />
                      <span
                        className="font-mono text-[12px] font-medium"
                        style={{ color: item.color }}
                      >
                        {pad(item.index + 1)}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        'font-medium leading-[1.35] text-ink-800',
                        featured
                          ? 'text-[19px] tracking-[-0.095px]'
                          : 'text-[17px] tracking-[-0.085px]',
                      )}
                    >
                      {item.title}
                    </h3>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </Container>
    </section>
  );
}
