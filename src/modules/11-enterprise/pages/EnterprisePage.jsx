import BlockPage from '@/components/blocks/BlockPage';
import Stepper from '@/components/blocks/Stepper';
import Checklist from '../components/Checklist';
import EnterpriseIndex from '../components/EnterpriseIndex';
import EnterpriseJourney from '../components/EnterpriseJourney';
import EnterpriseTabs from '../components/EnterpriseTabs';
import OverviewIntro from '../components/OverviewIntro';
import PocSpotlight from '../components/PocSpotlight';

/** Enterprise-only section types on top of BlockPage's shared ones. */
const SECTIONS = {
  checklist: Checklist,
  index: EnterpriseIndex,
  intro: OverviewIntro,
  journey: EnterpriseJourney,
  spotlight: PocSpotlight,
  stepper: Stepper,
};

/**
 * Enterprise pages (11.01–11.18; Figma "11 · Enterprise" 49:67845): a BlockPage with the
 * "Enterprise tabs" strip under the breadcrumb (`content.tab = { active, label }`; 11.08 has none).
 * Builders live in content/enterprise.js.
 */
export default function EnterprisePage({ content }) {
  return (
    <BlockPage
      content={content}
      sections={SECTIONS}
      subnav={content.tab && <EnterpriseTabs {...content.tab} />}
    />
  );
}
