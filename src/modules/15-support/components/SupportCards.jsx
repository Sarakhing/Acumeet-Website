import MockCard from '@/components/ui/MockCard';
import { AVATARS } from '@/components/visuals/people';
import { cn } from '@/utils/cn';
import DuoIcon from '@/modules/11-enterprise/components/DuoIcon';

/* Small shared pieces ------------------------------------------------ */

const ROW = 'flex items-center gap-3 rounded-[12px] border border-border-muted px-3 py-2.5';
const PILL = {
  blue: 'bg-[#e8f0ff] text-brand-blue',
  amber: 'bg-[#fdf0d5] text-[#b7791f]',
  green: 'bg-[#e6f6ef] text-[#0e8a5f]',
  grey: 'bg-[#f6f6f8] text-ink-700',
};

function Pill({ tone = 'blue', dot, mono, children }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-pill px-2.5 py-1 text-[11px] font-medium leading-[1.5]',
        tone === 'grey' && 'rounded-[6px]',
        mono && 'font-mono tracking-[0.3px]',
        PILL[tone],
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

function Btn({ primary, children }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center rounded-[8px] px-3 py-1.5 text-[11.5px] font-medium',
        primary
          ? 'bg-brand-blue text-white'
          : 'border border-border-muted bg-surface-white text-ink-900',
      )}
    >
      {children}
    </span>
  );
}

function Bar({ label, value, pct, color }) {
  return (
    <div className="flex min-h-[86px] flex-col gap-2.5 rounded-[12px] border border-border-muted px-3 py-3">
      <p className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-ink-900">{label}</span>
        <span className="font-mono text-[11px] text-ink-700">{value}</span>
      </p>
      <span className="h-1.5 rounded-full bg-[#ececf2]">
        <span
          className="block h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </span>
    </div>
  );
}

/* Cards ---------------------------------------------------------------- */

const TICKET_TONE = { 'In review': 'blue', 'Waiting on you': 'amber', Resolved: 'green' };

/** "My tickets": three tickets with status pills and a "Raise a ticket" button. */
export function TicketsCard({ width = 350, shadow }) {
  const rows = [
    ['Acumeet did not join', '#4821', 'In review'],
    ['Missing upload transcript', '#4817', 'Waiting on you'],
    ['SSO sign-in error', '#4790', 'Resolved'],
  ];
  return (
    <MockCard title="My tickets" width={width} shadow={shadow} gap={12} aside={<Pill>3 open</Pill>}>
      {rows.map(([t, ref, s]) => (
        <div key={ref} className={ROW}>
          <span className="flex flex-1 flex-col">
            <span className="text-[12px] font-medium text-ink-900">{t}</span>
            <span className="font-mono text-[10.5px] text-ink-500">{ref}</span>
          </span>
          <Pill tone={TICKET_TONE[s]} dot={s === 'Resolved'}>
            {s}
          </Pill>
        </div>
      ))}
      <span className="mt-1">
        <Btn primary>Raise a ticket</Btn>
      </span>
    </MockCard>
  );
}

/** "Service status": six operational components. */
export function ServiceStatusCard({ width = 350, shadow }) {
  const rows = [
    'Web app',
    'Meeting capture',
    'Transcription',
    'Search and Atlas',
    'Connected tools',
    'REST API and webhooks',
  ];
  return (
    <MockCard
      title="Service status"
      width={width}
      shadow={shadow}
      gap={10}
      aside={
        <Pill tone="green" dot>
          All systems operational
        </Pill>
      }
    >
      {rows.map((r) => (
        <div key={r} className={cn(ROW, 'py-2')}>
          <span className="flex-1 text-[12px] text-ink-900">{r}</span>
          <span className="flex items-center gap-1.5 text-[11px] text-[#0e8a5f]">
            <span className="size-1.5 rounded-full bg-current" /> Operational
          </span>
        </div>
      ))}
      <p className="mt-1 font-mono text-[10.5px] text-ink-500">Updated 2 min ago</p>
    </MockCard>
  );
}

