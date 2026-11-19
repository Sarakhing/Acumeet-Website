import ring from '@/assets/images/solutions/atlas-orb-ring.svg';
import core from '@/assets/images/solutions/atlas-orb-core.svg';
import spark from '@/assets/images/solutions/atlas-spark-badge.svg';
import chatbot from '@/assets/images/home/cap-chatbot.png';
import chatbotMask from '@/assets/images/solutions/chatbot-mask.png';

/** Figma "Atlas/Avatar" (20px): orb ring + core, masked chatbot glyph, spark badge. */
export default function AtlasAvatar() {
  return (
    <span aria-hidden="true" className="relative block size-5 shrink-0">
      <img src={ring} alt="" width={20} height={20} className="absolute left-0 top-0 size-5 max-w-none" />
      <img src={core} alt="" width={17.5} height={17.5} className="absolute left-[1.25px] top-[1.25px] size-[17.5px] max-w-none" />
      <span
        className="absolute left-[4.06px] top-[5.41px] h-[9.796px] w-[11.875px] overflow-hidden"
        style={{
          maskImage: `url(${chatbotMask})`,
          WebkitMaskImage: `url(${chatbotMask})`,
          maskSize: '11.875px 9.796px',
          WebkitMaskSize: '11.875px 9.796px',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        <img src={chatbot} alt="" className="absolute left-0 top-[-9.76%] h-[121.22%] w-full max-w-none" />
      </span>
      <img src={spark} alt="" width={6.875} height={6.875} className="absolute left-[14.38px] top-[-1.25px] size-[6.875px] max-w-none" />
    </span>
  );
}
