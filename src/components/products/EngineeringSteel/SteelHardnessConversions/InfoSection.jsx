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
            Technical Insights
          </h1>
          <p className="text-lg font-medium text-primary">
            Understanding Steel Hardness & Heat Treated Conditions
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
                  The Science of Hardness Scales
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Hardness testing evaluates a metal's resistance to permanent indentation. The engineering sector primarily relies on four scales: Brinell (HB), Rockwell C (HRC) for harder metals, Rockwell B (HRB) for softer metals, and Vickers (HV). Because each method utilizes a different testing apparatus—such as a 10mm ball for Brinell or a diamond pyramid for Vickers—direct conversion requires specialized reference charts.
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
                  Heat Treated Conditions (Q to Z)
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  When engineering steels are hardened and tempered, they are categorized into specific condition codes ranging from 'Q' to 'Z'. For example, the highly popular 'T' condition dictates a tensile strength of 850-1000 N/mm² and a Brinell hardness of 248-302. IKT utilizes these standard designations to ensure you receive materials that strictly adhere to your required structural load capacities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Important Disclaimer */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Important Conversion Disclaimer
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  While IKT provides these charts as a comprehensive engineering tool, please note that conversions between scales are approximate. Since various tests measure different combinations of material properties, absolute confidence limits cannot be mathematically guaranteed. Always refer to your specific material certifications for exact values.
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