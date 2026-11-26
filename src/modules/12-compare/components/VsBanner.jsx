import Container from '@/components/ui/Container';
import mark from '@/assets/logos/acumeet-mark.svg';

/* Notched card outline: a rounded rectangle whose inner edge dips around the "vs" disc. */
function CardShape({ side, stroke }) {
  const d =
    side === 'left'
      ? 'M24 1H500C510 1 516 6 522 16L548 70C556 86 556 150 548 166L522 220C516 230 510 235 500 235H24C11 235 1 225 1 212V24C1 11 11 1 24 1Z'
      : 'M532 1H56C46 1 40 6 34 16L8 70C0 86 0 150 8 166L34 220C40 230 46 235 56 235H532C545 235 555 225 555 212V24C555 11 545 1 532 1Z';
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 556 236"
      preserveAspectRatio="none"
      className="absolute inset-0 hidden h-full w-full drop-shadow-[0_18px_40px_rgb(158_0_89/0.12)] sm:block"
    >
      <path d={d} fill="#fff" stroke={stroke} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/**
 * Figma "01b · VS banner" (12.02–12.07): a 1200×440 pink-washed card with faint light beams, the
 * Acumeet card (blue outline) and the competitor card (dark outline) meeting at a white "vs" disc.
 * Below sm the cards stack as plain outlined cards with the disc overlapping between them.
 * competitor: { name, image }.
 */
export default function VsBanner({ competitor }) {
  return (
    <section className="bg-surface-white py-12 lg:py-20">
      <Container width="wide">
        <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-[32px] bg-[radial-gradient(80%_120%_at_20%_20%,#fbd3e6_0%,#fff3f9_55%,#fff8fb_100%)] px-6 py-10 sm:flex-row sm:gap-0 sm:px-10 lg:h-[440px] lg:px-[70px]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[43%] top-0 h-full w-[13%] skew-x-[-12deg] bg-white/45"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[73%] top-0 h-full w-[15%] skew-x-[12deg] bg-white/45"
          />

          <div className="relative flex h-[140px] w-full items-center justify-center rounded-[24px] border border-brand-blue bg-surface-white sm:h-[200px] sm:rounded-none sm:border-0 sm:bg-transparent lg:h-[236px] lg:flex-1">
            <CardShape side="left" stroke="#0060ff" />
            <span className="relative flex items-center gap-3 lg:gap-[19px]">
              <img
                src={mark}
                alt=""
                width={86}
                height={68}
                className="h-10 w-[51px] lg:h-[68px] lg:w-[86px]"
              />
              <span className="text-[28px] font-semibold tracking-[-0.8px] text-[#0a0a0b] lg:text-[43px]">
                Acumeet
              </span>
            </span>
          </div>

          <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-white text-[24px] font-semibold text-[#0a0a0b] shadow-[0_12px_32px_rgb(158_0_89/0.18)] -my-7 sm:-mx-8 sm:my-0 lg:-mx-[60px] lg:size-[120px] lg:text-[44px]">
            vs
          </span>

          <div className="relative flex h-[140px] w-full items-center justify-center rounded-[24px] border border-[#0a0a0b] bg-surface-white sm:h-[200px] sm:rounded-none sm:border-0 sm:bg-transparent lg:h-[236px] lg:flex-1">
            <CardShape side="right" stroke="#0a0a0b" />
            <span className="relative flex items-center gap-4 lg:gap-5">
              <img
                src={competitor.image}
                alt=""
                width={86}
                height={86}
                className="size-14 lg:size-[86px]"
              />
              <span className="max-w-[260px] whitespace-pre-line text-[24px] font-semibold leading-[1.1] tracking-[-0.6px] text-[#0a0a0b] lg:text-[40px]">
                {competitor.name}
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
