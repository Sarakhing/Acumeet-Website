import { windowHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { DEMO, knowTasks, link, pricingSearch, RESOURCES, statement } from './resources';

const R = ROUTES.resourcesPage;
const DIRECTORY = [
  'blog',
  'caseStudies',
  'whitepapers',
  'guides',
  'reports',
  'webinars',
  'productUpdates',
  'customerStories',
  'calculator',
  'documentation',
];

/** 13.01 · Resources Overview (Figma 49:138234). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Resources Overview' }],

  /** 01 · Hero (736): knowledge search in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Acumeet Resources',
    title: 'Learn how better meetings',
    accent: 'work',
    lead: 'Guides, product updates and insights on meeting governance, AI and security.',
    primary: link('Explore resources', '#resource-index'),
    secondary: link('Read the blog', R.blog),
    window: pricingSearch([
      ['Policy Handover', 'Jun 12'],
      ['Programme Retrospective', 'Apr 21'],
      ['Knowledge Sharing Session', 'May 4'],
    ]),
    overlay: knowTasks(5, ['Fri', 'Jun 5', 'Today'], { width: 360, shadow: 'float' }),
    overlayY: 383,
    height: 736,
  }),

  sections: [
    statement(
      'Your meetings create more',
      'than notes',
      'They create decisions, actions and institutional knowledge. Learn how to capture, protect and use them.',
    ),

    /** Index · resource types (49:138325). */
    {
      type: 'index',
      id: 'resource-index',
      items: [
        [
          'Fresh thinking for better meetings',
          'Ideas on enterprise AI, meeting intelligence, security and compliance.',
          'Read the blog',
          R.blog,
        ],
        [
          'See meeting intelligence in practice',
          'Examples of how organisations turn conversations into searchable records.',
          'Explore case studies',
          R.caseStudies,
        ],
        [
          'Go deeper on enterprise meetings',
          'In-depth research on AI, governance and security.',
          'Explore whitepapers',
          R.whitepapers,
        ],
        [
          'Practical playbooks',
          'Step-by-step help for better follow-up, accountability and knowledge capture.',
          'Browse guides',
          R.guides,
        ],
        [
          'Research you can use',
          'Benchmarks and insights on meetings, AI and governance.',
          'View reports',
          R.reports,
        ],
        [
          'Big questions, practical answers',
          'Conversations on enterprise AI, secure meetings and governance.',
          'Watch webinars',
          R.webinars,
        ],
        [
          'See what is new in Acumeet',
          'New features and improvements, explained by what they help you do.',
          'View product updates',
          R.productUpdates,
        ],
        [
          'The people behind better meetings',
          'How teams approach accountability, knowledge and security.',
          'Read customer stories',
          R.customerStories,
        ],
        [
          'What are your meetings really costing you?',
          'Estimate the time lost to manual notes and unclear follow-up.',
          'Calculate meeting productivity',
          R.calculator,
        ],
        [
          'Need the how-to? Start here.',
          'Setup guidance and product documentation.',
          'Open documentation',
          R.documentation,
        ],
      ].map(([title, body, linkLabel, to]) => ({ title, body, link: linkLabel, to })),
    },

    /** Split · Useful content, built for enterprise (49:138451). */
    {
      type: 'split',
      size: 'standard',
      reverse: true,
      title: 'Useful content, built for enterprise',
      body: [
        'Our resources answer the questions enterprise teams ask. How do we capture decisions, protect sensitive information, strengthen governance and turn conversations into knowledge?',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: pricingSearch(
          [
            ['Knowledge Sharing Session', 'Jun 13'],
            ['Leadership Offsite', 'Apr 22'],
            ['Programme Retrospective', 'May 5'],
          ],
          460,
        ),
      },
    },

    /** Directory · RESOURCES (49:138491). */
    {
      type: 'directory',
      eyebrow: 'Resources',
      title: 'Explore Resources',
      items: DIRECTORY.map((k) => ({
        title: RESOURCES[k].title,
        description: RESOURCES[k].tagline,
        to: RESOURCES[k].to,
      })),
    },
  ],

  cta: {
    title: 'See Acumeet on your meetings',
    lead: 'See how Acumeet captures decisions, tracks accountability, protects sensitive information and builds searchable knowledge.',
    primary: DEMO,
    secondary: null,
  },
};
