import AtlasAvatar from '@/components/visuals/AtlasAvatar';
import chatbotMask from '@/assets/images/solutions/atlas-chatbot-mask-29x24.png';
import chatbot from '@/assets/images/home/cap-chatbot.png';
import dotRed from '@/assets/images/solutions/chrome-dot-red.svg';
import dotAmber from '@/assets/images/solutions/chrome-dot-amber.svg';
import dotGreen from '@/assets/images/solutions/chrome-dot-green.svg';
import logo from '@/assets/images/products/workspace-logo-33x23.svg';
import icCollapse from '@/assets/images/products/workspace-ic-arrow-left-to-line-16.svg';
import rule51 from '@/assets/images/products/workspace-rule-51x1.svg';
import icHouse from '@/assets/images/products/workspace-ic-house-16.svg';
import icPresentation from '@/assets/images/products/workspace-ic-presentation-16.svg';
import icClipboardMinus from '@/assets/images/products/workspace-ic-clipboard-minus-16.svg';
import icClipboardCheck from '@/assets/images/products/workspace-ic-clipboard-check-16.svg';
import icUsers from '@/assets/images/products/workspace-ic-users-16.svg';
import icLayers from '@/assets/images/products/workspace-ic-layers-16.svg';
import icSettings from '@/assets/images/products/workspace-ic-settings-16.svg';
import meetingMark from '@/assets/images/products/workspace-meeting-mark-19x13.svg';
import logoTeams from '@/assets/images/products/workspace-logo-teams-11x10.svg';
import logoMeet from '@/assets/images/products/workspace-logo-meet-9x8.svg';
import icUsers8 from '@/assets/images/products/workspace-ic-users-8.svg';
import icUsers9 from '@/assets/images/products/workspace-ic-users-9.svg';
import icCircuit from '@/assets/images/products/workspace-ic-circuit-board-16.svg';
import icChevron from '@/assets/images/products/workspace-ic-chevron-down-16.svg';
import icCalendar from '@/assets/images/products/workspace-ic-calendar-16.svg';
import icCalendar9 from '@/assets/images/products/workspace-ic-calendar-9.svg';
import icClock9 from '@/assets/images/products/workspace-ic-clock-9.svg';
import icX from '@/assets/images/products/workspace-ic-x-16.svg';
import icExternal from '@/assets/images/products/workspace-ic-external-link-19.svg';
import icDownload from '@/assets/images/products/workspace-ic-download-19.svg';
import icShare from '@/assets/images/products/workspace-ic-share-23.svg';
import rule576 from '@/assets/images/products/workspace-rule-576x1.svg';
import sparkle10 from '@/assets/images/products/workspace-ic-sparkle-10.svg';
import sparkle6 from '@/assets/images/products/workspace-ic-sparkle-6.svg';
import sparkle5 from '@/assets/images/products/workspace-ic-sparkle-5.svg';
import emojiNotes from '@/assets/images/products/workspace-emoji-notes-13x16.svg';
import emojiPin from '@/assets/images/products/workspace-emoji-pin-12.svg';
import emojiMilestone from '@/assets/images/products/workspace-emoji-milestone-6x12.svg';

/*
 * Figma "05 · In the product" → "Product frame" (46:33509): a 1120×638 dark
 * window (chrome with traffic lights) showing the Acumeet "Meetings" screen
 * with the meeting-details drawer open over the list. Figma values are the
 * app's 0.778 scale (15.556 = 20 × 0.778…), kept as-is. Columns hidden behind
 * the drawer are not rendered; the drawer's scroll area clips like Figma.
 */

const Img = ({ src, w, h = w, className = '' }) => (
  <img src={src} alt="" width={w} height={h} className={`block max-w-none shrink-0 ${className}`} style={{ width: w, height: h }} />
);

const SIDE_ICONS = [
  { src: icHouse },
  { src: icPresentation, active: true },
  { src: icClipboardMinus },
  { src: icClipboardCheck },
  { rule: true },
  { src: icUsers },
  { src: icLayers },
  { src: icSettings },
];