/** "Support by plan": four plan rows, `selected` row highlighted. */
export function SupportPlansCard({ width = 350, shadow, selected = 3 }) {
  const rows = [
    ['Free', 'Help centre, guides and FAQs'],
    ['Individual', 'Email support'],
    ['Teams and Business', 'Priority support'],
    ['Enterprise', 'Dedicated Customer Success Manager and custom SLA'],
  ];
  return (
    <MockCard
      title="Support by plan"
      width={width}
      shadow={shadow}
      gap={10}
      aside={
        <Pill tone="grey" mono>
          Your plan: Teams
        </Pill>
      }
    >
      {rows.map(([t, d], i) => (
        <div
          key={t}
          className={cn(
            'flex flex-col gap-0.5 rounded-[12px] border px-3 py-2.5',
            i === selected ? 'border-brand-blue bg-[#f5f8ff]' : 'border-border-muted',
          )}
        >
          <span className="text-[12px] font-medium text-ink-900">{t}</span>
          <span className="text-[11px] text-ink-500">{d}</span>
        </div>
      ))}
    </MockCard>
  );
}

/** "Choose a plan": radio list (Teams current; `selected` row checked) + Compare / Change buttons. */
export function PlansCard({ width = 350, shadow, selected = 'Teams' }) {
  const rows = [
    ['Free', 'Get started'],
    ['Individual', 'For one person'],
    ['Teams', 'For small teams'],
    ['Business', 'For growing organisations'],
    ['Enterprise', 'Custom pricing'],
  ];
  return (
    <MockCard
      title="Choose a plan"
      width={width}
      shadow={shadow}
      gap={10}
      aside={
        <Pill tone="grey" mono>
          Current: Teams
        </Pill>
      }
    >
      {rows.map(([t, d]) => {
        const on = t === selected;
        return (
          <div key={t} className={cn(ROW, on && 'border-brand-blue bg-[#f5f8ff]')}>
            <span
              aria-hidden="true"
              className={cn(
                'size-3.5 rounded-full bg-surface-white',
                on ? 'border-4 border-brand-blue' : 'border-[1.5px] border-[#c8cbd6]',
              )}
            />
            <span className="flex-1 text-[12px] font-medium text-ink-900">{t}</span>
            <span className="text-[11px] text-ink-500">{d}</span>
          </div>
        );
      })}
      <span className="mt-1 flex justify-end gap-2">
        <Btn>Compare plans</Btn>
        <Btn primary>Change plan</Btn>
      </span>
    </MockCard>
  );
}

/** "Billing": current plan, seats and AI minutes meters, next invoice. */
export function BillingCard({ width = 350, shadow }) {
  return (
    <MockCard
      title="Billing"
      width={width}
      shadow={shadow}
      gap={12}
      aside={<Pill>Teams plan</Pill>}
    >
      <div className={ROW}>
        <span className="flex size-8 items-center justify-center rounded-[8px] bg-[#eaf1ff]">
          <DuoIcon name="briefcase" tone="#0060ff" size={16} />
        </span>
        <span className="flex flex-1 flex-col">
          <span className="text-[12px] font-medium text-ink-900">Teams</span>
          <span className="text-[11px] text-ink-500">Renews Jul 1</span>
        </span>
        <Btn>Change plan</Btn>
      </div>
      <Bar label="Seats" value="18 of 25 used" pct={72} color="#0060ff" />
      <Bar label="AI minutes" value="6,240 of 10,000" pct={62} color="#7c3aed" />
      <p className="flex items-center justify-between text-[11px] text-ink-500">
        Next invoice <span className="font-mono text-ink-800">Jul 1</span>
      </p>
    </MockCard>
  );
}

