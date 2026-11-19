import { cn } from '@/utils/cn';
import icKey from '@/assets/images/home/sec-ic-key.svg';
import icDatabase from '@/assets/images/home/sec-ic-database.svg';
import logoAzure from '@/assets/images/home/sec-logo-azure.svg';
import avatarFaith from '@/assets/images/home/sec-avatar-faith.jpg';
import avatarGeorge from '@/assets/images/home/sec-avatar-george.jpg';
import avatarRuth from '@/assets/images/home/sec-avatar-ruth.jpg';
import avatarWarith from '@/assets/images/home/sec-avatar-warith.jpg';

/**
 * Overlapping product UI cards for "06 · Security and governance" (Figma 46:8577).
 * Purely illustrative: built in HTML/CSS, no interactive controls.
 */

const STORAGE_ROWS = [
  {
    title: 'Bring your own key',
    provider: 'Azure Key Vault',
    icon: icKey,
    border: 'border-[rgba(194,24,91,0.32)]',
  },
  {
    title: 'Bring your own storage',
    provider: 'Azure Blob Storage',
    icon: icDatabase,
    border: 'border-[rgba(33,133,246,0.32)]',
  },
];

const PERMISSIONS = [
  { label: 'Request wrap (GenerateDataKey)', allowed: true },
  { label: 'Request unwrap (Decrypt)', allowed: true },
  { label: 'Export or access your master key', allowed: false },
];

const MEMBERS = [
  { name: 'Faith Oluwale', role: 'Admin', avatar: avatarFaith },
  { name: 'George Nwokoro', role: 'Owner', avatar: avatarGeorge },
  { name: 'Ruth Godwin', role: 'Viewer', avatar: avatarRuth },
  { name: 'Warith Abraham', role: 'Member', avatar: avatarWarith },
];

const CARD =
  'flex flex-col rounded-[16px] border border-border-muted bg-surface-white p-4 sm:p-5';

function Chip({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center whitespace-pre px-[10px] py-1 text-[11px] font-medium leading-[1.5]',
        className,
      )}
    >
      {children}
    </span>
  );
}

function CardHeader({ title, chip, chipClassName }) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="flex-1 text-[13px] font-medium leading-[1.5] text-ink-800">{title}</h3>
      <Chip className={cn('rounded-pill', chipClassName)}>{chip}</Chip>
    </div>
  );
}

function KeysStorageCard({ className }) {
  return (
    <div
      className={cn(
        CARD,
        'gap-3 shadow-[0_12px_16px_rgba(11,11,18,0.07),0_1px_1px_rgba(11,11,18,0.04)]',
        className,
      )}
    >
      <CardHeader title="Data & storage" chip="Enterprise" chipClassName="bg-[#efeafb] text-[#6e56cf]" />

      <ul className="flex flex-col gap-3">
        {STORAGE_ROWS.map((row) => (
          <li
            key={row.title}
            className="flex items-center gap-3 rounded-[12px] border border-border-muted p-3"
          >
            <span
              className={cn(
                'flex size-9 shrink-0 items-center justify-center rounded-[10px] border bg-surface-white',
                row.border,
              )}
            >
              <img src={row.icon} alt="" width={18} height={18} />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="text-[12px] font-medium leading-[1.5] text-ink-800">{row.title}</p>
              <p className="flex items-center gap-1.5">
                <span className="flex size-3.5 shrink-0 items-center">
                  <img src={logoAzure} alt="" width={14} height={13.2344} />
                </span>
                <span className="truncate font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
                  {row.provider}
                </span>
              </p>
            </div>
            <Chip className="rounded-pill border border-border-muted bg-surface-white text-[#4f5566]">
              Configure
            </Chip>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-1.5 rounded-[12px] bg-[#f6f6f8] p-3 text-[11px] leading-[1.5]">
        <p className="text-ink-500">Acumeet can</p>
        <ul className="flex flex-col gap-1.5 font-mono tracking-[0.44px]">
          {PERMISSIONS.map((perm) => (
            <li
              key={perm.label}
              className={cn('flex gap-[1.3em]', perm.allowed ? 'text-ink-800' : 'text-[#e5484d]')}
            >
              <span aria-hidden="true">{perm.allowed ? '✓' : '✗'}</span>
              <span>
                <span className="sr-only">{perm.allowed ? 'Allowed: ' : 'Not allowed: '}</span>
                {perm.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AccessCard({ className }) {
  return (
    <div
      className={cn(
        CARD,
        'gap-2.5 shadow-[0_24px_32px_rgba(11,11,18,0.14),0_1px_1px_rgba(11,11,18,0.08)]',
        className,
      )}
    >
      <CardHeader title="Workspace access" chip="SSO · Entra ID" chipClassName="bg-[#e8f0ff] text-brand-blue" />
      <ul className="flex flex-col gap-2.5">
        {MEMBERS.map((m) => (
          <li key={m.name} className="flex items-center gap-2.5 py-1.5">
            <img
              src={m.avatar}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 rounded-full border border-[rgba(158,0,89,0.17)] object-cover"
            />
            <p className="min-w-0 flex-1 truncate text-[12px] font-medium leading-[1.5] text-ink-800">
              {m.name}
            </p>
            <Chip className="rounded-[6px] border border-border-muted bg-surface-white text-[#4f5566]">
              <span className="sr-only">Role: </span>
              {`${m.role}  `}
              <span aria-hidden="true">▾</span>
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SecurityProductCards({ className }) {
  return (
    <div
      className={cn(
        // Mobile: stacked and staggered. md+: Figma's overlapping layout
        // (Access card offset 192px right, 299px down from the Keys card).
        'relative flex w-full max-w-[572px] flex-col md:grid md:grid-cols-1 md:grid-rows-1 md:items-start',
        className,
      )}
    >
      <KeysStorageCard className="w-full max-w-[400px] md:col-start-1 md:row-start-1 md:w-[400px]" />
      <AccessCard className="relative mt-4 ml-auto w-[calc(100%-24px)] max-w-[380px] md:col-start-1 md:row-start-1 md:mt-[299px] md:ml-[192px] md:w-[380px]" />
    </div>
  );
}
