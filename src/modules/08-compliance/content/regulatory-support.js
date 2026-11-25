import { access, actions, audit, search } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { floatActions, floatDecisions, members, tasks } from './shared';
import {
  compBreadcrumb,
  compCta,
  CONTACT,
  exploreCompliance,
  explorer,
  statement,
} from './compliance';

const TALK = CONTACT('Talk to our enterprise team');
const REQUEST = CONTACT('Request documentation');
const heroActions = floatActions(4, tasks(['Fri', 'Jun 17', 'May 22']));

/** 08.10 · Regulatory Support (Figma 48:369307). */
export default {
  breadcrumb: compBreadcrumb('Regulatory Support'),

  /** 01 · Hero (858): audit log (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Compliance  ·  Regulatory Support',
    title: 'Bring compliance and procurement',
    accent: 'in early',
    lead: 'Our team supports security reviews, procurement risk assessments and regulatory information requests.',
    primary: TALK,
    secondary: REQUEST,
    height: 858,
    copyHeight: 316,
    top: 456,
    gap: 44,
    items: [
      [
        230,
        520,
        audit(
          [
            ['10:39', 'Updated retention policy', 'Admin'],
            ['10:18', 'Viewed transcript', 'Ruth Godwin'],
            ['10:07', 'Shared meeting record', 'Warith Abraham'],
            ['09:49', 'Changed role to Admin', 'Admin'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        520,
        floatDecisions(
          'Jun 6',
          ['Move policy reviews to quarterly', 'Add consent checks to new onboarding'],
          'Late regulatory return submissions',
          ['Monitoring', 'Queries', 'Regulatory returns', 'Policies'],
        ),
        -6,
      ],
      [520, 456, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Regulated rollouts move faster when risk, legal and procurement are involved from the start. We work with',
      'those teams directly.',
    ),

    /** Tabs explorer + "Explorer · How we support your review" (48:346784). */
    explorer({ title: 'How we support your', accent: 'review' }, [
      [
        'Security review assistance',
        'We answer questionnaires and walk your team through our controls.',
        access(members, { width: 380 }),
      ],
      [
        'Procurement risk assessment',
        'We support vendor risk and procurement assessments.',
        actions(
          5,
          [
            ['Update the data protection policy draft', 'Next week'],
            ['Confirm training completion for new staff', 'Jun 14'],
            ['Review open regulator queries', 'Jun 7'],
          ],
          { width: 480 },
        ),
      ],
      [
        'Regulatory information requests',
        'We help you respond when a regulator asks about meeting data.',
        search(
          'regulator query response',
          [
            [
              'Regulatory Reporting Review',
              'Apr 22',
              '…owners assigned to open regulator queries.',
            ],
            ['Policy Review Meeting', 'May 5', '…policy draft circulated for sign-off.'],
            [
              'Compliance Monitoring Update',
              'Jun 14',
              '…training completion reviewed for new staff.',
            ],
          ],
          { width: 460 },
        ),
      ],
    ]),
  ],

  related: exploreCompliance(['cbn', 'financialServices', 'auditReadiness']),

  cta: compCta(
    'Bring your reviewers in early',
    'Talk to our enterprise team about your review process.',
    TALK,
    REQUEST,
  ),
};
