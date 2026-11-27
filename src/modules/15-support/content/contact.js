import { supDecisions, supSummary, tasks } from './shared';
import {
  cta,
  ENTERPRISE_TEAM,
  explorer,
  exploreSupport,
  link,
  RAISE,
  RELATED,
  statement,
  SUPPORT,
  supBreadcrumb,
  supportPlans,
  ticket,
  tickets,
} from './support';

/** 15.12 · Contact Support (Figma 49:168043). */
export default {
  breadcrumb: supBreadcrumb('Contact support'),

  /** 01 · Hero + "Hero carousel · 15.12 · Contact Support" (49:91273). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Support  ·  Contact support',
    title: 'Need a person?',
    lead: 'Tell us what you were trying to do and what happened. Add a screenshot if it helps.',
    primary: RAISE,
    secondary: link('Check ticket status', SUPPORT.ticketStatus.to),
  },
  carousel: [
    {
      label: 'Summary',
      content: supSummary('Admin Training Session', [81, 91, 35], ['sso', 'escalated'], 560),
    },
    {
      label: 'Action items',
      content: tasks(
        4,
        [
          ['notes', 'Fri'],
          ['training', 'Next week'],
          ['guide', 'Jun 14'],
        ],
        { width: 560, footer: false },
      ),
    },
    {
      label: 'Decisions',
      content: supDecisions(
        'Jun 9',
        ['Escalate ticket #4821 to engineering', 'Enable SSO before rollout'],
        'Integration setup blocked on permissions',
        ['Release notes', 'Integrations', 'Onboarding', 'SSO setup'],
        560,
      ),
    },
  ],

  sections: [
    statement(
      'Our support team reviews every request. For enterprise customers, your Customer Success Manager',
      'is also available.',
    ),
    explorer({ title: 'Ways to reach', accent: 'us' }, [
      ['Raise a ticket', 'Send the details so the support team can review them.', ticket()],
      ['Ticket status', 'Already raised a ticket? Check its status.', tickets()],
      [
        'Enterprise team',
        'Enterprise customers can contact their Customer Success Manager.',
        supportPlans(),
      ],
    ]),
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'We are here to help',
    'Raise a ticket and our team will get back to you.',
    RAISE,
    ENTERPRISE_TEAM,
  ),
};
