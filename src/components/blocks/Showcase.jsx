import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import ScaleToFit from '@/components/ui/ScaleToFit';
import DotGrid from '@/components/patterns/DotGrid';
import { cn } from '@/utils/cn';

/** Tile fills (Figma "Tile · X"). */
const TILE_TINTS = {
  pink: 'bg-panel-pink',
  lilac: 'bg-panel-lilac',
  grey: 'bg-panel-grey',
  blue: 'bg-panel-blue',
  mint: 'bg-panel-mint',
  amber: 'bg-panel-amber',
  night: 'bg-surface-night-tile',
};

/**
 * Fixed-size tile illustration: tint comes from the tile, then an optional
 * pattern image / dark dot field / glow, then the mock-up at (x, y).
 * visual: { width, height, pattern?: { src, width, height, x?, y? }, dots?: 'dark',
 *           glow?: CSS background-image, content, x, y }
 */
export function TileVisual({ visual }) {
  const { width, height, pattern, dots, glow, content, x = 0, y = 0 } = visual;
  return (
    <ScaleToFit width={width}>
      <div aria-hidden="true" className="relative overflow-hidden" style={{ width, height }}>
        {glow && <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: glow }} />}
        {dots === 'dark' && <DotGrid tone="dark" offset={22} />}
        {pattern && (
          <img
            src={pattern.src}
            alt=""
            width={pattern.width}
            height={pattern.height}
            className="pointer-events-none absolute max-w-none select-none"
            style={{ left: pattern.x ?? 0, top: pattern.y ?? 0, width: pattern.width, height: pattern.height }}
          />
        )}
        <div className="absolute" style={{ left: x, top: y }}>
          {content}
        </div>
      </div>
    </ScaleToFit>
  );
}

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

/**
 * One Figma "Tile · X".
 * layout: 'stack' (visual on top, copy bottom-aligned) | 'split' (copy left, visual right) |
 *         'feature' (dark split: larger title, light copy)
 */
export function ShowcaseTile({ id, layout = 'stack', tint = 'lilac', eyebrow, title, body, link, visual, titleWidth, bodyWidth }) {
  const dark = tint === 'night';
  const stack = layout === 'stack';
  const feature = layout === 'feature';
  return (
    <article
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn(
        'flex h-full scroll-mt-28 flex-col overflow-hidden rounded-visual',
        !stack && 'lg:flex-row lg:items-stretch',
        TILE_TINTS[tint],
      )}
    >
      {stack && visual && (
        <div className="shrink-0 lg:h-(--tile-visual-h)" style={{ '--tile-visual-h': `${visual.height}px` }}>
          <TileVisual visual={visual} />
        </div>
      )}
      <div
        className={cn(
          'flex flex-col gap-3 break-words',
          stack && 'flex-1 justify-end px-6 pb-8 pt-6 sm:px-9 sm:pb-9 sm:pt-7',
          layout === 'split' && 'justify-center px-6 pb-4 pt-8 sm:px-9 lg:w-[600px] lg:shrink-0 lg:py-14 lg:pl-14 lg:pr-4',
          feature && 'justify-center px-6 pb-4 pt-10 sm:px-10 lg:w-[560px] lg:shrink-0 lg:py-16 lg:pl-16 lg:pr-2',
        )}
      >
        {eyebrow && (
          <p className={cn('font-mono text-overline uppercase', dark ? 'text-ink-on-dark-faint' : 'text-ink-500')}>{eyebrow}</p>
        )}
        <h3
          id={id ? `${id}-title` : undefined}
          className={cn(
            'font-medium',
            dark ? 'text-ink-on-dark' : 'text-ink-800',
            stack && 'text-[22px] leading-[1.3] tracking-[-0.44px] sm:text-[26px] sm:leading-[1.35] sm:tracking-[-0.52px]',
            layout === 'split' && 'text-[26px] leading-[1.12] tracking-[-0.52px] sm:text-[30px] sm:tracking-[-0.6px]',
            feature && 'text-[28px] leading-[1.12] tracking-[-0.6px] sm:text-[36px] sm:tracking-[-0.72px]',
          )}
          style={{ maxWidth: titleWidth }}
        >
          {title}
        </h3>
        {body && (
          <p className={cn('text-[15px] leading-[1.5]', dark ? 'text-ink-on-dark-muted' : 'text-ink-700')} style={{ maxWidth: bodyWidth }}>
            {body}
          </p>
        )}
        {link && (
          <ExploreLink to={link.to} dark={dark}>
            {link.label}
          </ExploreLink>
        )}
      </div>
      {!stack && visual && (
        <div className="min-w-0 shrink-0 lg:flex-1">
          <TileVisual visual={visual} />
        </div>
      )}
    </article>
  );
}

/**
 * Figma "02 · Solutions" + "03 · Solutions showcase" (Solutions overview).
 * Centred eyebrow + title, a row of jump-link pills (`index`), then rows of
 * tinted tiles. Each row is a grid whose lg columns follow the tiles' Figma
 * widths (`width`), so 760/496 and 410/410/412 rows keep their proportions.
 * Below lg every tile is full width (stacked); visuals scale down.
 *
 * rows: [[ShowcaseTile props + width], …]; index: [{ label, href: '#id' }]
 */
export default function Showcase({ id, eyebrow, title, index = [], rows = [], className }) {
  return (
    <section id={id} className={cn('scroll-mt-nav bg-surface-white pb-16 pt-14 lg:pb-[120px] lg:pt-20', className)}>
      <Container width="wide">
        <div className="flex flex-col items-center gap-6 text-center">
          {eyebrow && <p className="font-mono text-[12px] font-medium uppercase leading-[1.55] tracking-[0.72px] text-brand-magenta">{eyebrow}</p>}
          <h2 className="max-w-[900px] text-[34px] font-medium leading-[1.06] tracking-[-1px] text-ink-800 sm:text-[40px] lg:text-[48px] lg:tracking-[-1.44px]">
            {title}
          </h2>
          {index.length > 0 && (
            <nav aria-label="Solutions on this page" className="max-w-[1000px] pt-4">
              <ul className="flex flex-wrap justify-center gap-2">
                {index.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-[99px] border border-border-muted bg-surface-white px-3.5 py-2 text-[13px] font-medium leading-[1.55] text-ink-800 transition-colors hover:border-ink-300 hover:bg-surface-muted"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-6 lg:mt-[120px] lg:gap-10">
          {rows.map((row) => (
            <div
              key={row.map((t) => t.title).join('|')}
              className="grid grid-cols-1 gap-6 lg:[grid-template-columns:var(--row-cols)]"
              style={{ '--row-cols': row.map((t) => `${t.width ?? 1}fr`).join(' ') }}
            >
              {row.map((tile) => (
                <ShowcaseTile key={tile.title} {...tile} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
