import { actions, CONNECTED, CRM_CONNECTED, integrations } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { ROUTES } from '@/constants/routes';
import { po, vendor } from './shared';
import { CONTACT, INTEGRATION_KEYS, INTEGRATIONS, splits } from './integrations';

/** 09.01 · Integration Overview (Figma 48:383883). No related row in Figma. */
export default {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Integration overview' }],

  /** 01 · Hero (726): integrations in an app window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Acumeet integrations',
    title: 'Bring meeting intelligence into the tools your',
    accent: 'teams already use.',
    lead: 'Acumeet turns conversations into organised meeting knowledge—summaries, decisions, and action items your teams can use beyond the meeting. Explore the platforms, productivity tools, identity systems, storage options, security services, analytics, and developer pathways that can connect your meeting workflows.',
    primary: { label: 'Explore integrations', to: '#find-your-integration' },
    secondary: CONTACT('Talk to our team'),
    window: integrations(CRM_CONNECTED, 6, { width: 500 }),
    overlay: actions(4, po(['Jun 12', 'Next week', 'Jun 22']), { width: 360, shadow: 'float' }),
    overlayY: 227,
    height: 726,
  }),

  sections: [
    /** Statement (48:383977). */
    {
      type: 'statement',
      tone: 'subtle',
      pattern: 'waveform',
      title: 'Your meetings should move',
      accent: 'work forward.',
      paragraphs: [
        'Your meetings should move work forward, not create another place to check. Acumeet helps teams capture what matters in a conversation and carry that context into the workflows where people collaborate, manage work, review performance, and make decisions.',
      ],
    },

    /** Index · Find Your Integration (48:383981). */
    {
      type: 'index',
      id: 'find-your-integration',
      title: 'Find your',
      accent: 'integration',
      lead: 'Explore integrations by the job they help your organisation do. Choose a category to learn about the intended connection, the workflow it supports, and the implementation details to confirm with your Acumeet team.',
      items: INTEGRATION_KEYS.map((k) => ({
        title: INTEGRATIONS[k].title,
        to: INTEGRATIONS[k].to,
        icon: INTEGRATIONS[k].icon,
      })),
    },

    ...splits([
      {
        title: 'From Conversation To Follow-Through',
        body: [
          'Capture the conversation. Organise the key points. Make decisions and next steps easier to find. Then connect meeting outcomes to the tools and processes your organisation uses to get work done.',
        ],
        visual: actions(3, vendor(['Next week', 'Jun 24', 'Fri']), { width: 440 }),
      },
      {
        title: 'Built for real-world enterprise workflows',
        body: [
          'Enterprise integration needs vary by environment. Our team can help assess your systems, security requirements, identity model, data-handling expectations, and target workflows before an integration is implemented.',
        ],
        visual: integrations(CONNECTED, 6),
      },
    ]),

    /** Directory · INTEGRATIONS (48:384209). */
    {
      type: 'directory',
      eyebrow: 'Integrations',
      title: 'Explore integrations',
      items: INTEGRATION_KEYS.map((k) => ({
        title: INTEGRATIONS[k].title,
        description: INTEGRATIONS[k].tagline,
        to: INTEGRATIONS[k].to,
      })),
    },
  ],

  cta: {
    title: 'Have a specific system or workflow in mind?',
    lead: 'Tell us what your team uses and what you need to connect.',
    primary: CONTACT('Discuss your integration needs'),
    secondary: null,
  },
};
