import { EMAIL, gsBreadcrumb, heroForm, NAME, ORG, role, textarea } from './getStarted';

/** 18.05 · Request a PoC (Figma 49:196527). */
export default {
  breadcrumb: gsBreadcrumb('Request a PoC'),
  sections: [
    heroForm(
      {
        eyebrow: 'Request a proof of concept',
        title: 'Evaluate Acumeet in your real business context',
        lead: 'A proof of concept gives your team a structured way to test Acumeet against agreed use cases and success criteria before a wider rollout.',
        value: { title: 'Define what success looks like before you start', body: null },
        steps: [
          ['Use case', 'Choose the meetings, teams or workflow to evaluate.'],
          ['Scope', 'Agree what the evaluation will and will not cover.'],
          [
            'Requirements',
            'Capture the integration, security, governance and operational needs that matter.',
          ],
          ['Success criteria', 'Agree how the evaluation will be assessed.'],
        ],
      },
      {
        fields: [
          NAME,
          EMAIL,
          ORG,
          role('e.g. Head of Operations'),
          textarea(
            'useCase',
            'What use case do you want to evaluate?',
            'e.g. Credit committee meetings',
          ),
          {
            name: 'scope',
            label: 'Which teams or meeting types are in scope?',
            placeholder: 'Teams, meeting types, number of users',
          },
          textarea(
            'requirements',
            'What requirements should we consider?',
            'Integration, security, governance, operational',
          ),
          textarea(
            'success',
            'What would a successful PoC prove for your organisation?',
            'Your success criteria',
          ),
        ],
        submit: 'Request a PoC',
        thanks:
          'Thanks. We have your PoC request. We will review your use case, scope and requirements before confirming next steps.',
      },
    ),
  ],
};
