import { cn } from '@/utils/cn';

/**
 * Figma status pill: 12px medium label, 9×3 padding, tinted background, no border.
 * size "sm" (11px, 8×2) for dense tables.
 */
const TONES = {
  green: 'bg-tint-green text-signal-green',
  red: 'bg-tint-magenta text-signal-red',
  amber: 'bg-tint-amber text-[#9e6605]',
  'amber-magenta': 'bg-tint-amber text-brand-magenta',
  blue: 'bg-tint-blue text-brand-blue',
  magenta: 'bg-tint-magenta text-brand-magenta',
  neutral: 'bg-surface-subtle text-ink-600',
  outline: 'bg-surface-white text-ink-600 border border-border-default',
  solid: 'bg-brand-blue text-ink-on-dark',
};

const SIZES = {
  md: 'px-[9px] py-[3px] text-[12px]',
  sm: 'px-2 py-0.5 text-[11px]',
};

export default function Badge({ tone = 'neutral', size = 'md', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-pill font-medium leading-[1.5]',
        SIZES[size],
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
