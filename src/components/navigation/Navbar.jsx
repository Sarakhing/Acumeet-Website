import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import MegaMenuPanel from './MegaMenuPanel';
import MobileNav from './MobileNav';
import { NAV_SECONDARY } from '@/constants/navigation';
import { MEGA_MENU } from '@/constants/megaMenu';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

const OPEN_DELAY = 120; // hover intent before a panel opens
const CLOSE_DELAY = 200; // grace period so a diagonal move into the panel doesn't close it
const HOVER_CLICK_GRACE = 450; // a click right after hover-open shouldn't immediately close

const linkClass = ({ isActive }) =>
  cn(
    'text-body-sm transition-colors hover:text-ink-900',
    isActive ? 'text-ink-900' : 'text-ink-600',
  );

/**
 * Figma "Navigation · D Featured" (120:64520): fixed 68px header with a mega
 * menu per primary item on lg+, and a drawer with accordions below lg.
 */
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // `animate` is true only when a panel opens from closed (not when switching panels).
  const [menu, setMenu] = useState({ id: null, animate: false });
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const triggerRefs = useRef({});
  const timer = useRef(null);
  const hoverOpenedAt = useRef(0);

  // Close everything whenever the route changes (state-during-render pattern).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawerOpen(false);
    setMenu({ id: null, animate: false });
  }

  const clearTimer = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };
  const setPanel = useCallback((id) => {
    setMenu((s) => (s.id === id ? s : { id, animate: id !== null && s.id === null }));
  }, []);
  const closeMenu = useCallback(() => {
    clearTimeout(timer.current);
    setPanel(null);
  }, [setPanel]);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Escape closes (returning focus to the trigger); a press outside the header closes.
  useEffect(() => {
    if (!menu.id) return undefined;
    const openId = menu.id;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      closeMenu();
      triggerRefs.current[openId]?.focus();
    };
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) closeMenu();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menu.id, closeMenu]);

  // Drawer: lock page scroll, Escape closes.
  useEffect(() => {
    if (!drawerOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setDrawerOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [drawerOpen]);

  const hoverIn = (id) => (e) => {
    if (e.pointerType !== 'mouse') return;
    clearTimer();
    if (menu.id === id) return;
    timer.current = setTimeout(() => {
      hoverOpenedAt.current = performance.now();
      setPanel(id);
    }, OPEN_DELAY);
  };
  const hoverOut = (e) => {
    if (e.pointerType !== 'mouse') return;
    clearTimer();
    timer.current = setTimeout(() => setPanel(null), CLOSE_DELAY);
  };
  const toggle = (id, e) => {
    clearTimer();
    if (menu.id === id) {
      // event.timeStamp shares performance.now()'s clock
      if (e.timeStamp - hoverOpenedAt.current > HOVER_CLICK_GRACE) setPanel(null);
    } else {
      hoverOpenedAt.current = 0;
      setPanel(id);
    }
  };
  // Close when keyboard focus leaves the open item (its trigger + panel).
  const onItemBlur = (id) => (e) => {
    if (menu.id === id && e.relatedTarget && !e.currentTarget.contains(e.relatedTarget))
      closeMenu();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-border-default bg-surface-white/95 backdrop-blur"
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-nav w-full max-w-(--container-page) items-center justify-between px-(--gutter)"
        >
          <div className="flex items-center gap-[30px]">
            <Logo />
            <ul className="hidden items-center gap-6 lg:flex">
              {MEGA_MENU.map((panel) => {
                const open = menu.id === panel.id;
                const inSection = pathname === panel.to || pathname.startsWith(`${panel.to}/`);
                const triggerId = `mega-trigger-${panel.id}`;
                const panelId = `mega-panel-${panel.id}`;
                return (
                  <li
                    key={panel.id}
                    onPointerEnter={hoverIn(panel.id)}
                    onPointerLeave={hoverOut}
                    onBlur={onItemBlur(panel.id)}
                  >
                    <button
                      ref={(el) => {
                        triggerRefs.current[panel.id] = el;
                      }}
                      id={triggerId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={open ? panelId : undefined}
                      onClick={(e) => toggle(panel.id, e)}
                      className={cn(
                        'text-body-sm transition-colors',
                        open
                          ? 'text-brand-blue'
                          : inSection
                            ? 'text-ink-900'
                            : 'text-ink-600 hover:text-ink-900',
                      )}
                    >
                      {panel.label}
                    </button>
                    {open && (
                      <MegaMenuPanel
                        panel={panel}
                        id={panelId}
                        labelledBy={triggerId}
                        animate={menu.animate}
                        onNavigate={closeMenu}
                      />
                    )}
                  </li>
                );
              })}
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
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Sibling of <header>, not a child: the header's backdrop-filter would become the
        containing block of this fixed drawer and collapse it to the bar's height. */}
      <MobileNav id="mobile-menu" open={drawerOpen} onNavigate={() => setDrawerOpen(false)} />
    </>
  );
}
