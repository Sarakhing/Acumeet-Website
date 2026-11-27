import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import RedactionReview from '@/components/visuals/RedactionReview';
import { exploreIndustries, industryCtaFull } from './industries';
import { audit, decisions, industryBreadcrumb, search, summary } from './detail';

const QUERY = 'regulator query response';

/** 04.16 · Other Regulated Industries (Figma 48:294434). */
export default {
  breadcrumb: industryBreadcrumb('Other regulated industries'),

  /** 01 · Hero (48:294437) — dark rings hero with Book a Demo + "Contact our team →", 1024 tall. */
  hero: {
    variant: 'rings',
    eyebrow: 'Other regulated industries',
    title: 'Meeting intelligence for regulated and accountability-driven organisations',
    lead: 'In regulated environments, important discussions may need to be documented, revisited and followed through carefully. Acumeet helps teams create structured meeting summaries, capture decisions and actions, and retain meeting-derived knowledge for appropriate business use.',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact our team', to: ROUTES.contactSales },
    secondaryStyle: 'link',
  },

  /** "✓ Hero carousel · 04.16 · Other Regulated Industries" (48:270964; slide 1 from the page instance). */
  carousel: [
    {
      label: 'Audit log',
      content: audit(
        [
          ['11:06', 'Applied legal hold', 'Admin'],
          ['10:49', 'Edited action item', 'George Nwokoro'],
          ['10:42', 'Approved redactions', 'Faith Oluwale'],
          ['10:28', 'Exported summary', 'George Nwokoro'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'May 28',
        ['Add consent checks to new onboarding', 'Approve the updated data protection policy'],
        'Incomplete staff training records',
        ['Queries', 'Regulatory returns', 'Policies', 'Training'],
        560,
      ),
    },
    {
      label: 'Summary',
      content: summary(
        'Policy Review Meeting',
        [72, 70, 52],
        ['The policy draft will be circulated for sign-off.', 'Compliance confirmed the monthly return is on track.'],
        { width: 560 },
      ),
    },
  ],

  sections: [
    /** 02 · Support Consistent Meeting Documentation (48:294452). */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Support consistent meeting documentation',
      body: [
        'Create structured records of discussions, decisions and next steps across teams working within defined procedures and governance expectations.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: search(
          QUERY,
          [
            ['Policy Review Meeting', 'Jun 28', '…owners assigned to open regulator queries.'],
            ['Compliance Monitoring Update', 'Apr 11', '…policy draft circulated for sign-off.'],
            ['Compliance Committee', 'May 20', '…training completion reviewed for new staff.'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 03 · Improve Action Visibility (48:294492). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Improve action visibility',
      paragraphs: [
        'Capture agreed responsibilities and follow-up actions so outstanding items are easier to review between meetings.',
      ],
    },
    /** 04 · Retain Relevant Context (48:294498) — dark split, waveform panel. */
    {
      type: 'split',
      size: 'compact',
      tone: 'dark',
      reverse: true,
      title: 'Retain relevant context',
      body: [
        'Make meeting-derived knowledge easier to retrieve when teams revisit issues, initiatives or prior decisions.',
      ],
      visual: {
        tint: 'night',
        pattern: { type: 'waveform', size: 'panel' },
        content: search(
          QUERY,
          [
            ['Compliance Committee', 'Apr 7', '…owners assigned to open regulator queries.'],
            ['Regulatory Reporting Review', 'May 16', '…policy draft circulated for sign-off.'],
            ['Policy Review Meeting', 'Jun 25', '…training completion reviewed for new staff.'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 05 · Support Governance Workflows (48:294528). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Support governance workflows',
      paragraphs: [
        'Use structured meeting outputs as a complement to established recordkeeping, review and approval processes.',
      ],
    },
    /** 06 · Evaluate Fit for Your Environment (48:294534). */
    {
      type: 'editorial',
      tone: 'white',
      title: 'Evaluate fit for your environment',
      paragraphs: [
        'Requirements differ by sector and organisation. Review data handling, access controls, retention, residency, auditability and integration needs before deployment.',
      ],
    },
    /** 07 · Workflows this page can speak to (48:294540). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Workflows this page can speak to',
      paragraphs: [
        'Energy and utilities operational reviews',
        'Healthcare administration and service planning meetings',
        'Legal and professional services client or internal meetings',
        'Manufacturing quality and operations reviews',
        'Pharmaceutical and life sciences project meetings',
      ],
    },
    /** 08 · Security and responsible use (48:294550) — redaction review on a pink waveform panel. */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Security and responsible use',
      body: [
        'Any sector-specific deployment should be reviewed against applicable legal, privacy, security, records-management and contractual requirements.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'waveform', size: 'panel' },
        content: h(RedactionReview, {
          width: 440,
          count: 3,
          sentence: [
            'We have confirmed the offer for',
            { token: 'PERSON_NAME' },
            'His NIN is',
            { token: 'NIN' },
            'linked to his BVN',
            { token: 'BANK_VERIFICATION_NUMBER' },
          ],
          rows: [
            { label: 'NIN', match: 100 },
            { label: 'Phone number', match: 95 },
          ],
        }),
      },
    },
  ],

  /** Explore more (48:294587) — overline hidden. */
  related: exploreIndustries(['overview', 'financialServices', 'banking', 'insurance']),

  cta: industryCtaFull('Meeting Intelligence for Regulated and Accountability-Driven Organisations'),
};
