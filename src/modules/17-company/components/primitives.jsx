import { Link } from 'react-router';
import { cn } from '@/utils/cn';

/**
 * Shared bits of the Company "D ·" design (Figma 17.01–17.09): colours, pills, mono overlines,
 * arrow links / buttons and the decorative rings, glows and grid lines.
 */
export const INK = '#0b0b12';
export const MAGENTA = '#9e0059';

/** Card / chip tints in Figma order (pink, blue, lilac, mint, amber, grey). */
export const TINTS = ['#fbf0f5', '#eef4ff', '#f4f1fa', '#f1faf5', '#fff8ec', '#f4f4f7'];
export const tint = (i) => TINTS[i % TINTS.length];

/** Icon-tile border tones (32% of the duotone accent) per tint. */
export const TONES = ['#c2185b', '#2185f6', '#7c4ddb', '#1e9e62', '#d97706', '#4f5566'];

export const pad = (n) => String(n).padStart(2, '0');

/** Mono pill: magenta on pale pink by default (hero chips, "Priority market", tags). */
export function Pill({ children, bg = '#fbf0f5', color = MAGENTA, mono = true, className }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full px-[11px] py-[5px] text-[11px] leading-[14px] font-medium',
        mono && 'font-mono uppercase tracking-[0.66px]',
        className,
      )}
      style={{ background: bg, color }}
    >
      {children}
    </span>
  );
}

/** 12px mono overline ("WHO WE ARE"). */
export function Overline({ children, dark, className }) {
  return (
    <p
      className={cn(
        'font-mono text-[12px] leading-4 uppercase tracking-[0.96px]',
        dark ? 'text-[#8e8ea0]' : 'text-[#8b90a3]',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Magenta "Label →" text link. */
export function ArrowLink({ to, children, className }) {
  const Tag = to ? Link : 'span';
  return (
    <Tag
      {...(to ? { to } : {})}
      className={cn(
        'inline-flex w-fit items-center gap-1.5 text-[14px] leading-[18px] font-medium text-[#9e0059]',
        to && 'hover:underline',
        className,
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Tag>
  );
}

const BTN = {
  primary: 'bg-brand-blue text-white hover:bg-[#0052db]',
  outline: 'border border-[#d5d7e0] bg-surface-white text-[#0b0b12] hover:bg-[#f7f7fa]',
  light: 'bg-surface-white text-[#0b0b12] hover:bg-white/90',
};

/** 15px pill button with a trailing arrow (Figma "Button · …"). */
export function DButton({ to, intent = 'primary', children, arrow = true, className, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-[13px] text-[15px] leading-5 font-medium transition-colors',
    BTN[intent],
    className,
  );
  const body = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );
  if (to?.startsWith('#')) {
    return (
      <a href={to} className={classes}>
        {body}
      </a>
    );
  }
  return to ? (
    <Link to={to} className={classes}>
      {body}
    </Link>
  ) : (
    <button type="button" className={classes} {...props}>
      {body}
    </button>
  );
}

/**
 * Concentric rings (Figma "Pattern · rings"): `count` circles `step` px apart (diameter) around
 * (cx, cy), in a box `width` × `height`. Absolutely positioned; the parent clips.
 */
export function Rings({
  cx,
  cy,
  step = 112,
  count = 16,
  width = 1440,
  height = 700,
  stroke = 'rgba(158,0,89,0.07)',
  className,
}) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={cn('pointer-events-none absolute top-0 left-1/2 -translate-x-1/2', className)}
    >
      {Array.from({ length: count }, (_, i) => (
        <circle key={i} cx={cx} cy={cy} r={(step / 2) * (i + 1)} stroke={stroke} />
      ))}
    </svg>
  );
}

/** Corner rings on tinted cards: 6 circles 96px apart around the top-right corner. */
export function CornerRings({ stroke = 'rgba(158,0,89,0.09)' }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-0 right-0"
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
    >
      {Array.from({ length: 6 }, (_, i) => (
        <circle key={i} cx="300" cy="0" r={48 * (i + 1)} stroke={stroke} />
      ))}
    </svg>
  );
}

/** Soft radial glow (Figma "Glow" ellipses). `style` positions it. */
export function Glow({ color, style }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full"
      style={{ background: `radial-gradient(closest-side, ${color}, transparent)`, ...style }}
    />
  );
}

/** Dark-panel vertical grid lines (white 5%, 40px apart). */
export function GridLines() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '40px 40px',
      }}
    />
  );
}

/** The two glows (magenta top left, blue bottom right) behind every dark panel. */
export function DarkGlows({ magenta = 0.45, blue = 0.35 }) {
  return (
    <>
      <Glow
        color={`rgba(158,0,89,${magenta})`}
        style={{ left: -200, top: -240, width: 900, height: 600 }}
      />
      <Glow
        color={`rgba(0,96,255,${blue})`}
        style={{ right: -120, bottom: -260, width: 800, height: 600 }}
      />
    </>
  );
}

/** ↗ in a bordered circle (card corners). */
export function CornerArrow({ size = 34 }) {
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full border border-[#e7e7ee] bg-surface-white text-[13px] text-[#0b0b12]"
      style={{ width: size, height: size }}
    >
      ↗
    </span>
  );
}
