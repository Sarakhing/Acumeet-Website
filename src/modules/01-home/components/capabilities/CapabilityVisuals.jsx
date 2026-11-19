import { cn } from '@/utils/cn';
import avatarGeorge from '@/assets/images/home/cap-avatar-george.jpg';
import avatarRachel from '@/assets/images/home/cap-avatar-rachel.jpg';
import avatarSarah from '@/assets/images/home/cap-avatar-sarah.jpg';
import liveDot from '@/assets/images/home/cap-live-dot.svg';
import iconCheck from '@/assets/images/home/cap-icon-check.svg';
import iconSend from '@/assets/images/home/cap-icon-send.svg';
import chatbot from '@/assets/images/home/cap-chatbot.png';
import chatbotMask from '@/assets/images/home/cap-chatbot-mask.png';

/**
 * Mini product demos for the Capabilities bento — built from the
 * "Live · Home · …" component sets (46:10907, 46:11301, 46:11338, 46:11365,
 * 46:11416, 46:11451). Each loop moves between the Figma states.
 *
 * Base styles are the final ("State=2") look, so with reduced motion
 * (animations collapsed to 0.01ms in index.css) the complete state shows.
 */
export const VISUAL_CSS = `
@keyframes cap-reveal {
  0%, 30% { opacity: 0; transform: translateY(4px); }
  40%, 88% { opacity: 1; transform: none; }
  96%, 100% { opacity: 0; transform: translateY(4px); }
}
@keyframes cap-swap-in {
  0%, 35% { opacity: 0; }
  42%, 88% { opacity: 1; }
  95%, 100% { opacity: 0; }
}
@keyframes cap-swap-out {
  0%, 35% { opacity: 1; }
  42%, 88% { opacity: 0; }
  95%, 100% { opacity: 1; }
}
@keyframes cap-mask {
  0%, 30% { opacity: 0.12; }
  40%, 88% { opacity: 1; }
  96%, 100% { opacity: 0.12; }
}
@keyframes cap-bar {
  0%, 30% { width: var(--w1); }
  42%, 85% { width: var(--w2); }
  97%, 100% { width: var(--w1); }
}
.cap-reveal { animation: cap-reveal 6s ease-in-out infinite; }
.cap-swap-in { animation: cap-swap-in 6s ease-in-out infinite; }
.cap-swap-out { animation: cap-swap-out 6s ease-in-out infinite; }
.cap-mask { animation: cap-mask 6s ease-in-out infinite; }
.cap-bar { animation: cap-bar 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
`;

