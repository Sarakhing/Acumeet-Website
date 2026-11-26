import { access } from '@/components/visuals/mocks';
import { centeredHero, ringsHero, windowHero } from '@/components/blocks/heroPresets';
import { ENTERPRISE, entCta } from './enterprise';

export {
  keySummary,
  members,
  POLICY_ROWS,
  rollout,
  tasks,
} from '@/modules/10-deployment/content/shared';

/** "UI · Access" with a custom role order: team([['Warith Abraham', 'Owner'], …], width). */
export const team = (rows, width = 500) => access(rows, { width });

/* Hero presets with the Enterprise chip ("ENTERPRISE · {page}") and a matching CTA band. */
const chip = (label) => `Enterprise  ·  ${label}`;

/**
 * page(key, { hero: 'centered' | 'rings' | 'window', eyebrow, title, accent?, lead, primary, secondary, … })
 * returns { tab, hero, carousel?, cta } — spread it into a content object. `tab` highlights the
 * page's tab (PoC sub-pages pass tabKey: 'poc').
 */
export const entPage = (key, { hero, eyebrow, tabKey = key, cta = true, ...h }) => {
  const head = { eyebrow: chip(eyebrow), ...h };
  const preset =
    hero === 'rings'
      ? ringsHero({ ...head, slides: h.slides })
      : hero === 'window'
        ? windowHero(head)
        : centeredHero(head);
  return {
    tab: { active: tabKey, label: ENTERPRISE[key].tab ?? ENTERPRISE[key].title },
    ...preset,
    ...(cta ? { cta: entCta(h) } : null),
  };
};
