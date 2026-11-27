import { useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { Code, EarlyAccess, GRID_BG, Method } from './code';
import { CONSOLE } from '../content/snippets';

const LANGS = ['cURL', 'JavaScript', 'Python'];
const BASE = 'https://api.acumeet.ai/v1';

function Tabs({ items, value, onChange, label }) {
  return (
    <div role="tablist" aria-label={label} className="flex gap-1">
      {items.map((t) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={value === t}
          onClick={() => onChange(t)}
          className={cn(
            'rounded-[6px] px-2.5 py-1 text-[11px] font-medium transition-colors',
            value === t ? 'bg-white/10 text-white' : 'text-[#8b8ba0] hover:text-white',
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/**
 * Figma "D · Build on Acumeet" + "Dev · API console" (14.01): heading row (title with gradient accent,
 * lead, two buttons) over a 1280-wide console — a navy endpoint sidebar (endpoints + events) and a
 * detail pane with the URL bar + Copy, description, REQUEST (cURL / JavaScript / Python where
 * available) and RESPONSE blocks. Selecting an endpoint swaps the pane; Copy copies the request.
 */
export default function ApiConsole({ title, accent, lead, primary, secondary }) {
  const [sel, setSel] = useState(1);
  const [lang, setLang] = useState('cURL');
  const [copied, setCopied] = useState(false);
  const [m, , url, desc, request, response] = CONSOLE[sel];
  const multi = typeof request === 'object';
  const code = multi ? request[lang] : request;
  const event = m === 'EVENT';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f9] py-16 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={GRID_BG} />
      <Container width="wide" className="relative flex flex-col gap-12 lg:gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              <EarlyAccess />
              <span className="eyebrow">
                REST API
              </span>
            </p>
            <h2 className="text-[36px] font-medium tracking-[-1.2px] text-ink-900 sm:text-[52px]">
              {title}{' '}
              <span>
                {accent}
              </span>
            </h2>
          </div>
          <div className="flex max-w-[480px] flex-col gap-5">
            <p className="text-[16px] leading-[1.6] text-ink-700">{lead}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="inline-flex items-center gap-2 rounded-pill bg-brand-blue px-5 py-3 text-[14px] font-medium text-white hover:bg-[#0050d6]"
              >
                {primary.label} <span aria-hidden="true">→</span>
              </Link>
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-2 rounded-pill border border-border-muted bg-surface-white px-5 py-3 text-[14px] font-medium text-ink-900 hover:border-ink-500"
              >
                {secondary.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] bg-[#13131c] shadow-[0_40px_90px_rgb(11_11_18/0.25)]">
          <div className="flex h-12 items-center gap-3 border-b border-white/10 px-4">
            <span className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-[9px] rounded-full bg-white/20" />
              ))}
            </span>
            <span className="text-[13px] font-medium text-white">Acumeet API</span>
            <span className="hidden rounded-[6px] bg-white/5 px-2 py-0.5 font-mono text-[11px] text-[#8b8ba0] sm:inline">
              https://api.acumeet.ai/v1
            </span>
            <span className="ml-auto">
              <EarlyAccess dark />
            </span>
          </div>
          <div className="grid lg:grid-cols-[300px_minmax(0,1fr)]">
            <nav
              aria-label="Endpoints"
              className="flex flex-col gap-1 bg-[#0f1b3d] p-4 lg:min-h-[612px]"
            >
              <p className="mb-1 px-2 font-mono text-[10px] uppercase tracking-[0.6px] text-[#7d8bb3]">
                Endpoints
              </p>
              {CONSOLE.map(([em, ep], i) => (
                <div key={ep}>
                  {em === 'EVENT' && (
                    <p className="mb-1 mt-4 px-2 font-mono text-[10px] uppercase tracking-[0.6px] text-[#7d8bb3]">
                      Events
                    </p>
                  )}
                  <button
                    type="button"
                    aria-pressed={sel === i}
                    onClick={() => setSel(i)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-[8px] border px-2.5 py-2 text-left transition-colors',
                      sel === i
                        ? 'border-white/20 bg-white/10'
                        : 'border-transparent hover:bg-white/5',
                    )}
                  >
                    <Method m={em} />
                    <span
                      className={cn(
                        'font-mono text-[12px]',
                        sel === i ? 'text-white' : 'text-[#b9c3e0]',
                      )}
                    >
                      {ep}
                    </span>
                  </button>
                </div>
              ))}
            </nav>
            <div className="flex min-w-0 flex-col gap-4 p-4 sm:p-5">
              <div className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5">
                <Method m={m} />
                <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-[#8b8ba0]">
                  {url.startsWith(BASE) ? (
                    <>
                      {BASE}
                      <span className="text-white">{url.slice(BASE.length)}</span>
                    </>
                  ) : (
                    url
                  )}
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className="rounded-[6px] border border-white/15 px-2.5 py-1 text-[11px] text-white hover:bg-white/10"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="text-[13px] text-[#b9b9c8]">{desc}</p>
              <div className="overflow-hidden rounded-[12px] border border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.6px] text-[#8b8ba0]">
                    {event ? 'Delivery' : 'Request'}
                  </span>
                  {multi ? (
                    <Tabs items={LANGS} value={lang} onChange={setLang} label="Language" />
                  ) : (
                    !event && (
                      <Tabs items={['cURL']} value="cURL" onChange={() => {}} label="Language" />
                    )
                  )}
                </div>
                <div className="p-4">
                  <Code code={code} />
                </div>
              </div>
              <div className="flex-1 overflow-hidden rounded-[12px] border border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.6px] text-[#8b8ba0]">
                    {event ? 'Payload' : 'Response'}
                  </span>
                  <span className="rounded-[5px] bg-white/10 px-2 py-0.5 font-mono text-[10px] text-[#b9b9c8]">
                    JSON
                  </span>
                </div>
                <div className="p-4">
                  <Code code={response} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
