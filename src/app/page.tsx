import type { Metadata } from "next";
import Hero from "@/components/pages/home/components/Hero";
import AboutSummary from "@/components/pages/home/components/AboutSummary";
import WhyChooseUs from "@/components/pages/home/components/WhyChooseUs";
import ServicesTeaser from "@/components/pages/home/components/ServicesTeaser";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";
import Testimonials from "@/components/pages/home/components/Testimonials";
import CTA from "@/components/pages/home/components/CTA";
import ContactInfoBanner from "@/components/pages/home/components/ContactInfoBanner";
import FAQSection from "@/components/global/FAQSection";

export const metadata: Metadata = {
  title: "Firma de Contadores en Bogotá y Colombia | MC Contadores COL S.A.S.",
  description: "Firma de contadores públicos líder en Colombia. Outsourcing contable integral, nómina electrónica, revisoría fiscal y asesoría de impuestos en Bogotá y Soacha.",
  alternates: {
    canonical: "https://mccontadorescol.com",
  },
  openGraph: {
    title: "Firma de Contadores en Bogotá y Colombia | MC Contadores COL S.A.S.",
    description: "Firma de contadores públicos líder en Colombia. Outsourcing contable integral, nómina electrónica, revisoría fiscal y asesoría de impuestos en Bogotá y Soacha. Evite sanciones con la DIAN.",
    url: "https://mccontadorescol.com",
    siteName: "MC Contadores COL S.A.S.",
    images: [
      {
        url: "https://mccontadorescol.com/images/oficina_mccontadores.jpg",
        width: 1200,
        height: 630,
        alt: "MC Contadores COL S.A.S. - Firma de Contadores Públicos"
      }
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firma de Contadores en Bogotá y Colombia | MC Contadores COL S.A.S.",
    description: "Firma de contadores públicos líder en Colombia. Outsourcing contable integral, nómina electrónica, revisoría fiscal y asesoría de impuestos en Bogotá y Soacha.",
    images: ["https://mccontadorescol.com/images/oficina_mccontadores.jpg"],
  },
};

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
      <FAQSection />
      <CTA />
    </div>
  );
}
