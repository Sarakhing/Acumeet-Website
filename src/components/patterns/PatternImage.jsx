import { cn } from '@/utils/cn';

/**
 * Internal: renders one Figma pattern asset as a decorative, full-bleed layer.
 * `fit="cover"` (default) keeps circles round when the parent is resized;
 * `position` maps to object-position (e.g. 'bottom' for rings anchored low).
 * Assets with `inset` (e.g. DOTS['card-wide']) are a bare dot field that Figma
 * places `inset` px from the frame's top-left: they render at their own size
 * there, clipped by the parent, instead of being stretched over it.
 */
export default function PatternImage({ asset, fit = 'cover', position = 'center', className }) {
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
        className={cn('pointer-events-none absolute max-w-none select-none', className)}
        style={{ left: asset.inset, top: asset.inset, width: asset.w, height: asset.h }}
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
        className,
      )}
      style={{ objectPosition: position }}
    />
  );
}
