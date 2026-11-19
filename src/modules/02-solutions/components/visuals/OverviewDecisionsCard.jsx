import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import { cn } from '@/utils/cn';

const KIND = {
  Decision: 'bg-[#e6f7ef] text-[#087443]',
  Risk: 'bg-[#fdecec] text-[#e5484d]',
};

/**
 * Figma "UI · Meeting intelligence" (Solutions overview, EMI tile): decisions
 * and risks with mono kind chips, then purple topic pills.
 * items: [{ kind: 'Decision' | 'Risk', text }], topics: string[]
 */
export default function OverviewDecisionsCard({ date, items = [], topics = [], width = 420, className }) {
  return (
    <MockCard
      title="Decisions & topics"
      gap={12}
      width={width}
      className={className}
      aside={<span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">{date}</span>}
    >
      {items.map((it) => (
        <div key={it.text} className="flex items-center gap-2.5">
          <span className={cn('shrink-0 rounded-[6px] px-[7px] py-1 font-mono text-[10px] font-medium leading-[1.5] tracking-[0.4px]', KIND[it.kind])}>
            {it.kind}
          </span>
          <span className="min-w-px flex-1 text-[12px] font-medium leading-[1.5] text-ink-800">{it.text}</span>
        </div>
      ))}
      <div className="flex flex-wrap gap-1.5">
        {topics.map((t) => (
          <UiChip key={t} tone="purple">
            {t}
          </UiChip>
        ))}
      </div>
    </MockCard>
  );
}
