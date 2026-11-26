import Container from '@/components/ui/Container';

/**
 * Figma "Listing — placeholder" (13.04 Case Studies): a mono note and three skeleton cards, shown
 * until approved case studies are published.
 */
export default function ListingPlaceholder({ id, note }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 bg-surface-muted py-16 lg:flex lg:min-h-[479px] lg:items-center lg:py-[72px]"
    >
      <Container width="wide" className="flex flex-col items-center gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.66px] text-ink-500">{note}</p>
        <ul aria-hidden="true" className="grid w-full gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className="flex flex-col gap-3 rounded-[24px] border border-border-muted bg-surface-white p-7"
            >
              <span className="h-[140px] rounded-[10px] bg-[repeating-linear-gradient(135deg,rgb(11_11_18/0.06)_0_1px,transparent_1px_10px)]" />
              <span className="mt-2 h-3 w-1/2 rounded-full bg-[#e9e9ee]" />
              <span className="h-2 w-2/3 rounded-full bg-[#efeff3]" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
