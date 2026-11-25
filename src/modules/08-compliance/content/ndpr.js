import { actions, redaction, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { INSIGHTS, NIN_SENTENCE, tasks } from './shared';
import {
  compBreadcrumb,
  CONTACT,
  DEFAULT_CTA,
  exploreCompliance,
  panel,
  RELATED,
  REQUEST_DOCS,
  split,
  VISIT_TRUST,
} from './compliance';

/** 08.02 · NDPR (Figma 48:369834). */
export default {
  breadcrumb: compBreadcrumb('NDPR'),

  /** 01 · Hero (680): summary in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Compliance  ·  NDPR',
    title: 'NDPR compliance and Nigerian',
    accent: 'data protection.',
    lead: 'Acumeet is NDPR compliant. The Nigeria Data Protection Regulation is part of the Nigerian data-protection landscape. Organisations evaluating Acumeet should be able to understand the relevant privacy practices and responsibilities that apply to their use of the platform.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    window: summary('Compliance Committee', [51, 76, 50], INSIGHTS, { width: 500 }),
    overlay: actions(5, tasks(['May 27', 'Jun 5', 'Today']), { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    split({
      reverse: true,
      title: 'NDPR compliance and Nigerian data protection.',
      body: [
        'Our privacy information and relevant contractual documentation provide a starting point for discussions about personal data, customer responsibilities and data handling in the context of Acumeet.',
      ],
      bullet: [
        'For Nigerian organisations —',
        'Contact our team for information relevant to your organisation’s data-protection review and procurement process.',
      ],
      cta: CONTACT('Discuss NDPR Requirements'),
      visual: panel(
        'pink',
        'rings',
        redaction(3, NIN_SENTENCE, [
          ['NIN', '100%'],
          ['Phone number', '95%'],
        ]),
      ),
    }),
  ],

  related: exploreCompliance(RELATED),
  cta: DEFAULT_CTA,
};
