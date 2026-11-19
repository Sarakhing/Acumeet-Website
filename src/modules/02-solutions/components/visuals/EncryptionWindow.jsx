import AppWindow from '@/components/ui/AppWindow';
import IconTile from '@/components/ui/IconTile';
import UiChip from '@/components/ui/UiChip';
import { cn } from '@/utils/cn';
import { StatusPill } from './RolePermissionsWindow';

/**
 * Figma "Window / Encryption" (Secure, 548 wide).
 * rows: [{ icon, tone, title, subtitle, state: 'On' | 'Option', highlight? }]
 */
export default function EncryptionWindow({ rows = [] }) {
  return (
    <AppWindow variant="titled" title="Encryption" status={<StatusPill>Protected</StatusPill>} className="w-[548px]" bodyClassName="gap-2 p-[18px]">
      {rows.map((r) => (
        <div
          key={r.title}
          className={cn(
            'flex items-center gap-3 rounded-[12px] border px-3 py-2.5',
            r.highlight ? 'border-[#cfe0ff] bg-[#f5f8ff]' : 'border-[#eeeff4] bg-surface-white',
          )}
        >
          <IconTile src={r.icon} tone={r.tone} size={36} />
          <div className="flex min-w-px flex-1 flex-col gap-0.5 leading-[1.5]">
            <span className="whitespace-nowrap text-[12.5px] font-semibold text-ink-900">{r.title}</span>
            <span className="text-[11px] text-[#8a8c94]">{r.subtitle}</span>
          </div>
          <UiChip tone={r.state === 'On' ? 'mint' : 'blue'} className="text-[10px]">
            {r.state}
          </UiChip>
        </div>
      ))}
    </AppWindow>
  );
}
