import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { Research } from "@/components/Research";
import GenerativeAISection from "@/components/GenerativeAISection";
import BuildAISection from "@/components/BuildAISection";
import GenerativeAIApplications from "@/components/GenerativeAIApplications";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Industry from "@/components/Industry";
import FutureSection from "@/components/FutureSection";
import LogoMarqueeSection from "@/components/LogoMarqueeSection";

// Ensure BuildAISection.tsx exists in the same directory

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarqueeSection />
      <Research />
      <GenerativeAISection />
      <BuildAISection />
      <GenerativeAIApplications />
      <CaseStudiesSection />
      <TestimonialSlider />
      <Industry />
      <FutureSection />
      <Features />
      <ProductShowcase />
      <FAQs />
    </>
  );
}
