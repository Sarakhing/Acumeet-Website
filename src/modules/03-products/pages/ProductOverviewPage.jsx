import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import ProductStage from '@/components/blocks/ProductStage';
import CtaBand from '@/components/blocks/CtaBand';
import ProductsOverviewHero from '../components/ProductsOverviewHero';
import {
  ProductsIndexNav,
  ProductsWorkspaceSection,
  ProductsPlatformCards,
} from '../components/ProductsOverviewSections';
import { overview as c } from '../content/overview';

/**
 * 02.01 · Product overview (Figma 46:30443): hero, product index, the four
 * stages (Capture, Understand, in-product window, Act, Remember), platforms
 * and the CTA band. "Stage 0N" overlines are hidden in Figma and not rendered.
 */
export default function ProductOverviewPage() {
  const { hash } = useLocation();
  // Jump links (hero "Explore the platform", product index) arrive as URL hashes.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  const [capture, understand, act, remember] = c.stages;
  return (
    <>
      <Breadcrumb items={c.breadcrumb} />
      <ProductsOverviewHero {...c.hero} />
      <ProductsIndexNav items={c.index} />
      <ProductStage {...capture} />
      <ProductStage {...understand} />
      <ProductsWorkspaceSection {...c.workspace} />
      <ProductStage {...act} />
      <ProductStage {...remember} />
      <ProductsPlatformCards {...c.platforms} />
      <CtaBand {...c.cta} />
    </>
  );
}
