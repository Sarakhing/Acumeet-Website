import red from '@/assets/images/solutions/chrome-dot-red.svg';
import amber from '@/assets/images/solutions/chrome-dot-amber.svg';
import green from '@/assets/images/solutions/chrome-dot-green.svg';
import dots from '@/assets/images/solutions/window-dots.svg';
import { cn } from '@/utils/cn';

/**
 * Figma "App window" — browser/app chrome around product mock-ups.
 *
 * variant="chrome" (heroes, hero carousel): traffic-light bar + grey body
 *   (#f7f7fa, padding 24/24/28) that centres its children.
 *   `flushBottom` removes the bottom radius/border (window bleeds off-section).
 * variant="titled" (Secure "Window / …"): 39×9 dots + bold title + `status` pill,
 *   white body; pass body padding via `bodyClassName`.
 */
export default function AppWindow({
  variant = 'chrome',
  title,
  status,
  flushBottom = false,
  className,
  bodyClassName,
  children,
}) {
  if (variant === 'titled') {
    return (
      <div
        className={cn(
          'flex flex-col overflow-hidden rounded-[18px] border border-[#e6e7ee] bg-surface-white shadow-[0_12px_32px_-4px_rgb(15_20_64/0.14)]',
          className,
        )}
      >
        <div className="flex items-center gap-2.5 border-b border-[#eeeff4] bg-[#fafafc] px-4 py-3">
          <img src={dots} alt="" width={39} height={9} className="h-[9px] w-[39px] shrink-0" />
          <p className="min-w-px flex-1 text-[12.5px] font-semibold leading-[1.5] text-[#3a3b44]">{title}</p>
          {status}
        </div>
        <div className={cn('flex flex-col', bodyClassName)}>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden border border-border-muted bg-surface-white shadow-window',
        flushBottom ? 'rounded-t-panel border-b-0' : 'rounded-panel',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
        {[red, amber, green].map((src) => (
          <img key={src} src={src} alt="" width={9} height={9} className="size-[9px]" />
        ))}
      </div>
      <div className={cn('flex justify-center bg-surface-mock px-6 pb-7 pt-6', bodyClassName)}>{children}</div>
    </div>
  );
}
