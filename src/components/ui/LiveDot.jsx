import green from '@/assets/images/solutions/live-dot-green.svg';
import magenta from '@/assets/images/solutions/live-dot-magenta.svg';
import red from '@/assets/images/solutions/live-dot-red.svg';
import { cn } from '@/utils/cn';

const SRC = { green, magenta, red };

/**
 * Figma "Live dot" (8×8). In compact chips Figma drops it into a 6px slot
 * (size={6}) and lets it overflow — reproduced here. `pulse` adds the
 * pulse-dot animation.
 */
export default function LiveDot({ tone = 'green', size = 8, pulse = false, className }) {
  return (
    <span aria-hidden="true" className={cn('relative inline-block shrink-0', className)} style={{ width: size, height: size }}>
      <img
        src={SRC[tone]}
        alt=""
        width={8}
        height={8}
        className={cn('absolute left-0 top-0 block max-w-none', pulse && 'animate-pulse-dot')}
      />
    </span>
  );
}
