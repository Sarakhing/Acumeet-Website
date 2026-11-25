import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import dot from '@/assets/images/solutions/dot-green.svg';

/** Figma "UI · Retention policy". rules: [{ label, keep }]; shadow: mock | float (MockCard). */
export default function RetentionPolicyCard({ rules = [], status = 'Active', width = 480, shadow, className }) {
  return (
    <MockCard
      title="Retention policy"
      gap={12}
      width={width}
      shadow={shadow}
      className={className}
      aside={
        <UiChip tone="green">
          <img src={dot} alt="" width={6} height={6} className="size-1.5" />
          {status}
        </UiChip>
      }
    >
      {rules.map((r) => (
        <div key={r.label} className="flex items-center gap-2.5 rounded-[10px] border border-border-muted px-3 py-2.5">
          <span className="min-w-px flex-1 text-[12px] font-medium leading-[1.5] text-ink-800">{r.label}</span>
          <span className="whitespace-nowrap text-[11px] leading-[1.5] text-ink-500">Keep for</span>
          <UiChip tone="neutral" shape="rounded" mono>
            {r.keep}
          </UiChip>
        </div>
      ))}
    </MockCard>
  );
}
