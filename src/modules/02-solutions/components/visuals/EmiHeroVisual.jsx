import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import EmiMeetingCaptureCard from './EmiMeetingCaptureCard';

/**
 * EMI hero composition (Figma 46:20687): "UI · Analytics" with the
 * "UI · Meeting capture" card overlapping its lower right. Fixed 540×573
 * canvas whose origin is the hero's lg content top (y=64) at x=820; the bottom
 * 64px leave room for the float shadow. SolutionHero right-aligns it.
 */
export default function EmiHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[573px] w-[540px]">
      <MeetingAnalyticsCard
        className="absolute left-0 top-[46px]"
        width={440}
        range="Last 7 days"
        barWidth={30}
        barPitch={40}
        legend={[
          { label: 'Sentiment', value: '88%', tone: 'green' },
          { label: 'Engagement', value: '40%', tone: 'blue' },
          { label: 'Quality', value: '48%', tone: 'amber' },
        ]}
      />
      <EmiMeetingCaptureCard
        className="absolute left-[120px] top-[240px]"
        date="Mon, Jun 8"
        meetings={[
          { title: 'Product Development Sync-Up', meta: '9:00 AM · Teams', live: true },
          { title: 'Client Feedback Analysis Session', meta: '2:00 PM · Zoom' },
          { title: 'Weekly ProcureCentro Stand-up', meta: '4:00 PM · Meet' },
        ]}
      />
    </div>
  );
}
