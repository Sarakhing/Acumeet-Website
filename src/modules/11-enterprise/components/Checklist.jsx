import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import { cn } from '@/utils/cn';
import DuoIcon from './DuoIcon';

/** Card accents (number, icon tone, tile border; 7% fill on the highlighted card). */
export const TONES = {
  green: '#1e9e62',
  amber: '#d97706',
  teal: '#0e9aa7',
  magenta: '#c2185b',
  blue: '#2185f6',
  purple: '#7c4ddb',
};

const pad = (n) => String(n).padStart(2, '0');

/* Desktop rows: 4 → one row of 4; 5 → 3 + 2; 6 → 3 + 3. */
const SPAN = {
  4: () => 'lg:col-span-3',
  5: (i) => (i < 3 ? 'lg:col-span-4' : 'lg:col-span-6'),
  6: () => 'lg:col-span-4',
};

/**
 * Figma "Checklist" (11.03–11.18): on #fafafb, a 44px heading + 17px lead, then 4–6 cards — a
 * tinted duotone icon tile, a mono number and a 17px label. One card is highlighted (7% accent
 * fill, accent border, larger tile and label): the first by default, or whichever the pointer or
 * focus is on. Second-row cards are shorter (137 vs 160).
 * items: [{ label, icon, tone }] (tone = key of TONES).
 */
export default function Checklist({ title, lead, items = [] }) {
  const [active, setActive] = useState(0);
  const span = SPAN[items.length] ?? SPAN[4];
  const twoRows = items.length > 4;
  return (
    <section className="bg-surface-muted py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeading title={title} lead={lead} titleSize={44} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12" onMouseLeave={() => setActive(0)}>
          {items.map((it, i) => {
            const on = i === active;
            const color = TONES[it.tone] ?? TONES.magenta;
            return (
              <li
                key={it.label}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  'flex flex-col justify-between gap-6 rounded-[20px] border bg-surface-white outline-none transition-colors duration-200',
                  span(i),
                  twoRows && i >= 3 ? 'lg:min-h-[137px]' : 'lg:min-h-[160px]',
                  on ? 'p-[26px]' : 'border-border-muted p-[22px]',
                )}
                style={on ? { borderColor: color, backgroundColor: `${color}12` } : undefined}
              >
                <span className="flex items-start justify-between">
                  <span
                    className={cn(
                      'flex items-center justify-center border bg-surface-white transition-all duration-200',
                      on ? 'size-[52px] rounded-[16px]' : 'size-11 rounded-[12px]',
                    )}
                    style={{ borderColor: color }}
                  >
                    <DuoIcon name={it.icon} tone={color} size={on ? 29 : 24} />
                  </span>
                  <span
                    className="font-mono text-[12px] font-medium leading-[1.3]"
                    style={{ color }}
                  >
                    {pad(i + 1)}
                  </span>
                </span>
                <span
                  className={cn(
                    'font-medium leading-[1.35] tracking-[-0.5px] text-ink-900 transition-all duration-200',
                    on ? 'text-[19px]' : 'text-[17px]',
                  )}
                >
                  {it.label}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
