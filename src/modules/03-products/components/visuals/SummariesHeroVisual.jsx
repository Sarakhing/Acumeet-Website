import SummaryCard from '@/components/visuals/SummaryCard';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';

/**
 * AI Meeting Summaries hero composition (Figma 46:35489): "UI · Summary" (440)
 * with the floating "UI · Meeting capture" (400) overlapping its lower right.
 * Fixed 665×611 canvas whose origin is the hero's visual column (x=700, y=64
 * in the 1440 frame), so the cards land at Figma (820,110) / (940,342). The
 * last 64px is room for the capture card's float shadow (ScaleToFit clips).
 * SolutionHero: visualWidth={665}, padBottom 46 → 721px hero.
 */
export default function SummariesHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[611px] w-[665px]">
      <SummaryCard
        width={440}
        className="absolute left-[120px] top-[46px]"
        title="Weekly ProcureCentro Stand-up"
        scores={[
          { label: 'Quality', value: 41, bar: 'amber' },
          { label: 'Sentiment', value: 66, bar: 'green' },
          { label: 'Engagement', value: 30, bar: 'blue' },
        ]}
        insights={[
          'Fredelina flagged missed savings from low supplier engagement.',
          'George asked for a system sync audit before the next release.',
        ]}
      />
      <MeetingCaptureCard
        width={400}
        shadow="float"
        className="absolute left-[240px] top-[278px]"
        date="Tue, Jun 14"
        meetings={[
          { title: 'Weekly ProcureCentro Stand-up', meta: '4:00 PM · Zoom' },
          { title: 'Monthly marketing strategy review', meta: '9:00 AM · Meet' },
          { title: 'Product Development Sync-Up', meta: '2:00 PM · Teams' },
        ]}
      />
    </div>
  );
}
