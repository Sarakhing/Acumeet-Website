import { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import mark from '@/assets/logos/acumeet-mark.svg';
import { cn } from '@/utils/cn';
import { ENTERPRISE, GROUPS } from '../content/enterprise';
import DuoIcon from './DuoIcon';

function Arrow({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Scroll tabs left' : 'Scroll tabs right'}
      className="flex size-[34px] items-center justify-center rounded-full border border-[#e4e4e7] bg-surface-white text-ink-800 transition-colors hover:bg-surface-muted"
    >
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d={dir === 'prev' ? 'M8.5 3L4.5 7l4 4' : 'M5.5 3l4 4-4 4'}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * Figma "Enterprise tabs" (49:68286): a white strip under the breadcrumb with a dark "ENTERPRISE /
 * {page}" pill, a scrolling track of grouped tabs (Platform · Rollout · Support · Evaluate) with a
 * right fade, and prev / next buttons. The active tab is a white raised pill with a magenta dot and
 * scrolls into view on load. `active` = ENTERPRISE key whose tab is highlighted; `label` = pill text.
 */
export default function EnterpriseTabs({ active, label }) {
  const track = useRef(null);
  const current = useRef(null);

  useEffect(() => {
    const t = track.current;
    const el = current.current;
    if (t && el) t.scrollLeft = el.offsetLeft - t.clientWidth / 2 + el.clientWidth / 2;
  }, [active]);

  const scroll = (dx) => track.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <nav aria-label="Enterprise" className="border-b border-[#e4e4e7] bg-surface-white">
      <div className="mx-auto flex max-w-(--container-page) items-center gap-4 px-(--gutter) py-3 lg:py-5">
        <div className="hidden h-[47px] shrink-0 items-center gap-2.5 rounded-[14px] bg-[#0b0b0d] py-2 pl-2 pr-3.5 md:flex">
          <span className="flex size-[30px] items-center justify-center rounded-[8px] bg-surface-white">
            <img src={mark} alt="" width={18} height={14} className="h-[14px] w-[18px]" />
          </span>
          <span className="flex flex-col">
            <span className="text-[10px] font-medium uppercase leading-[1.2] tracking-[0.8px] text-white/60">
              Enterprise
            </span>
            <span className="whitespace-nowrap text-[13.5px] font-semibold leading-[1.4] text-white">
              {label}
            </span>
          </span>
        </div>

        <div className="relative min-w-0 flex-1 rounded-[16px] border border-[#e4e4e7] bg-[#fafafa] p-1">
          <ul
            ref={track}
            className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GROUPS.map(([group, keys], g) => (
              <Fragment key={group}>
                {g > 0 && <li aria-hidden="true" className="mx-1 h-5 w-px shrink-0 bg-[#e4e4e7]" />}
                <li className="shrink-0 px-2 font-mono text-[10px] font-medium uppercase tracking-[0.8px] text-[#83868e]">
                  {group}
                </li>
                {keys
                  .filter((k) => ENTERPRISE[k].tab)
                  .map((k) => {
                    const on = k === active;
                    const p = ENTERPRISE[k];
                    return (
                      <li key={k} ref={on ? current : undefined} className="shrink-0">
                        <Link
                          to={p.to}
                          aria-current={on ? 'page' : undefined}
                          className={cn(
                            'flex h-10 items-center gap-2 whitespace-nowrap rounded-[12px] px-3 text-[13.5px] transition-colors',
                            on
                              ? 'border border-[#e4e4e7] bg-surface-white font-semibold text-[#0a0a0b] shadow-[0_1px_2px_rgb(11_11_18/0.06)]'
                              : 'font-medium text-[#55575d] hover:bg-surface-white/70 hover:text-ink-900',
                          )}
                        >
                          <DuoIcon name={p.icon} size={16} />
                          {p.tab}
                          {on && (
                            <span
                              aria-hidden="true"
                              className="size-1.5 rounded-full bg-[#6b3fd4]"
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
              </Fragment>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-[16px] bg-gradient-to-l from-[#fafafa] to-transparent"
          />
        </div>

        <div className="hidden shrink-0 gap-1.5 md:flex">
          <Arrow dir="prev" onClick={() => scroll(-280)} />
          <Arrow dir="next" onClick={() => scroll(280)} />
        </div>
      </div>
    </nav>
  );
}
