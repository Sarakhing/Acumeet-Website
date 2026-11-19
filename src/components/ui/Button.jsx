import { Link } from 'react-router';
import { cn } from '@/utils/cn';

/**
 * Figma "Button" (6:38).
 * intent: primary (Brand/Blue) | secondary (outlined) | dark | light (white on gradient) | ghost-light (outlined on dark/gradient)
 * size:   md (18×9, nav) | lg (22×13, CTA)
 */
const INTENTS = {
  primary: 'bg-brand-blue text-ink-on-dark hover:bg-[#0052db]',
  secondary: 'border border-border-default bg-surface-white text-ink-900 hover:bg-surface-subtle',
  dark: 'bg-ink-900 text-ink-on-dark hover:bg-[#26262b]',
  light: 'bg-surface-white text-ink-900 hover:bg-white/90',
  'ghost-light': 'border border-white/55 text-ink-on-dark hover:bg-white/10',
};

const SIZES = {
  md: 'px-[18px] py-[9px]',
  lg: 'px-[22px] py-[13px]',
};

export default function Button({
  to,
  href,
  intent = 'primary',
  size = 'lg',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-label transition-colors duration-200',
    INTENTS[intent],
    SIZES[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
