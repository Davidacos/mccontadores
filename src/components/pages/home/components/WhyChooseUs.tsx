"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import { FaUserTie, FaBuilding, FaCheckCircle, FaChartLine } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Hook to animate numbers
function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  const stats = [
    {
      icon: FaUserTie,
      value: 15,
      suffix: "+",
      title: "Años de Experiencia",
      desc: "Liderando en consultoría."
    },
    {
      icon: FaBuilding,
      value: 250,
      suffix: "+",
      title: "Clientes Satisfechos",
      desc: "A nivel nacional."
    },
    {
      icon: FaCheckCircle,
      value: 100,
      suffix: "%",
      title: "Cumplimiento",
      desc: "Normativo y ético."
    },
    {
      icon: FaChartLine,
      value: 50,
      suffix: "+",
      title: "Auditorías Exitosas",
      desc: "Resultados comprobados."
    }
  ];

  return (
    <section className="py-24 bg-color-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-color-gold rounded-full opacity-[0.03] blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-color-gold rounded-full opacity-[0.03] blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-color-gold/30 rounded-full mb-4 bg-color-gold/5">
            <span className="text-color-gold font-bold text-xs tracking-widest uppercase">Resultados que Hablan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué elegir <span className="text-color-gold">MC Contadores?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nuestra trayectoria y números respaldan la confianza que grandes corporaciones han depositado en nosotros.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8 text-center hover:bg-white/10 transition-colors duration-300 h-full flex flex-col items-center justify-center group relative overflow-hidden">
                  
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="w-12 h-12 md:w-16 md:h-16 bg-color-gold/20 rounded-full flex items-center justify-center mb-3 md:mb-6 text-color-gold group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-xl md:text-3xl" />
                  </div>
                  
                  <div className="text-3xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 font-mono tracking-tighter">
                    <Counter from={0} to={stat.value} />
                    <span className="text-color-gold">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-sm md:text-xl font-bold text-gray-200 mb-1 md:mb-2 leading-tight">{stat.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{stat.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
