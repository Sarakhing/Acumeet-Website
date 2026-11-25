import { actions, decisions } from '@/components/visuals/mocks';

export { members, POLICY_ROWS, supplierAtlas } from '@/modules/07-trust-center/content/shared';

/** The two "Key insights" lines most Compliance summary cards share. */
export const INSIGHTS = [
  'The policy draft will be circulated for sign-off.',
  'Compliance confirmed the monthly return is on track.',
];

/** The three compliance tasks in most "UI · Action items" cards: tasks([due, due, due]). */
export const tasks = ([a, b, c]) => [
  ['Confirm training completion for new staff', a],
  ['Review open regulator queries', b],
  ['Share the compliance monitoring report', c],
];

/** Redaction sentence used across Compliance (NIN / BVN). */
export const NIN_SENTENCE = [
  'We have confirmed the offer for',
  '[PERSON_NAME]',
  'His NIN is',
  '[NIN]',
  'linked to his BVN',
  '[BANK_VERIFICATION_NUMBER]',
];

/** Centred hero cards (400 wide, float shadow). */
export const floatActions = (open, list) => actions(open, list, { width: 400, shadow: 'float' });
export const floatDecisions = (date, decided, risk, topics) =>
  decisions(date, decided, risk, topics, 400, { shadow: 'float' });

/** "Responsible handling of meeting information" cards (08.01 · 08.08, 2 × 2). */
export const GOVERNANCE_CARDS = [
  ['Transparency', 'Understand the purpose of processing and the relevant privacy information.'],
  [
    'Access and accountability',
    'Consider who can access meeting-derived information and how access is managed in the applicable environment.',
  ],
  [
    'Retention and deletion',
    'Review the product behaviour and contractual terms that apply to retention, deletion and related data lifecycle needs.',
  ],
  [
    'Third-party services',
    'Review information about relevant service providers and integrations as part of vendor due diligence.',
  ],
];

/** "Find the information relevant to your assessment" cards (08.01 · 08.11, 3-up). */
export const DOCUMENT_CARDS = [
  ['SOC 2 documentation', 'Supporting assurance information for enterprise review.'],
  ['ISO 27001 certificate', 'Current certificate and applicable scope information.'],
  ['Privacy Notice', 'Information about Acumeet’s privacy practices.'],
  ['Data Processing Terms', 'Applicable contractual information about data processing.'],
  ['Subprocessor List', 'Third-party providers supporting Acumeet.'],
  ['AI & Data Handling', 'Information about AI-enabled workflows and data handling.'],
  ['Data Retention & Deletion', 'Information about applicable data lifecycle arrangements.'],
  ['Security Overview', 'Summary of Acumeet’s security approach.'],
];
