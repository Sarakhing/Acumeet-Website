import { actions, decisions, search, summary } from '@/components/visuals/mocks';

export { members } from '@/modules/07-trust-center/content/shared';

/** The procurement tasks in most "UI · Action items" cards: po([due, due, due]). */
export const po = ([a, b, c]) => [
  ['Identify top recurring items for PO automation pilot', a],
  ['Confirm supplier onboarding checklist owners', b],
  ['Draft the Q3 vendor scorecard', c],
];

/** The vendor-scorecard tasks variant: vendor([due, due, due]). */
export const vendor = ([a, b, c]) => [
  ['Draft the Q3 vendor scorecard', a],
  ['Share feedback on the vendor approval cycle draft', b],
  ['Begin ERP sync audit diagnostics', c],
];

/** The security tasks (Identity / Security pages): secTasks([due, due, due]). */
export const secTasks = ([a, b, c]) => [
  ['Review privileged role assignments', a],
  ['Confirm MFA enforcement for admins', b],
  ['Share the penetration test summary', c],
];

/** "vendor approval workflow" knowledge search: approvalSearch([[meeting, date], ×3]). */
export const approvalSearch = (meetings) =>
  search(
    'vendor approval workflow',
    meetings.map(([meeting, date], i) => [
      meeting,
      date,
      [
        '…suggested revising the vendor approval workflow to minimise bottlenecks.',
        '…approval workflow dependencies raised for Q3 planning.',
        '…agreed to revisit the approval cycle after the pilot.',
      ][i],
    ]),
    { width: 440 },
  );

/** Summary card with procurement insights: meetingSummary(title, scores, insightKeys). */
const INSIGHTS = {
  vendor: 'Faith proposed reworking the vendor approval process to unblock onboarding.',
  savings: 'Fredelina flagged missed savings from low supplier engagement.',
  audit: 'George asked for a system sync audit before the next release.',
};
export const meetingSummary = (title, scores, keys) =>
  summary(
    title,
    scores,
    keys.map((k) => INSIGHTS[k]),
  );

/** Centred hero cards (400 wide, float shadow). */
export const floatActions = (open, list) => actions(open, list, { width: 400, shadow: 'float' });
export const floatDecisions = (date, decided, risk, topics) =>
  decisions(date, decided, risk, topics, 400, { shadow: 'float' });
