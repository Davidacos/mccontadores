"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import Link from "next/link";
import { FaChartLine, FaGavel, FaCalculator, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesTeaser() {
  const services = [
    {
      title: "Gestión Contable",
      desc: "Garantizamos el adecuado registro y presentación de la información contable asegurando confiabilidad, transparencia y entrega oportuna.",
      icon: <FaCalculator className="text-color-gold text-2xl group-hover:text-white transition-colors duration-500" />,
      delay: 0.1,
      theme: "dark" // Navy background
    },
    {
      title: "Tributaria y Fiscal",
      desc: "Planeación fiscal eficiente, cumplimiento de obligaciones riguroso y aplicación experta de la normativa para minimizar todo tipo de riesgos.",
      icon: <FaGavel className="text-color-navy text-2xl group-hover:text-color-gold transition-colors duration-500" />,
      delay: 0.2,
      theme: "light" // White background
    },
    {
      title: "Análisis Financiero",
      desc: "Proporcionamos análisis estratégicos de alto nivel que facilitan la toma de decisiones, mejoran la rentabilidad y la sostenibilidad organizacional.",
      icon: <FaChartLine className="text-color-gold text-2xl group-hover:text-white transition-colors duration-500" />,
      delay: 0.3,
      theme: "dark" // Navy background
    }
  ];

  return (
    <section className="py-24 bg-color-gray-light relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-color-navy/20 rounded-full mb-4 bg-white shadow-sm">
            <span className="text-color-navy font-bold text-xs tracking-widest uppercase">Especialidades</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-color-navy mb-6">
            Soluciones de <span className="text-color-gold">Alto Nivel</span>
          </h2>
          <p className="text-lg text-color-navy font-medium max-w-2xl mx-auto">
            Abordamos de manera integral las necesidades de su compañía a través de servicios especializados en outsourcing corporativo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((srv, idx) => (
            <AnimatedSection key={idx} delay={srv.delay} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group h-full p-10 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col
                  ${srv.theme === "dark"
                    ? 'bg-color-navy border-color-navy shadow-[0_20px_50px_rgba(10,25,47,0.3)] hover:border-color-gold' 
                    : 'bg-white border-gray-200 shadow-xl shadow-gray-200/50 hover:border-color-navy'
                  }`}
              >
                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  srv.theme === "dark" ? 'bg-gradient-to-br from-color-gold/10 to-transparent' : 'bg-gradient-to-br from-color-navy/5 to-transparent'
                }`}></div>

                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg
                  ${srv.theme === "dark" ? 'bg-color-navy-light border border-white/10 shadow-black/20' : 'bg-white border border-gray-100 shadow-gray-200/50'}
                `}>
                  {srv.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 relative z-10 ${srv.theme === "dark" ? 'text-white' : 'text-color-navy'}`}>
                  {srv.title}
                </h3>
                
                <p className={`mb-8 leading-relaxed flex-grow relative z-10 ${srv.theme === "dark" ? 'text-gray-300' : 'text-color-navy font-medium'}`}>
                  {srv.desc}
                </p>
                
                <Link 
                  href="/portafolio" 
                  className={`inline-flex items-center font-bold text-sm uppercase tracking-wide transition-all relative z-10 group/link
                    ${srv.theme === "dark" ? 'text-color-gold hover:text-white' : 'text-color-navy hover:text-color-gold'}
                  `}
                >
                  Explorar Servicio
                  <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
