import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { NAV_PRIMARY, NAV_SECONDARY } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

const linkClass = ({ isActive }) =>
  cn(
    'text-body-sm transition-colors hover:text-ink-900',
    isActive ? 'text-ink-900' : 'text-ink-600',
  );

/** Figma "Navigation" (19:15125): sticky 68px header. Collapses to a drawer below lg. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the drawer whenever the route changes (state-during-render pattern).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-default bg-surface-white/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-nav w-full max-w-site items-center justify-between px-5 sm:px-8 xl:px-0"
      >
        <div className="flex items-center gap-[30px]">
          <Logo />
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_PRIMARY.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-[18px] lg:flex">
          {NAV_SECONDARY.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button to={ROUTES.bookDemo} size="md">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-ink-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 bottom-0 top-nav overflow-y-auto bg-surface-white px-5 pb-10 pt-4 transition-[opacity,visibility] duration-200 sm:px-8 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="flex flex-col divide-y divide-border-subtle">
          {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn('block py-4 text-[17px]', isActive ? 'text-ink-900' : 'text-ink-600')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button to={ROUTES.bookDemo} className="mt-6 w-full">
          Book a demo
        </Button>
      </div>
    </header>
  );
}
