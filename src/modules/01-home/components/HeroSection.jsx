import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
import heroBand from '@/assets/images/home/hero-band-gradient.jpg';
import heroPoster from '@/assets/images/home/hero-video-poster.jpg';
import heroStill from '@/assets/images/home/hero-video-still.jpg';
import heroVideo from '@/assets/videos/home-hero.mp4';

/**
 * Figma "01 · Hero" (46:8423) + load-in from "Live · Home · Hero load-in" (46:11494).
 * The band is the gradient frame; its "Product shot · dashboard" layer (1088 × 624, 40px in)
 * holds the product walkthrough video (acumeet-hero-v5), which slides 48px up and fades in.
 * The video autoplays muted on a loop and pauses while off screen. With reduced motion it
 * does not autoplay and shows a dashboard frame instead.
 */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function HeroVideo() {
  const ref = useRef(null);
  const [reduced] = useState(prefersReducedMotion);

  // Play only while the video is on screen (saves CPU/battery once the visitor scrolls on).
  useEffect(() => {
    const v = ref.current;
    if (!v || reduced || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      src={heroVideo}
      poster={reduced ? heroStill : heroPoster}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload={reduced ? 'none' : 'auto'}
      aria-label="Acumeet product walkthrough: Acumeet joins a meeting, transcribes it live, then shows the summary, action items, analytics and the Atlas assistant"
      className="size-full object-cover"
    />
  );
}

// Radial glows from the Figma fill, expressed relative to the 1440×1239 frame.
const HERO_BG = [
  'radial-gradient(33.33% 23.81% at 60% 28.57%, rgb(255 186 0 / 0.18), rgb(255 186 0 / 0))',
  'radial-gradient(40% 27.03% at 102.4% 64.86%, rgb(158 0 89 / 0.17), rgb(158 0 89 / 0))',
  'radial-gradient(43.48% 28.57% at 53.91% 64%, rgb(0 96 255 / 0.2), rgb(0 96 255 / 0))',
  '#fff',
].join(', ');

const LOAD_IN_CSS = `
@keyframes hero-rise {
  from { opacity: 0; transform: translateY(48px); }
  to { opacity: 1; transform: none; }
}
.hero-rise { animation: hero-rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
`;

export default function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative overflow-hidden pt-12 pb-10 sm:pt-16 lg:pt-[88px]"
      style={{ background: HERO_BG }}
    >
      <style>{LOAD_IN_CSS}</style>

      <Container className="flex flex-col items-center text-center">
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <p className="animate-fade-up text-[13px] font-medium leading-[1.4] text-ink-600 sm:text-[14px]">
            With Enterprise-grade security built-in
          </p>
          <h1
            id="home-hero-title"
            className="animate-fade-up text-[38px] font-medium leading-[1.1] tracking-[-1px] text-balance text-ink-900 [animation-delay:80ms] sm:text-[48px] sm:tracking-[-1.2px] lg:text-[64px] lg:tracking-[-1.6px]"
          >
            Turn Every Conversation Into Decisions, Actions and Intelligence
          </h1>
          <p className="max-w-[640px] animate-fade-up text-[17px] leading-[1.4] text-ink-600 [animation-delay:160ms] sm:text-[20px]">
            Turn every critical meeting into secure, actionable intelligence your organisation can
            trust.
          </p>
        </div>

        <div className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:240ms]">
          <Button to={ROUTES.bookDemo} intent="primary" size="lg">
            Book a demo
          </Button>
          <Button to={ROUTES.products} intent="secondary" size="lg">
            See how it works
          </Button>
        </div>
      </Container>

      <Container width="wide" className="mt-12 flex justify-center sm:mt-16 lg:mt-[84px]">
        {/* Band (46:8435): 1159 × 700 at desktop */}
        <div className="hero-rise relative aspect-[1159/700] w-full max-w-[1159px] overflow-hidden rounded-card [animation-delay:320ms]">
          <img
            src={heroBand}
            alt=""
            width={1159}
            height={700}
            fetchPriority="high"
            className="absolute inset-0 size-full rounded-card object-cover"
          />
          {/* "Product shot · dashboard" (46:11496) — Start (top 88, hidden) → Loaded (top 40, visible) */}
          <div className="hero-rise absolute top-[5.71%] left-[3.06%] h-[89.14%] w-[93.87%] overflow-hidden rounded-card bg-[#f5f4fa] shadow-[0_2px_6px_rgb(20_13_51/0.06),0_30px_60px_rgb(20_13_51/0.14)] [animation-delay:700ms]">
            <HeroVideo />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-card border border-[#e2e2ea]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
