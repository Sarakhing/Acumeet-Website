import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import { AVATARS } from '@/components/visuals/people';

/**
 * Action Item Management hero composition (Figma 46:38624): 600px App window
 * with a 500px "UI · Action items" card, the 380px "UI · Atlas" chat
 * overlapping its lower left and the "Live in your workspace" float chip.
 * Fixed 665×722 canvas whose origin is the hero's visual column (x=700, y=64),
 * so window / chip land at Figma (760,100) / (1180,64). Figma puts Atlas at
 * x=676 (24px into the copy gutter); here it starts at the column edge (700)
 * so ScaleToFit doesn't clip it. The last 40px is shadow room.
 * SolutionHero: visualWidth={665}, padBottom 0 → 786px hero.
 */
export default function ActionItemsHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[722px] w-[665px]">
      <AppWindow className="absolute left-[60px] top-9 w-[600px]">
        <ActionItemsCard
          width={500}
          open={4}
          avatarSize={20}
          shadow="mock"
          tasks={[
            {
              title: 'Identify top recurring items for PO automation pilot',
              due: 'Jun 12',
              avatar: AVATARS['Faith Oluwale'],
            },
            {
              title: 'Confirm supplier onboarding checklist owners',
              due: 'May 17',
              avatar: AVATARS['George Nwokoro'],
            },
            { title: 'Draft the Q3 vendor scorecard', due: 'Today', avatar: AVATARS['Ruth Godwin'] },
          ]}
        />
      </AppWindow>
      <div className="absolute left-0 top-[235px]">
        <AtlasChatCard
          width={380}
          scope="My tasks"
          question="Show all my action items"
          answer={[
            'You have ',
            { b: '3 open action items' },
            ' from the Weekly ProcureCentro Stand-up. The nearest is ',
            { b: 'vendor approval feedback, due Jun 7' },
            '.',
          ]}
          quote={{
            name: 'George Nwokoro',
            time: '27:15',
            text: '“Faith, can you share feedback on the approval draft by June 7?”',
          }}
          sources={['Stand-up · 27:15 · George']}
          prompts={['Mark one as done', 'What’s overdue?']}
        />
      </div>
      <FloatChip className="absolute left-[480px] top-0">Live in your workspace</FloatChip>
    </div>
  );
}
