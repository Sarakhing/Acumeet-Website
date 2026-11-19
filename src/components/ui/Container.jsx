import { cn } from '@/utils/cn';

/**
 * Horizontal page gutter. Figma frames are 1440 wide with 120px gutters
 * (content 1200) or 80px gutters (content 1280). On smaller screens the
 * gutter collapses to 20/32px.
 */
const WIDTHS = {
  site: 'max-w-site',
  wide: 'max-w-wide',
  narrow: 'max-w-[1000px]',
  prose: 'max-w-[810px]',
};

export default function Container({ as: Tag = 'div', width = 'site', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 xl:px-0', WIDTHS[width], className)} {...props}>
      {children}
    </Tag>
  );
}
