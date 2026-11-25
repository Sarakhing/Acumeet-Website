import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import { AVATARS } from '@/components/visuals/people';
import HeroCanvas from '../components/visuals/HeroCanvas';
import { INDUSTRIES } from './industries';

/**
 * Builders shared by the Industries detail pages (FS sub-pages 04.02–04.12 and
 * 04.13–04.16). Figma mock-ups are data here so each content file stays short.
 */

/* Avatars: Figma uses the same three faces in every action-items card. */
const PEOPLE = ['Faith Oluwale', 'Warith Abraham', 'Ruth Godwin'];

/** "Decisions & topics": decisions(date, ['Decision', …], 'Risk text', ['topic', …], width). Last row is the risk. */
export const decisions = (date, decided, risk, topics, width = 480) =>
  h(DecisionsCard, {
    width,
    date,
    rows: [...decided.map((text) => ({ kind: 'decision', text })), { kind: 'risk', text: risk }],
    topics,
  });

/** "Action items": actions(open, [[title, due], …], { width, shadow }). */
export const actions = (open, tasks, { width = 480, shadow = 'mock' } = {}) =>
  h(ActionItemsCard, {
    width,
    open,
    shadow,
    avatarSize: 20,
    tasks: tasks.map(([title, due], i) => ({ title, due, avatar: AVATARS[PEOPLE[i % PEOPLE.length]] })),
  });

/** "Summary": summary(title, [quality, sentiment, engagement], [insight, …], { width, shadow }). */
export const summary = (title, [q, s, e], insights, { width = 440, shadow = 'mock' } = {}) =>
  h(SummaryCard, {
    width,
    shadow,
    title,
    scores: [
      { label: 'Quality', value: q, bar: 'amber' },
      { label: 'Sentiment', value: s, bar: 'green' },
      { label: 'Engagement', value: e, bar: 'blue' },
    ],
    insights,
  });

/** "Knowledge search": search(query, [[meeting, date, excerpt], …], { width, shadow }). */
export const search = (query, results, { width = 480, shadow = 'mock' } = {}) =>
  h(KnowledgeSearchCard, {
    width,
    shadow,
    query,
    results: results.map(([meeting, date, excerpt]) => ({ meeting, date, excerpt })),
  });

/** "Upcoming meetings": capture(date, [[title, meta], …], { width }). First row is recording. */
export const capture = (date, meetings, { width = 400, shadow = 'mock' } = {}) =>
  h(MeetingCaptureCard, { width, shadow, date, meetings: meetings.map(([title, meta]) => ({ title, meta })) });

/** Chrome app window wrapping a card (hero compositions). */
export const appWindow = (width, child) => h('div', { style: { width } }, h(AppWindow, null, child));

/** Frosted "Live in your workspace" chip. */
export const floatChip = (label = 'Live in your workspace') => h(FloatChip, null, label);

/** Hero visual: heroCanvas(height, [[x, y, node], …], width). */
export const heroCanvas = (height, items, width = 660) =>
  h(HeroCanvas, { width, height, items: items.map(([x, y, node]) => ({ x, y, node })) });

/* Industries explorer panels are positional: lilac dots, pink rings, blue hairlines, mint waveform. */
const PANELS = [
  { tint: 'lilac', pattern: { type: 'dots', size: 'explorer' } },
  { tint: 'pink', pattern: { type: 'rings', size: 'explorer' } },
  { tint: 'blue', pattern: { type: 'hairlines', size: 'explorer' } },
  { tint: 'mint', pattern: { type: 'waveform', size: 'explorer' } },
];

/** Explorer items [{ title, body, visual }] → with positional tint/pattern. */
export const explorerItems = (items) => items.map((it, i) => ({ ...PANELS[i % PANELS.length], ...it }));

/** Breadcrumb for an FS sub-page: Home / Industries / Financial Services / {page}. */
export const fsBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Industries Overview', to: INDUSTRIES.overview.to },
  { label: 'Financial Services', to: INDUSTRIES.financialServices.to },
  { label },
];

/** Breadcrumb for a top-level industry page: Home / Industries / {page}. */
export const industryBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Industries Overview', to: INDUSTRIES.overview.to },
  { label },
];

/** The two outlined buttons under every info note. */
export const NOTE_CTAS = [
  { label: 'Book a Demo', to: ROUTES.bookDemo },
  { label: 'Contact Our Team', to: ROUTES.contactSales },
];
