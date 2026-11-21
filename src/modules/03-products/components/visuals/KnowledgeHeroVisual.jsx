import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import { AVATARS } from '@/components/visuals/people';

/**
 * Knowledge Repository hero composition (Figma 46:43028): "UI · Knowledge
 * search" (440) with the floating "UI · Action items" (400) overlapping its
 * lower right. Fixed 660×650 canvas whose origin is the hero's visual column
 * (copy is 580 wide, so x=680, y=64 in the 1440 frame): cards land at Figma
 * (820,110) / (940,374). The last 64px is room for the float shadow.
 * SolutionHero: visualWidth={660}, padBottom 23 → 737 hero.
 */
export default function KnowledgeHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[650px] w-[660px]">
      <KnowledgeSearchCard
        width={440}
        query="pricing decision last year"
        className="absolute left-[140px] top-[46px]"
        results={[
          {
            meeting: 'Knowledge Sharing Session',
            date: 'Jun 18',
            excerpt: '…pricing approach agreed for enterprise plans.',
          },
          {
            meeting: 'Leadership Offsite',
            date: 'Apr 27',
            excerpt: '…decision linked to the policy library.',
          },
          {
            meeting: 'Policy Handover',
            date: 'May 10',
            excerpt: '…lessons learned shared at the retrospective.',
          },
        ]}
      />
      <ActionItemsCard
        width={400}
        open={5}
        avatarSize={20}
        className="absolute left-[260px] top-[310px]"
        tasks={[
          {
            title: 'Share the retrospective notes with new joiners',
            due: 'May 9',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Archive completed project meetings',
            due: 'Jun 14',
            avatar: AVATARS['George Nwokoro'],
          },
          {
            title: 'Review search results for the onboarding guide',
            due: 'Today',
            avatar: AVATARS['Ruth Godwin'],
          },
        ]}
      />
    </div>
  );
}
