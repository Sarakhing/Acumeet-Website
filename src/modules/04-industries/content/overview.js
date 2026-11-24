import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import { AVATARS } from '@/components/visuals/people';
import IndustriesHeroVisual from '../components/visuals/IndustriesHeroVisual';
import { INDUSTRIES, exploreIndustries, linkCard } from './industries';

/** 04.00 · Industries Overview (Figma 48:287759). */
export const industriesOverview = {
  breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: 'Industries Overview' }],

  /** 01 · Hero (48:287762) — 707 tall, no CTAs. */
  hero: {
    eyebrow: 'Industries',
    eyebrowStyle: 'chip',
    pattern: 'hairlines',
    title: 'Meeting Intelligence for Complex, High-Stakes Work',
    titleSize: 54,
    copyWidth: 580,
    copyTop: 56,
    padBottom: 105,
    leadWidth: 540,
    lead: [
      'Important work happens in meetings: teams review performance, coordinate projects, make decisions and agree on what happens next. Acumeet helps organisations turn these conversations into structured summaries, documented decisions, trackable actions and searchable meeting knowledge.',
      'Whether your teams manage telecommunications operations, public programmes, enterprise priorities or regulated workflows, Acumeet can help make meeting outcomes easier to retain, retrieve and act on.',
    ],
    visual: h(IndustriesHeroVisual),
    visualWidth: 680,
  },

  /** Tabs explorer (48:287923) + "✓ Explorer · Explore Industries" (48:264517; tab 1 overridden on the page). */
  explorer: {
    title: 'Explore',
    accent: 'Industries',
    items: [
      {
        title: 'Telecommunications',
        body: 'Support operational reviews, network and infrastructure projects, vendor discussions and cross-functional decisions with structured meeting records.',
        link: { to: INDUSTRIES.telecommunications.to },
        tint: 'lilac',
        pattern: { type: 'dots', size: 'explorer' },
        visual: h(DecisionsCard, {
          width: 480,
          date: 'Jun 9',
          rows: [
            { kind: 'decision', text: 'Approve the Q3 operating priorities' },
            { kind: 'decision', text: 'Defer the regional expansion review to Q4' },
            { kind: 'risk', text: 'Delayed delivery of the core banking upgrade' },
          ],
          topics: ['Hiring', 'Expansion', 'Board pack', 'Priorities'],
        }),
      },
      {
        title: 'Public Sector',
        body: 'Help teams document programme discussions, stakeholder meetings, policy conversations and agreed actions with a clearer record of outcomes.',
        link: { to: INDUSTRIES.publicSector.to },
        tint: 'pink',
        pattern: { type: 'rings', size: 'explorer' },
        visual: h(ActionItemsCard, {
          width: 480,
          open: 4,
          avatarSize: 20,
          shadow: 'mock',
          tasks: [
            { title: 'Prepare the quarterly progress report', due: 'Next week', avatar: AVATARS['Faith Oluwale'] },
            { title: 'Circulate minutes to participating agencies', due: 'Jun 14', avatar: AVATARS['Warith Abraham'] },
            { title: 'Confirm budget release for phase two', due: 'Jun 7', avatar: AVATARS['Ruth Godwin'] },
          ],
        }),
      },
      {
        title: 'Enterprise',
        body: 'Connect leadership priorities, cross-functional projects and organisational knowledge through consistent meeting documentation and follow-up.',
        link: { to: INDUSTRIES.enterprise.to },
        tint: 'blue',
        pattern: { type: 'hairlines', size: 'explorer' },
        visual: h(SummaryCard, {
          width: 480,
          title: 'Board Meeting · Q3',
          scores: [
            { label: 'Quality', value: 71, bar: 'amber' },
            { label: 'Sentiment', value: 81, bar: 'green' },
            { label: 'Engagement', value: 45, bar: 'blue' },
          ],
          insights: [
            'Finance flagged budget pressure from currency movements.',
            'Department heads will report progress at the next meeting.',
          ],
        }),
      },
      {
        title: 'Other Regulated Industries',
        body: 'Support organisations that need structured meeting records, controlled handling of information and clearer accountability across important discussions.',
        link: { to: INDUSTRIES.otherRegulated.to },
        tint: 'mint',
        pattern: { type: 'waveform', size: 'explorer' },
        visual: h(KnowledgeSearchCard, {
          width: 480,
          query: 'regulator query response',
          results: [
            { meeting: 'Compliance Committee', date: 'Jun 23', excerpt: '…owners assigned to open regulator queries.' },
            { meeting: 'Regulatory Reporting Review', date: 'Apr 6', excerpt: '…policy draft circulated for sign-off.' },
            { meeting: 'Policy Review Meeting', date: 'May 15', excerpt: '…training completion reviewed for new staff.' },
          ],
        }),
      },
    ],
  },

  /** Directory · INDUSTRIES (48:287927). */
  directory: {
    eyebrow: 'Industries',
    title: 'Explore Industries',
    items: ['financialServices', 'telecommunications', 'publicSector', 'enterprise', 'otherRegulated'].map(linkCard),
  },

  /** Explore more (48:287937). */
  related: exploreIndustries(['financialServices', 'banking', 'insurance', 'executiveMeetings']),

  /** CTA band (48:287946) — headline + single button; Figma keeps the sub-line as a blank line (keeps its spacing). */
  cta: {
    title: 'Meeting Intelligence for Complex, High-Stakes Work',
    lead: '\u00a0',
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: null,
  },
};
