import { cn } from '@/utils/cn';

/**
 * Heading with an `accent` phrase (Solutions "How Acumeet Helps Protect <accent>Meeting
 * Information</accent>"). Headings are solid ink site-wide — the accent is no longer a gradient,
 * it is simply part of the title (kept as a prop so `accentBreak` can put it on its own line).
 * Pass the colour in `className` on dark surfaces (defaults to ink-800).
 */
export default function AccentTitle({ as: Tag = 'h2', accent, accentBreak = false, className, children }) {
  return (
    <Tag className={cn('text-ink-800', className)}>
      {children}
      {accent && (
        <>
          {accentBreak ? <br /> : ' '}
          {accent}
        </>
      )}
    </Tag>
  );
}
