import CtaBand from '@/components/blocks/CtaBand';
import { ROUTES } from '@/constants/routes';
import HeroSection from '../components/HeroSection';
import CustomerLogos from '../components/CustomerLogos';
import CapabilitiesSection from '../components/CapabilitiesSection';
import SecuritySection from '../components/SecuritySection';
import HowItWorksSection from '../components/HowItWorksSection';
import IndustriesSection from '../components/IndustriesSection';
import RiskAssessmentSection from '../components/RiskAssessmentSection';
import IntegrationsSection from '../components/IntegrationsSection';
import PricingTeaser from '../components/PricingTeaser';
import InPracticeSection from '../components/InPracticeSection';
import ResourcesSection from '../components/ResourcesSection';

/** Figma "01 · Home — v2" (46:8421). Section order follows the Figma frame. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CustomerLogos />
      <CapabilitiesSection />
      <SecuritySection />
      <HowItWorksSection />
      <IndustriesSection />
      <RiskAssessmentSection />
      <IntegrationsSection />
      <PricingTeaser />
      <InPracticeSection />
      <ResourcesSection />
      <CtaBand
        size="home"
        title="Ready to Explore Acumeet?"
        lead="Discover how Acumeet can support your organisation's meeting workflows and enterprise requirements."
        primary={{ label: 'Book a demo', to: ROUTES.bookDemo }}
        secondary={{ label: 'Explore the Platform', to: ROUTES.products }}
      />
    </>
  );
}