function Sidebar() {
  return (
    <div className="absolute inset-y-0 left-0 flex w-[82.444px] flex-col items-center gap-[15.556px] bg-[#f1f6fa] p-[15.556px]">
      <div className="flex flex-col items-center gap-[18.667px]">
        <Img src={logo} w={32.667} h={23.333} />
        <Img src={icCollapse} w={15.556} />
      </div>
      <Img src={rule51} w={51.333} h={0.778} />
      {/* Atlas entry: gradient tile with the masked chatbot glyph */}
      <div className="rounded-[12.444px] bg-[linear-gradient(to_bottom,rgb(174_159_255/0.7),rgb(54_148_255/0.7))] px-[9.08px] py-[6.222px]">
        <span
          className="relative block h-[21.59px] w-[26.171px] overflow-hidden"
          style={{
            maskImage: `url(${chatbotMask})`,
            WebkitMaskImage: `url(${chatbotMask})`,
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
          }}
        >
          <img src={chatbot} alt="" className="absolute left-0 top-[-9.76%] h-[121.22%] w-full max-w-none" />
          <span className="absolute inset-0 bg-brand-blue mix-blend-saturation" />
        </span>
      </div>
      <Img src={rule51} w={51.333} h={0.778} />
      <div className="flex flex-col items-center gap-[12.444px]">
        {SIDE_ICONS.map((it, i) =>
          it.rule ? (
            <Img key={`rule-${i}`} src={rule51} w={51.333} h={0.778} />
          ) : (
            <span
              key={it.src}
              className={`flex w-[44.333px] justify-center rounded-[12.444px] px-[10.889px] py-[6.222px] ${it.active ? 'bg-[#e3ecf4]' : ''}`}
            >
              <Img src={it.src} w={15.556} />
            </span>
          ),
        )}
      </div>
    </div>
  );
}

const MeetingTile = ({ badge, badgeW, badgeH, badgeX, badgeY, w, h, bg }) => (
  <span
    className="relative flex shrink-0 items-center justify-center rounded-[6.222px] border-[0.778px] border-[#d9d9d9]"
    style={{ width: w, height: h, background: bg }}
  >
    <Img src={meetingMark} w={18.667} h={13.222} />
    <img src={badge} alt="" className="absolute max-w-none" style={{ left: badgeX, top: badgeY, width: badgeW, height: badgeH }} />
  </span>
);

