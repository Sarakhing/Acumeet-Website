import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import { cn } from '@/utils/cn';
import RelatedCard from './RelatedCard';

const LG_COLS = { 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3' };

/**
 * Figma "Explore more": "KEEP EXPLORING" overline + 36px title (optionally a
 * link) + a row of RelatedCards (4-up desktop, 2-up tablet, swipeable row on
 * mobile).
 * cards: RelatedCard props[]; eyebrow={null} hides the overline (Control); title={null} hides the title (Knowledge Repository 02.10).
 * Two or three cards fill the row on desktop (Integrations 09.03: 2 × 632, 09.04: 3 × 416).
 */
export default function RelatedRow({ eyebrow = 'Keep exploring', title = 'Explore Acumeet solutions', titleTo, cards = [], className }) {
  return (
    <section className={cn('bg-surface-muted py-16 lg:py-24', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col gap-2.5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="text-[28px] font-medium leading-[1.12] tracking-[-0.72px] text-ink-800 sm:text-[36px]">
              {titleTo ? (
                <Link to={titleTo} className="hover:underline underline-offset-4">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
          )}
        </div>
        <ul className={cn('-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0', LG_COLS[cards.length] ?? 'lg:grid-cols-4')}>
          {cards.map((c) => (
            <li key={c.to} className="w-[280px] shrink-0 snap-start sm:w-auto">
              <RelatedCard {...c} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
