"use client";

import { useState } from "react";
import AnimatedSection from "@/components/global/AnimatedSection";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Qué tipos de servicios contables y financieros ofrecen?",
    answer: "Ofrecemos un portafolio integral que incluye Outsourcing Contable, Gestión Tributaria y Fiscal, Asesoría Financiera, Revisoría Fiscal y Auditoría Integral. Nos adaptamos a las necesidades específicas de cada empresa, sin importar su tamaño o sector."
  },
  {
    question: "¿Cómo funciona el servicio de Outsourcing Contable?",
    answer: "Usted delega en nosotros toda la carga operativa contable y administrativa. Nuestro equipo se encarga del procesamiento de información, liquidación de nómina, impuestos y estados financieros, permitiéndole enfocarse exclusivamente en el crecimiento de su negocio."
  },
  {
    question: "¿Están actualizados con la última normativa de la DIAN?",
    answer: "Absolutamente. Contamos con un equipo de expertos en constante capacitación sobre reformas tributarias, NIIF (Normas Internacionales de Información Financiera) y resoluciones de la DIAN para garantizar que su empresa cumpla con la ley y optimice su carga fiscal."
  },
  {
    question: "¿Atienden a empresas a nivel nacional o solo local?",
    answer: "Prestamos servicios a nivel nacional en toda Colombia. Gracias a nuestras plataformas tecnológicas y procesos digitalizados, podemos gestionar la contabilidad y auditoría de su empresa sin importar en qué ciudad se encuentre."
  },
  {
    question: "¿Cómo garantizan la confidencialidad y seguridad de mi información?",
    answer: "Manejamos estrictos protocolos de seguridad de la información y acuerdos de confidencialidad (NDA). Sus datos financieros están resguardados bajo estándares profesionales y éticos dictados por la Junta Central de Contadores."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-color-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-color-navy opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-color-gold/30 rounded-full mb-4 bg-color-gold/10 shadow-sm">
            <span className="text-color-gold font-bold text-xs tracking-widest uppercase">
              Resolvemos sus dudas
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-color-navy mb-6">
            Preguntas <span className="text-color-gold relative inline-block">
              Frecuentes
              <AnimatedUnderline />
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Encuentre respuestas rápidas a las consultas más comunes sobre nuestros servicios contables y de auditoría.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                    isActive ? "border-color-gold bg-white" : "border-gray-200 bg-gray-50/50"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${isActive ? "text-color-gold" : "text-color-navy group-hover:text-color-gold"}`}>
                      {faq.question}
                    </h3>
                    <div 
                      className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                        isActive ? "bg-color-gold text-white rotate-180" : "bg-color-navy-light text-color-gold group-hover:bg-color-gold group-hover:text-white"
                      }`}
                    >
                      <FaChevronDown className="text-sm md:text-base" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-100 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
