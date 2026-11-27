import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import TranscriptCard from '@/components/visuals/TranscriptCard';

/**
 * Meeting Capture hero composition (Figma 46:37365): 600px App window with a
 * 500px "Upcoming meetings" card, the floating 360px transcript overlapping
 * its lower left and the "Live in your workspace" float chip top right.
 * Fixed 665×700 canvas whose origin is the hero's visual column (x=700, y=64
 * in the 1440 frame), so window / transcript / chip land at Figma
 * (760,100) / (700,366) / (1180,64). The last 64px is room for the transcript
 * float shadow (ScaleToFit clips overflow). SolutionHero: visualWidth={665}.
 */
export default function MeetingCaptureHeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-[700px] w-[665px]">
      <AppWindow className="absolute left-[60px] top-9 w-[600px]">
        <MeetingCaptureCard
          width={500}
          date="Wed, Jun 20"
          meetings={[
            { title: 'Product Development Sync-Up', meta: '2:00 PM · Meet' },
            { title: 'Client feedback analysis session', meta: '4:00 PM · Teams' },
            { title: 'Weekly ProcureCentro Stand-up', meta: '9:00 AM · Zoom' },
          ]}
        />
      </AppWindow>
      <TranscriptCard
        width={360}
        shadow="float"
        className="absolute left-0 top-[302px]"
        lines={[
          {
            name: 'Faith Oluwale',
            time: '31:08',
            text: 'Vendor approvals are taking nine days on average. That’s where onboarding stalls.',
          },
          {
            name: 'George Nwokoro',
            time: '32:15',
            text: 'If we pilot automated POs on recurring items, we cut most of that wait.',
          },
          {
            name: 'Fredelina Augustus',
            time: '33:22',
            text: 'Let’s agree the pilot scope today and review results in two weeks.',
          },
        ]}
      />
      <FloatChip className="absolute left-[480px] top-0">Live in your workspace</FloatChip>
    </div>
  );
}
