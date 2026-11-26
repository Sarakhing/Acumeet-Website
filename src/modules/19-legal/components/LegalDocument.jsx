import { useEffect, useMemo, useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Parses the compact document format into blocks:
 * "## " heading (starts a section) · "- " bullet · "! title :: body" callout ·
 * "| a | b" table row (the first row of a run is the header) · "|| key | value" key/value row ·
 * anything else = paragraph. Text before the first heading is the introduction.
 */
export function parse(body) {
  const sections = [{ title: null, blocks: [] }];
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const blocks = sections.at(-1).blocks;
    const last = blocks.at(-1);
    if (line.startsWith('## ')) {
      sections.push({ title: line.slice(3), id: slug(line.slice(3)), blocks: [] });
    } else if (line.startsWith('- ')) {
      if (last?.type === 'list') last.items.push(line.slice(2));
      else blocks.push({ type: 'list', items: [line.slice(2)] });
    } else if (line.startsWith('! ')) {
      const [title, text] = line.slice(2).split(' :: ');
      blocks.push({ type: 'callout', title, text });
    } else if (line.startsWith('|| ')) {
      const row = line.slice(3).split(' | ');
      if (last?.type === 'pairs') last.rows.push(row);
      else blocks.push({ type: 'pairs', rows: [row] });
    } else if (line.startsWith('| ')) {
      const row = line.slice(2).split(' | ');
      if (last?.type === 'table') last.rows.push(row);
      else blocks.push({ type: 'table', head: row, rows: [] });
    } else {
      blocks.push({ type: 'p', text: line });
    }
  }
  return sections;
}

const P = 'text-[15.5px] leading-[1.65] text-[#3a3f4c] lg:text-[16px]';

function Block({ b }) {
  if (b.type === 'p') return <p className={P}>{b.text}</p>;
  if (b.type === 'list')
    return (
      <ul className="flex flex-col gap-2.5">
        {b.items.map((it) => (
          <li key={it} className={cn(P, 'flex gap-3')}>
            <span
              aria-hidden="true"
              className="mt-[10px] size-1.5 shrink-0 rounded-full bg-[#c2185b]"
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  if (b.type === 'callout')
    return (
      <aside
        role="note"
        className="flex flex-col gap-2 rounded-[12px] border border-[#f2d99c] bg-[#fff8e8] px-5 py-[18px]"
      >
        <p className="text-[15px] leading-[1.4] font-medium text-[#8a5a00]">{b.title}</p>
        <p className="text-[15px] leading-[1.6] text-[#6b4a00]">{b.text}</p>
      </aside>
    );
  if (b.type === 'table')
    return (
      <div className="overflow-x-auto rounded-[12px] border border-[#e7e7ee] bg-surface-white">
        <table className="w-full min-w-[640px] table-fixed border-collapse text-left">
          <thead className="bg-[#f4f4f7]">
            <tr>
              {b.head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-3.5 py-3 text-[12.5px] font-normal text-[#5b6070]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i} className="border-t border-[#e7e7ee]">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={cn(
                      'px-3.5 py-3 text-[14px]',
                      j === 0 ? 'text-[#0b0b12]' : 'text-[#3a3f4c]',
                    )}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  if (b.type === 'pairs')
    return (
      <dl className="overflow-hidden rounded-[12px] border border-[#e7e7ee] bg-surface-white">
        {b.rows.map(([k, v], i) => (
          <div
            key={k}
            className={cn(
              'grid gap-1 px-4 py-3 sm:grid-cols-[220px_1fr] sm:gap-6',
              i > 0 && 'border-t border-[#e7e7ee]',
            )}
          >
            <dt className="text-[14px] font-medium text-[#0b0b12]">{k}</dt>
            <dd className="text-[14px] leading-[1.6] text-[#3a3f4c]">{v}</dd>
          </div>
        ))}
      </dl>
    );
  return null;
}

/** Highlights the contents entry of the last section whose top has passed the nav (120px). */
function useActive(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);
  return active;
}

/**
 * Figma "Legal document" (19.01–19.06): on #fafafb, a magenta mono overline, 48px title and
 * mono meta line, then a sticky 320px "Contents" card (anchor links, current section tinted)
 * beside the 896px document — intro, then sections with a top rule, 24px headings, 16px/1.65
 * paragraphs, magenta-dot bullets, amber drafting callouts and tables.
 * doc: { title, meta, body } (body in the compact format parsed above).
 */
export default function LegalDocument({ doc }) {
  const [intro, ...sections] = useMemo(() => parse(doc.body), [doc.body]);
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActive(ids);
  return (
    <section id="document" className="scroll-mt-20 bg-[#fafafb] py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10 lg:gap-12">
        <header className="flex flex-col gap-4">
          <p className="font-mono text-[12px] tracking-[0.96px] text-[#c2185b] uppercase">
            Legal document
          </p>
          <h2 className="text-[34px] leading-[1.12] font-medium tracking-[-1px] text-[#0b0b12] lg:text-[48px] lg:tracking-[-1.44px]">
            {doc.title}
          </h2>
          {doc.meta && <p className="font-mono text-[13px] text-[#8b90a3]">{doc.meta}</p>}
        </header>
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <nav
            aria-label="Contents"
            className="self-start rounded-[20px] border border-[#e7e7ee] bg-surface-white px-4 py-6 lg:sticky lg:top-24"
          >
            <p className="mb-1 font-mono text-[11px] tracking-[0.66px] text-[#8b90a3] uppercase">
              Contents
            </p>
            <ol className="flex flex-col gap-0.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? 'location' : undefined}
                    className={cn(
                      'block rounded-[10px] px-3 py-[9px] text-[14px] leading-[1.4] text-[#3a3f4c] transition-colors hover:bg-[#fafafb]',
                      active === s.id && 'bg-[#fafafb] text-[#0b0b12]',
                    )}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="min-w-0">
            <div className="flex flex-col gap-4 pb-8">
              {intro.blocks.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-h`}
                className="flex scroll-mt-24 flex-col gap-4 border-t border-[#e7e7ee] py-8"
              >
                <h3
                  id={`${s.id}-h`}
                  className="text-[21px] leading-[1.3] font-medium tracking-[-0.5px] text-[#0b0b12] lg:text-[24px]"
                >
                  {s.title}
                </h3>
                {s.blocks.map((b, i) => (
                  <Block key={i} b={b} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}
