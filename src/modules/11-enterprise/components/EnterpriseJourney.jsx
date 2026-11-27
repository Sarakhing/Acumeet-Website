import { Link } from 'react-router';
import Container from '@/components/ui/Container';

/* Large faint rings behind the top-right of the section (Figma "Pattern · rings"). */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMaxYMin slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {Array.from({ length: 14 }, (_, i) => 46 * (i + 1)).map((r) => (
        <circle key={r} cx="1160" cy="40" r={r} stroke="#ffffff" strokeOpacity="0.05" />
      ))}
    </svg>
  );
}

/**
 * Figma "E · Enterprise journey" (11.01, 49:67978): night band with an "Explore Enterprise" head and
 * four 305-wide stage columns (01 Platform … 04 Evaluate). Each column has a gradient rule and a
 * stack of link cards (16px title + pink "↗", 13px tagline).
 * stages: [{ label, links: [{ title, tagline, to }] }].
 */
export default function EnterpriseJourney({ eyebrow, title, stages = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b12] py-16 lg:py-32">
      <Rings />
      <Container width="wide" className="relative flex flex-col gap-14">
        <div className="flex flex-col gap-3.5">
          <p className="eyebrow-dark">
            {eyebrow}
          </p>
          <h2 className="text-[36px] font-medium leading-[1.3] tracking-[-1px] text-ink-on-dark sm:text-[48px]">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              className="flex flex-col gap-2.5 rounded-[24px] border border-[#2a2a36] bg-[#15151f] px-5 py-6"
            >
              <p className="flex gap-2.5 font-mono text-[12px] uppercase">
                <span className="text-[#e6b3cf]">{String(i + 1).padStart(2, '0')}</span>
                <span className="tracking-[0.96px] text-[#b4b4c6]">{stage.label}</span>
              </p>
              <span className="mb-0.5 h-0.5 w-full rounded-full bg-[image:var(--gradient-brand)]" />
              <ul className="flex flex-col gap-2.5">
                {stage.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group flex flex-col gap-1.5 rounded-[14px] bg-[#1b1b26] p-3.5 transition-colors hover:bg-[#232331]"
                    >
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-[16px] font-medium leading-[1.3] text-ink-on-dark">
                          {l.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-[14px] font-medium text-[#e6b3cf] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </span>
                      <span className="text-[13px] leading-[1.4] text-[#8e8ea0]">{l.tagline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
