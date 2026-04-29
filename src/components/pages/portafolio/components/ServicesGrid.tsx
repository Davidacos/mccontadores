"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import Link from "next/link";
import { FaCheck, FaSearchDollar, FaChartPie, FaFileInvoiceDollar, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const servicios = [
    {
      id: "01",
      slug: "contabilidad",
      title: "Servicios de Contabilidad",
      Icon: FaChartPie,
      theme: "dark",
      items: [
        "Preparación y presentación de estados financieros.",
        "Contabilidad financiera.",
        "Contabilidad de costos.",
        "Análisis financiero."
      ]
    },
    {
      id: "02",
      slug: "impuestos",
      title: "Servicios de Impuestos",
      Icon: FaFileInvoiceDollar,
      theme: "light",
      items: [
        "Declaraciones de impuestos.",
        "Planificación fiscal.",
        "Representación ante la autoridad fiscal."
      ]
    },
    {
      id: "03",
      slug: "asesoria",
      title: "Servicios de Asesoría",
      Icon: FaSearchDollar,
      theme: "dark",
      items: [
        "Asesoría financiera.",
        "Planificación estratégica.",
        "Análisis de riesgos.",
        "Asesoría constitución de empresas."
      ]
    },
    {
      id: "04",
      slug: "outsourcing",
      title: "Servicios de Outsourcing",
      Icon: FaBuilding,
      theme: "light",
      items: [
        "Contabilidad outsourcing.",
        "Administración de nómina.",
        "Gestión de tesorería."
      ]
    }
  ];

  return (
    <section className="py-24 bg-color-gray-light relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-color-navy/20 rounded-full mb-4 bg-white shadow-sm">
            <span className="text-color-navy font-bold text-xs tracking-widest uppercase">Nuestras Especialidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-color-navy mb-6">
            Áreas de <span className="text-color-gold">Práctica</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {servicios.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`rounded-3xl p-10 md:p-14 h-full relative overflow-hidden group border transition-colors duration-500
                    ${service.theme === "dark" 
                      ? 'bg-color-navy border-color-navy hover:border-color-gold shadow-[0_30px_60px_rgba(10,25,47,0.3)]' 
                      : 'bg-white border-white hover:border-color-navy shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
                    }`}
                >
                  {/* Watermark Icon */}
                  <div className={`absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6
                    ${service.theme === "dark" ? 'text-white' : 'text-color-navy'}
                  `}>
                    <IconComponent className="text-[250px]" />
                  </div>

                  {/* Subtle Hover Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    service.theme === "dark" ? 'bg-gradient-to-br from-color-gold/10 via-transparent to-transparent' : 'bg-gradient-to-br from-color-navy/5 via-transparent to-transparent'
                  }`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-10">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl
                        ${service.theme === "dark" ? 'bg-color-navy-light border border-white/5 shadow-black/40' : 'bg-color-gray-light border border-gray-100 shadow-gray-200'}
                      `}>
                        <IconComponent className={`text-4xl group-hover:scale-110 transition-transform duration-500 ${service.theme === "dark" ? 'text-color-gold' : 'text-color-navy'}`} />
                      </div>
                      <h3 className={`text-3xl font-bold leading-tight ${service.theme === "dark" ? 'text-white' : 'text-color-navy'}`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className={`w-12 h-1 mb-8 rounded-full ${service.theme === "dark" ? 'bg-color-gold/50' : 'bg-color-navy/20'}`}></div>
                    
                    <ul className="space-y-5 flex-grow mb-10">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start group/item">
                          <div className={`mt-1.5 mr-4 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-300
                            ${service.theme === "dark" 
                              ? 'bg-color-gold/20 text-color-gold group-hover/item:bg-color-gold group-hover/item:text-color-navy' 
                              : 'bg-color-navy/10 text-color-navy group-hover/item:bg-color-navy group-hover/item:text-white'
                            }
                          `}>
                            <FaCheck className="text-[10px]" />
                          </div>
                          <span className={`text-lg leading-relaxed transition-colors duration-300
                            ${service.theme === "dark" ? 'text-gray-300 group-hover/item:text-white' : 'text-color-navy/80 group-hover/item:text-color-navy font-medium'}
                          `}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/portafolio/${service.slug}`}
                        className={`inline-flex items-center justify-center w-full py-4 font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-sm
                          ${service.theme === "dark" 
                            ? 'bg-color-gold text-color-navy hover:bg-white' 
                            : 'bg-color-navy text-white hover:bg-color-gold'
                          }
                        `}
                      >
                        Saber más detalles
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
