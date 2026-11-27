import { createElement as h } from 'react';
import { redaction, transcript } from '@/components/visuals/mocks';
import TalkTimeCard from '@/modules/03-products/components/visuals/TalkTimeCard';
import { NIN } from '@/modules/12-compare/content/shared';
import { SPRINT, ssoSearch, supDecisions, supSummary, supplierAtlas, tasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  DEMO,
  explorer,
  exploreSupport,
  link,
  statement,
  supBreadcrumb,
} from './support';

/* Talk time shares (Faith, Fredelina, Ruth, George, Warith). */
const talk = h(TalkTimeCard, {
  duration: '52 min',
  width: 420,
  speakers: [
    { name: 'Faith Oluwale', share: 25, tone: 'magenta' },
    { name: 'Fredelina Augustus', share: 25, tone: 'blue' },
    { name: 'Ruth Godwin', share: 20, tone: 'green' },
    { name: 'George Nwokoro', share: 15, tone: 'purple' },
    { name: 'Warith Abraham', share: 15, tone: 'amber' },
  ],
});

/** 15.05 · Feature Guides (Figma 49:167407). */
export default {
  breadcrumb: supBreadcrumb('Feature guides'),

  /** 01 · Hero + "Hero carousel · 15.05 · Feature Guides" (49:88436). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Support  ·  Feature guides',
    title: 'Feature guides',
    lead: 'Learn transcription, summaries, action items, speaker recognition, Redaction AI and Atlas.',
    primary: link('Browse guides', '#guides'),
    secondary: CONTACT_SUPPORT,
  },
  carousel: [
    {
      label: 'Search',
      content: ssoSearch(
        [
          ['Service Review', 'Apr 22'],
          ['Customer Onboarding Call', 'May 5'],
          ['Support Escalation Review', 'Jun 14'],
        ],
        560,
      ),
    },
    {
      label: 'Action items',
      content: tasks(
        5,
        [
          ['guide', 'Jun 9'],
          ['sso', 'Today'],
          ['follow', 'Jun 12'],
        ],
        { width: 560, footer: false },
      ),
    },
    {
      label: 'Decisions',
      content: supDecisions(
        'Jun 9',
        ['Enable SSO before rollout', 'Run admin training in two sessions'],
        'Delayed response on priority tickets',
        ['Integrations', 'Onboarding', 'SSO setup', 'Tickets'],
        560,
      ),
    },
  ],

  sections: [
    statement(
      'Each guide explains what a feature does, how to use it and how to get the',
      'most from it.',
    ),
    {
      ...explorer({ title: 'Guides by', accent: 'feature' }, [
        [
          'Transcription',
          'Live and post-meeting transcripts, timestamps and languages.',
          transcript(SPRINT),
        ],
        [
          'Summaries',
          'Read and adjust meeting summaries.',
          supSummary('Support Escalation Review', [71, 81, 25], ['setup', 'sso']),
        ],
        [
          'Action items',
          'Assign, track and report on actions.',
          tasks(
            3,
            [
              ['guide', 'Jun 12'],
              ['sso', 'Fri'],
              ['follow', 'Next week'],
            ],
            { width: 400 },
          ),
        ],
        ['Speaker recognition', 'Check and correct speaker labels.', talk],
        [
          'Redaction AI',
          'Set up and review redaction.',
          redaction(6, NIN, [
            ['NIN', '100%'],
            ['Phone number', '90%'],
          ]),
        ],
        ['Atlas', 'Ask questions and check sources.', supplierAtlas],
      ]),
      id: 'guides',
    },
  ],

  related: exploreSupport(['overview', 'gettingStarted']),
  cta: cta(
    'Can’t find what you need?',
    'Search the help centre or contact support.',
    CONTACT_SUPPORT,
    DEMO,
  ),
};
