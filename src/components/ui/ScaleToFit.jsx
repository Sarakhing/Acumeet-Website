import { useLayoutEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

/**
 * Renders fixed-width Figma mock-ups (e.g. a 600px app window) pixel-exact at
 * desktop and proportionally scaled down when the container is narrower.
 * `width` is the design width in px. Never scales up.
 *
 * Scale is applied imperatively (no React state) on mount and on every resize
 * of the container or the content, so there is no unscaled first paint.
 */
export default function ScaleToFit({ width, align = 'center', className, children }) {
  const outerRef = useRef(null);
  const frameRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!outer || !frame || !inner) return undefined;
    const measure = () => {
      const scale = Math.min(1, outer.clientWidth / width);
      inner.style.transform = `scale(${scale})`;
      frame.style.width = `${width * scale}px`;
      outer.style.height = `${inner.offsetHeight * scale}px`;
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={outerRef} className={cn('w-full overflow-hidden', className)}>
      <div
        ref={frameRef}
        style={{
          width,
          maxWidth: '100%',
          marginInline: align === 'center' ? 'auto' : undefined,
          marginLeft: align === 'end' ? 'auto' : undefined,
        }}
      >
        <div ref={innerRef} style={{ width, transformOrigin: 'top left' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
