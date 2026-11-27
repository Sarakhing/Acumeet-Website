import SummaryCard from '@/components/visuals/SummaryCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import AtlasAvatar from '@/components/visuals/AtlasAvatar';
import { AVATARS } from '@/components/visuals/people';

/** Figma "Atlas prompt" (46:31791): frosted pill with the Atlas avatar and a dark suggestion chip. */
export function ProductsAtlasPrompt({ className }) {
  return (
    <div
      className={`flex w-[351px] items-center gap-2.5 rounded-pill border border-white/90 bg-white/78 px-4 py-3 shadow-[0_20px_24px_rgb(38_26_77/0.1)] backdrop-blur-[12px] ${className ?? ''}`}
    >
      <AtlasAvatar />
      <span className="whitespace-nowrap text-[14px] leading-[1.5] text-ink-700">Ask Atlas anything...</span>
      <span className="whitespace-nowrap rounded-pill bg-ink-800 px-2.5 py-1 text-[11px] font-medium leading-[1.5] text-white">
        Show all my action items
      </span>
    </div>
  );
}

const SUMMARY = {
  title: 'Client feedback analysis session',
  scores: [
    { label: 'Quality', value: 66, bar: 'amber' },
    { label: 'Sentiment', value: 91, bar: 'green' },
    { label: 'Engagement', value: 55, bar: 'blue' },
  ],
  insights: [
    'George asked for a system sync audit before the next release.',
    'Faith proposed reworking the vendor approval process to unblock onboarding.',
  ],
};

/** Summary card alone (+ Atlas prompt) for phones, where the full composition would be unreadable. */
export function ProductsOverviewHeroVisualCompact() {
  return (
    <div aria-hidden="true" className="relative h-[330px] w-[500px]">
      <SummaryCard width={500} {...SUMMARY} />
      <ProductsAtlasPrompt className="absolute left-[74.5px] top-[262px]" />
    </div>
  );
}

/**
 * Product overview hero composition (Figma 46:30446, cards at 1440-frame
 * y 496–900). Canvas origin = frame (96, 496); 1248 wide, 444 tall (40px of
 * room for the float shadows). Transcript, action items and the Atlas prompt
 * sit above the summary card as in Figma's layer order.
 */
export default function ProductsOverviewHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[444px] w-[1248px]">
      <div className="absolute left-[374px] top-0">
        <SummaryCard width={500} {...SUMMARY} />
      </div>
      <TranscriptCard
        className="absolute left-0 top-[70px]"
        width={380}
        lines={[
          { name: 'Faith Oluwale', time: '15:24', text: 'We completed 23 story points, which is a 15% increase from the previous sprint.' },
          { name: 'George Nwokoro', time: '16:31', text: 'The authentication module is progressing well, but we need a security review.' },
          { name: 'Fredelina Augustus', time: '17:38', text: 'I can coordinate with the InfoSec team to schedule the audit.' },
        ]}
      />
      <ActionItemsCard
        className="absolute left-[848px] top-[86px]"
        shadow="mock"
        avatarSize={20}
        open={5}
        sync={['Jira', 'Asana', 'Trello']}
        tasks={[
          { title: 'Identify top recurring items for PO automation pilot', due: 'Jun 9', avatar: AVATARS['Faith Oluwale'] },
          { title: 'Confirm supplier onboarding checklist owners', due: 'Next week', avatar: AVATARS['George Nwokoro'] },
          { title: 'Draft the Q3 vendor scorecard', due: 'Jun 19', avatar: AVATARS['Fredelina Augustus'] },
        ]}
      />
      <ProductsAtlasPrompt className="absolute left-[447.5px] top-[282px]" />
    </div>
  );
}
