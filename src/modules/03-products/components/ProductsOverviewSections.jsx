import Container from '@/components/ui/Container';
import ScaleToFit from '@/components/ui/ScaleToFit';
import { cn } from '@/utils/cn';
import ProductsWorkspaceWindow from './visuals/ProductsWorkspaceWindow';

/**
 * Figma "Product index" (46:31797): centred row of jump-link pills to the
 * product tiles below (pt-60, wraps to two lines at 1440).
 */
export function ProductsIndexNav({ items = [] }) {
  return (
    <nav aria-label="Products on this page" className="bg-surface-white px-5 pb-2 pt-10 sm:px-8 lg:px-[100px] lg:pt-[60px]">
      <ul className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-2">
        {items.map((item) => (
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
  );
}

/**
 * Figma "05 · In the product" (46:33507): night section, mono caption and the
 * 1120px workspace window flush with the section bottom (scaled below 1120).
 */
export function ProductsWorkspaceSection({ caption }) {
  return (
    <section aria-label={caption} className="overflow-hidden bg-surface-night pt-16 lg:pt-[120px]">
      <Container width="wide" className="flex flex-col items-center gap-7">
        <p className="text-center font-mono text-overline uppercase text-ink-on-dark-faint">{caption}</p>
        <div className="w-full max-w-[1120px]">
          <ScaleToFit width={1120}>
            <ProductsWorkspaceWindow />
          </ScaleToFit>
        </div>
      </Container>
    </section>
  );
}

/**
 * Figma "04 · Meeting capture" (46:35456): 44px title, lead and four
 * "Integration card"s (Teams, Zoom, Meet, highlighted magenta upload card).
 * 4-up on lg, 2-up on sm, stacked on phones.
 * cards: [{ title, body, logo?: { src, width, height, style }, highlight? }]
 */
export function ProductsPlatformCards({ title, lead, cards = [] }) {
  return (
    <section aria-labelledby="products-platforms-title" className="bg-surface-white pb-16 pt-12 lg:pb-[112px] lg:pt-14">
      <Container>
        <h2
          id="products-platforms-title"
          className="max-w-[820px] text-[32px] font-medium leading-[1.1] tracking-[-0.8px] text-ink-900 sm:text-[38px] lg:text-display-2"
        >
          {title}
        </h2>
        <p className="mt-6 max-w-[503px] text-body-lead text-ink-600 lg:mt-8">{lead}</p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <li
              key={c.title}
              className={cn(
                'flex flex-col gap-4 rounded-panel border p-7',
                c.highlight ? 'border-[rgb(158_0_89/0.45)] bg-[#fdf1f7]' : 'border-border-default bg-surface-white',
              )}
            >
              <div className="flex items-center gap-3.5">
                {c.highlight ? (
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-brand-magenta text-[16px] font-semibold text-white"
                  >
                    ↑
                  </span>
                ) : (
                  <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-border-default bg-surface-subtle">
                    <span className="relative block overflow-hidden" style={{ width: c.logo.boxWidth, height: c.logo.boxHeight }}>
                      <img src={c.logo.src} alt="" className="absolute max-w-none" style={c.logo.style} />
                    </span>
                  </span>
                )}
                <h3
                  className={cn(
                    'min-w-0 flex-1 text-heading-4 font-semibold',
                    c.highlight ? 'text-brand-magenta' : 'text-ink-900',
                  )}
                >
                  {c.title}
                </h3>
              </div>
              <p className="text-body-sm text-ink-600">{c.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
