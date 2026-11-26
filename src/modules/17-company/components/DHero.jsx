import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { DarkGlows, DButton, Glow, GridLines, Pill, Rings } from './primitives';

const STAGES = ['Capture', 'Understand', 'Act', 'Protect', 'Remember', 'Learn'];

/**
 * Figma "Flow" (17.01 hero, 17.02 "What we solve"): a 173px dark strip (#0b0b12, 28px radius,
 * glows + grid) with the six stages — a 56px node (the first white with a magenta number, the
 * rest glass) and an 18px label, arrows between. 3 × 2 below lg, without arrows.
 */
export function Flow({ className }) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-[28px] bg-[#0b0b12] p-6 lg:p-10',
        className,
      )}
    >
      <DarkGlows magenta={0.4} blue={0.3} />
      <GridLines />
      <ol className="relative grid grid-cols-3 gap-y-6 lg:flex lg:items-start lg:justify-between">
        {STAGES.map((label, i) => (
          <li key={label} className="contents">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="hidden pt-[17px] text-[18px] leading-[23px] text-[#6b6b80] lg:block"
              >
                →
              </span>
            )}
            <span className="flex flex-col items-center gap-3.5 lg:w-[188px]">
              <span
                className={cn(
                  'flex size-12 items-center justify-center rounded-full border font-mono text-[13px] font-medium lg:size-14',
                  i === 0
                    ? 'border-white bg-surface-white text-[#9e0059]'
                    : 'border-white/20 bg-white/[0.08] text-white',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-[23px] font-medium text-white lg:text-[18px]">
                {label}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Figma "D · Hero" (17.01–17.09): white, faint magenta rings and a soft glow, a mono pill, a
 * 64–68px title, a 20px lead and up to two arrow buttons. `align`: 'center' (17.01 — rings
 * rise from below, optional `flow` strip) | 'left' (rings around the top-right corner).
 * `titleSize`: 68 | 64. `pb` overrides the 96px bottom padding (copy-only heroes).
 */
export default function DHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  align = 'left',
  titleSize = 64,
  titleWidth,
  leadWidth = 720,
  flow = false,
  pb = 96,
}) {
  const center = align === 'center';
  return (
    <section
      className="relative isolate overflow-hidden bg-surface-white pt-16 lg:pt-28"
      style={{ '--pb': `${pb}px` }}
    >
      <Glow
        color={center ? 'rgba(158,0,89,0.08)' : 'rgba(0,96,255,0.07)'}
        style={
          center
            ? { left: 'calc(50% - 450px)', top: -200, width: 900, height: 600 }
            : { left: 'calc(50% - 20px)', top: -200, width: 900, height: 600 }
        }
      />
      <Rings cx={center ? 720 : 1440} cy={center ? 760 : 0} className="-z-10 max-lg:opacity-60" />
      <Container
        width="wide"
        className={cn(
          'relative flex flex-col gap-7 pb-14 lg:pb-(--pb)',
          center && 'items-center text-center',
        )}
      >
        <Pill>{eyebrow}</Pill>
        <h1
          className={cn(
            'text-[40px] leading-[1.06] font-medium text-[#0b0b12] sm:text-[52px]',
            titleSize === 68
              ? 'lg:text-[68px] lg:leading-[1.02] lg:tracking-[-2.3px]'
              : 'lg:text-[64px] lg:leading-[1.04] lg:tracking-[-2.05px]',
            'tracking-[-1.4px] text-balance',
          )}
          style={{ maxWidth: titleWidth ?? (center ? 900 : 1040) }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="text-[18px] leading-[1.55] text-[#4f5566] lg:text-[20px]"
            style={{ maxWidth: leadWidth }}
          >
            {lead}
          </p>
        )}
        {(primary || secondary) && (
          <div className={cn('flex flex-wrap gap-3', center && 'justify-center')}>
            {primary && <DButton to={primary.to}>{primary.label}</DButton>}
            {secondary && (
              <DButton to={secondary.to} intent="outline">
                {secondary.label}
              </DButton>
            )}
          </div>
        )}
        {flow && <Flow className="w-full text-left" />}
      </Container>
    </section>
  );
}
