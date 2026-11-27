import { entPage, keySummary, rollout } from './shared';
import {
  entBreadcrumb,
  exploreEnterprise,
  RELATED,
  REQUEST_POC,
  statement,
  TALK,
} from './enterprise';

/** 11.16 · PoC Process (Figma 49:69804). */
export default {
  breadcrumb: entBreadcrumb('PoC process', { poc: true }),

  /** 01 · Hero (680): summary in the window, action items overlapping, "Live" chip. */
  ...entPage('pocProcess', {
    hero: 'window',
    tabKey: 'poc',
    eyebrow: 'PoC process',
    title: 'A clear path from question',
    accent: 'to result',
    lead: 'Define the problem. Configure the environment. Test the workflow. Review the results.',
    primary: REQUEST_POC,
    secondary: TALK,
    window: keySummary('Implementation Kick-off', [81, 76, 40], ['cutover', 'tenant'], 500),
    overlay: rollout(5, ['May 18', 'Next week', 'May 28'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'A practical PoC lets stakeholders compare expected outcomes with what happens in',
      'a controlled evaluation.',
    ),

    /** Index · How the PoC runs (49:69903): four step cards. */
    {
      type: 'index',
      variant: 'steps',
      title: 'How the PoC runs',
      lead: 'Four steps from defining success to reviewing results.',
      items: [{ title: 'Define' }, { title: 'Configure' }, { title: 'Test' }, { title: 'Review' }],
    },
  ],

  related: exploreEnterprise(RELATED),
};
