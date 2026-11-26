import { useState } from 'react';
import { cn } from '@/utils/cn';
import { Chrome, Code, EarlyAccess, Method } from './code';

/* Shared shells: light window (white, border, soft shadow) and dark code window. */
const LIGHT =
  'overflow-hidden rounded-[16px] border border-border-muted bg-surface-white shadow-[0_24px_60px_rgb(11_11_18/0.10)]';
const DARK = 'overflow-hidden rounded-[16px] bg-[#13131c] shadow-[0_24px_60px_rgb(11_11_18/0.28)]';

/** The six documented endpoints (plus the webhook event). */
export const ENDPOINTS = [
  ['GET', '/meetings'],
  ['GET', '/meetings/{id}/summary'],
  ['GET', '/meetings/{id}/action-items'],
  ['POST', '/ask'],
  ['POST', '/bots'],
  ['EVENT', 'summary.ready'],
];

function Check({ dark, children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] text-[10px]',
          dark ? 'bg-white/15 text-white' : 'bg-[#e6f6ef] text-[#0e8a5f]',
        )}
      >
        ✓
      </span>
      <span className={cn('text-[13px] leading-[1.55]', dark ? 'text-[#d6d6e2]' : 'text-ink-800')}>
        {children}
      </span>
    </li>
  );
}

