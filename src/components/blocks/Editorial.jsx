import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import AccentTitle from '@/components/ui/AccentTitle';
import { cn } from '@/utils/cn';

const TONES = {
  subtle: 'bg-surface-muted',
  white: 'bg-surface-white',
  dark: 'bg-surface-night',
};

/**
 * Figma "Editorial" (inside "03 · rows" / "02 · rows"): title on the left
 * (520px), copy column on the right. Stacks below lg.
 * paragraphs: string[]; cta: { label, to, intent?, size? ('md' default | 'lg' = Connect) }; tone: subtle | white | dark
 * secondary: { label, to } — "Label →" link beside the cta (Industries AML "Clarify the Role…").
 * bullets: string[] — 6px magenta marker + 15px text, after the paragraphs (Products 02.09/02.10 "Example: …").
 */
export default function Editorial({
  eyebrow,
  title,
  accent,
  paragraphs = [],
  bullets = [],
  cta,
  secondary,
  tone = 'subtle',
  className,
}) {
  const dark = tone === 'dark';
  return (
    <section className={cn(TONES[tone], 'py-16 lg:py-28', className)}>
      <Container width="wide" className="flex flex-col gap-6 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-3.5 lg:w-[520px] lg:shrink-0">
          {eyebrow && <Eyebrow tone={dark ? 'dark' : 'muted'}>{eyebrow}</Eyebrow>}
          <AccentTitle
            accent={accent}
            className={cn(
              'text-[30px] font-medium leading-[1.12] tracking-[-0.9px] lg:text-heading-xl',
              dark && 'text-ink-on-dark!',
            )}
          >
            {title}
          </AccentTitle>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:pt-2">
          {paragraphs.map((p) => (
            <p
              key={p}
              className={cn(
                'max-w-[640px] text-[17px] leading-[1.35] tracking-[-0.18px] sm:text-[18px]',
                dark ? 'text-ink-on-dark-muted' : 'text-ink-700',
              )}
            >
              {p}
            </p>
          ))}
          {bullets.length > 0 && (
            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-[3px] bg-brand-magenta" />
                  <p
                    className={cn(
                      'max-w-[600px] text-[15px] leading-[1.5]',
                      dark ? 'text-ink-on-dark-soft' : 'text-ink-800',
                    )}
                  >
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {(cta || secondary) && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4 pt-2">
              {cta && (
                <Button
                  to={cta.to}
                  intent={cta.intent ?? (dark ? 'light' : 'secondary')}
                  size={cta.size ?? 'md'}
                >
                  {cta.label}
                </Button>
              )}
              {secondary && (
                <Link
                  to={secondary.to}
                  className={cn(
                    'group inline-flex items-center gap-1.5 text-[15px] font-medium leading-[1.5] underline-offset-4 hover:underline',
                    dark ? 'text-ink-on-dark' : 'text-ink-800',
                  )}
                >
                  {secondary.label}
                  <span aria-hidden="true" className="text-brand-magenta transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
