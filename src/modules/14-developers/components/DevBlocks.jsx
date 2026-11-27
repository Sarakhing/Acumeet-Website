import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import DuoIcon from '@/modules/11-enterprise/components/DuoIcon';
import { Code, GRID_BG_DARK } from './code';

const TONES = ['#ffffff', '#c9a7ff', '#3ccf8e', '#ffba00'];
const TINTS = [
  '#f4f1fa',
  '#eef4ff',
  '#fdf0f6',
  '#f1faf5',
  '#fff8e8',
  '#f4f1fa',
  '#eef4ff',
  '#fdf0f6',
  '#f1faf5',
];

/**
 * Figma "D · Responsible integration" (14.01): night band with a grid and magenta glow; shield tile,
 * 44px title and lead on the left; a 2×2 grid of glassy cards (icon tile, mono number, label).
 * items: [[label, icon]].
 */
export function ResponsibleIntegration({ title, lead, items = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b10] py-16 lg:py-32">
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
            'radial-gradient(520px 400px at 80% 30%, rgb(158 0 89 / 0.35), transparent 70%)',
        }}
      />
      <Container
        width="wide"
        className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-20"
      >
        <div className="flex flex-col items-start gap-5">
          <span className="flex size-12 items-center justify-center rounded-[12px] border border-white/15 bg-[#2a1424]">
            <DuoIcon name="shield-check" tone="#ff6fae" line="#ffffff" size={22} />
          </span>
          <h2 className="text-[34px] font-medium leading-[1.12] tracking-[-1px] text-white sm:text-[44px]">
            {title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-[#b9b9c8]">{lead}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map(([label, icon], i) => (
            <li
              key={label}
              className="flex min-h-[160px] flex-col justify-between gap-6 lg:min-h-[180px] rounded-[18px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:even:translate-y-8"
            >
              <span className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-[12px] border border-white/15 bg-white/5">
                  <DuoIcon name={icon} tone={TONES[i % TONES.length]} line="#ffffff" size={22} />
                </span>
                <span className="font-mono text-[11px] text-[#8b8ba0]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </span>
              <span className="text-[16px] font-medium leading-[1.4] text-white">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/**
 * Figma "D · All developer resources" (14.01): overline + 44px title and a 3-up grid of white link
 * cards (tinted mono number tile, "↗" disc, title, tagline, mono path).
 * items: [{ title, tagline, to }].
 */
export function DevDirectory({ eyebrow, title, items = [] }) {
  return (
    <section className="bg-surface-white py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">
            {eyebrow}
          </p>
          <h2 className="text-[34px] font-medium tracking-[-1px] text-ink-900 sm:text-[44px]">
            {title}
          </h2>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.to}>
              <Link
                to={it.to}
                className="group flex h-full flex-col gap-3 rounded-[18px] border border-border-muted bg-surface-white p-6 transition-shadow hover:shadow-mock"
              >
                <span className="mb-3 flex items-center justify-between">
                  <span
                    className="flex size-10 items-center justify-center rounded-[10px] font-mono text-[11px] text-brand-magenta"
                    style={{ backgroundColor: TINTS[i % TINTS.length] }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-full border border-border-muted text-[12px] text-ink-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
                <span className="text-[19px] font-medium text-ink-900">{it.title}</span>
                <span className="text-[14px] leading-[1.5] text-ink-700">{it.tagline}</span>
                <span className="font-mono text-[11px] text-ink-500">{it.to}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/**
 * Figma "D · CTA panel" (14.01): night card (grid + magenta / blue glows) with a 44px title, lead and
 * two buttons, beside a small code block (POST /bots + response).
 */
export function CtaPanel({ title, lead, primary, secondary, code }) {
  return (
    <section className="bg-surface-white pb-16 pt-10 lg:pb-[120px]">
      <Container width="wide">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0b0b10] px-6 py-10 sm:px-14 sm:py-14 lg:flex lg:min-h-[334px] lg:items-center">
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
                'radial-gradient(420px 320px at 5% 10%, rgb(158 0 89 / 0.5), transparent 70%), radial-gradient(420px 320px at 95% 100%, rgb(0 77 229 / 0.45), transparent 70%)',
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_440px]">
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-[34px] font-medium tracking-[-1px] text-white sm:text-[44px]">
                {title}
              </h2>
              <p className="max-w-[640px] text-[16px] leading-[1.6] text-[#b9b9c8]">{lead}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={primary.to}
                  className="inline-flex items-center gap-2 rounded-pill bg-surface-white px-5 py-3 text-[14px] font-medium text-ink-900"
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
            </div>
            <div className="min-w-0 rounded-[14px] border border-white/10 bg-white/[0.04] p-5">
              <Code code={code} className="text-[11.5px]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
