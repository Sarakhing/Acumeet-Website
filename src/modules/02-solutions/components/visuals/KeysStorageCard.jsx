import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import IconTile from '@/components/ui/IconTile';
import keyIcon from '@/assets/images/solutions/ic-key-blue-20.svg';
import dbIcon from '@/assets/images/solutions/ic-database-purple-20.svg';
import azure from '@/assets/images/solutions/logo-azure.svg';

function Row({ icon, tone, iconSize, title, provider, action }) {
  return (
    <div className="flex items-center gap-3 rounded-[12px] border border-border-muted p-3">
      <IconTile src={icon} tone={tone} size={iconSize} />
      <div className="flex min-w-px flex-1 flex-col gap-0.5">
        <span className="whitespace-nowrap text-[12px] font-medium leading-[1.5] text-ink-800">{title}</span>
        <span className="flex items-center gap-1.5">
          <img src={azure} alt="" width={14} height={13.234} className="h-[13.234px] w-[14px]" />
          <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">{provider}</span>
        </span>
      </div>
      <UiChip tone="outline">{action}</UiChip>
    </div>
  );
}

/**
 * Figma "UI · Keys & storage" — BYOK / BYOS rows + "Acumeet can" permissions.
 * actions: [keyAction, storageAction] e.g. ['Manage','Connected'] or ['Configure','Configure']
 * keyIcon / storageIcon: optional { src, tone } overrides, iconSize: 32 (default) | 36
 *   (Control uses a magenta 18px key and a blue 18px database in 36px chips).
 */
const DEFAULT_KEY = { src: keyIcon, tone: 'blue' };
const DEFAULT_STORAGE = { src: dbIcon, tone: 'purple' };

export default function KeysStorageCard({
  actions = ['Manage', 'Connected'],
  width = 440,
  keyIcon: keyOverride = DEFAULT_KEY,
  storageIcon = DEFAULT_STORAGE,
  iconSize = 32,
  permissions = true, // false drops the "Acumeet can" box (Solutions overview hero)
}) {
  return (
    <MockCard title="Data & storage" gap={12} width={width} aside={<UiChip tone="purple">Enterprise</UiChip>}>
      <Row icon={keyOverride.src} tone={keyOverride.tone} iconSize={iconSize} title="Bring your own key" provider="Azure Key Vault" action={actions[0]} />
      <Row icon={storageIcon.src} tone={storageIcon.tone} iconSize={iconSize} title="Bring your own storage" provider="Azure Blob Storage" action={actions[1]} />
      {permissions && (
        <div className="flex flex-col gap-1.5 rounded-[12px] bg-[#f6f6f8] p-3 text-[11px] leading-[1.5]">
          <span className="text-ink-500">Acumeet can</span>
          <span className="whitespace-pre font-mono tracking-[0.44px] text-ink-800">{'✓  Request wrap (GenerateDataKey)'}</span>
          <span className="whitespace-pre font-mono tracking-[0.44px] text-ink-800">{'✓  Request unwrap (Decrypt)'}</span>
          <span className="whitespace-pre font-mono tracking-[0.44px] text-[#e5484d]">{'✗  Export or access your master key'}</span>
        </div>
      )}
    </MockCard>
  );
}
