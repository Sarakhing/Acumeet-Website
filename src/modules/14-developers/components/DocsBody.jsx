import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * Figma "D · Docs body" (14.02–14.10): a sticky "Developers" sidebar (page list, active bar, pink
 * "Have a workflow in mind?" box), numbered content sections with rules, a pale-blue "Key points"
 * box and "Related" path cards, and a sticky "On this page" index on wide screens.
 * nav: [{ title, to, active }]; sections: [[title, body]]; points: string[]; related: [{ title, to }];
 * contact: { label, to }.
 */
export default function DocsBody({ nav = [], sections = [], points = [], related = [], contact }) {
  const toc = [...sections.map(([t]) => t), 'Key points', 'FAQs'];
  return (
    <section className="bg-surface-white py-14 lg:pb-[104px] lg:pt-[72px]">
      <Container
        width="wide"
        className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,760px)_200px] xl:gap-14"
      >
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-6">
            <nav aria-label="Developers" className="flex flex-col gap-1">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.66px] text-ink-500">
                Developers
              </p>
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  aria-current={n.active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-[8px] px-4 py-2 text-[13px] transition-colors',
                    n.active
                      ? 'bg-[#f2f2f5] font-medium text-ink-900'
                      : 'text-ink-700 hover:bg-[#f7f7f9]',
                  )}
                >
                  {n.active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-2 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-[#6b3fd4]"
                    />
                  )}
                  {n.title}
                </Link>
              ))}
            </nav>
            {contact && (
              <div className="rounded-[12px] bg-[#fdf0f6] p-4">
                <p className="text-[13px] font-medium text-ink-900">Have a workflow in mind?</p>
                <Link
                  to={contact.to}
                  className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand-magenta"
                >
                  {contact.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </div>
        </aside>

        <div className="flex min-w-0 flex-col">
          {sections.map(([title, body], i) => (
            <article
              key={title}
              id={slug(title)}
              className="scroll-mt-24 border-b border-border-muted py-10 first:pt-0"
            >
              <p className="flex items-center gap-3 font-mono text-[11px] text-brand-magenta">
                {String(i + 1).padStart(2, '0')}
                <span aria-hidden="true" className="h-px w-6 bg-[#f2b8d1]" />
              </p>
              <h2 className="mt-3.5 text-[24px] font-medium leading-[1.2] tracking-[-0.6px] text-ink-900 sm:text-[30px]">
                {title}
              </h2>
              <p className="mt-3.5 text-[16px] leading-[1.65] text-ink-700 sm:text-[17px]">
                {body}
              </p>
            </article>
          ))}

          <div
            id="key-points"
            className="mt-10 scroll-mt-24 rounded-[16px] border border-[#dbe5ff] bg-[#f4f7ff] p-6"
          >
            <p className="flex items-center gap-3 text-[15px] font-medium text-ink-900">
              <span className="flex size-6 items-center justify-center rounded-[6px] bg-brand-blue font-mono text-[11px] text-white">
                i
              </span>
              Key points
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14px] text-ink-800">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] bg-[#e6f6ef] text-[10px] text-[#0e8a5f]"
                  >
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.66px] text-ink-500">
                Related
              </p>
              <ul
                className={cn(
                  'grid gap-3 sm:grid-cols-3',
                  related.length === 4 && 'lg:grid-cols-4',
                )}
              >
                {related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="group flex h-full min-h-[92px] flex-col gap-5 rounded-[12px] border border-border-muted p-[18px] transition-shadow hover:shadow-mock"
                    >
                      <span className="flex items-center justify-between text-[14px] font-medium text-ink-900">
                        {r.title}
                        <span
                          aria-hidden="true"
                          className="text-brand-magenta transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                      <span className="font-mono text-[10.5px] text-ink-500">{r.to}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="hidden xl:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.66px] text-ink-500">
              On this page
            </p>
            <ul className="flex flex-col border-l border-border-muted">
              {toc.map((t, i) => (
                <li key={t}>
                  <a
                    href={`#${slug(t)}`}
                    className={cn(
                      '-ml-px block border-l py-1.5 pl-3 text-[12.5px] leading-[1.4] transition-colors',
                      i === 0
                        ? 'border-[#6b3fd4] text-ink-900'
                        : 'border-transparent text-ink-500 hover:text-ink-800',
                    )}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Container>
    </section>
  );
}
