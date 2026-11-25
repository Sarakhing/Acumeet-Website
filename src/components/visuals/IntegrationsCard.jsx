import MockCard from '@/components/ui/MockCard';
import teams from '@/assets/logos/integrations/microsoft-teams.png';
import zoom from '@/assets/logos/integrations/zoom.png';
import meet from '@/assets/logos/integrations/google-meet.png';
import slack from '@/assets/logos/integrations/slack.png';
import outlook from '@/assets/logos/integrations/outlook.png';
import jira from '@/assets/images/solutions/logo-jira-16.svg';
import asana from '@/assets/images/solutions/logo-asana-16.svg';
import salesforce from '@/assets/images/solutions/logo-salesforce-16.svg';
import hubspot from '@/assets/images/solutions/logo-hubspot-16.svg';
import { cn } from '@/utils/cn';

/**
 * Figma "Logo · …" (16×16). Raster logos sit on a grey rounded tile
 * (Teams/Meet/Slack 13.18px, Zoom 12.63px); the vector ones fill the box.
 */
const LOGOS = {
  'Microsoft Teams': { src: teams, tile: 13.176 },
  Zoom: { src: zoom, tile: 12.632 },
  'Google Meet': { src: meet, tile: 13.176 },
  Slack: { src: slack, tile: 13.176 },
  Outlook: { src: outlook, tile: 13.176 }, // Use Cases explorer "UI · Connect"
  Jira: { src: jira },
  Asana: { src: asana },
  Salesforce: { src: salesforce },
  HubSpot: { src: hubspot },
};

function Logo({ name }) {
  const l = LOGOS[name];
  if (!l.tile) return <img src={l.src} alt="" width={16} height={16} className="size-4 shrink-0" />;
  return (
    <span className="relative flex size-4 shrink-0 items-center justify-center rounded-[2.947px] bg-[#e3e5ec]">
      <img
        src={l.src}
        alt=""
        className="max-w-none object-cover"
        style={{ width: l.tile, height: l.tile }}
      />
    </span>
  );
}

/**
 * Figma "UI · Connect" — "Integrations" (Connect hero carousel 46:28519,
 * stepper step 3): "N connected" + a wrapping grid of logo chips. Items with
 * `muted` (Salesforce, HubSpot) have grey labels (not connected).
 * items: [{ name, muted? }]  (name must be a key of LOGOS)
 */
export default function IntegrationsCard({ items = [], connected, width = 560 }) {
  return (
    <MockCard
      title="Integrations"
      gap={12}
      width={width}
      aside={
        <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
          {connected} connected
        </span>
      }
    >
      <div className="flex flex-wrap items-start gap-2">
        {items.map((it) => (
          <span
            key={it.name}
            className="flex items-center gap-1.5 rounded-[10px] border border-border-muted bg-surface-white px-2.5 py-2"
          >
            <Logo name={it.name} />
            <span
              className={cn(
                'whitespace-nowrap text-[12px] font-medium leading-[1.5]',
                it.muted ? 'text-ink-500' : 'text-ink-800',
              )}
            >
              {it.name}
            </span>
          </span>
        ))}
      </div>
    </MockCard>
  );
}