function MeetingsList() {
  return (
    <>
      {/* Top bar */}
      <div className="absolute left-[82.444px] right-0 top-0 h-[62.222px] border-b-[0.778px] border-[#f1f6fa]">
        <p className="absolute left-[31.111px] top-[23.111px] text-[15.556px] font-medium leading-[15.556px] tracking-[0.078px] text-[#707070]">
          Meetings
        </p>
        <div className="absolute left-[201.444px] top-[12.833px] h-[36.556px] w-[600.444px] rounded-[77px] border-[0.778px] border-[#f1f6fa] bg-white">
          <span className="absolute left-[18.667px] top-[7.5px]">
            <AtlasAvatar />
          </span>
          <span className="absolute left-[163.74px] top-[9.5px] whitespace-nowrap text-[10.889px] leading-[15.556px] tracking-[0.054px] text-[#a4a9b5]">
            Ask Atlas anything about your conversations
          </span>
        </div>
      </div>
      {/* Tabs */}
      <div className="absolute left-[113.555px] top-[96px] flex items-end gap-[11.667px] text-[12.444px] leading-[15.556px] tracking-[0.062px]">
        <span className="p-[7.778px] text-[#292d32]">All</span>
        <span className="p-[7.778px] text-[#292d32]">Upcoming</span>
        <span className="border-b-[0.778px] border-brand-blue p-[7.778px] text-brand-blue">Past</span>
      </div>
      <div className="absolute left-[82.444px] right-0 top-[127.556px] h-[0.778px] bg-[#f1f6fa]" />
      {/* Filters */}
      <div className="absolute left-[113.555px] top-[154px] flex items-center gap-[18.667px] text-[12.444px] leading-[15.556px] tracking-[0.062px] text-[#707070]">
        {[
          [icCircuit, 'All Sources'],
          [icCalendar, 'Date'],
        ].map(([ic, label]) => (
          <span key={label} className="flex items-center gap-[6.222px]">
            <Img src={ic} w={15.556} />
            {label}
            <Img src={icChevron} w={15.556} />
          </span>
        ))}
      </div>
      {/* Table */}
      <div className="absolute left-[113.555px] top-[190.222px] w-[944.222px]">
        <div className="flex h-[47.111px] items-center gap-[18.667px] rounded-t-[6.222px] bg-[#f5f5f5] px-[15.556px]">
          <span className="size-[12.444px] shrink-0 rounded-[3.111px] border-[0.778px] border-[#757575] bg-white" />
          <span className="p-[7.778px] text-[10.889px] font-medium leading-[15.556px] tracking-[0.054px] text-[#292d32]">Meeting</span>
        </div>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="flex h-[69.333px] items-center gap-[18.667px] border-b-[0.778px] border-[#f5f5f5] px-[15.556px]">
            <span className="size-[12.444px] shrink-0 rounded-[3.111px] border-[0.778px] border-[#e6ebf1] bg-white" />
            <span className="flex w-[303.333px] items-start gap-[7.778px] p-[7.778px]">
              <MeetingTile w={37.333} h={32.889} badge={logoTeams} badgeW={10.83} badgeH={10.111} badgeX={25.67} badgeY={21.78} />
              <span className="flex min-w-0 flex-1 flex-col gap-[3.111px]">
                <span className="whitespace-nowrap text-[12.444px] leading-none text-[#707070]">Weekly ProcureCentro Stand-up Call</span>
                <span className="flex items-center gap-[6.222px]">
                  <span className="flex items-center gap-[3.111px] rounded-[3.111px] bg-[#fafafa] px-[1.556px] py-[0.778px] text-[7.778px] leading-[15.556px] text-[#707070]">
                    <Img src={icUsers8} w={7.778} />9
                  </span>
                  <span className="whitespace-nowrap text-[10.889px] leading-none text-[#a4a9b5]">Caroline Wanjikwu</span>
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

const Insight = ({ time, title, text }) => (
  <div className="flex flex-col">
    <span className="text-[10.889px] leading-[18.667px] tracking-[0.054px] text-[#3694ff]">{time}</span>
    <span className="p-[3.889px] text-[12.444px] leading-[18.667px] tracking-[0.062px] text-[#292d32]">{title}</span>
    <ul className="list-disc p-[3.889px] text-[12.444px] leading-[18.667px] tracking-[0.062px] text-[#707070]">
      <li className="ms-[18.666px]">{text}</li>
    </ul>
  </div>
);

const NoteHeading = ({ icon, w, h, children }) => (
  <div className="flex items-center gap-[7.778px] p-[3.889px]">
    <Img src={icon} w={w} h={h} />
    <span className="text-[12.444px] font-medium leading-[18.667px] tracking-[0.062px] text-[#292d32]">{children}</span>
  </div>
);

function DetailsDrawer() {
  return (
    <div className="absolute left-[482.222px] top-0 flex h-[607.667px] w-[637.778px] flex-col gap-[12.444px] overflow-hidden rounded-[6.222px] bg-white pt-[15.556px] shadow-[0_16px_32px_-4px_rgb(12_12_13/0.1),0_4px_4px_-4px_rgb(12_12_13/0.05)]">
      <div className="flex flex-col items-end gap-[12.444px] px-[31.111px] shadow-[0_1.556px_1.556px_rgb(0_0_0/0.08)]">
        <Img src={icX} w={15.556} />
        <div className="flex w-full flex-col gap-[18.667px]">
          <div className="flex items-start gap-[12.444px]">
            <MeetingTile w={35} h={31.111} bg="#f5f5f5" badge={logoMeet} badgeW={9.437} badgeH={7.778} badgeX={24.89} badgeY={22.56} />
            <div className="flex flex-1 items-start justify-between">
              <div className="flex flex-col gap-[9.333px] text-[10.889px] leading-none">
                <p className="text-[18.667px] text-[#292d32]">Weekly ProcureCentro Stand-up Call</p>
                <span className="flex items-center gap-[6.222px] text-[#707070]">
                  <Img src={icCalendar9} w={9.333} />
                  Feb 10, 2026
                </span>
                <span className="flex items-center gap-[6.222px] text-[#707070]">
                  <Img src={icClock9} w={9.333} />
                  08:00 AM - 9:00 AM
                  <span className="text-[#a4a9b5]">· 1 hour</span>
                </span>
                <span className="flex items-center gap-[6.222px] text-[#a4a9b5]">
                  <span className="flex items-center gap-[3.111px] rounded-[3.111px] bg-[#fafafa] px-[3.111px] py-[1.556px] text-[9.333px] leading-[15.556px]">
                    <Img src={icUsers9} w={9.333} />9
                  </span>
                  Caroline Wanjikwu
                </span>
              </div>
              <div className="flex items-center gap-[12.444px]">
                <span className="flex size-[23.333px] items-center justify-center rounded-[3.111px] bg-[#f5f5f5]">
                  <Img src={icExternal} w={18.667} />
                </span>
                <span className="flex size-[23.333px] items-center justify-center rounded-[3.111px] bg-[#f5f5f5]">
                  <Img src={icDownload} w={18.667} />
                </span>
                <Img src={icShare} w={23.333} />
              </div>
            </div>
          </div>
          <Img src={rule576} w={575.556} h={0.778} />
        </div>
      </div>

      <div className="relative flex h-[444.889px] gap-[12.444px] overflow-hidden">
        <div className="flex min-w-0 flex-1 flex-col gap-[18.667px] px-[31.111px]">
          <div className="flex flex-col gap-[12.444px] border-b-[0.778px] border-[#d9d9d9] px-[7.778px] pb-[9.333px] pt-[7.778px]">
            <div className="flex items-center gap-[12.444px]">
              <span className="relative block h-[14.933px] w-[18.667px] shrink-0">
                <img src={sparkle10} alt="" className="absolute left-[0.32px] top-[2.35px] size-[10.241px] max-w-none" />
                <img src={sparkle6} alt="" className="absolute right-0 top-[0.92px] size-[6.222px] max-w-none" />
                <img src={sparkle5} alt="" className="absolute right-0 top-[10.25px] size-[4.667px] max-w-none" />
              </span>
              <span className="text-[10.889px] leading-[15.556px] tracking-[0.054px] text-[#707070]">Overview</span>
            </div>
            <p className="text-[12.444px] leading-[18.667px] tracking-[0.062px] text-[#707070]">
              The Weekly ProcureCentro Stand-up Call focused on opportunities to streamline procurement operations and improve
              vendor and inventory workflows. Faith Oluwale highlighted vendor onboarding delays, prompting a discussion around
              optimizing the approval process. Fredelina shared procurement data, revealing underused supplier contracts and
              proposing actionable insights. George introduced ERP automation efforts, while Warith flagged sync concerns,
              helping the team align on next steps to address these friction points and improve internal process velocity.
            </p>
          </div>
          <div className="flex flex-col gap-[12.444px] rounded-[6.222px] border-b-[0.778px] border-[#d9d9d9] p-[7.778px]">
            <div className="flex items-center gap-[12.444px]">
              <Img src={emojiNotes} w={12.963} h={15.556} />
              <span className="text-[10.889px] leading-[15.556px] tracking-[0.054px] text-[#707070]">Notes</span>
            </div>
            <div className="flex flex-col">
              <NoteHeading icon={emojiPin} w={12.444}>
                Key Insights
              </NoteHeading>
              <Insight
                time="(00:00 - 06:30)"
                title="Vendor Workflow Optimization"
                text="Faith showed strong interest in reworking the approval process to unblock onboarding speed."
              />
              <Insight
                time="(05:31 - 10:00)"
                title="Contract Utilization"
                text="Fredelina spotlighted analytics pointing to missed savings due to low supplier engagement."
              />
              <Insight
                time="(10:01 - 13:45)"
                title="Inventory Automation"
                text="George’s update on ERP syncing for stock movement was positively received as a scalable solution."
              />
              <NoteHeading icon={emojiMilestone} w={5.531} h={12.444}>
                Objections/Friction Points
              </NoteHeading>
            </div>
          </div>
        </div>
        <div className="shrink-0 pr-[6.222px]">
          <div className="h-[485.333px] w-[7.778px] rounded-[77.778px] bg-[#d9d9d9]" />
        </div>
      </div>
    </div>
  );
}

/** 1120×638 workspace window. Wrap in ScaleToFit width={1120}. */
export default function ProductsWorkspaceWindow() {
  return (
    <div
      aria-hidden="true"
      className="w-[1120px] overflow-hidden rounded-t-[14px] border border-b-0 border-[#2a2a36] bg-[#1c1c26] font-sans"
    >
      <div className="flex h-[29px] items-center gap-1.5 px-[13px]">
        <Img src={dotRed} w={9} />
        <Img src={dotAmber} w={9} />
        <Img src={dotGreen} w={9} />
      </div>
      <div className="relative h-[608.444px] overflow-hidden bg-white">
        <Sidebar />
        <MeetingsList />
        <DetailsDrawer />
      </div>
    </div>
  );
}
