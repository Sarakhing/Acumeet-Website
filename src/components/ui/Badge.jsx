import { cn } from '@/utils/cn';

/** Status pill: small rounded label with a tinted background. */
const TONES = {
  green: 'bg-tint-green text-signal-green',
  red: 'bg-tint-magenta text-signal-red',
  amber: 'bg-tint-amber text-[#b7791f]',
  blue: 'bg-tint-blue text-brand-blue',
  magenta: 'bg-tint-magenta text-brand-magenta',
  neutral: 'bg-surface-subtle text-ink-600 border border-border-default',
  solid: 'bg-brand-blue text-ink-on-dark',
};

export default function Badge({ tone = 'neutral', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-pill px-2 py-0.5 text-[11px] font-medium leading-[1.5]',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
