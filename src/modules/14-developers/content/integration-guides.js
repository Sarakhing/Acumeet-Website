import { createElement as h } from 'react';
import { StepsPanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.07 · Integration Guides (Figma 49:157258). */
export default docsPage('integrationGuides', {
  eyebrow: 'Step-by-step guides',
  lead: 'Use task-focused guides to move from a defined business workflow to a tested integration. Each guide should list prerequisites, permissions, verified steps, sample requests, expected results, and troubleshooting advice.',
  primary: CONTACT('Browse integration guides'),
  secondary: CONTACT('Suggest a guide'),
  panel: h(StepsPanel, {
    title: 'Guides organised by outcome',
    steps: [
      'Connecting a supported system',
      'Retrieving supported meeting outputs',
      'Responding to events',
      'Sending approved information to another workflow',
    ],
  }),
  sections: [
    [
      'Guides organised by outcome',
      'Organise guides around what developers are trying to achieve, such as connecting a supported system, retrieving supported meeting outputs, responding to events, or sending approved information to another workflow.',
    ],
    [
      'Clear prerequisites and tested steps',
      'Each guide should specify required access, configuration, scopes, dependencies, environment setup, and the expected result at every important step.',
    ],
    [
      'Troubleshoot common issues',
      'Include common authentication and permission failures, validation errors, rate-limit responses, configuration mistakes, and a clear path to support.',
    ],
  ],
  points: [
    'Use one guide per practical task.',
    'Test code samples against the current API before publishing.',
    'Keep examples secure, minimal, and easy to adapt.',
  ],
  related: ['apiDocumentation', 'restApis', 'webhooks', 'sdks'],
  faq: [
    [
      'Which integrations are covered?',
      'Publish only guides for integrations and API workflows that Acumeet currently supports.',
    ],
    [
      'Can I request a new guide?',
      'Yes—contact the Acumeet team with the workflow and technical questions you need the guide to address.',
    ],
    [
      'Are code examples production-ready?',
      'Examples should state whether they are illustrative or production-ready and should be tested and reviewed before publication.',
    ],
  ],
});
