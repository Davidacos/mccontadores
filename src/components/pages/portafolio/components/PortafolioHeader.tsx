"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import OptimizedImage from "@/components/global/OptimizedImage";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

export default function PortafolioHeader() {
  return (
    <section className="relative bg-color-navy text-white py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Servicios y portafolio financiero"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-30 mix-blend-luminosity"
          containerClassName="w-full h-full"
        />
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-color-navy/95 via-color-navy/85 to-color-navy"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Portafolio de <span className="text-color-gold relative inline-block">
              Servicios
              <AnimatedUnderline />
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Soluciones integrales bajo la modalidad de outsourcing, enfocadas en la gestión contable, fiscal, tributaria y financiera de su compañía.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
