import { useMemo } from 'react';
import { cn } from '@/utils/cn';

/**
 * Figma "Waveform · Live · bars WxH|N|R|rgb" — a row of rounded bars that
 * gently animate. One component replaces the 30+ fixed-size Figma variants.
 *
 * Bar heights are deterministic (seeded) so SSR/hydration and re-renders match.
 */
function seededHeights(count, seed) {
  const out = [];
  let s = seed;
  for (let i = 0; i < count; i += 1) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    // layered sine gives the "speech" envelope seen in Figma
    const env = 0.55 + 0.45 * Math.sin(i * 0.55 + seed);
    out.push(Math.max(0.22, Math.min(1, env * (0.55 + r * 0.45))));
  }
  return out;
}

export default function Waveform({
  bars = 30,
  barWidth = 4,
  gap = 4,
  height = 40,
  color = 'rgb(158 0 89 / 0.4)',
  animated = true,
  seed = 7,
  className,
}) {
  const heights = useMemo(() => seededHeights(bars, seed), [bars, seed]);
  return (
    <div
      aria-hidden="true"
      className={cn('flex items-center', className)}
      style={{ height, gap }}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn('shrink-0 rounded-[2px] origin-center', animated && 'animate-wave')}
          style={{
            width: barWidth,
            height: `${h * 100}%`,
            backgroundColor: color,
            animationDelay: animated ? `${(i % 12) * -0.1}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
