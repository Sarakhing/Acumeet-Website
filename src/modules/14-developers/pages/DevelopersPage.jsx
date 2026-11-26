import Breadcrumb from '@/components/navigation/Breadcrumb';
import CtaBand from '@/components/blocks/CtaBand';
import Faq from '@/components/blocks/Faq';
import ApiConsole from '../components/ApiConsole';
import { CtaPanel, DevDirectory, ResponsibleIntegration } from '../components/DevBlocks';
import DevHero from '../components/DevHero';
import DevJourney from '../components/DevJourney';
import DocsBody from '../components/DocsBody';
import DocsHero from '../components/DocsHero';
import ResourceAccordion from '../components/ResourceAccordion';
import UseCaseCarousel from '../components/UseCaseCarousel';

const SECTIONS = {
  accordion: ResourceAccordion,
  console: ApiConsole,
  cta: CtaPanel,
  directory: DevDirectory,
  docsBody: DocsBody,
  docsHero: DocsHero,
  hero: DevHero,
  journey: DevJourney,
  responsible: ResponsibleIntegration,
  usecases: UseCaseCarousel,
};

/**
 * Developers pages (14.01–14.10; Figma "14 · Developers"): breadcrumb → `sections` (own hero types,
 * so not a BlockPage) → FAQ (anchored as "faqs" for the docs index) → CTA band. Figma's "Copy status
 * badge" is a designer note and is not rendered.
 */
export default function DevelopersPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      {c.sections.map(({ type, ...props }, i) => {
        const Section = SECTIONS[type];
        return <Section key={i} {...props} />;
      })}
      {c.faq && (
        <div id="faqs" className="scroll-mt-20">
          <Faq {...c.faq} />
        </div>
      )}
      {c.afterFaq &&
        (() => {
          const { type, ...props } = c.afterFaq;
          const Section = SECTIONS[type];
          return <Section {...props} />;
        })()}
      <CtaBand {...c.cta} />
    </>
  );
}
