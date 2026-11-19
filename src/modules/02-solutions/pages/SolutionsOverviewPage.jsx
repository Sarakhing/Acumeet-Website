import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Showcase from '@/components/blocks/Showcase';
import ScrollSlides from '@/components/blocks/ScrollSlides';
import SecurityBand from '@/components/blocks/SecurityBand';
import IndexList from '@/components/blocks/IndexList';
import CtaBand from '@/components/blocks/CtaBand';
import { overview as c } from '../content/overview';

/** 03.01 · Solutions overview (Figma 46:11504). */
export default function SolutionsOverviewPage() {
  const { hash } = useLocation();
  // In-page links ("Explore solutions", the solution index) are router links with a hash.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <Showcase id="solutions" {...c.showcase} />
      <ScrollSlides {...c.meetingTypes} />
      <SecurityBand {...c.security} />
      <IndexList {...c.industries} />
      <CtaBand {...c.cta} />
    </>
  );
}
