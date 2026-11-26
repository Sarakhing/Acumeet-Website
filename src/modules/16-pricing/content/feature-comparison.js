import { DEMO, priBreadcrumb } from './pricing';

/** 16.03 · Feature Comparison (Figma 49:173923). */
export default {
  breadcrumb: priBreadcrumb('Feature Comparison'),

  sections: [
    /** 01 · Comparison (49:173926). */
    {
      type: 'comparison',
      title: 'Compare plans by',
      accent: 'what your team needs',
      lead: 'Review AI features, collaboration, security, administration and support across each plan.',
    },
  ],

  cta: { title: 'Feature Comparison', lead: ' ', primary: DEMO, secondary: null },
};
