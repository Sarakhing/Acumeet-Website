import { actions, decisions, redaction } from '@/components/visuals/mocks';

export { members, supplierAtlas } from '@/modules/07-trust-center/content/shared';
export { approvalSearch, po, vendor } from '@/modules/09-integrations/content/shared';

/** Redaction sentences used across Compare. */
export const NIN = [
  'We have confirmed the offer for',
  '[PERSON_NAME]',
  'His NIN is',
  '[NIN]',
  'linked to his BVN',
  '[BANK_VERIFICATION_NUMBER]',
];
export const CONTRACT = [
  'Send the contract to',
  '[EMAIL_ADDRESS]',
  'and copy',
  '[PERSON_NAME]',
  'on account',
  '[ACCOUNT_NUMBER]',
];

/** "Redaction review" with the NIN sentence: ninReview(count, phoneMatch, width). */
export const ninReview = (count, phone = '90%', width = 440) =>
  redaction(
    count,
    NIN,
    [
      ['NIN', '100%'],
      ['Phone number', phone],
    ],
    { width },
  );

/** "Redaction review" with the contract sentence: contractReview(count, accountMatch, width). */
export const contractReview = (count, account = '96%', width = 480) =>
  redaction(
    count,
    CONTRACT,
    [
      ['Email address', '100%'],
      ['Account number', account],
    ],
    { width },
  );

/** "Decisions & topics" (procurement): procDecisions(date, [d1, d2], risk, topics, width, opts). */
export const procDecisions = (date, decided, risk, topics, width = 420, opts) =>
  decisions(date, decided, risk, topics, width, opts);

/** "Action items" from [title, due] rows. */
export const taskList = (open, rows, opts) => actions(open, rows, opts);
