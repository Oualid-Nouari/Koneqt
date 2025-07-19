'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CalendlyEmbed from './CalendlyEmbed';

export const DemoSection = () => {
  return (
    // FIX: Added scroll-mt-24
    <section id="contact" className="sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Prêt à Gagner des Heures ?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Choisissez un créneau ci-dessous pour une démo gratuite. Voyez par vous-même comment notre système peut transformer votre processus de vente.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl"
        >
          <CalendlyEmbed />
        </motion.div>
      </div>
    </section>
  );
};