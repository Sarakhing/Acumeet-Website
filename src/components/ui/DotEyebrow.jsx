import dot from '@/assets/images/solutions/dot-gradient.svg';
import { cn } from '@/utils/cn';

/**
 * Pill eyebrow with a magenta→blue gradient dot ("● AUDIT LOGS", "● SIEM INTEGRATION").
 * tone: light (blue on #f1f4ff) | dark (grey on white/8)
 */
export default function DotEyebrow({ tone = 'light', className, children }) {
  return (
    <p
      className={cn(
        'inline-flex w-fit items-center gap-[7px] rounded-pill px-3 py-[5px] text-[11px] font-semibold uppercase leading-[1.5] tracking-[0.77px]',
        tone === 'dark' ? 'bg-white/8 text-[#d5d8e6]' : 'bg-[#f1f4ff] text-brand-blue',
        className,
      )}
    >
      <img src={dot} alt="" width={6} height={6} className="size-1.5" />
      {children}
    </p>
  );
}
