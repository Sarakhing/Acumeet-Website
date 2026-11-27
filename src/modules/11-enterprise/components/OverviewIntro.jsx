import Container from '@/components/ui/Container';

const TINTS = ['#fbf0f5', '#eef4ff', '#f4f1fa', '#f1faf5'];

/* Faint magenta quarter rings on each card's top-right corner. */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      width="312"
      height="150"
      viewBox="0 0 312 150"
      fill="none"
      className="pointer-events-none absolute right-0 top-0"
    >
      {[22, 44, 66, 88, 110, 132, 154].map((r) => (
        <circle key={r} cx="312" cy="0" r={r} stroke="#9e0059" strokeOpacity="0.16" />
      ))}
    </svg>
  );
}

/**
 * Figma "E · Overview" (11.01, 49:67933): white band, a mono overline + 30px statement on the left
 * (560), and four 312×150 tinted capability cards (2×2) with a mono number and corner rings.
 */
export default function OverviewIntro({ eyebrow, text, items = [] }) {
  return (
    <section className="bg-surface-white py-16 lg:py-32">
      <Container width="wide" className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col gap-5 lg:w-[560px] lg:shrink-0">
          <p className="eyebrow">
            {eyebrow}
          </p>
          <p className="text-[24px] leading-[1.35] text-ink-900 sm:text-[30px]">{text}</p>
        </div>
        <ul className="grid flex-1 gap-4 sm:grid-cols-2">
          {items.map((label, i) => (
            <li
              key={label}
              className="relative flex h-[150px] flex-col justify-between overflow-hidden rounded-[20px] p-6"
              style={{ backgroundColor: TINTS[i % TINTS.length] }}
            >
              <Rings />
              <span className="relative font-mono text-[13px] text-brand-magenta">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative text-[20px] font-medium leading-[1.3] text-ink-900">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
