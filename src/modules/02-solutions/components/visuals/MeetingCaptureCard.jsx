import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import LiveDot from '@/components/ui/LiveDot';
import { cn } from '@/utils/cn';

/**
 * Figma "UI · Meeting capture" — "Upcoming meetings" (Connect hero carousel
 * 46:28613, stepper step 1): mono date, then meetings with a colour bar. The
 * first meeting is being recorded (pink row, magenta bar, red "Recording"
 * chip); the rest show "Acumeet joins".
 * meetings: [{ title, meta }]
 */
export default function MeetingCaptureCard({ date, meetings = [], width = 560 }) {
  return (
    <MockCard
      title="Upcoming meetings"
      gap={10}
      width={width}
      aside={
        <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
          {date}
        </span>
      }
    >
      {meetings.map((m, i) => {
        const live = i === 0;
        return (
          <div
            key={m.title}
            className={cn(
              'flex items-center gap-2.5 rounded-[10px] border border-border-muted px-3 py-2.5',
              live ? 'bg-[#fff7fa]' : 'bg-surface-white',
            )}
          >
            <span
              className={cn(
                'h-7 w-[3px] shrink-0 rounded-[2px]',
                live ? 'bg-brand-magenta' : 'bg-[#d5d8e0]',
              )}
            />
            <span className="flex min-w-px flex-1 flex-col gap-0.5 whitespace-nowrap leading-[1.5]">
              <span className="truncate text-[12px] font-medium text-ink-800">{m.title}</span>
              <span className="text-[11px] text-ink-500">{m.meta}</span>
            </span>
            {live ? (
              <UiChip tone="red">
                <LiveDot tone="red" size={6} pulse />
                Recording
              </UiChip>
            ) : (
              <UiChip tone="neutral">Acumeet joins</UiChip>
            )}
          </div>
        );
      })}
    </MockCard>
  );
}
