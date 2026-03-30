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
            Palladium-Stabilized Titanium Grade 7 (UNS R52400 / 3.7235)
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
                  Ultimate Corrosion Defense with Palladium
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed text-left">
                  Titanium Grade 7 is a commercially pure alpha alloy that includes a small addition of palladium (0.12 - 0.25%). This precise alloying creates a drastic increase in corrosion resistance, making it the most resilient titanium grade against localized crevice attack and reducing acids. It is functionally identical to Grade 2 in mechanical strength but offers an elite level of chemical stability required for high-concentration brine and acid processing in Saudi Arabia.
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
                  Mechanical Resilience & Thermal Integrity
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  With a solid ultimate tensile strength of 345 MPa and exceptional elongation of 20% in the annealed state, Grade 7 Titanium provides the structural flexibility needed for complex vessel fabrication. It maintains its mechanical integrity at high melting points (1670°C) and is highly responsive to standard welding methods without losing its corrosion-resistant traits. This balance makes it the material of choice for heat exchangers and autoclaves in the energy sector.
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
                  Comprehensive Supply Solutions in KSA
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Supporting the Kingdom\'s massive desalination and petrochemical growth, IKT stocks Grade 7 Titanium in a full range of certified forms. Our inventory includes seamless and welded pipes, high-pressure tubing, heavy plates, and precision fasteners. We ensure full compliance with AMS 4901 and MIL-T-9046J standards, providing metallurgical traceability from globally recognized manufacturing hubs.
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