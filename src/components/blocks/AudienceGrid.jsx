import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

const TINTS = {
  night: 'bg-surface-night',
  blue: 'bg-panel-blue',
  amber: 'bg-panel-amber',
  mint: 'bg-panel-mint',
  lilac: 'bg-panel-lilac',
  pink: 'bg-panel-pink',
};

/** 52px icon tile borders (Figma "Icon": tone at 32%; the dark card uses a pink 45% border). */
const ICON_TILES = {
  night: 'border-[rgb(240_107_174/0.45)] bg-surface-night-raised',
  blue: 'border-[rgb(33_133_246/0.32)] bg-surface-white',
  amber: 'border-[rgb(183_121_31/0.32)] bg-surface-white',
  green: 'border-[rgb(30_158_98/0.32)] bg-surface-white',
  purple: 'border-[rgb(124_77_219/0.32)] bg-surface-white',
  magenta: 'border-[rgb(194_24_91/0.32)] bg-surface-white',
};

/**
 * Figma "04 · EMI Audiences" Head + Grid (46:20910 / 46:20912): a 48px title
 * over tinted audience cards with a rings pattern (top right), a 52px icon
 * tile, a title and a line. `size: 'wide'` cards take half a row on lg (630,
 * 26px title), `'narrow'` a third (413, 21px title). The `night` tint is the
 * dark featured card. One column on mobile, two on tablet.
 *
 * items: [{ title, body, icon, iconTone, tint, pattern: { src, width, height }, size }]
 */
export default function AudienceGrid({ title, items = [], className }) {
  return (
    <section className={cn('bg-surface-white py-16 lg:py-32', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[32px] font-medium leading-[1.12] text-ink-800 sm:text-[40px] lg:text-[48px]">{title}</h2>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item) => {
            const dark = item.tint === 'night';
            const wide = item.size === 'wide';
            return (
              <li
                key={item.title}
                className={cn(
                  'relative flex min-h-[220px] flex-col overflow-hidden rounded-tile p-7 sm:last:odd:col-span-2 lg:last:odd:col-span-2',
                  wide ? 'gap-14 lg:col-span-3 lg:h-[229px]' : 'gap-11 lg:col-span-2 lg:h-[260px]',
                  TINTS[item.tint],
                )}
              >
                {item.pattern && (
                  <img
                    src={item.pattern.src}
                    alt=""
                    aria-hidden="true"
                    width={item.pattern.width}
                    height={item.pattern.height}
                    className="pointer-events-none absolute right-0 top-0 max-w-none select-none"
                    style={{ width: item.pattern.width, height: item.pattern.height }}
                  />
                )}
                <span
                  aria-hidden="true"
                  className={cn('relative flex size-[52px] shrink-0 items-center justify-center rounded-[14px] border', ICON_TILES[item.iconTone] ?? ICON_TILES.blue)}
                >
                  <img src={item.icon} alt="" width={26} height={26} className="size-[26px]" />
                </span>
                <div className="relative mt-auto flex flex-col gap-2 lg:mt-0">
                  <h3
                    className={cn(
                      'font-medium leading-normal',
                      wide ? 'text-[22px] sm:text-[26px]' : 'text-[21px]',
                      dark ? 'text-ink-on-dark' : 'text-ink-800',
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className={cn('text-[15px] leading-[1.5]', dark ? 'text-ink-on-dark-muted' : 'text-ink-700')}>{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
