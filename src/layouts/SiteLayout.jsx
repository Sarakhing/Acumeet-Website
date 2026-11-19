import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

/** Shell for every page: fixed nav (with 68px spacer) + page + footer. */
export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-nav">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
