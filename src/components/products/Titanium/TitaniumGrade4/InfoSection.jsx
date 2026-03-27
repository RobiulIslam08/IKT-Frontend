/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, Settings, PackageOpen } from 'lucide-react';

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
        <motion.div variants={itemVariants} className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Material Overview</h1>
          <p className="text-lg font-medium text-primary">Titanium Grade 4</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Technical Insights: Titanium Grade 4</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">IKT supplies Titanium Grade 4 to the highest industry standards. This material offers exceptional performance characteristics that make it ideal for critical applications. Our team of metallurgical experts ensures every batch meets stringent quality requirements before delivery to our customers worldwide.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Settings className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Performance & Properties</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">Titanium Grade 4 from IKT delivers outstanding mechanical performance including excellent strength, toughness, and durability. The material undergoes rigorous testing to verify compliance with international standards. IKT recommends this grade for applications where dimensional accuracy and material consistency are paramount.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Forms, Sizes & Availability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">IKT maintains an extensive inventory of Titanium Grade 4 in a wide range of forms, sizes, and finishes to suit your specific requirements. We supply this material in round bars, flat bars, plates, sheets, and custom profiles in both imperial and metric dimensions. Contact IKT for rapid quotation and delivery to your facility.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
