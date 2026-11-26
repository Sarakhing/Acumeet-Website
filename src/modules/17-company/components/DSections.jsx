import { Link } from 'react-router';
import AccentTitle from '@/components/ui/AccentTitle';
import Container from '@/components/ui/Container';
import DuoIcon from '@/modules/11-enterprise/components/DuoIcon';
import { cn } from '@/utils/cn';
import { Flow } from './DHero';
import {
  ArrowLink,
  CornerArrow,
  CornerRings,
  DarkGlows,
  DButton,
  GridLines,
  Overline,
  pad,
  Pill,
  Rings,
  tint,
  TONES,
} from './primitives';

const BG = { white: 'bg-surface-white', muted: 'bg-[#f7f7fa]', dark: 'bg-[#0b0b12]' };

const H = {
  32: 'text-[28px] leading-[1.3] lg:text-[32px] lg:tracking-[-0.48px]',
  40: 'text-[30px] leading-[1.3] sm:text-[34px] lg:text-[40px] lg:tracking-[-0.8px]',
  44: 'text-[32px] leading-[1.1] sm:text-[38px] lg:text-[44px] lg:tracking-[-0.97px]',
  48: 'text-[34px] leading-[1.1] sm:text-[40px] lg:text-[48px] lg:tracking-[-1.2px]',
};

