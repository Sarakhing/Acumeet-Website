import MockCard from '@/components/ui/MockCard';

/**
 * Figma "UI · Knowledge search" (Understand explorer tab 5, 46:25032): search
 * field with typing caret and result count, then meeting results with a mono
 * date and the matching excerpt.
 * results: [{ meeting, date, excerpt }]; shadow: 'mock' | 'float'; className (positioning).
 */
export default function KnowledgeSearchCard({ query, results = [], width = 480, shadow = 'mock', className }) {
  return (
    <MockCard gap={12} width={width} shadow={shadow} className={className}>
      <div className="flex items-center gap-2 rounded-[10px] border border-border-muted bg-[#f6f6f8] px-3 py-2.5">
        <span aria-hidden="true" className="text-[14px] leading-[1.5] text-ink-500">
          ⌕
        </span>
        <span className="whitespace-nowrap text-[13px] leading-[1.5] text-ink-800">{query}</span>
        <span className="h-4 w-0.5 shrink-0 rounded-[1px] bg-brand-blue" />
        <span className="h-px min-w-px flex-1" />
        <span className="whitespace-nowrap rounded-pill border border-border-muted bg-surface-white px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-ink-700">
          {results.length} meetings
        </span>
      </div>
      {results.map((r) => (
        <div
          key={r.meeting}
          className="flex flex-col gap-1 border-t border-border-muted py-2.5 leading-[1.5]"
        >
          <div className="flex items-center gap-2">
            <p className="min-w-px flex-1 text-[12px] font-medium text-ink-800">{r.meeting}</p>
            <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.44px] text-ink-500">
              {r.date}
            </span>
          </div>
          <p className="text-[12px] text-ink-700">{r.excerpt}</p>
        </div>
      ))}
    </MockCard>
  );
}
