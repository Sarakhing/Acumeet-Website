import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import { AVATARS } from '@/components/visuals/people';

/** Figma "UI · Access" — workspace members with role dropdown chips. members: [{ name, role }]; shadow: mock | float (MockCard). */
export default function WorkspaceAccessCard({ members = [], width = 480, shadow, className }) {
  return (
    <MockCard title="Workspace access" width={width} shadow={shadow} className={className} aside={<UiChip tone="blue">SSO · Entra ID</UiChip>}>
      {members.map((m) => (
        <div key={m.name} className="flex items-center gap-2.5 py-1.5">
          <img src={AVATARS[m.name]} alt="" width={24} height={24} className="size-6 shrink-0 rounded-[12px] object-cover" />
          <span className="min-w-px flex-1 text-[12px] font-medium leading-[1.5] text-ink-800">{m.name}</span>
          <UiChip tone="outline" shape="rounded">{`${m.role}  ▾`}</UiChip>
        </div>
      ))}
    </MockCard>
  );
}
