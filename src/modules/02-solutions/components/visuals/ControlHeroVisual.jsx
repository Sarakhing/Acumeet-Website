import keyMagenta from '@/assets/images/solutions/ic-key-magenta-18.svg';
import databaseBlue from '@/assets/images/solutions/ic-database-blue-18.svg';
import sarah from '@/assets/images/solutions/avatar-task-sarah.jpg';
import daniel from '@/assets/images/solutions/avatar-task-daniel.jpg';
import rachel from '@/assets/images/solutions/avatar-task-rachel.jpg';
import KeysStorageCard from './KeysStorageCard';
import ActionItemsCard from './ActionItemsCard';

/**
 * Control hero composition (Figma 46:16982): "UI · Keys & storage" with the
 * "UI · Action items" card overlapping its lower right.
 * Fixed 540×673 canvas whose origin is the hero's lg content top (y=64) at
 * x=820 (the last 64px is room for the card shadow, which ScaleToFit would
 * otherwise clip); SolutionHero right-aligns it (visualAlign="end", visualWidth=540).
 */
export default function ControlHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[673px] w-[540px]">
      <div className="absolute left-0 top-[46px]">
        <KeysStorageCard
          actions={['Configure', 'Configure']}
          keyIcon={{ src: keyMagenta, tone: 'magenta' }}
          storageIcon={{ src: databaseBlue, tone: 'blue' }}
          iconSize={36}
        />
      </div>
      <ActionItemsCard
        className="absolute left-[120px] top-[321px]"
        tasks={[
          { title: 'Identify top recurring items for PO automation pilot', due: 'Jun 18', avatar: sarah },
          { title: 'Confirm supplier onboarding checklist owners', due: 'May 23', avatar: daniel },
          { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: rachel },
        ]}
      />
    </div>
  );
}
