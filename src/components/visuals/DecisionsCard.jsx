import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';

const KIND = {
  decision: { label: 'Decision', className: 'bg-[#e6f7ef] text-[#087443]' },
  risk: { label: 'Risk', className: 'bg-[#fdecec] text-[#e5484d]' },
};

/**
 * Figma "UI · Meeting intelligence" — "Decisions & topics" (Understand explorer
 * tab 2, 46:23501): mono date, Decision / Risk rows and purple topic chips.
 * rows: [{ kind: decision|risk, text }]; topics: string[]
 */
export default function DecisionsCard({ date, rows = [], topics = [], width = 480 }) {
  return (
    <MockCard
      title="Decisions & topics"
      gap={12}
      width={width}
      aside={
        <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
          {date}
        </span>
      }
    >
      {rows.map((r) => (
        <div key={r.text} className="flex items-center gap-2.5">
          <span
            className={`shrink-0 whitespace-nowrap rounded-[6px] px-[7px] py-1 font-mono text-[10px] font-medium leading-[1.5] tracking-[0.4px] ${KIND[r.kind].className}`}
          >
            {KIND[r.kind].label}
          </span>
          <p className="min-w-px flex-1 text-[12px] font-medium leading-[1.5] text-ink-800">
            {r.text}
          </p>
        </div>
      ))}
      <div className="flex flex-wrap items-start gap-1.5">
        {topics.map((t) => (
          <UiChip key={t} tone="purple">
            {t}
          </UiChip>
        ))}
      </div>
    </MockCard>
  );
}
