'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Settings, Send } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Étape 1: Remplissez notre formulaire de démarrage.",
    description: "Dites-nous qui vous êtes et partagez vos éléments de marque (logo, couleurs)."
  },
  {
    icon: Settings,
    title: "Étape 2: Nous configurons votre système.",
    description: "Notre équipe prépare votre espace personnalisé sous 48h. Aucune action n'est requise de votre part."
  },
  {
    icon: Send,
    title: "Étape 3: Lancez votre essai gratuit.",
    description: "Recevez vos accès par email et commencez à générer vos propositions."
  }
];

export const HowItWorksSection = () => {
  return (
    // FIX: Added py-20 for mobile and sm:py-32 for larger screens
    <section id="processus" className="py-20 sm:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Un Processus Simple, un Résultat Puissant
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            En seulement 3 étapes, nous mettons en place un système qui vous fera gagner des heures chaque semaine.
          </p>
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10" aria-hidden="true"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 pb-12"
            >
              <div className="absolute left-0 top-0">
                <div className="w-8 h-8 rounded-full bg-[#a05cff] flex items-center justify-center ring-8 ring-[#02040a]">
                  <step.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};