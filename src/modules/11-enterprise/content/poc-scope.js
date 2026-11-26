import { decisions } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, rollout } from './shared';
import {
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  REQUEST_POC,
  statement,
} from './enterprise';

const heroActions = rollout(4, ['Fri', 'May 17', 'Jun 22'], { width: 400, shadow: 'float' });

/** 11.17 · PoC Scope (Figma 49:69969). */
export default {
  breadcrumb: entBreadcrumb('PoC Scope', { poc: true }),

  /** 01 · Hero (771): decisions (tilted 3°) behind action items. */
  ...entPage('pocScope', {
    hero: 'centered',
    tabKey: 'poc',
    eyebrow: 'PoC Scope',
    title: 'Focus the PoC on',
    accent: 'what matters',
    lead: 'Focus on the meetings, users, controls and workflows most relevant to your buying decision.',
    primary: REQUEST_POC,
    secondary: link('Explore the platform', ROUTES.products),
    height: 771,
    copyHeight: 250,
    top: 392,
    gap: 46,
    items: [
      [
        758,
        456,
        decisions(
          'May 26',
          ['Go live after the pilot group', 'Deploy in the customer Azure tenant'],
          'Cutover clashes with month-end',
          ['Storage', 'Keys', 'Failover', 'Cutover'],
          400,
          { shadow: 'float' },
        ),
        -3,
      ],
      [300, 392, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'A focused scope can include capture, transcription and summaries, decision and action tracking, search, redaction, access controls and selected integration',
      'or deployment needs.',
    ),

    /** Index · What the PoC can cover (49:70057). */
    {
      type: 'index',
      title: 'What the PoC can cover',
      lead: 'Choose the capabilities to test against your real workflows.',
      items: [
        { title: 'Meeting capture', icon: 'video-camera', to: ROUTES.product.meetingCapture },
        { title: 'Transcription and summaries', icon: 'file-text' },
        { title: 'Decisions and actions', icon: 'list-checks' },
        { title: 'Search', icon: 'magnifying-glass' },
        { title: 'Redaction', icon: 'eye-slash' },
        { title: 'Access controls', icon: 'lock-key' },
        { title: 'Selected integrations', icon: 'plugs-connected' },
      ],
    },
  ],

  related: exploreEnterprise(RELATED),
};
