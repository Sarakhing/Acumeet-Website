import { access, capture, CONNECTED, integrations } from '@/components/visuals/mocks';
import { centeredHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { members, MEETINGS, supDecisions, supSummary, supTasks } from './shared';
import { CONTACT_SUPPORT, cta, DEMO, explorer, link, statement, supBreadcrumb } from './support';

const heroActions = supTasks(3, ['May 6', 'Jun 11', 'Today'], { width: 400, shadow: 'float' });

const STEPS = [
  ['lilac', 'rings', 'Sign up', 'Create your account.'],
  ['pink', 'dots', 'Connect', 'Link your meeting platform.'],
  ['blue', 'hairlines', 'Invite', 'Invite Acumeet to a meeting.'],
  ['mint', 'rings', 'Review', 'Read the transcript, summary and actions.'],
];

/** 15.04 · Getting Started (Figma 49:167278). No related row in Figma. */
export default {
  breadcrumb: supBreadcrumb('Getting started'),

  /** 01 · Hero (820): meetings and decisions (−6°) behind action items. */
  ...centeredHero({
    eyebrow: 'Support  ·  Getting started',
    title: 'Get started with',
    accent: 'Acumeet',
    lead: 'Set up Acumeet and connect your first meeting platform.',
    primary: link('Sign up', ROUTES.getStarted),
    secondary: CONTACT_SUPPORT,
    height: 820,
    copyHeight: 224,
    top: 366,
    gap: 46,
    items: [
      [230, 423, capture('Mon, Jun 8', MEETINGS, { shadow: 'float' })],
      [
        807,
        430,
        supDecisions(
          'Jun 2',
          ['Escalate ticket #4821 to engineering', 'Enable SSO before rollout'],
          'Integration setup blocked on permissions',
          ['Onboarding', 'SSO setup', 'Tickets', 'Training'],
          400,
          { shadow: 'float' },
        ),
        -6,
      ],
      [520, 366, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Most teams are capturing their first meeting within minutes. These guides take you from sign-up to',
      'your first summary.',
    ),
    explorer(
      {
        title: 'Setup',
        accent: 'guides',
        lead: 'Set up your workspace and capture your first meeting.',
      },
      [
        [
          'Create your account',
          'Sign up and set up your workspace.',
          capture('Mon, Jun 8', MEETINGS),
        ],
        [
          'Connect a meeting platform',
          'Connect Teams, Zoom, Google Meet or Webex.',
          integrations(CONNECTED, 6),
        ],
        ['Invite your team', 'Add colleagues and assign roles.', access(members, { width: 380 })],
        [
          'Capture your first meeting',
          'Invite Acumeet and get your first record.',
          supSummary('Support Escalation Review', [71, 81, 25], ['setup', 'sso']),
        ],
      ],
    ),

    /** Benefits · Your first meeting in four steps (49:167396). */
    {
      type: 'cards',
      title: 'Your first meeting in',
      accent: 'four steps',
      titleSize: 44,
      columns: 2,
      accentBreak: false,
      cards: STEPS.map(([tint, type, title, body]) => ({
        title,
        body,
        tint,
        pattern: { type, size: 'card-wide' },
      })),
    },
  ],

  cta: cta(
    'Still need help getting started?',
    'Our support team can walk you through setup.',
    CONTACT_SUPPORT,
    DEMO,
  ),
};
