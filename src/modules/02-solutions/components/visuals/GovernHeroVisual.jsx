import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import AuditLogCard from './AuditLogCard';
import RetentionPolicyCard from './RetentionPolicyCard';

/**
 * Govern hero composition (Figma 46:17751): App window with a 500px retention
 * policy, overlapping audit-log card and "Live in your workspace" float chip.
 * Fixed 665×638 canvas (Figma 665×574 + 64px room for the audit card shadow,
 * which ScaleToFit would otherwise clip) — SolutionHero scales it (visualWidth=665).
 */
export default function GovernHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[638px] w-[665px]">
      <AppWindow className="absolute left-[60px] top-9 w-[600px]">
        <RetentionPolicyCard
          width={500}
          status="Finance"
          rules={[
            { label: 'Recordings', keep: '30 days' },
            { label: 'Transcripts', keep: '6 months' },
            { label: 'Summaries', keep: '2 years' },
            { label: 'Audit logs', keep: '7 years' },
          ]}
        />
      </AppWindow>
      <AuditLogCard
        width={360}
        shadow="float"
        className="absolute left-0 top-[336px]"
        events={[
          { time: '10:10', action: 'Signed in via SSO', actor: 'Ruth Godwin' },
          { time: '09:58', action: 'Applied legal hold', actor: 'Admin' },
          { time: '09:39', action: 'Edited action item', actor: 'George Nwokoro' },
          { time: '09:30', action: 'Approved redactions', actor: 'Faith Oluwale' },
        ]}
      />
      <FloatChip className="absolute left-[480px] top-0">Live in your workspace</FloatChip>
    </div>
  );
}
