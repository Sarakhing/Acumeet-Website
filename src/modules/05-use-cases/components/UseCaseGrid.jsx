import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import AccentTitle from '@/components/ui/AccentTitle';
import { PANEL_TINTS } from '@/components/blocks/VisualPanel';
import { cn } from '@/utils/cn';

/* Card tints cycle in Figma order: pink, blue, mint, amber, grey, lilac. */
const TINTS = ['pink', 'blue', 'mint', 'amber', 'grey', 'lilac'];
const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "02 · Choose Your Use Case" (05.00, 48:308359): 40px title (gradient
 * accent) + 17px lead, then a 3-up grid of tinted 410px cards (24px gaps) with a
 * white 44px number glyph, 20px title and 15px line. Each card links to its page.
 * items: [{ title, description, to }]
 */
export default function UseCaseGrid({ id, title, accent, lead, items = [] }) {
  return (
    <section id={id} className="scroll-mt-20 bg-surface-white py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <AccentTitle
            accent={accent}
            accentBreak={false}
            className="max-w-[880px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px] sm:tracking-[-1.2px]"
          >
            {title}
          </AccentTitle>
          {lead && <p className="max-w-[760px] text-[17px] leading-[1.5] text-ink-700">{lead}</p>}
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  'group flex h-full flex-col items-start gap-3 rounded-tile p-7 transition-shadow duration-200 hover:shadow-mock focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
                  PANEL_TINTS[TINTS[i % TINTS.length]],
                )}
              >
                <span className="flex size-11 items-center justify-center rounded-[12px] bg-surface-white font-mono text-[13px] font-medium leading-[1.5] tracking-[0.52px] text-brand-magenta shadow-[0_4.8px_6.4px_rgb(11_11_18/0.03),0_1px_1px_rgb(11_11_18/0.02)]">
                  {pad(i + 1)}
                </span>
                <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.2px] text-ink-800 group-hover:text-brand-blue">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.5] text-ink-700">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
