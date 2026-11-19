import { useState } from 'react';
import { NavLink } from 'react-router';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { ArrowLink, GroupLabel, MegaMenuLink } from './MegaMenuPanel';
import { NAV_SECONDARY } from '@/constants/navigation';
import { MEGA_MENU } from '@/constants/megaMenu';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

/** Merge Figma "Group · cont." columns (title: null) into the group they continue. */
function flattenGroups(columns) {
  const out = [];
  columns.flat().forEach((g) => {
    if (!g.title && out.length)
      out[out.length - 1] = { ...out.at(-1), links: [...out.at(-1).links, ...g.links] };
    else out.push(g);
  });
  return out;
}

/** Drawer below lg: each primary item is an accordion revealing that mega panel's groups. */
export default function MobileNav({ id, open, onNavigate }) {
  const [section, setSection] = useState(null);

  return (
    <div
      id={id}
      className={cn(
        'fixed inset-x-0 bottom-0 top-nav z-50 overflow-y-auto overflow-x-hidden overscroll-contain bg-surface-white px-5 pb-10 pt-2 transition-[opacity,visibility] duration-200 sm:px-8 lg:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <ul className="flex flex-col divide-y divide-border-subtle">
        {MEGA_MENU.map((panel) => {
          const expanded = section === panel.id;
          const regionId = `${id}-${panel.id}`;
          return (
            <li key={panel.id}>
              <button
                type="button"
                id={`${regionId}-trigger`}
                aria-expanded={expanded}
                aria-controls={regionId}
                onClick={() => setSection(expanded ? null : panel.id)}
                className={cn(
                  'flex w-full items-center justify-between py-4 text-left text-[17px] transition-colors',
                  expanded ? 'text-brand-blue' : 'text-ink-600',
                )}
              >
                {panel.label}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={cn('shrink-0 transition-transform', expanded && 'rotate-180')}
                />
              </button>
              <div
                id={regionId}
                role="region"
                aria-labelledby={`${regionId}-trigger`}
                hidden={!expanded}
                className="pb-5"
              >
                <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
                  {flattenGroups(panel.columns).map((group, gi) => {
                    const gid = `${regionId}-g${gi}`;
                    return (
                      <div key={gi} className="flex min-w-0 flex-col gap-0.5">
                        <GroupLabel id={gid} title={group.title} />
                        <div aria-hidden="true" className="h-2" />
                        <ul aria-labelledby={gid} className="flex flex-col gap-0.5">
                          {group.links.map((l) => (
                            <li key={l.to + l.label}>
                              <MegaMenuLink link={l} onNavigate={onNavigate} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-muted pt-4">
                  {panel.footerLinks.map((f) => (
                    <ArrowLink
                      key={f.label}
                      to={f.to}
                      onNavigate={onNavigate}
                      className="text-brand-blue"
                    >
                      {f.label}
                    </ArrowLink>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
        {NAV_SECONDARY.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn('block py-4 text-[17px]', isActive ? 'text-ink-900' : 'text-ink-600')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Button to={ROUTES.bookDemo} onClick={onNavigate} className="mt-6 w-full">
        Book a demo
      </Button>
    </div>
  );
}
