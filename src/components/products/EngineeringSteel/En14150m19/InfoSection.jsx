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
    <div className="bg-gray-50 py-5 md:py-10">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Material Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            EN14 Carbon Manganese Steel (150M19 / AISI 1524)
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
                  Weldability and Shock Resistance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Offered by IKT, EN14 (frequently recognized as 150M19) is a specialized carbon-manganese steel formulated for robust engineering. Its unique composition not only provides substantial ductility but also delivers extraordinary resistance to mechanical shocks, making it an excellent choice for dynamic structural applications.
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
                  Hardening & Tempering Potential
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  One of the key attributes of EN14 steel is its high suitability for welding operations without compromising structural integrity. Furthermore, it responds exceptionally well to heat treatments. When properly hardened and tempered, IKT’s EN14 can comfortably achieve a medium tensile strength ranging from 550 to 850 N/mm².
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Extensive Form Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Readily Available Hot Rolled Profiles
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT primarily stocks EN14 in an extensive range of hot-rolled round diameters to accommodate various industrial projects. In addition to standard mill finishes, we exclusively supply EN14A bars enhanced with hard chrome plating for applications demanding supreme surface hardness and corrosion resistance.
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