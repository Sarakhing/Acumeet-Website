import { cn } from '@/utils/cn';

/**
 * Small chip used inside product-UI mock-ups (11px, px-10 py-4).
 * tone: magenta | blue | green | purple | red | amber | neutral | outline | dark | redact | token
 *  - token  = dark mono placeholder chip ("[PERSON_NAME]")
 *  - redact = black 6px-radius action chip
 * shape: pill | rounded (6px)
 */
const TONES = {
  magenta: 'bg-brand-magenta-wash text-brand-magenta',
  blue: 'bg-[#e8f0ff] text-brand-blue',
  green: 'bg-[#e6f7ef] text-[#087443]',
  mint: 'bg-[#e8f7ee] text-[#13804b]',
  purple: 'bg-[#efeafb] text-[#6e56cf]',
  red: 'bg-[#fdecec] text-[#e5484d]',
  amber: 'bg-tint-amber text-[#b7791f]',
  neutral: 'bg-[#f6f6f8] text-ink-700',
  outline: 'border border-border-muted bg-surface-white text-ink-700',
  dark: 'bg-ink-800 text-ink-on-dark',
  token: 'bg-[#1a1a24] text-ink-on-dark font-mono tracking-[0.44px]',
};

export default function UiChip({ tone = 'neutral', shape = 'pill', mono = false, className, children }) {
  const token = tone === 'token';
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 whitespace-pre text-[11px] font-medium leading-[1.5]',
        token ? 'rounded-[4px] px-1.5 py-0.5' : 'px-2.5 py-1',
        !token && (shape === 'pill' ? 'rounded-pill' : 'rounded-[6px]'),
        mono && 'font-mono tracking-[0.44px]',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
