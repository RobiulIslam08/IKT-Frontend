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
            AISI 4140 High-Fatigue Chromium Molybdenum Steel Plate
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
                  Exceptional Toughness & Corrosion Resistance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  AISI 4140 plate is a low alloy structural steel containing 1% chromium and molybdenum. Renowned as "chrome-moly," this grade exhibits excellent toughness and superior corrosion resistance due to its chemical composition. It is specifically designed to withstand heavy loads and high-impact conditions while minimizing the risk of failure in critical assemblies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Fabrication & Machining */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Machinability & Structural Integrity
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Despite its immense strength and abrasion resistance, 4140 plate offers good machinability, allowing it to be processed into complex precision parts. While weldable, preheating is required to manage its crack sensitivity. This balanced profile makes it ideal for machinery parts, crankshafts, and high-fatigue gears.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Bespoke Supply in KSA */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Bespoke Sizing & Availability
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT maintains a robust stock of 4140 plates in 2000 x 1000mm formats, with thicknesses ranging from 32mm to 120mm. Supporting the industrial hubs of Saudi Arabia, we provide in-house cutting services to supply bespoke sizes tailored strictly to your engineering specifications, alongside 4140 round bar and forged options.
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