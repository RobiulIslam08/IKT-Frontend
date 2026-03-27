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
            The Economizer Advantage
          </h1>
          <p className="text-lg font-medium text-primary">
            Pre-Machined Tool Steel Designed for Efficiency
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
                  Strategic Machining Allowances
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT’s Economizer bars are not just standard steel blocks; they are precision pre-machined tool steels integrated with exact positive machining allowances. This ensures that toolmakers have the precise amount of extra material needed to reach their final dimensions without wasting hours grinding away excess bulk stock.
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
                  Premium Execution & Protection
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Every Economizer bar is delivered in a pristine ground or fine-milled execution, guaranteeing a maximum surface roughness of just 3.2 µm. Both bar ends are cleanly saw-cut to specified lengths. Furthermore, to withstand the KSA climate, all materials are heavily rust-protected and securely wrapped in industrial VCI-paper.
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
                  Extensive Multi-Grade Availability
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Whether your project requires high-chrome cold work steel or robust plastic mould blocks, IKT stocks Economizer bars across a massive spectrum of grades. Our Saudi Arabian inventory includes O1, D2, D6, P20S, EN19, 420 Stainless, and H11, available in standard cut lengths of 500mm, 1000mm, and 2000mm.
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