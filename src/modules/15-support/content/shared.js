import { actions, decisions, search, summary } from '@/components/visuals/mocks';

export { members, POLICY_ROWS, supplierAtlas } from '@/modules/07-trust-center/content/shared';
export { ninReview } from '@/modules/12-compare/content/shared';

const TASKS = {
  follow: 'Follow up on ticket #4821',
  notes: 'Share the release notes with the customer',
  training: 'Schedule admin training for new users',
  guide: 'Send the setup guide to the workspace admin',
  sso: 'Confirm SSO configuration with IT',
};

/** Support tasks: supTasks(open, [due, due, due], opts) — follow-up → release notes → training. */
export const supTasks = (open, [a, b, c], opts) =>
  actions(
    open,
    [
      [TASKS.follow, a],
      [TASKS.notes, b],
      [TASKS.training, c],
    ],
    opts,
  );

/** Any support tasks: tasks(open, [[key, due], …], opts). */
export const tasks = (open, rows, opts) =>
  actions(
    open,
    rows.map(([k, due]) => [TASKS[k], due]),
    opts,
  );

const EXCERPTS = [
  '…SSO configuration confirmed with IT.',
  '…ticket #4821 escalated to engineering.',
  '…setup guide shared with the workspace admin.',
];

/** "SSO setup ticket" search: ssoSearch([[meeting, date] ×3], width, shadow). */
export const ssoSearch = (rows, width = 460, shadow) =>
  search(
    'SSO setup ticket',
    rows.map(([m, d], i) => [m, d, EXCERPTS[i]]),
    { width, shadow },
  );

const INSIGHTS = {
  setup: 'The customer completed workspace setup during the call.',
  sso: 'IT will confirm SSO configuration before rollout.',
  escalated: 'Ticket #4821 was escalated to engineering.',
};

/** Support summary: supSummary(title, [q, s, e], [insight, insight], width). */
export const supSummary = (title, scores, keys, width = 440) =>
  summary(
    title,
    scores,
    keys.map((k) => INSIGHTS[k]),
    { width },
  );

/** Support decisions card: supDecisions(date, [d1, d2], risk, topics, width, opts). */
export const supDecisions = (date, decided, risk, topics, width = 400, opts) =>
  decisions(date, decided, risk, topics, width, opts);

/** The three standard onboarding meetings: [[title, meta] ×3]. */
export const MEETINGS = [
  ['Customer Onboarding Call', '9:00 AM · Teams'],
  ['Support Escalation Review', '2:00 PM · Zoom'],
  ['Admin Training Session', '4:00 PM · Meet'],
];

/** "UI · Transcript" sprint lines (Feature Guides / Troubleshooting / Raise a Ticket). */
export const SPRINT = [
  [
    'Faith Oluwale',
    '03:21',
    'We completed 23 story points, which is a 15% increase from the previous sprint.',
  ],
  [
    'George Nwokoro',
    '04:28',
    'The authentication module is progressing well, but we need a security review.',
  ],
  ['Fredelina Augustus', '05:35', 'I can coordinate with the InfoSec team to schedule that audit.'],
];
