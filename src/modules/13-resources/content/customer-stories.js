import { createElement as h } from 'react';
import { decisions } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { AVATARS } from '@/components/visuals/people';
import { ROUTES } from '@/constants/routes';
import {
  exploreResources,
  knowSummary,
  knowTasks,
  RELATED,
  resBreadcrumb,
  resCta,
} from './resources';

/* Featured story visual: decisions card with a "Decision recorded" toast overlapping its lower right. */
const featuredVisual = h(
  'div',
  { className: 'relative pb-10' },
  decisions(
    'Jun 2',
    ['Move two accounts to the watch list', 'Approve the facility subject to collateral valuation'],
    'Delayed audited financials from applicants',
    ['Collateral', 'Covenants', 'Watch list', 'Exposure'],
    380,
  ),
  h(
    'div',
    {
      className:
        'absolute bottom-0 right-6 flex items-center gap-2.5 rounded-[12px] border border-border-muted bg-surface-white px-3.5 py-2.5 shadow-float-ui',
    },
    h('span', { className: 'size-5 rounded-full bg-ink-900', 'aria-hidden': true }),
    h(
      'span',
      { className: 'flex flex-col' },
      h('span', { className: 'text-[12px] font-medium text-ink-900' }, 'Decision recorded'),
      h('span', { className: 'font-mono text-[10px] text-ink-500' }, 'Credit Committee · 41:20'),
    ),
  ),
);

/** 13.10 · Customer Stories (Figma 49:139652). Story pages are not built, so cards are not links. */
export default {
  breadcrumb: resBreadcrumb('Customer stories'),

  /** 01 · Hero (680): summary in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Customer stories',
    title: 'The people behind better',
    accent: 'meeting outcomes',
    lead: 'How teams think about accountability, security, governance and execution.',
    primary: { label: 'Read customer stories', to: '#stories' },
    window: knowSummary('Programme Retrospective', [51, 91, 35], ['handbook', 'tag'], 500),
    overlay: knowTasks(5, ['Fri', 'May 5', 'Jun 10'], { width: 360, shadow: 'float' }),
    overlayY: 327,
    height: 680,
  }),

  sections: [
    /** Customer stories · listing (49:139742). */
    {
      type: 'stories',
      id: 'stories',
      eyebrow: 'All stories',
      title: 'How teams use Acumeet to keep decisions on record',
      chips: [
        'All stories',
        'Banking',
        'Insurance',
        'Telecommunications',
        'Public sector',
        'Enterprise',
      ],
      featured: {
        industry: 'Banking',
        tags: ['Banking', 'Credit committees'],
        title: 'How a commercial bank’s credit committee keeps every decision traceable',
        quote:
          '“We no longer rebuild committee decisions from memory. The record is there when the meeting ends, with the discussion that led to it.”',
        person: 'Head of Credit Risk',
        org: 'Commercial bank',
        avatar: AVATARS['George Nwokoro'],
        outcomes: [
          ['Committee records ready the same day', 'clock'],
          ['Each decision linked to its discussion', 'seal-check'],
          ['Owners confirmed before close', 'user-check'],
        ],
        visual: featuredVisual,
      },
      stories: [
        [
          'Insurance',
          'shield-check',
          'An insurer brings claims committee follow-ups into one place',
          'Claims reviews now end with owners, due dates and the reasons behind each decision.',
          'Head of Claims, General insurer',
          'Faith Oluwale',
        ],
        [
          'Telecommunications',
          'pulse',
          'A network operations team shortens incident handovers',
          'Shift leads review what was agreed in the last incident call before they pick up.',
          'NOC Manager, Mobile operator',
          'Warith Abraham',
        ],
        [
          'Public sector',
          'buildings',
          'A programme office keeps inter-agency decisions on record',
          'Steering decisions stay searchable across agencies, even as people change roles.',
          'Programme Director, Government agency',
          'Ruth Godwin',
        ],
        [
          'Enterprise',
          'kanban',
          'A shared services team turns stand-ups into tracked work',
          'Action items from weekly stand-ups flow into the team’s project tool automatically.',
          'Operations Lead, Shared services',
          'George Nwokoro',
        ],
        [
          'Banking',
          'eye-slash',
          'An AML team documents case reviews without extra admin',
          'Sensitive details are redacted before records are stored and shared for review.',
          'MLRO, Retail bank',
          'Warith Abraham',
        ],
        [
          'Financial services',
          'scales',
          'A board secretariat prepares from past resolutions',
          'Company secretaries find earlier resolutions in seconds when drafting board packs.',
          'Company Secretary, Holding company',
          'Fredelina Augustus',
        ],
      ].map(([industry, icon, title, body, role, person]) => ({
        industry,
        icon,
        title,
        body,
        role,
        avatar: AVATARS[person],
      })),
      quote: {
        text: '“Our risk committee finally has one record of what was discussed, what was decided and who owns the follow-up.”',
        by: 'Chief Risk Officer · Microfinance bank',
        avatar: AVATARS['Faith Oluwale'],
        cta: { label: 'Share your story', to: ROUTES.contactSales },
      },
    },
  ],

  related: exploreResources(RELATED),
  cta: resCta('The people behind better meeting outcomes'),
};
