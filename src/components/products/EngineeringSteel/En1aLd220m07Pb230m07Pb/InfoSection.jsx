/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, Settings, PackageOpen } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
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
            EN1A Leaded Mild Steel (Equivalent to 230M07Pb, 12L14)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Technical Overview */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Technical Insights: Free-Machining Efficiency
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Available exclusively through IKT, EN1A Leaded (Pb) is a specialized low-carbon steel engineered specifically for extensive machining. By integrating lead (0.15-0.35%) into the alloy, it creates an internal lubrication effect that ensures rapid, clean cuts and significantly extends the lifespan of cutting tools. Due to the lead content, we advise against using this grade for welded assemblies or food-contact applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Machinability & Performance */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Settings className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Machinability & Performance Excellence
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The addition of lead acts as a microscopic chip breaker during the manufacturing process. This results in shorter chips, reduced friction, and superior surface finishes compared to standard non-leaded alternatives. IKT highly recommends this grade for high-volume production runs using high-speed CNC and automatic lathe machinery where precision and speed are paramount.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Form & Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Diverse Formats & Ready Stock
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT ensures that your production never halts by maintaining an extensive inventory. Whether your project requires Bright Drawn, Precision Ground, or Hot Rolled finishes, we supply EN1A Leaded steel in comprehensive imperial and metric profiles. Our stock includes round bars, flat sections, squares, and hexagons, tailored to meet strict industrial tolerances.
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