import { retention } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { floatActions, floatDecisions, GOVERNANCE_CARDS, tasks } from './shared';
import {
  compBreadcrumb,
  DEFAULT_CTA,
  exploreCompliance,
  infoCards,
  REQUEST_DOCS,
  VISIT_TRUST,
} from './compliance';

const heroActions = floatActions(4, tasks(['Fri', 'Jun 8', 'Today']));

/** 08.08 · Data Governance (Figma 48:370412). */
export default {
  breadcrumb: compBreadcrumb('Data governance'),

  /** 01 · Hero (975): retention policy (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Compliance  ·  Privacy and data governance',
    title: 'Responsible handling of meeting',
    accent: 'information.',
    lead: 'Meeting intelligence is useful only when organisations can understand and govern the information behind it. Acumeet helps turn meeting activity into structured knowledge, so privacy and data governance need to be considered across capture, processing, access, retention and deletion.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    height: 975,
    copyHeight: 368,
    top: 508,
    gap: 44,
    items: [
      [
        230,
        572,
        retention(
          [
            ['Recordings', '1 year'],
            ['Transcripts', '3 years'],
            ['Summaries', '5 years'],
            ['Audit logs', '10 years'],
          ],
          { status: 'Security', width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        572,
        floatDecisions(
          'Jun 9',
          ['Approve the updated data protection policy', 'Assign owners to open regulator queries'],
          'Late regulatory return submissions',
          ['Monitoring', 'Queries', 'Regulatory returns', 'Policies'],
        ),
        -6,
      ],
      [520, 508, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** 02 · Responsible handling of meeting information — 2 × 2 cards. */
    infoCards(
      {
        title: 'Responsible handling of meeting information.',
        columns: 2,
        cta: { label: 'Explore privacy & data protection', to: ROUTES.trustPage.privacy },
      },
      GOVERNANCE_CARDS,
    ),
  ],

  related: exploreCompliance(['auditReadiness', 'regulatorySupport', 'overview', 'ndpr']),
  cta: DEFAULT_CTA,
};
