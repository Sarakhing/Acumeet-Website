import { AVATARS } from '@/components/visuals/people';
import { Code, Method } from './code';

const CARD =
  'rounded-[14px] border border-border-muted bg-surface-white p-4 shadow-[0_10px_30px_rgb(11_11_18/0.06)]';

function Chip({ children, tone = 'purple' }) {
  const t = {
    purple: 'bg-[#f1ebfe] text-[#6b3fd4]',
    blue: 'bg-[#eaf1ff] text-brand-blue',
    magenta: 'bg-[#fdecf3] text-brand-magenta',
    green: 'bg-[#e6f6ef] text-[#0e8a5f]',
  }[tone];
  return (
    <span className={`rounded-pill px-2 py-0.5 text-[10.5px] font-medium ${t}`}>{children}</span>
  );
}

/** GET /meetings/{id}/summary — meeting summary card. */
export function SummaryVisual() {
  return (
    <div className={CARD}>
      <p className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-ink-900">Weekly Stand-up Call</span>
        <span className="rounded-pill bg-[#f2f2f5] px-2 py-0.5 text-[10px] text-ink-600">
          60 min
        </span>
      </p>
      <p className="mt-2 text-[11.5px] text-ink-700">
        Team reviewed vendor approvals and the ERP sync audit.
      </p>
      <p className="mt-2 flex gap-1.5">
        <Chip>Vendor approval</Chip>
        <Chip tone="blue">ERP sync</Chip>
      </p>
      <p className="mt-3 flex items-center justify-between border-t border-border-muted pt-2 font-mono text-[10.5px] text-ink-500">
        action_items <span className="text-[12px] text-ink-900">3</span>
      </p>
    </div>
  );
}

/** GET /meetings/{id}/action-items — task flowing into trackers. */
export function ActionsVisual() {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className={CARD}>
        <p className="flex items-center gap-2">
          <span aria-hidden="true" className="size-3.5 rounded-[4px] border border-[#c8cbd6]" />
          <span className="flex-1 text-[12px] font-medium text-ink-900">
            Review vendor approval cycle
          </span>
          <Chip tone="green">open</Chip>
        </p>
        <p className="mt-2 flex items-center gap-2 pl-0.5 text-[11px] text-ink-600">
          <img src={AVATARS['Faith Oluwale']} alt="" className="size-4 rounded-full object-cover" />{' '}
          Faith
        </p>
      </div>
      <span aria-hidden="true" className="text-center text-[11px] text-ink-500">
        ↓
      </span>
      <div className={`${CARD} flex justify-between py-2.5`}>
        <Chip tone="blue">Jira</Chip>
        <Chip tone="blue">Asana</Chip>
        <Chip tone="blue">Your own tracker</Chip>
      </div>
    </div>
  );
}

/** POST /ask — question and cited answer. */
export function AskVisual() {
  return (
    <div className={`${CARD} flex flex-col gap-2.5`}>
      <p className="flex items-center justify-between rounded-[10px] border border-border-muted px-3 py-2 text-[11.5px] text-ink-900">
        What did we decide about the ERP audit?
        <span aria-hidden="true" className="text-ink-500">
          ↑
        </span>
      </p>
      <div className="rounded-[10px] bg-[#fdf2f7] px-3 py-2.5">
        <p className="text-[11.5px] font-medium text-ink-900">
          George will finish the ERP sync audit by Friday.
        </p>
        <p className="mt-1.5 flex items-center gap-2 font-mono text-[10px] text-ink-500">
          sources <Chip tone="magenta">mtg_8f2c</Chip>
        </p>
      </div>
    </div>
  );
}

/** EVENT summary.ready — webhook payload. */
export function EventVisual() {
  return (
    <div className={`${CARD} flex flex-col gap-2.5`}>
      <p className="flex items-center gap-2">
        <Method m="EVENT" />
        <span className="flex-1 font-mono text-[12px] text-ink-900">summary.ready</span>
        <span className="font-mono text-[10px] text-ink-500">09:02:11Z</span>
      </p>
      <div className="rounded-[8px] bg-[#13131c] p-3">
        <Code
          code={'{\n  "event": "summary.ready",\n  "meeting_id": "mtg_8f2c"\n}'}
          className="text-[10.5px]"
        />
      </div>
    </div>
  );
}

/** POST /bots — notetaker joining a call. */
export function BotVisual() {
  return (
    <div className={`${CARD} flex flex-col gap-2.5`}>
      <p className="truncate rounded-[10px] border border-border-muted px-3 py-2 font-mono text-[11px] text-ink-700">
        https://zoom.us/j/123456789
      </p>
      <p className="flex items-center justify-between">
        <span className="font-mono text-[11.5px] text-ink-900">bot_41a9</span>
        <Chip tone="green">joining</Chip>
      </p>
      <p className="flex gap-1.5">
        <Chip tone="blue">Zoom</Chip>
        <Chip tone="blue">Google Meet</Chip>
        <Chip tone="blue">Teams</Chip>
      </p>
    </div>
  );
}

/** GET /meetings — meeting list row. */
export function MeetingsVisual() {
  return (
    <div className={CARD}>
      <p className="font-mono text-[10px] text-ink-500">data</p>
      <div className="mt-2 flex flex-col gap-1 rounded-[10px] border border-border-muted px-3 py-2.5">
        <span className="font-mono text-[10px] text-brand-magenta">mtg_8f2c</span>
        <span className="text-[12.5px] font-medium text-ink-900">Weekly Stand-up Call</span>
        <span className="flex items-center justify-between text-[10.5px] text-ink-500">
          2026-05-08 · 08:00 UTC <span>9 participants</span>
        </span>
      </div>
    </div>
  );
}
