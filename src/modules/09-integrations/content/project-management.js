import { actions, CONNECTED, integrations, summary } from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import {
  CONTACT,
  exploreIntegrations,
  intBreadcrumb,
  intCta,
  RELATED,
  splits,
} from './integrations';

/* Delivery tasks used across this page. */
const T = {
  uat: 'Book the user acceptance testing window',
  raid: 'Update the RAID log with new dependencies',
  goLive: 'Confirm the revised go-live date',
  change: 'Share the change request with the sponsor',
  baseline: 'Re-baseline the migration plan',
  jira: 'Create Jira tickets for the migration blockers',
};
const list = (open, rows, width = 440) =>
  actions(
    open,
    rows.map(([k, due]) => [T[k], due]),
    { width },
  );

/** 09.09 · Project Management (Figma 48:385861). */
export default {
  breadcrumb: intBreadcrumb('Project Management'),

  /** 01 · Hero + "Hero carousel · 09.09 · Project Management" (46:93593). */
  ...ringsHero({
    eyebrow: 'Integrations  ·  Project Management',
    title: 'Turn meeting decisions into delivery.',
    lead: 'Meeting decisions are more valuable when they lead to owned, trackable work. Explore the project-management tools below and confirm the supported method for transferring action items or meeting context into your team’s delivery workflow.',
    primary: CONTACT('Discuss your project management requirements'),
    secondary: null,
    slides: [
      [
        'Action items',
        actions(
          5,
          [
            [T.change, 'Jun 18'],
            [T.baseline, 'May 23'],
            [T.uat, 'Today'],
          ],
          { width: 560, footer: false },
        ),
      ],
      ['Integrations', integrations(CONNECTED, 6)],
      [
        'Summary',
        summary(
          'Project Stand-up',
          [56, 66, 20],
          [
            'Data migration is running a week behind plan.',
            'Go-live moved by one week to protect UAT.',
          ],
          { width: 560 },
        ),
      ],
    ],
  }),

  sections: splits([
    {
      eyebrow: 'Issue and project tracking',
      title: 'Carry meeting actions into Jira workflows.',
      body: [
        'Explore supported ways to map meeting decisions and action items to Jira issues or project workflows. Confirm whether the connection creates issues, links existing records, or shares information through another supported method.',
        'Make next steps easier to track.',
        'Clarify ownership and follow-up.',
        'Align the workflow with your team’s Jira conventions.',
      ],
      cta: CONTACT('Ask about Jira'),
      visual: list(4, [
        ['uat', 'May 25'],
        ['raid', 'Today'],
        ['goLive', 'May 8'],
      ]),
    },
    {
      eyebrow: 'Work management',
      title: 'Help meeting actions move into Asana.',
      body: [
        'Assess how meeting action items and decisions could fit into supported Asana tasks and project workflows. Confirm the available actions, field mapping, and permission model for your environment.',
        'Connect discussion outcomes to task follow-up.',
        'Make responsibilities clearer.',
        'Keep task creation aligned with team processes.',
      ],
      cta: CONTACT('Ask about Asana'),
      visual: list(
        4,
        [
          ['jira', 'Fri'],
          ['goLive', 'May 8'],
          ['change', 'Jun 13'],
        ],
        400,
      ),
    },
    {
      eyebrow: 'Work management',
      title: 'Bring meeting follow-through into Monday.com.',
      body: [
        'Explore whether meeting outcomes can be mapped into your Monday.com boards and work items through a supported integration route. The workflow should be designed around the fields, ownership rules, and permissions your teams use.',
        'Support visibility of agreed next steps.',
        'Map information to existing boards and columns.',
        'Confirm workflow fit before rollout.',
      ],
      cta: CONTACT('Ask about Monday.com'),
      visual: list(3, [
        ['goLive', 'Today'],
        ['change', 'May 10'],
        ['baseline', 'Next week'],
      ]),
    },
    {
      eyebrow: 'Boards and cards',
      title: 'Turn agreed actions into Trello cards where supported.',
      body: [
        'Explore a workflow for connecting meeting action items with Trello boards and cards. Confirm whether the supported approach can create or update cards, assign owners, or simply share meeting context.',
        'Make action items visible in team boards.',
        'Keep follow-up tied to agreed decisions.',
        'Set expectations for integration capabilities.',
      ],
      cta: CONTACT('Ask about Trello'),
      visual: integrations(CONNECTED, 6),
    },
    {
      eyebrow: 'Project-management integration options',
      title: 'Use a different project tool? Start with the workflow.',
      body: [
        'Tell us which project-management platform your team uses and what should happen after a meeting. Acumeet can assess a supported integration route where the platform’s APIs, permissions, and required workflow make it feasible.',
        'Describe the action that should happen after a meeting.',
        'Identify available APIs and data requirements.',
        'Agree scope and implementation approach.',
      ],
      cta: CONTACT('Discuss your project tool'),
      visual: list(5, [
        ['baseline', 'May 12'],
        ['uat', 'Next week'],
        ['raid', 'May 22'],
      ]),
    },
  ]),

  related: exploreIntegrations(RELATED),
  cta: intCta('Turn meeting decisions into delivery.'),
};
