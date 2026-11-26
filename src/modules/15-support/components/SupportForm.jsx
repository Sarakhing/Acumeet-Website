import { useId, useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

export const ISSUE_TYPES = [
  'Account and access',
  'Meeting capture',
  'Transcription and summaries',
  'Atlas',
  'Integrations',
  'Security and privacy',
  'Billing',
  'Performance or service issue',
  'Other',
];

const INPUT =
  'w-full rounded-[10px] border border-border-muted bg-surface-white px-3.5 py-2.5 text-[14px] text-ink-900 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-blue';

function Field({ label, children, className }) {
  const id = useId();
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-[13px] font-medium text-ink-900">
        {label}
      </label>
      {children(id)}
    </div>
  );
}

function Thanks({ panel, children }) {
  return (
    <p
      role="status"
      className={cn(
        'flex items-center gap-2.5 text-[13px]',
        panel ? 'rounded-[10px] bg-[#e9f6ef] px-4 py-3 text-ink-900' : 'text-ink-700',
      )}
    >
      {panel && (
        <span
          aria-hidden="true"
          className="flex size-5 items-center justify-center rounded-full border-[1.5px] border-brand-blue text-[11px] text-brand-blue"
        >
          ✓
        </span>
      )}
      {children}
    </p>
  );
}

