"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import { FaHandshake } from "react-icons/fa";

export default function OutsourcingModel() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative border-b-8 border-color-gold group bg-color-navy">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[2000ms]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          {/* Gradient Overlay for contrast */}
          <div className="absolute inset-0 bg-linear-to-r from-color-navy via-color-navy/90 to-color-navy/70"></div>

          {/* Glowing orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-color-gold rounded-full opacity-[0.15] blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-color-gold rounded-full opacity-[0.15] blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <AnimatedSection className="md:w-1/2 z-10">
            <div className="inline-block px-4 py-1 border border-color-gold/50 rounded-full mb-6 bg-color-gold/10">
              <span className="text-color-gold font-bold text-xs tracking-widest uppercase">
                Modelo de Trabajo
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Outsourcing <span className="text-color-gold">Integral</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              MC CONTADORES COLOMBIA S.A.S. ofrece servicios mensuales a través
              de un equipo interdisciplinario de profesionales altamente
              calificados, garantizando atención permanente y acompañamiento
              continuo.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-white font-medium text-lg">
                <div className="w-3 h-3 rounded-full bg-color-gold mr-4 shadow-[0_0_10px_rgba(197,163,101,0.8)]"></div>
                Asesoría permanente y personalizada.
              </li>
              <li className="flex items-center text-white font-medium text-lg">
                <div className="w-3 h-3 rounded-full bg-color-gold mr-4 shadow-[0_0_10px_rgba(197,163,101,0.8)]"></div>
                Cumplimiento de objetivos y requerimientos.
              </li>
              <li className="flex items-center text-white font-medium text-lg">
                <div className="w-3 h-3 rounded-full bg-color-gold mr-4 shadow-[0_0_10px_rgba(197,163,101,0.8)]"></div>
                Enfoque en indicadores de gestión (KPIs).
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="md:w-1/2 z-10 flex justify-center w-full"
          >
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 text-center w-full max-w-md shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <FaHandshake className="text-7xl text-color-gold mx-auto mb-8 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-4">
                  ¿Le interesa una propuesta?
                </h3>
                <p className="text-gray-300 mb-10 text-lg">
                  Los honorarios mensuales serán definidos de acuerdo con el
                  nivel de operación, volumen de transacciones y necesidades
                  específicas de su empresa.
                </p>
                <a
                  href="https://wa.me/573182600651?text=Hola%20MC%20Contadores,%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20para%20Outsourcing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-8 py-4 bg-color-gold text-color-navy font-bold text-lg rounded-xl hover:bg-white hover:text-color-navy transition-all duration-300 shadow-xl"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
