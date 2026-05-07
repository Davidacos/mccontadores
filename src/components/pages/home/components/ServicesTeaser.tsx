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
      icon: FaCalculator,
      delay: 0.1,
      theme: "dark"
    },
    {
      title: "Tributaria y Fiscal",
      desc: "Planeación fiscal eficiente, cumplimiento de obligaciones riguroso y aplicación experta de la normativa para minimizar todo tipo de riesgos.",
      icon: FaGavel,
      delay: 0.2,
      theme: "gold"
    },
    {
      title: "Análisis Financiero",
      desc: "Proporcionamos análisis estratégicos de alto nivel que facilitan la toma de decisiones, mejoran la rentabilidad y la sostenibilidad organizacional.",
      icon: FaChartLine,
      delay: 0.3,
      theme: "dark"
    }
  ];

  return (
    <section className="py-24 bg-color-gray-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-color-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-color-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20 flex flex-col items-center">
          <div className="inline-block px-5 py-2 border border-color-gold/30 rounded-full mb-6 bg-color-gold/10 backdrop-blur-sm shadow-sm">
            <span className="text-color-navy font-bold text-xs tracking-widest uppercase">Especialidades</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-color-navy mb-6 tracking-tight">
            Soluciones de <span className="text-color-gold relative inline-block">
              Alto Nivel
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-color-gold rounded-full opacity-50"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Abordamos de manera integral las necesidades de su compañía a través de servicios especializados en outsourcing corporativo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {services.map((srv, idx) => (
            <AnimatedSection key={idx} delay={srv.delay} className={`h-full ${srv.theme === 'gold' ? 'lg:-mt-8 lg:mb-8' : ''}`}>
              <motion.div 
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`group h-full p-10 md:p-12 rounded-3xl transition-all duration-500 relative overflow-hidden flex flex-col border-2
                  ${srv.theme === "dark"
                    ? 'bg-color-navy border-color-navy-light shadow-[0_20px_50px_rgba(10,25,47,0.4)] hover:border-color-gold hover:shadow-color-gold/20' 
                    : 'bg-gradient-to-br from-color-gold to-yellow-500 border-color-gold shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:shadow-color-gold/40'
                  }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  srv.theme === "dark" ? 'bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_50%)]'
                }`}></div>

                {/* Icon Container */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl
                  ${srv.theme === "dark" ? 'bg-color-navy-light border border-white/5' : 'bg-white/20 border border-white/30 backdrop-blur-md'}
                `}>
                  <srv.icon className={`text-3xl md:text-4xl ${srv.theme === "dark" ? 'text-color-gold group-hover:text-white' : 'text-white'} transition-colors duration-500`} />
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-extrabold mb-5 relative z-10 ${srv.theme === "dark" ? 'text-white' : 'text-color-navy'}`}>
                  {srv.title}
                </h3>
                
                <p className={`mb-10 leading-relaxed flex-grow relative z-10 text-sm md:text-base ${srv.theme === "dark" ? 'text-gray-400 group-hover:text-gray-300' : 'text-color-navy/80 font-medium group-hover:text-color-navy'} transition-colors duration-300`}>
                  {srv.desc}
                </p>
                
                <Link 
                  href="/portafolio" 
                  className={`inline-flex items-center font-bold text-sm uppercase tracking-widest transition-all relative z-10 group/link mt-auto
                    ${srv.theme === "dark" ? 'text-color-gold hover:text-white' : 'text-color-navy hover:text-white'}
                  `}
                >
                  <span className="relative">
                    Explorar Servicio
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${srv.theme === "dark" ? 'bg-white' : 'bg-white'}`}></span>
                  </span>
                  <div className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-2
                    ${srv.theme === "dark" ? 'bg-color-gold/10 text-color-gold group-hover/link:bg-white group-hover/link:text-color-navy' : 'bg-white/20 text-color-navy group-hover/link:bg-white group-hover/link:text-color-gold'}
                  `}>
                    <FaArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
