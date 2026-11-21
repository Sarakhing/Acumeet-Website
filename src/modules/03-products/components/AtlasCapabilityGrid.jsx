import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/* Icon-tile border (28%) and number colour per Figma tone. */
const TONES = {
  blue: { color: '#2185f6', border: 'rgb(33 133 246 / 0.28)' },
  purple: { color: '#7c4ddb', border: 'rgb(124 77 219 / 0.28)' },
  green: { color: '#1e9e62', border: 'rgb(30 158 98 / 0.28)' },
  amber: { color: '#d97706', border: 'rgb(217 119 6 / 0.28)' },
  teal: { color: '#0e9aa7', border: 'rgb(14 154 167 / 0.28)' },
  magenta: { color: '#c2185b', border: 'rgb(194 24 91 / 0.28)' },
};

function CapabilityCard({ item, index, featured, className }) {
  const tone = TONES[item.tone] ?? TONES.blue;
  const iconSize = featured ? 28.6 : 24.2;
  return (
    <li
      className={cn(
        'flex flex-col rounded-[20px] border',
        className,
        featured
          ? 'gap-7 border-[rgb(33_133_246/0.2)] bg-[rgb(33_133_246/0.07)] p-[26px]'
          : 'gap-6 border-border-muted bg-surface-white p-[22px] shadow-[0_6px_18px_-6px_rgb(10_10_26/0.04)]',
      )}
    >
      <div className="flex items-start">
        <span
          className={cn(
            'flex shrink-0 items-center justify-center border bg-surface-white',
            featured ? 'size-[52px] rounded-[16px]' : 'size-11 rounded-[12px]',
          )}
          style={{ borderColor: tone.border }}
        >
          <img
            src={item.icon}
            alt=""
            width={iconSize}
            height={iconSize}
            style={{ width: iconSize, height: iconSize }}
          />
        </span>
        <span className="h-px min-w-px flex-1" />
        <span className="font-mono text-[12px] font-medium" style={{ color: tone.color }}>
          {pad(index + 1)}
        </span>
      </div>
      <h3
        className={cn(
          'font-medium leading-[1.35] text-ink-800',
          featured ? 'text-[19px] tracking-[-0.095px]' : 'text-[17px] tracking-[-0.085px]',
        )}
      >
        {item.title}
      </h3>
    </li>
  );
}

/**
 * Figma Atlas "03 · rows" (46:41500) "What you can do with Atlas": 780px heading
 * block (16px inner padding, 40px title, 17px lead) and 7 capability cards —
 * 4 on the first row, 3 on the second (16px gaps). The first card is the
 * highlighted (blue-tinted, larger tile) state, as in Figma.
 * Below lg: 2 columns (first card full width), 1 column on mobile.
 *
 * items: [{ title, icon (imported SVG), tone: blue|purple|green|amber|teal|magenta }]
 */
export default function AtlasCapabilityGrid({ title, lead, items = [] }) {
  return (
    <section className="bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[780px] flex-col gap-4 lg:p-4">
          <h2 className="text-[30px] font-medium leading-[1.12] tracking-[-0.9px] text-ink-800 sm:text-[34px] lg:text-[40px] lg:tracking-[-1.2px]">
            {title}
          </h2>
          {lead && <p className="text-[17px] leading-[1.55] text-ink-700">{lead}</p>}
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => (
            <CapabilityCard
              key={item.title}
              item={item}
              index={i}
              featured={i === 0}
              className={cn(i === 0 && 'md:col-span-2', i < 4 ? 'lg:col-span-3' : 'lg:col-span-4')}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
