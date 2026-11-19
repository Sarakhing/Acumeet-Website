import Breadcrumb from '@/components/navigation/Breadcrumb';
import SolutionHero from '@/components/blocks/SolutionHero';
import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';
import Editorial from '@/components/blocks/Editorial';
import CardGrid from '@/components/blocks/CardGrid';
import Faq from '@/components/blocks/Faq';
import RelatedRow from '@/components/blocks/RelatedRow';
import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import { govern as c } from '../content/govern';

/** Split with its VisualPanel built from `{ visual: { tint, pattern, content } }` data. */
function FeatureSplit({ visual, ...props }) {
  return (
    <Split
      {...props}
      visual={
        <VisualPanel tint={visual.tint} pattern={visual.pattern}>
          {visual.content}
        </VisualPanel>
      }
    />
  );
}

/** 03.05 · Govern (Figma 46:17748). */
export default function GovernPage() {
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <SolutionHero {...c.hero} />
      <FeatureSplit {...c.policies} />
      <Editorial {...c.transparency} />
      <FeatureSplit {...c.retention} />
      {c.rows.map((row) => (
        <Editorial key={row.title} {...row} />
      ))}
      <FeatureSplit {...c.redaction} />
      <Editorial {...c.visibility} />
      <CardGrid {...c.industries} />
      <Faq items={c.faq} defaultOpen="all" />
      <RelatedRow cards={c.related} titleTo={ROUTES.solutions.overview} />
      <CtaBand {...c.cta} />
    </>
  );
}
