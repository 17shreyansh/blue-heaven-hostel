import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import HostelNetwork from "@/components/home/HostelNetwork";
import Facilities from "@/components/home/Facilities";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Premium Student Living in Greater Noida",
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <HostelNetwork />
      <Facilities />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
