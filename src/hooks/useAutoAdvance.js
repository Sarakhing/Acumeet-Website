import { useCallback, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/**
 * State for auto-advancing tabs/carousels (HeroCarousel, Explorer, Stepper…).
 *
 * Timing is driven by a CSS animation (see <AutoAdvanceTimer>/progress bars):
 * when the animation ends we advance. Pausing just sets
 * `animation-play-state: paused`, so resume continues where it left off.
 *
 * Auto-advance is disabled when `interval` is falsy or the user prefers
 * reduced motion. It also stops for good once the user picks an item
 * (they are now in control).
 *
 * Returns { index, select, next, prev, hoverProps, focusProps, running, paused, enabled }.
 * Spread `hoverProps` + `focusProps` on the interactive root.
 */
export default function useAutoAdvance(count, { interval = 6000, initial = 0 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(initial);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stopped, setStopped] = useState(false);

  const enabled = Boolean(interval) && !reduced && !stopped && count > 1;
  const paused = hovered || focused;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const select = useCallback((i) => {
    setStopped(true);
    setIndex(i);
  }, []);

  return {
    index,
    select,
    next,
    prev,
    enabled,
    paused,
    running: enabled && !paused,
    interval,
    hoverProps: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      },
    },
  };
}
