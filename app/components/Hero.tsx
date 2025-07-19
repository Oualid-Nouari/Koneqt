'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Changed from a default export to a named export
export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block border border-white/50 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Solution d'Automatisation
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffffff] leading-tight mb-4">
          Passez moins de temps sur <span className="text-[#00a2ff]">vos devis.</span>
          <br />
          Gagnez plus de clients.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-[#ffffff]/70 max-w-md sm:max-w-2xl mx-auto mb-8">
          Nous transformons la création de vos propositions commerciales en un processus de 60 secondes.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#a05cff] text-[#ffffff] font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#a05cff]/30 hover:shadow-[#a05cff]/50 hover:scale-105 hover:brightness-110"
          >
            Démo Gratuite
          </a>
          <a
            href="#processus"
            className="w-full sm:w-auto bg-transparent border-2 border-white/50 hover:bg-white/10 text-[#ffffff] font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Comment ça marche ?
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};