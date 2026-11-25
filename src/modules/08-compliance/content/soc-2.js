import { access, audit, keys } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { members } from './shared';
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

/** 08.04 · SOC 2 (Figma 48:370159). */
export default {
  breadcrumb: compBreadcrumb('SOC 2'),

  /** 01 · Hero + "Hero carousel · 08.04 · SOC 2" (48:345383). */
  ...ringsHero({
    eyebrow: 'Compliance  ·  SOC 2',
    title: 'SOC 2 certified.',
    lead: 'Acumeet is SOC 2 certified. SOC 2 is an assurance framework used to evaluate controls relevant to areas such as security, availability, processing integrity, confidentiality and privacy, depending on the scope of the examination.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    slides: [
      [
        'Audit log',
        audit(
          [
            ['10:08', 'Updated retention policy', 'Admin'],
            ['09:52', 'Viewed transcript', 'Ruth Godwin'],
            ['09:46', 'Shared meeting record', 'Warith Abraham'],
            ['09:33', 'Changed role to Admin', 'Admin'],
          ],
          { width: 560 },
        ),
      ],
      ['Access', access(members, { width: 380 })],
      ['Keys', keys(['Configure', 'Configure'])],
    ],
  }),

  sections: [
    split({
      reverse: true,
      title: 'SOC 2 certified.',
      body: [
        'For enterprise customers, SOC 2 documentation can support vendor-risk assessments by providing information about the controls covered by the applicable assurance engagement.',
      ],
      bullet: [
        'For your review —',
        'Contact Acumeet to request available SOC 2 supporting documentation and information about the scope and period covered.',
      ],
      cta: CONTACT('Request SOC 2 Documentation'),
      visual: panel('pink', 'rings', access(members, { width: 380 })),
    }),
  ],

  related: exploreCompliance(RELATED),
  cta: DEFAULT_CTA,
};
