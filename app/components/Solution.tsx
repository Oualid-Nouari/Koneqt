'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, AlertTriangle } from 'lucide-react';

export const SolutionSection = () => {
  return (
    // FIX: Changed padding to py-20 for mobile and sm:py-32 for larger screens
    <section id="solution" className="py-20 sm:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Une tâche simple qui vous coûte cher.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              La création manuelle de devis est lente, sujette aux erreurs et vous empêche de vous concentrer sur votre cœur de métier. Nous avons changé cela.
            </p>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">L'Ancienne Méthode (La Douleur)</h3>
                  <p className="mt-2 text-white/70">
                    Copier-coller, calculs manuels, formatage... Un processus lent qui peut prendre des heures et ralentit vos ventes.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="p-6 bg-[#00a2ff]/10 border border-[#00a2ff]/50 rounded-2xl ring-2 ring-[#00a2ff]/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#00a2ff]/10 p-2 rounded-full">
                  <Zap className="h-6 w-6 text-[#00a2ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00a2ff]">La Méthode Koneqt (La Solution)</h3>
                  <p className="mt-2 text-white/90">
                    Remplissez un formulaire en 60 secondes. Recevez instantanément une proposition PDF parfaite, professionnelle et sans erreur.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};