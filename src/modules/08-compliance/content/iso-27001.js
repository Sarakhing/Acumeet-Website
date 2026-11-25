import { audit } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { floatActions, floatDecisions, tasks } from './shared';
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

const heroActions = floatActions(4, tasks(['Jun 21', 'Next week', 'Jun 4']));

/** 08.03 · ISO 27001 (Figma 48:369992). */
export default {
  breadcrumb: compBreadcrumb('ISO 27001'),

  /** 01 · Hero (846): audit log (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Compliance  ·  ISO 27001',
    title: 'ISO 27001',
    accent: 'certified.',
    lead: 'Acumeet is ISO 27001 certified. ISO/IEC 27001 is an international standard for information security management systems. It provides a structured framework for managing information security risks and continually improving information security management.',
    primary: REQUEST_DOCS,
    secondary: VISIT_TRUST,
    height: 846,
    copyHeight: 304,
    top: 444,
    gap: 44,
    items: [
      [
        230,
        508,
        audit(
          [
            ['10:20', 'Signed in via SSO', 'Ruth Godwin'],
            ['10:07', 'Applied legal hold', 'Admin'],
            ['09:47', 'Edited action item', 'George Nwokoro'],
            ['09:37', 'Approved redactions', 'Faith Oluwale'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        508,
        floatDecisions(
          'May 26',
          ['Assign owners to open regulator queries', 'Move policy reviews to quarterly'],
          'Incomplete staff training records',
          ['Policies', 'Training', 'Consent', 'Monitoring'],
        ),
        -6,
      ],
      [520, 444, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    split({
      reverse: true,
      title: 'ISO 27001 certified.',
      body: [
        'For customers, the certification is one part of understanding how Acumeet approaches information security governance and risk management.',
      ],
      bullet: [
        'For your review —',
        'Contact Acumeet for the current certificate and information about the applicable certification scope.',
      ],
      cta: CONTACT('Request ISO 27001 Documentation'),
      visual: panel(
        'pink',
        'rings',
        audit(
          [
            ['11:36', 'Edited action item', 'George Nwokoro'],
            ['11:22', 'Approved redactions', 'Faith Oluwale'],
            ['11:01', 'Exported summary', 'George Nwokoro'],
            ['10:50', 'Updated retention policy', 'Admin'],
          ],
          { width: 440 },
        ),
      ),
    }),
  ],

  related: exploreCompliance(RELATED),
  cta: DEFAULT_CTA,
};
