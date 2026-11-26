import { actions, analytics } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { po } from './shared';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

/** 09.07 · Analytics (Figma 48:385427). */
export default {
  breadcrumb: intBreadcrumb('Analytics'),

  /** 01 · Hero (660): meeting analytics in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Integrations  ·  Analytics',
    title: 'Make meeting-derived information more useful',
    accent: 'for reporting.',
    lead: 'Organisations may want to analyse meeting activity and outcomes alongside broader operational reporting. Explore the intended Power BI workflow and confirm which data, export paths, and governance controls are available.',
    primary: CONTACT('Discuss your analytics requirements'),
    window: analytics('This quarter', [83, 45, 43], { width: 500 }),
    overlay: actions(4, po(['Fri', 'May 8', 'Jun 13']), { width: 360, shadow: 'float' }),
    overlayY: 307,
    height: 660,
  }),

  sections: splits([
    {
      eyebrow: 'Business intelligence',
      title: 'Explore meeting insights in your reporting environment.',
      body: [
        'Power BI can help teams build reports from data made available through supported sources. Work with Acumeet to confirm whether meeting-derived data can be accessed through an existing connector, API, or export process, and which fields are appropriate for reporting.',
        'Define the questions your reports should answer.',
        'Confirm available data fields and refresh patterns.',
        'Apply access, privacy, and governance requirements.',
      ],
      cta: CONTACT('Discuss Power BI reporting'),
      visual: analytics('This month', [83, 55, 43], { width: 350 }),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Make meeting-derived information more useful for reporting.'),
};
