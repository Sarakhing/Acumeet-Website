import { useState } from 'react';
import { Link } from 'react-router';
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

/* Desktop rows: 4 → one row of 4; 5 → 3 + 2; 6 → 3 + 3; 8 → 4 + 4. */
const SPAN = {
  4: () => 'lg:col-span-3',
  5: (i) => (i < 3 ? 'lg:col-span-4' : 'lg:col-span-6'),
  6: () => 'lg:col-span-4',
  8: () => 'lg:col-span-3',
};
/* Compare "questions" layout: pairs, the last odd card full width. */
const pairs = (n) => (i) => (n % 2 === 1 && i === n - 1 ? 'lg:col-span-12' : 'lg:col-span-6');

function Mark({ it, on, color }) {
  if (it.image) {
    return (
      <img
        src={it.image}
        alt=""
        width={44}
        height={44}
        className={cn('object-contain transition-all duration-200', on ? 'size-[52px]' : 'size-11')}
      />
    );
  }
  return (
    <span
      className={cn(
        'flex items-center justify-center border bg-surface-white transition-all duration-200',
        on ? 'size-[52px] rounded-[16px]' : 'size-11 rounded-[12px]',
      )}
      style={{ borderColor: color }}
    >
      <DuoIcon name={it.icon} tone={color} size={on ? 29 : 24} />
    </span>
  );
}

/**
 * Figma "Checklist" (Enterprise 11.03–11.18, Compare 12.02–12.08): on #fafafb, a 44px heading +
 * 17px lead, then cards — an icon tile (duotone icon, or an app mark `image`), a mono number and
 * a label. One card is highlighted (7% accent fill, accent border, larger tile and label): the
 * first by default, or whichever the pointer or focus is on. Second-row cards are shorter.
 * items: [{ label, icon? | image?, tone, to? }] (tone = key of TONES; `to` makes the card a link).
 * layout: 'grid' (4 · 3+2 · 3+3 · 4+4) | 'questions' (Compare "Five questions": 2-up 137px cards,
 *   15px labels, the odd last card full width, no highlight).
 */
export default function Checklist({ title, accent, lead, items = [], layout = 'grid' }) {
  const [active, setActive] = useState(0);
  const questions = layout === 'questions';
  const span = questions ? pairs(items.length) : (SPAN[items.length] ?? SPAN[4]);
  const perRow = items.length === 8 ? 4 : 3;
  const twoRows = items.length > 4 && items.length !== 8;
  return (
    <section className="bg-surface-muted py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeading
          title={title}
          accent={accent}
          accentBreak={false}
          lead={lead}
          titleSize={44}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12" onMouseLeave={() => setActive(0)}>
          {items.map((it, i) => {
            const on = !questions && i === active;
            const color = TONES[it.tone] ?? TONES.magenta;
            const Tag = it.to ? Link : 'div';
            return (
              <li key={it.label} className={cn('flex', span(i), questions && 'sm:col-span-2')}>
                <Tag
                  {...(it.to ? { to: it.to } : { tabIndex: questions ? undefined : 0 })}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    'flex w-full flex-col justify-between gap-6 rounded-[20px] border bg-surface-white outline-none transition-colors duration-200',
                    questions || (twoRows && i >= perRow) ? 'lg:min-h-[137px]' : 'lg:min-h-[160px]',
                    on ? 'p-[26px]' : 'border-border-muted p-[22px]',
                  )}
                  style={on ? { borderColor: color, backgroundColor: `${color}12` } : undefined}
                >
                  <span className="flex items-start justify-between">
                    <Mark it={it} on={on} color={color} />
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
                      questions
                        ? 'text-[15px] tracking-normal'
                        : on
                          ? 'text-[19px]'
                          : 'text-[17px]',
                    )}
                  >
                    {it.label}
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
