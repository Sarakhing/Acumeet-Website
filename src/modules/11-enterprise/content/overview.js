import { ROUTES } from '@/constants/routes';
import { keySummary, rollout, entPage } from './shared';
import { DEMO, ENTERPRISE, GROUPS, link, REQUEST_POC } from './enterprise';

const heroActions = rollout(4, ['Fri', 'Jun 26', 'May 4'], { width: 400, shadow: 'float' });

/** 11.01 · Enterprise Overview (Figma 49:67846). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Enterprise overview' }],

  /** 01 · Hero (890): summary behind action items over hairlines. */
  ...entPage('overview', {
    hero: 'centered',
    eyebrow: 'Overview',
    title: 'Meeting intelligence built for',
    accent: 'enterprise',
    lead: 'Capture decisions, actions and institutional knowledge from meetings, with control over access, data and accountability for IT, security and compliance teams.',
    primary: DEMO,
    secondary: REQUEST_POC,
    height: 890,
    copyHeight: 314,
    top: 447,
    gap: 37,
    items: [
      [699, 500, keySummary('Deployment Planning', [71, 66, 30], ['network', 'cutover'], 400)],
      [326, 447, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    /** E · Overview (49:67933). */
    {
      type: 'intro',
      eyebrow: 'Overview',
      text: 'Decisions should not disappear into recordings, inboxes and memory. Acumeet turns meetings into structured, searchable knowledge so teams can find what was discussed, decided and assigned.',
      items: [
        'AI transcripts and summaries',
        'Decisions and action items',
        'Searchable meeting knowledge',
        'Security and governance controls',
      ],
    },

    /** E · Enterprise journey (49:67978): every Enterprise page by stage. */
    {
      type: 'journey',
      eyebrow: 'Enterprise',
      title: 'Explore enterprise',
      stages: GROUPS.map(([label, keys]) => ({
        label,
        links: keys
          .filter((k) => k !== 'overview')
          .map((k) => ({
            title: ENTERPRISE[k].title,
            tagline: ENTERPRISE[k].tagline,
            to: ENTERPRISE[k].to,
          })),
      })),
    },

    /** E · PoC spotlight (49:68103). */
    {
      type: 'spotlight',
      eyebrow: 'Proof of concept',
      title: 'Test Acumeet on your real workflows',
      lead: 'Evaluate Acumeet against the workflows, controls and outcomes that matter to your organisation.',
      primary: REQUEST_POC,
      secondary: link('PoC Process', ENTERPRISE.pocProcess.to),
      caption: 'A clear path from question to result',
      steps: [
        'Define the problem',
        'Configure the environment',
        'Test the workflow',
        'Review the results',
      ],
    },

    /** E · Connected (49:68133): "Related pages" link cards. */
    {
      type: 'directory',
      eyebrow: 'Enterprise',
      title: 'Related pages',
      columns: 4,
      tone: 'white',
      items: [
        ['Security Overview', 'Security and governance for meeting intelligence.', ROUTES.security],
        [
          'Trust Center Overview',
          'Trust Center: security, privacy and compliance for meeting data',
          ROUTES.trustCenter,
        ],
        [
          'Deployment Overview',
          'Meeting intelligence that fits your environment.',
          ROUTES.deployment,
        ],
        [
          'Integration Overview',
          'Bring meeting intelligence into the tools your teams already use.',
          ROUTES.integrations,
        ],
      ].map(([title, description, to]) => ({ title, description, to })),
    },
  ],
};
