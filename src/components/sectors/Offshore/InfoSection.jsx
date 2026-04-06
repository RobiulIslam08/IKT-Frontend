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
          <p className="text-base font-medium text-primary">Offshore Industry — Steel & Materials Solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><Target className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Offshore Platform Steel</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT provides offshore-grade structural steel conforming to EN 10225, API, and marine class society standards. Our materials support fixed and floating production platforms, jack-up rigs, and FPSO hull structures with certified weldability and impact toughness.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Subsea and Deepwater Materials</h2><p className="text-base font-medium text-gray-700 leading-relaxed">For deepwater subsea applications, IKT supplies duplex stainless steel, super duplex, and high-alloy nickel materials for flowlines, jumpers, and manifold systems. Our subsea-grade materials deliver exceptional corrosion resistance against seawater, CO2, and H2S.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Marine Component Supply</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT\'s marine material range covers offshore jacket steel, riser pipe, mooring chain components, and deck equipment materials. All supply is backed by mill certificates, class society approvals, and third-party inspection documentation.</p></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}