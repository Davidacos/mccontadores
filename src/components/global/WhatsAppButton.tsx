"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const messages = [
  "¡Hola! ¿Necesita asesoría?",
  "Estamos en línea",
  "¿Dudas con sus impuestos?",
  "Hablemos por WhatsApp",
];

export default function WhatsAppButton() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Rotate messages every 5 seconds
  useEffect(() => {
    // Initial delay before showing the first message
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Message Bubble */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block bg-white text-color-navy font-bold text-sm py-2 px-4 rounded-2xl shadow-lg border border-gray-100 relative"
          >
            {messages[currentMessageIndex]}
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent border-l-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a 
        href="https://wa.me/573182600651?text=Hola%20MC%20Contadores,%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa." 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <FaWhatsapp className="text-4xl relative z-10" />
      </motion.a>
    </div>
  );
}
