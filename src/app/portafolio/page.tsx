import type { Metadata } from "next";
import PortafolioHeader from "@/components/pages/portafolio/components/PortafolioHeader";
import ServicesGrid from "@/components/pages/portafolio/components/ServicesGrid";
import OutsourcingModel from "@/components/pages/portafolio/components/OutsourcingModel";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";

export const metadata: Metadata = {
  title: "Portafolio de Servicios Contables y Tributarios | Colombia",
  description: "Soluciones de contabilidad NIIF, planeación tributaria, auditoría integral y outsourcing administrativo BPO para empresas en Bogotá, Soacha y todo el país.",
  alternates: {
    canonical: "https://mccontadorescol.com/portafolio",
  },
};

export default function Portafolio() {
  return (
    <div className="flex flex-col w-full">
      <PortafolioHeader />
      <ServicesGrid />
      <OutsourcingModel />
      <TeamSection />
    </div>
  );
}
