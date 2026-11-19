import { cn } from '@/utils/cn';

/**
 * Heading with a gradient (magenta → blue) accent phrase, as used across the
 * Solutions pages ("How Acumeet Helps Protect <accent>Meeting Information</accent>").
 *
 * Like Figma, the gradient spans the whole text box (not just the accent
 * span), so constrain the width with `className` (e.g. max-w-[860px]).
 * `accentBreak` puts the accent on its own line.
 */
export default function AccentTitle({ as: Tag = 'h2', accent, accentBreak = false, className, children }) {
  return (
    <Tag className={cn('bg-[image:var(--gradient-accent)] bg-clip-text', className)}>
      <span className="text-ink-800">{children}</span>
      {accent && (
        <>
          {accentBreak ? <br /> : ' '}
          <span className="text-transparent">{accent}</span>
        </>
      )}
    </Tag>
  );
}
