import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

/** Figma "Text link" (49:205368): Brand/Blue label + chevron. */
export default function TextLink({ to = '#', children = 'Learn more', className }) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-1 text-label text-brand-blue hover:underline underline-offset-4',
        className,
      )}
    >
      {children}
      <ChevronRight
        size={16}
        strokeWidth={1.8}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}
