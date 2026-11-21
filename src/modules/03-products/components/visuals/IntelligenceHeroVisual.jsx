import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import SummaryCard from '@/components/visuals/SummaryCard';

/**
 * Meeting Intelligence hero composition (Figma 46:41649): 600px App window
 * with the 500px "Decisions & topics" card, the floating 360px "UI · Summary"
 * overlapping its lower left and the "Live in your workspace" chip top right.
 * Fixed 665×591 canvas whose origin is the hero's visual column (x=700, y=64
 * in the 1440 frame), so window / summary / chip land at Figma
 * (760,100) / (700,301) / (1180,64). The last 64px is room for the summary's
 * float shadow. SolutionHero: visualWidth={665}, padBottom 36 → 691 hero.
 */
export default function IntelligenceHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[591px] w-[665px]">
      <AppWindow className="absolute left-[60px] top-9 w-[600px]">
        <DecisionsCard
          width={500}
          date="May 28"
          rows={[
            { kind: 'decision', text: 'Consolidate ERP sync alerts' },
            { kind: 'decision', text: 'Revisit the vendor approval cycle' },
            { kind: 'risk', text: 'Low supplier engagement on savings' },
          ]}
          topics={['KPIs', 'PO automation', 'Savings', 'Vendor onboarding']}
        />
      </AppWindow>
      <SummaryCard
        width={360}
        shadow="float"
        className="absolute left-0 top-[237px]"
        title="Client Feedback Analysis Session"
        scores={[
          { label: 'Quality', value: 46, bar: 'amber' },
          { label: 'Sentiment', value: 71, bar: 'green' },
          { label: 'Engagement', value: 55, bar: 'blue' },
        ]}
        insights={[
          'Faith proposed reworking the vendor approval process to unblock onboarding.',
          'Fredelina flagged missed savings from low supplier engagement.',
        ]}
      />
      <FloatChip className="absolute left-[480px] top-0">Live in your workspace</FloatChip>
    </div>
  );
}
