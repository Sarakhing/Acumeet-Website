import { capture, decisions } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { exploreResources, pricingSearch, RELATED, resBreadcrumb, resCta } from './resources';

const TITLE = 'Everything you need to work with Acumeet';

/** 13.12 · Acumeet Documentation (Figma 49:140194). Doc pages are not built, so tiles are not links. */
export default {
  breadcrumb: resBreadcrumb('Acumeet documentation'),

  /** 01 · Hero + "Hero carousel · 13.12 · Acumeet Documentation" (49:81359). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Documentation',
    title: TITLE,
    lead: 'Setup guidance and product documentation.',
    primary: { label: 'Open documentation', to: '#docs' },
    secondary: { label: 'Contact support', to: ROUTES.support },
  },
  carousel: [
    {
      label: 'Search',
      content: pricingSearch(
        [
          ['Policy Handover', 'May 27'],
          ['Programme Retrospective', 'Jun 10'],
          ['Knowledge Sharing Session', 'Apr 19'],
        ],
        560,
      ),
    },
    {
      label: 'Meetings',
      content: capture(
        'Mon, May 12',
        [
          ['Leadership Offsite', '3:30 PM · Teams'],
          ['Policy Handover', '10:30 AM · Zoom'],
          ['Programme Retrospective', '11:00 AM · Meet'],
        ],
        { width: 560 },
      ),
    },
    {
      label: 'Decisions',
      content: decisions(
        'Jun 9',
        ['Tag all committee meetings by topic', 'Keep retrospectives in one folder'],
        'Knowledge lost when owners change roles',
        ['Decisions', 'Lessons learned', 'Policies', 'Onboarding'],
        560,
      ),
    },
  ],

  sections: [
    /** Index · documentation areas (49:140225). */
    {
      type: 'index',
      id: 'docs',
      items: [
        {
          title: 'Getting started',
          body: 'Set up Acumeet and connect your first meeting platform.',
          link: 'Explore',
        },
        {
          title: 'Meeting platforms',
          body: 'Microsoft Teams, Zoom, Google Meet and Webex setup.',
          link: 'Explore',
        },
        { title: 'Features', body: 'Transcription, summaries, action items and Atlas.' },
        {
          title: 'Administration',
          body: 'Users, roles, workspaces and retention.',
          link: 'Explore',
        },
        { title: 'Security and privacy', body: 'Access, encryption, redaction and data handling.' },
        { title: 'API and webhooks', body: 'Read meeting records and trigger your own workflows.' },
        {
          title: 'Popular articles',
          body: 'Add Acumeet to a Microsoft Teams meeting Set a retention period for your workspace Configure custom redaction rules Assign roles and permissions Export a meeting record as PDF or DOCX',
        },
      ],
    },
  ],

  related: exploreResources(RELATED),
  cta: resCta(TITLE),
};
