import { createElement as h } from 'react';
import { CodePanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.05 · REST APIs (Figma 49:155704). */
export default docsPage('restApis', {
  eyebrow: 'REST API integration',
  lead: 'REST APIs provide a familiar pattern for applications to exchange data over HTTP. Use Acumeet’s official endpoint documentation to confirm available resources, methods, schemas, permissions, and expected responses.',
  primary: CONTACT('Explore REST API documentation'),
  secondary: CONTACT('Discuss an integration'),
  panel: h(CodePanel, {
    title: 'GET /meetings/{id}/action-items',
    width: 520,
    code: 'curl https://api.acumeet.ai/v1/meetings/mtg_8f2c/action-items \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY"\n\n// response\n\n{\n  "data": [{\n    "task": "Review vendor approval cycle",\n    "assignee": "Faith",\n    "status": "open"\n  }]\n}',
  }),
  sections: [
    [
      'Use documented resources and methods',
      'Each supported endpoint should specify its HTTP method and path, purpose, required permissions, inputs, output schema, and expected status codes. Build only against documented operations.',
    ],
    [
      'Handle responses safely',
      'Implement appropriate handling for success responses, validation errors, authentication failures, permission errors, rate limiting, and service errors. Follow documented retry guidance rather than retrying every failure indiscriminately.',
    ],
    [
      'Design for reliability',
      'Where relevant, account for pagination, timeouts, duplicate requests, idempotency, and API version changes. The exact behaviour must be verified from the current API reference.',
    ],
  ],
  points: [
    'Use schemas and examples from the current API reference.',
    'Handle errors and rate limits deliberately.',
    'Avoid assuming undocumented retry or idempotency behaviour.',
  ],
  related: ['apiReference', 'authentication', 'integrationGuides'],
  faq: [
    [
      'What endpoints are available?',
      'Consult the current Acumeet API Reference for the supported endpoint list.',
    ],
    [
      'Does the API support pagination?',
      'Check the endpoint documentation. Pagination behaviour may differ by resource and must not be assumed.',
    ],
    [
      'Can I retry failed requests?',
      'Follow documented retry rules and any idempotency guidance. Avoid retrying non-retryable errors or creating duplicate operations.',
    ],
  ],
});