/** Shared "Visual" panel: subtle surface, border on 3 sides, top-rounded, flush with card bottom. */
export function VisualPanel({ className, children }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex w-full shrink-0 flex-col overflow-hidden rounded-t-card border-x border-t border-border-default bg-surface-subtle p-3.5',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Figma "Status pill" (px 9 / py 3, Geist Medium 11). */
const PILL_TONES = {
  blue: 'bg-tint-blue text-brand-blue',
  magenta: 'bg-tint-magenta text-brand-magenta',
  neutral: 'bg-surface-subtle text-ink-600',
  green: 'bg-tint-green text-signal-green',
  amber: 'bg-tint-amber text-[#9e6605]',
};

function Pill({ tone = 'neutral', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-pill px-[9px] py-[3px] text-[11px] leading-[normal] font-medium',
        PILL_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

function Avatar({ src }) {
  return (
    <img
      src={src}
      alt=""
      className="size-5 shrink-0 rounded-[10px] border border-[rgb(158_0_89/0.17)] object-cover"
    />
  );
}

/* ---------------------------------------------------------------- Transcription */

// Bar heights exactly as drawn in Figma (46:10928).
const WAVE = [
  13, 15, 5, 8, 12, 14, 5, 21, 15, 12, 9, 19, 17, 5, 13, 8, 17, 6, 15, 13, 7, 4, 23, 23, 6, 12,
  23, 7, 12, 15, 17, 9, 7, 24, 12, 8, 14, 10, 6, 19, 10, 10, 5, 22, 8, 22, 13, 8, 16, 11, 19, 17,
  6, 8, 12, 5, 4, 12, 17, 17, 23, 10, 12, 13, 12, 21, 12, 12, 9, 8, 19, 6, 9, 19, 21, 23, 22, 21,
  19, 16, 15, 4, 10, 11, 8, 11, 17, 18, 9, 23, 3, 11, 15, 12, 5, 24, 13, 21, 15, 13, 6, 20, 22, 9,
  4, 6, 18, 18, 17, 21,
];

const LINES = [
  {
    avatar: avatarGeorge,
    name: 'George Okoro',
    time: '00:04:12',
    text: 'Let’s confirm the revised limit for the SME portfolio before we close.',
  },
  {
    avatar: avatarRachel,
    name: 'Rachel Falade',
    time: '00:04:31',
    text: 'Risk has signed off. I’ll share the updated exposure report by Friday.',
  },
];

export function TranscriptionVisual() {
  return (
    <VisualPanel className="h-[188px] gap-2.5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[12px] leading-[1.4] font-semibold text-ink-900">Credit review, weekly</p>
        <div className="flex items-center gap-1.5">
          <img src={liveDot} alt="" width={8} height={8} className="size-[7px] animate-pulse-dot" />
          <p className="text-[11px] leading-[1.4] font-semibold text-signal-red">Transcribing</p>
        </div>
      </div>
      {LINES.map((line) => (
        <div
          key={line.name}
          className="flex items-start gap-2.5 border-t border-dashed border-border-default pt-2"
        >
          <Avatar src={line.avatar} />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="flex gap-1.5 text-[11px] leading-[1.4] whitespace-nowrap">
              <span className="font-semibold text-ink-900">{line.name}</span>
              <span className="text-ink-400">{line.time}</span>
            </div>
            <p className="truncate text-[12.5px] leading-[1.45] text-ink-600 sm:whitespace-normal">
              {line.text}
            </p>
          </div>
        </div>
      ))}
      <div className="flex h-6 shrink-0 items-center gap-0.5 overflow-hidden">
        {WAVE.map((h, i) => (
          <span
            key={i}
            className="w-[2.5px] shrink-0 origin-center animate-wave rounded-[2px] bg-brand-blue"
            style={{ height: h, animationDelay: `${((i * 7) % 12) * -0.1}s` }}
          />
        ))}
      </div>
    </VisualPanel>
  );
}

/* ---------------------------------------------------------------- Summaries */

function Decision({ children, className }) {
  return (
    <div className={cn('flex items-center gap-[7px]', className)}>
      <img src={iconCheck} alt="" width={14} height={14} className="size-3.5 shrink-0" />
      <p className="min-w-0 flex-1 text-[12px] leading-[1.4] text-ink-600">{children}</p>
    </div>
  );
}

export function SummariesVisual() {
  return (
    <VisualPanel className="h-[196px] gap-2">
      <p className="text-[13px] leading-[1.4] font-bold text-ink-900">Q3 budget review</p>
      <p className="text-[10.5px] leading-[1.4] font-semibold text-ink-400">Topics</p>
      <div className="flex flex-wrap gap-[5px]">
        <Pill tone="blue">Opex</Pill>
        <Pill tone="magenta">Hiring plan</Pill>
        <Pill tone="neutral">Vendors</Pill>
      </div>
      <p className="text-[10.5px] leading-[1.4] font-semibold text-ink-400">Decisions</p>
      <Decision>Freeze new vendor contracts</Decision>
      <Decision className="cap-reveal">Approve two analyst roles</Decision>
    </VisualPanel>
  );
}

/* ---------------------------------------------------------------- Action items */

function Checkbox({ checked, animated }) {
  if (checked) return <span className="size-3.5 shrink-0 rounded-[4px] bg-signal-green" />;
  return (
    <span className="relative size-3.5 shrink-0 rounded-[4px] border-[1.5px] border-ink-400">
      {animated && (
        <span className="cap-swap-in absolute -inset-[1.5px] rounded-[4px] bg-signal-green" />
      )}
    </span>
  );
}

function ActionRow({ label, children, checked, animated, first }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 py-[9px]',
        !first && 'border-t border-border-default',
      )}
    >
      <Checkbox checked={checked} animated={animated} />
      <p className="min-w-0 flex-1 truncate text-[12px] leading-[1.4] text-ink-900">{label}</p>
      {children}
    </div>
  );
}

export function ActionItemsVisual() {
  return (
    <VisualPanel className="h-[145px]">
      <ActionRow first checked label="Send report">
        <Pill tone="green">Done</Pill>
      </ActionRow>
      <ActionRow animated label="Update policy">
        <span className="grid justify-items-end">
          <Pill tone="amber" className="cap-swap-out col-start-1 row-start-1">
            In progress
          </Pill>
          <Pill tone="green" className="cap-swap-in col-start-1 row-start-1">
            Done
          </Pill>
        </span>
      </ActionRow>
      <ActionRow label="Book review">
        <Pill tone="neutral">Open</Pill>
      </ActionRow>
    </VisualPanel>
  );
}

