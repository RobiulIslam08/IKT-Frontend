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
            Material Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            PS09 Martensitic Stainless Mould Steel (DIN 1.2316)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Core Characteristics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Extreme Corrosion Resistance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT prominently features PS09, a specialized chrome-molybdenum mould steel. Because it offers noticeably higher corrosion resistance than standard 1.2083 grades, it is heavily favored in the plastics industry. It is the definitive material for manufacturing moulds exposed to chemically aggressive compounds like PVC and highly abrasive filler plastics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Processing & Condition */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Pre-Hardened & Polishable
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  To streamline your machining timeline, we deliver PS09 in a pre-hardened condition (available in either 300 HB or 340 HB). This uniform hardness is consistent across all dimensions, eliminating the need for post-machining heat treatment. Furthermore, its fine micro-structure allows for exceptionally high-gloss polishability, ensuring flawless plastic ejection.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Crucial Warning */}
          <motion.div variants={itemVariants} className="bg-red-50 border border-red-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-red-100 rounded-xl">
                <PackageOpen className="w-8 h-8 text-red-600 shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Crucial Treatment Warning
                </h2>
                <p className="text-base font-medium text-gray-800 leading-relaxed">
                  <span className="font-bold">Important Notice:</span> Due to the exceptionally high chromium content (15.50 - 17.50%) native to PS09 (1.2316), this material is <span className="font-bold text-red-600">strictly not suitable</span> for surface nitriding or standard chrome plating. Attempting these treatments will severely compromise the structural integrity of the mould.
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