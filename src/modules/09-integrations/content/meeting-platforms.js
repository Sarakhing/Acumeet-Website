import { capture, CRM_CONNECTED, integrations } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { approvalSearch, floatDecisions, meetingSummary } from './shared';
import { CONTACT, intBreadcrumb, intCta, splits } from './integrations';

const heroCapture = capture(
  'Fri, Jun 22',
  [
    ['Weekly ProcureCentro Stand-up', '9:00 AM · Teams'],
    ['Monthly Marketing Strategy Review', '2:00 PM · Zoom'],
    ['Product Development Sync-Up', '4:00 PM · Meet'],
  ],
  { width: 400, shadow: 'float' },
);

/** 09.02 · Meeting Platforms (Figma 48:384226). No related row in Figma. */
export default {
  breadcrumb: intBreadcrumb('Meeting platforms'),

  /** 01 · Hero (941): integrations (+6°) and decisions (−6°) tilted behind upcoming meetings. */
  ...centeredHero({
    eyebrow: 'Integrations  ·  Meeting platforms',
    title: 'Make meeting knowledge easier to capture',
    accent: 'and reuse.',
    lead: 'Acumeet supports meeting-intelligence workflows designed to turn conversations into summaries, decisions, and action items. Explore the meeting platforms and recording-upload pathway your organisation may use to bring meeting content into Acumeet.',
    primary: CONTACT('Discuss your meeting platforms requirements'),
    height: 941,
    copyHeight: 366,
    top: 532,
    gap: 70,
    items: [
      [230, 572, integrations(CRM_CONNECTED, 6, { width: 400 }), 6],
      [
        810,
        572,
        floatDecisions(
          'May 26',
          ['Revisit the vendor approval cycle', 'Pilot automated PO generation'],
          'Sync lag during peak transaction periods',
          ['Vendor onboarding', 'ERP integration', 'Supplier contracts', 'KPIs'],
        ),
        -6,
      ],
      [520, 532, heroCapture],
    ],
    compact: heroCapture,
  }),

  sections: splits([
    {
      eyebrow: 'Microsoft Teams meeting workflows',
      title: 'Carry the outcomes of Teams conversations beyond the call.',
      body: [
        'Explore how a supported Teams workflow can help teams organise meeting summaries, decisions, and next steps in Acumeet. Confirm tenant permissions, meeting types, and supported connection methods with the Acumeet team.',
        'Keep key meeting outcomes easier to find.',
        'Help teams maintain context after a discussion.',
        'Review setup and permission requirements before rollout.',
      ],
      cta: CONTACT('Ask about Microsoft Teams'),
      visual: meetingSummary('Weekly ProcureCentro Stand-up', [76, 86, 50], ['vendor', 'savings']),
    },
    {
      eyebrow: 'Zoom meeting workflows',
      title: 'Turn Zoom conversations into useful follow-through.',
      body: [
        'Connect supported Zoom meeting workflows with Acumeet to help organise the knowledge and actions that come out of a conversation. Available behaviour may depend on account configuration, meeting setup, and permissions.',
        'Make meeting outcomes easier to revisit.',
        'Help teams identify decisions and next steps.',
        'Confirm supported meeting scenarios before deployment.',
      ],
      cta: CONTACT('Ask about Zoom'),
      visual: capture(
        'Mon, May 23',
        [
          ['Product Development Sync-Up', '2:00 PM · Meet'],
          ['Client Feedback Analysis Session', '4:00 PM · Teams'],
          ['Weekly ProcureCentro Stand-up', '9:00 AM · Zoom'],
        ],
        { width: 440 },
      ),
    },
    {
      eyebrow: 'Google Meet meeting workflows',
      title: 'Keep the value of a Google Meet conversation after the call.',
      body: [
        'Explore how Google Meet workflows could feed the meeting knowledge your team needs to retrieve, review, and act on. The exact connection method and supported meeting scenarios should be confirmed with Acumeet.',
        'Reduce reliance on scattered notes.',
        'Make decisions and actions easier to review.',
        'Plan access and permission requirements up front.',
      ],
      cta: CONTACT('Ask about Google Meet'),
      visual: approvalSearch([
        ['Weekly ProcureCentro Stand-up', 'Jun 24'],
        ['Monthly Marketing Strategy Review', 'Apr 7'],
        ['Product Development Sync-Up', 'May 16'],
      ]),
    },
    {
      eyebrow: 'Cisco Webex meeting workflows',
      title: 'Bring Webex meeting outcomes into your knowledge workflow.',
      body: [
        'For organisations using Cisco Webex, assess the supported path for making meeting content and outcomes available in Acumeet. Our team can help map the intended workflow and technical prerequisites.',
        'Support a consistent meeting follow-up process.',
        'Keep important context available to authorised teams.',
        'Assess technical and governance requirements.',
      ],
      cta: CONTACT('Discuss Webex integration'),
      visual: meetingSummary('Product Development Sync-Up', [57, 70, 32], ['audit', 'vendor']),
    },
    {
      eyebrow: 'Meeting recording uploads',
      title: 'Turn recorded conversations into searchable meeting knowledge.',
      body: [
        'Where supported, upload audio or video recordings so meeting content can be processed into useful knowledge.',
        'Work with recordings from supported sources.',
        'Create a consistent route for processing meeting content.',
        'Keep upload and retention requirements clear.',
      ],
      cta: CONTACT('Ask about recording uploads'),
      visual: approvalSearch([
        ['Product Development Sync-Up', 'Apr 3'],
        ['Client Feedback Analysis Session', 'May 12'],
        ['Weekly ProcureCentro Stand-up', 'Jun 21'],
      ]),
    },
  ]),

  cta: intCta('Make meeting knowledge easier to capture and reuse.'),
};
