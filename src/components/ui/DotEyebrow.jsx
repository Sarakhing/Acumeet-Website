import { cn } from '@/utils/cn';

/**
 * Formerly a pill with a gradient dot; now the site-wide eyebrow (see ui/Eyebrow).
 * tone: light | dark
 */
export default function DotEyebrow({ tone = 'light', className, children }) {
  return <p className={cn(tone === 'dark' ? 'eyebrow-dark' : 'eyebrow', className)}>{children}</p>;
}
