import { cn } from '@/utils/cn';
import logoTeams from '@/assets/images/home/hiw-logo-teams.png';
import logoZoom from '@/assets/images/home/hiw-logo-zoom.png';
import logoMeet from '@/assets/images/home/hiw-logo-meet.png';
import avatarGeorge from '@/assets/images/home/hiw-avatar-george.jpg';
import avatarRachel from '@/assets/images/home/hiw-avatar-rachel.jpg';
import avatarSarah from '@/assets/images/home/hiw-avatar-sarah.jpg';
import acumeetMark from '@/assets/images/home/hiw-acumeet-mark.svg';
import icCheck from '@/assets/images/home/hiw-ic-check.svg';
import icSearch from '@/assets/images/home/hiw-ic-search.svg';

/**
 * Right-hand "product window" contents for each step of
 * Figma "How it works / Interactive" (46:10206). Illustrative only.
 */

/* Figma "Status pill" (9×3, 11px medium). The shared Badge uses 8×2 padding and a
   different amber, so a local pill keeps these mocks pixel-faithful. */
const PILL_TONES = {
  neutral: 'bg-surface-subtle text-ink-600',
  blue: 'bg-tint-blue text-brand-blue',
  green: 'bg-tint-green text-signal-green',
  amber: 'bg-tint-amber text-[#9e6605]',
};

