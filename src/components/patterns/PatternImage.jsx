import { cn } from '@/utils/cn';

/**
 * Internal: renders one Figma pattern asset as a decorative, full-bleed layer.
 * `fit="cover"` (default) keeps circles round when the parent is resized;
 * `position` maps to object-position (e.g. 'bottom' for rings anchored low).
 */
export default function PatternImage({ asset, fit = 'cover', position = 'center', className }) {
  if (!asset) return null;
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
