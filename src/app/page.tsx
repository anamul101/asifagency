import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Research } from "@/components/Research";
import ResearchSlider from "@/components/ResearchSlider";
import GenerativeAISection from "@/components/GenerativeAISection";
import BuildAISection from "@/components/BuildAISection";
import GenerativeAIApplications from "@/components/GenerativeAIApplications";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Industry from "@/components/Industry";
 // Ensure BuildAISection.tsx exists in the same directory

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Research/>
      <GenerativeAISection/>
      <BuildAISection/>
      <GenerativeAIApplications/>
      <CaseStudiesSection/>
      <TestimonialSlider/>
      <Industry/>
      {/* <ResearchSlider/> */}
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
