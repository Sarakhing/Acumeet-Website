import { access } from '@/components/visuals/mocks';
import { contractReview, members, procDecisions, supplierAtlas } from './shared';
import {
  checklist,
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  darkHero,
  LOGOS,
  statement,
  table,
  vs,
  whyChoose,
} from './compare';

/** 12.02 · Acumeet vs AI Meeting Assistants (Figma 49:115909). No related row in Figma. */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs AI Meeting Assistants'),

  ...darkHero({
    height: 548,
    eyebrow: 'Comparison',
    title: 'When notes are not enough, you need meeting intelligence',
    lead: 'AI meeting assistants make note-taking faster. Acumeet also preserves decisions, protects sensitive information and tracks accountability.',
  }),

  sections: [
    LOGOS,
    vs('aiAssistants'),
    statement(
      'The question is no longer whether AI',
      'can take notes',
      'It is whether your organisation can control, search and act on what your meetings create.',
    ),
    table('aiAssistants', 'Acumeet vs typical AI assistants', 'Typical AI assistants', [
      [
        'Primary job',
        'Reduce note-taking and help you review calls.',
        'Turn meetings into structured records that connect decisions, actions and knowledge.',
      ],
      [
        'Meeting output',
        'Transcripts, summaries and highlights.',
        'Transcripts and summaries plus decisions, action owners and searchable knowledge.',
      ],
      ['Knowledge', 'History and search vary.', 'A searchable repository, queried through Atlas.'],
      [
        'Security and governance',
        'Depends on the vendor and plan.',
        'Redaction AI, role-based access, SSO and audit logs, with customer-controlled storage and keys on eligible plans.',
      ],
      ['Accountability', 'May suggest tasks.', 'Actions with owners, status and follow-through.'],
    ]),
    checklist(
      'Five questions to ask before',
      'you choose',
      'Use these questions to compare meeting tools on control and security.',
      [
        [
          'Can we control where sensitive meeting data is stored and how it is encrypted?',
          'video-camera',
          'amber',
        ],
        [
          'Can we restrict access and keep an auditable record of platform activity?',
          'user-check',
          'teal',
        ],
        [
          'Can we protect sensitive information inside meeting records, not just record it?',
          'shield-check',
          'magenta',
        ],
        ['Can decisions and actions be traced after the call ends?', 'seal-check', 'blue'],
        [
          'Can our teams search across meeting history and reuse that knowledge?',
          'video-camera',
          'purple',
        ],
      ],
      'questions',
    ),
    COMPARE_TILES,
    whyChoose([
      access(members, { width: 380 }),
      procDecisions(
        'May 28',
        ['Move supplier reviews to monthly', 'Consolidate ERP sync alerts'],
        'Sync lag during peak transaction periods',
        ['PO automation', 'Savings', 'Vendor onboarding', 'ERP integration'],
      ),
      contractReview(4),
      supplierAtlas,
    ]),
  ],

  cta: cta(
    'Move beyond AI notes',
    'Bring your security and workflow requirements and we will show how Acumeet supports them.',
  ),
};
