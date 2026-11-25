import { actions, redaction, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { INSIGHTS, NIN_SENTENCE, tasks } from './shared';
import {
  compBreadcrumb,
  CONTACT,
  DEFAULT_CTA,
  exploreCompliance,
  panel,
  PRIVACY_NOTICE,
  RELATED,
  REQUEST_DOCS,
  split,
  VISIT_TRUST,
} from './compliance';

/** 08.05 · GDPR (Figma 48:370251). */
export default {
  breadcrumb: compBreadcrumb('GDPR'),

  /** 01 · Hero (680): summary in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Compliance  ·  GDPR',
    title: 'GDPR compliance and personal',
    accent: 'data protection.',
    lead: 'Acumeet is GDPR compliant. The General Data Protection Regulation establishes requirements for the processing of personal data within its scope. Because meetings may include names, voices, opinions, business discussions and other personal information, organisations need clear information about how that data is processed.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    window: summary('Compliance Monitoring Update', [66, 91, 55], INSIGHTS, { width: 500 }),
    overlay: actions(5, tasks(['Fri', 'May 14', 'Jun 19']), { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    split({
      reverse: true,
      title: 'GDPR compliance and personal data protection.',
      body: [
        'Acumeet’s privacy information and applicable contractual terms are the starting points for understanding data-processing purposes, roles and responsibilities, retention, deletion and related privacy matters.',
      ],
      bullet: [
        'What customers should be able to understand —',
        'What categories of data are processed; why data is processed; the roles and responsibilities of the parties; applicable retention and deletion arrangements; and how privacy enquiries are handled.',
      ],
      cta: PRIVACY_NOTICE,
      secondary: CONTACT('Discuss Data Protection Requirements'),
      visual: panel(
        'pink',
        'rings',
        redaction(6, NIN_SENTENCE, [
          ['NIN', '100%'],
          ['Phone number', '90%'],
        ]),
      ),
    }),
  ],

  related: exploreCompliance(RELATED),
  cta: DEFAULT_CTA,
};
