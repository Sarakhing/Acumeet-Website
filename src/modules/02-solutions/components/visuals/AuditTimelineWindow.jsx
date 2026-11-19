import AppWindow from '@/components/ui/AppWindow';
import UiChip from '@/components/ui/UiChip';
import nodeBlue from '@/assets/images/solutions/timeline-node-blue.svg';
import nodeEnd from '@/assets/images/solutions/timeline-node-magenta-end.svg';
import { StatusPill } from './RolePermissionsWindow';

/**
 * Figma "Window / Audit log" (Secure, 548 wide) — vertical event timeline.
 * events: [{ meta, title, tag, tagTone }] — last event uses the magenta end node.
 */
export default function AuditTimelineWindow({ events = [] }) {
  return (
    <AppWindow variant="titled" title="Audit log" status={<StatusPill>Sample</StatusPill>} className="w-[548px]" bodyClassName="p-[18px]">
      {events.map((e, i) => {
        const last = i === events.length - 1;
        return (
          <div key={e.title} className="flex items-start gap-3.5">
            <img src={last ? nodeEnd : nodeBlue} alt="" width={16} height={last ? 12 : 58} className="w-4 shrink-0" />
            <div className="flex min-w-px flex-1 flex-col items-start gap-1">
              <span className="whitespace-nowrap text-[10.5px] font-medium leading-[1.5] text-[#8a8c94]">{e.meta}</span>
              <span className="text-[12.5px] font-semibold leading-[1.5] text-ink-900">{e.title}</span>
              <UiChip tone={e.tagTone} className="text-[10px]">
                {e.tag}
              </UiChip>
            </div>
          </div>
        );
      })}
    </AppWindow>
  );
}
