'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  return (
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
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#00a2ff]">Offre de Lancement</h3>
          <p className="mt-4 text-5xl font-extrabold text-white">
            Démarrez avec 7 Jours Gratuits
          </p>
          <p className="mt-4 text-white/70">
            Testez notre service complet, sans engagement. Nous mettons en place votre système et vous l'utilisez gratuitement pendant 7 jours pour voir les résultats par vous-même.
          </p>
          
          {/* --- UPDATED BULLET POINT CONTAINER --- */}
          {/* Removed 'mx-auto' and adjusted wrapper for proper left alignment */}
          <div className="my-8 border-t border-white/10 pt-8">
            <div className="text-left space-y-3 inline-block">
              <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Mise en place complète du système.</span></p>
              <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Création de votre modèle de proposition personnalisé.</span></p>
              <p className="flex items-center"><Check className="w-5 h-5 text-[#00a2ff] mr-3 flex-shrink-0" /> <span>Génération de propositions illimitées.</span></p>
            </div>
          </div>

          <div className="text-left">
            <h4 className="text-center text-xl font-bold text-white mb-6">Après votre essai, choisissez votre plan :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-xl border-2 border-[#a05cff] bg-[#a05cff]/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#a05cff] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">RECOMMANDÉ</div>
                <h5 className="text-xl font-bold text-white">Offre Early Bird</h5>
                <p className="mt-2 text-4xl font-extrabold text-white">750 DH<span className="text-lg font-medium text-white/70"> /mois</span></p>
                <p className="text-md font-semibold text-white/90">À vie.</p>
                <p className="mt-4 text-sm text-white/70">
                  Offre exclusive valable en confirmant votre abonnement durant vos 7 jours d'essai.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-xl border border-white/20 bg-white/5"
              >
                <h5 className="text-xl font-bold text-white/80">Tarif Standard</h5>
                <p className="mt-2 text-4xl font-extrabold text-white/80">1000 DH<span className="text-lg font-medium text-white/60"> /mois</span></p>
                <p className="text-md font-semibold text-white/60">Tarif normal.</p>
                <p className="mt-4 text-sm text-white/60">
                  Le tarif standard appliqué après la période de lancement de l'offre Early Bird.
                </p>
              </motion.div>

            </div>
          </div>
          
          {/* --- CTA BUTTON MOVED HERE --- */}
          <a
            href="#formulaire"
            className="mt-10 inline-block w-full sm:w-auto bg-[#a05cff] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#a05cff]/30 hover:shadow-[#a05cff]/50 hover:scale-105 hover:brightness-110"
          >
            Commencer mon Essai Gratuit
          </a>
          
        </motion.div>
      </div>
    </section>
  );
};