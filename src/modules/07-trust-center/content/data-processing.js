import { access, actions, keys, summary } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { members, supplierAtlas } from './shared';
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

/** 07.05 · Data Processing (Figma 48:337726). */
export default {
  breadcrumb: tcBreadcrumb('Data processing'),

  /** 01 · Hero (680 tall): summary in the window, action items overlapping. */
  ...windowHero({
    eyebrow: 'Trust Center  ·  Data processing',
    title: 'How meeting data is',
    accent: 'processed',
    lead: 'What happens to meeting data from the moment it is captured to the moment it is deleted.',
    primary: REQUEST('Request the DPA'),
    secondary: VISIT_TRUST,
    window: summary(
      'Policy Sign-off',
      [61, 71, 55],
      [
        'Legal accepted the standard DPA with two changes.',
        'Procurement will confirm the subprocessor list.',
      ],
      { width: 500 },
    ),
    overlay: actions(
      3,
      [
        ['Update the cookie notice wording', 'Jun 24'],
        ['Review the acceptable use clause', 'Next week'],
        ['Share the signed DPA with Security', 'Jun 7'],
      ],
      { width: 360, shadow: 'float' },
    ),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    statement(
      'Processing is limited to one purpose: creating your meeting intelligence. Each stage has clear controls, and the agreed processing terms are set out in our',
      'Data Processing Agreement.',
    ),

    /** Tabs explorer + "Explorer · Processing principles" (48:339883). */
    explorer({ title: 'Processing', accent: 'principles' }, [
      [
        'Purpose limitation',
        'Meeting data is used only to generate your meeting intelligence.',
        summary(
          'Contract Review Meeting',
          [45, 67, 53],
          [
            'The privacy notice update will be published.',
            'Legal accepted the standard DPA with two changes.',
          ],
          { width: 480 },
        ),
      ],
      [
        'Inference only',
        'Your meeting data is not used to train public or shared AI models.',
        supplierAtlas,
      ],
      [
        'Tenant isolation',
        'Meeting data is logically separated by organisation.',
        access(members, { width: 380 }),
      ],
      [
        'Reviewed providers',
        'Third-party providers for hosting, AI processing and monitoring are assessed before use.',
        keys(['Configure', 'Configure']),
      ],
    ]),

    /** Benefits — six cards. */
    cards({ title: 'The processing', accent: 'lifecycle' }, [
      ['Collect', 'Only meetings where Acumeet is invited.'],
      ['Process', 'AI turns meeting content into summaries, decisions and actions.'],
      ['Store', 'Data sits within your configured environment and tenant controls.'],
      ['Retain', 'Set retention periods to match your policy.'],
      ['Delete', 'Authorised users and administrators can delete meeting data.'],
      ['End of contract', 'Offboarding includes secure deletion of customer data.'],
    ]),
  ],

  related: exploreTrust(['certifications', 'overview', 'privacy']),

  cta: tcCta(
    'Review our processing terms',
    'Request our Data Processing Agreement.',
    'Request the DPA',
  ),
};
