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
            AISI 1020 Mild Carbon / Low Carbon Steel
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
                  Exceptional Weldability & Toughness
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT supplies AISI 1020, a highly reliable low-carbon steel renowned for its extraordinary weldability, high plasticity, and structural toughness. Due to its lower strength profile compared to high-carbon alloys, it serves perfectly in applications where ductility and formability are prioritized over extreme rigidity, such as cold extrusion.
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
                  Versatile Manufacturing Capabilities
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Whether utilized in hot-rolled or normalized conditions, 1020 steel adapts seamlessly to heavy machinery production. It responds excellently to carburizing and carbonitriding, forming tough, wear-resistant outer layers for gears, camshafts, and transmission components. Diameters smaller than 90mm can be efficiently cold drawn for superior finishes.
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
                  Massive Engineering Dimensions in KSA
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds an unparalleled inventory of 1020 mild steel to fuel Saudi Arabia's industrial expansion. We supply heavy plates reaching up to 3000mm in thickness and massive round bars up to Ø 3000mm. Our local processing centers ensure every block, plate, and flat bar is precision-sawn to your exact tolerances.
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