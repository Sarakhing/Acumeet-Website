import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';

const BAR = { amber: 'bg-brand-amber', green: 'bg-[#12b76a]', blue: 'bg-brand-blue' };

/**
 * Figma "UI · Summary" (Understand explorer 46:23432, Connect split 46:20627):
 * meeting title + blue "Summary" chip, three score tiles (label, %, progress
 * bar whose fill equals the %) and "Key insights" bullets.
 * scores: [{ label, value: number, bar: amber|green|blue }]; insights: string[]
 */
export default function SummaryCard({ title, scores = [], insights = [], width = 440 }) {
  return (
    <MockCard title={title} gap={14} width={width} aside={<UiChip tone="blue">Summary</UiChip>}>
      <div className="flex items-start gap-2">
        {scores.map((s) => (
          <div
            key={s.label}
            className="flex min-w-px flex-1 flex-col gap-1.5 rounded-[10px] bg-[#f6f6f8] p-2.5"
          >
            <span className="text-[11px] leading-[1.5] text-ink-500">{s.label}</span>
            <span className="text-[18px] font-medium leading-[1.35] tracking-[-0.18px] text-ink-800">
              {s.value}%
            </span>
            <span className="relative block h-1 w-full overflow-hidden rounded-[2px] bg-[#eef0f4]">
              <span
                className={`absolute inset-y-0 left-0 rounded-[2px] ${BAR[s.bar]}`}
                style={{ width: `${s.value}%` }}
              />
            </span>
          </div>
        ))}
      </div>
      <p className="text-[12px] font-medium leading-[1.5] text-ink-800">Key insights</p>
      {insights.map((t) => (
        <div key={t} className="flex items-start gap-2">
          <span className="size-1.5 shrink-0 rounded-[3px] bg-brand-magenta" />
          <p className="min-w-px flex-1 text-[12px] leading-[1.5] text-ink-700">{t}</p>
        </div>
      ))}
    </MockCard>
  );
}
