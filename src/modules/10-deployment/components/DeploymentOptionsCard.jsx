import MockCard from '@/components/ui/MockCard';
import { cn } from '@/utils/cn';
import cloud from '@/assets/images/deployment/ic-cloud.svg';
import buildings from '@/assets/images/deployment/ic-buildings.svg';
import database from '@/assets/images/deployment/ic-database.svg';
import lockKey from '@/assets/images/deployment/ic-lock-key.svg';
import azure from '@/assets/images/solutions/logo-azure.svg';

const OPTIONS = [
  ['Cloud hosted', cloud],
  ['Enterprise hosted', buildings],
  ['Customer Azure tenant', azure],
  ['BYOS deployment', database],
  ['Private deployment', lockKey],
];

/**
 * Figma "UI · Deployment options" (48:351813, 350 wide): a radio list of the five deployment
 * approaches with `selected` (0–4) highlighted in blue, and an "Assessed with your team"
 * footer with a "Discuss options" button. Decorative — the radios are not inputs.
 */
export default function DeploymentOptionsCard({ selected = 0, width = 350, shadow }) {
  return (
    <MockCard
      title="Deployment"
      gap={12}
      width={width}
      shadow={shadow}
      aside={
        // plain span: cn() doesn't merge, so UiChip's neutral text colour can't be overridden
        <span className="shrink-0 rounded-[6px] bg-[#f6f6f8] px-2.5 py-1 font-mono text-[11px] font-medium leading-[1.5] tracking-[0.44px] text-[#4f5566]">
          Enterprise
        </span>
      }
    >
      <ul className="flex flex-col gap-3">
        {OPTIONS.map(([label, icon], i) => {
          const on = i === selected;
          return (
            <li
              key={label}
              className={cn(
                'flex h-[38px] items-center gap-2.5 rounded-[10px] border px-3',
                on ? 'border-brand-blue bg-[#f5f8ff]' : 'border-border-muted',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'size-3.5 shrink-0 rounded-full bg-surface-white',
                  on ? 'border-4 border-brand-blue' : 'border-[1.5px] border-[#c8cbd6]',
                )}
              />
              <img
                src={icon}
                alt=""
                width={16}
                height={16}
                className="size-4 shrink-0 object-contain"
              />
              <span className="whitespace-nowrap text-[12px] font-medium leading-[1.5] text-ink-800">
                {label}
              </span>
              {on && <span className="sr-only">(selected)</span>}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap text-[11px] leading-[1.5] text-[#8b90a3]">
          Assessed with your team
        </span>
        <span className="h-px min-w-px flex-1" />
        <span className="rounded-[8px] bg-brand-blue px-3 py-1.5 text-[11px] font-medium leading-[1.5] text-ink-on-dark">
          Discuss options
        </span>
      </div>
    </MockCard>
  );
}
