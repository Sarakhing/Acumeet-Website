import { cn } from '@/utils/cn';

/** Small uppercase mono overline used above section titles (Figma: Geist Mono 11, tracking 0.66). */
const TONES = {
  muted: 'text-ink-500',
  magenta: 'text-brand-magenta',
  blue: 'text-brand-blue',
  dark: 'text-white/55',
};

export default function Eyebrow({ tone = 'muted', className, children }) {
  return (
    <p className={cn('font-mono text-overline uppercase', TONES[tone], className)}>{children}</p>
  );
}