/* ---------------------------------------------------------------- Speaker recognition */

// Bar fill as % of the 160px track: State=1 → State=2.
const SPEAKERS = [
  { avatar: avatarGeorge, name: 'George', owns: 'Owns 2 actions', color: 'bg-brand-blue', w1: '54%', w2: '68%' },
  { avatar: avatarRachel, name: 'Rachel', owns: 'Owns 1 action', color: 'bg-brand-magenta', w1: '37%', w2: '26%' },
  { avatar: avatarSarah, name: 'Sarah', owns: 'Owns 1 action', color: 'bg-brand-amber', w1: '27.5%', w2: '44%' },
];

export function SpeakerVisual() {
  return (
    <VisualPanel className="h-[140px] gap-3">
      {SPEAKERS.map((s) => (
        <div key={s.name} className="flex items-center gap-2.5">
          <Avatar src={s.avatar} />
          <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
            <div className="flex items-start justify-between gap-2 leading-[1.4] whitespace-nowrap">
              <span className="text-[12px] font-semibold text-ink-900">{s.name}</span>
              <span className="text-[11px] text-ink-400">{s.owns}</span>
            </div>
            <div className="h-[7px] w-full overflow-hidden rounded-[99px] bg-border-subtle">
              <div
                className={cn('cap-bar h-[7px] rounded-[99px]', s.color)}
                style={{ '--w1': s.w1, '--w2': s.w2, width: s.w1 }}
              />
            </div>
          </div>
        </div>
      ))}
    </VisualPanel>
  );
}

/* ---------------------------------------------------------------- Redaction */

function Mask({ width }) {
  return (
    <span
      className="cap-mask inline-block h-3.5 shrink-0 rounded-[4px] bg-ink-900"
      style={{ width }}
    />
  );
}

export function RedactionVisual() {
  const words = (text) =>
    text.split(' ').map((w) => (
      <span key={w} className="text-[12.5px] leading-[1.4] whitespace-nowrap text-ink-600">
        {w}
      </span>
    ));
  return (
    <VisualPanel className="h-[172px] gap-3">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
        {words('The customer’s account')}
        <Mask width={78} />
        {words('was flagged. Call them on')}
        <Mask width={90} />
        {words('to confirm.')}
      </div>
      <div className="flex flex-wrap gap-[5px]">
        <Pill tone="magenta" className="cap-reveal">
          Account number masked
        </Pill>
        <Pill tone="magenta" className="cap-reveal [animation-delay:150ms]">
          Phone masked
        </Pill>
      </div>
    </VisualPanel>
  );
}

/* ---------------------------------------------------------------- Atlas */

export function AtlasVisual() {
  return (
    <VisualPanel className="min-h-[212px] gap-2.5 lg:h-[212px]">
      <div className="flex justify-end">
        <p className="rounded-[14px] rounded-br-[4px] bg-brand-blue px-[13px] py-[9px] text-[12.5px] leading-[1.4] text-ink-on-dark">
          What did we decide about the vendor contract?
        </p>
      </div>
      <div className="cap-reveal flex items-start gap-[9px] pl-1">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-[3px] bg-[rgb(0_96_255/0.17)] shadow-[1.5px_1.5px_8.8px_0_rgb(0_0_0/0.1)]">
          <img
            src={chatbot}
            alt=""
            className="h-[20.454px] w-[24.794px] object-cover"
            style={{
              maskImage: `url(${chatbotMask})`,
              WebkitMaskImage: `url(${chatbotMask})`,
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
            }}
          />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-[14px] rounded-tl-[4px] border border-border-default bg-surface-white px-[13px] py-2.5">
          <p className="text-[12.5px] leading-[1.45] text-ink-600">
            New vendor contracts are frozen until the Q4 review. Ogonna will book the review with
            procurement.
          </p>
          <div className="flex flex-wrap gap-[5px]">
            <Pill tone="blue">Q3 budget review, 12 Sep</Pill>
            <Pill tone="blue">Procurement sync, 18 Sep</Pill>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between rounded-pill border border-border-default bg-surface-white py-[7px] pr-[7px] pl-3.5">
        <p className="text-[12px] leading-[1.4] text-ink-400">Ask about any meeting</p>
        <img src={iconSend} alt="" width={26} height={26} className="size-[26px]" />
      </div>
    </VisualPanel>
  );
}
