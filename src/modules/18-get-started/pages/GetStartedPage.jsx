import Breadcrumb from '@/components/navigation/Breadcrumb';
import { Choose, GSHero, HeroForm, NotSure } from '../components/GSSections';

const SECTIONS = { hero: GSHero, choose: Choose, notSure: NotSure, heroForm: HeroForm };

/**
 * Get Started pages (18.01, 18.03–18.07; Figma "18 · Get Started"): breadcrumb →
 * `sections: [{ type, ...props }]`. 18.02 Sign Up is the standalone SignUpPage.
 */
export default function GetStartedPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      {c.sections.map(({ type, ...props }, i) => {
        const Section = SECTIONS[type];
        return <Section key={i} {...props} />;
      })}
    </>
  );
}
