import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import { cn } from '@/utils/cn';
import RelatedCard from './RelatedCard';

/**
 * Figma "Explore more": "KEEP EXPLORING" overline + 36px title (optionally a
 * link) + a row of RelatedCards (4-up desktop, 2-up tablet, swipeable row on
 * mobile).
 * cards: RelatedCard props[]; eyebrow={null} hides the overline (Control).
 */
export default function RelatedRow({ eyebrow = 'Keep exploring', title = 'Explore Acumeet solutions', titleTo, cards = [], className }) {
  return (
    <section className={cn('bg-surface-muted py-16 lg:py-24', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col gap-2.5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="text-[28px] font-medium leading-[1.12] tracking-[-0.72px] text-ink-800 sm:text-[36px]">
            {titleTo ? (
              <Link to={titleTo} className="hover:underline underline-offset-4">
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
        </div>
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
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
