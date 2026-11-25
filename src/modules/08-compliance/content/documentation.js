import { audit, documents, search } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { DOCUMENT_CARDS } from './shared';
import {
  compBreadcrumb,
  DEFAULT_CTA,
  exploreCompliance,
  infoCards,
  REQUEST_DOCS,
  VISIT_TRUST,
} from './compliance';

/** 08.11 · Compliance Documentation (Figma 48:370556). */
export default {
  breadcrumb: compBreadcrumb('Compliance Documentation'),

  /** 01 · Hero + "Hero carousel · 08.11 · Compliance Documentation" (48:347000). */
  ...ringsHero({
    eyebrow: 'Compliance  ·  Compliance Documentation',
    title: 'Find the information relevant to your assessment.',
    lead: 'Use the resources below to begin your compliance review. If a document is not publicly available, request it from our team.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    slides: [
      [
        'Search',
        search(
          'regulator query response',
          [
            ['Regulatory Reporting Review', 'Jun 5', '…owners assigned to open regulator queries.'],
            ['Policy Review Meeting', 'Apr 14', '…policy draft circulated for sign-off.'],
            [
              'Compliance Monitoring Update',
              'May 23',
              '…training completion reviewed for new staff.',
            ],
          ],
          { width: 560 },
        ),
      ],
      [
        'Audit log',
        audit(
          [
            ['09:40', 'Viewed transcript', 'Ruth Godwin'],
            ['09:22', 'Shared meeting record', 'Warith Abraham'],
            ['09:14', 'Changed role to Admin', 'Admin'],
            ['08:59', 'Downloaded recording', 'Fredelina Augustus'],
          ],
          { width: 560 },
        ),
      ],
      [
        'Documents',
        documents(
          [
            ['Privacy Policy', 'public'],
            ['Data Processing Agreement', 'public'],
            ['Security architecture overview', 'request'],
            ['Incident response policy', 'request'],
          ],
          { width: 372 },
        ), // Figma 350 — its "On request" chip overflows the third row
      ],
    ],
  }),

  sections: [
    /** 02 · Find the information relevant to your assessment — eight cards, 3-up. */
    infoCards({ title: 'Find the information relevant to your assessment.' }, DOCUMENT_CARDS),
  ],

  related: exploreCompliance(['overview', 'ndpr', 'iso27001', 'soc2']),
  cta: DEFAULT_CTA,
};
