import { capture, keys } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { contractReview, po, procDecisions, supplierAtlas, taskList, vendor } from './shared';
import {
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  DEMO,
  exploreCompare,
  fitSplit,
  LOGOS,
  RELATED,
  statement,
  table,
  vs,
  whyChoose,
} from './compare';

/** 12.06 · Acumeet vs Otter (Figma 49:116782). */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs Otter'),

  /** 01 · Hero (695): upcoming meetings in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Otter alternative',
    title: 'Acumeet vs Otter: how your meeting knowledge is captured,',
    accent: 'controlled and used',
    lead: 'Otter combines meeting capture, searchable knowledge, AI Chat and enterprise controls. Acumeet is built around governed organisational knowledge, sensitive-data protection and accountable execution.',
    primary: DEMO,
    window: capture(
      'Thu, May 19',
      [
        ['Client Feedback Analysis Session', '10:30 AM · Meet'],
        ['Weekly ProcureCentro Stand-up', '11:00 AM · Teams'],
        ['Monthly Marketing Strategy Review', '3:30 PM · Zoom'],
      ],
      { width: 500 },
    ),
    overlay: taskList(5, po(['Jun 18', 'Next week', 'Jun 28']), { width: 360, shadow: 'float' }),
    overlayY: 342,
    height: 695,
  }),

  sections: [
    LOGOS,
    vs('otter'),
    statement(
      'The comparison has moved',
      'beyond transcription',
      'Otter positions itself as a conversational knowledge engine with summaries, decisions, action items, AI Chat and enterprise administration. Acumeet differentiates through its enterprise operating model: meeting intelligence, security, governance and customer control.',
    ),
    table('otter', 'Acumeet vs Otter', 'Otter', [
      [
        'Positioning',
        'Conversational knowledge and workflow automation around meetings.',
        'Enterprise meeting intelligence built to turn conversations into governed organisational knowledge.',
      ],
      [
        'Meeting outputs',
        'Summaries with decisions, action items and insights.',
        'Structured summaries, decisions, outcomes and action items tied to owner accountability.',
      ],
      [
        'Knowledge search',
        'AI Chat searches across meetings and connected apps.',
        'Atlas searches organisational meeting knowledge inside Acumeet.',
      ],
      [
        'Enterprise controls',
        'Publishes SAML SSO, SCIM, 2FA, retention and sharing restrictions for Enterprise workspaces.',
        'Role-based access, SSO and audit logs as core enterprise capabilities.',
      ],
      [
        'Sensitive data',
        'Provides enterprise privacy and sharing controls.',
        'Redaction AI identifies and protects personal, financial and confidential content in the record.',
      ],
    ]),
    fitSplit({
      reverse: true,
      title: 'Choose based on the enterprise outcome you need',
      bullet: 'Otter may suit',
      tint: 'pink',
      pattern: 'rings',
      visual: procDecisions(
        'May 28',
        ['Consolidate ERP sync alerts', 'Revisit the vendor approval cycle'],
        'Low supplier engagement on savings',
        ['Savings', 'Vendor onboarding', 'ERP integration', 'Supplier contracts'],
        440,
      ),
    }),
    fitSplit({
      title:
        'Organisations that want conversational knowledge, AI Chat, flexible capture and enterprise workspace controls.',
      bullet: 'Acumeet fits',
      tint: 'blue',
      pattern: 'dots',
      visual: taskList(4, vendor(['Next week', 'Jun 3', 'May 8']), { width: 440 }),
    }),
    statement(
      'Organisations that want meeting intelligence tied to governance, data control, Redaction AI',
      'and accountable follow-through.',
      null,
      'dark',
    ),
    COMPARE_TILES,
    whyChoose([
      keys(['Connected', 'Configure'], { width: 480 }),
      taskList(
        4,
        [
          ['Share feedback on the vendor approval cycle draft', 'Jun 7'],
          ['Begin ERP sync audit diagnostics', 'This week'],
          ['Identify top recurring items for PO automation pilot', 'Jun 9'],
        ],
        { width: 400 },
      ),
      contractReview(4),
      supplierAtlas,
    ]),
  ],

  related: exploreCompare(RELATED),
  cta: cta(
    'See how Acumeet fits your requirements',
    'Bring your security, data-control and workflow requirements to the demo.',
  ),
};
