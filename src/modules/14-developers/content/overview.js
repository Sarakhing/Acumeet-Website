import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import {
  EndpointsPanel,
  EventPanel,
  HeadersPanel,
  QuickstartPanel,
  ReferencePanel,
} from '../components/panels';
import {
  ActionsVisual,
  AskVisual,
  BotVisual,
  EventVisual,
  MeetingsVisual,
  SummaryVisual,
} from '../components/useCaseVisuals';
import { CONTACT, DEV_KEYS, DEVELOPERS, devCta, faq, link } from './developers';

const D = DEVELOPERS;
const CONTACT_DEV = CONTACT('Contact the developer team');
const EXPLORE_API = link('Explore the API', D.api.to);

/** 14.01 · Developer Overview (Figma 49:155906). */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Developer Overview' }],

  sections: [
    /** D · Hero (49:155910). */
    {
      type: 'hero',
      title: 'Build workflows around',
      accent: 'meeting intelligence',
      lead: 'Explore how your applications and internal workflows may connect with Acumeet. Use the developer resources to understand available API capabilities, authentication requirements, event-driven integrations, and implementation guidance. Confirm current access and supported functionality with the Acumeet team.',
      primary: EXPLORE_API,
      secondary: CONTACT_DEV,
    },

    /** D · Start with the resource + "Dev · Resource accordion" (49:84026). */
    {
      type: 'accordion',
      title: 'Start with the resource that fits your task',
      lead: 'Use the API overview to understand the integration opportunity, API Documentation to get started, Authentication to understand secure access, REST APIs and API Reference for request-level detail, and Webhooks for event-driven workflows if supported.',
      items: [
        {
          title: 'API',
          tagline: D.api.tagline,
          body: 'Explore the Acumeet API as a way to assess programmatic access to meeting-derived information and supported platform capabilities.',
          cta: link('Open API', D.api.to),
          visual: h(EndpointsPanel, { width: 400 }),
        },
        {
          title: 'API Documentation',
          tagline: D.apiDocumentation.tagline,
          body: 'Use Acumeet’s API documentation to understand prerequisites, access setup, request structure, responses, errors, and implementation practices.',
          cta: link('Open API Documentation', D.apiDocumentation.to),
          visual: h(QuickstartPanel),
        },
        {
          title: 'Authentication',
          tagline: D.authentication.tagline,
          body: 'Authentication establishes which application or user is making a request; authorisation determines what that identity is allowed to access.',
          cta: link('Open Authentication', D.authentication.to),
          visual: h(HeadersPanel, {
            width: 460,
            code: 'GET /meetings HTTP/1.1\nHost: api.acumeet.ai\nAuthorization: Bearer $ACUMEET_API_KEY',
            checks: [
              'Use only documented authentication flows.',
              'Never embed server credentials in browser or mobile client code.',
              'Confirm scopes, token lifetimes, rotation, and revocation behaviour.',
            ],
          }),
        },
        {
          title: 'API Reference',
          tagline: D.apiReference.tagline,
          body: 'The API Reference is the detailed source for supported endpoints, request and response schemas, permissions, status codes, and documented limits.',
          cta: link('Open API Reference', D.apiReference.to),
          visual: h(ReferencePanel, {
            width: 480,
            response:
              '{\n  "meeting_id": "mtg_8f2c",\n  "title": "Weekly Stand-up Call",\n  "duration_minutes": 60,\n  "topics": ["Vendor approval", "ERP sync"],\n  "action_items": 3\n}',
            request:
              'curl https://api.acumeet.ai/v1/meetings/mtg_8f2c/summary \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY"',
          }),
        },
        {
          title: 'Webhooks',
          tagline: D.webhooks.tagline,
          body: 'Where supported, webhooks can notify your application when defined events occur, helping you trigger downstream workflows.',
          cta: link('Open Webhooks', D.webhooks.to),
          visual: h(EventPanel, { width: 460 }),
        },
      ],
    },

    /** D · Developer journey (49:156013). */
    {
      type: 'journey',
      eyebrow: 'Getting started',
      title: 'Developer journey',
      steps: [
        'Define the use case and the Acumeet data or actions your workflow needs.',
        'Confirm API access, supported endpoints, authentication method, and permissions.',
        'Build and test against the approved documentation and test environment, where available.',
        'Validate error handling, access controls, data minimisation, and operational monitoring.',
        'Deploy according to Acumeet’s access terms and your organisation’s governance requirements.',
      ],
    },

    /** D · Build on Acumeet + "Dev · API console" (49:85417). */
    {
      type: 'console',
      title: 'Build on',
      accent: 'Acumeet',
      lead: 'Bring meeting summaries, action items and AI search into your own tools with a simple REST API.',
      primary: CONTACT('Request API access'),
      secondary: link('Explore integrations', ROUTES.integrations),
    },

    /** D · Use cases + "Dev · Use-case carousel" (49:84371). */
    {
      type: 'usecases',
      eyebrow: 'Use cases',
      title: 'Make meeting outcomes useful beyond the meeting',
      lead: 'Acumeet turns meeting conversations into structured outputs such as summaries, decisions, action items, and searchable meeting knowledge. Developer integrations can help organisations connect those outputs to the systems and workflows their teams already use—where supported by the available API and permissions.',
      items: [
        {
          method: 'GET',
          path: '/meetings/{id}/summary',
          title: 'Get the AI summary, key topics and decisions for a meeting.',
          visual: h(SummaryVisual),
        },
        {
          method: 'GET',
          path: '/meetings/{id}/action-items',
          title: 'Pull assigned follow-ups into Jira, Asana or your own tracker.',
          visual: h(ActionsVisual),
        },
        {
          method: 'POST',
          path: '/ask',
          title: 'Ask a question across all your meetings and get an answer with citations.',
          visual: h(AskVisual),
        },
        {
          method: 'EVENT',
          path: 'summary.ready',
          title: 'Get a webhook the moment a meeting’s summary and tasks are ready.',
          visual: h(EventVisual),
        },
        {
          method: 'POST',
          path: '/bots',
          title: 'Send the Acumeet notetaker to a Zoom, Google Meet or Teams call.',
          visual: h(BotVisual),
        },
        {
          method: 'GET',
          path: '/meetings',
          title: 'List your recorded meetings with title, date, duration and participants.',
          visual: h(MeetingsVisual),
        },
      ],
    },

    /** D · Responsible integration (49:156137). */
    {
      type: 'responsible',
      title: 'Built for responsible integration',
      lead: 'Meeting content may include confidential or regulated information. Integrations should follow least-privilege access, use approved credentials and secret storage, minimise data transferred, and respect the access rights and retention policies applicable to the connected Acumeet environment.',
      items: [
        ['Least-privilege access', 'user-focus'],
        ['Approved credentials and secret storage', 'key'],
        ['Minimise data transferred', 'database'],
        ['Access rights and retention policies', 'clock-counter-clockwise'],
      ],
    },

    /** D · All developer resources (49:156213). */
    {
      type: 'directory',
      eyebrow: 'Developers',
      title: 'Explore Developers',
      items: DEV_KEYS.map((k) => ({ title: D[k].title, tagline: D[k].tagline, to: D[k].to })),
    },
  ],

  /** FAQ (49:156309). */
  faq: faq([
    [
      'Is the Acumeet API available to every customer?',
      'API availability, eligibility, access tiers, and any commercial requirements must be confirmed with Acumeet.',
    ],
    [
      'Can I build a custom integration?',
      'A custom integration may be possible where the required capability is supported. Confirm the available endpoints, permissions, and technical constraints before development.',
    ],
    [
      'Where do I find endpoints and request examples?',
      'Use the approved API Documentation and API Reference.',
    ],
    [
      'Does Acumeet provide SDKs?',
      'SDK availability and supported languages must be confirmed in the current developer resources.',
    ],
  ]),

  /** D · CTA panel (49:156320) sits after the FAQ — rendered via `afterFaq`. */
  afterFaq: {
    type: 'cta',
    title: 'Have a workflow in mind?',
    lead: 'Contact Acumeet to discuss API access, available integration capabilities, and the right starting point.',
    primary: CONTACT_DEV,
    secondary: EXPLORE_API,
    code: 'curl -X POST https://api.acumeet.ai/v1/bots \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY" \\\n  -d \'{ "meeting_url": "https://zoom.us/j/123456789" }\'\n\n{ "bot_id": "bot_41a9", "status": "joining" }',
  },

  cta: devCta('Build workflows around meeting intelligence.'),
};