/* Ticket fields shared by the "panel" (15.01) and "full" (15.13) forms. */
function TicketFields({ chips, issue, setIssue, onFile }) {
  return (
    <>
      <div className={cn('grid gap-4', chips && 'sm:grid-cols-2')}>
        <Field label="Full name">
          {(id) => (
            <input
              id={id}
              name="name"
              required
              placeholder={chips ? 'Your full name' : 'Your name'}
              className={INPUT}
            />
          )}
        </Field>
        <Field label="Work email">
          {(id) => (
            <input
              id={id}
              name="email"
              type="email"
              required
              placeholder={chips ? 'you@company.com' : 'name@company.com'}
              className={INPUT}
            />
          )}
        </Field>
        <Field label="Company name (optional)">
          {(id) => (
            <input
              id={id}
              name="company"
              placeholder={chips ? 'Company name' : 'Company'}
              className={INPUT}
            />
          )}
        </Field>
        <Field label="Subject">
          {(id) => (
            <input
              id={id}
              name="subject"
              required
              placeholder={chips ? 'Short summary of the issue' : 'Short summary'}
              className={INPUT}
            />
          )}
        </Field>
      </div>
      {chips ? (
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-[13px] font-medium text-ink-900">Issue type</legend>
          <div className="flex flex-wrap gap-2">
            {ISSUE_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={issue === t}
                onClick={() => setIssue(t)}
                className={cn(
                  'rounded-pill border px-3.5 py-1.5 text-[12.5px] transition-colors',
                  issue === t
                    ? 'border-brand-blue bg-[#eef4ff] text-brand-blue'
                    : 'border-border-muted bg-surface-white text-ink-800 hover:border-ink-500',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <Field label="Issue type">
          {(id) => (
            <select
              id={id}
              name="issue"
              required
              defaultValue=""
              className={cn(
                INPUT,
                'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3%204.5l3%203%203-3%22%20stroke%3D%22%238b90a3%22%20stroke-width%3D%221.4%22%2F%3E%3C%2Fsvg%3E")] bg-[right_14px_center] bg-no-repeat pr-10',
              )}
            >
              <option value="" disabled>
                Select an issue type
              </option>
              {ISSUE_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </Field>
      )}
      {chips ? (
        <Field label="Description">
          {(id) => (
            <div className="overflow-hidden rounded-[10px] border border-border-muted bg-surface-white focus-within:border-brand-blue">
              <textarea
                id={id}
                name="description"
                required
                rows={2}
                placeholder="What were you trying to do, what happened, and did you see an error message?"
                className="w-full resize-none px-3.5 py-2.5 text-[14px] text-ink-900 outline-none placeholder:text-ink-500"
              />
              <label className="flex cursor-pointer items-center gap-3 border-t border-dashed border-border-muted px-3.5 py-3 text-[13px] text-ink-700">
                <span aria-hidden="true" className="text-brand-blue">
                  ⤒
                </span>
                Attachment (optional)
                <input type="file" className="sr-only" onChange={onFile} />
              </label>
            </div>
          )}
        </Field>
      ) : (
        <>
          <Field label="Description">
            {(id) => (
              <textarea
                id={id}
                name="description"
                required
                rows={3}
                placeholder="What were you trying to do, what happened, and did you see an error message?"
                className={cn(INPUT, 'resize-none')}
              />
            )}
          </Field>
          <Field label="Attachment (optional)">
            {(id) => (
              <label htmlFor={id} className={cn(INPUT, 'cursor-pointer text-ink-500')}>
                Add a screenshot or file
                <input id={id} type="file" className="sr-only" onChange={onFile} />
              </label>
            )}
          </Field>
        </>
      )}
    </>
  );
}

/**
 * Support forms (Figma "03 · Contact support and ticket form" 15.01, "04 · form" 15.13 / 15.14).
 *  variant 'panel'  — "Need a person?" copy + button beside a grey card form with issue-type chips.
 *  variant 'full'   — 44px head + a white card with stacked fields and an issue-type select.
 *  variant 'status' — "Find your ticket": reference + work email.
 * There is no support backend yet: submitting validates the fields and shows Figma's confirmation
 * ("Thanks. Your request is in…"); nothing is sent. Status lookups show a "not found yet" note.
 */
export default function SupportForm({ variant = 'full', id, title, lead, aside }) {
  const [sent, setSent] = useState(false);
  const [issue, setIssue] = useState('Meeting capture');
  const [, setFile] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  const onFile = (e) => setFile(e.target.files?.[0] ?? null);

  if (variant === 'panel') {
    return (
      <section id={id} className="scroll-mt-20 bg-surface-white py-16 lg:py-[112px]">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_700px] lg:gap-16">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[34px] font-medium tracking-[-1px] text-ink-900 sm:text-[44px]">
              {aside.title}
            </h2>
            <p className="max-w-[360px] text-[16px] leading-[1.6] text-ink-700">{aside.lead}</p>
            <Link
              to={aside.cta.to}
              className="mt-3 rounded-pill bg-[#0b0b12] px-5 py-2.5 text-[14px] font-medium text-white hover:bg-ink-800"
            >
              {aside.cta.label}
            </Link>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 rounded-[24px] border border-border-muted bg-[#f7f7f8] p-6 sm:p-9 lg:min-h-[832px]"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-[26px] font-medium tracking-[-0.6px] text-ink-900">{title}</h3>
              <p className="text-[14px] text-ink-700">{lead}</p>
            </div>
            <TicketFields chips issue={issue} setIssue={setIssue} onFile={onFile} />
            <button
              type="submit"
              className="w-fit rounded-pill bg-brand-blue px-5 py-2.5 text-[14px] font-medium text-white hover:bg-[#0050d6]"
            >
              Send support request
            </button>
            {sent && (
              <Thanks panel>Thanks. Your request is in and our support team will review it.</Thanks>
            )}
          </form>
        </Container>
      </section>
    );
  }

  const status = variant === 'status';
  return (
    <section id={id} className="scroll-mt-20 bg-surface-white py-16 lg:py-[88px]">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[34px] font-medium tracking-[-1px] text-ink-900 sm:text-[40px]">
            {title}
          </h2>
          <p className="text-[16px] text-ink-700">{lead}</p>
        </div>
        <form
          onSubmit={onSubmit}
          className={cn(
            'flex w-full max-w-[760px] flex-col gap-5 rounded-[24px] border border-border-muted bg-surface-white p-6 sm:p-10',
            !status && 'lg:min-h-[889px]',
          )}
        >
          {status ? (
            <>
              <Field label="Ticket reference">
                {(fid) => (
                  <input
                    id={fid}
                    name="ref"
                    required
                    placeholder="e.g. ACU-12345"
                    className={INPUT}
                  />
                )}
              </Field>
              <Field label="Work email">
                {(fid) => (
                  <input
                    id={fid}
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className={INPUT}
                  />
                )}
              </Field>
            </>
          ) : (
            <TicketFields onFile={onFile} />
          )}
          <button
            type="submit"
            className="w-fit rounded-pill bg-brand-blue px-5 py-2.5 text-[14px] font-medium text-white hover:bg-[#0050d6]"
          >
            {status ? 'Check status' : 'Send support request'}
          </button>
          {status
            ? sent && (
                <Thanks>
                  We could not find that ticket yet. Check the reference in your confirmation email,
                  or contact support.
                </Thanks>
              )
            : sent && (
                <Thanks>Thanks. Your request is in and our support team will review it.</Thanks>
              )}
        </form>
      </Container>
    </section>
  );
}
