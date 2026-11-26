import { useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Pattern from '@/components/patterns/Pattern';
import { cn } from '@/utils/cn';
import DuoIcon from '@/modules/11-enterprise/components/DuoIcon';

/* Industry pill tint + text colour. */
const PILLS = {
  Banking: ['#fff3e6', '#c2410c'],
  Insurance: ['#fdecf3', '#c2185b'],
  Telecommunications: ['#eaf2ff', '#0060ff'],
  'Public sector': ['#f1ebfe', '#6b3fd4'],
  Enterprise: ['#e6f6ef', '#0e8a5f'],
  'Financial services': ['#e5f5f9', '#0e9aa7'],
};
const TONE = {
  Banking: '#d97706',
  Insurance: '#c2185b',
  Telecommunications: '#2185f6',
  'Public sector': '#7c4ddb',
  Enterprise: '#1e9e62',
  'Financial services': '#0e9aa7',
};

function Pill({ label, children }) {
  const [bg, fg] = PILLS[label] ?? ['#f4f4f6', '#4f5566'];
  return (
    <span
      className="rounded-pill px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: bg, color: fg }}
    >
      {children ?? label}
    </span>
  );
}

function Featured({ story }) {
  return (
    <article className="grid overflow-hidden rounded-[28px] border border-border-muted bg-[#f4f1fa] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden p-6">
        <Pattern type="rings" size="panel" />
        <div className="relative">{story.visual}</div>
      </div>
      <div className="flex flex-col gap-6 bg-[#f7f5fc] p-6 sm:p-10 lg:min-h-[529px] lg:p-12">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-pill bg-[#fdecf3] px-2.5 py-1 text-[11px] font-medium text-brand-magenta">
            Featured
          </span>
          {story.tags.map((t) => (
            <span
              key={t}
              className="rounded-pill bg-surface-white px-2.5 py-1 text-[11px] font-medium text-ink-700"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-[24px] font-medium leading-[1.25] tracking-[-0.5px] text-ink-900 sm:text-[30px]">
          {story.title}
        </h3>
        <p className="text-[16px] leading-[1.6] text-ink-700">{story.quote}</p>
        <p className="flex items-center gap-3">
          <img
            src={story.avatar}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          <span className="flex flex-col">
            <span className="text-[14px] font-medium text-ink-900">{story.person}</span>
            <span className="text-[12px] text-ink-600">{story.org}</span>
          </span>
        </p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {story.outcomes.map(([label, icon]) => (
            <li
              key={label}
              className="flex flex-col gap-3 rounded-[14px] border border-border-muted bg-surface-white p-3.5"
            >
              <span className="flex size-8 items-center justify-center rounded-[10px] border border-border-muted">
                <DuoIcon name={icon} tone="#2185f6" size={16} />
              </span>
              <span className="text-[13px] leading-[1.45] text-ink-800">{label}</span>
            </li>
          ))}
        </ul>
        <span className="flex items-center gap-1.5 text-[14px] font-medium text-brand-magenta">
          Read story <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}

function StoryCard({ s }) {
  const tone = TONE[s.industry] ?? '#c2185b';
  return (
    <article className="flex h-full flex-col gap-5 rounded-[22px] border border-border-muted bg-surface-white p-6 lg:min-h-[299px]">
      <div className="flex items-start justify-between">
        <span
          className="flex size-10 items-center justify-center rounded-[12px] border"
          style={{ borderColor: tone }}
        >
          <DuoIcon name={s.icon} tone={tone} size={20} />
        </span>
        <Pill label={s.industry} />
      </div>
      <h3 className="text-[18px] font-medium leading-[1.3] text-ink-900">{s.title}</h3>
      <p className="flex-1 text-[14px] leading-[1.6] text-ink-700">{s.body}</p>
      <p className="flex items-center gap-2.5 border-t border-border-muted pt-4 text-[12px] text-ink-600">
        <img
          src={s.avatar}
          alt=""
          width={22}
          height={22}
          className="size-[22px] rounded-full object-cover"
        />
        <span className="flex-1">{s.role}</span>
        <span aria-hidden="true" className="text-ink-800">
          →
        </span>
      </p>
    </article>
  );
}

/**
 * Figma "Customer stories · listing" (13.10, 49:139742): overline + 40px title with a story search,
 * industry chips, a featured story (visual panel + quote, outcomes, "Read story"), six story cards and
 * a night quote band with "Share your story". Chips and search filter the cards (and the featured
 * story) in place.
 * featured: { industry, tags, title, quote, person, org, avatar, outcomes: [[label, icon]], visual };
 * stories: [{ industry, icon, title, body, role, avatar }]; quote: { text, by, avatar, cta }.
 */
export default function CustomerStories({
  id,
  eyebrow,
  title,
  chips = [],
  featured,
  stories = [],
  quote,
}) {
  const [active, setActive] = useState(chips[0]);
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const match = (s) =>
    (active === chips[0] || s.industry === active) &&
    (!q || `${s.title} ${s.body ?? s.quote} ${s.industry}`.toLowerCase().includes(q));
  const list = stories.filter(match);
  return (
    <section id={id} className="scroll-mt-20 bg-surface-white pb-16 pt-16 lg:pb-28 lg:pt-24">
      <Container width="wide" className="flex flex-col gap-8 lg:gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[12px] uppercase tracking-[0.96px] text-brand-magenta">
              {eyebrow}
            </p>
            <h2 className="text-[30px] font-medium leading-[1.2] tracking-[-0.8px] text-ink-900 sm:text-[40px]">
              {title}
            </h2>
          </div>
          <label className="flex h-11 w-full items-center gap-2 rounded-pill border border-border-muted bg-surface-white px-4 lg:w-[300px]">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-brand-magenta" />
            <span className="sr-only">Search stories</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories"
              className="w-full bg-transparent text-[13px] text-ink-900 outline-none placeholder:text-ink-500"
            />
          </label>
        </div>
        <div role="group" aria-label="Filter by industry" className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === active}
              onClick={() => setActive(c)}
              className={cn(
                'rounded-pill border px-4 py-2 text-[13px] font-medium transition-colors',
                c === active
                  ? 'border-[#0b0b12] bg-[#0b0b12] text-white'
                  : 'border-border-muted bg-surface-white text-ink-800 hover:border-ink-500',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && match(featured) && <Featured story={featured} />}

        {list.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <li key={s.title}>
                <StoryCard s={s} />
              </li>
            ))}
          </ul>
        ) : (
          !(featured && match(featured)) && (
            <p className="py-10 text-center text-[15px] text-ink-600">
              No stories match your search.
            </p>
          )
        )}

        {quote && (
          <figure className="flex flex-col gap-6 rounded-[28px] bg-[#0b0b0f] p-6 sm:flex-row sm:items-center sm:gap-10 sm:px-14 sm:py-12 lg:min-h-[200px]">
            <img
              src={quote.avatar}
              alt=""
              width={96}
              height={96}
              className="size-20 shrink-0 rounded-full object-cover sm:size-24"
            />
            <div className="flex flex-1 flex-col gap-3">
              <blockquote className="text-[20px] font-medium leading-[1.35] text-ink-on-dark sm:text-[24px]">
                {quote.text}
              </blockquote>
              <figcaption className="text-[13px] text-ink-on-dark-muted">{quote.by}</figcaption>
            </div>
            <Link
              to={quote.cta.to}
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-pill bg-surface-white px-5 py-3 text-[14px] font-medium text-ink-900"
            >
              {quote.cta.label} <span aria-hidden="true">→</span>
            </Link>
          </figure>
        )}
      </Container>
    </section>
  );
}
