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
 */
export default function Editorial({
  eyebrow,
  title,
  accent,
  paragraphs = [],
  cta,
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
              dark && '[&>span:first-child]:text-ink-on-dark',
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
          {cta && (
            <div className="pt-2">
              <Button
                to={cta.to}
                intent={cta.intent ?? (dark ? 'light' : 'secondary')}
                size={cta.size ?? 'md'}
              >
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
