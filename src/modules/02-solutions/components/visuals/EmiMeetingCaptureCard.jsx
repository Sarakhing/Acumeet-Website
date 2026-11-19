import MockCard from '@/components/ui/MockCard';
import LiveDot from '@/components/ui/LiveDot';
import { cn } from '@/utils/cn';

/**
 * Figma "UI · Meeting capture" (EMI hero): upcoming meetings, the first one
 * live ("Recording", magenta bar, pink fill), the rest "Acumeet joins".
 * meetings: [{ title, meta, live? }]
 */
export default function EmiMeetingCaptureCard({ date, meetings = [], width = 400, shadow = 'float', className }) {
  return (
    <MockCard
      title="Upcoming meetings"
      width={width}
      shadow={shadow}
      className={className}
      aside={<span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">{date}</span>}
    >
      {meetings.map((m) => (
        <div
          key={m.title}
          className={cn(
            'flex items-center gap-2.5 rounded-[10px] border border-border-muted px-3 py-2.5',
            m.live ? 'bg-[#fff7fa]' : 'bg-surface-white',
          )}
        >
          <span className={cn('h-7 w-[3px] shrink-0 rounded-[2px]', m.live ? 'bg-brand-magenta' : 'bg-[#d5d8e0]')} />
          <span className="flex min-w-px flex-1 flex-col gap-0.5 whitespace-nowrap leading-[1.5]">
            <span className="truncate text-[12px] font-medium text-ink-800">{m.title}</span>
            <span className="text-[11px] text-ink-500">{m.meta}</span>
          </span>
          {m.live ? (
            <span className="flex shrink-0 items-center gap-1.5 rounded-pill bg-[#fdecec] px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-[#e5484d]">
              <LiveDot tone="red" size={6} pulse />
              Recording
            </span>
          ) : (
            <span className="shrink-0 rounded-pill bg-[#f6f6f8] px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-ink-700">Acumeet joins</span>
          )}
        </div>
      ))}
    </MockCard>
  );
}
