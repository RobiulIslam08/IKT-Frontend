/* eslint-disable no-unused-vars */
'use client';
import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export default function InfoSection() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sector Overview</h1>
          <p className="text-base font-medium text-primary">Oil & Gas Industry — Steel & Materials Solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><Target className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Upstream Exploration Materials</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT supplies API 5CT casing, tubing, and drill pipe steel for upstream oil and gas exploration. Our materials meet API, NACE, and ISO specifications for downhole equipment, providing the tensile strength and corrosion resistance essential for deep well operations in Saudi Arabia.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Midstream Pipeline Solutions</h2><p className="text-base font-medium text-gray-700 leading-relaxed">For natural gas and crude oil transportation, IKT provides API 5L Grade B, X42 through X70 linepipe steel. Our pipeline materials ensure long-term structural integrity, weld quality, and sour service compliance for KSA\'s expanding gas pipeline infrastructure.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Downstream Refinery Materials</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT delivers chrome-moly pressure vessel steels, stainless steel, and heat-resistant alloys for downstream refinery and petrochemical processing equipment. Our materials withstand hydrogen, sulfur, and high-temperature hydrocarbon environments.</p></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}