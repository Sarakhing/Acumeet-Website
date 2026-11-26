import { useId, useState } from 'react';
import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import DuoIcon from '@/modules/11-enterprise/components/DuoIcon';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import { DTitle } from './DSections';
import { ArrowLink, CornerRings, DButton, Overline, Pill, tint } from './primitives';

/** Filter pills: the active one is ink, the rest white with a border (aria-pressed buttons). */
function Filters({ items, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={value === item}
          onClick={() => onChange(item)}
          className={cn(
            'rounded-full border px-[11px] py-[5px] text-[12px] leading-4 font-medium transition-colors',
            value === item
              ? 'border-[#0b0b12] bg-[#0b0b12] text-white'
              : 'border-[#e7e7ee] bg-surface-white text-[#0b0b12] hover:border-[#c8cbd6]',
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

/**
 * Figma "D · Open roles" (17.07): head with team filters, then the empty state (briefcase tile,
 * 24px message, note and "Contact us"). There are no roles yet, so every filter shows the empty
 * state; `roles` ([{ title, team, location, to }]) renders a list once there are some.
 */
export function DOpenRoles({ id, eyebrow, title, teams, empty, roles = [] }) {
  const [team, setTeam] = useState(teams[0]);
  const shown = roles.filter((r) => team === teams[0] || r.team === team);
  return (
    <section id={id} className="scroll-mt-20 bg-[#f7f7fa] py-16 lg:py-24">
      <Container width="wide" className="flex flex-col gap-7">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3.5">
            <Overline>{eyebrow}</Overline>
            <DTitle size={44}>{title}</DTitle>
          </div>
          <Filters items={teams} value={team} onChange={setTeam} label="Filter roles by team" />
        </div>
        {shown.length ? (
          <ul className="flex flex-col gap-3">
            {shown.map((r) => (
              <li key={r.title}>
                <Link
                  to={r.to}
                  className="flex items-center justify-between rounded-[18px] bg-surface-white p-6"
                >
                  <span className="text-[18px] font-medium">{r.title}</span>
                  <span className="text-[14px] text-[#4f5566]">{r.location}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div
            role="status"
            className="flex flex-col items-center gap-4 rounded-[24px] bg-surface-white px-6 py-14 text-center lg:px-10"
          >
            <span className="flex size-[52px] items-center justify-center rounded-[14px] border border-[#c2185b52] bg-surface-white">
              <DuoIcon name="briefcase" tone="#c2185b" size={26} />
            </span>
            <p className="text-[22px] leading-[1.3] font-medium tracking-[-0.4px] text-[#0b0b12] lg:text-[24px]">
              {empty.title}
            </p>
            <p className="max-w-[620px] text-[16px] leading-[1.6] text-[#4f5566]">{empty.body}</p>
            <DButton to={empty.cta.to} intent="outline">
              {empty.cta.label}
            </DButton>
          </div>
        )}
      </Container>
    </section>
  );
}

const TOPICS = ['A product question', 'An enterprise evaluation', 'Support', 'Something else'];
const INPUT =
  'w-full rounded-[12px] border border-[#e7e7ee] bg-[#fafafb] px-3.5 py-3 text-[14px] leading-[18px] text-[#0b0b12] placeholder:text-[#a3a7b6] focus:border-brand-blue focus:bg-surface-white focus:outline-none';

/**
 * Figma "Company · Form · Contact" (49:177469): name, work email, organisation, topic chips,
 * message, "Contact Acumeet" and a privacy note; State=Submitted shows a tick, thanks and
 * "← Back to form". There is no backend yet: submitting validates and shows the confirmation.
 */
export function ContactForm() {
  const uid = useId();
  const [topic, setTopic] = useState(TOPICS[0]);
  const [sent, setSent] = useState(false);
  const f = (name) => `${uid}-${name}`;
  const card =
    'rounded-[24px] border border-[#e7e7ee] bg-surface-white p-6 shadow-[0_24px_60px_-30px_rgba(11,11,18,0.18)] sm:p-8';

  if (sent) {
    return (
      <div role="status" className={cn(card, 'flex flex-col gap-4 py-12')}>
        <span
          aria-hidden="true"
          className="flex size-14 items-center justify-center rounded-full bg-[#e3f4ea] text-[24px] font-medium text-[#218957]"
        >
          ✓
        </span>
        <p className="text-[18px] leading-[1.45] font-medium tracking-[-0.5px] text-[#0b0b12]">
          Thanks. Your message is in. We will route it to the right team and follow up.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="w-fit text-[14px] font-medium text-[#9e0059] hover:underline"
        >
          ← Back to form
        </button>
      </div>
    );
  }

  const label = 'text-[13px] leading-[17px] font-medium text-[#0b0b12]';
  return (
    <form
      className={cn(card, 'flex flex-col gap-[18px]')}
      onSubmit={(e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) setSent(true);
      }}
    >
      <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-3.5">
        <label className="flex flex-col gap-2">
          <span className={label}>Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
            className={INPUT}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={INPUT}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className={label}>Organisation</span>
        <input
          name="organisation"
          autoComplete="organization"
          placeholder="Organisation name"
          className={INPUT}
        />
      </label>
      <fieldset className="flex flex-col gap-2">
        <legend className={cn(label, 'mb-2')}>What are you exploring?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={t}
                checked={topic === t}
                onChange={() => setTopic(t)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  'inline-flex rounded-full border px-3 py-[7px] text-[13px] leading-[17px] font-medium peer-focus-visible:ring-2 peer-focus-visible:ring-brand-blue',
                  topic === t
                    ? 'border-[#e6b3cf] bg-[#fbf0f5] text-[#9e0059]'
                    : 'border-[#e7e7ee] bg-surface-white text-[#0b0b12]',
                )}
              >
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-2">
        <span className={label}>Message</span>
        <textarea
          id={f('message')}
          name="message"
          required
          rows={4}
          placeholder="Tell us what you need"
          className={cn(INPUT, 'h-[110px] resize-none')}
        />
      </label>
      <button
        type="submit"
        className="rounded-[12px] bg-brand-blue px-5 py-[15px] text-[15px] leading-5 font-medium text-white transition-colors hover:bg-[#0052db]"
      >
        Contact Acumeet
      </button>
      <p className="text-[12px] leading-[1.5] text-[#8b90a3]">
        We will use your details to respond to your request. See our{' '}
        <Link to={ROUTES.legal.privacy} className="underline hover:text-[#0b0b12]">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

/**
 * Figma "D · Message us" (17.08): overline, 44px title and lead, email / phone tiles and a note
 * on the left; the contact form on the right.
 */
export function DMessage({ eyebrow, title, lead, details, note }) {
  return (
    <section className="bg-[#f7f7fa] py-16 lg:py-[104px]">
      <Container width="wide" className="grid gap-10 lg:grid-cols-[520px_1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Overline>{eyebrow}</Overline>
          <DTitle size={44} className="lg:pt-2">
            {title}
          </DTitle>
          <p className="text-[17px] leading-[1.55] text-[#4f5566]">{lead}</p>
          <ul className="flex flex-col gap-2.5">
            {details.map(([k, v, href]) => (
              <li key={k}>
                <a
                  href={href}
                  className="flex items-center gap-4 rounded-[16px] border border-[#e7e7ee] bg-surface-white px-5 py-[18px] hover:border-[#c8cbd6]"
                >
                  <span className="w-[70px] font-mono text-[11px] font-medium tracking-[0.66px] text-[#8b90a3]">
                    {k}
                  </span>
                  <span className="text-[17px] text-[#0b0b12]">{v}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[12px] leading-[1.5] text-[#8b90a3]">{note}</p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

/**
 * Figma "D · Newsroom" (17.09): category filters, a featured story (image placeholder + copy)
 * and a 3-column grid of story cards, then "Load more news". Stories are Figma placeholders;
 * the filters work on their categories. "Load more" is hidden until there are more stories.
 */
export function DNewsroom({ id, categories, featured, stories, more = false }) {
  const [cat, setCat] = useState(categories[0]);
  const all = cat === categories[0];
  const shown = stories.filter((s) => all || s.category === cat);
  const showFeatured = all || featured.category === cat;
  return (
    <section id={id} className="scroll-mt-20 bg-surface-white pt-6 pb-16 lg:pb-28">
      <Container width="wide">
        <div className="flex flex-col gap-7 lg:p-8">
          <Filters items={categories} value={cat} onChange={setCat} label="Filter news" />
          {showFeatured && (
            <article className="grid overflow-hidden rounded-[24px] border border-[#e7e7ee] lg:grid-cols-[620px_1fr]">
              <div
                aria-hidden="true"
                className="relative isolate h-48 overflow-hidden lg:h-auto lg:min-h-[360px]"
                style={{ background: `linear-gradient(90deg, ${tint(0)}, ${tint(1)})` }}
              >
                <CornerRings stroke="rgba(11,11,18,0.06)" />
              </div>
              <div className="flex flex-col justify-center gap-3.5 p-6 lg:p-10">
                <Pill className="tracking-[0.44px]!">Featured · {featured.category}</Pill>
                <h2 className="text-[26px] leading-[1.3] font-medium tracking-[-0.8px] text-[#0b0b12] lg:text-[32px]">
                  {featured.title}
                </h2>
                <p className="text-[16px] leading-[1.55] text-[#4f5566]">{featured.summary}</p>
                <p className="font-mono text-[13px] text-[#8b90a3]">{featured.meta}</p>
                <ArrowLink to={featured.to}>Read the story</ArrowLink>
              </div>
            </article>
          )}
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((s, i) => (
              <li key={i}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#e7e7ee]">
                  <div
                    aria-hidden="true"
                    className="relative isolate h-[200px] overflow-hidden"
                    style={{ background: tint(s.tint) }}
                  >
                    <CornerRings stroke="rgba(11,11,18,0.06)" />
                  </div>
                  <div className="flex flex-col gap-2.5 p-[22px]">
                    <p className="font-mono text-[11px] font-medium tracking-[0.44px] text-[#9e0059] uppercase">
                      {s.category}
                    </p>
                    <h3 className="text-[19px] leading-[1.3] font-medium tracking-[-0.6px] text-[#0b0b12]">
                      {s.title}
                    </h3>
                    <p className="font-mono text-[13px] text-[#8b90a3]">{s.date}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          {more && (
            <DButton intent="outline" className="mx-auto">
              Load more news
            </DButton>
          )}
        </div>
      </Container>
    </section>
  );
}
