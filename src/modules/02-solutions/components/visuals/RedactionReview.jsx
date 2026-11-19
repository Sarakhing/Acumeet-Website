import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import LiveDot from '@/components/ui/LiveDot';

/**
 * Figma "UI · Redaction" — redaction review card.
 * sentence: (string | { token })[]; rows: [{ label, match }]
 */
export default function RedactionReview({ count, sentence = [], rows = [], width = 500 }) {
  return (
    <MockCard
      title="Redaction review"
      gap={14}
      width={width}
      aside={
        <UiChip tone="magenta">
          <LiveDot tone="magenta" size={6} />
          {count} items
        </UiChip>
      }
    >
      <p className="flex flex-wrap items-center gap-x-[5px] gap-y-1.5 text-[13px] leading-[1.5] text-ink-700">
        {sentence.map((part, i) =>
          typeof part === 'string' ? (
            <span key={i}>{part}</span>
          ) : (
            <UiChip key={i} tone="token">
              {part.token}
            </UiChip>
          ),
        )}
      </p>
      <span className="h-px w-full bg-border-muted" />
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2">
          <span className="whitespace-nowrap text-[12px] font-medium leading-[1.5] text-ink-800">{r.label}</span>
          <span className="h-px min-w-px flex-1" />
          <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">Match {r.match}</span>
          <span className="rounded-[6px] bg-ink-800 px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-ink-on-dark">Redact</span>
        </div>
      ))}
    </MockCard>
  );
}