/** "Invoices": last three invoices with Paid pills and Download buttons. */
export function InvoicesCard({ width = 350, shadow }) {
  const rows = [
    ['INV-2026-06', 'Jun 1'],
    ['INV-2026-05', 'May 1'],
    ['INV-2026-04', 'Apr 1'],
  ];
  return (
    <MockCard
      title="Invoices"
      width={width}
      shadow={shadow}
      gap={12}
      aside={
        <Pill tone="grey" mono>
          Last 3
        </Pill>
      }
    >
      {rows.map(([n, d]) => (
        <div key={n} className={ROW}>
          <span className="flex size-8 items-center justify-center rounded-[8px] bg-[#f6f6f8]">
            <DuoIcon name="file-text" tone="#4f5566" size={15} />
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-[12px] font-medium text-ink-900">{n}</span>
            <span className="text-[11px] text-ink-500">{d}</span>
          </span>
          <Pill tone="green" dot>
            Paid
          </Pill>
          <Btn>Download</Btn>
        </div>
      ))}
      <p className="flex items-center justify-between text-[11px] text-ink-500">
        Billing details <span className="font-medium text-brand-blue">Update</span>
      </p>
    </MockCard>
  );
}

/** "Add-ons": minutes meter + extra minutes / seats rows. */
export function AddOnsCard({ width = 350, shadow }) {
  return (
    <MockCard
      title="Add-ons"
      width={width}
      shadow={shadow}
      gap={12}
      aside={<Pill tone="amber">92% of minutes used</Pill>}
    >
      <Bar label="AI minutes this month" value="9,200 / 10,000" pct={92} color="#f5a40c" />
      {[
        ['Extra AI minutes', 'Add minutes without changing plan', 'clock'],
        ['Additional seats', 'Add or remove team seats', 'users-three'],
      ].map(([t, d, icon]) => (
        <div key={t} className={ROW}>
          <span className="flex size-8 items-center justify-center rounded-[8px] bg-[#f1ebfe]">
            <DuoIcon name={icon} tone="#7c4ddb" size={16} />
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-[12px] font-medium text-ink-900">{t}</span>
            <span className="text-[11px] text-ink-500">{d}</span>
          </span>
          <Btn primary>Add</Btn>
        </div>
      ))}
    </MockCard>
  );
}

const STEPS = ['Received', 'In review', 'Waiting on you', 'Resolved'];
const TIMES = ['Jun 2 · 09:14', 'Jun 2 · 10:02', 'Jun 3 · 11:30', 'Jun 4 · 16:05'];

/** "Support ticket" #4821 with a status timeline up to `step` (0–3). */
export function TicketCard({ width = 350, shadow, step = 0 }) {
  return (
    <MockCard
      title="Support ticket"
      width={width}
      shadow={shadow}
      gap={12}
      aside={
        <Pill tone="grey" mono>
          #4821
        </Pill>
      }
    >
      <p className="text-[13.5px] font-medium text-ink-900">
        Acumeet did not join the 9:00 AM meeting
      </p>
      <p className="text-[11px] text-ink-500">Meeting capture · Raised Jun 2</p>
      <ol className="flex flex-col gap-2.5">
        {STEPS.map((s, i) => {
          const done = i <= step;
          const current = i === step;
          return (
            <li key={s} className="flex items-center gap-3 text-[12px]">
              <span
                aria-hidden="true"
                className={cn(
                  'size-3.5 rounded-full',
                  current
                    ? 'border-[3px] border-brand-blue bg-surface-white'
                    : done
                      ? 'bg-brand-blue'
                      : 'bg-[#ececf2]',
                )}
              />
              <span
                className={cn(
                  'flex-1',
                  current ? 'font-medium text-brand-blue' : done ? 'text-ink-900' : 'text-ink-500',
                )}
              >
                {s}
              </span>
              <span className="font-mono text-[10.5px] text-ink-500">{done ? TIMES[i] : '–'}</span>
            </li>
          );
        })}
      </ol>
      <p className="mt-1 flex items-center gap-2 text-[11.5px] text-ink-700">
        <img src={AVATARS['Ruth Godwin']} alt="" className="size-6 rounded-full object-cover" />
        <span className="flex-1">Ruth Godwin · Support</span>
        <Btn primary>Reply</Btn>
      </p>
    </MockCard>
  );
}
