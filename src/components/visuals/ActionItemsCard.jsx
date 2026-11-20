import MockCard from '@/components/ui/MockCard';
import checkOpen from '@/assets/images/solutions/check-loop-open.svg';
import jira from '@/assets/images/solutions/logo-jira.svg';
import asana from '@/assets/images/solutions/logo-asana.svg';
import { cn } from '@/utils/cn';

/**
 * Figma "UI · Action items" (Control hero, 46:17114) — task list with due dates,
 * owner avatars and a "Synced to Jira and Asana" footer. The first task is in
 * its highlighted state (grey fill, "Check loop" open checkbox).
 * tasks: [{ title, due, avatar }]
 */
export default function ActionItemsCard({
  tasks = [],
  open = 5,
  width = 400,
  shadow = 'float',
  avatarSize = 24,
  className,
}) {
  return (
    <MockCard
      title="Action items"
      gap={12}
      width={width}
      shadow={shadow}
      className={className}
      aside={
        <span className="shrink-0 whitespace-nowrap rounded-pill bg-[#fff6de] px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-[#8a5a00]">
          {open} open
        </span>
      }
    >
      {tasks.map((t, i) => (
        <div
          key={t.title}
          className={cn(
            'flex items-center gap-2.5 rounded-[10px] border border-border-muted px-3 py-2.5',
            i === 0 ? 'bg-[#f6f6f8]' : 'bg-surface-white',
          )}
        >
          {i === 0 ? (
            <img src={checkOpen} alt="" width={14} height={14} className="size-4 shrink-0" />
          ) : (
            <span className="size-4 shrink-0 rounded-[5px] border-[1.5px] border-[#c9ccd6] bg-surface-white" />
          )}
          <span className="min-w-px flex-1 truncate text-[12px] font-medium leading-[1.5] text-ink-800">
            {t.title}
          </span>
          <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
            {t.due}
          </span>
          <img
            src={t.avatar}
            alt=""
            width={avatarSize}
            height={avatarSize}
            className="shrink-0 rounded-pill object-cover"
            style={{ width: avatarSize, height: avatarSize }}
          />
        </div>
      ))}
      <div className="flex items-center gap-2 border-t border-border-muted pt-2.5">
        <span className="flex shrink-0 items-center gap-1">
          <img src={jira} alt="" width={14} height={14} className="size-3.5" />
          <img src={asana} alt="" width={14} height={14} className="size-3.5" />
        </span>
        <span className="min-w-px flex-1 text-[11px] text-[#6b7080]">Synced to Jira and Asana</span>
        <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-[8px] border border-border-muted bg-surface-white px-2 py-1 font-medium text-[#1d1f21]">
          <span className="text-[10px]">↗</span>
          <span className="text-[11px]">Push all</span>
        </span>
      </div>
    </MockCard>
  );
}
