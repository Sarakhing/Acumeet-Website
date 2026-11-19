import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Waveform from '@/components/patterns/Waveform';
import { cn } from '@/utils/cn';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "04 · Industries" Row (46:14155, Solutions overview): an intro column
 * (48px title, optionally a link, lead, magenta waveform) next to a numbered
 * list of links (mono number, 20px title, 14px line, magenta arrow).
 * Stacks below lg.
 * items: [{ title, body, to }]
 */
export default function IndexList({ title, titleTo, lead, items = [], tone = 'subtle', className }) {
  return (
    <section className={cn(tone === 'white' ? 'bg-surface-white' : 'bg-surface-muted', 'py-16 lg:py-[120px]', className)}>
      <Container width="wide" className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
          <h2 className="text-[34px] font-medium leading-[1.12] tracking-[-1px] text-ink-800 sm:text-[40px] lg:text-[48px] lg:tracking-[-1.44px]">
            {titleTo ? (
              <Link to={titleTo} className="underline-offset-4 hover:underline">
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          {lead && <p className="max-w-[400px] text-[16px] leading-[1.5] text-ink-700">{lead}</p>}
          <Waveform bars={40} barWidth={3} gap={4.5} height={48} color="rgb(158 0 89 / 0.35)" className="max-w-full overflow-hidden" />
        </div>
        <ul className="min-w-0 flex-1 border-t border-border-muted">
          {items.map((item, i) => (
            <li key={item.title} className="border-b border-border-muted">
              <Link
                to={item.to}
                className="group flex items-center gap-4 px-1 py-[22px] transition-colors hover:bg-surface-white/70 sm:gap-6"
              >
                <span className="w-7 shrink-0 font-mono text-[12px] leading-[1.5] tracking-[0.48px] text-ink-500">{pad(i + 1)}</span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-[18px] font-medium leading-[1.35] tracking-[-0.2px] text-ink-800 sm:text-[20px]">{item.title}</span>
                  <span className="text-[14px] leading-[1.5] text-ink-700">{item.body}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[20px] leading-[1.35] text-brand-magenta transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
