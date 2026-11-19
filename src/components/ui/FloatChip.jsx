import { cn } from '@/utils/cn';
import LiveDot from './LiveDot';

/** Figma "Float chip" — frosted pill with a live dot ("Live in your workspace"). */
export default function FloatChip({ dot = 'green', className, children }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-white/90 bg-white/78 px-3.5 py-2.5 text-[13px] font-medium leading-[1.5] text-ink-800 shadow-[0_20px_24px_rgb(38_26_77/0.1)] backdrop-blur-[12px]',
        className,
      )}
    >
      {dot && <LiveDot tone={dot} pulse />}
      {children}
    </div>
  );
}