/** Section title (32 · 40 · 44 · 48px Geist Medium, tight tracking). */
export function DTitle({ size = 44, dark, tight, as: Tag = 'h2', className, children }) {
  return (
    <Tag
      className={cn(
        'font-medium tracking-[-0.6px]',
        tight && 'leading-[1.1]!',
        dark ? 'text-white' : 'text-[#0b0b12]',
        H[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Figma "D · Intro / Who we are / Why we exist / Control / Who we build for": two columns —
 * overline + 44px title (560 wide) on the left, 19px body (640 wide) on the right.
 * tone: muted (#f7f7fa) | white | dark (#0b0b12 with a magenta glow and grid).
 * lead: 18px paragraph under the title (left). chips: white pills under the body.
 * aside: replaces the body column (e.g. the "Priority market" card).
 */
export function DSplit({ eyebrow, title, body, lead, chips, aside, tone = 'muted', py = 112 }) {
  const dark = tone === 'dark';
  return (
    <section
      className={cn('relative isolate overflow-hidden py-16 lg:py-(--py)', BG[tone])}
      style={{ '--py': `${py}px` }}
    >
      {dark && (
        <>
          <DarkGlows magenta={0.4} blue={0} />
          <GridLines />
        </>
      )}
      <Container
        width="wide"
        className={cn(
          'relative grid gap-8 lg:gap-20',
          aside ? 'lg:grid-cols-[620px_1fr] lg:items-center lg:gap-16' : 'lg:grid-cols-[560px_1fr]',
        )}
      >
        <div className="flex flex-col gap-3.5">
          {eyebrow && <Overline dark={dark}>{eyebrow}</Overline>}
          <DTitle size={44} dark={dark}>
            {title}
          </DTitle>
          {lead && <p className="pt-0.5 text-[18px] leading-[1.6] text-[#4f5566]">{lead}</p>}
        </div>
        {aside ?? (
          <div className={cn('flex flex-col gap-6', eyebrow ? 'lg:pt-[30px]' : 'lg:pt-1.5')}>
            {[body].flat().map((p) => (
              <p
                key={p}
                className={cn(
                  'text-[17px] leading-[1.6] lg:text-[19px]',
                  dark ? 'text-[#c9c9d6]' : 'text-[#4f5566]',
                )}
              >
                {p}
              </p>
            ))}
            {chips && (
              <ul className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <li key={c}>
                    <Pill bg="#fff" color="#0b0b12" mono={false} className="text-[12px]!">
                      {c}
                    </Pill>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

/** Figma "Priority market": white card with corner rings, a pill, a 22px statement and tinted chips. */
export function MarketCard({ eyebrow, statement, chips }) {
  return (
    <div className="relative isolate flex flex-col gap-5 overflow-hidden rounded-[28px] border border-[#e7e7ee] bg-surface-white p-8">
      <CornerRings />
      <Pill className="relative">{eyebrow}</Pill>
      <p className="relative text-[20px] leading-[1.4] font-medium tracking-[-0.18px] text-[#0b0b12] lg:text-[22px]">
        {statement}
      </p>
      <ul className="relative flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <li key={c}>
            <Pill bg={tint(i)} color="#0b0b12" mono={false} className="text-[12px]!">
              {c}
            </Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NumChip({ n, bg }) {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-[10px] font-mono text-[13px] font-medium text-[#9e0059]"
      style={{ background: bg }}
    >
      {pad(n)}
    </span>
  );
}

function IconTile({ icon, tone }) {
  return (
    <span
      className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] border bg-surface-white"
      style={{ borderColor: `${tone}52` }}
    >
      <DuoIcon name={icon} tone={tone} size={26} />
    </span>
  );
}

/** One card in a DCards grid (see variants there). */
function Card({ card, index, variant }) {
  const Tag = card.to && variant !== 'icon' ? Link : 'div';
  const tinted = variant !== 'link';
  return (
    <li className="flex">
      <Tag
        {...(Tag === Link ? { to: card.to } : {})}
        className={cn(
          'group relative isolate flex w-full flex-col overflow-hidden rounded-[22px] p-[26px]',
          variant === 'link' &&
            'gap-8 border border-[#e7e7ee] bg-surface-white transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(11,11,18,0.18)]',
          variant === 'tint' && 'gap-14',
          variant === 'value' && 'gap-12',
          variant === 'icon' && (card.link ? 'gap-3' : 'gap-12'),
        )}
        style={tinted ? { background: tint(index) } : undefined}
      >
        {tinted && <CornerRings />}
        {variant === 'link' && (
          <span className="flex items-start justify-between">
            <NumChip n={index + 1} bg={tint(index)} />
            <span className="pt-[3px]">
              <CornerArrow />
            </span>
          </span>
        )}
        {variant === 'tint' && <NumChip n={index + 1} bg="#fff" />}
        {variant === 'value' && (
          <span className="relative font-mono text-[13px] font-medium text-[#9e0059]">
            {pad(index + 1)}
          </span>
        )}
        {variant === 'icon' && (
          <span className="relative">
            <IconTile icon={card.icon} tone={TONES[index % TONES.length]} />
          </span>
        )}
        <span className="relative flex flex-1 flex-col gap-2">
          <h3
            className={cn(
              'leading-[1.25] font-medium text-[#0b0b12]',
              variant === 'icon' || variant === 'value'
                ? 'text-[20px] tracking-[-0.17px] lg:text-[21px]'
                : 'text-[20px] tracking-[-0.16px]',
            )}
          >
            {card.title}
          </h3>
          {card.body && <p className="text-[15px] leading-[1.55] text-[#4f5566]">{card.body}</p>}
        </span>
        {card.link && (
          <span className={cn('relative', variant === 'icon' && 'pt-[11px]')}>
            {variant === 'icon' ? (
              <ArrowLink to={card.to}>{card.link}</ArrowLink>
            ) : (
              <ArrowLink>{card.link}</ArrowLink>
            )}
          </span>
        )}
      </Tag>
    </li>
  );
}

/**
 * Card grids (17.01 "Explore the company", 17.02 pillars, 17.03 "Keep exploring", 17.06 partner
 * types, 17.07 values, 17.08 "Who to contact").
 * variant: 'link' (white, tinted number chip, ↗, magenta link; the card is a link) |
 *   'tint' (tinted, white number chip, corner rings) | 'value' (tinted, plain number) |
 *   'icon' (tinted, duotone icon tile; optional link).
 * columns: 4 | 3. titleSize: 32 | 40 | 44. tone: white | muted.
 * framed: the "Draft block" layout — 24px top padding, content inset 32px (17.06 / 17.07).
 */
export function DCards({
  title,
  lead,
  titleSize = 40,
  cards,
  variant = 'link',
  columns = 4,
  tone = 'white',
  framed = false,
  pt = 120,
  pb = 120,
  gap = 40,
}) {
  return (
    <section
      className={cn('py-16 lg:pt-(--pt) lg:pb-(--pb)', BG[tone])}
      style={{ '--pt': `${pt}px`, '--pb': `${pb}px`, '--gap': `${gap}px` }}
    >
      <Container width="wide">
        <div className={cn('flex flex-col gap-8 lg:gap-(--gap)', framed && 'lg:p-8')}>
          <div className={cn('flex flex-col gap-4', lead && 'lg:p-4')}>
            <DTitle size={titleSize}>{title}</DTitle>
            {lead && <p className="text-[17px] leading-[1.55] text-[#4f5566]">{lead}</p>}
          </div>
          <ul
            className={cn(
              'grid gap-4 sm:grid-cols-2',
              columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
            )}
          >
            {cards.map((card, i) => (
              <Card key={card.title} card={card} index={i} variant={variant} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Figma "D · What we solve" (17.02): overline + 48px title, the Flow strip, six tinted cards. */
export function DSolve({ eyebrow, title, cards }) {
  return (
    <section className="bg-surface-white py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col gap-4 lg:gap-12">
          <Overline>{eyebrow}</Overline>
          <DTitle size={48} className="max-w-[760px]">
            {title}
          </DTitle>
        </div>
        <Flow />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} card={card} index={i} variant="tint" />
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Figma "D · How we think" (17.02): centred overline, 64px title with accent, 19px lead, rings. */
export function DCentered({ eyebrow, title, accent, lead }) {
  return (
    <section className="relative isolate overflow-hidden bg-surface-white py-16 lg:py-32">
      <Rings cx={720} cy={600} height={600} className="-z-10" />
      <Container width="wide" className="flex flex-col items-center gap-6 text-center">
        <Overline>{eyebrow}</Overline>
        <AccentTitle
          accent={accent}
          className="max-w-[1000px] text-[38px] leading-[1.06] font-medium tracking-[-1.2px] sm:text-[48px] lg:text-[64px] lg:leading-[1.04] lg:tracking-[-2.05px]"
        >
          {title}
        </AccentTitle>
        <p className="max-w-[820px] text-[17px] leading-[1.6] text-[#4f5566] lg:text-[19px]">
          {lead}
        </p>
      </Container>
    </section>
  );
}

/**
 * Dark rounded panel (Figma "D · Closing" 17.01 / 17.02 and "D · Become a partner" 17.06):
 * glows + grid, white 44px title (40px in the row layout), muted lead and a white button.
 * layout: 'center' (382px panel, centred) | 'row' (copy left, button right).
 */
export function DClosing({ title, lead, cta, layout = 'center' }) {
  const row = layout === 'row';
  return (
    <section className="bg-surface-white px-0 pt-6 pb-16 lg:pt-10 lg:pb-[120px]">
      <Container width="wide">
        <div
          className={cn(
            'relative isolate flex overflow-hidden rounded-[32px] bg-[#0b0b12]',
            row
              ? 'flex-col gap-8 p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:p-14'
              : 'flex-col items-center gap-5 px-6 py-14 text-center lg:px-16 lg:py-[72px]',
          )}
        >
          <DarkGlows magenta={0.5} blue={0.4} />
          <GridLines />
          <div className={cn('relative flex flex-col', row ? 'max-w-[1000px] gap-3.5' : 'gap-5')}>
            <DTitle size={row ? 40 : 44} dark className={row ? '' : 'mx-auto max-w-[820px]'}>
              {title}
            </DTitle>
            <p
              className={cn(
                'text-[17px] leading-[1.55] text-[#b4b4c6] lg:text-[18px]',
                !row && 'mx-auto max-w-[680px]',
              )}
            >
              {lead}
            </p>
          </div>
          <DButton to={cta.to} intent="light" className="relative">
            {cta.label}
          </DButton>
        </div>
      </Container>
    </section>
  );
}

/** Figma "D · Belief" (17.05): dark band with one centred 52px statement. */
export function DBelief({ text }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b12] py-16 lg:py-28">
      <DarkGlows magenta={0.4} blue={0} />
      <Container width="wide" className="relative">
        <p className="mx-auto max-w-[1000px] text-center text-[32px] leading-[1.1] font-medium tracking-[-1px] text-white text-balance sm:text-[40px] lg:text-[52px] lg:tracking-[-1.35px]">
          {text}
        </p>
      </Container>
    </section>
  );
}

/**
 * Figma "D · Platform stack" (17.04): dark, overline + 44px title (440 wide) on the left, the six
 * stages as glass rows (mono number · 18px name · muted description) on the right.
 */
export function DStack({ eyebrow, title, rows }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b12] py-16 lg:py-[120px]">
      <DarkGlows magenta={0.4} blue={0.3} />
      <GridLines />
      <Container
        width="wide"
        className="relative grid gap-10 lg:grid-cols-[440px_1fr] lg:items-center lg:gap-20"
      >
        <div className="flex flex-col gap-4">
          <Overline dark>{eyebrow}</Overline>
          <DTitle size={44} dark>
            {title}
          </DTitle>
        </div>
        <ol className="flex flex-col gap-2.5">
          {rows.map(([name, body], i) => (
            <li
              key={name}
              className="flex flex-col gap-1.5 rounded-[16px] border border-white/10 bg-white/[0.045] px-[22px] py-[18px] sm:flex-row sm:items-center sm:gap-5"
            >
              <span className="flex items-center gap-5 sm:w-[168px] sm:shrink-0">
                <span className="font-mono text-[12px] font-medium text-[#e6b3cf]">
                  {pad(i + 1)}
                </span>
                <span className="text-[18px] leading-[23px] font-medium text-white">{name}</span>
              </span>
              <span className="text-[15px] leading-[1.5] text-[#b4b4c6]">{body}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/**
 * Figma "D · Where meetings happen" (17.04) / "D · Works with" (17.06): head row (overline +
 * title left, lead right), three platform tiles and an "Explore integrations" link.
 * variant: 'tint' (tinted tiles, 48px marks, 20px names) | 'outline' (white bordered, 44 / 18px).
 */
export function DPlatforms({
  eyebrow,
  title,
  titleSize = 44,
  lead,
  platforms,
  link,
  variant = 'tint',
  tone = 'white',
  py = 120,
  gap = 40,
}) {
  const outline = variant === 'outline';
  return (
    <section
      className={cn('py-16 lg:py-(--py)', BG[tone])}
      style={{ '--py': `${py}px`, '--gap': `${gap}px` }}
    >
      <Container width="wide" className="flex flex-col gap-8 lg:gap-(--gap)">
        <div className="grid gap-4 lg:grid-cols-[620px_1fr] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-3.5">
            <Overline>{eyebrow}</Overline>
            <DTitle size={titleSize} tight>
              {title}
            </DTitle>
          </div>
          <p className="text-[17px] leading-[1.6] text-[#4f5566] lg:text-[18px]">{lead}</p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {platforms.map(([name, logo], i) => (
            <li
              key={name}
              className={cn(
                'flex items-center gap-4',
                outline
                  ? 'rounded-[18px] border border-[#e7e7ee] bg-surface-white p-[22px]'
                  : 'rounded-[20px] p-6',
              )}
              style={outline ? undefined : { background: [tint(1), tint(2), tint(3)][i] }}
            >
              <span
                className={cn(
                  'flex shrink-0 items-center justify-center rounded-[12px] bg-surface-white',
                  outline ? 'size-11' : 'size-12',
                )}
              >
                <img src={logo} alt="" className="size-6 object-contain" />
              </span>
              <span
                className={cn(
                  'font-medium text-[#0b0b12]',
                  outline ? 'text-[18px]' : 'text-[20px] tracking-[-0.12px]',
                )}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
        <ArrowLink to={link.to}>{link.label}</ArrowLink>
      </Container>
    </section>
  );
}

/** Figma "D · Related · Go deeper" (17.04 / 17.05): 32px title and four 78px link tiles. */
export function DGoDeeper({ title = 'Go deeper', links, tone = 'white' }) {
  return (
    <section className={cn('py-16 lg:py-24', BG[tone])}>
      <Container width="wide" className="flex flex-col gap-7">
        <DTitle size={32}>{title}</DTitle>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="flex items-center justify-between gap-3 rounded-[18px] border border-[#e7e7ee] bg-surface-white p-[22px] text-[17px] leading-[22px] font-medium text-[#0b0b12] transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(11,11,18,0.18)]"
              >
                {label}
                <CornerArrow size={32} />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const TAGS = {
  Access: ['#fbf0f5', '#9e0059'],
  Data: ['#eef4ff', '#0060ff'],
  Oversight: ['#f1faf5', '#1e7f4f'],
};

/** Figma "D · Control comes first" (17.05): head + tag legend, six principle cards. */
export function DPrinciples({ eyebrow, title, items }) {
  return (
    <section className="bg-surface-white py-16 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3.5">
            <Overline>{eyebrow}</Overline>
            <DTitle size={48}>{title}</DTitle>
          </div>
          <ul className="flex gap-2" aria-label="Principle groups">
            {Object.entries(TAGS).map(([t, [bg, color]]) => (
              <li key={t}>
                <Pill bg={bg} color={color} mono={false}>
                  {t}
                </Pill>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([tag, name, body], i) => (
            <li
              key={name}
              className="relative isolate flex flex-col gap-12 overflow-hidden rounded-[22px] border border-[#e7e7ee] bg-surface-white p-[26px]"
            >
              <CornerRings stroke="rgba(11,11,18,0.05)" />
              <span className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium tracking-[0.44px] text-[#8b90a3]">
                  PRINCIPLE {pad(i + 1)}
                </span>
                <Pill bg={TAGS[tag][0]} color={TAGS[tag][1]} mono={false}>
                  {tag}
                </Pill>
              </span>
              <span className="relative flex flex-col gap-2">
                <h3 className="text-[20px] leading-[1.3] font-medium tracking-[-0.18px] text-[#0b0b12] lg:text-[22px]">
                  {name}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[#4f5566]">{body}</p>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const DRAFT = 'text-[#b26b00]';
const isDraft = (s) => /^\[.*\]$/.test(s);

/**
 * Figma "D · Company story" (17.03): overline + 44px title beside a 19px statement and a draft
 * note (amber, Figma placeholder), then four fact tiles (mono label · 28px value; bracketed
 * values stay amber until confirmed).
 */
export function DStory({ eyebrow, title, statement, note, facts }) {
  return (
    <section className="bg-surface-white pt-6 pb-16 lg:pt-10 lg:pb-24">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[520px_1fr] lg:items-center lg:gap-20 lg:p-10">
          <div className="flex flex-col gap-3.5">
            <Overline>{eyebrow}</Overline>
            <DTitle size={44}>{title}</DTitle>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="text-[17px] leading-[1.6] text-[#0b0b12] lg:text-[19px]">{statement}</p>
            <p className={cn('text-[16px] leading-[1.6] lg:text-[17px]', DRAFT)}>{note}</p>
          </div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-9 rounded-[22px] bg-[#f7f7fa] p-6">
              <dt className="font-mono text-[11px] font-medium tracking-[0.66px] text-[#8b90a3] uppercase">
                {label}
              </dt>
              <dd
                className={cn(
                  'text-[24px] leading-9 font-medium tracking-[-0.8px] lg:text-[28px]',
                  isDraft(value) ? DRAFT : 'text-[#0b0b12]',
                )}
              >
                {value.split(/(\[[^\]]+\])/).map((part, i) =>
                  isDraft(part) ? (
                    <span key={i} className={DRAFT}>
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
