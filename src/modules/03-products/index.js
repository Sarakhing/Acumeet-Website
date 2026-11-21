import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 03 · Products module (Figma section "03. Products", 46:30442). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 */
const rel = (path) => path.replace(/^\//, '');
const P = ROUTES.product;

const ProductOverviewPage = lazy(() => import('./pages/ProductOverviewPage'));
const MeetingCapturePage = lazy(() => import('./pages/MeetingCapturePage'));
const AiTranscriptionPage = lazy(() => import('./pages/AiTranscriptionPage'));
const AiMeetingSummariesPage = lazy(() => import('./pages/AiMeetingSummariesPage'));
const ActionItemManagementPage = lazy(() => import('./pages/ActionItemManagementPage'));
const SpeakerRecognitionPage = lazy(() => import('./pages/SpeakerRecognitionPage'));
const AiRedactionPage = lazy(() => import('./pages/AiRedactionPage'));
const AtlasPage = lazy(() => import('./pages/AtlasPage'));
const MeetingIntelligencePage = lazy(() => import('./pages/MeetingIntelligencePage'));
const KnowledgeRepositoryPage = lazy(() => import('./pages/KnowledgeRepositoryPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

export const productsRoutes = [
  { path: rel(P.overview), element: createElement(ProductOverviewPage) }, // 02.01 · 46:30443
  { path: rel(P.meetingCapture), element: createElement(MeetingCapturePage) }, // 02.02 · 46:37362
  { path: rel(P.aiTranscription), element: createElement(AiTranscriptionPage) }, // 02.03 · 46:37240
  { path: rel(P.aiMeetingSummaries), element: createElement(AiMeetingSummariesPage) }, // 02.04 · 46:35486
  { path: rel(P.actionItemManagement), element: createElement(ActionItemManagementPage) }, // 02.05 · 46:38621
  { path: rel(P.speakerRecognition), element: createElement(SpeakerRecognitionPage) }, // 02.06 · 46:39919
  { path: rel(P.aiRedaction), element: createElement(AiRedactionPage) }, // 02.07 · 46:40048
  { path: rel(P.atlas), element: createElement(AtlasPage) }, // 02.08 · 46:41403
  { path: rel(P.meetingIntelligence), element: createElement(MeetingIntelligencePage) }, // 02.09 · 46:41646
  { path: rel(P.knowledgeRepository), element: createElement(KnowledgeRepositoryPage) }, // 02.10 · 46:43025
  { path: rel(P.analytics), element: createElement(AnalyticsPage) }, // 02.11 · 46:43428
];
