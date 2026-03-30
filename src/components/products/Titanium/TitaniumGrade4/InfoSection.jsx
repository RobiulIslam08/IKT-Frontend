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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Material Overview
          </h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">
            Commercially Pure Grade 4 Titanium (Ti-CP-70 / UNS R50700)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1 */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 text-left">
                  Ultimate Strength in Pure Titanium
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed text-left">
                  Titanium Grade 4, or CP-70, represents the strongest commercially pure titanium grade. It offers high corrosion resistance and excellent impact toughness even in aggressive media. Specifically designed for high-load applications, its chemistry (99% pure Ti) ensures total metallurgical stability. It is the definitive material for high-strength airframe structures and chemical equipment across Saudi Arabia\'s industrial landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Surgical Precision & Biocompatibility
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Compliant with ASTM F67 Grade 4 standards, this unalloyed titanium is the primary choice for surgical implant applications. Its superior strength-to-weight ratio compared to Grades 1, 2, and 3 makes it ideal for medical fixtures, bone plates, and dental implants. IKT supplies certified CP Grade 4 stock (ISO 5832-2), providing surgical tool and implant manufacturers in the region with verified, high-quality material.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Specialized KSA Inventory & Supply
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT maintains a comprehensive stock of CP Grade 4 Titanium in diverse product forms including sheets, plates, round bars, and forgings. Our inventory is strictly compliant with international specifications such as AMS 4901 and ASME SB-265. Sourced from the world\'s leading centers in India, Japan, and Europe, we provide full traceability for critical aviation and medical procurement operations in Saudi Arabia.
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