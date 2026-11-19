import Container from '@/components/ui/Container';
import DotEyebrow from '@/components/ui/DotEyebrow';
import glowMagenta from '@/assets/images/solutions/steps-glow-magenta.svg';
import glowBlue from '@/assets/images/solutions/steps-glow-blue.svg';
import glowAmber from '@/assets/images/solutions/steps-glow-amber.svg';
import { cn } from '@/utils/cn';

const GRADIENTS = {
  magenta: 'linear-gradient(135deg, #9e0059 0%, #e0488b 71%)',
  blue: 'linear-gradient(135deg, #0060ff 0%, #38bdf8 71%)',
  amber: 'linear-gradient(135deg, #ffba00 0%, #ff7a00 71%)',
};
const ORDER = ['magenta', 'blue', 'amber'];
const pad = (n) => String(n).padStart(2, '0');

/**
 * Figma "Steps / …" (Secure SIEM): dark section with blurred brand glows,
 * centred eyebrow/title/lead, a row of glassy numbered cards and a footnote.
 * steps: [{ title, body, gradient?: magenta|blue|amber }]
 */
export default function StepCards({ eyebrow, title, lead, steps = [], footnote, className }) {
  return (
    <section className={cn('relative overflow-hidden bg-[#0b0b14] py-16 lg:py-[104px]', className)}>
      <img src={glowMagenta} alt="" aria-hidden="true" width={884} height={884} className="pointer-events-none absolute -left-[302px] -top-[342px] max-w-none" />
      <img src={glowBlue} alt="" aria-hidden="true" width={952} height={952} className="pointer-events-none absolute left-[calc(50%+84px)] top-1 max-w-none" />
      <img src={glowAmber} alt="" aria-hidden="true" width={612} height={612} className="pointer-events-none absolute left-[calc(50%-286px)] top-[394px] max-w-none" />

      <Container className="relative flex flex-col items-center gap-12 lg:gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          {eyebrow && <DotEyebrow tone="dark">{eyebrow}</DotEyebrow>}
          <h2 className="max-w-[900px] text-balance text-[30px] lg:text-wrap font-medium leading-[1.12] tracking-[-1.1px] text-ink-on-dark sm:text-[38px] lg:text-display-2">
            {title}
          </h2>
          {lead && <p className="max-w-[720px] text-[16px] leading-[1.58] text-[#b9bccb] sm:text-body-lead sm:leading-[1.58]">{lead}</p>}
        </div>
        <ol className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex min-h-[195px] flex-col gap-3.5 rounded-tile border border-white/12 bg-white/5 p-[26px] backdrop-blur-[2px]"
            >
              <span
                className="flex size-11 items-center justify-center rounded-[14px] text-[14px] font-semibold leading-[1.5] text-ink-on-dark"
                style={{ backgroundImage: GRADIENTS[s.gradient ?? ORDER[i % 3]] }}
              >
                {pad(i + 1)}
              </span>
              <h3 className="text-[18px] font-semibold leading-[1.3] text-ink-on-dark">{s.title}</h3>
              <p className="text-[14.5px] leading-[1.58] text-[#b9bccb]">{s.body}</p>
            </li>
          ))}
        </ol>
        {footnote && <p className="max-w-[900px] text-center text-[15px] leading-[1.5] text-[#9fa3b5]">{footnote}</p>}
      </Container>
    </section>
  );
}
