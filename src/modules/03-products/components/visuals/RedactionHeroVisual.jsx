import RedactionReview from '@/components/visuals/RedactionReview';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import { AVATARS } from '@/components/visuals/people';

const SENTENCE = [
  'Card ending',
  { token: '[CARD_NUMBER]' },
  'was used by',
  { token: '[PERSON_NAME]' },
  'from phone',
  { token: '[PHONE_NUMBER]' },
];
const ROWS = [
  { label: 'Card number', match: '100%' },
  { label: 'Phone number', match: '88%' },
];

/**
 * AI Redaction hero composition (Figma 46:41105, 1220×355): redaction review in
 * the middle, action items left and decisions & topics right, layered in Figma
 * order. Fixed 1280×423 canvas (cards offset 30/8 so the float shadows are not
 * clipped; ~60px bottom room) — SolutionHero `centered` scales it via ScaleToFit.
 */
export default function RedactionHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[423px] w-[1280px]">
      <RedactionReview
        width={480}
        count={6}
        shadow="float"
        className="absolute left-[400px] top-2"
        sentence={SENTENCE}
        rows={ROWS}
      />
      <ActionItemsCard
        width={380}
        open={5}
        avatarSize={20}
        shadow="float"
        className="absolute left-[30px] top-16"
        tasks={[
          {
            title: 'Identify top recurring items for PO automation pilot',
            due: 'Jun 27',
            avatar: AVATARS['Faith Oluwale'],
          },
          {
            title: 'Confirm supplier onboarding checklist owners',
            due: 'Next week',
            avatar: AVATARS['George Nwokoro'],
          },
          { title: 'Draft the Q3 vendor scorecard', due: 'Jun 10', avatar: AVATARS['Ruth Godwin'] },
        ]}
      />
      <div className="absolute left-[870px] top-32 rounded-mock shadow-float-ui">
        <DecisionsCard
          width={380}
          date="May 30"
          rows={[
            { kind: 'decision', text: 'Pilot automated PO generation' },
            { kind: 'decision', text: 'Move supplier reviews to monthly' },
            { kind: 'risk', text: 'Low supplier engagement on savings' },
          ]}
          topics={['Savings', 'Vendor onboarding', 'ERP integration', 'Supplier contracts']}
        />
      </div>
    </div>
  );
}

/** Phone version of the hero visual (SolutionHero `visualCompact`, 520 wide): the redaction review card only. */
export function RedactionHeroVisualCompact() {
  return (
    <div aria-hidden="true" className="w-[520px] px-5 pb-12 pt-2">
      <RedactionReview width={480} count={6} shadow="float" sentence={SENTENCE} rows={ROWS} />
    </div>
  );
}
