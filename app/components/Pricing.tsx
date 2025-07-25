'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  return (
    // FIX: Added py-20 for mobile and sm:py-32 for larger screens
    <section id="tarifs" className="py-20 sm:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Une Offre Simple et Transparente
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Nous croyons en notre produit. C'est pourquoi nous vous offrons l'opportunité de le tester sans aucun risque.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#00a2ff]">Offre de Lancement</h3>
          <p className="mt-4 text-5xl font-extrabold text-white">
            Votre Premier Mois est Gratuit
          </p>
          <p className="mt-4 text-white/70">
            Testez notre service complet, sans engagement. Nous mettons en place votre système d'automatisation et vous l'utilisez gratuitement pendant 30 jours pour voir les résultats par vous-même.
          </p>
          <div className="my-8 border-t border-white/10"></div>
          <div className="text-left space-y-3">
            <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Mise en place complète du système.</span></p>
            <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Création de votre modèle de proposition personnalisé.</span></p>
            <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Génération de propositions illimitées.</span></p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-block w-full sm:w-auto bg-[#a05cff] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#a05cff]/30 hover:shadow-[#a05cff]/50 hover:scale-105 hover:brightness-110"
          >
            Commencer mon Essai Gratuit
          </a>
          <p className="mt-8 text-lg font-bold text-white">
            Après le premier mois : <span className="text-white/80 font-semibold">500 DH/mois</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
