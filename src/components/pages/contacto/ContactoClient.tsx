"use client";

import AnimatedSection from "@/components/global/AnimatedSection";
import OptimizedImage from "@/components/global/OptimizedImage";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaUser,
  FaClipboardList,
  FaCommentAlt,
} from "react-icons/fa";
import { useState } from "react";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

export default function ContactoClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, service, message } = formData;

    const text = `Hola MC Contadores, mi nombre es *${name}*.\n\n*Correo:* ${email}\n*Teléfono:* ${phone}\n*Servicio de interés:* ${service || "No especificado"}\n\n*Mensaje:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/573214024276?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

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
              Ponte en{" "}
              <span className="text-color-gold relative inline-block">
                Contacto
                <AnimatedUnderline />
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Estamos aquí para resolver sus dudas y ofrecerle la mejor
              propuesta técnica y económica para su empresa.
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
                <h2 className="text-3xl font-bold mb-8">
                  Información de Contacto
                </h2>

                <div className="flex flex-col gap-8 flex-grow">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30 group-hover:bg-color-gold transition-colors duration-300 shadow-md">
                      <FaPhoneAlt className="text-color-gold text-lg group-hover:text-color-navy transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">
                        Teléfonos
                      </h3>
                      <a
                        href="tel:+573182600651"
                        className="text-gray-300 hover:text-white transition-colors block py-0.5"
                      >
                        +57 318 260 0651
                      </a>
                      <a
                        href="tel:+573214024276"
                        className="text-gray-300 hover:text-white transition-colors block py-0.5"
                      >
                        +57 321 402 4276
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30 group-hover:bg-color-gold transition-colors duration-300 shadow-md">
                      <FaEnvelope className="text-color-gold text-lg group-hover:text-color-navy transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">
                        Correo Electrónico
                      </h3>
                      <a
                        href="mailto:mc.contadorescol@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors block py-0.5"
                      >
                        mc.contadorescol@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-color-navy-light flex items-center justify-center flex-shrink-0 border border-color-gold/30 group-hover:bg-color-gold transition-colors duration-300 shadow-md">
                      <FaMapMarkerAlt className="text-color-gold text-lg group-hover:text-color-navy transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-color-gold font-bold mb-1">
                        Ubicación
                      </h3>
                      <a
                        href="https://maps.google.com/?q=Colombia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors block py-0.5"
                      >
                        Atención a nivel nacional
                        <br />
                        Sede principal: Colombia
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <h3 className="text-white font-bold mb-4">
                    Síguenos en Redes Sociales
                  </h3>
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
                <h2 className="text-3xl font-bold text-color-navy mb-2">
                  Envíenos un Mensaje
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete el siguiente formulario y nuestro equipo de
                  profesionales se pondrá en contacto con usted a la brevedad.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p>
                      Gracias por contactarnos. Hemos recibido su mensaje y le
                      responderemos muy pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="peer w-full pl-11 pr-4 pt-6 pb-2 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-color-gold focus:shadow-md outline-none transition-all duration-300 shadow-sm"
                          placeholder=" "
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-11 transition-all duration-300 pointer-events-none ${formData.name ? "top-1.5 text-xs text-color-navy font-bold" : "top-4 text-base text-gray-400"} peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-color-gold peer-focus:font-bold`}
                        >
                          Nombre Completo *
                        </label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-color-gold transition-colors duration-300">
                          <FaUser />
                        </div>
                      </div>
                      <div className="relative group">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="peer w-full pl-11 pr-4 pt-6 pb-2 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-color-gold focus:shadow-md outline-none transition-all duration-300 shadow-sm"
                          placeholder=" "
                        />
                        <label
                          htmlFor="phone"
                          className={`absolute left-11 transition-all duration-300 pointer-events-none ${formData.phone ? "top-1.5 text-xs text-color-navy font-bold" : "top-4 text-base text-gray-400"} peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-color-gold peer-focus:font-bold`}
                        >
                          Teléfono / Celular *
                        </label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-color-gold transition-colors duration-300">
                          <FaPhoneAlt />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="peer w-full pl-11 pr-4 pt-6 pb-2 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-color-gold focus:shadow-md outline-none transition-all duration-300 shadow-sm"
                          placeholder=" "
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-11 transition-all duration-300 pointer-events-none ${formData.email ? "top-1.5 text-xs text-color-navy font-bold" : "top-4 text-base text-gray-400"} peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-color-gold peer-focus:font-bold`}
                        >
                          Correo Electrónico *
                        </label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-color-gold transition-colors duration-300">
                          <FaEnvelope />
                        </div>
                      </div>
                      <div className="relative group">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="peer w-full pl-11 pr-4 pt-6 pb-2 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-color-gold focus:shadow-md outline-none transition-all duration-300 shadow-sm appearance-none"
                        >
                          <option value="" disabled hidden></option>
                          <option value="outsourcing">
                            Outsourcing Integral
                          </option>
                          <option value="contable">Gestión Contable</option>
                          <option value="tributaria">
                            Tributaria y Fiscal
                          </option>
                          <option value="financiero">
                            Análisis Financiero
                          </option>
                          <option value="auditoria">
                            Revisión y Auditoría
                          </option>
                          <option value="otro">Otro</option>
                        </select>
                        <label
                          htmlFor="service"
                          className={`absolute left-11 transition-all duration-300 pointer-events-none ${formData.service ? "top-1.5 text-xs text-color-navy font-bold" : "top-4 text-base text-gray-400"} peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-color-gold peer-focus:font-bold`}
                        >
                          Servicio de Interés
                        </label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-color-gold transition-colors duration-300">
                          <FaClipboardList />
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="peer w-full pl-11 pr-4 pt-6 pb-2 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-color-gold focus:shadow-md outline-none transition-all duration-300 shadow-sm resize-none"
                        placeholder=" "
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-11 transition-all duration-300 pointer-events-none ${formData.message ? "top-2 text-xs text-color-navy font-bold" : "top-4 text-base text-gray-400"} peer-focus:top-2 peer-focus:text-xs peer-focus:text-color-gold peer-focus:font-bold`}
                      >
                        Mensaje *
                      </label>
                      <div className="absolute left-4 top-4 text-gray-400 peer-focus:text-color-gold transition-colors duration-300">
                        <FaCommentAlt />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-4 overflow-hidden rounded-xl font-bold text-lg transition-all duration-300 shadow-lg group ${
                        isSubmitting
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-gradient-to-r from-color-navy to-blue-900 text-white hover:shadow-xl hover:-translate-y-1"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-color-gold to-yellow-500 transition-opacity duration-300 ${isSubmitting ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}
                      ></div>
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          "Enviar Mensaje"
                        )}
                      </span>
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
