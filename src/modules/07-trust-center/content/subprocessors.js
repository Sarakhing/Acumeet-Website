import { access, actions, audit, decisions, keys } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { supplierAtlas } from './shared';
import {
  cards,
  exploreTrust,
  explorer,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
  VISIT_TRUST,
} from './trust-center';

const heroActions = actions(
  5,
  [
    ['Update the cookie notice wording', 'Fri'],
    ['Review the acceptable use clause', 'Jun 23'],
    ['Share the signed DPA with Security', 'May 28'],
  ],
  { width: 400, shadow: 'float' },
);

/* Figma leaves the provider details as placeholders. */
const TO_CONFIRM = '[Provider, purpose and location to confirm]';

/** 07.07 · Subprocessors (Figma 48:337849). */
export default {
  breadcrumb: tcBreadcrumb('Subprocessors'),

  /** 01 · Hero (819 tall): access (+6°) and decisions (−6°) tilted behind action items. */
  ...centeredHero({
    eyebrow: 'Trust Center  ·  Subprocessors',
    title: 'Know who helps deliver',
    accent: 'the service',
    lead: 'Acumeet uses reviewed third-party providers for cloud hosting, AI processing and monitoring.',
    primary: REQUEST('Request the subprocessor list'),
    secondary: VISIT_TRUST,
    height: 819,
    copyHeight: 252,
    top: 392,
    gap: 44,
    items: [
      [
        230,
        456,
        access(
          [
            ['Faith Oluwale', 'Owner'],
            ['George Nwokoro', 'Admin'],
            ['Ruth Godwin', 'Viewer'],
            ['Warith Abraham', 'Viewer'],
          ],
          { width: 400, shadow: 'float' },
        ),
        6,
      ],
      [
        807,
        456,
        decisions(
          'May 28',
          ['Accept the standard DPA with two changes', 'Publish the updated privacy notice'],
          'Unsigned DPA blocking rollout',
          ['Privacy notice', 'Cookies', 'Liability', 'Breach notice'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 392, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Providers are assessed before use and their access is controlled. This page lists who they are, what they do and where',
      'they process data.',
    ),

    /** Tabs explorer + "Explorer · Subprocessor categories" (48:340654). */
    explorer(
      {
        title: 'Subprocessor',
        accent: 'categories',
        lead: 'Provider names and locations to be supplied by Snapnet.',
      },
      [
        ['Cloud hosting', TO_CONFIRM, keys(['Configure', 'Configure'])],
        ['AI processing', TO_CONFIRM, supplierAtlas],
        [
          'Monitoring',
          TO_CONFIRM,
          audit(
            [
              ['09:41', 'Exported summary', 'George Nwokoro'],
              ['09:35', 'Updated retention policy', 'Admin'],
              ['09:22', 'Viewed transcript', 'Ruth Godwin'],
              ['09:02', 'Shared meeting record', 'Warith Abraham'],
            ],
            { width: 360 },
          ),
        ],
      ],
    ),

    /** Benefits — three cards. */
    cards({ title: 'How we manage', accent: 'subprocessors' }, [
      ['Assessment', 'Providers are assessed before use.'],
      ['Access control', 'Their access to customer data is controlled.'],
      ['Change notice', '[Notification approach for new subprocessors to confirm.]'],
    ]),
  ],

  related: exploreTrust(['certifications', 'overview', 'privacy', 'dataProcessing']),

  cta: tcCta('Need the full subprocessor list?', 'Request it as part of your security review.'),
};
