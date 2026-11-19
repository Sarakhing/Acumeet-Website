import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import LiveDot from '@/components/ui/LiveDot';
import Waveform from '@/components/patterns/Waveform';
import { cn } from '@/utils/cn';
import { AVATARS } from './people';

/**
 * Figma "UI · Transcript" (Govern, 46:18915) — live transcript with speaker
 * lines and a live waveform. The last line is still being transcribed (muted).
 * lines: [{ name, time, text }]
 */
export default function TranscriptCard({ lines = [], width = 440 }) {
  return (
    <MockCard
      title="Transcript"
      gap={14}
      width={width}
      aside={
        <UiChip tone="red">
          <LiveDot tone="red" size={6} pulse />
          Live
        </UiChip>
      }
    >
      {lines.map((l, i) => (
        <div key={l.time} className="flex items-start gap-2.5">
          <img src={AVATARS[l.name]} alt="" width={26} height={26} className="size-[26px] shrink-0 rounded-[13px] object-cover" />
          <div className="flex min-w-px flex-1 flex-col gap-[3px] leading-[1.5]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-[12px] font-medium text-ink-800">{l.name}</span>
              <span className="font-mono text-[11px] tracking-[0.44px] text-ink-500">{l.time}</span>
            </div>
            <p className={cn('text-[13px]', i === lines.length - 1 ? 'text-ink-500' : 'text-ink-700')}>{l.text}</p>
          </div>
        </div>
      ))}
      <Waveform bars={56} barWidth={3} gap={4.14} height={28} color="rgb(158 0 89 / 0.35)" seed={11} />
    </MockCard>
  );
}
