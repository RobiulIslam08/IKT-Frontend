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
            Ti-6Al-4V ELI Titanium Grade 5 (UNS R56400 / 3.7165)
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
                  Ultimate Performance Alpha-Beta Alloy
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed text-left">
                  Ti-6Al-4V Grade 5 is the most widely used titanium alloy globally. Alloyed with 6% Aluminum and 4% Vanadium, it offers a formidable combination of high strength and toughness. The ELI (Extra Low Interstitial) version provides even higher ductility and fracture toughness, essential for the demanding environments of Saudi Arabia\'s energy and defense sectors where failure is not an option.
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
                  Metallurgical Resilience & Thermal Defense
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  With a solidus threshold of 1604°C and a beta transus of 980°C, Grade 5 Titanium is built for extreme thermal exposure. Its low thermal conductivity combined with a high modulus of elasticity (114 GPa) makes it highly resistant to creep and structural fatigue. This makes it ideal for gas turbine transition ducts and high-pressure steam condensers in the region’s massive utility frameworks.
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
                  Global Supply Excellence in KSA
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT serves as a premier stockist for Ti-6Al-4V Grade 5 across the Kingdom. Our inventory strictly adheres to AMS 4930 and 6932 specifications, ensuring medical and aerospace-grade certification. We provide full metallurgical traceability for plates, sheets, round bars, and seamless tubes, sourced from globally recognized manufacturing centers in India, Japan, and the USA.
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