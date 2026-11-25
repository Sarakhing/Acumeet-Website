import {
  access,
  actions,
  audit,
  keys,
  redaction,
  retention,
  transcript,
} from '@/components/visuals/mocks';
import { ringsHero } from '@/components/blocks/heroPresets';
import { members, POLICY_ROWS, supplierAtlas } from './shared';
import {
  BOOK_DEMO,
  docs,
  exploreTrust,
  explorer,
  REQUEST,
  statement,
  tcBreadcrumb,
  tcCta,
} from './trust-center';

/** 07.03 · Privacy (Figma 48:337641). */
export default {
  breadcrumb: tcBreadcrumb('Privacy'),

  /** 01 · Hero + "Hero carousel · 07.03 · Privacy" (48:339280). */
  ...ringsHero({
    eyebrow: 'Trust Center  ·  Privacy',
    title: 'Access only what the meeting needs',
    lead: 'Acumeet works with the meetings it is invited to, and customer meeting data is not used for advertising or profiling.',
    primary: REQUEST('Request trust documentation'),
    secondary: BOOK_DEMO,
    slides: [
      [
        'Redaction',
        redaction(
          3,
          [
            'Send the contract to',
            '[EMAIL_ADDRESS]',
            'and copy',
            '[PERSON_NAME]',
            'on account',
            '[ACCOUNT_NUMBER]',
          ],
          [
            ['Email address', '100%'],
            ['Account number', '91%'],
          ],
          { width: 560 },
        ),
      ],
      ['Access', access(members, { width: 380 })],
      ['Retention', retention(POLICY_ROWS, { status: 'All meetings', width: 350 })],
    ],
  }),

  sections: [
    statement(
      'Privacy starts with scope. Acumeet is designed to see as little as possible, use it only to create your meeting intelligence and give you control over what',
      'happens to it.',
    ),

    /** Tabs explorer + "Explorer · What Acumeet accesses, and what it does not" (48:339406) — 6 tabs. */
    explorer({ title: 'What Acumeet accesses, and what it', accent: 'does not' }, [
      [
        'What Acumeet accesses',
        'Meetings it is invited to, their audio and transcripts, and meeting details such as title, duration and participants.',
        transcript([
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
          [
            'Fredelina Augustus',
            '05:35',
            'I can coordinate with the InfoSec team to schedule that audit.',
          ],
        ]),
      ],
      [
        'What Acumeet does not access',
        'Email inboxes, Teams chat messages, SharePoint or OneDrive files, or anything outside the meetings it is invited to.',
        access(members, { width: 380 }),
      ],
      [
        'Inference only',
        'Your meeting data is not used to train public or shared AI models.',
        supplierAtlas,
      ],
      [
        'Restricted access',
        'Human access to AI processing environments is limited and logged.',
        audit(
          [
            ['10:48', 'Viewed transcript', 'Ruth Godwin'],
            ['10:28', 'Shared meeting record', 'Warith Abraham'],
            ['10:18', 'Changed role to Admin', 'Admin'],
            ['10:01', 'Downloaded recording', 'Fredelina Augustus'],
          ],
          { width: 360 },
        ),
      ],
      [
        'Your approval',
        'Any future use of customer data for training would need your explicit approval.',
        actions(
          5,
          [
            ['Confirm subprocessor list with procurement', 'Jun 7'],
            ['Update the cookie notice wording', 'This week'],
            ['Review the acceptable use clause', 'Jun 9'],
          ],
          { width: 400 },
        ),
      ],
      [
        'Your data, your ownership',
        'Your organisation owns its meeting data.',
        keys(['Configure', 'Configure']),
      ],
    ]),

    /** Checklist (48:337680). */
    docs(
      {
        title: 'Privacy',
        accent: 'documents',
        lead: 'Documents that explain how Acumeet handles personal data.',
        headPad: true,
      },
      [
        ['Privacy Policy', '#0e9aa7'],
        ['Data Processing Agreement', '#c2185b'],
        ['GDPR documentation', '#2185f6'],
        ['Enterprise Privacy Addendum', '#7c4ddb', 'shield-check'],
      ],
    ),
  ],

  related: exploreTrust(['certifications', 'overview']),

  cta: tcCta('Review our privacy approach', 'Request our privacy documentation for your review.'),
};
