import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import DotEyebrow from '@/components/ui/DotEyebrow';
import AccentTitle from '@/components/ui/AccentTitle';
import check from '@/assets/images/solutions/ic-check-blue.svg';
import { cn } from '@/utils/cn';

const SECTION_TONES = {
  white: 'bg-surface-white',
  subtle: 'bg-surface-muted',
  dark: 'bg-surface-night',
};

/**
 * Figma "Split" / "Feature / …": copy column + visual column, alternating sides.
 *
 * size="wide"    (Protect "Split"): 1280 container, 64 gap, 40px title, 18px body, py-112.
 * size="feature" (Secure "Feature / …"): 1228 content (500 copy + 656 visual), 72 gap, 34px title, 16.5px body,
 *                bullets 15.5px, py-88.
 *
 * size="standard" (Control "Split"): as wide, but 17px body.
 * size="compact"  (Govern "02 · rows" Split): as wide, but 36px title and 17px body.
 *
 * Content order: eyebrow → title(+accent) → body[] → bullets[] → footnote[] → cta.
 * bullets: [{ lead?, text }] — `lead` renders bold ("Access by role:").
 * bulletStyle: 'plain' | 'check' (blue check-circle, Figma "Icon/check").
 * eyebrowStyle: 'pill' (DotEyebrow) | 'mono' (Eyebrow overline).
 * visual: a node, typically <VisualPanel>…</VisualPanel>. reverse: visual first on desktop.
 */
export default function Split({
  size = 'wide',
  tone = 'white',
  eyebrow,
  eyebrowStyle = 'pill',
  title,
  accent,
  body = [],
  bullets = [],
  bulletStyle = 'plain',
  footnote = [],
  cta,
  visual,
  reverse = false,
  className,
}) {
  const feature = size === 'feature';
  const body17 = size === 'standard' || size === 'compact';
  const dark = tone === 'dark';
  const bodyText = cn(
    feature
      ? 'text-[16px] leading-[1.6] sm:text-[16.5px]'
      : body17
        ? 'text-[16px] leading-[1.5] sm:text-[17px]'
        : 'text-[17px] leading-[1.5] sm:text-[18px]',
    dark ? 'text-ink-on-dark-muted' : feature ? 'text-ink-600' : 'text-ink-700',
  );

  return (
    <section className={cn(SECTION_TONES[tone], feature ? 'py-16 lg:py-[88px]' : 'py-16 lg:py-28', className)}>
      <Container
        width="wide"
        className={cn(
          'flex flex-col items-center justify-center gap-10',
          feature ? 'lg:gap-[72px]' : 'lg:gap-16',
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
        )}
      >
        <div
          className={cn(
            'flex w-full min-w-0 flex-col',
            feature ? 'gap-[18px] lg:w-[500px] lg:shrink-0' : 'gap-4 lg:w-[560px] lg:shrink-0',
          )}
        >
          {eyebrow &&
            (eyebrowStyle === 'mono' ? (
              <Eyebrow tone={dark ? 'dark' : 'muted'}>{eyebrow}</Eyebrow>
            ) : (
              <DotEyebrow tone={dark ? 'dark' : 'light'}>{eyebrow}</DotEyebrow>
            ))}
          <AccentTitle
            accent={accent}
            className={cn(
              'font-medium',
              feature
                ? 'text-[28px] leading-[1.15] tracking-[-0.68px] sm:text-[34px]'
                : size === 'compact'
                  ? 'text-[28px] leading-[1.12] tracking-[-0.72px] sm:text-[32px] lg:text-[36px]'
                  : 'text-[30px] leading-[1.12] tracking-[-1.2px] sm:text-[34px] lg:text-heading-xl',
              dark && '[&>span:first-child]:text-ink-on-dark',
              !dark && feature && '[&>span:first-child]:text-ink-900',
            )}
          >
            {title}
          </AccentTitle>
          {body.map((p) => (
            <p key={p} className={cn(bodyText, !feature && 'max-w-[540px]')}>
              {p}
            </p>
          ))}
          {bullets.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li key={b.lead ?? b.text} className="flex items-start gap-2.5">
                  {bulletStyle === 'check' && (
                    <span aria-hidden="true" className="mt-0.5 flex shrink-0 rounded-pill bg-[#eaf1ff] p-[3px]">
                      <span className="flex size-3 items-center justify-center">
                        <img src={check} alt="" width={9.9} height={9.9} />
                      </span>
                    </span>
                  )}
                  <p className={cn('max-w-[470px] text-[15px] leading-[1.55] sm:text-[15.5px]', dark ? 'text-ink-on-dark-muted' : 'text-ink-600')}>
                    {b.lead && <strong className={cn('font-semibold', dark ? 'text-ink-on-dark' : 'text-ink-900')}>{b.lead}</strong>}
                    {b.lead && ' '}
                    {b.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {footnote.map((p) => (
            <p key={p} className={bodyText}>
              {p}
            </p>
          ))}
          {cta && (
            <div className="pt-0.5">
              <Button to={cta.to} intent={cta.intent ?? 'primary'}>
                {cta.label}
              </Button>
            </div>
          )}
        </div>
        {visual && <div className="w-full min-w-0 lg:max-w-[656px] lg:flex-1">{visual}</div>}
      </Container>
    </section>
  );
}
