import MockCard from '@/components/ui/MockCard';
import LiveDot from '@/components/ui/LiveDot';
import dot from '@/assets/images/solutions/dot-green.svg';

/**
 * Figma "UI · Audit log" — hash-chained event list. First event gets the live dot.
 * events: [{ time, action, actor }]
 */
export default function AuditLogCard({ events = [], width = 480, shadow = 'mock', className }) {
  return (
    <MockCard
      title="Audit log"
      shadow={shadow}
      className={className}
      width={width}
      aside={<span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">hash-chained</span>}
    >
      {events.map((e, i) => (
        <div key={`${e.time}-${e.action}`} className="flex items-center gap-2.5 py-2">
          <span className="w-10 shrink-0 font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">{e.time}</span>
          {i === 0 ? (
            <LiveDot size={6} pulse />
          ) : (
            <img src={dot} alt="" width={6} height={6} className="size-1.5 shrink-0" />
          )}
          <span className="min-w-px flex-1 text-[12px] font-medium leading-[1.5] text-ink-800">{e.action}</span>
          <span className="whitespace-nowrap text-[11px] leading-[1.5] text-ink-500">{e.actor}</span>
        </div>
      ))}
    </MockCard>
  );
}
