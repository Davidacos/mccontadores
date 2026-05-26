"use client";

import OptimizedImage from "@/components/global/OptimizedImage";

export default function ClientLogos() {
  const logos = [
    { src: "/logos/colpertras.png", name: "Colpertras SAS" },
    { src: "/logos/tntexpress.png", name: "TNT Express S.A.S." },
    { src: "/logos/tactica.png", name: "Táctica" },
    { src: "/logos/britishschool.png", name: "British School" },
    { src: "/logos/cipres.png", name: "Ciprés" },
    { src: "/logos/adcoacichila.png", name: "A&D Asociados" },
    { src: "/logos/indumarmol.png", name: "Indumarmol J&R" },
    { src: "/logos/maylogistic.png", name: "May Logistic S.A.S." },
    { src: "/logos/iphoneshop.png", name: "iPhone Shop" },
    { src: "/logos/diariocundinamarca.png", name: "Diario Cundinamarca" },
    { src: "/logos/aliadosyasesorias.png", name: "Aliados y Asesorías Can SAS" },
  ];

  // Pre-shuffled array for Row 2 to ensure different vertical layout and prevent vertical alignments
  const shuffledLogos = [
    { src: "/logos/cipres.png", name: "Ciprés" },
    { src: "/logos/maylogistic.png", name: "May Logistic S.A.S." },
    { src: "/logos/tntexpress.png", name: "TNT Express S.A.S." },
    { src: "/logos/diariocundinamarca.png", name: "Diario Cundinamarca" },
    { src: "/logos/britishschool.png", name: "British School" },
    { src: "/logos/indumarmol.png", name: "Indumarmol J&R" },
    { src: "/logos/colpertras.png", name: "Colpertras SAS" },
    { src: "/logos/aliadosyasesorias.png", name: "Aliados y Asesorías Can SAS" },
    { src: "/logos/tactica.png", name: "Táctica" },
    { src: "/logos/adcoacichila.png", name: "A&D Asociados" },
    { src: "/logos/iphoneshop.png", name: "iPhone Shop" },
  ];

  return (
    <div className="pt-8 pb-4 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-sm font-bold text-color-navy/40 tracking-widest uppercase">
          Empresas que confían en nosotros
        </p>
      </div>
      
      <div className="relative w-full flex flex-col gap-6 md:gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Moves Left to Right */}
        <div
          className="flex gap-6 md:gap-8 items-center whitespace-nowrap px-4 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ animationDelay: "-10s" }}
        >
          {/* Duplicate logos to ensure seamless scroll */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => {
            return (
              <div 
                key={`row1-${index}`} 
                className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer bg-white border border-gray-100"
              >
                <OptimizedImage
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-contain p-2 md:p-3"
                  containerClassName="w-full h-full"
                />
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves Right to Left */}
        <div
          className="flex gap-6 md:gap-8 items-center whitespace-nowrap px-4 w-max animate-[marquee-reverse_60s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ animationDelay: "-25s" }}
        >
          {/* Duplicate shuffled logos to ensure seamless scroll */}
          {[...shuffledLogos, ...shuffledLogos, ...shuffledLogos, ...shuffledLogos].map((logo, index) => {
            return (
              <div 
                key={`row2-${index}`} 
                className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer bg-white border border-gray-100"
              >
                <OptimizedImage
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-contain p-2 md:p-3"
                  containerClassName="w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
