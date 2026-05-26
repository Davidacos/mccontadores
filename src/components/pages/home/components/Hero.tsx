"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OptimizedImage from "@/components/global/OptimizedImage";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 border border-color-gold/50 bg-color-gold/10 rounded-full mb-6"
            >
              <p className="text-color-navy font-bold text-sm tracking-widest uppercase">
                Asesoría Contable y Financiera
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-color-navy mb-6 leading-[1.1]"
            >
              Contabilidad estratégica y{" "}
              <span className="text-color-gold">crecimiento</span>{" "}
              <span className="text-color-gold relative inline-block">
                sostenible
                <AnimatedUnderline />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              MC Contadores COL S.A.S. ofrece soluciones integrales bajo los más
              altos estándares de calidad, ética profesional y cumplimiento
              normativo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/573159105890?text=Hola%20MC%20Contadores,%20estoy%20interesado%20en%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-color-gold text-color-navy font-bold rounded-md hover:bg-color-navy hover:text-white transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Solicitar Asesoría
              </a>
              <Link
                href="/portafolio"
                className="px-8 py-4 border-2 border-color-gold text-color-navy font-bold rounded-md hover:bg-color-gray-light transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Conocer Servicios
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-1/2 w-full relative"
          >
            {/* Prominent Gold Decorative Element */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-color-gold rounded-2xl z-0"></div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <div className="absolute inset-0 bg-color-navy/5 z-10 mix-blend-multiply"></div>
              <OptimizedImage
                src="/images/oficina_mccontadores.jpg"
                alt="Oficina moderna de contabilidad y finanzas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Floating Gold Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-color-gold to-color-gold-light rounded-full opacity-70 blur-xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
