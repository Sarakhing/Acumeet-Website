import { audit, decisions } from '@/components/visuals/mocks';
import { exploreResources, pricingSearch, resBreadcrumb, resCta } from './resources';

const TITLE = 'Explore the blog by topic';

/** 13.03 · Blog Categories (Figma 49:138636). */
export default {
  breadcrumb: resBreadcrumb('Blog categories', { blog: true }),

  /** 01 · Hero + "Hero carousel · 13.03 · Blog Categories" (49:80294): chip and title only. */
  hero: { variant: 'rings', eyebrow: 'Blog categories', title: TITLE },
  carousel: [
    {
      label: 'Search',
      content: pricingSearch(
        [
          ['Policy Handover', 'May 15'],
          ['Programme Retrospective', 'Jun 24'],
          ['Knowledge Sharing Session', 'Apr 7'],
        ],
        560,
      ),
    },
    {
      label: 'Audit log',
      content: audit(
        [
          ['09:49', 'Exported summary', 'George Nwokoro'],
          ['09:34', 'Updated retention policy', 'Admin'],
          ['09:12', 'Viewed transcript', 'Ruth Godwin'],
          ['09:00', 'Shared meeting record', 'Warith Abraham'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'Jun 9',
        ['Tag all committee meetings by topic', 'Keep retrospectives in one folder'],
        'Knowledge lost when owners change roles',
        ['Decisions', 'Lessons learned', 'Policies', 'Onboarding'],
        560,
      ),
    },
  ],

  sections: [
    /** Index · topics (49:138661). */
    {
      type: 'index',
      items: [
        ['Inside Acumeet', 'What is new and how to get more from Acumeet. Explore product'],
        [
          'Enterprise AI, without the noise',
          'Practical thinking on responsible AI and business conversations. Explore AI',
        ],
        [
          'Meetings are data. Make them useful.',
          'Capture decisions, actions and context and turn them into searchable knowledge. Explore meeting intelligence',
        ],
        [
          'Sensitive meetings deserve more than a password',
          'Meeting security, data protection, access control and data residency. Explore security',
        ],
        [
          'From meeting record to audit-ready context',
          'Governance, auditability and reliable records of decisions. Explore compliance',
        ],
        [
          'Where meetings meet enterprise architecture',
          'Integrations, data controls and deployment behind meeting intelligence. Explore enterprise technology',
        ],
        [
          'Meeting intelligence in your industry',
          'Challenges and use cases across financial services and regulated organisations. Explore industry insights',
        ],
      ].map(([title, body]) => ({ title, body })),
    },
  ],

  related: exploreResources(['overview', 'blog']),
  cta: resCta(TITLE),
};
