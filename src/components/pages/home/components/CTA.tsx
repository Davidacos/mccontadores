"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-color-navy shadow-2xl py-16 px-8 md:px-16 text-center border-b-8 border-color-gold">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-color-gold/20 via-transparent to-transparent opacity-80 mix-blend-screen pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-color-gold rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Deje la tranquilidad financiera de su empresa en manos de <span className="text-color-gold">expertos</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                Contáctenos hoy mismo para recibir una propuesta técnica y económica adaptada a las necesidades y retos operativos de su organización.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://wa.me/573159105890?text=Hola%20MC%20Contadores,%20me%20gustar%C3%ADa%20agendar%20una%20consulta." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-color-gold text-color-navy font-bold rounded-lg hover:bg-white hover:text-color-navy transition-all duration-300 shadow-xl shadow-color-gold/20"
                >
                  Agendar una Consulta
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
