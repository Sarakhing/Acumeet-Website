import { cn } from '@/utils/cn';

/**
 * Internal: renders one Figma pattern asset as a decorative, full-bleed layer.
 * `fit="cover"` (default) keeps circles round when the parent is resized;
 * `position` maps to object-position (e.g. 'bottom' for rings anchored low).
 * Assets with `inset` (e.g. DOTS['card-wide']) are a bare dot field that Figma
 * places `inset` px from the frame's top-left: they render at their own size
 * there, clipped by the parent, instead of being stretched over it.
 * `motion`: 'pan' (default, a slow ~1% sway) | 'breathe' (rings: slow swell from `position`)
 * | 'none' — see the motion-* classes in styles/index.css.
 */
const MOTION = { pan: 'motion-pan', breathe: 'motion-breathe', none: undefined };

export default function PatternImage({
  asset,
  fit = 'cover',
  position = 'center',
  motion = 'pan',
  className,
}) {
  if (!asset) return null;
  if (asset.inset != null) {
    return (
      <img
        src={asset.src}
        alt=""
        aria-hidden="true"
        width={asset.w}
        height={asset.h}
        draggable={false}
        className={cn('pointer-events-none absolute max-w-none select-none', MOTION[motion], className)}
        style={{
          left: asset.inset,
          top: asset.inset,
          width: asset.w,
          height: asset.h,
          '--motion-origin': position,
        }}
      />
    );
  }
  return (
    <img
      src={asset.src}
      alt=""
      aria-hidden="true"
      width={asset.w}
      height={asset.h}
      draggable={false}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full max-w-none select-none',
        fit === 'cover' ? 'object-cover' : 'object-fill',
        MOTION[motion],
        className,
      )}
      style={{ objectPosition: position, '--motion-origin': position }}
    />
  );
}
