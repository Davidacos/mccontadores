"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaHospital, FaIndustry, FaCity, FaLandmark, FaHotel } from "react-icons/fa";

export default function ClientLogos() {
  const logos = [
    { icon: FaBuilding, name: "CorpGroup", color: "text-blue-600" },
    { icon: FaHospital, name: "SaludPlus", color: "text-teal-500" },
    { icon: FaIndustry, name: "InduTech", color: "text-gray-700" },
    { icon: FaCity, name: "UrbanReal", color: "text-indigo-600" },
    { icon: FaLandmark, name: "BankGlobal", color: "text-emerald-600" },
    { icon: FaHotel, name: "PremiumStay", color: "text-rose-600" },
  ];

  return (
    <div className="pt-8 pb-4 w-full relative z-10">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-sm font-bold text-color-navy/40 tracking-widest uppercase">
          Empresas que confían en nosotros
        </p>
      </div>
      
      <div className="relative w-full flex flex-col gap-8 md:gap-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Moves Left to Right */}
        <motion.div
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate logos to ensure seamless scroll */}
          {[...logos, ...logos, ...logos].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div 
                key={`row1-${index}`} 
                className={`flex items-center gap-2 md:gap-3 transition-transform duration-300 hover:scale-110 cursor-pointer ${logo.color}`}
              >
                <Icon className="text-3xl md:text-4xl" />
                <span className="text-lg md:text-xl font-bold tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Row 2: Moves Right to Left (Negative to Zero) */}
        <motion.div
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-4 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Slightly different duration for a parallax feel
              ease: "linear",
            },
          }}
        >
          {/* Duplicate logos to ensure seamless scroll, reverse the array so it looks different */}
          {[...logos.reverse(), ...logos, ...logos].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div 
                key={`row2-${index}`} 
                className={`flex items-center gap-2 md:gap-3 transition-transform duration-300 hover:scale-110 cursor-pointer ${logo.color}`}
              >
                <Icon className="text-3xl md:text-4xl" />
                <span className="text-lg md:text-xl font-bold tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
