import { cn } from '@/utils/cn';

/**
 * Figma "Icon tile / Icon chip": white rounded square with a tinted 30% border
 * around a duotone Figma icon (pass the imported SVG as `src`).
 * tone: blue | purple | magenta | green ; size: 32 | 36 | 52
 */
const BORDER = {
  blue: 'border-[rgb(33_133_246/0.3)]',
  purple: 'border-[rgb(124_77_219/0.3)]',
  magenta: 'border-[rgb(194_24_91/0.32)]',
  green: 'border-[rgb(30_158_98/0.32)]',
};
const SIZES = {
  32: { box: 'size-8 rounded-[10px]', icon: 20 },
  36: { box: 'size-9 rounded-[10px]', icon: 18 },
  52: { box: 'size-[52px] rounded-[14px]', icon: 26 },
};

export default function IconTile({ src, tone = 'blue', size = 32, className }) {
  const s = SIZES[size];
  return (
    <span className={cn('flex shrink-0 items-center justify-center border bg-surface-white', s.box, BORDER[tone], className)}>
      <img src={src} alt="" width={s.icon} height={s.icon} style={{ width: s.icon, height: s.icon }} />
    </span>
  );
}
