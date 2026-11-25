import { useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
import videoPreview from '@/assets/images/home/in-practice-video.gif';

const FILE_VIDEO = /\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/i;

/**
 * Figma "Video · Acumeet in practice" (46:9099). Shows the animated preview
 * without a play icon (removed at the client's request). When `videoSrc` is
 * supplied, clicking the preview swaps in a <video> (file URLs) or an
 * <iframe> (embed URLs); without a source the preview is just an image.
 */
function VideoPlayer({ videoSrc, title }) {
  const [playing, setPlaying] = useState(false);
  const canPlay = Boolean(videoSrc);
  const isFile = canPlay && FILE_VIDEO.test(videoSrc);
  const preview = (
    <img
      src={videoPreview}
      alt={canPlay ? '' : title}
      width={1120}
      height={630}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 size-full object-cover"
    />
  );

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-[rgb(227_227_232/0.5)] bg-surface-white shadow-[0_24px_64px_-4px_rgb(11_11_18/0.14),0_1px_2px_0_rgb(11_11_18/0.08)] sm:rounded-[24px]">
      {playing && canPlay ? (
        isFile ? (
          <video src={videoSrc} title={title} controls autoPlay playsInline className="absolute inset-0 size-full bg-ink-800 object-cover" />
        ) : (
          <iframe
            src={videoSrc}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        )
      ) : canPlay ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 block size-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          {preview}
        </button>
      ) : (
        preview
      )}
    </div>
  );
}

/**
 * Figma "10 · Enterprise AI in practice" (46:9093).
 * Not built: the hidden "Product frame (replaced by video)" (46:9100) and the
 * hidden "Logos" row (46:10118).
 */
export default function InPracticeSection({ videoSrc } = {}) {
  return (
    <section
      aria-labelledby="in-practice-title"
      className="bg-ink-800 py-20 text-ink-on-dark sm:py-24 lg:py-[120px]"
    >
      <Container className="flex flex-col items-center gap-10 text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
          <h2
            id="in-practice-title"
            className="text-balance text-[32px] leading-[1.12] font-medium tracking-[-0.9px] text-white sm:text-[40px] lg:text-[48px] lg:tracking-[-1.44px]"
          >
            Enterprise AI Meeting Intelligence in Practice
          </h2>
          <div className="flex max-w-[878px] flex-col gap-4 text-body leading-[1.35] tracking-[-0.18px] text-[#b4b4c6] sm:text-[18px]">
            <p>
              Acumeet is an enterprise AI meeting assistant designed to help organisations capture
              meeting information, organise decisions and make meeting outcomes more actionable.
            </p>
            <p>
              As businesses explore AI meeting software for businesses, Acumeet provides an
              opportunity to evaluate how AI meeting intelligence for enterprises can support
              business workflows, improve access to meeting knowledge and help teams manage
              information more effectively.
            </p>
          </div>
          <Button
            to={ROUTES.products}
            intent="ghost-light"
            className="border-border-default! hover:bg-white/10"
          >
            Explore Acumeet
          </Button>
        </div>

        <div className="w-full max-w-[1120px]">
          <VideoPlayer videoSrc={videoSrc} title="Acumeet in practice" />
        </div>

        <p className="max-w-[760px] text-body leading-[1.35] tracking-[-0.18px] text-[#b4b4c6] sm:text-[18px]">
          With a focus on enterprise needs, Acumeet brings meeting intelligence together with
          security and governance considerations to support organisations exploring a secure AI
          meeting platform.
        </p>
      </Container>
    </section>
  );
}
