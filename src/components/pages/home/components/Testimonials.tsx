"use client";

import { FaStar, FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "TechSolutions S.A.",
      author: "Carlos Martínez",
      role: "Director Financiero",
      content: "La precisión y el profesionalismo de MC Contadores han transformado nuestra estructura fiscal. Son un verdadero aliado estratégico.",
      rating: 5,
    },
    {
      company: "Grupo Inmobiliario",
      author: "Ana Lucía Gómez",
      role: "Gerente General",
      content: "Delegar nuestra contabilidad y nómina en ellos fue la mejor decisión. La tranquilidad de tener todo al día no tiene precio.",
      rating: 5,
    },
    {
      company: "Salud Plus IPS",
      author: "Dr. Roberto Silva",
      role: "Director Médico",
      content: "Su equipo no solo organiza los números, sino que nos ha dado visibilidad para crecer ordenadamente. Excelentes consultores.",
      rating: 5,
    },
    {
      company: "Constructora Andes",
      author: "Marta Valencia",
      role: "CFO",
      content: "Las auditorías son impecables. Tienen un dominio absoluto de la normativa y nos han evitado sanciones importantes.",
      rating: 5,
    },
    {
      company: "Logística Nacional",
      author: "Javier Ochoa",
      role: "Gerente de Operaciones",
      content: "Su plataforma y equipo siempre están disponibles. La gestión tributaria que realizan es impecable y transparente.",
      rating: 5,
    },
  ];

  // We duplicate enough times to ensure smooth infinite scrolling.
  const row1 = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const fullRow2 = [...row2, ...row2, ...row2, ...row2];

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    let speed1 = 0.5;
    let speed2 = 0.4;
    
    let pos1 = 0;
    let pos2 = 0;
    let initializedRow2 = false;

    const scroll = () => {
      if (!isInteractingRef.current && row1Ref.current && row2Ref.current) {
        const sw1 = row1Ref.current.scrollWidth;
        const sw2 = row2Ref.current.scrollWidth;

        // Wait until layout is actually computed
        if (sw1 > 0 && sw2 > 0) {
          // Initialize row 2 to the middle once layout is ready
          if (!initializedRow2) {
            pos2 = sw2 / 2;
            row2Ref.current.scrollLeft = pos2;
            initializedRow2 = true;
          }

          // Sync in case user manually swiped
          if (Math.abs(pos1 - row1Ref.current.scrollLeft) > 5) pos1 = row1Ref.current.scrollLeft;
          if (Math.abs(pos2 - row2Ref.current.scrollLeft) > 5) pos2 = row2Ref.current.scrollLeft;

          // Row 1
          pos1 += speed1;
          if (pos1 >= sw1 / 2) {
             pos1 = 0;
          }
          row1Ref.current.scrollLeft = pos1;

          // Row 2
          if (pos2 <= 0) {
             pos2 = sw2 / 2;
          }
          pos2 -= speed2;
          row2Ref.current.scrollLeft = pos2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleInteractStart = () => {
    isInteractingRef.current = true;
  };
  
  const handleInteractEnd = () => {
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 1000);
  };

  const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[280px] md:w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 flex-shrink-0 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div className="flex gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} className="text-color-gold text-xs md:text-sm" />
          ))}
        </div>
        <FaQuoteRight className="text-color-gray-light text-2xl md:text-3xl" />
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed italic relative z-10">
        "{item.content}"
      </p>
      <div className="mt-auto border-t border-gray-100 pt-4">
        <p className="text-color-navy font-bold text-sm md:text-base">{item.company}</p>
        <p className="text-gray-400 text-xs md:text-sm">
          {item.author} — {item.role}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-color-gray-light overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1 border border-color-navy/20 rounded-full mb-4 bg-white shadow-sm">
          <span className="text-color-navy font-bold text-xs tracking-widest uppercase">
            Testimonios y Calificaciones
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-color-navy mb-6">
          Lo que dicen <span className="text-color-gold">nuestros clientes</span>
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1 */}
        <div 
          ref={row1Ref}
          className="flex gap-4 md:gap-8 overflow-x-auto px-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          onMouseEnter={handleInteractStart}
          onMouseLeave={handleInteractEnd}
          onTouchStart={handleInteractStart}
          onTouchEnd={handleInteractEnd}
        >
          {row1.map((item, index) => (
            <TestimonialCard key={`r1-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2 */}
        <div 
          ref={row2Ref}
          className="flex gap-4 md:gap-8 overflow-x-auto px-8 pb-4 ml-4 md:ml-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          onMouseEnter={handleInteractStart}
          onMouseLeave={handleInteractEnd}
          onTouchStart={handleInteractStart}
          onTouchEnd={handleInteractEnd}
        >
          {fullRow2.map((item, index) => (
            <TestimonialCard key={`r2-${index}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
