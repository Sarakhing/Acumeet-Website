import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import MeetingAnalyticsCard from './MeetingAnalyticsCard';
import { AVATARS } from '@/components/visuals/people';

/**
 * Understand hero composition (Figma 46:19099): "UI · Analytics" (440) with
 * the floating "UI · Action items" (400) overlapping its lower right.
 * Fixed 660×556 canvas whose origin is the hero's visual column (x=680, y=64 in
 * the 1440 frame), so the cards land at Figma x=820/940, y=110/280. The last
 * 64px is room for the action card's float shadow (ScaleToFit clips overflow).
 */
export default function UnderstandHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[556px] w-[660px]">
      <MeetingAnalyticsCard
        width={440}
        range="Last 30 days"
        barWidth={30}
        barPitch={40}
        className="absolute left-[140px] top-[46px]"
        legend={[
          { label: 'Sentiment', value: '78%', tone: 'green' },
          { label: 'Engagement', value: '50%', tone: 'blue' },
          { label: 'Quality', value: '53%', tone: 'amber' },
        ]}
      />
      <ActionItemsCard
        width={400}
        open={5}
        avatarSize={20}
        className="absolute left-[260px] top-[216px]"
        tasks={[
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Fri',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Confirm supplier onboarding checklist owners',
            due: 'Jun 5',
            avatar: AVATARS['George Nwokoro'],
          },
          {
            title: 'Draft the Q3 vendor scorecard',
            due: 'May 10',
            avatar: AVATARS['Ruth Godwin'],
          },
        ]}
      />
    </div>
  );
}
