import Breadcrumb from '@/components/navigation/Breadcrumb';
import CtaBand from '@/components/blocks/CtaBand';
import DHero from '../components/DHero';
import { DMessage, DNewsroom, DOpenRoles } from '../components/DInteractive';
import {
  DBelief,
  DCards,
  DCentered,
  DClosing,
  DGoDeeper,
  DPlatforms,
  DPrinciples,
  DSolve,
  DSplit,
  DStack,
  DStory,
} from '../components/DSections';

const SECTIONS = {
  hero: DHero,
  split: DSplit,
  cards: DCards,
  solve: DSolve,
  centered: DCentered,
  closing: DClosing,
  belief: DBelief,
  stack: DStack,
  platforms: DPlatforms,
  goDeeper: DGoDeeper,
  principles: DPrinciples,
  story: DStory,
  roles: DOpenRoles,
  message: DMessage,
  newsroom: DNewsroom,
};

/**
 * Company pages (17.01–17.09; Figma "17 · Company"), built from the "D ·" sections:
 * breadcrumb → `sections: [{ type, ...props }]` in Figma order → optional gradient CTA band.
 * Builders live in content/company.js.
 */
export default function CompanyPage({ content: c }) {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      {c.sections.map(({ type, ...props }, i) => {
        const Section = SECTIONS[type];
        return <Section key={i} {...props} />;
      })}
      {c.cta && <CtaBand {...c.cta} />}
    </>
  );
}
