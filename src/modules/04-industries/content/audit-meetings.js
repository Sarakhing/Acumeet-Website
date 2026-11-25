import { exploreIndustries, industryCta } from './industries';
import { actions, audit, capture, decisions, explorerItems, followSplit, fsBreadcrumb, heroCanvas, search } from './detail';

const heroAudit = () =>
  audit(
    [
      ['10:35', 'Updated retention policy', 'Admin'],
      ['10:16', 'Viewed transcript', 'Ruth Godwin'],
      ['10:07', 'Shared meeting record', 'Warith Abraham'],
      ['09:51', 'Changed role to Admin', 'Admin'],
    ],
    { width: 480 },
  );

/** 04.10 · Audit Meetings (Figma 48:291127). */
export default {
  breadcrumb: fsBreadcrumb('Audit Meetings'),

  /** 01 · Hero (48:291130) — centred light wash, 838 tall; canvas origin 1440-frame (80, 403). */
  hero: {
    variant: 'centered',
    eyebrow: 'Audit Meetings',
    title: 'Turn Audit Discussions Into Trackable Follow-Up',
    lead: 'Acumeet helps audit teams document findings discussions, retain context and organise remediation actions and follow-up meetings.',
    visual: heroCanvas(
      415,
      [
        [400, 0, heroAudit()],
        [
          30,
          80,
          capture(
            'Tue, Jun 8',
            [
              ['Audit Committee Meeting', '2:00 PM · Meet'],
              ['Internal Audit Status Review', '4:00 PM · Teams'],
              ['Remediation Follow-up', '9:00 AM · Zoom'],
            ],
            { width: 380, shadow: 'float' },
          ),
        ],
        [
          870,
          120,
          decisions(
            'May 26',
            ['Extend the remediation date for finding 3', 'Close two low-risk findings'],
            'Overdue high-risk findings',
            ['Remediation', 'Audit scope', 'Management responses', 'Controls'],
            380,
          ),
        ],
      ],
      1280,
    ),
    visualWidth: 1280,
    visualCompact: heroAudit(),
    visualCompactWidth: 480,
  },

  /** Tabs explorer (48:292259) + "✓ Explorer · " (48:269863; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Document Findings and Recommendations',
        body: 'Create structured records of audit-related discussions, including key observations, recommendations and outstanding questions.',
        visual: audit(
          [
            ['11:35', 'Edited action item', 'George Nwokoro'],
            ['11:20', 'Approved redactions', 'Faith Oluwale'],
            ['10:58', 'Exported summary', 'George Nwokoro'],
            ['10:46', 'Updated retention policy', 'Admin'],
          ],
          { width: 480 },
        ),
      },
      {
        title: 'Track Remediation Actions',
        body: 'Capture agreed next steps, responsibilities and follow-up items to help teams review progress between meetings.',
        visual: actions(
          5,
          [
            ['Share the audit status report with the committee', 'Next week'],
            ['Schedule the IT general controls walkthrough', 'Jun 14'],
            ['Close out last quarter’s low-risk findings', 'Jun 7'],
          ],
          { width: 400 },
        ),
      },
      {
        title: 'Retain Context Across Review Cycles',
        body: 'Make prior meeting-derived information easier to retrieve when findings or remediation plans are revisited.',
        visual: search(
          'access review finding evidence',
          [
            ['Internal Audit Status Review', 'Apr 12', '…evidence requested for the access review finding.'],
            ['Remediation Follow-up', 'May 21', '…remediation date extended for finding 3.'],
            ['Audit Walkthrough', 'Jun 4', '…two low-risk findings closed.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Audit Workflows',
        body: 'Support internal audit meetings, control reviews, findings discussions, remediation planning and follow-up reviews.',
        visual: capture('Thu, May 7', [
          ['Audit Committee Meeting', '2:00 PM · Meet'],
          ['Internal Audit Status Review', '4:00 PM · Teams'],
          ['Remediation Follow-up', '9:00 AM · Zoom'],
        ]),
      },
    ]),
  },

  /** Split (48:292261) — knowledge search on a pink rings panel. */
  split: followSplit(
    'Complement Audit Management Processes',
    'Acumeet supports meeting documentation. It does not replace audit workpaper systems, evidence-management processes or formal audit judgement.',
    search(
      'access review finding evidence',
      [
        ['Audit Committee Meeting', 'Jun 16', '…evidence requested for the access review finding.'],
        ['Internal Audit Status Review', 'Apr 25', '…remediation date extended for finding 3.'],
        ['Remediation Follow-up', 'May 8', '…two low-risk findings closed.'],
      ],
      { width: 440 },
    ),
  ),

  /** Explore more (48:292297). */
  related: exploreIndustries(['amlReviews', 'customerStrategy', 'telecommunications', 'publicSector'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Turn Audit Discussions Into Trackable Follow-Up'),
};
