/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            P20 Series Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            Understanding the 1.2311, 1.2312, and 1.2738 Variants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Standard P20 */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Standard P20 (DIN 1.2311)
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Supplied pre-hardened to approximately 300 HB (65 t.s.i), standard P20 requires absolutely no post-machining heat treatment. This crucial feature completely eliminates the risks of warping, distortion, or cracking. Despite its pre-hardened state, it retains excellent machinability and is capable of achieving a highly polished finish for premium plastic moulds.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: P20S */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  High-Machinability P20S (DIN 1.2312)
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Delivered at 280/325 HB, P20S shares the core properties of standard P20 but is formulated with a higher sulphur content. This specialized adjustment drastically improves its machinability, making it the perfect choice for large mould frames and massive bolsters. However, due to the sulphur, this grade is not suitable for high-gloss polishing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: P20N */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Heavy-Section P20N (DIN 1.2738)
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  When designing massive pressing tools where the cross-section exceeds 400mm, standard P20 struggles to maintain consistent through-hardness. P20N (1.2738) solves this by incorporating added Nickel. It guarantees uniform hardness (280/325 HB) right to the core of massive blocks, whilst remaining extremely easy to polish and highly suitable for hard chrome plating or nitriding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;