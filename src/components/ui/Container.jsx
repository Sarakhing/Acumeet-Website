import { cn } from '@/utils/cn';

/**
 * The page container. Every section uses the same gutter (--gutter: 20px phones, 32px
 * tablets, 64px at 1024 scaling to 100px at 1440+) inside a 1440px max width, so content is
 * 1240px at 1440 and all left / right edges line up site-wide.
 * width: 'page' (default; 'site' / 'wide' are aliases kept for existing callers) |
 *   'narrow' (1000px content) | 'prose' (810px content).
 */
const WIDTHS = {
  page: 'max-w-(--container-page)',
  site: 'max-w-(--container-page)',
  wide: 'max-w-(--container-page)',
  narrow: 'max-w-[calc(1000px+2*var(--gutter))]',
  prose: 'max-w-[calc(810px+2*var(--gutter))]',
};

export default function Container({ as: Tag = 'div', width = 'page', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-(--gutter)', WIDTHS[width], className)} {...props}>
      {children}
    </Tag>
  );
}
