import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { EarlyAccess, GRID_BG } from './code';

function Cta({ to, label, primary }) {
  return (
    <Link
      to={to}
      className={
        primary
          ? 'group inline-flex items-center gap-2 rounded-pill bg-brand-blue px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#0050d6]'
          : 'group inline-flex items-center gap-2 rounded-pill border border-border-muted bg-surface-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-colors hover:border-ink-500'
      }
    >
      {label}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

/**
 * Figma "D · Docs hero" (14.02–14.10): pale grid + soft glow; a path chip with "Early access", a
 * magenta mono overline, 56px title, 17px lead and two buttons on the left; a page-specific panel
 * (endpoints, code, checks…) on the right.
 */
export default function DocsHero({ path, eyebrow, title, lead, primary, secondary, panel }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f9]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={GRID_BG} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(520px 420px at 82% 20%, rgb(204 219 255 / 0.55), transparent 70%), radial-gradient(420px 360px at 92% 0%, rgb(252 214 235 / 0.5), transparent 70%)',
        }}
      />
      <Container
        width="wide"
        className="relative grid items-center gap-12 py-14 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-[72px] lg:pb-[104px] lg:pt-24"
      >
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-pill border border-border-muted bg-surface-white px-2.5 py-1 font-mono text-[11px] text-ink-700">
              {path}
            </span>
            <EarlyAccess />
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.96px] text-brand-magenta">
            {eyebrow}
          </p>
          <h1 className="text-[38px] font-medium leading-[1.08] tracking-[-1.4px] text-ink-900 sm:text-[48px] lg:text-[56px] lg:leading-[1.04] lg:tracking-[-2.2px]">
            {title}
          </h1>
          <p className="max-w-[600px] text-[16px] leading-[1.6] text-ink-700 sm:text-[17px]">
            {lead}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {primary && <Cta {...primary} primary />}
            {secondary && <Cta {...secondary} />}
          </div>
        </div>
        <div className="flex min-w-0 justify-center lg:justify-end">{panel}</div>
      </Container>
    </section>
  );
}
