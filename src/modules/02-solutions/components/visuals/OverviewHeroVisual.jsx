import keyMagenta from '@/assets/images/solutions/ic-key-magenta-18.svg';
import databaseBlue from '@/assets/images/solutions/ic-database-blue-18.svg';
import KeysStorageCard from './KeysStorageCard';
import RedactionReview from '@/components/visuals/RedactionReview';
import AuditLogCard from './AuditLogCard';

/**
 * Solutions overview hero composition (Figma 46:11519): "UI · Keys & storage",
 * the overlapping "UI · Redaction" (float shadow) and "UI · Audit log".
 * Fixed 600×754 canvas whose origin is the hero's lg content top (y=64) at
 * x=760; the bottom 64px leave room for the shadows. SolutionHero right-aligns
 * it (visualAlign="end", visualWidth=600).
 */
export default function OverviewHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[754px] w-[600px]">
      <div className="absolute left-0 top-[63px]">
        <KeysStorageCard
          width={400}
          actions={['Connected', 'Configure']}
          keyIcon={{ src: keyMagenta, tone: 'magenta' }}
          storageIcon={{ src: databaseBlue, tone: 'blue' }}
          iconSize={36}
          permissions={false}
        />
      </div>
      <RedactionReview
        className="absolute left-[140px] top-[253px]"
        width={440}
        count={6}
        tone="highlight"
        shadow="float"
        sentence={['Card ending', { token: '[CARD_NUMBER]' }, 'was used by', { token: '[PERSON_NAME]' }, 'from phone', { token: '[PHONE_NUMBER]' }]}
        rows={[
          { label: 'Card number', match: '100%' },
          { label: 'Phone number', match: '88%' },
        ]}
      />
      <AuditLogCard
        width={380}
        className="absolute left-[40px] top-[499px]"
        events={[
          { time: '10:31', action: 'Exported summary', actor: 'George Nwokoro' },
          { time: '09:58', action: 'Updated retention policy', actor: 'Admin' },
          { time: '09:12', action: 'Viewed transcript', actor: 'Ruth Godwin' },
        ]}
      />
    </div>
  );
}
