import { capture, CONNECTED, integrations, transcript } from '@/components/visuals/mocks';
import { MEETINGS, SPRINT, supDecisions, supplierAtlas, tasks } from './shared';
import {
  CONTACT_SUPPORT,
  cta,
  explorer,
  exploreSupport,
  link,
  RELATED,
  serviceStatus,
  statement,
  supBreadcrumb,
} from './support';
import { ROUTES } from '@/constants/routes';

const SUBSCRIBE = link('Subscribe to updates', ROUTES.contactSales);

/** 15.15 · Service Status (Figma 49:168369). Sample status data until the live feed is connected. */
export default {
  breadcrumb: supBreadcrumb('Service Status'),

  /** 01 · Hero + "Hero carousel · 15.15 · Service Status" (49:92502). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Support  ·  Service Status',
    title: 'Service status',
    lead: 'Current availability, incidents and maintenance.',
    primary: SUBSCRIBE,
    secondary: CONTACT_SUPPORT,
  },
  carousel: [
    { label: 'Status', content: serviceStatus({ width: 420 }) },
    {
      label: 'Action items',
      content: tasks(
        5,
        [
          ['guide', 'Fri'],
          ['sso', 'Next week'],
          ['follow', 'Jun 14'],
        ],
        { width: 560, footer: false },
      ),
    },
    {
      label: 'Decisions',
      content: supDecisions(
        'Jun 9',
        ['Escalate ticket #4821 to engineering', 'Enable SSO before rollout'],
        'Integration setup blocked on permissions',
        ['Tickets', 'Training', 'Release notes', 'Integrations'],
        560,
      ),
    },
  ],

  sections: [
    statement(
      'Check here first if something seems slow or unavailable. We post incidents and planned maintenance as they happen. [Component',
      'list to confirm.]',
    ),
    explorer({ title: 'Components', lead: 'Status of each part of the Acumeet service.' }, [
      ['Web app', 'Workspace, library and settings.', serviceStatus()],
      ['Meeting capture', 'Joining and recording meetings.', capture('Mon, Jun 8', MEETINGS)],
      ['Transcription', 'Live and post-meeting transcription.', transcript(SPRINT)],
      ['Atlas', '', supplierAtlas],
      ['Integrations', '', integrations(CONNECTED, 6)],
      ['API', '', integrations(CONNECTED, 6)],
    ]),

    /** Benefits · Recent incidents (49:168409) — Figma sample entries. */
    {
      type: 'cards',
      title: 'Recent',
      accent: 'incidents',
      lead: 'Sample entries. Connect to the live status feed before publishing.',
      titleSize: 44,
      columns: 2,
      accentBreak: false,
      cards: [
        {
          title: '[Date]',
          body: '[Incident title and resolution]',
          tint: 'lilac',
          pattern: { type: 'rings', size: 'card-wide' },
        },
        {
          title: '[Date]',
          body: '[Planned maintenance window]',
          tint: 'pink',
          pattern: { type: 'dots', size: 'card-wide' },
        },
      ],
    },
  ],

  related: exploreSupport(RELATED),
  cta: cta(
    'Get notified of incidents',
    'Subscribe to service status updates.',
    SUBSCRIBE,
    CONTACT_SUPPORT,
  ),
};
