"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";

export default function MarketingBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-color-navy shadow-2xl py-12 px-8 md:px-16 text-center border-b-8 border-color-gold flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-color-gold/20 via-transparent to-transparent opacity-80 mix-blend-screen pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-color-gold rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex-grow md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para potenciar su <span className="text-color-gold">área financiera</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Contáctenos para estructurar una propuesta de Outsourcing a la medida de su operación y volumen de transacciones.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex-shrink-0"
            >
              <a 
                href="https://wa.me/573182600651?text=Hola%20MC%20Contadores,%20me%20gustar%C3%ADa%20solicitar%20una%20propuesta%20de%20Outsourcing." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-color-gold text-color-navy font-bold rounded-xl hover:bg-white hover:text-color-navy transition-all duration-300 shadow-xl shadow-color-gold/20 text-lg"
              >
                <FaHandshake className="text-2xl" />
                Solicitar Propuesta
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
