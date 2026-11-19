import ScaleToFit from '@/components/ui/ScaleToFit';
import Pattern from '@/components/patterns/Pattern';
import { cn } from '@/utils/cn';

export const PANEL_TINTS = {
  lilac: 'bg-panel-lilac',
  pink: 'bg-panel-pink',
  blue: 'bg-panel-blue',
  mint: 'bg-panel-mint',
  amber: 'bg-panel-amber',
  grey: 'bg-panel-grey',
  night: 'bg-surface-night-raised',
  white: 'bg-surface-white',
};

/**
 * Figma "Visual" — the rounded (28px) tinted illustration panel with a pattern
 * layer and a centred product mock-up. Rendered at its exact design size
 * (default 656×480) and proportionally scaled down on narrow screens.
 *
 * tint: lilac | pink | blue | mint | amber | grey | night | white
 * pattern: { type: 'rings'|'dots'|'hairlines'|'waveform', size } — size defaults by panel width
 * chip: optional label pill pinned top-left (Explorer style)
 * glow: optional CSS background-image layered under the pattern (e.g. Chapters)
 */
export default function VisualPanel({
  width = 656,
  height = 480,
  tint = 'lilac',
  pattern,
  chip,
  glow,
  align = 'center',
  className,
  children,
}) {
  return (
    <ScaleToFit width={width} align={align} className={className}>
      <div
        className={cn('relative flex items-center justify-center overflow-hidden rounded-visual', PANEL_TINTS[tint])}
        style={{ width, height }}
      >
        {glow && <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: glow }} />}
        {pattern && <Pattern {...pattern} />}
        {chip && (
          <p className="absolute left-6 top-6 z-10 whitespace-nowrap rounded-pill border border-border-muted bg-surface-white px-2.5 py-1 text-[12px] font-medium leading-[1.5] text-ink-800">
            {chip}
          </p>
        )}
        <div className="relative">{children}</div>
      </div>
    </ScaleToFit>
  );
}
