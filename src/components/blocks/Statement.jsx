import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import DotGrid from '@/components/patterns/DotGrid';
import AccentTitle from '@/components/ui/AccentTitle';
import { WAVEFORM } from '@/components/patterns/patternAssets';
import glowBlue from '@/assets/images/solutions/statement-glow-blue.svg';
import glowPink from '@/assets/images/solutions/statement-glow-pink.svg';
import { cn } from '@/utils/cn';

/**
 * Figma "Statement" / "THE CHALLENGE" — centred editorial statement.
 * tone="dark": night bg + dot-grid field, 52px title (Protect).
 * tone="light": white bg + soft blue/pink corner glows, 46px title (Secure).
 * tone="subtle": #fafafb bg, dark-tone typography (52px title, 19px body) in ink (AI Transcription 46:37334).
 * paragraphs: string[]; accent: gradient phrase after the title (inline).
 * pattern="waveform": full-bleed magenta 4% bar field behind the copy (Figma "Pattern · waveform", 5px bars),
 *   tiled from the 656×480 panel waveform at 1/3 opacity (its bars are 12%).
 */
export default function Statement({
  tone = 'dark',
  eyebrow,
  title,
  accent,
  paragraphs = [],
  glows = true,
  pattern,
  className,
}) {
  const dark = tone === 'dark';
  const subtle = tone === 'subtle';
  const big = dark || subtle;
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        dark && 'bg-surface-night py-20 lg:py-[140px]',
        subtle && 'bg-[#fafafb] py-20 lg:py-[140px]',
        !big && 'bg-surface-white py-16 lg:py-[104px]',
        className,
      )}
    >
      {dark && <DotGrid tone="dark" offset={12} />}
      {pattern === 'waveform' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.333]"
          style={{
            backgroundImage: `url(${JSON.stringify(WAVEFORM.panel.src)})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            backgroundSize: `${WAVEFORM.panel.w}px ${WAVEFORM.panel.h}px`,
          }}
        />
      )}
      {!big && glows && (
        <>
          <img
            src={glowBlue}
            alt=""
            aria-hidden="true"
            width={714}
            height={714}
            className="pointer-events-none absolute -left-[327px] -top-[207px] max-w-none"
          />
          <img
            src={glowPink}
            alt=""
            aria-hidden="true"
            width={646}
            height={646}
            className="pointer-events-none absolute -right-[253px] -top-[93px] max-w-none"
          />
        </>
      )}
      <Container
        className={cn(
          'relative flex flex-col items-center text-center',
          big ? 'gap-6' : 'gap-[22px]',
        )}
      >
        {eyebrow && <Eyebrow tone={dark ? 'dark' : 'muted'}>{eyebrow}</Eyebrow>}
        {subtle ? (
          <AccentTitle
            accent={accent}
            className="max-w-[1000px] text-balance text-[32px] font-medium leading-[1.12] tracking-[-0.9px] sm:text-[42px] lg:text-wrap lg:text-[52px] lg:tracking-[-1.56px]"
          >
            {title}
          </AccentTitle>
        ) : (
          <h2
            className={cn(
              'text-balance font-medium leading-[1.12] lg:text-wrap',
              dark
                ? 'max-w-[1000px] text-[32px] tracking-[-0.9px] text-ink-on-dark sm:text-[42px] lg:text-[52px] lg:tracking-[-1.56px]'
                : 'max-w-[920px] text-[30px] tracking-[-0.9px] text-ink-900 sm:text-[38px] lg:text-[46px] lg:tracking-[-1.15px]',
            )}
          >
            {title}
          </h2>
        )}
        {paragraphs.map((p) => (
          <p
            key={p}
            className={cn(
              'max-w-[780px]',
              big
                ? cn(
                    'text-[17px] leading-[1.35] tracking-[-0.19px] sm:text-[19px]',
                    dark ? 'text-ink-on-dark-muted' : 'text-ink-700',
                  )
                : 'text-[16.5px] leading-[1.6] text-ink-600 sm:text-[18px]',
            )}
          >
            {p}
          </p>
        ))}
      </Container>
    </section>
  );
}
