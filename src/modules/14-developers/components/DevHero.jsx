import { useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { Code, EarlyAccess, GRID_BG_DARK } from './code';
import { SNIPPETS, SUMMARY_JSON } from '../content/snippets';

const LANGS = ['cURL', 'JavaScript', 'Python'];

/**
 * Figma "D · Hero" (14.01): night band with a grid and magenta / blue glows. Left: "Early access ·
 * BUILD WITH ACUMEET", 64px title with a gradient accent, lead, two buttons and a BASE URL chip.
 * Right: a code window with cURL / JavaScript / Python tabs and the JSON response, plus a white
 * "summary.ready" toast overlapping its lower left.
 */
export default function DevHero({ title, accent, lead, primary, secondary }) {
  const [lang, setLang] = useState('cURL');
  return (
    <section className="relative overflow-hidden bg-[#0b0b10]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={GRID_BG_DARK}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(520px 380px at 12% 0%, rgb(158 0 89 / 0.5), transparent 70%), radial-gradient(520px 420px at 95% 95%, rgb(0 77 229 / 0.45), transparent 70%)',
        }}
      />
      <Container
        width="wide"
        className="relative grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16 lg:pb-[128px] lg:pt-[112px]"
      >
        <div className="flex flex-col items-start gap-6">
          <p className="flex items-center gap-3">
            <EarlyAccess dark />
            <span className="font-mono text-[11px] uppercase tracking-[0.88px] text-[#8b8ba0]">
              Build with Acumeet
            </span>
          </p>
          <h1 className="text-[40px] font-medium leading-[1.06] tracking-[-1.6px] text-white sm:text-[52px] lg:text-[64px]">
            {title}{' '}
            <span className="bg-[linear-gradient(90deg,#ff6fae,#b48cff)] bg-clip-text text-transparent">
              {accent}
            </span>
            .
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#b9b9c8]">{lead}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={primary.to}
              className="inline-flex items-center gap-2 rounded-pill bg-brand-blue px-5 py-3 text-[14px] font-medium text-white hover:bg-[#0050d6]"
            >
              {primary.label} <span aria-hidden="true">→</span>
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-5 py-3 text-[14px] font-medium text-white hover:border-white/40"
            >
              {secondary.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.6px] text-[#8b8ba0]">
              Base URL
            </span>
            <span className="font-mono text-[13px] text-white">https://api.acumeet.ai/v1</span>
          </p>
        </div>

        <div className="relative min-w-0 pb-10 lg:pb-0">
          <div className="overflow-hidden rounded-[16px] border border-white/10 bg-[#13131c] shadow-[0_30px_80px_rgb(0_0_0/0.5)]">
            <div className="flex h-11 items-center gap-1.5 border-b border-white/10 px-4">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-[9px] rounded-full bg-white/20" />
              ))}
              <div role="tablist" aria-label="Language" className="ml-4 flex gap-1">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    role="tab"
                    aria-selected={lang === l}
                    onClick={() => setLang(l)}
                    className={cn(
                      'rounded-[6px] px-2.5 py-1 text-[11px] font-medium transition-colors',
                      lang === l ? 'bg-white/10 text-white' : 'text-[#8b8ba0] hover:text-white',
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <span className="ml-auto rounded-[5px] bg-white/10 px-2 py-0.5 font-mono text-[10px] text-[#b9b9c8]">
                JSON
              </span>
            </div>
            <div className="p-5">
              <Code code={`${SNIPPETS.summary[lang]}\n\n// response\n${SUMMARY_JSON}`} />
            </div>
          </div>
          <div className="absolute -left-4 bottom-0 flex items-center gap-3 rounded-[12px] bg-surface-white px-4 py-3 shadow-float-ui sm:-left-10 lg:-bottom-6">
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-[8px] bg-[#fdecf3] text-[13px]"
            >
              ⚡
            </span>
            <span className="flex flex-col">
              <span className="font-mono text-[12px] text-ink-900">summary.ready</span>
              <span className="text-[11px] text-ink-500">POSTed to your webhook URL</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