/** "api.acumeet.ai/v1" endpoint list (second row highlighted). */
export function EndpointsPanel({ width = 400 }) {
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title="api.acumeet.ai/v1" />
      <div className="flex flex-col gap-1.5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[13px] font-medium text-ink-900">Endpoints</span>
          <EarlyAccess />
        </div>
        {ENDPOINTS.map(([m, path], i) => (
          <div
            key={path}
            className={cn(
              'flex items-center gap-3 rounded-[8px] px-2.5 py-2',
              i === 1 ? 'border border-[#d9e3ff] bg-[#f5f8ff]' : 'border border-transparent',
            )}
          >
            <Method m={m} />
            <span className="flex-1 font-mono text-[11.5px] text-ink-900">{path}</span>
            <span aria-hidden="true" className="text-ink-500">
              ›
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Dark code window with a chrome title (quickstart, REST example). */
export function CodePanel({ title, code, width = 500, children }) {
  return (
    <div className={DARK} style={{ width: '100%', maxWidth: width }}>
      <Chrome title={title} dark />
      <div className="p-5">
        <Code code={code} />
        {children}
      </div>
    </div>
  );
}

/** Dark "request headers" window with three checks below the code. */
export function HeadersPanel({ code, checks, width = 500 }) {
  return (
    <CodePanel title="request headers" code={code} width={width}>
      <ul className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
        {checks.map((c) => (
          <Check key={c} dark>
            {c}
          </Check>
        ))}
      </ul>
    </CodePanel>
  );
}

/** Webhook delivery: event row, dark payload, "then GET /meetings/{id}/summary". */
export function EventPanel({ width = 500 }) {
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title="POSTed to your webhook URL" />
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-3 rounded-[10px] border border-[#f6cfe0] bg-[#fdf2f7] px-3 py-2.5">
          <Method m="EVENT" />
          <span className="flex-1 font-mono text-[13px] text-ink-900">summary.ready</span>
          <span className="flex items-center gap-1.5 rounded-pill bg-[#e6f6ef] px-2 py-0.5 text-[10px] font-medium text-[#0e8a5f]">
            <span className="size-1.5 rounded-full bg-current" /> Delivered
          </span>
        </div>
        <div className="rounded-[10px] bg-[#13131c] p-4">
          <Code
            code={
              '{\n  "event": "summary.ready",\n  "meeting_id": "mtg_8f2c",\n  "created_at": "2026-05-08T09:02:11Z"\n}'
            }
          />
        </div>
        <p className="flex items-center gap-2 font-mono text-[11px] text-ink-500">
          then <Method m="GET" /> <span className="text-ink-900">/meetings/{'{id}'}/summary</span>
        </p>
      </div>
    </div>
  );
}

/** Numbered rows in a light window (Integration Guides: "Guides organised by outcome"). */
export function StepsPanel({ title, steps, width = 500 }) {
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title={title} />
      <ol className="flex flex-col gap-2.5 p-4">
        {steps.map((s, i) => (
          <li
            key={s}
            className="flex items-center gap-3 rounded-[10px] border border-border-muted px-3 py-3"
          >
            <span
              className={cn(
                'flex size-[22px] shrink-0 items-center justify-center rounded-full font-mono text-[10px]',
                i === 0 ? 'bg-[#0b0b12] text-white' : 'bg-[#f2f2f5] text-ink-600',
              )}
            >
              {i + 1}
            </span>
            <span className="flex-1 text-[13px] font-medium text-ink-900">{s}</span>
            <span aria-hidden="true" className="text-ink-500">
              →
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Light checklist card (SDKs: "Before adopting an SDK · Verify that it is:"). */
export function ChecklistPanel({ title, lead, checks, width = 460 }) {
  return (
    <div className={cn(LIGHT, 'p-6')} style={{ width: '100%', maxWidth: width }}>
      <p className="text-[15px] font-medium text-ink-900">{title}</p>
      <p className="mt-1 text-[13px] text-ink-600">{lead}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {checks.map((c) => (
          <Check key={c}>{c}</Check>
        ))}
      </ul>
    </div>
  );
}

/** API Reference window: method + path, description, Response / Request tabs over dark code. */
export function ReferencePanel({ width = 520, response, request }) {
  const [tab, setTab] = useState('Response');
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title="API Reference" />
      <div className="flex flex-col gap-3 p-4">
        <p className="flex items-center gap-3">
          <Method m="GET" />
          <span className="font-mono text-[14px] text-ink-900">/meetings/{'{id}'}/summary</span>
        </p>
        <p className="text-[12.5px] text-ink-600">
          Get the AI summary, key topics and decisions for a meeting.
        </p>
        <div role="tablist" className="flex gap-4 text-[12px]">
          {['Response', 'Request'].map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                'border-b-2 pb-1 font-medium',
                tab === t ? 'border-brand-blue text-ink-900' : 'border-transparent text-ink-500',
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="rounded-[10px] bg-[#13131c] p-4">
          <Code code={tab === 'Response' ? response : request} />
        </div>
      </div>
    </div>
  );
}

/** Numbered resource links (Developer Resources: "Core technical resources"). */
export function LinksPanel({ title, subtitle, links, width = 460 }) {
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title={title} />
      <div className="p-4">
        <p className="mb-2 text-[13px] font-medium text-ink-900">{subtitle}</p>
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li
              key={l}
              className="flex items-center gap-3 border-b border-border-muted py-[15px] last:border-0"
            >
              <span className="font-mono text-[10px] text-brand-magenta">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-[13px] text-ink-900">{l}</span>
              <span aria-hidden="true" className="text-[12px] text-ink-500">
                ↗
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Light "Docs · Quickstart" mini-doc (overview accordion, API Documentation). */
export function QuickstartPanel({ width = 480 }) {
  return (
    <div className={LIGHT} style={{ width: '100%', maxWidth: width }}>
      <Chrome title="Docs · Quickstart" />
      <div className="grid grid-cols-[130px_1fr] gap-4 p-4">
        <ul className="flex flex-col gap-1.5 text-[11px]">
          <li className="font-mono text-[9px] uppercase tracking-[0.6px] text-ink-500">
            Get started
          </li>
          <li className="rounded-[6px] bg-[#f2f2f5] px-2 py-1 font-medium text-ink-900">
            Start with the quickstart
          </li>
          <li className="px-2 text-ink-600">Understand requests and responses</li>
          <li className="px-2 text-ink-600">Build and troubleshoot confidently</li>
        </ul>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium text-ink-900">Start with the quickstart</p>
          <p className="text-[11.5px] leading-[1.5] text-ink-600">
            A concise quickstart should show prerequisites, how to request access, how to configure
            credentials safely, and a minimal verified example.
          </p>
          <div className="rounded-[8px] bg-[#13131c] p-3">
            <Code
              code={
                'curl https://api.acumeet.ai/v1/meetings \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY"'
              }
              className="text-[10.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
