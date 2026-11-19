import { cn } from '@/utils/cn';
import acumeetMark from '@/assets/images/solutions/acumeet-mark-28x22.svg';
import recordIcon from '@/assets/images/solutions/record-icon-28.svg';
import AtlasAvatar from './AtlasAvatar';

/** Figma "Status pill" tones used in the meeting record. */
const STATUS = {
  ready: 'bg-tint-green text-signal-green',
  decision: 'bg-tint-blue text-brand-blue',
  done: 'bg-tint-green text-signal-green',
  progress: 'bg-tint-amber text-[#9e6605]',
  owner: 'bg-tint-magenta text-brand-magenta',
  neutral: 'bg-surface-subtle text-ink-600',
};

function Pill({ tone, children }) {
  return (
    <span className={cn('shrink-0 whitespace-nowrap rounded-pill px-[9px] py-[3px] text-[11px] font-medium leading-normal', STATUS[tone])}>
      {children}
    </span>
  );
}

/**
 * Figma "Meeting record" (Solutions overview "Meeting types" slides, 468 wide):
 * header with the Acumeet mark (`mark="acumeet"`, slide 1) or the round record
 * icon, five rows (owner avatar + status pill), and an "Ask Atlas" footer.
 * rows: [{ label, avatar, status: { tone, label } }]
 * `fixedOwner` keeps the avatar + pill group 110px wide (slide 1 layout).
 */
export default function MeetingRecordCard({ title, mark = 'record', rows = [], fixedOwner = false, width = 468 }) {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col overflow-hidden rounded-[18px] bg-surface-white shadow-[0_18px_40px_-12px_rgb(31_51_120/0.14)]"
      style={{ width }}
    >
      <div className="flex items-center gap-2.5 px-5 pb-3.5 pt-[18px]">
        {mark === 'acumeet' ? (
          <img src={acumeetMark} alt="" width={28} height={22} className="h-[22px] w-7 shrink-0" />
        ) : (
          <img src={recordIcon} alt="" width={28} height={28} className="size-7 shrink-0" />
        )}
        <p className="min-w-px flex-1 text-[15px] font-semibold leading-[1.4] text-ink-900">{title}</p>
        <Pill tone="ready">Record ready</Pill>
      </div>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2.5 border-t border-border-default px-5 py-3">
          <p className="min-w-px flex-1 text-[13.5px] leading-[1.4] text-ink-900">{r.label}</p>
          <span className={cn('flex shrink-0 items-center gap-2.5', fixedOwner && 'w-[110px]')}>
            <img src={r.avatar} alt="" width={24} height={24} className="size-6 shrink-0 rounded-pill object-cover" />
            <Pill tone={r.status.tone}>{r.status.label}</Pill>
          </span>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-surface-subtle px-5 pb-3.5 pt-3">
        <AtlasAvatar />
        <p className="whitespace-nowrap text-[12.5px] leading-[1.4] text-ink-400">Ask Atlas about this meeting</p>
      </div>
    </div>
  );
}
