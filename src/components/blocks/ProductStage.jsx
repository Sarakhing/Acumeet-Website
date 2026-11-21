import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { TileVisual } from '@/components/blocks/Showcase';
import { cn } from '@/utils/cn';

/** Tile fills seen on the Product overview stages (Figma "Tile · X"). */
const TINTS = {
  white: 'bg-surface-white border border-border-muted',
  lilac: 'bg-panel-lilac',
  'lilac-deep': 'bg-[#efeafb]',
  pink: 'bg-panel-pink',
  blue: 'bg-panel-blue',
  mint: 'bg-panel-mint',
  amber: 'bg-panel-amber',
  'amber-deep': 'bg-[#fff6de]',
  night: 'bg-surface-night',
  'night-card': 'bg-surface-night-card',
};
const DARK = new Set(['night', 'night-card']);

function ExploreLink({ to, dark, children }) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-1.5 text-[15px] font-medium leading-[1.5] underline-offset-4 hover:underline',
        dark ? 'text-ink-on-dark' : 'text-ink-800',
      )}
    >
      {children}
      <span aria-hidden="true" className={cn('transition-transform group-hover:translate-x-0.5', !dark && 'text-brand-magenta')}>
        →
      </span>
    </Link>
  );
}

/** Eyebrow ("FIG 1.1 · MEETING CAPTURE"), title, body and explore link. */
function TileCopy({ id, dark, split, eyebrow, title, titleSize = 26, titleWidth, body, bodyWidth, link }) {
  return (
    <>
      {eyebrow && (
        <p className={cn('font-mono text-overline uppercase', dark ? 'text-ink-on-dark-faint' : 'text-ink-500')}>{eyebrow}</p>
      )}
      <h3
        id={id ? `${id}-title` : undefined}
        className={cn(
          'font-medium',
          dark ? 'text-ink-on-dark' : 'text-ink-800',
          split
            ? 'text-[28px] leading-[1.12] tracking-[-0.56px] sm:text-[34px] sm:tracking-[-0.68px]'
            : 'text-[22px] leading-[1.3] tracking-[-0.44px] sm:leading-[1.35]',
          !split && (titleSize === 24 ? 'sm:text-[24px] sm:tracking-[-0.48px]' : 'sm:text-[26px] sm:tracking-[-0.52px]'),
        )}
        style={{ maxWidth: titleWidth }}
      >
        {title}
      </h3>
      {body && (
        <p
          className={cn(
            'leading-[1.5]',
            split ? 'text-[16px] sm:text-[17px]' : 'text-[15px]',
            dark ? 'text-ink-on-dark-muted' : 'text-ink-700',
          )}
          style={{ maxWidth: bodyWidth }}
        >
          {body}
        </p>
      )}
      {link && (
        <ExploreLink to={link.to} dark={dark}>
          {link.label}
        </ExploreLink>
      )}
    </>
  );
}

/**
 * One tile. layout 'stack': visual on top (fixed lg height = visual.height),
 * copy bottom-aligned (36/28px padding). layout 'split': copy column
 * (`copyWidth`) beside the visual; `reverse` puts the visual on the left on lg.
 * Below lg split tiles stack copy first, then the scaled visual.
 */
export function StageTile({ id, layout = 'stack', reverse = false, tint = 'lilac', copyWidth = 520, visual, ...copy }) {
  const dark = DARK.has(tint);
  const split = layout === 'split';
  return (
    <article
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn(
        'flex h-full scroll-mt-28 flex-col overflow-hidden rounded-visual',
        split && (reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'),
        TINTS[tint],
      )}
    >
      {!split && visual && (
        <div className="shrink-0 lg:h-(--tile-visual-h)" style={{ '--tile-visual-h': `${visual.height}px` }}>
          <TileVisual visual={visual} />
        </div>
      )}
      <div
        className={cn(
          'flex flex-col break-words',
          split
            ? cn(
                'gap-4 px-6 pb-6 pt-8 sm:px-10 lg:w-(--copy-w) lg:shrink-0 lg:justify-center lg:py-14',
                reverse ? 'lg:pl-6 lg:pr-14' : 'lg:pl-14 lg:pr-12',
              )
            : 'flex-1 justify-end gap-3 px-6 pb-8 pt-6 sm:px-9 sm:pb-9 sm:pt-7',
        )}
        style={split ? { '--copy-w': `${copyWidth}px` } : undefined}
      >
        <TileCopy id={id} dark={dark} split={split} {...copy} />
      </div>
      {split && visual && (
        <div className="flex min-w-0 flex-col justify-center lg:flex-1">
          <TileVisual visual={visual} />
        </div>
      )}
    </article>
  );
}

/**
 * Figma Product overview stages ("03 · Capture" … "07 · Remember",
 * 46:31818). A stage header (light magenta 96px number, 40px title, hairline
 * rule) and rows of tiles. Each row is a grid whose lg columns follow the
 * tiles' Figma `width` (760/496, 628/628); a single split tile fills the row.
 *
 * number: '01'; title: 'Capture'; tone: 'white' | 'muted'; rows: [[StageTile props + width]]
 */
export default function ProductStage({ id, number, title, tone = 'white', rows = [] }) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('scroll-mt-nav py-16 lg:py-[120px]', tone === 'muted' ? 'bg-surface-muted' : 'bg-surface-white')}
    >
      <Container width="wide">
        <div className="flex items-end gap-3 sm:gap-5">
          <p
            aria-hidden="true"
            className="shrink-0 text-[64px] font-light leading-[0.9] tracking-[-2.56px] text-brand-magenta sm:text-[80px] lg:text-[96px] lg:tracking-[-3.84px]"
          >
            {number}
          </p>
          <h2
            id={headingId}
            className="shrink-0 pb-2 text-[30px] font-medium leading-[1.12] tracking-[-0.9px] text-ink-800 sm:pb-2.5 sm:text-[34px] lg:pb-3.5 lg:text-heading-xl"
          >
            <span className="sr-only">{number} · </span>
            {title}
          </h2>
          <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-border-muted" />
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:mt-10 lg:gap-10">
          {rows.map((row) => (
            <div
              key={row.map((t) => t.title).join('|')}
              className="grid grid-cols-1 gap-6 md:[grid-template-columns:var(--row-cols-md)] lg:[grid-template-columns:var(--row-cols)]"
              style={{
                '--row-cols': row.map((t) => `${t.width ?? 1}fr`).join(' '),
                // Tablet: equal 2-up rows only (uneven rows stack).
                '--row-cols-md': row.length === 2 && row[0].width === row[1].width ? '1fr 1fr' : '1fr',
              }}
            >
              {row.map((tile) => (
                <StageTile key={tile.title} {...tile} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
