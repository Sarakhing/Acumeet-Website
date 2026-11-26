import { createElement as h } from 'react';
import { HeadersPanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

const CHECKS = [
  'Use only documented authentication flows.',
  'Never embed server credentials in browser or mobile client code.',
  'Confirm scopes, token lifetimes, rotation, and revocation behaviour.',
];

/** 14.04 · Authentication (Figma 49:156820). */
export default docsPage('authentication', {
  eyebrow: 'Secure API access',
  lead: 'Authentication establishes which application or user is making a request; authorisation determines what that identity is allowed to access. Follow Acumeet’s approved authentication instructions and confirm the supported method before integrating.',
  primary: CONTACT('Review authentication requirements'),
  secondary: CONTACT('Request API access'),
  panel: h(HeadersPanel, {
    code: 'GET /meetings HTTP/1.1\nHost: api.acumeet.ai\nAuthorization: Bearer $ACUMEET_API_KEY',
    checks: CHECKS,
  }),
  sections: [
    [
      'Use the supported authentication method',
      'The exact method—such as API keys, OAuth 2.0, or another mechanism—must be stated in Acumeet’s current documentation. Do not assume a method is supported until confirmed.',
    ],
    [
      'Protect credentials',
      'Keep secrets out of source code, public repositories, client-side bundles, logs, screenshots, and ordinary messages. Use an approved secrets manager, restrict access, and rotate or revoke credentials when required.',
    ],
    [
      'Apply least privilege',
      'Grant the narrowest scope and permissions required for the integration. Separate development and production credentials where supported, and review access when responsibilities change.',
    ],
    [
      'Plan for failures and revocation',
      'Handle expired, invalid, or revoked credentials without exposing secrets. Log security-relevant events appropriately while avoiding sensitive payloads and credential values.',
    ],
  ],
  points: CHECKS,
  related: ['api', 'apiDocumentation'],
  faq: [
    [
      'Does Acumeet support OAuth 2.0?',
      'Confirm the supported authentication method and flow in the current Acumeet documentation.',
    ],
    [
      'Can I put an API key in frontend code?',
      'Do not expose confidential credentials in browser-delivered code. Follow Acumeet’s documented security model and keep server-side secrets protected.',
    ],
    [
      'How do I rotate or revoke credentials?',
      'Use the documented process for the supported credential type. If the process is not documented, request guidance from Acumeet before production use.',
    ],
  ],
});
