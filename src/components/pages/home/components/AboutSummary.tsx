"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import Link from "next/link";
import OptimizedImage from "@/components/global/OptimizedImage";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import ClientLogos from "./ClientLogos";

export default function AboutSummary() {
  return (
    <section className="pt-24 pb-12 bg-color-gray-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-20 z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Images & Floating Card */}
          <div className="lg:w-1/2 w-full relative mt-10 lg:mt-0">
            <AnimatedSection>
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl border-8 border-white group">
                <OptimizedImage
                  src="/images/about-meeting.png"
                  alt="Equipo de contadores en reunión"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-color-navy/5 mix-blend-multiply pointer-events-none"></div>
              </div>

              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-10 lg:-right-10 right-0 p-8 bg-color-navy rounded-xl shadow-xl w-[90%] md:w-80 border-l-4 border-color-gold"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Nuestro Diagnóstico
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-color-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Revisión legal y societaria.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-color-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Evaluación de procesos internos.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-color-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Verificación ante DIAN y entidades.</span>
                  </li>
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Background decoration */}
            <div className="absolute top-10 -left-10 w-24 h-24 border-4 border-color-gold rounded-full opacity-30 z-0"></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 w-full mt-16 lg:mt-0">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-color-gold"></div>
                <span className="text-color-gold font-bold uppercase tracking-widest text-sm">
                  Nuestra Experiencia
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-color-navy mb-8 leading-tight">
                Aliados estratégicos para su{" "}
                <span className="text-color-gold">crecimiento empresarial</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-2 border-color-gold/30 pl-4">
                <strong className="text-color-navy">
                  MC CONTADORES COL S.A.S.
                </strong>{" "}
                es una compañía líder en auditoría y consultoría, avalada por la
                Junta Central de Contadores.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Aportamos valor real a través de nuestro equipo
                interdisciplinario de alto nivel. Nos especializamos en brindar
                soluciones a medida en auditorías contables, administrativas,
                fiscales y financieras para responder a las más estrictas
                exigencias normativas y de mercado.
              </p>

              <Link
                href="/nosotros"
                className="inline-flex items-center px-8 py-4 bg-white border border-color-navy text-color-navy font-bold rounded-md hover:bg-color-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                Conocer la Firma
                <FaArrowRight className="ml-3 text-color-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Integrated Client Logos Section */}
      <ClientLogos />
    </section>
  );
}
