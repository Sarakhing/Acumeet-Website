import { access } from '@/components/visuals/mocks';
import { members, ninReview, po, procDecisions, supplierAtlas, taskList } from './shared';
import {
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  darkHero,
  exploreCompare,
  fitSplit,
  LOGOS,
  RELATED,
  statement,
  table,
  vs,
  whyChoose,
} from './compare';

/** 12.05 · Acumeet vs Fireflies (Figma 49:116516). */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs Fireflies'),

  ...darkHero({
    height: 590,
    eyebrow: 'Fireflies alternative',
    title: 'Acumeet vs Fireflies: compare more than meeting notes',
    lead: 'Fireflies offers AI meeting capture, summaries, search and enterprise administration. Acumeet is built around secure, governed organisational knowledge that connects conversations to decisions, actions and sensitive-data protection.',
  }),

  sections: [
    LOGOS,
    vs('fireflies'),
    statement(
      'Both go beyond basic transcription. The difference is what you need the',
      'record to become.',
      'Fireflies markets transcription, summaries, cross-meeting search, analytics and enterprise controls. Acumeet starts from a different question: how do we turn meetings into governed, actionable organisational knowledge?',
    ),
    table('fireflies', 'Acumeet vs Fireflies', 'Fireflies', [
      [
        'Positioning',
        'AI assistant for meetings, with transcription, summaries, search, analytics and broader AI help.',
        'Enterprise meeting intelligence focused on knowledge, accountability, security and governance.',
      ],
      [
        'Knowledge search',
        'AskFred searches past meetings for decisions, action items and trends.',
        'Atlas queries your meeting knowledge as a searchable organisational repository.',
      ],
      [
        'Action follow-through',
        'Generates action items and surfaces them across meetings.',
        'Commitments, owner assignment and status tracking.',
      ],
      [
        'Enterprise controls',
        'Publishes SSO, SCIM, Rules Engine, Super Admin and retention controls.',
        'Role-based access, SSO and audit logs on the appropriate plans.',
      ],
      [
        'Data control',
        'Offers Private Storage and BYOS on supported cloud storage.',
        'Customer-controlled storage and keys, and data residency options, on eligible enterprise plans.',
      ],
      [
        'Sensitive information',
        'Publishes privacy, storage, retention and security controls.',
        'Redaction AI identifies and protects personal, financial and confidential information in meeting records.',
      ],
    ]),
    fitSplit({
      reverse: true,
      title: 'Which approach fits your enterprise?',
      bullet: 'Fireflies may suit',
      tint: 'pink',
      pattern: 'rings',
      visual: procDecisions(
        'May 26',
        ['Move supplier reviews to monthly', 'Consolidate ERP sync alerts'],
        'Sync lag during peak transaction periods',
        ['Vendor onboarding', 'ERP integration', 'Supplier contracts', 'KPIs'],
        440,
      ),
    }),
    fitSplit({
      title:
        'Teams that want a broad AI assistant across meetings, search, analytics and connected workflows.',
      bullet: 'Acumeet fits',
      tint: 'blue',
      pattern: 'dots',
      visual: taskList(3, po(['May 24', 'Jun 2', 'Today']), { width: 440 }),
    }),
    statement(
      'Organisations that want meeting intelligence tied to governance, sensitive-data protection, customer-controlled data',
      'and accountable actions.',
      null,
      'dark',
    ),
    COMPARE_TILES,
    whyChoose([
      access(members, { width: 380 }),
      procDecisions(
        'May 28',
        ['Pilot automated PO generation', 'Move supplier reviews to monthly'],
        'Low supplier engagement on savings',
        ['Savings', 'Vendor onboarding', 'ERP integration', 'Supplier contracts'],
      ),
      ninReview(4, '90%', 480),
      supplierAtlas,
    ]),
  ],

  related: exploreCompare(RELATED),
  cta: cta(
    'Compare Acumeet against your requirements',
    'We will walk through the controls and workflows that matter to your team.',
  ),
};
