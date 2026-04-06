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
          <p className="text-base font-medium text-primary">Engineering Industry — Steel & Materials Solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><Target className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Engineering Steel</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT supplies a comprehensive portfolio of engineering steels including free-cutting steels, case-hardening grades, and high-tensile alloy steels. Our round bars, flat bars, and bright-drawn sections are manufactured to tight dimensional tolerances for precision machining and component fabrication.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Tool Steel and Die Materials</h2><p className="text-base font-medium text-gray-700 leading-relaxed">For toolmaking, mould design, and die-casting, IKT provides D2, H13, P20, and other premium tool steel grades. Our pre-hardened and annealed tool steels reduce lead times for mould and die makers while ensuring superior wear resistance and toughness.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Specialty Alloy Engineering Supply</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT supports complex engineering projects with specialty alloy steels including chrome-moly grades, nitriding steels, and spring steels. Our expert technical team provides metallurgical guidance to ensure the optimal material is selected for each engineering application in KSA.</p></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}