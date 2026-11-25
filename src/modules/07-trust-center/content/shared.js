import { atlas } from '@/components/visuals/mocks';

/** Workspace members in the default "UI · Access" card (Admin / Owner / Viewer / Member). */
export const members = [
  ['Faith Oluwale', 'Admin'],
  ['George Nwokoro', 'Owner'],
  ['Ruth Godwin', 'Viewer'],
  ['Warith Abraham', 'Member'],
];

/** The Atlas card reused across the Trust Center explorers (460 wide). */
export const supplierAtlas = atlas({
  width: 460,
  question: 'What changed in our supplier engagement this month?',
  answer: [
    'Across 3 meetings, the team linked ',
    { b: 'low supplier engagement' },
    ' to missed savings and agreed a ',
    { b: 'monthly supplier review' },
    '.',
  ],
  quote: {
    name: 'Fredelina Augustus',
    time: '09:12',
    text: '“We’re missing savings because suppliers aren’t engaging with the new process.”',
  },
  sources: ['Strategy Review · 09:12', 'Stand-up · 21:40'],
  prompts: ['Compare with last month', 'Who owns the review?'],
});

/** Default "UI · Retention policy" rows (180 days / 2 / 5 / 7 years). */
export const POLICY_ROWS = [
  ['Recordings', '180 days'],
  ['Transcripts', '2 years'],
  ['Summaries', '5 years'],
  ['Audit logs', '7 years'],
];
