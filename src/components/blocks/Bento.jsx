import Container from '@/components/ui/Container';
import IconTile from '@/components/ui/IconTile';
import Pattern from '@/components/patterns/Pattern';
import { DOTS } from '@/components/patterns/patternAssets';
import message from '@/assets/images/solutions/ic-message.svg';
import { cn } from '@/utils/cn';

const MINI_BG = {
  lilac: 'bg-panel-lilac',
  mint: 'bg-panel-mint',
  pink: 'bg-panel-pink',
  blue: 'bg-panel-blue',
  peach: 'bg-[linear-gradient(138deg,#fff3f3_4%,#fff7e8_65%)]',
};

/** Figma tiles the 236×110 dot asset 4× (253/129 offsets) in the MFA header. */
function TiledDots() {
  const a = DOTS.bento;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        [0, 0],
        [253, 0],
        [0, 129],
        [253, 129],
      ].map(([x, y]) => (
        <img key={`${x}-${y}`} src={a.src} alt="" width={a.w} height={a.h} className="absolute max-w-none" style={{ left: x, top: y }} />
      ))}
    </div>
  );
}

/**
 * Figma "Bento / …" (Secure "Identity Management…"): centred heading + 3 tiles.
 * Each tile: tinted header (pattern, 52px icon tile, pills, optional note) +
 * title/body.
 *
 * tiles: [{ title, body, icon, iconTone, tint: lilac|peach|mint|pink|blue,
 *           pattern: { type, size:'bento' } | 'tiled-dots', pills: string[], note?, miniHeight? }]
 */
export default function Bento({ title, tiles = [], className }) {
  return (
    <section className={cn('bg-[#f7f8fb] py-16 lg:py-24', className)}>
      <Container className="flex flex-col gap-10">
        <h2 className="mx-auto max-w-[860px] text-balance text-center text-[30px] lg:text-wrap font-medium leading-[1.12] tracking-[-1.1px] text-ink-900 sm:text-[38px] lg:text-display-2">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <article key={t.title} className="flex flex-col overflow-hidden rounded-tile border border-[#ecedf2] bg-surface-white lg:h-[448px]">
              <div
                className={cn('relative flex items-center justify-center overflow-hidden px-6 py-7', MINI_BG[t.tint ?? 'lilac'])}
                style={{ minHeight: t.miniHeight }}
              >
                {t.pattern === 'tiled-dots' ? <TiledDots /> : t.pattern && <Pattern {...t.pattern} />}
                <div className="relative flex w-full max-w-[334px] flex-col gap-4">
                  <IconTile src={t.icon} tone={t.iconTone} size={52} />
                  <ul className="flex flex-wrap gap-1.5 py-1">
                    {t.pills?.map((p) => (
                      <li key={p} className="rounded-pill bg-surface-white px-2.5 py-[5px] text-[10.5px] font-medium leading-[1.5] text-[#3a3b44]">
                        {p}
                      </li>
                    ))}
                    {t.note && (
                      <li className="flex w-full items-start gap-2 rounded-[12px] bg-surface-white px-3 py-[9px] shadow-[0_12px_32px_-4px_rgb(15_20_64/0.06)]">
                        <span className="flex size-[13px] shrink-0 items-center justify-center">
                          <img src={message} alt="" width={9.64} height={9.1} />
                        </span>
                        <span className="text-[12px] font-medium leading-[1.4] text-[#3a3b44]">{t.note}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-[26px]">
                <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.19px] text-ink-900">{t.title}</h3>
                <p className="text-[14.5px] leading-[1.58] text-ink-600">{t.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
