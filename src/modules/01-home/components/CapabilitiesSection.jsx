import { cn } from '@/utils/cn';
import {
  VISUAL_CSS,
  TranscriptionVisual,
  SummariesVisual,
  ActionItemsVisual,
  SpeakerVisual,
  RedactionVisual,
  AtlasVisual,
} from './capabilities/CapabilityVisuals';

/**
 * Figma "03 · Capabilities" (46:8444) — bento of six capability cards.
 * Desktop rows are 536/268/268 and 268/268/536 (2fr 1fr 1fr / 1fr 1fr 2fr, 16px gaps, 1104 wide).
 */
const ROW_1 = [
  {
    title: 'AI meeting transcription',
    body: 'Speaker-labelled transcripts without manual note-taking.',
    Visual: TranscriptionVisual,
    wide: true,
  },
  {
    title: 'Meeting summaries',
    body: 'Topics, decisions and next steps on one page.',
    Visual: SummariesVisual,
  },
  {
    title: 'Action items',
    body: 'Owners and status tracked after the call.',
    Visual: ActionItemsVisual,
  },
];

const ROW_2 = [
  {
    title: 'Speaker recognition',
    body: 'See who said what, and who owns what.',
    Visual: SpeakerVisual,
  },
  {
    title: 'Redaction AI',
    body: 'Detect and mask personal and financial details in meeting records.',
    Visual: RedactionVisual,
  },
  {
    title: 'Atlas',
    body: 'Ask questions across past meetings and get answers fast.',
    Visual: AtlasVisual,
    wide: true,
  },
];

function CapabilityCard({ title, body, Visual, wide }) {
  return (
    <article
      className={cn(
        'flex flex-col justify-between gap-6 overflow-hidden rounded-panel border border-border-default bg-surface-white px-6 pt-6 lg:h-[340px] lg:gap-0',
        wide && 'md:col-span-2 lg:col-span-1',
      )}
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-heading-4 text-ink-900">{title}</h3>
        <p className="text-body-sm text-ink-600">{body}</p>
      </div>
      <Visual />
    </article>
  );
}

export default function CapabilitiesSection() {
  return (
    <section aria-labelledby="home-capabilities-title" className="bg-surface-white">
      <style>{VISUAL_CSS}</style>
      <div className="flex flex-col items-center gap-10 border border-border-subtle bg-surface-subtle px-5 py-16 sm:px-8 sm:py-20 lg:gap-12 lg:px-12 lg:py-[100px]">
        <h2
          id="home-capabilities-title"
          className="max-w-[820px] text-center text-[30px] leading-[1.12] font-medium tracking-[-0.9px] text-balance text-ink-900 sm:text-[38px] sm:tracking-[-1px] lg:text-[48px] lg:leading-[1.1] lg:tracking-[-1.2px]"
        >
          Turn Every Meeting Into Business Intelligence You Can Act On
        </h2>

        <div className="flex w-full max-w-[1104px] flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
            {ROW_1.map((card) => (
              <CapabilityCard key={card.title} {...card} />
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
            {ROW_2.map((card) => (
              <CapabilityCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
