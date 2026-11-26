import { useState } from 'react';
import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import orbit from '@/assets/images/resources/cover-orbit.webp';
import bands from '@/assets/images/resources/cover-bands.webp';
import record from '@/assets/images/resources/cover-record.webp';
import waveform from '@/assets/images/resources/cover-waveform.webp';
import supermark from '@/assets/images/resources/cover-supermark.webp';
import peaks from '@/assets/images/resources/cover-peaks.webp';

/** Figma "Cover/…" artwork for "Resource card" (384×240). */
export const COVERS = { orbit, bands, record, waveform, supermark, peaks };

function CardLink({ label, to }) {
  const inner = (
    <>
      {label}
      <span
        aria-hidden="true"
        className="flex size-[18px] items-center justify-center rounded-[4px] bg-brand-blue text-[11px] text-white transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </>
  );
  const cls = 'group inline-flex w-fit items-center gap-2 text-[14px] font-medium text-ink-900';
  return to ? (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  ) : (
    <span className={cls}>{inner}</span>
  );
}

function Card({ it }) {
  return (
    <article className="flex flex-col gap-3">
      <img
        src={COVERS[it.cover]}
        alt=""
        width={384}
        height={240}
        loading="lazy"
        className="mb-3 aspect-[8/5] w-full rounded-[16px] object-cover"
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.66px] text-[#8b90a3]">{it.meta}</p>
      <h3 className="text-[17px] font-medium leading-[1.35] text-ink-900">{it.title}</h3>
      <CardLink label={it.link} to={it.to} />
    </article>
  );
}

/* Featured (webinars): night card, amber "Upcoming" pill, 28px title, speakers, blue button, cover. */
function Featured({ it }) {
  return (
    <article className="flex flex-col gap-8 rounded-[28px] bg-[#0b0b0f] p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex max-w-[620px] flex-col items-start gap-4">
        <span className="rounded-pill bg-[#ffba00] px-3 py-1 text-[12px] font-medium text-[#0a0a0b]">
          {it.meta}
        </span>
        <h3 className="text-[24px] font-medium leading-[1.25] text-ink-on-dark sm:text-[28px]">
          {it.title}
        </h3>
        {it.byline && <p className="text-[14px] text-ink-on-dark-muted">{it.byline}</p>}
        <Button to={it.to}>{it.link}</Button>
      </div>
      <img
        src={COVERS[it.cover]}
        alt=""
        width={384}
        height={240}
        className="aspect-[8/5] w-full rounded-[16px] object-cover lg:w-[384px]"
      />
    </article>
  );
}

/**
 * Figma "02 · Listing" (13.02, 13.05–13.08): category chips (the active one blue) that filter the
 * cards, an optional featured card, and a 3-up grid of "Resource card"s — a 384×240 cover, mono meta
 * line, title and a "Link ⇢" with a blue arrow tile. Cards without `to` render as plain text
 * (there are no article pages yet). `more` adds Figma's "Load more articles" button (disabled: every
 * item is already shown).
 * chips: string[] (first = all); items: [{ title, meta, cover, link, to?, tags?: string[] }]; featured?.
 */
export default function ResourceListing({ id, chips = [], items = [], featured, more }) {
  const [active, setActive] = useState(chips[0]);
  const all = active === chips[0];
  const shown = all ? items : items.filter((it) => it.tags?.includes(active));
  const showFeatured = featured && (all || featured.tags?.includes(active));
  return (
    <section id={id} className="scroll-mt-20 bg-surface-white py-16 lg:py-[72px]">
      <Container className="flex flex-col gap-10">
        {chips.length > 0 && (
          <div role="group" aria-label="Filter" className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === active}
                onClick={() => setActive(c)}
                className={cn(
                  'rounded-[10px] px-4 py-2 text-[13px] font-medium transition-colors',
                  c === active
                    ? 'bg-brand-blue text-white'
                    : 'bg-[#f4f4f6] text-ink-800 hover:bg-[#ebebef]',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        {showFeatured && <Featured it={featured} />}
        {shown.length > 0 ? (
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((it) => (
              <li key={it.title}>
                <Card it={it} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-10 text-center text-[15px] text-ink-600">
            Nothing in this category yet.
          </p>
        )}
        {more && (
          <button
            type="button"
            disabled
            className="mx-auto rounded-pill border border-border-muted bg-surface-white px-5 py-2.5 text-[13px] font-medium text-ink-800 disabled:cursor-default"
          >
            {more}
          </button>
        )}
      </Container>
    </section>
  );
}
