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
            Commercially Pure (CP) Grade 2 Titanium (UNS R50400 / 3.7035)
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
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Industrial Horsepower & Stability
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Titanium Grade 2 is the most popular grade of titanium for general industrial applications. It offers a moderate strength combined with excellent weldability and ductility. It is highly resistant to corrosive environments, including oxidizing and reducing media, making it NACE approved (MR0175) for use in harsh sour gas conditions found in Saudi Arabian oil fields.
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
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Thermal Performance & Mechanical Integrity
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Engineered for high-temperature stability, Grade 2 Titanium maintains its structural integrity at elevated service temperatures up to 315°C (600°F). With a robust melting point of 1665°C and excellent creep resistance, it serves as a lightweight yet formidable material for heat exchangers, condensors, and high-pressure chemical retorts.
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
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Comprehensive Supply Ecosystem in KSA
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a full-spectrum supply of Grade 2 Titanium components tailored for the Kingdom’s energy and manufacturing sectors. Our certified stock includes seamless pipes, high-performance tubing, industrial plates, and solid round bars. We ensure compliance with ASME SB-338 and SB-348 standards, providing full metallurgical traceability for all KSA procurement operations.
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