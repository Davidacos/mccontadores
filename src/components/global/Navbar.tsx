"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaSearchDollar, FaChartPie, FaFileInvoiceDollar, FaBuilding } from "react-icons/fa";

const links = [
  { name: "Inicio", path: "/" },
  { 
    name: "Portafolio", 
    path: "/portafolio",
    submenu: [
      { name: "Contabilidad", path: "/portafolio/contabilidad", icon: FaChartPie, desc: "Estados financieros" },
      { name: "Impuestos", path: "/portafolio/impuestos", icon: FaFileInvoiceDollar, desc: "Planeación fiscal" },
      { name: "Asesoría", path: "/portafolio/asesoria", icon: FaSearchDollar, desc: "Financiera y riesgos" },
      { name: "Outsourcing", path: "/portafolio/outsourcing", icon: FaBuilding, desc: "Gestión administrativa" },
    ]
  },
  { name: "Sobre Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-full">
        
        {/* Desktop Left Nav */}
        <div className="hidden md:flex flex-1 justify-end pr-8 lg:pr-12">
          <nav className="flex gap-8 lg:gap-10 items-center">
            {links.slice(0, 2).map((link) => {
              const isActive = pathname === link.path || (link.submenu && pathname.startsWith(link.path + '/'));
              const isHovered = hoveredLink === link.name;
              
              return (
                <div 
                  key={link.path}
                  className="relative py-2"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 text-[15px] font-bold transition-colors hover:text-color-gold ${
                      isActive ? "text-color-gold" : "text-color-navy"
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <HiChevronDown className={`transition-transform duration-300 ${isHovered ? 'rotate-180 text-color-gold' : ''}`} />
                    )}
                    {isActive && !isHovered && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-[2px] w-full bg-color-gold"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 grid grid-cols-2 gap-4"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                          
                          {link.submenu.map((sub, i) => (
                            <Link 
                              key={i} 
                              href={sub.path}
                              onClick={() => setHoveredLink(null)}
                              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-color-gray-light transition-colors duration-300 relative z-10"
                            >
                              <div className="w-12 h-12 rounded-full bg-color-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-color-navy group-hover:text-color-gold transition-colors duration-300">
                                <sub.icon className="text-xl text-color-navy group-hover:text-color-gold transition-colors duration-300" />
                              </div>
                              <div>
                                <h4 className="text-color-navy font-bold text-sm mb-1 group-hover:text-color-gold transition-colors duration-300">{sub.name}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{sub.desc}</p>
                              </div>
                            </Link>
                          ))}
                          
                          <div className="col-span-2 mt-2 pt-4 border-t border-gray-100 flex justify-between items-center px-4">
                            <p className="text-xs text-gray-500 font-medium">Outsourcing Integral de alto nivel</p>
                            <Link href="/portafolio" className="text-xs font-bold text-color-gold hover:text-color-navy transition-colors">
                              Ver todo el Portafolio &rarr;
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Logo (Centered) */}
        <div className="flex-shrink-0 flex justify-center">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="font-serif font-bold text-3xl tracking-tighter text-color-gold">
              MC
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-color-navy font-bold text-sm tracking-widest uppercase">
                Contadores
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Right Nav */}
        <div className="hidden md:flex flex-1 justify-start pl-8 lg:pl-12">
          <nav className="flex gap-8 lg:gap-10 items-center">
            {links.slice(2, 4).map((link) => {
              const isActive = pathname === link.path;
              const isContact = link.name === "Contacto";
              
              return (
                <div key={link.path} className="relative py-2">
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 text-[15px] transition-all duration-300 ${
                      isContact
                        ? "bg-color-gold text-color-navy px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-color-navy hover:text-white hover:shadow-xl hover:-translate-y-1"
                        : `font-bold hover:text-color-gold ${isActive ? "text-color-gold" : "text-color-navy"}`
                    }`}
                  >
                    {link.name}
                    {isActive && !isContact && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-[2px] w-full bg-color-gold"
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex flex-1 justify-end z-[60]">
          <button
            className="text-color-navy bg-white/90 p-2 rounded-xl shadow-md backdrop-blur-md focus:outline-none transition-all active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-2 md:hidden border-t border-gray-100 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link) => (
            <div key={link.path}>
              <Link
                href={link.path}
                onClick={() => !link.submenu && setIsOpen(false)}
                className={`flex items-center justify-between text-lg font-bold p-3 rounded-xl transition-colors ${
                  pathname === link.path || (link.submenu && pathname.startsWith(link.path + '/'))
                    ? "bg-color-navy text-color-gold"
                    : "text-color-navy hover:bg-color-gray-light"
                }`}
              >
                {link.name}
              </Link>
              
              {/* Mobile Submenu (always expanded for simplicity, or we can just list them) */}
              {link.submenu && (
                <div className="pl-6 pt-2 pb-4 flex flex-col gap-2 border-l-2 border-color-gray-light ml-4 mt-2">
                  {link.submenu.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium transition-colors ${
                        pathname === sub.path ? "text-color-gold" : "text-gray-600 hover:text-color-navy hover:bg-color-gray-light"
                      }`}
                    >
                      <sub.icon className="text-lg opacity-70" />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
