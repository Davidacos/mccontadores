import PortafolioHeader from "@/components/pages/portafolio/components/PortafolioHeader";
import ServicesGrid from "@/components/pages/portafolio/components/ServicesGrid";
import OutsourcingModel from "@/components/pages/portafolio/components/OutsourcingModel";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";

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
