import { Link } from 'react-router';
import mark from '@/assets/logos/acumeet-mark.svg';
import { cn } from '@/utils/cn';

/** Figma "Logo" (6:3874): gradient mark + "Acumeet" wordmark. */
export default function Logo({ variant = 'nav', className }) {
  const isFooter = variant === 'footer';
  return (
    <Link to="/" aria-label="Acumeet home" className={cn('inline-flex items-center', isFooter ? 'gap-2' : 'gap-[2.7px]', className)}>
      <img
        src={mark}
        alt=""
        width={isFooter ? 22 : 25.987}
        height={isFooter ? 17.319 : 20.458}
        className={isFooter ? 'h-[17.319px] w-[22px]' : 'h-[20.458px] w-[25.987px]'}
      />
      <span
        className={cn(
          'whitespace-nowrap',
          isFooter
            ? 'text-heading-4 text-ink-on-dark'
            : 'text-[19.148px] leading-[19.148px] font-bold text-[#292d32]',
        )}
      >
        Acumeet
      </span>
    </Link>
  );
}
