import { Link } from 'react-router';
import Pattern from '@/components/patterns/Pattern';
import { cn } from '@/utils/cn';
import { PANEL_TINTS } from './VisualPanel';

/**
 * Figma "✓ Related · X" (308×300). State 1: white card, tinted 260×120 mini
 * with a pattern. State 2 (hover/focus): night card, #1b1b26 mini, light text.
 * card: { title, description, to, tint: lilac|pink|blue|mint, pattern: { type, size:'mini' } }
 */
export default function RelatedCard({ title, description, to, tint = 'lilac', pattern, className }) {
  return (
    <Link
      to={to}
      className={cn(
        'group flex min-h-[300px] flex-col gap-3 overflow-hidden rounded-[22px] border border-border-muted bg-surface-white p-6 transition-colors duration-300',
        'hover:border-surface-night hover:bg-surface-night focus-visible:border-surface-night focus-visible:bg-surface-night',
        className,
      )}
    >
      <span
        className={cn(
          'relative block h-[120px] w-full shrink-0 overflow-hidden rounded-card transition-colors duration-300',
          PANEL_TINTS[tint],
          'group-hover:bg-surface-night-raised group-focus-visible:bg-surface-night-raised',
        )}
      >
        {pattern && <Pattern {...pattern} />}
      </span>
      <span className="text-[18px] font-medium leading-[1.35] tracking-[-0.18px] text-ink-800 transition-colors group-hover:text-ink-on-dark group-focus-visible:text-ink-on-dark">
        {title}
      </span>
      <span className="line-clamp-3 text-[14px] leading-[1.5] text-ink-700 transition-colors group-hover:text-ink-on-dark-muted group-focus-visible:text-ink-on-dark-muted">
        {description}
      </span>
      <span className="flex items-start gap-1.5 text-[14px] font-medium leading-[1.5]">
        <span className="text-ink-800 transition-colors group-hover:text-ink-on-dark group-focus-visible:text-ink-on-dark">Explore</span>
        <span
          aria-hidden="true"
          className="text-brand-magenta transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-brand-magenta-soft group-focus-visible:text-brand-magenta-soft"
        >
          →
        </span>
      </span>
    </Link>
  );
}
