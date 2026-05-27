import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import OptimizedImage from "@/components/global/OptimizedImage";

export default function Footer() {
  return (
    <footer className="bg-color-navy text-white pt-20 pb-8 border-t border-color-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-color-navy-light pb-16">
          
          {/* Logo & About */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" className="inline-block w-max transition-transform duration-300 hover:scale-105">
              <OptimizedImage
                src="/images/logo.png"
                alt="Logo MC Contadores COL S.A.S"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Firma especializada en servicios de auditoría y consultoría contable, orientada a proporcionar soluciones integrales bajo los más altos estándares de calidad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Navegación
              <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-color-gold"></div>
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Inicio
              </Link>
              <Link href="/portafolio" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Portafolio de Servicios
              </Link>
              <Link href="/nosotros" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Sobre Nosotros
              </Link>
              <a href="https://wa.me/573159105890?text=Hola%20MC%20Contadores,%20estoy%20interesado%20en%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Contacto
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Especialidades
              <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-color-gold"></div>
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/portafolio/contabilidad" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Gestión Contable
              </Link>
              <Link href="/portafolio/impuestos" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Tributaria y Fiscal
              </Link>
              <Link href="/portafolio/asesoria" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Análisis Financiero
              </Link>
              <Link href="/portafolio/outsourcing" className="text-gray-400 hover:text-color-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-color-gold/50 group-hover:bg-color-gold transition-colors"></span>
                Outsourcing Integral
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contacto
              <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-color-gold"></div>
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-color-gold transition-colors duration-300">
                  <FaPhoneAlt className="text-color-gold group-hover:text-color-navy transition-colors duration-300 text-xs" />
                </div>
                <div className="flex flex-col pt-1">
                  <a href="tel:+573159105890" className="hover:text-white transition-colors">
                    315 910 5890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-color-gold transition-colors duration-300">
                  <FaEnvelope className="text-color-gold group-hover:text-color-navy transition-colors duration-300 text-xs" />
                </div>
                <a href="mailto:gerencia@mccontadorescol.com" className="hover:text-white transition-colors pt-1">
                  gerencia@mccontadorescol.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 mt-2">
                <a 
                  href="https://instagram.com/McContadorescol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-color-gold hover:border-color-gold hover:text-color-navy transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/people/Mccontadores-Col/pfbid0M8MeXipBQDk3RRrbhUsQ56eDfXEevF7PiUndegaWeSyRDfGdVb27n8ADujhqXFYJl/?mibextid=wwXIfr&rdid=zuV7KwbMefMlVOlK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D6YR2BCSF%2F%3Fmibextid%3DwwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-color-gold hover:border-color-gold hover:text-color-navy transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 flex justify-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MC Contadores COL S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
