import { cn } from '@/utils/cn';

/**
 * Figma "UI · …" card: the white floating product-UI panel (radius 16, p-20,
 * soft drop shadow) with a header row — title on the left, `aside` on the right.
 * `width`: design width in px (mock-ups are fixed-size; wrap in ScaleToFit to shrink).
 * `shadow`: mock (default, inside panels) | float (stronger, free-floating in heroes).
 */
export default function MockCard({ title, aside, gap = 10, width, shadow = 'mock', className, style, children }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-mock border border-border-muted bg-surface-white p-5',
        shadow === 'float' ? 'shadow-float-ui' : 'shadow-mock',
        className,
      )}
      style={{ gap, width, ...style }}
    >
      {(title || aside) && (
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-[13px] font-medium leading-[1.5] text-ink-800">{title}</p>
          <span className="h-px min-w-px flex-1" />
          {aside}
        </div>
      )}
      {children}
    </div>
  );
}
