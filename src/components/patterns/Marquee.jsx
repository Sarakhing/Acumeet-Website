import { cn } from '@/utils/cn';

/**
 * Infinite horizontal loop (Figma "Marquee · …"). Children are rendered twice
 * and translated -50%, so the loop is seamless. Pauses on hover.
 */
export default function Marquee({ children, duration = 40, gap = 48, className, fade = true }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        fade && '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            style={{ gap, paddingRight: gap }}
            aria-hidden={copy === 1 || undefined}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
