import { cn } from '@/utils/cn';
import { WAVEFORM } from './patternAssets';

/**
 * Figma "Waveform · Live · drift" — a wide waveform strip that slowly scrolls
 * sideways (two copies on a track translated -50%, like Marquee).
 * size: explorer (780×520) | mini (260×120). Respects reduced motion via the
 * global prefers-reduced-motion rule.
 * `color` (optional) recolours the bars: the asset is used as a CSS mask, so the
 * colour is multiplied by the asset's own bar alpha (12% for `panel`), e.g.
 * 'rgb(245 245 245 / 0.333)' gives Understand's white 4% bars on night (46:3244).
 */
export default function WaveDrift({ size = 'explorer', duration = 30, color, className }) {
  const asset = WAVEFORM[size];
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div
        className="flex h-full w-[200%] animate-drift"
        style={{ '--drift-duration': `${duration}s` }}
      >
        {[0, 1].map((i) =>
          color ? (
            <span
              key={i}
              className="block h-full w-1/2"
              style={{
                backgroundColor: color,
                maskImage: `url(${JSON.stringify(asset.src)})`,
                WebkitMaskImage: `url(${JSON.stringify(asset.src)})`,
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
          ) : (
            <img
              key={i}
              src={asset.src}
              alt=""
              width={asset.w}
              height={asset.h}
              draggable={false}
              className="h-full w-1/2 max-w-none object-cover"
            />
          ),
        )}
      </div>
    </div>
  );
}
