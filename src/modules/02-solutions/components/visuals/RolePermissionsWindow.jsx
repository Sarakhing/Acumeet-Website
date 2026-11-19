import AppWindow from '@/components/ui/AppWindow';
import IconTile from '@/components/ui/IconTile';
import UiChip from '@/components/ui/UiChip';
import dot from '@/assets/images/solutions/dot-green-dark.svg';
import toggleOn from '@/assets/images/solutions/toggle-on.svg';
import toggleOff from '@/assets/images/solutions/toggle-off.svg';
import { cn } from '@/utils/cn';

/** Green status pill used in Secure "Window / …" bars ("● Admin", "● Protected"). */
export function StatusPill({ children }) {
  return (
    <UiChip tone="mint" className="text-[10.5px]">
      <img src={dot} alt="" width={6} height={6} className="size-1.5" />
      {children}
    </UiChip>
  );
}

/**
 * Figma "Window / Role permissions" (Secure RBAC, 548 wide).
 * rows: [{ icon, tone, title, subtitle, on }]
 */
export default function RolePermissionsWindow({ rows = [] }) {
  return (
    <AppWindow variant="titled" title="Role permissions" status={<StatusPill>Admin</StatusPill>} className="w-[548px]" bodyClassName="p-1.5">
      {rows.map((r, i) => (
        <div key={r.title} className={cn('flex items-center gap-3 px-3 py-[11px]', i > 0 && 'border-t border-[#f0f1f5]')}>
          <IconTile src={r.icon} tone={r.tone} size={36} />
          <div className="flex min-w-px flex-1 flex-col gap-0.5 whitespace-nowrap leading-[1.5]">
            <span className="text-[12.5px] font-semibold text-ink-900">{r.title}</span>
            <span className="text-[11px] text-[#8a8c94]">{r.subtitle}</span>
          </div>
          <img src={r.on ? toggleOn : toggleOff} alt={r.on ? 'On' : 'Off'} width={34} height={20} className="h-5 w-[34px] shrink-0" />
        </div>
      ))}
    </AppWindow>
  );
}
