import { cn } from '@/utils/cn';

/**
 * The site's one eyebrow style (the home hero's "With Enterprise-grade security built-in"):
 * 13/14px medium, sentence case, ink-600 — see the `eyebrow` utility in styles/index.css.
 * tone="dark" is the on-dark version; other tones are kept for older callers and look the same.
 */
export default function Eyebrow({ tone = 'muted', className, children }) {
  return <p className={cn(tone === 'dark' ? 'eyebrow-dark' : 'eyebrow', className)}>{children}</p>;
}
