import { actions, summary } from '@/components/visuals/mocks';

export { members, POLICY_ROWS } from '@/modules/07-trust-center/content/shared';

/* Deployment tasks used in every "UI · Action items" card. */
const TASKS = {
  storage: 'Provision the storage account for BYOS',
  cutover: 'Book the cutover window',
  failover: 'Test failover in the secondary region',
  region: 'Confirm the Azure region for the tenant',
  network: 'Share the network diagram with Security',
};

/** tasks(open, [[key, due], …], { width, shadow, footer }). */
export const tasks = (open, rows, opts) =>
  actions(
    open,
    rows.map(([k, due]) => [TASKS[k], due]),
    opts,
  );

/** The standard storage → cutover → failover list: rollout(open, [due, due, due], opts). */
export const rollout = (open, [a, b, c], opts) =>
  tasks(
    open,
    [
      ['storage', a],
      ['cutover', b],
      ['failover', c],
    ],
    opts,
  );

const INSIGHTS = {
  network: 'Security is reviewing the network diagram.',
  cutover: 'Cutover is planned after the pilot group.',
  tenant: 'The customer chose to deploy in their own Azure tenant.',
};

/** "Key value points" summary: keySummary(title, [q, s, e], [insightKey, insightKey], width). */
export const keySummary = (title, scores, keys, width = 460) =>
  summary(
    title,
    scores,
    keys.map((k) => INSIGHTS[k]),
    { width },
  );
