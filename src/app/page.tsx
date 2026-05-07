import Hero from "@/components/pages/home/components/Hero";
import AboutSummary from "@/components/pages/home/components/AboutSummary";
import WhyChooseUs from "@/components/pages/home/components/WhyChooseUs";
import ServicesTeaser from "@/components/pages/home/components/ServicesTeaser";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";
import Testimonials from "@/components/pages/home/components/Testimonials";
import CTA from "@/components/pages/home/components/CTA";
import ContactInfoBanner from "@/components/pages/home/components/ContactInfoBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSummary />
      <WhyChooseUs />
      <ServicesTeaser />
      <ContactInfoBanner />
      <TeamSection />
      <Testimonials />
      <CTA />
    </div>
  );
}
