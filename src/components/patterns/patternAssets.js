/**
 * Figma pattern assets ("Pattern · rings / dot grid / hairlines", "Waveform ·
 * Live · drift") exported per frame size. Keys are the frame they belong to:
 *   hero     1440×900  (white rings, dark "rings" hero)
 *   explorer 780×520   (Explorer visual panel)
 *   panel    656×480   (Split / Feature visual panel)
 *   stepper  664×420   (Stepper visual, rings anchored bottom-right)
 *   chapters 664×500   (Chapters visual on dark)
 *   card     413×280   (tinted benefit / industry cards)
 *   bento    382×182   (Bento tile header)
 *   mini     260×120   (Related card thumbnail)
 */
import heroRings from '@/assets/images/solutions/hero-rings-1440x900.svg';
import explorerRings from '@/assets/images/solutions/explorer-rings-780x520.svg';
import panelRings from '@/assets/images/solutions/rings-656x480.svg';
import stepperRings from '@/assets/images/solutions/stepper-rings-664x420.svg';
import cardRings from '@/assets/images/solutions/card-rings-413x280.svg';
import bentoRings from '@/assets/images/solutions/bento-rings-382x182.svg';
import miniRings from '@/assets/images/solutions/related-rings-260x120.svg';

import explorerDots from '@/assets/images/solutions/explorer-dot-grid-780x520.svg';
import chaptersDotsDark from '@/assets/images/solutions/chapters-dot-grid-dark-664x500.svg';
import cardDots from '@/assets/images/solutions/card-dot-grid-413x280.svg';
import cardDotsDark from '@/assets/images/solutions/card-dot-grid-dark-413x280.svg';
import bentoDots from '@/assets/images/solutions/bento-dot-grid-236x110.svg';
import miniDots from '@/assets/images/solutions/related-dot-grid-260x120.svg';

import explorerHairlines from '@/assets/images/solutions/explorer-hairlines-780x520.svg';
import cardHairlines from '@/assets/images/solutions/card-hairlines-413x280.svg';
import bentoHairlines from '@/assets/images/solutions/bento-hairlines-717x223.svg';
import miniHairlines from '@/assets/images/solutions/related-hairlines-260x120.svg';

import explorerWave from '@/assets/images/solutions/explorer-waveform-780x520.svg';
import miniWave from '@/assets/images/solutions/related-waveform-260x120.svg';

export const RINGS = {
  hero: { src: heroRings, w: 1440, h: 900 },
  explorer: { src: explorerRings, w: 780, h: 520 },
  panel: { src: panelRings, w: 656, h: 480 },
  stepper: { src: stepperRings, w: 664, h: 420 },
  card: { src: cardRings, w: 413, h: 280 },
  bento: { src: bentoRings, w: 382, h: 182 },
  mini: { src: miniRings, w: 260, h: 120 },
};

export const DOTS = {
  explorer: { src: explorerDots, w: 780, h: 520 },
  chapters: { src: chaptersDotsDark, w: 664, h: 500 },
  card: { src: cardDots, w: 413, h: 280 },
  'card-dark': { src: cardDotsDark, w: 413, h: 280 },
  bento: { src: bentoDots, w: 236, h: 110 },
  mini: { src: miniDots, w: 260, h: 120 },
};

export const HAIRLINES = {
  explorer: { src: explorerHairlines, w: 780, h: 520 },
  card: { src: cardHairlines, w: 413, h: 280 },
  bento: { src: bentoHairlines, w: 718, h: 224 },
  mini: { src: miniHairlines, w: 260, h: 120 },
};

export const WAVEFORM = {
  explorer: { src: explorerWave, w: 780, h: 520 },
  mini: { src: miniWave, w: 260, h: 120 },
};
