import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/** Per-tone icon-tile border and number colour (Figma "Icon tile" 44px, 28% border). */
const TONES = {
  magenta: { border: 'border-[rgb(194_24_91/0.28)]', number: 'text-[#c2185b]' },
  blue: { border: 'border-[rgb(33_133_246/0.28)]', number: 'text-[#2185f6]' },
  purple: { border: 'border-[rgb(124_77_219/0.28)]', number: 'text-[#7c4ddb]' },
  green: { border: 'border-[rgb(30_158_98/0.28)]', number: 'text-[#1e9e62]' },
};

/**
 * Figma Control "02 · Control Where Your Data Lives" (Row 46:17148): a 780px
 * heading + copy column, then a 2×2 grid of white icon cards (44px tinted
 * icon tile, mono number in the tone colour, 15px body).
 * One column below md, two from md.
 *
 * title, accent?, paragraphs: string[], tone: white | subtle,
 * cards: [{ icon (imported 24px SVG), tone: magenta|blue|purple|green, title?, body }]
 */
export default function IconCardGrid({ title, accent, paragraphs = [], cards = [], tone = 'white', className }) {
  return (
    <section className={cn(tone === 'subtle' ? 'bg-surface-muted' : 'bg-surface-white', 'py-16 lg:py-28', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[780px] flex-col gap-4">
          <AccentTitle
            accent={accent}
            className="text-[30px] font-medium leading-[1.12] tracking-[-1.2px] sm:text-[34px] lg:text-heading-xl"
          >
            {title}
          </AccentTitle>
          {paragraphs.map((p) => (
            <p key={p} className="text-[16px] leading-[1.5] text-ink-700 sm:text-[17px]">
              {p}
            </p>
          ))}
        </div>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, i) => {
            const t = TONES[card.tone] ?? TONES.blue;
            return (
              <li
                key={card.title ?? card.body}
                className="flex flex-col gap-6 rounded-[20px] border border-border-muted bg-surface-white p-[22px] shadow-[0_6px_18px_-6px_rgb(10_10_26/0.04)]"
              >
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className={cn('flex size-11 shrink-0 items-center justify-center rounded-[12px] border bg-surface-white', t.border)}
                  >
                    <img src={card.icon} alt="" width={24.2} height={24.2} className="size-[24.2px]" />
                  </span>
                  <span aria-hidden="true" className={cn('font-mono text-[12px] font-medium leading-none', t.number)}>
                    {pad(i + 1)}
                  </span>
                </div>
                {card.title && <h3 className="text-[18px] font-medium leading-[1.35] tracking-[-0.18px] text-ink-800">{card.title}</h3>}
                <p className="text-[15px] leading-[1.55] text-[#33363f]">{card.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
