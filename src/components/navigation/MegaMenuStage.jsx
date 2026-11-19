import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import googleMeet from '@/assets/logos/integrations/google-meet.png';
import microsoftTeams from '@/assets/logos/integrations/microsoft-teams.png';
import zoom from '@/assets/logos/integrations/zoom.png';
import webex from '@/assets/icons/nav/logo-webex.svg';
import captureGlow from '@/assets/icons/nav/poster-capture-glow.svg';
import intelligenceGlow from '@/assets/icons/nav/poster-intelligence-glow.svg';
import line1 from '@/assets/icons/nav/poster-intelligence-line-1.svg';
import line2 from '@/assets/icons/nav/poster-intelligence-line-2.svg';
import line3 from '@/assets/icons/nav/poster-intelligence-line-3.svg';
import line4 from '@/assets/icons/nav/poster-intelligence-line-4.svg';
import dotAmber from '@/assets/icons/nav/poster-dot-amber.svg';
import dotMagenta from '@/assets/icons/nav/poster-dot-magenta.svg';
import checkCircle from '@/assets/icons/nav/check-circle.svg';
import { cn } from '@/utils/cn';

/**
 * The mock under a mega-menu feature card's copy (Figma "Stage", 236px tall,
 * mock bottom-aligned with 28px below). Fixed-size like Figma.
 */
export default function MegaMenuStage({ stage, media }) {
  const Mock = STAGES[stage];
  if (!Mock) return null;
  return (
    <div className="flex h-[236px] w-full flex-col items-center justify-end pb-7 pt-3">
      <Mock media={media} />
    </div>
  );
}

/* ---------- Video cards (Meeting Capture / Meeting Intelligence) ---------- */

/** 328×185 white card. Shows `media` (GIF / video) when supplied, else the HTML poster. */
function VideoCard({ media, poster }) {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="relative h-[185px] w-[328px] shrink-0 overflow-hidden rounded-[16px] bg-surface-white shadow-[0_16px_40px_rgba(10,10,18,0.12)]">
      {media?.src ? (
        media.type === 'video' ? (
          <video
            src={media.src}
            className="absolute inset-0 size-full object-cover"
            muted
            loop
            playsInline
            autoPlay={!reduced}
            aria-label={media.alt || undefined}
          />
        ) : (
          <img
            src={media.src}
            alt={media.alt ?? ''}
            className="absolute inset-0 size-full object-cover"
          />
        )
      ) : (
        poster
      )}
      <span className="absolute left-2.5 top-[153px] rounded-[99px] bg-black/45 py-[5px] pl-2 pr-2.5 text-[9.5px] font-medium leading-[1.27] text-white">
        ▶ Video
      </span>
    </div>
  );
}

/** White 34px logo tile; Meet/Teams/Zoom sit on a 20px grey square like the Figma logo component. */
function LogoTile({ src, x, y, bare = false, size = 16.471, nudge = -0.19 }) {
  return (
    <span
      className="absolute flex size-[34px] items-center justify-center overflow-hidden rounded-[9px] bg-white"
      style={{ left: x, top: y }}
    >
      {bare ? (
        <img src={src} alt="" width={20} height={20} className="size-5" />
      ) : (
        <span className="relative size-5 rounded-[3.684px] bg-[#e3e5ec]">
          <img
            src={src}
            alt=""
            className="absolute -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{
              width: size,
              height: size,
              left: `calc(50% + ${nudge}px)`,
              top: `calc(50% + ${nudge}px)`,
            }}
          />
        </span>
      )}
    </span>
  );
}

function CaptureStage({ media }) {
  return (
    <VideoCard
      media={media}
      poster={
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-brand-magenta">
          <img
            src={captureGlow}
            alt=""
            width={340}
            height={300}
            className="absolute left-[-90px] top-[-120px] max-w-none"
          />
          <p className="absolute inset-x-0 top-[70px] text-center text-[16px] font-medium leading-[21px] tracking-[-0.16px] text-white">
            Every meeting, captured
            <span className="block text-[#f7b500]">across your platforms</span>
          </p>
          <LogoTile src={googleMeet} x={24} y={20} />
          <LogoTile src={webex} x={268} y={16} bare />
          <LogoTile src={microsoftTeams} x={272} y={120} />
          <LogoTile src={zoom} x={40} y={112} size={15.789} nudge={0} />
        </div>
      }
    />
  );
}

function DarkPill({ x, y, dot, light = false, children }) {
  return (
    <span
      className={cn(
        'absolute flex items-center gap-[5px] whitespace-nowrap rounded-[99px] py-[5px] pl-2 pr-2.5 text-[10px] font-medium leading-[1.27]',
        light ? 'bg-white text-ink-800' : 'bg-[#1c1c26] text-[#e8e8ee]',
      )}
      style={{ left: x, top: y }}
    >
      {dot && <img src={dot} alt="" width={10} height={10} className="size-2.5" />}
      {children}
    </span>
  );
}

