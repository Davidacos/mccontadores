"use client";

import { motion } from "framer-motion";

export default function AnimatedUnderline() {
  return (
    <motion.svg
      className="absolute -bottom-3 left-0 w-full h-4 text-color-gold opacity-80"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 2 12 L 12 18 L 24 4 L 36 19 L 48 5 L 62 18 L 74 6 L 86 17 L 98 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
