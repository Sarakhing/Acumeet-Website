import { cn } from '@/utils/cn';

/**
 * Drives `useAutoAdvance` timing with a CSS animation (so pause/resume keeps
 * its place). Renders a progress bar when `visible`, otherwise an invisible
 * 1px element. Re-mount (key) it per index. Render nothing when !enabled.
 */
export default function AutoAdvanceTimer({ duration, paused, onDone, visible = false, className }) {
  return (
    <span
      aria-hidden="true"
      onAnimationEnd={onDone}
      className={cn('block origin-left animate-progress', !visible && 'pointer-events-none absolute h-px w-px opacity-0', className)}
      style={{ '--progress-duration': `${duration}ms`, animationPlayState: paused ? 'paused' : 'running' }}
    />
  );
}
