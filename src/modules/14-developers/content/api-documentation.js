import { createElement as h } from 'react';
import { CodePanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.03 · API Documentation (Figma 49:156617). */
export default docsPage('apiDocumentation', {
  eyebrow: 'Documentation',
  lead: 'Use Acumeet’s API documentation to understand prerequisites, access setup, request structure, responses, errors, and implementation practices. The published documentation should reflect supported API behaviour and be kept in sync with releases.',
  primary: CONTACT('Open API Documentation'),
  secondary: CONTACT('Contact the developer team'),
  panel: h(CodePanel, {
    title: 'quickstart',
    width: 500,
    code: '# List your recorded meetings\n\ncurl https://api.acumeet.ai/v1/meetings \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY"\n\n// response\n\n{\n  "data": [{\n    "id": "mtg_8f2c",\n    "title": "Weekly Stand-up Call",\n    "participants": 9\n  }]\n}',
  }),
  sections: [
    [
      'Start with the quickstart',
      'A concise quickstart should show prerequisites, how to request access, how to configure credentials safely, and a minimal verified example that developers can run in an approved environment.',
    ],
    [
      'Understand requests and responses',
      'For each operation, document the method, path, required permissions, parameters, request schema, response schema, common errors, pagination, and relevant limits.',
    ],
    [
      'Build and troubleshoot confidently',
      'Include examples for common workflows, guidance for interpreting errors, versioning and deprecation policies, and a route for reporting documentation issues.',
    ],
  ],
  points: [
    'Keep examples executable and tested against a supported environment.',
    'Clearly label required fields, optional fields, and permissions.',
    'Show common errors and safe troubleshooting steps.',
  ],
  related: ['authentication', 'restApis', 'apiReference'],
  faq: [
    [
      'Where are API examples?',
      'Examples should be provided in the official documentation and verified against the current API version.',
    ],
    [
      'Is there a sandbox or test environment?',
      'Availability and access instructions must be confirmed with Acumeet.',
    ],
    [
      'How do I report a documentation issue?',
      'Provide a contact or issue-reporting route approved by the Acumeet team.',
    ],
  ],
});
