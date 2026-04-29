"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import OptimizedImage from "@/components/global/OptimizedImage";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, email, phone, service, message } = formData;
    
    const text = `Hola MC Contadores, mi nombre es *${name}*.\n\n*Correo:* ${email}\n*Teléfono:* ${phone}\n*Servicio de interés:* ${service || 'No especificado'}\n\n*Mensaje:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/573182600651?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative bg-color-navy text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
            alt="Atención al cliente y contacto"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 mix-blend-luminosity"
            containerClassName="w-full h-full"
          />
          {/* Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-color-navy/95 via-color-navy/85 to-color-navy"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Ponte en <span className="text-color-gold relative inline-block">
                Contacto
                <AnimatedUnderline />
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Estamos aquí para resolver sus dudas y ofrecerle la mejor propuesta técnica y económica para su empresa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-color-gray-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
            
            {/* Contact Information */}
            <div className="lg:w-2/5 bg-color-navy text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-color-gold rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-color-gold rounded-full opacity-10 translate-y-1/3 -translate-x-1/4"></div>
              
              <AnimatedSection className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
                
                <div className="flex flex-col gap-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30">
                      <FaPhoneAlt className="text-color-gold text-lg" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">Teléfonos</h3>
                      <p className="text-gray-300">318 260 0651</p>
                      <p className="text-gray-300">321 402 4276</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30">
                      <FaEnvelope className="text-color-gold text-lg" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">Correo Electrónico</h3>
                      <a href="mailto:mc.contadorescol@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                        mc.contadorescol@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30">
                      <FaMapMarkerAlt className="text-color-gold text-lg" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">Ubicación</h3>
                      <p className="text-gray-300">Atención a nivel nacional</p>
                      <p className="text-gray-300">Sede principal: Colombia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <h3 className="text-white font-bold mb-4">Síguenos en Redes Sociales</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/McContadorescol" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center text-white hover:bg-color-gold hover:text-color-navy transition-all duration-300 border border-color-gold/30 hover:border-transparent"
                    >
                      <FaInstagram size={22} />
                    </a>
                    <a 
                      href="https://facebook.com/McContadorescol" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center text-white hover:bg-color-gold hover:text-color-navy transition-all duration-300 border border-color-gold/30 hover:border-transparent"
                    >
                      <FaFacebook size={22} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-bold text-color-navy mb-2">Envíenos un Mensaje</h2>
                <p className="text-gray-600 mb-8">
                  Complete el siguiente formulario y nuestro equipo de profesionales se pondrá en contacto con usted a la brevedad.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
                    <p>Gracias por contactarnos. Hemos recibido su mensaje y le responderemos muy pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-color-navy">Nombre Completo *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-color-gold focus:ring-1 focus:ring-color-gold outline-none transition-colors"
                          placeholder="Ej. Juan Pérez"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-color-navy">Teléfono / Celular *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-color-gold focus:ring-1 focus:ring-color-gold outline-none transition-colors"
                          placeholder="Ej. 300 123 4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-color-navy">Correo Electrónico *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-color-gold focus:ring-1 focus:ring-color-gold outline-none transition-colors"
                          placeholder="Ej. juan@empresa.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-color-navy">Servicio de Interés</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-color-gold focus:ring-1 focus:ring-color-gold outline-none transition-colors bg-white"
                        >
                          <option value="">Seleccione una opción</option>
                          <option value="outsourcing">Outsourcing Integral</option>
                          <option value="contable">Gestión Contable</option>
                          <option value="tributaria">Tributaria y Fiscal</option>
                          <option value="financiero">Análisis Financiero</option>
                          <option value="auditoria">Revisión y Auditoría</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-color-navy">Mensaje *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-color-gold focus:ring-1 focus:ring-color-gold outline-none transition-colors resize-none"
                        placeholder="¿En qué podemos ayudarle?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-color-gold text-color-navy font-bold rounded-md transition-all duration-300 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-color-navy hover:text-white"
                      }`}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
