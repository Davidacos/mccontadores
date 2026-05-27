"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/global/AnimatedSection";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactInfoBanner() {
  const contactMethods = [
    {
      title: "WhatsApp",
      desc: "Escríbenos para asesoría",
      icon: FaWhatsapp,
      link: "https://wa.me/573159105890?text=Hola%20MC%20Contadores,%20estoy%20interesado%20en%20sus%20servicios.",
      color: "hover:bg-green-500 hover:text-white hover:border-green-500",
      iconColor: "text-green-500",
    },
    {
      title: "Líneas de Atención",
      desc: "315 910 5890",
      icon: FaPhoneAlt,
      link: "tel:+573159105890",
      color: "hover:bg-color-navy hover:text-white hover:border-color-navy",
      iconColor: "text-color-navy",
    },
    {
      title: "Correo Electrónico",
      desc: "gerencia@mccontadorescol.com",
      icon: FaEnvelope,
      link: "mailto:gerencia@mccontadorescol.com",
      color: "hover:bg-color-gold hover:text-color-navy hover:border-color-gold",
      iconColor: "text-color-gold",
    },
    {
      title: "Instagram",
      desc: "@McContadorescol",
      icon: FaInstagram,
      link: "https://instagram.com/McContadorescol",
      color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent",
      iconColor: "text-purple-500",
    },
    {
      title: "Facebook",
      desc: "MC Contadores COL",
      icon: FaFacebook,
      link: "https://www.facebook.com/people/Mccontadores-Col/pfbid0M8MeXipBQDk3RRrbhUsQ56eDfXEevF7PiUndegaWeSyRDfGdVb27n8ADujhqXFYJl/?mibextid=wwXIfr&rdid=zuV7KwbMefMlVOlK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D6YR2BCSF%2F%3Fmibextid%3DwwXIfr",
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
      iconColor: "text-blue-600",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-color-gold/10 text-color-navy font-bold rounded-full text-sm tracking-widest uppercase mb-4 border border-color-gold/30">
            Comunícate con Nosotros
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-color-navy mb-4">
            Estamos para <span className="text-color-gold">Ayudarte</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Disponemos de múltiples canales de atención para brindarte asesoría oportuna, clara y profesional. ¡Contáctanos!
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-auto xl:flex-1 relative overflow-hidden ${method.color}`}
            >
              <div className={`text-5xl mb-4 transition-colors duration-300 group-hover:text-white relative z-10 ${method.iconColor}`}>
                <method.icon />
              </div>
              <h3 className="text-xl font-bold text-color-navy mb-2 group-hover:text-white transition-colors duration-300 relative z-10 text-center">
                {method.title}
              </h3>
              <p className="text-sm text-gray-500 text-center group-hover:text-white/90 transition-colors duration-300 relative z-10">
                {method.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
