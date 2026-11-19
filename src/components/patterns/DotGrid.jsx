import { cn } from '@/utils/cn';
import PatternImage from './PatternImage';
import { DOTS } from './patternAssets';

const FADES = {
  none: undefined,
  left: 'linear-gradient(to right, transparent 0%, #000 45%)',
  radial: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
  edges: 'radial-gradient(ellipse at center, #000 55%, transparent 100%)',
};

/**
 * Figma "Pattern · dot grid".
 *
 * - With `size` (explorer | chapters | card | card-dark | bento | mini) it renders
 *   the exported Figma asset for that frame.
 * - Without `size` it renders an infinite CSS field (used for full-bleed section
 *   backgrounds, where Figma draws hundreds of 2px ellipses on a 22px pitch).
 *   tone: light (ink 8%) | dark (white 8%); fade: none | left | radial | edges.
 */
export default function DotGrid({ size, tone = 'light', pitch = 22, offset = 11, fade = 'none', className }) {
  if (size) return <PatternImage asset={DOTS[size]} position="left top" className={className} />;
  const color = tone === 'dark' ? 'rgb(255 255 255 / 0.08)' : 'rgb(11 11 18 / 0.08)';
  const mask = FADES[fade];
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 1.25px)`,
        backgroundSize: `${pitch}px ${pitch}px`,
        backgroundPosition: `${offset}px ${offset}px`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
