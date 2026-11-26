import { createElement as h } from 'react';
import { EndpointsPanel } from '../components/panels';
import { CONTACT, DEVELOPERS, docsPage, link } from './developers';

/** 14.02 · API (Figma 49:156383). */
export default docsPage('api', {
  eyebrow: 'Acumeet API',
  lead: 'Explore the Acumeet API as a way to assess programmatic access to meeting-derived information and supported platform capabilities. The exact resources and operations available depend on the current API, permissions, and approved access arrangement.',
  primary: CONTACT('Discuss API access'),
  secondary: link('Read API Documentation', DEVELOPERS.apiDocumentation.to),
  panel: h(EndpointsPanel, { width: 480 }),
  sections: [
    [
      'What an API integration can enable',
      'A supported API can provide a structured way for applications to exchange information or initiate actions. Start from a clear use case and verify that the required Acumeet capability is exposed through the current API.',
    ],
    [
      'Design around permissions and data needs',
      'Define which data the integration needs, why it needs it, and which user or service identity should be authorised. Request only the minimum access necessary.',
    ],
    [
      'Check readiness before building',
      'Before implementation, confirm API availability, versioning, environment access, authentication, rate limits, error responses, pagination, and support arrangements in the official documentation.',
    ],
  ],
  points: [
    'Validate endpoint availability before committing to a design.',
    'Use least-privilege access and protect credentials.',
    'Treat the current API reference as the source of truth.',
  ],
  related: ['apiDocumentation', 'restApis', 'apiReference'],
  faq: [
    [
      'What can the Acumeet API do?',
      'The supported capabilities are defined by the current API documentation. Confirm the specific resource or operation required for your use case.',
    ],
    [
      'How do I obtain access?',
      'Contact Acumeet to confirm eligibility, onboarding steps, credentials, and any access requirements.',
    ],
    [
      'Are API limits documented?',
      'Rate limits, quotas, payload limits, and pagination behaviour should be confirmed in the official documentation.',
    ],
  ],
});
