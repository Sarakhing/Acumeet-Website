import { createElement as h } from 'react';
import { ReferencePanel } from '../components/panels';
import { CONTACT, DEVELOPERS, docsPage, link } from './developers';

/** 14.09 · API Reference (Figma 49:157693). */
export default docsPage('apiReference', {
  eyebrow: 'Endpoint reference',
  lead: 'The API Reference is the detailed source for supported endpoints, request and response schemas, permissions, status codes, and documented limits. Use it to validate implementation details rather than relying on assumptions or older examples.',
  primary: CONTACT('Open API Reference'),
  secondary: link('Read API Documentation', DEVELOPERS.apiDocumentation.to),
  panel: h(ReferencePanel, {
    response:
      '{\n  "meeting_id": "mtg_8f2c",\n  "title": "Weekly Stand-up Call",\n  "duration_minutes": 60,\n  "topics": ["Vendor approval", "ERP sync"],\n  "action_items": 3\n}',
    request:
      'curl https://api.acumeet.ai/v1/meetings/mtg_8f2c/summary \\\n  -H "Authorization: Bearer $ACUMEET_API_KEY"',
  }),
  sections: [
    [
      'Endpoint-level detail',
      'Each endpoint entry should identify method, path, purpose, required permissions, parameters, request body, response structure, and representative status codes.',
    ],
    [
      'Schemas and examples',
      'Provide consistent definitions for fields, data types, required and optional values, timestamps, identifiers, and nested objects. Examples must be synthetic or appropriately sanitised.',
    ],
    [
      'Versioning and deprecation',
      'Explain how API versions are identified, how changes are communicated, and how long deprecated operations remain supported, according to the approved policy.',
    ],
  ],
  points: [
    'Keep the reference generated from or checked against the implementation where possible.',
    'Document permissions and errors for every operation.',
    'Show version and deprecation information clearly.',
  ],
  related: ['apiDocumentation', 'restApis', 'authentication'],
  faq: [
    [
      'Is the API Reference the same as the quickstart?',
      'No. A quickstart helps developers begin; the reference provides detailed, endpoint-level specifications.',
    ],
    [
      'How often is the reference updated?',
      'The publication process should keep the reference aligned with supported releases. Confirm the current update and versioning policy with Engineering.',
    ],
    [
      'Can I rely on undocumented fields?',
      'No. Use documented fields and supported behaviour; undocumented behaviour may change without notice.',
    ],
  ],
});