function IntelligenceStage({ media }) {
  return (
    <VideoCard
      media={media}
      poster={
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-surface-night">
          <img
            src={intelligenceGlow}
            alt=""
            width={340}
            height={190}
            className="absolute left-[-6px] top-[-110px] max-w-none"
          />
          <img
            src={line1}
            alt=""
            width={28.6021}
            height={44.2}
            className="absolute left-[204.2px] top-[91.9px] max-w-none"
          />
          <img
            src={line2}
            alt=""
            width={23.3875}
            height={44.2}
            className="absolute left-[203.81px] top-[48.9px] max-w-none"
          />
          <img
            src={line3}
            alt=""
            width={11}
            height={44.2}
            className="absolute left-[131px] top-[91.9px] max-w-none"
          />
          <img
            src={line4}
            alt=""
            width={19}
            height={44.2}
            className="absolute left-[131px] top-[48.9px] max-w-none"
          />
          <DarkPill x={14} y={81} dot={dotAmber}>
            Meeting captured
          </DarkPill>
          <DarkPill x={150} y={38}>
            ✦ Summary
          </DarkPill>
          <DarkPill x={142} y={124}>
            ☐ Action items
          </DarkPill>
          <DarkPill x={209} y={81} dot={dotMagenta} light>
            Owner assigned
          </DarkPill>
        </div>
      }
    />
  );
}

/* ---------- Product-UI cards (Industries / Security / Resources) ---------- */

/** "Live · Home · …" card: subtle grey, open at the bottom (no bottom border / radius). */
function LiveCard({ className, style, children }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex shrink-0 flex-col items-start overflow-hidden rounded-t-[14px] border-x border-t border-border-default bg-surface-subtle shadow-[0_16px_40px_rgba(10,10,18,0.08)]',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

const PILL = {
  blue: 'bg-tint-blue text-brand-blue',
  magenta: 'bg-tint-magenta text-brand-magenta',
  neutral: 'bg-surface-subtle text-ink-600',
  green: 'bg-tint-green text-signal-green',
};

function SummariesStage() {
  return (
    <LiveCard className="h-[196px] w-[218px] gap-2 p-3.5">
      <p className="text-[13px] font-bold leading-[1.4] text-ink-900">Q3 budget review</p>
      <p className="text-[10.5px] font-semibold leading-[1.4] text-ink-400">Topics</p>
      <div className="flex w-full flex-wrap gap-[5px]">
        {[
          ['Opex', 'blue'],
          ['Hiring plan', 'magenta'],
          ['Vendors', 'neutral'],
        ].map(([label, tone]) => (
          <span
            key={label}
            className={cn(
              'rounded-pill px-[9px] py-[3px] text-[11px] font-medium leading-[1.27]',
              PILL[tone],
            )}
          >
            {label}
          </span>
        ))}
      </div>
      <p className="text-[10.5px] font-semibold leading-[1.4] text-ink-400">Decisions</p>
      {['Freeze new vendor contracts', 'Approve two analyst roles'].map((d) => (
        <div key={d} className="flex w-full items-center gap-[7px]">
          <img src={checkCircle} alt="" width={14} height={14} className="size-3.5 shrink-0" />
          <p className="text-[12px] leading-[1.4] text-ink-600">{d}</p>
        </div>
      ))}
    </LiveCard>
  );
}

function Mask({ w }) {
  return (
    <span className="h-[15.744px] shrink-0 rounded-[4.498px] bg-ink-900" style={{ width: w }} />
  );
}

function RedactionStage() {
  const words = (s) =>
    s.split(' ').map((w) => (
      <span key={w} className="whitespace-nowrap text-[14.057px] leading-[1.4] text-ink-600">
        {w}
      </span>
    ));
  return (
    <LiveCard
      className="h-[197.469px] w-[245.161px] gap-[13.495px] rounded-t-[15.744px] p-[15.744px]"
      style={{ borderWidth: '1.125px 1.125px 0' }}
    >
      <div className="flex w-full flex-wrap items-center gap-x-[4.498px] gap-y-[6.748px]">
        {words('The customer’s account')}
        <Mask w={87.718} />
        {words('was flagged. Call them on')}
        <Mask w={101.213} />
        {words('to confirm.')}
      </div>
      <div className="flex w-full flex-wrap gap-[5.623px]">
        {['Account number masked', 'Phone masked'].map((p) => (
          <span
            key={p}
            className="rounded-pill bg-tint-magenta px-[10.121px] py-[3.374px] text-[12.37px] font-medium leading-[1.27] text-brand-magenta"
          >
            {p}
          </span>
        ))}
      </div>
    </LiveCard>
  );
}

function ActionsStage() {
  const rows = [
    ['Send report', true],
    ['Update policy', true],
    ['Book review', false],
  ];
  return (
    <LiveCard
      className="h-[195.749px] w-[293.663px] rounded-t-[18.859px] p-[18.859px]"
      style={{ borderWidth: '1.347px 1.347px 0' }}
    >
      {rows.map(([label, done], i) => (
        <div
          key={label}
          className="flex w-full items-center gap-[10.777px] border-border-default py-[12.124px]"
          style={i ? { borderTopWidth: '1.347px' } : undefined}
        >
          <span
            className={cn(
              'size-[18.859px] shrink-0 rounded-[5.388px]',
              done ? 'bg-signal-green' : 'border-ink-400',
            )}
            style={done ? undefined : { borderWidth: '2.021px' }}
          />
          <p className="min-w-0 flex-1 truncate text-[16.165px] leading-[1.4] text-ink-900">
            {label}
          </p>
          <span
            className={cn(
              'rounded-pill px-[12.124px] py-[4.041px] text-[14.818px] font-medium leading-[1.27]',
              done ? PILL.green : PILL.neutral,
            )}
          >
            {done ? 'Done' : 'Open'}
          </span>
        </div>
      ))}
    </LiveCard>
  );
}

const STAGES = {
  capture: CaptureStage,
  intelligence: IntelligenceStage,
  summaries: SummariesStage,
  redaction: RedactionStage,
  actions: ActionsStage,
};