export function StatusPill({ tone = 'neutral', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center whitespace-nowrap rounded-pill px-[9px] py-[3px] text-[11px] font-medium leading-[normal]',
        PILL_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const AVATAR_RINGS = {
  blue: 'bg-[rgba(0,96,255,0.17)]',
  magenta: 'bg-[rgba(158,0,89,0.17)]',
  green: 'bg-[rgba(18,160,92,0.17)]',
};

function Avatar({ src, ring }) {
  return (
    <span
      className={cn('flex size-[34px] shrink-0 items-center justify-center rounded-full', AVATAR_RINGS[ring])}
    >
      <img
        src={src}
        alt=""
        width={28}
        height={28}
        className="size-[28.333px] rounded-full border-[1.417px] border-[rgba(158,0,89,0.17)] object-cover"
      />
    </span>
  );
}

const PEOPLE = {
  george: { name: 'George Okoro', avatar: avatarGeorge, ring: 'blue' },
  rachel: { name: 'Rachel Falade', avatar: avatarRachel, ring: 'magenta' },
  sarah: { name: 'Sarah King', avatar: avatarSarah, ring: 'green' },
};

/* ---------------- Step 1 · Invite ---------------- */

const PLATFORMS = [
  { name: 'Microsoft Teams', logo: logoTeams, size: 16.471, nudge: true, selected: true },
  { name: 'Zoom', logo: logoZoom, size: 15.789 },
  { name: 'Google Meet', logo: logoMeet, size: 16.471, nudge: true },
];

const ATTENDEES = [
  { ...PEOPLE.george, status: 'Organiser' },
  { ...PEOPLE.rachel, status: 'Accepted' },
  { ...PEOPLE.sarah, status: 'Accepted' },
];

export function InvitePanel() {
  return (
    <div className="flex flex-col gap-1 p-5 sm:p-6">
      <p className="text-[19px] font-semibold leading-[1.25] text-ink-900">Weekly credit review</p>
      <p className="text-[13px] leading-[1.4] text-ink-400">Thursday, 10:00 to 11:00</p>
      <ul className="flex flex-wrap gap-2 pt-4 pb-[18px]" aria-label="Meeting platform">
        {PLATFORMS.map((p) => (
          <li
            key={p.name}
            className={cn(
              'flex items-center gap-[7px] rounded-[10px] border px-3 py-2',
              p.selected ? 'border-brand-blue bg-tint-blue' : 'border-border-default',
            )}
          >
            <span className="relative flex size-5 shrink-0 items-center justify-center rounded-[3.684px] bg-[#e3e5ec]">
              <img
                src={p.logo}
                alt=""
                className={cn('object-cover', p.nudge && '-translate-x-[0.19px] -translate-y-[0.19px]')}
                style={{ width: p.size, height: p.size }}
              />
            </span>
            <span
              className={cn(
                'text-[12.5px] font-semibold leading-[1.4]',
                p.selected ? 'text-brand-blue' : 'text-ink-900',
              )}
            >
              {p.name}
              {p.selected && <span className="sr-only"> (selected)</span>}
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2.5">
        {ATTENDEES.map((a) => (
          <li key={a.name} className="flex items-center gap-2.5">
            <Avatar src={a.avatar} ring={a.ring} />
            <span className="min-w-0 flex-1 truncate text-[13px] leading-[1.4] text-ink-900">{a.name}</span>
            <StatusPill>{a.status}</StatusPill>
          </li>
        ))}
        <li className="flex items-center gap-2.5 rounded-[12px] border border-dashed border-brand-blue bg-tint-blue px-3 py-2.5">
          <img src={acumeetMark} alt="" width={25.987} height={20.458} className="shrink-0" />
          <span className="min-w-0 flex-1 text-[13px] font-semibold leading-[1.4] text-ink-900">Acumeet</span>
          <StatusPill tone="blue">Added to call</StatusPill>
        </li>
      </ul>
    </div>
  );
}

/* ---------------- Step 2 · Capture ---------------- */

const DECISIONS = ['Revised SME limit approved', 'Policy draft due Friday'];

const TRANSCRIPT = [
  { ...PEOPLE.george, time: '00:04:12', text: 'Let’s confirm the revised limit before we close.' },
  { ...PEOPLE.rachel, time: '00:04:31', text: 'Risk has signed off. Report coming Friday.' },
];

const BOX = 'flex flex-col rounded-[12px] border border-border-default bg-surface-subtle p-3';
const BOX_LABEL = 'text-[11.5px] font-semibold leading-[1.4] text-ink-400';

export function CapturePanel() {
  return (
    <div className="flex flex-col gap-[14px] p-5 sm:p-6">
      <div className="flex gap-[18px] border-b border-border-default" aria-hidden="true">
        <span className="border-b-2 border-brand-blue pb-[9px] text-[12.5px] font-semibold leading-[1.4] text-brand-blue">
          Summary
        </span>
        <span className="pb-[9px] text-[12.5px] font-semibold leading-[1.4] text-ink-400">Transcript</span>
        <span className="pb-[9px] text-[12.5px] font-semibold leading-[1.4] text-ink-400">Actions</span>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className={cn(BOX, 'flex-1 gap-2')}>
          <p className={BOX_LABEL}>Summary</p>
          <p className="text-[12.5px] leading-[1.45] text-ink-600">
            The team reviewed SME exposure and agreed a revised limit. Risk signed off, pending the
            updated report.
          </p>
        </div>
        <div className={cn(BOX, 'flex-1 gap-2')}>
          <p className={BOX_LABEL}>Decisions</p>
          <ul className="flex flex-col gap-2">
            {DECISIONS.map((d) => (
              <li key={d} className="flex items-center gap-[7px]">
                <img src={icCheck} alt="" width={14} height={14} className="shrink-0" />
                <span className="text-[12px] leading-[1.4] text-ink-600">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cn(BOX, 'gap-2.5')}>
        <p className={BOX_LABEL}>Transcript</p>
        <ul className="flex flex-col gap-2.5">
          {TRANSCRIPT.map((t) => (
            <li key={t.time} className="flex items-start gap-2.5">
              <Avatar src={t.avatar} ring={t.ring} />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5 leading-[1.4]">
                <p className="flex gap-1.5 text-[11px]">
                  <span className="font-semibold text-ink-900">{t.name}</span>
                  <span className="text-ink-400">{t.time}</span>
                </p>
                <p className="text-[12.5px] text-ink-600">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Step 3 · Follow through ---------------- */

const RESULTS = [
  { title: 'Weekly credit review, 25 Sep', text: 'Revised SME limit approved after risk sign-off.' },
  { title: 'Risk committee, 11 Sep', text: 'Exposure on the SME limit to be reviewed quarterly.' },
];

export function FollowThroughPanel() {
  return (
    <div className="flex flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-center gap-2 rounded-[12px] border border-border-default bg-surface-subtle px-3 py-2.5">
        <img src={icSearch} alt="" width={14} height={14} className="shrink-0" />
        <span className="text-[13px] leading-[1.4] text-ink-900">
          <span className="sr-only">Search: </span>SME limit
        </span>
      </div>
      {RESULTS.map((r) => (
        <div key={r.title} className="flex flex-col gap-0.5 border-t border-border-default pt-2 text-[12.5px] leading-[1.4]">
          <p className="font-semibold text-ink-900">{r.title}</p>
          <p className="text-ink-600">{r.text}</p>
        </div>
      ))}
      <p className="text-[11.5px] font-semibold leading-[1.4] text-ink-400">My actions</p>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-2 py-1">
          <span className="size-3.5 shrink-0 rounded-[4px] bg-signal-green" aria-hidden="true" />
          <span className="min-w-0 flex-1 text-[12.5px] leading-[1.4] text-ink-900">
            <span className="sr-only">Completed: </span>Send exposure report
          </span>
          <StatusPill tone="green">Done</StatusPill>
        </li>
        <li className="flex items-center gap-2 py-1">
          <span className="size-3.5 shrink-0 rounded-[4px] border-[1.5px] border-ink-400" aria-hidden="true" />
          <span className="min-w-0 flex-1 text-[12.5px] leading-[1.4] text-ink-900">
            <span className="sr-only">Open: </span>Update policy draft
          </span>
          <StatusPill tone="amber">Due Fri</StatusPill>
        </li>
      </ul>
    </div>
  );
}
