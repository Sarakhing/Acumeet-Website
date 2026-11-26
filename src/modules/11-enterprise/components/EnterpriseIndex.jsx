import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import { cn } from '@/utils/cn';
import teams from '@/assets/logos/integrations/microsoft-teams.png';
import zoom from '@/assets/logos/integrations/zoom.png';
import meet from '@/assets/logos/integrations/google-meet.png';
import DuoIcon from './DuoIcon';

const LOGOS = { 'microsoft-teams': teams, zoom, 'google-meet': meet };

/* Mark tint + accent (icon tone, arrow and corner rings), in Figma tile order. */
const TONES = [
  ['#fbf0f5', '#9e0059'],
  ['#eef4ff', '#0060ff'],
  ['#f4f1fa', '#6b3fd4'],
  ['#f1faf5', '#0e8a5f'],
  ['#fff8e8', '#b7791f'],
  ['#f6f6f8', '#4f5566'],
];

/* "Step" cards (11.16): dark first card, then blue / lilac / mint washes. */
const STEPS = [
  { bg: '#0b0b0f', label: '#e6a6c8', ring: '#ffffff', text: 'text-ink-on-dark' },
  { bg: '#eef4ff', label: '#0060ff', ring: '#0060ff', text: 'text-ink-900' },
  { bg: '#f4f1fa', label: '#6b3fd4', ring: '#6b3fd4', text: 'text-ink-900' },
  { bg: '#f1faf5', label: '#0e8a5f', ring: '#0e8a5f', text: 'text-ink-900' },
];

/* Six quarter rings (22px pitch) centred on the card's top-right corner. */
function CornerRings({ color, opacity = 0.16 }) {
  return (
    <svg
      aria-hidden="true"
      width="308"
      height="160"
      viewBox="0 0 308 160"
      fill="none"
      className="pointer-events-none absolute right-0 top-0"
    >
      {[22, 44, 66, 88, 110, 132].map((r) => (
        <circle key={r} cx="308" cy="0" r={r} stroke={color} strokeOpacity={opacity} />
      ))}
    </svg>
  );
}

/* Concentric rings centred on the step number's right side. */
function StepRings({ color }) {
  return (
    <svg
      aria-hidden="true"
      width="308"
      height="275"
      viewBox="0 0 308 275"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMaxYMid slice"
    >
      {[15, 35, 55, 75, 95, 115, 135, 155, 175].map((r) => (
        <circle key={r} cx="268" cy="98" r={r} stroke={color} strokeOpacity="0.14" />
      ))}
    </svg>
  );
}

function Tile({ it, i }) {
  const [tint, accent] = TONES[i % TONES.length];
  const Tag = it.to ? Link : 'div';
  return (
    <Tag
      {...(it.to ? { to: it.to } : null)}
      className={cn(
        'group relative flex h-full min-h-[150px] flex-col gap-7 lg:h-[150px] overflow-hidden rounded-[20px] border border-border-muted bg-surface-white p-[22px]',
        it.to && 'transition-shadow hover:shadow-mock',
      )}
    >
      <CornerRings color={accent} />
      <span className="relative flex items-center justify-between">
        <span
          className="flex size-10 items-center justify-center rounded-[12px]"
          style={{ backgroundColor: tint }}
        >
          {LOGOS[it.icon] ? (
            <img
              src={LOGOS[it.icon]}
              alt=""
              width={20}
              height={20}
              className="size-5 object-contain"
            />
          ) : (
            <DuoIcon name={it.icon} tone={accent} size={18} />
          )}
        </span>
        {it.to && (
          <span
            aria-hidden="true"
            className="text-[16px] font-medium transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: accent }}
          >
            ↗
          </span>
        )}
      </span>
      <span className="relative text-[18px] font-medium leading-[1.3] text-ink-900">
        {it.title}
      </span>
    </Tag>
  );
}

function Step({ it, i }) {
  const s = STEPS[i % STEPS.length];
  return (
    <div
      className="relative flex h-full min-h-[275px] flex-col justify-between overflow-hidden rounded-[20px] p-7"
      style={{ backgroundColor: s.bg }}
    >
      <StepRings color={s.ring} />
      <span
        className="relative font-mono text-[11px] uppercase tracking-[0.66px]"
        style={{ color: s.label }}
      >
        Step {i + 1}
      </span>
      <span
        className={cn(
          'relative font-mono text-[64px] font-light leading-none tracking-[-2px]',
          s.text,
        )}
      >
        {String(i + 1).padStart(2, '0')}
      </span>
      <span className={cn('relative text-[22px] font-medium leading-[1.2]', s.text)}>
        {it.title}
      </span>
    </div>
  );
}

/**
 * Figma "Index · …" (11.02, 11.16, 11.17): on #fafafb, a 44px heading + 17px lead, then a 4-up grid.
 *  variant 'tiles' — 308×150 white tiles: a tinted 40px mark (integration logo or duotone icon),
 *    the label and faint corner rings; tiles with `to` add a coloured "↗" and link.
 *  variant 'steps' — 275-tall "STEP n / 0n / label" cards (dark first, then tinted washes).
 * items: [{ title, icon?, to? }].
 */
export default function EnterpriseIndex({ title, lead, variant = 'tiles', items = [] }) {
  return (
    <section className="bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeading title={title} lead={lead} titleSize={44} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.title}>
              {variant === 'steps' ? <Step it={it} i={i} /> : <Tile it={it} i={i} />}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
