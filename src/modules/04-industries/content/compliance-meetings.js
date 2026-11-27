import { exploreIndustries, industryCta } from './industries';
import { actions, audit, capture, decisions, explorerItems, followSplit, fsBreadcrumb, search, summary } from './detail';

/** 04.07 · Compliance Meetings (Figma 48:289785). */
export default {
  breadcrumb: fsBreadcrumb('Compliance meetings'),

  /** 01 · Hero (48:289788) — dark rings hero, no buttons, 836 tall. */
  hero: {
    variant: 'rings',
    eyebrow: 'Compliance meetings',
    title: 'Make compliance discussions easier to document and follow up',
    lead: 'Help teams capture compliance discussions, document agreed actions and retrieve meeting context with Acumeet.',
  },

  /** "✓ Hero carousel · 04.07 · Compliance Meetings" (48:268863; slide 1 from the page instance). */
  carousel: [
    {
      label: 'Audit log',
      content: audit(
        [
          ['10:44', 'Signed in via SSO', 'Ruth Godwin'],
          ['10:22', 'Applied legal hold', 'Admin'],
          ['10:10', 'Edited action item', 'George Nwokoro'],
          ['09:51', 'Approved redactions', 'Faith Oluwale'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Meetings',
      content: capture(
        'Mon, May 21',
        [
          ['Policy Review Meeting', '4:00 PM · Zoom'],
          ['Compliance Monitoring Update', '9:00 AM · Meet'],
          ['Compliance Committee', '2:00 PM · Teams'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'Jun 9',
        ['Assign owners to open regulator queries', 'Move policy reviews to quarterly'],
        'Incomplete staff training records',
        ['Policies', 'Training', 'Consent', 'Monitoring'],
        560,
      ),
    },
  ],

  /** Tabs explorer (48:289798) + "✓ Explorer · " (48:268984; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Create structured meeting records',
        body: 'Summarise discussions about policies, regulatory developments, internal controls and compliance priorities to help teams retain key points.',
        visual: summary('Policy Review Meeting', [42, 70, 32], [
          'The policy draft will be circulated for sign-off.',
          'Compliance confirmed the monthly return is on track.',
        ]),
      },
      {
        title: 'Track agreed actions',
        body: 'Record responsibilities and follow-up actions from compliance meetings so outstanding items are easier to review.',
        visual: actions(
          5,
          [
            ['Confirm training completion for new staff', 'Fri'],
            ['Review open regulator queries', 'Next week'],
            ['Share the compliance monitoring report', 'Jun 14'],
          ],
          { width: 400 },
        ),
      },
      {
        title: 'Retain context for future reviews',
        body: 'Make earlier meeting-derived information easier to retrieve when teams revisit an issue, policy or remediation plan.',
        visual: search(
          'regulator query response',
          [
            ['Compliance Committee', 'Apr 7', '…owners assigned to open regulator queries.'],
            ['Regulatory Reporting Review', 'May 16', '…policy draft circulated for sign-off.'],
            ['Policy Review Meeting', 'Jun 25', '…training completion reviewed for new staff.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Compliance workflows',
        body: 'Support regulatory update meetings, policy reviews, internal control discussions, issue escalations and compliance action planning.',
        visual: capture('Thu, Jun 12', [
          ['Compliance Monitoring Update', '10:30 AM · Meet'],
          ['Compliance Committee', '11:00 AM · Teams'],
          ['Regulatory Reporting Review', '3:30 PM · Zoom'],
        ]),
      },
    ]),
  },

  /** Split (48:289800) — audit log on a pink rings panel. */
  split: followSplit(
    'Support Compliance Processes Without Overclaiming',
    'Acumeet can help organise meeting information, but using the platform alone does not guarantee regulatory compliance or replace specialist compliance systems and professional judgement.',
    audit([
      ['11:10', 'Edited action item', 'George Nwokoro'],
      ['10:59', 'Approved redactions', 'Faith Oluwale'],
      ['10:41', 'Exported summary', 'George Nwokoro'],
      ['10:33', 'Updated retention policy', 'Admin'],
    ]),
  ),

  /** Explore more (48:289838). */
  related: exploreIndustries(['fraudInvestigations', 'boardMeetings', 'auditMeetings', 'amlReviews'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Make Compliance Discussions Easier to Document and Follow Up'),
};
