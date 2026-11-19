import MockCard from '@/components/ui/MockCard';
import teams from '@/assets/images/home/hiw-logo-teams.png';
import zoom from '@/assets/images/home/hiw-logo-zoom.png';
import meet from '@/assets/images/home/hiw-logo-meet.png';
import slack from '@/assets/logos/integrations/slack.png';
import outlook from '@/assets/logos/integrations/outlook.png';
import jira from '@/assets/images/solutions/logo-jira.svg';
import asana from '@/assets/images/solutions/logo-asana.svg';

/*
 * Figma "UI · Connect" chips are scaled copies of one glassy chip, so their
 * label sizes / gaps / radii differ slightly — kept as in Figma.
 * `tile`: logo sits on a 26px #e3e5ec tile (photo logos); otherwise a bare 26px SVG.
 */
const APPS = [
  { name: 'Microsoft Teams', src: teams, tile: 4.789, img: 21.412, text: 9.352, gap: 5.845 },
  { name: 'Zoom', src: zoom, tile: 6.588, img: 20.526, text: 15.059, gap: 9.412 },
  { name: 'Google Meet', src: meet, tile: 4.716, img: 21.412, text: 10.779, gap: 6.737 },
  { name: 'Slack', src: slack, tile: 7, img: 21.412, text: 16, gap: 10 },
  { name: 'Outlook', src: outlook, tile: 5.798, img: 21.412, text: 13.252, gap: 8.282 },
  { name: 'Jira', src: jira, text: 13.252, gap: 8.282 },
  { name: 'Asana', src: asana, text: 13.252, gap: 8.282, narrow: true },
];

/** Figma "UI · Connect" (Solutions overview, Connect tile): integrations grid. */
export default function OverviewIntegrationsCard({ width = 460, className }) {
  return (
    <MockCard
      title="Integrations"
      gap={12}
      width={width}
      className={className}
      aside={<span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">6 connected</span>}
    >
      <div className="flex w-[420px] flex-wrap justify-center gap-2">
        {APPS.map((a) => (
          <span
            key={a.name}
            className="flex h-[42px] shrink-0 items-center overflow-hidden rounded-[8px] border border-white/90 bg-white/72 py-2.5 shadow-[0_16px_40px_rgb(10_15_51/0.08)] backdrop-blur-[14px]"
            style={{ gap: a.gap, paddingInline: a.narrow ? 8 : 12.86, width: a.narrow ? 87 : undefined }}
          >
            {a.tile ? (
              <span className="relative flex size-[26px] shrink-0 items-center justify-center bg-[#e3e5ec]" style={{ borderRadius: a.tile }}>
                <img src={a.src} alt="" width={a.img} height={a.img} className="object-cover" style={{ width: a.img, height: a.img }} />
              </span>
            ) : (
              <img src={a.src} alt="" width={26} height={26} className="size-[26px] shrink-0" />
            )}
            <span className="whitespace-nowrap font-medium leading-[1.4] text-ink-900" style={{ fontSize: a.text }}>
              {a.name}
            </span>
          </span>
        ))}
      </div>
    </MockCard>
  );
}
