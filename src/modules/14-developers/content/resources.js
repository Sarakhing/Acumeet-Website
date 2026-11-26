import { createElement as h } from 'react';
import { LinksPanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.10 · Developer Resources (Figma 49:157905). */
export default docsPage('resources', {
  eyebrow: 'Developer resources',
  lead: 'Find the approved technical materials, examples, and support channels needed to evaluate and maintain an Acumeet integration. This resource hub should bring the most useful developer links together in one place.',
  primary: { label: 'Explore developer resources', to: '#key-points' },
  secondary: CONTACT('Contact Acumeet'),
  panel: h(LinksPanel, {
    title: 'Developer resources',
    subtitle: 'Core technical resources',
    links: [
      'API Documentation',
      'Authentication',
      'REST APIs',
      'Webhooks',
      'Integration Guides',
      'SDKs',
      'API Reference',
    ],
  }),
  sections: [
    [
      'Core technical resources',
      'Provide direct links to API Documentation, Authentication, REST APIs, Webhooks, Integration Guides, SDKs, and API Reference, where each resource is available.',
    ],
    [
      'Release and change information',
      'If maintained, publish API release notes, version changes, deprecation notices, and service announcements relevant to developers.',
    ],
    [
      'Support and contribution',
      'Explain how developers can ask technical questions, report documentation problems, request a guide, or report an issue through approved channels.',
    ],
  ],
  points: [
    'Keep the resource hub current and remove stale links.',
    'Clearly distinguish official resources from third-party material.',
    'Provide an accountable support route and response expectations only when confirmed.',
  ],
  related: [
    'api',
    'apiDocumentation',
    'authentication',
    'restApis',
    'webhooks',
    'integrationGuides',
    'sdks',
    'apiReference',
  ],
  faq: [
    [
      'Where can I get help?',
      'Use the approved Acumeet developer support channel or contact the Acumeet team for access and integration questions.',
    ],
    [
      'Are release notes available?',
      'Link to release notes only if Acumeet maintains an approved, current source.',
    ],
    [
      'Can external developers contribute?',
      'Contribution routes and policies must be confirmed before inviting external contributions.',
    ],
  ],
});
