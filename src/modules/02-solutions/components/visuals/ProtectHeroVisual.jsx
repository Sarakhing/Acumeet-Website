import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import AuditLogCard from './AuditLogCard';
import RedactionReview from './RedactionReview';

/**
 * Protect hero composition (Figma 46:14211): App window with redaction review,
 * overlapping audit-log card and "Live in your workspace" float chip.
 * Fixed 665×493 canvas — SolutionHero scales it via ScaleToFit (visualWidth=665).
 */
export default function ProtectHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[493px] w-[665px]">
      <AppWindow className="absolute left-[60px] top-9 w-[600px]">
        <RedactionReview
          count={3}
          sentence={['Card ending', { token: '[CARD_NUMBER]' }, 'was used by', { token: '[PERSON_NAME]' }, 'from phone', { token: '[PHONE_NUMBER]' }]}
          rows={[
            { label: 'Card number', match: '100%' },
            { label: 'Phone number', match: '91%' },
          ]}
        />
      </AppWindow>
      <AuditLogCard
        width={360}
        shadow="float"
        className="absolute left-0 top-[255px]"
        events={[
          { time: '10:46', action: 'Updated retention policy', actor: 'Admin' },
          { time: '10:26', action: 'Viewed transcript', actor: 'Ruth Godwin' },
          { time: '10:16', action: 'Shared meeting record', actor: 'Warith Abraham' },
          { time: '09:59', action: 'Changed role to Admin', actor: 'Admin' },
        ]}
      />
      <FloatChip className="absolute left-[480px] top-0">Live in your workspace</FloatChip>
    </div>
  );
}
