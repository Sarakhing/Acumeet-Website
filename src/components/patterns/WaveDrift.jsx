import { cn } from '@/utils/cn';
import { WAVEFORM } from './patternAssets';

/**
 * Figma "Waveform · Live · drift" — a wide waveform strip that slowly scrolls
 * sideways (two copies on a track translated -50%, like Marquee).
 * size: explorer (780×520) | mini (260×120). Respects reduced motion via the
 * global prefers-reduced-motion rule.
 */
export default function WaveDrift({ size = 'explorer', duration = 30, className }) {
  const asset = WAVEFORM[size];
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="flex h-full w-[200%] animate-drift"
        style={{ '--drift-duration': `${duration}s` }}
      >
        {[0, 1].map((i) => (
          <img
            key={i}
            src={asset.src}
            alt=""
            width={asset.w}
            height={asset.h}
            draggable={false}
            className="h-full w-1/2 max-w-none object-cover"
          />
        ))}
      </div>
    </div>
  );
}
