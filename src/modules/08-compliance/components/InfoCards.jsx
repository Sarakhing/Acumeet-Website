import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/**
 * Compliance "numbered cards" section (08.01 "02 · Clear commitments" 48:369465, "08 · Responsible
 * handling" 48:369680, "11 · Find the information" 48:369754; 08.08 / 08.11 "02 · …"): on #fafafb,
 * a 820px head — 12px magenta mono overline, 40px title, 17px paragraphs (780 wide) — then grey
 * #f6f6f8 cards (radius 20, p-28) with a magenta "01" number, 20px title and 15.5px body, in
 * 3 columns (384px) or 2 (`columns: 2`, 588px), and an optional outlined button.
 *
 * eyebrow?, title, paragraphs?: string[], cards: [{ title, body }], columns: 2 | 3, cta?: { label, to }
 */
export default function InfoCards({
  eyebrow,
  title,
  paragraphs = [],
  cards = [],
  columns = 3,
  cta,
}) {
  return (
    <section className="bg-surface-muted py-16 lg:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-[820px] flex-col gap-4">
          {eyebrow && (
            <p className="font-mono text-[12px] font-medium uppercase leading-[1.55] tracking-[0.72px] text-brand-magenta">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[30px] font-medium leading-[1.08] tracking-[-0.9px] text-ink-900 sm:text-[36px] lg:text-[40px] lg:tracking-[-1.2px]">
            {title}
          </h2>
          {paragraphs.map((p) => (
            <p
              key={p}
              className="max-w-[780px] text-[16px] leading-[1.55] text-ink-700 sm:text-[17px]"
            >
              {p}
            </p>
          ))}
        </div>
        <ul className={cn('grid gap-4 sm:grid-cols-2 lg:gap-6', columns === 3 && 'lg:grid-cols-3')}>
          {cards.map((c, i) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 rounded-[20px] bg-[#f6f6f8] p-6 lg:p-7"
            >
              <span className="font-mono text-[12px] font-medium leading-[1.55] tracking-[0.72px] text-brand-magenta">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[19px] font-medium leading-[1.28] text-ink-900 lg:text-[20px]">
                {c.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-700 lg:text-[15.5px]">{c.body}</p>
            </li>
          ))}
        </ul>
        {cta && (
          <div className="pt-2">
            <Button to={cta.to} intent="secondary">
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
