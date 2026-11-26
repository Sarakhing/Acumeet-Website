import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { DTitle } from '@/modules/17-company/components/DSections';
import {
  CornerArrow,
  DarkGlows,
  DButton,
  Glow,
  GridLines,
  pad,
  Pill,
  Rings,
  tint,
} from '@/modules/17-company/components/primitives';
import { cn } from '@/utils/cn';
import LeadForm from './LeadForm';

/** Light square grid (ink 4.5%, 56px) behind the Get Started heroes. */
function LightGrid() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(11,11,18,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,11,18,0.045) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  );
}

function LightGlows() {
  return (
    <>
      <Glow
        color="rgba(158,0,89,0.09)"
        style={{ left: -300, top: -200, width: 1000, height: 800, zIndex: -10 }}
      />
      <Glow
        color="rgba(0,96,255,0.08)"
        style={{ right: -160, bottom: -300, width: 900, height: 800, zIndex: -10 }}
      />
    </>
  );
}

/** "Trust Center →  Privacy Policy →" links under the hero copy. */
function TrustLinks({ links }) {
  return (
    <div className="flex flex-wrap gap-5">
      {links.map(({ label, to }) => (
        <Link
          key={label}
          to={to}
          className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0b0b12] hover:underline"
        >
          {label}
          <span aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}

/**
 * Figma "D · Hero and form" (18.03–18.07): #f7f7fa with a light grid and glows; on the left a
 * pill, 52px title, 18px lead, a magenta-ruled value note, optional numbered `steps` and the
 * Trust Center / Privacy Policy links; on the right the request form (LeadForm props).
 */
export function HeroForm({ eyebrow, title, titleSize = 52, lead, value, steps, links, form }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f7fa] pt-14 pb-16 lg:pt-[88px] lg:pb-28">
      <LightGrid />
      <LightGlows />
      <Container
        width="wide"
        className="grid items-start gap-10 lg:grid-cols-[600px_minmax(0,560px)] lg:gap-20"
      >
        <div className="flex flex-col gap-7">
          <Pill>{eyebrow}</Pill>
          <h1
            className={cn(
              'text-[36px] leading-[1.06] font-medium tracking-[-1.2px] text-[#0b0b12] sm:text-[44px]',
              titleSize === 44
                ? 'lg:text-[44px] lg:tracking-[-1.23px]'
                : 'lg:text-[52px] lg:tracking-[-1.46px]',
            )}
          >
            {title}
          </h1>
          <p className="text-[17px] leading-[1.55] text-[#4f5566] lg:text-[18px]">{lead}</p>
          <div className="flex flex-col gap-2.5 border-l-2 border-[#9e0059] pl-5">
            <p className="text-[20px] leading-[1.25] font-medium tracking-[-0.6px] text-[#0b0b12] lg:text-[22px]">
              {value.title}
            </p>
            {value.body && <p className="text-[16px] leading-[1.6] text-[#4f5566]">{value.body}</p>}
          </div>
          {steps && (
            <ol className="flex flex-col gap-2.5">
              {steps.map(([name, body], i) => (
                <li
                  key={name}
                  className="flex items-start gap-3.5 rounded-[14px] border border-[#e7e7ee] bg-surface-white px-4 py-3.5"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-[8px] font-mono text-[11px] font-medium text-[#9e0059]"
                    style={{ background: tint(i) }}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] leading-5 font-medium text-[#0b0b12]">{name}</span>
                    <span className="text-[14px] leading-[1.5] text-[#4f5566]">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          )}
          <TrustLinks links={links} />
        </div>
        <LeadForm {...form} />
      </Container>
    </section>
  );
}

/** Figma 18.01 "D · Hero": grid + glow, centred pill, 64px title, lead and two buttons. */
export function GSHero({ eyebrow, title, lead, primary, secondary }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f7fa] py-16 lg:pt-[104px] lg:pb-24">
      <LightGrid />
      <Glow
        color="rgba(158,0,89,0.1)"
        style={{ left: 'calc(50% - 500px)', top: -200, width: 1000, height: 700, zIndex: -10 }}
      />
      <Container width="wide">
        <div className="mx-auto flex max-w-[894px] flex-col items-center gap-6 text-center lg:px-10 lg:py-7">
          <Pill>{eyebrow}</Pill>
          <h1 className="text-[40px] leading-[1.05] font-medium tracking-[-1.4px] text-[#0b0b12] sm:text-[52px] lg:text-[64px] lg:tracking-[-2.05px]">
            {title}
          </h1>
          <p className="text-[17px] leading-[1.55] text-[#4f5566] lg:text-[18px]">{lead}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <DButton to={primary.to}>{primary.label}</DButton>
            <DButton to={secondary.to} intent="outline">
              {secondary.label}
            </DButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SsoChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[13px] font-medium text-white">
      {children}
    </span>
  );
}

/**
 * Figma 18.01 "D · Choose where to start": a dark Sign Up card (SSO chips + "Create your
 * account") beside a pink Book a Demo card, then four link cards (mono label, ↗, 20px title).
 */
export function Choose({ title, signUp, demo, routes }) {
  return (
    <section className="bg-surface-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <Container width="wide" className="flex flex-col gap-10">
        <DTitle size={40}>{title}</DTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="relative isolate flex flex-col gap-7 overflow-hidden rounded-[28px] bg-[#0b0b12] p-7 lg:p-9">
            <DarkGlows magenta={0.45} blue={0} />
            <GridLines />
            <Pill bg="rgba(255,255,255,0.1)" color="#fff" className="relative">
              {signUp.eyebrow}
            </Pill>
            <div className="relative flex flex-col gap-3">
              <h3 className="text-[28px] leading-[1.15] font-medium tracking-[-0.8px] text-white lg:text-[32px]">
                {signUp.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#b4b4c6]">{signUp.body}</p>
            </div>
            <div className="relative flex flex-wrap gap-2.5" aria-hidden="true">
              <SsoChip>G&nbsp;&nbsp;Continue with Google</SsoChip>
              <SsoChip>⊞&nbsp;&nbsp;Continue with Microsoft</SsoChip>
            </div>
            <DButton to={signUp.cta.to} intent="light" className="relative w-fit">
              {signUp.cta.label}
            </DButton>
          </article>
          <article
            className="relative isolate flex flex-col gap-7 overflow-hidden rounded-[28px] p-7 lg:p-9"
            style={{ background: tint(0) }}
          >
            <Rings
              cx={640}
              cy={520}
              step={120}
              count={8}
              width={632}
              height={380}
              className="-z-10"
            />
            <Pill bg="#fff">{demo.eyebrow}</Pill>
            <div className="flex flex-col gap-3">
              <h3 className="text-[28px] leading-[1.15] font-medium tracking-[-0.8px] text-[#0b0b12] lg:text-[32px]">
                {demo.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#4f5566]">{demo.body}</p>
            </div>
            <DButton to={demo.cta.to} className="w-fit">
              {demo.cta.label}
            </DButton>
          </article>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r) => (
            <li key={r.label} className="flex">
              <Link
                to={r.to}
                className="flex w-full flex-col gap-10 rounded-[22px] border border-[#e7e7ee] bg-surface-white p-6 transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(11,11,18,0.18)]"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] font-medium tracking-[0.44px] text-[#9e0059] uppercase">
                    {r.label}
                  </span>
                  <CornerArrow size={32} />
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-[19px] leading-[1.3] font-medium tracking-[-0.4px] text-[#0b0b12] lg:text-[20px]">
                    {r.title}
                  </span>
                  <span className="text-[14.5px] leading-[1.55] text-[#4f5566]">{r.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Figma 18.01 "D · Not sure": light rounded panel, 32px title + lead, blue button on the right. */
export function NotSure({ title, lead, cta }) {
  return (
    <section className="bg-surface-white pt-6 pb-16 lg:pt-10 lg:pb-[120px]">
      <Container width="wide">
        <div className="flex flex-col gap-6 rounded-[28px] bg-[#f7f7fa] p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-11">
          <div className="flex flex-col gap-2.5">
            <DTitle size={32}>{title}</DTitle>
            <p className="text-[16px] leading-[1.6] text-[#4f5566]">{lead}</p>
          </div>
          <DButton to={cta.to} className="w-fit">
            {cta.label}
          </DButton>
        </div>
      </Container>
    </section>
  );
}
