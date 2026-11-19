import { cn } from '@/utils/cn';
import Eyebrow from './Eyebrow';

/**
 * Standard section head: optional eyebrow, display heading, lead copy.
 * size: d2 (44) | xl (40) | d3 (32)
 */
const SIZES = {
  d2: 'text-[30px] leading-[1.12] tracking-[-0.9px] sm:text-[36px] lg:text-display-2',
  xl: 'text-[30px] leading-[1.12] tracking-[-0.9px] sm:text-[34px] lg:text-heading-xl',
  d3: 'text-[26px] leading-[1.15] tracking-[-0.5px] lg:text-display-3',
};

export default function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  lead,
  align = 'left',
  size = 'd2',
  as: Tag = 'h2',
  dark = false,
  className,
  titleClassName,
  leadClassName,
}) {
  const centered = align === 'center';
  return (
    <div className={cn('flex flex-col gap-4', centered && 'items-center text-center', className)}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          'font-medium text-balance',
          SIZES[size],
          dark ? 'text-ink-on-dark' : 'text-ink-900',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={cn(
            'text-body-lead',
            dark ? 'text-white/70' : 'text-ink-600',
            centered && 'mx-auto',
            leadClassName,
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
