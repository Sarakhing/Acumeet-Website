import DecisionsCard from '@/components/visuals/DecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import { AVATARS } from '@/components/visuals/people';

/**
 * 04.00 hero visual (Figma 48:287861 + 48:287887). Canvas origin = hero x 680
 * (80 + 580 copy + 20 gap), y 64; ~64px bottom room for the float shadow.
 */
export default function IndustriesHeroVisual() {
  return (
    <div className="relative" style={{ width: 680, height: 526 }}>
      <div className="absolute" style={{ left: 140, top: 46 }}>
        <DecisionsCard
          width={440}
          date="Jun 6"
          rows={[
            { kind: 'decision', text: 'Adopt the revised hiring plan' },
            { kind: 'decision', text: 'Set up a cost optimisation working group' },
            { kind: 'risk', text: 'Delayed delivery of the core banking upgrade' },
          ]}
          topics={['Strategy', 'Budget', 'Hiring', 'Expansion']}
        />
      </div>
      <div className="absolute" style={{ left: 260, top: 186 }}>
        <ActionItemsCard
          open={3}
          avatarSize={20}
          tasks={[
            { title: 'Confirm owners for the cost optimisation plan', due: 'May 24', avatar: AVATARS['Faith Oluwale'] },
            { title: 'Share the revised hiring plan with HR', due: 'Next week', avatar: AVATARS['Warith Abraham'] },
            { title: 'Schedule the follow-up on regional expansion', due: 'May 7', avatar: AVATARS['Ruth Godwin'] },
          ]}
        />
      </div>
    </div>
  );
}
