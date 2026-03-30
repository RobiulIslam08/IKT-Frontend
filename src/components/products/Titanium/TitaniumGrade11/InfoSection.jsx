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
            Palladium-Stabilized Titanium Grade 11 (UNS R56320 / 3.7195)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1 */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Palladium-Stabilized Resistance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed text-left">
                  Titanium Grade 11 is effectively Titanium Grade 1 with a small addition of palladium (0.12 - 0.25%). This precise alloying grants the material absolute superiority in resisting crevice corrosion and pitting in reducing environments. While maintaining the highest ductility and cold formability of any titanium alloy, Grade 11 provides a critical defense barrier for Saudi Arabia\'s desalination and pharmaceutical sectors.
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
                  Mechanical Integrity & Stability
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Engineered for stability, Grade 11 maintains its mechanical properties in extreme conditions, ranging from -184°C to +540°C. With a high modulus of elasticity (112 GPa) and very good strength, it serves as a reliable lightweight material for steam condensers and heat exchangers. IKT supplies PED-approved Grade 11 stock, ensuring that pharmaceutical reaction vessels and marine fittings achieve maximum structural longevity.
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
                  Specialized Global Supply in KSA
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a comprehensive supply of certified CP Grade 11 Titanium to Saudi Arabia\'s high-tech industrial sectors. Our inventory includes high-precision seamless pipes, tubing, heavy plates, and solid bars. Sourced from globally recognized manufacturing centers in India, Japan, and the USA, we ensure full traceability and exact certifications for critical procurement operations in the region.
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