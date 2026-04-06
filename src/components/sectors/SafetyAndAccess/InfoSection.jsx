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
          <p className="text-base font-medium text-primary">Safety and Access Industry — Steel & Materials Solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><Target className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Industrial Access Platforms</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT delivers structural steel for elevated access platforms, mezzanine floors, and maintenance walkways in industrial and chemical plants. Our materials meet OSHA and EN ISO standards for safe working at height, with load-rated grating, handrail sections, and stairway stringers.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Safety Barrier Systems</h2><p className="text-base font-medium text-gray-700 leading-relaxed">From vehicle impact barriers and crash beams to safety guard rails, IKT provides high-strength steel solutions tested to international impact standards. Our safety barrier steel ensures reliable protection across highways, industrial worksites, and public access areas.</p></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></motion.div>
              <div className="flex-1"><h2 className="text-2xl font-bold text-gray-900 mb-3">Fall Prevention Infrastructure</h2><p className="text-base font-medium text-gray-700 leading-relaxed">IKT supplies structural steel for scaffolding systems, temporary access towers, and permanent fall protection anchors. Our certified structural sections ensure the strength and rigidity required for safe construction and maintenance access throughout Saudi Arabia.</p></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}