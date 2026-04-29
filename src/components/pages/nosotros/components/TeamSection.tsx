"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import OptimizedImage from "@/components/global/OptimizedImage";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Profesional 1",
      role: "Socio Fundador / Director Contable",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "Experto en finanzas corporativas y planeación tributaria con más de 15 años de experiencia asesorando grandes empresas."
    },
    {
      name: "Profesional 2",
      role: "Especialista Tributario",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Líder del área fiscal, encargada de estructuración impositiva y cumplimiento normativo ante entidades regulatorias."
    },
    {
      name: "Profesional 3",
      role: "Auditor Senior",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      bio: "Especialista en auditoría financiera y NIIF, enfocado en el fortalecimiento del control interno y mitigación de riesgos."
    }
  ];

  return (
    <section className="py-24 bg-color-gray-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-color-navy/20 rounded-full mb-4 bg-white shadow-sm">
            <span className="text-color-navy font-bold text-xs tracking-widest uppercase">Nuestro Talento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-color-navy mb-6">
            Conozca a nuestros <span className="text-color-gold">Profesionales</span>
          </h2>
          <p className="text-lg text-color-navy/80 max-w-2xl mx-auto">
            Un equipo humano interdisciplinario, ético y altamente calificado, comprometido con el éxito de su compañía.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 flex flex-col h-full">
                
                {/* Photo */}
                <div className="relative h-96 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-color-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  <OptimizedImage 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    containerClassName="w-full h-full"
                  />
                  
                  {/* Floating Social Icons */}
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-color-gold text-color-navy flex items-center justify-center hover:bg-white hover:text-color-navy shadow-lg transition-colors">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-color-navy text-white flex items-center justify-center hover:bg-color-gold hover:text-color-navy shadow-lg transition-colors">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative bg-white z-20">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-color-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <h3 className="text-2xl font-bold text-color-navy mb-2">{member.name}</h3>
                  <div className="inline-block px-3 py-1 bg-color-navy/5 text-color-navy rounded-lg text-xs font-bold uppercase tracking-wide mb-4 self-start">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
